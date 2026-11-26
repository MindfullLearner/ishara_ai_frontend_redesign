import { Link, useNavigate } from "react-router-dom";
import UserWorkspaceHeader from "../components/UserWorkspaceHeader";
import "./Dashboard.css";

export default function Dashboard({ user }) {
  const navigate = useNavigate();
  const name = user?.full_name?.trim() || user?.email?.split("@")[0] || "there";

  return (
    <div className="ish-user-dashboard">
      <UserWorkspaceHeader user={user} />

      <main className="ish-user-content">
        <div className="ish-user-container">
          {/* Welcome Banner */}
          <section className="ish-user-welcome-card" aria-labelledby="user-welcome-title">
            <div className="ish-welcome-glow" aria-hidden="true" />
            <div className="ish-welcome-inner">
              <div className="ish-welcome-badge">
                <span className="ish-badge-dot" />
                <span>Pakistan Sign Language Studio</span>
              </div>
              <h1 id="user-welcome-title">
                Welcome back, <span className="ish-name-accent">{name}</span>!
              </h1>
              <p>
                Ready to translate or record PSL signs? Choose an option below to start your session.
              </p>
            </div>
            <div className="ish-welcome-stats-bar">
              <div className="ish-welcome-stat">
                <span className="ish-stat-label">Camera Status</span>
                <span className="ish-stat-val is-online">● Ready to connect</span>
              </div>
              <div className="ish-welcome-stat">
                <span className="ish-stat-label">Video Formats</span>
                <span className="ish-stat-val">MP4, WebM, AVI</span>
              </div>
              <div className="ish-welcome-stat">
                <span className="ish-stat-label">Max File Size</span>
                <span className="ish-stat-val">250 MB</span>
              </div>
            </div>
          </section>

          {/* Quick Action Cards */}
          <section className="ish-actions-grid" aria-label="Translation Options">
            {/* Live Camera Card */}
            <article className="ish-action-card ish-card-camera">
              <div className="ish-action-card-header">
                <div className="ish-action-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                    <path d="m16 10 6-4v12l-6-4z" />
                  </svg>
                </div>
                <span className="ish-card-tag is-live">Live Stream</span>
              </div>
              <div className="ish-action-card-body">
                <h2>Use Live Camera</h2>
                <p>
                  Record gestures directly using your webcam. Features live framing guidelines, instant review playback, and stream controls.
                </p>
              </div>
              <div className="ish-action-card-footer">
                <button
                  type="button"
                  className="ish-action-btn-primary"
                  onClick={() => navigate("/dashboard/live-camera")}
                >
                  <span>Open Camera Studio</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </article>

            {/* Video Upload Card */}
            <article className="ish-action-card ish-card-upload">
              <div className="ish-action-card-header">
                <div className="ish-action-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <span className="ish-card-tag is-recorded">Pre-recorded</span>
              </div>
              <div className="ish-action-card-body">
                <h2>Upload a Video</h2>
                <p>
                  Import a pre-recorded PSL video clip from your computer. Validates format compatibility, inspects duration, and previews playback.
                </p>
              </div>
              <div className="ish-action-card-footer">
                <button
                  type="button"
                  className="ish-action-btn-secondary"
                  onClick={() => navigate("/dashboard/upload-video")}
                >
                  <span>Upload Video Clip</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </article>
          </section>

          {/* Recent Translations Section (Honest representation of real data) */}
          <section className="ish-history-panel" aria-labelledby="dashboard-history-title">
            <div className="ish-history-panel-header">
              <div>
                <h2 id="dashboard-history-title">Recent Activity</h2>
                <p>Your recorded clips and translation sessions</p>
              </div>
              <Link to="/dashboard/translation-history" className="ish-panel-link">
                View all history →
              </Link>
            </div>

            <div className="ish-history-empty">
              <div className="ish-empty-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <line x1="10" y1="4" x2="10" y2="20" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <strong>No translation records yet</strong>
              <p>
                Start by recording through your live camera or uploading a video file. Your translation records will be organized here.
              </p>
              <div className="ish-empty-actions">
                <button
                  type="button"
                  className="ish-btn-sm-primary"
                  onClick={() => navigate("/dashboard/live-camera")}
                >
                  Launch Live Camera
                </button>
                <button
                  type="button"
                  className="ish-btn-sm-secondary"
                  onClick={() => navigate("/dashboard/upload-video")}
                >
                  Choose Video File
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="ish-user-workspace-footer">
        <div className="ish-user-container ish-footer-inner">
          <span>Ishara AI • Pakistan Sign Language Assistive Technology</span>
          <span className="ish-footer-subtext">Communication without barriers.</span>
        </div>
      </footer>
    </div>
  );
}
