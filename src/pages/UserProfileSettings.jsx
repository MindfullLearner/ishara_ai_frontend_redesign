import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth";
import UserWorkspaceHeader from "../components/UserWorkspaceHeader";
import "./UserProfileSettings.css";

function getInitials(fullName) {
  return fullName?.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "I";
}

function Icon({ name }) {
  const paths = {
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></>,
    shield: <><path d="M12 3 4 6v5c0 5 3.3 8 8 10 4.7-2 8-5 8-10V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></>,
    logout: <><path d="M10 17 15 12 10 7m5 5H3" /><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" /></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m21 15-5-5L5 20" /></>,
    edit: <><path d="m14 5 5 5M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" /></>,
  };
  return <svg className="ish-profile-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}

function UserProfileSettings({ user }) {
  const navigate = useNavigate();
  const pictureInputRef = useRef(null);
  const picturePreviewRef = useRef("");
  const fullName = user?.full_name?.trim() || "Name unavailable";
  const originalFullName = user?.full_name?.trim() || "";
  const email = user?.email || "Email unavailable";
  const verified = typeof user?.is_verified === "boolean" ? user.is_verified : null;
  const [isEditing, setIsEditing] = useState(false);
  const [nameDraft, setNameDraft] = useState(originalFullName);
  const [nameError, setNameError] = useState("");
  const [picturePreviewUrl, setPicturePreviewUrl] = useState("");
  const [pictureError, setPictureError] = useState("");
  const [saveNotice, setSaveNotice] = useState("");

  useEffect(() => () => {
    if (picturePreviewRef.current) URL.revokeObjectURL(picturePreviewRef.current);
  }, []);

  function clearPicturePreview() {
    if (picturePreviewRef.current) URL.revokeObjectURL(picturePreviewRef.current);
    picturePreviewRef.current = "";
    setPicturePreviewUrl("");
  }

  function beginEditing() {
    setNameDraft(originalFullName);
    setNameError("");
    setPictureError("");
    setSaveNotice("");
    setIsEditing(true);
  }

  function cancelEditing() {
    setNameDraft(originalFullName);
    setNameError("");
    setPictureError("");
    setSaveNotice("");
    clearPicturePreview();
    if (pictureInputRef.current) pictureInputRef.current.value = "";
    setIsEditing(false);
  }

  function handlePictureChange(event) {
    const picture = event.target.files?.[0];
    event.target.value = "";
    if (!picture) return;

    clearPicturePreview();
    setPictureError("");
    setSaveNotice("");
    if (!picture.type.startsWith("image/")) {
      setPictureError("Choose an image file to preview your profile picture.");
      return;
    }
    if (picture.size > 5 * 1024 * 1024) {
      setPictureError("Choose an image smaller than 5 MB.");
      return;
    }

    const previewUrl = URL.createObjectURL(picture);
    picturePreviewRef.current = previewUrl;
    setPicturePreviewUrl(previewUrl);
  }

  function handleSave(event) {
    event.preventDefault();
    const trimmedName = nameDraft.trim();
    if (!trimmedName) {
      setNameError("Full name is required.");
      setSaveNotice("");
      return;
    }
    if (trimmedName.length < 2) {
      setNameError("Full name must be at least 2 characters.");
      setSaveNotice("");
      return;
    }
    if (trimmedName.length > 100) {
      setNameError("Full name must be 100 characters or fewer.");
      setSaveNotice("");
      return;
    }

    setNameDraft(trimmedName);
    setNameError("");
    setSaveNotice("This is a temporary preview only. Profile updates cannot be saved to your account yet.");
  }

  function handleLogout() {
    logoutUser();
    navigate("/login", { replace: true });
  }

  return (
    <div className="ish-profile-page">
      <UserWorkspaceHeader user={user} />

      <main className="ish-profile-shell">
        <section className="ish-profile-heading">
          <div>
            <h1>Profile &amp; Settings</h1>
            <p>View your personal details and account preferences.</p>
          </div>
          <Link className="ish-profile-back" to="/dashboard">
            ← Back to Dashboard
          </Link>
        </section>

        {/* Identity Summary Card */}
        <section className="ish-profile-identity" aria-label="Account summary">
          <div className="ish-avatar-container">
            <span className="ish-profile-large-avatar" aria-hidden="true">
              {getInitials(user?.full_name)}
            </span>
          </div>

          <div className="ish-profile-identity-copy">
            <h2>{fullName}</h2>
            <p>{email}</p>
          </div>

          <div className="ish-identity-right">
            {verified === null ? (
              <span className="ish-profile-verification is-unknown">Status unavailable</span>
            ) : (
              <span className={`ish-profile-verification ${verified ? "is-verified" : "is-unverified"}`}>
                <i />
                {verified ? "Email verified" : "Email not verified"}
              </span>
            )}
            {!isEditing && (
              <button className="ish-profile-edit-button" type="button" onClick={beginEditing}>
                <Icon name="edit" />
                Edit Profile
              </button>
            )}
          </div>
        </section>

        {isEditing ? (
          <form className="ish-profile-edit-form" onSubmit={handleSave} noValidate>
            {saveNotice && (
              <div className="ish-profile-edit-notice" role="status">
                <Icon name="shield" />
                <div>
                  <strong>Changes are not saved</strong>
                  <span>{saveNotice}</span>
                </div>
              </div>
            )}

            <section className="ish-profile-edit-identity" aria-label="Temporary profile preview">
              <div className="ish-profile-picture-wrap">
                {picturePreviewUrl ? (
                  <img
                    className="ish-profile-large-avatar ish-profile-picture-preview"
                    src={picturePreviewUrl}
                    alt="Temporary profile picture preview"
                    onError={() => {
                      if (picturePreviewRef.current !== picturePreviewUrl) return;
                      clearPicturePreview();
                      setPictureError("This image could not be previewed. Choose a different image.");
                    }}
                  />
                ) : (
                  <span className="ish-profile-large-avatar" aria-hidden="true">
                    {getInitials(nameDraft)}
                  </span>
                )}
                <input
                  ref={pictureInputRef}
                  id="ish-profile-picture"
                  className="ish-profile-picture-input"
                  type="file"
                  accept="image/*"
                  onChange={handlePictureChange}
                />
                <label className="ish-profile-picture-button" htmlFor="ish-profile-picture">
                  <Icon name="image" />
                  Upload Photo
                </label>
              </div>

              <div className="ish-profile-identity-copy">
                <h2>{nameDraft.trim() || fullName}</h2>
                <p>{email}</p>
                <span className="ish-profile-preview-label">Local preview only</span>
              </div>
            </section>

            <section className="ish-profile-edit-grid" aria-label="Edit profile details">
              <article className="ish-profile-card">
                <div className="ish-profile-card-title">
                  <span><Icon name="user" /></span>
                  <h2>Personal Information</h2>
                </div>
                <label className="ish-profile-field" htmlFor="ish-profile-full-name">
                  Full Name
                  <input
                    id="ish-profile-full-name"
                    name="full_name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    value={nameDraft}
                    onChange={(event) => {
                      setNameDraft(event.target.value);
                      setNameError("");
                      setSaveNotice("");
                    }}
                    aria-invalid={Boolean(nameError)}
                    aria-describedby={nameError ? "ish-profile-name-error" : undefined}
                  />
                  {nameError && (
                    <span className="ish-profile-field-error" id="ish-profile-name-error">
                      {nameError}
                    </span>
                  )}
                </label>
              </article>

              <article className="ish-profile-card">
                <div className="ish-profile-card-title">
                  <span><Icon name="mail" /></span>
                  <h2>Account Information</h2>
                </div>
                <label className="ish-profile-field" htmlFor="ish-profile-email">
                  Email Address
                  <input id="ish-profile-email" type="email" value={email} readOnly aria-readonly="true" />
                  <span className="ish-profile-readonly-note">Email address cannot be changed from this interface.</span>
                </label>
              </article>
            </section>

            {pictureError && <p className="ish-profile-picture-error" role="alert">{pictureError}</p>}
            <p className="ish-profile-edit-help">
              Profile updates in Phase I are local previews. Backend synchronization is planned for Phase II.
            </p>
            <div className="ish-profile-edit-actions">
              <button className="ish-profile-cancel-button" type="button" onClick={cancelEditing}>
                Cancel
              </button>
              <button className="ish-profile-save-button" type="submit">
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <>
            <section className="ish-profile-details" aria-label="Profile information">
              <article className="ish-profile-card">
                <div className="ish-profile-card-title">
                  <span><Icon name="user" /></span>
                  <h2>Personal Information</h2>
                </div>
                <dl className="ish-profile-dl">
                  <div>
                    <dt>Full Name</dt>
                    <dd>{fullName}</dd>
                  </div>
                </dl>
                <p className="ish-profile-support-note">Your display name for Ishara AI workspace.</p>
              </article>

              <article className="ish-profile-card">
                <div className="ish-profile-card-title">
                  <span><Icon name="mail" /></span>
                  <h2>Account Details</h2>
                </div>
                <dl className="ish-profile-dl">
                  <div>
                    <dt>Email Address</dt>
                    <dd>{email}</dd>
                  </div>
                  <div>
                    <dt>Verification Status</dt>
                    <dd>{verified === null ? "Status unavailable" : verified ? "Verified" : "Not verified"}</dd>
                  </div>
                </dl>
              </article>
            </section>

            <section className="ish-profile-settings" aria-label="Account settings">
              <article className="ish-profile-setting-card">
                <span className="ish-profile-setting-icon"><Icon name="lock" /></span>
                <div className="ish-profile-setting-copy">
                  <h2>Password &amp; Security</h2>
                  <p>Request a secure password reset link sent to your registered email.</p>
                </div>
                <Link className="ish-profile-setting-action" to="/forgot-password">
                  Request Password Reset
                </Link>
              </article>

              <article className="ish-profile-setting-card">
                <span className="ish-profile-setting-icon"><Icon name="shield" /></span>
                <div className="ish-profile-setting-copy">
                  <h2>Session Management</h2>
                  <p>Safely log out of your current account session on this device.</p>
                </div>
                <button className="ish-profile-setting-action is-signout" type="button" onClick={handleLogout}>
                  <Icon name="logout" />
                  Sign Out
                </button>
              </article>
            </section>

            <p className="ish-profile-footer">
              <Icon name="check" />
              Your account details are securely encrypted and verified.
            </p>
          </>
        )}
      </main>
    </div>
  );
}

export default UserProfileSettings;
