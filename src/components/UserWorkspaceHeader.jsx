import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth";
import "./UserWorkspaceHeader.css";

export default function UserWorkspaceHeader({ user }) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const name = user?.full_name?.trim() || user?.email?.split("@")[0] || "User";
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "I";

  function handleLogout() {
    logoutUser();
    navigate("/login", { replace: true });
  }

  const navItems = [
    { label: "Dashboard", path: "/dashboard", end: true },
    { label: "Live Camera", path: "/dashboard/live-camera" },
    { label: "Upload Video", path: "/dashboard/upload-video" },
    { label: "History", path: "/dashboard/translation-history" },
    { label: "Profile", path: "/dashboard/profile-settings" },
  ];

  return (
    <header className="ish-user-header">
      <div className="ish-user-header-left">
        <Link className="ish-user-brand" to="/dashboard" aria-label="Ishara AI Dashboard">
          <span className="ish-user-brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 11V6a2 2 0 0 1 4 0v5" />
              <path d="M11 9V4a2 2 0 0 1 4 0v6" />
              <path d="M15 10V6a2 2 0 0 1 4 0v7a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3a2 2 0 0 1 4 0v3" />
            </svg>
          </span>
          <span className="ish-user-brand-title">ishara<span>.ai</span></span>
        </Link>
        <span className="ish-workspace-pill">Workspace</span>
      </div>

      <nav className="ish-user-nav" aria-label="Workspace navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `ish-user-nav-link ${isActive ? "is-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="ish-user-account">
        <div className="ish-user-account-info">
          <span className="ish-user-avatar" aria-hidden="true" title={name}>
            {initials}
          </span>
          <span className="ish-user-name" title={name}>{name}</span>
        </div>
        <button
          className="ish-user-signout-btn"
          type="button"
          onClick={handleLogout}
          aria-label="Sign out of account"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Sign out</span>
        </button>

        <button
          className="ish-user-mobile-menu-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="ish-user-mobile-drawer" role="dialog" aria-modal="true">
          <nav className="ish-user-mobile-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `ish-user-mobile-nav-link ${isActive ? "is-active" : ""}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              className="ish-user-mobile-signout"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogout();
              }}
            >
              Sign out ({name})
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
