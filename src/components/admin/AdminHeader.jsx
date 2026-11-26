import { useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../api/auth";

const ROUTE_TITLES = {
  "/admin": "System Overview",
  "/admin/users": "User Management",
  "/admin/users/add": "Add New User",
  "/admin/psl-dictionary": "PSL Dictionary",
  "/admin/psl-dictionary/add": "Add New Sign",
  "/admin/knowledge-base": "Knowledge Base",
  "/admin/knowledge-base/add": "Add New Article",
  "/admin/system-logs": "System Logs",
  "/admin/processing-activity": "Processing Activity",
  "/admin/profile-settings": "Profile & Settings",
};

function AdminHeader({ user }) {
  const navigate = useNavigate();
  const location = useLocation();

  const name = user?.full_name?.trim() || user?.email?.split("@")[0] || "Administrator";
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "AD";

  const currentTitle = ROUTE_TITLES[location.pathname] || (
    location.pathname.includes("/admin/users/edit") ? "Edit User" :
    location.pathname.includes("/admin/psl-dictionary/edit") ? "Edit Sign" :
    location.pathname.includes("/admin/knowledge-base/edit") ? "Edit Article" :
    "Administration"
  );

  function handleLogout() {
    logoutUser();
    navigate("/login", { replace: true });
  }

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <div className="admin-breadcrumb">
          <span className="admin-breadcrumb-root">Admin</span>
          <span className="admin-breadcrumb-sep">/</span>
          <h1 className="admin-header-title">{currentTitle}</h1>
        </div>
      </div>

      <div className="admin-header-account">
        <div className="admin-status-indicator" title="Connected to PostgreSQL backend">
          <span className="admin-status-dot" />
          <span className="admin-status-text">Live System</span>
        </div>

        <div className="admin-header-divider" />

        <div className="admin-header-identity">
          <strong>{name}</strong>
          {user?.email && <small>{user.email}</small>}
        </div>

        <div className="admin-header-avatar" title={name} aria-hidden="true">
          {initials}
        </div>

        <button
          type="button"
          className="admin-header-signout"
          onClick={handleLogout}
          aria-label="Sign out of administrator session"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Sign out</span>
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;
