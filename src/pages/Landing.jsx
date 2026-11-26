import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="ish-landing">
      {/* Navigation */}
      <header className="ish-landing-nav">
        <div className="ish-landing-container ish-nav-container">
          <Link to="/" className="ish-landing-brand" aria-label="Ishara AI Homepage">
            <span className="ish-landing-logo-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 11V6a2 2 0 0 1 4 0v5" />
                <path d="M11 9V4a2 2 0 0 1 4 0v6" />
                <path d="M15 10V6a2 2 0 0 1 4 0v7a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3a2 2 0 0 1 4 0v3" />
              </svg>
            </span>
            <span className="ish-landing-brand-text">ishara<span>.ai</span></span>
            <span className="ish-landing-badge">PSL Platform</span>
          </Link>

          <nav className="ish-nav-links" aria-label="Main Navigation">
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>
            <a href="#mission">Accessibility</a>
            <a href="#dictionary">PSL Dictionary</a>
          </nav>

          <div className="ish-nav-actions">
            <Link to="/login" className="ish-nav-link-btn">Sign in</Link>
            <Link to="/signup" className="ish-btn-cta">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Hero Section (Sophisticated Dark Hero) */}
      <section className="ish-hero-dark">
        <div className="ish-hero-glow" aria-hidden="true" />
        <div className="ish-landing-container ish-hero-content">
          <div className="ish-hero-copy">
            <div className="ish-hero-pill">
              <span className="ish-pill-dot" />
              <span>Pakistan Sign Language Accessibility</span>
            </div>

            <h1 className="ish-hero-title">
              Bridging Silence with <span className="ish-hero-highlight">Understanding.</span>
            </h1>

            <p className="ish-hero-description">
              Ishara AI delivers human-centered assistive tools designed for Pakistan Sign Language (PSL).
              Capture gestures via your live camera or upload recorded video clips with precision, accessibility, and respect for the deaf community.
            </p>

            <div className="ish-hero-actions">
              <Link to="/signup" className="ish-btn-primary-glow">
                <span>Start Communicating</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="/login" className="ish-btn-glass">
                Sign In to Dashboard
              </Link>
            </div>

            <div className="ish-hero-metrics">
              <div className="ish-metric-item">
                <strong>Live Capture</strong>
                <span>Direct webcam streaming</span>
              </div>
              <div className="ish-metric-divider" />
              <div className="ish-metric-item">
                <strong>Standard Formats</strong>
                <span>MP4, WebM &amp; AVI support</span>
              </div>
              <div className="ish-metric-divider" />
              <div className="ish-metric-item">
                <strong>Curated Signs</strong>
                <span>Authentic PSL Dictionary</span>
              </div>
            </div>
          </div>

          <div className="ish-hero-visual">
            <div className="ish-visual-card">
              <div className="ish-visual-header">
                <div className="ish-visual-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="ish-visual-title">Live PSL Studio — Preview</div>
                <div className="ish-visual-live-tag">READY</div>
              </div>

              <div className="ish-visual-viewport">
                <div className="ish-viewport-guide">
                  <div className="ish-guide-box">
                    <div className="ish-guide-corner top-left" />
                    <div className="ish-guide-corner top-right" />
                    <div className="ish-guide-corner bottom-left" />
                    <div className="ish-guide-corner bottom-right" />
                    <div className="ish-guide-center">
                      <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#64D8BA" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                        <path d="M12 14v6" strokeDasharray="2 2" />
                      </svg>
                      <span>Position hands and face within frame</span>
                    </div>
                  </div>
                </div>

                <div className="ish-viewport-status-bar">
                  <div className="ish-status-chip">
                    <span className="ish-status-indicator" />
                    <span>Camera Ready</span>
                  </div>
                  <div className="ish-status-chip">
                    <span>1080p • 60 FPS</span>
                  </div>
                </div>
              </div>

              <div className="ish-visual-footer">
                <div className="ish-visual-note">
                  <strong>FYP Phase I Implementation</strong>
                  <span>Webcam stream management, real-time MediaRecorder &amp; PSL repository</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Mission Section (Light Theme) */}
      <section id="mission" className="ish-section ish-section-light">
        <div className="ish-landing-container">
          <div className="ish-section-header">
            <span className="ish-section-eyebrow">Human-Centered Accessibility</span>
            <h2 className="ish-section-title">Designed for the Deaf Community of Pakistan</h2>
            <p className="ish-section-subtitle">
              Over 1.5 million people in Pakistan communicate through Pakistan Sign Language.
              Ishara AI is engineered to champion linguistic inclusion without artificial barriers.
            </p>
          </div>

          <div className="ish-mission-grid">
            <article className="ish-mission-card">
              <div className="ish-card-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                  <path d="M3.6 9h16.8M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </div>
              <h3>Cultural Authenticity</h3>
              <p>
                Built specifically around Pakistan Sign Language (PSL) syntax and non-manual expressions,
                ensuring natural, culturally accurate communication.
              </p>
            </article>

            <article className="ish-mission-card">
              <div className="ish-card-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Privacy-First Video Handling</h3>
              <p>
                Camera streams are processed safely in your browser session with explicit permission controls,
                stream release on navigation, and full user ownership.
              </p>
            </article>

            <article className="ish-mission-card">
              <div className="ish-card-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="m3.27 6.96 8.73 5.04 8.73-5.04M12 22.08V12" />
                </svg>
              </div>
              <h3>Open Knowledge &amp; Growth</h3>
              <p>
                Empowering learners, educators, and families with accessible sign dictionary articles,
                visual guides, and administrative curation tools.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="ish-section ish-section-alt">
        <div className="ish-landing-container">
          <div className="ish-section-header">
            <span className="ish-section-eyebrow">Seamless Workflow</span>
            <h2 className="ish-section-title">How Ishara AI Works</h2>
            <p className="ish-section-subtitle">
              A streamlined, barrier-free process designed to capture and manage sign language recordings effortlessly.
            </p>
          </div>

          <div className="ish-steps-grid">
            <div className="ish-step-card">
              <div className="ish-step-number">01</div>
              <h4>Capture Signing</h4>
              <p>
                Launch the Live Camera studio to record PSL signs directly, or drag and drop a pre-recorded video file from your device.
              </p>
            </div>

            <div className="ish-step-connector" aria-hidden="true" />

            <div className="ish-step-card">
              <div className="ish-step-number">02</div>
              <h4>Validate &amp; Preview</h4>
              <p>
                The system inspects video duration, checks supported codecs (MP4, WebM, AVI), and provides an instant preview for review.
              </p>
            </div>

            <div className="ish-step-connector" aria-hidden="true" />

            <div className="ish-step-card">
              <div className="ish-step-number">03</div>
              <h4>Reference &amp; Archive</h4>
              <p>
                Review recorded clips, save them to your session history, and cross-reference gestures against the PSL dictionary repository.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="ish-section ish-section-light">
        <div className="ish-landing-container">
          <div className="ish-section-header">
            <span className="ish-section-eyebrow">Current Capabilities</span>
            <h2 className="ish-section-title">Everything Built for Real-World Usage</h2>
            <p className="ish-section-subtitle">
              Fully working tools ready today in the Ishara AI workspace.
            </p>
          </div>

          <div className="ish-features-grid">
            <div className="ish-feature-item">
              <div className="ish-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                  <path d="m16 10 6-4v12l-6-4z" />
                </svg>
              </div>
              <h3>Live Camera Recording Studio</h3>
              <p>
                Access real-time camera controls with browser-level security, instant recording timer, pause/resume mechanisms, and local video review.
              </p>
              <ul className="ish-feature-bullets">
                <li>Automatic permission negotiation</li>
                <li>Clear framing tips for upper-body gestures</li>
                <li>Zero lag local preview</li>
              </ul>
            </div>

            <div className="ish-feature-item">
              <div className="ish-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <h3>Video Upload &amp; Validation</h3>
              <p>
                Easily import previously captured PSL footage. Validate file size (up to 250 MB), check aspect ratios, and preview immediately.
              </p>
              <ul className="ish-feature-bullets">
                <li>Drag-and-drop or manual picker</li>
                <li>Comprehensive error &amp; size checks</li>
                <li>WebM, MP4, and AVI support</li>
              </ul>
            </div>

            <div className="ish-feature-item">
              <div className="ish-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3>PSL Dictionary &amp; Knowledge Base</h3>
              <p>
                Comprehensive sign library indexed by categories including Greetings, Travel, Daily Living, and Educational terminology.
              </p>
              <ul className="ish-feature-bullets">
                <li>Searchable sign vocabulary</li>
                <li>Curated by administrative reviewers</li>
                <li>Accessible definitions &amp; descriptions</li>
              </ul>
            </div>

            <div className="ish-feature-item">
              <div className="ish-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>JWT Auth &amp; Enterprise Admin</h3>
              <p>
                Secure password hashing, email verification, session tokens, audit logs, and complete administrative management capabilities.
              </p>
              <ul className="ish-feature-bullets">
                <li>Role-based access controls</li>
                <li>System logs &amp; activity monitoring</li>
                <li>User lifecycle management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ish-landing-cta">
        <div className="ish-landing-container">
          <div className="ish-cta-box">
            <div className="ish-cta-content">
              <h2>Ready to Experience Barrier-Free Communication?</h2>
              <p>
                Create your account today to access the live camera recording studio and Pakistan Sign Language resources.
              </p>
              <div className="ish-cta-buttons">
                <Link to="/signup" className="ish-btn-cta-lg">Create Free Account</Link>
                <Link to="/login" className="ish-btn-cta-outline">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ish-landing-footer">
        <div className="ish-landing-container ish-footer-grid">
          <div className="ish-footer-brand">
            <Link to="/" className="ish-landing-brand">
              <span className="ish-landing-brand-text">ishara<span>.ai</span></span>
            </Link>
            <p>
              Pakistan Sign Language (PSL) assistive communication and dictionary platform.
              Building tools that make inclusive communication everyday reality.
            </p>
          </div>

          <div className="ish-footer-links">
            <div className="ish-footer-col">
              <strong>Platform</strong>
              <Link to="/dashboard">User Workspace</Link>
              <Link to="/dashboard/live-camera">Live Camera</Link>
              <Link to="/dashboard/upload-video">Video Upload</Link>
              <Link to="/dashboard/translation-history">History</Link>
            </div>

            <div className="ish-footer-col">
              <strong>Account</strong>
              <Link to="/login">Sign In</Link>
              <Link to="/signup">Register</Link>
              <Link to="/forgot-password">Reset Password</Link>
              <Link to="/admin">Admin Portal</Link>
            </div>

            <div className="ish-footer-col">
              <strong>Commitment</strong>
              <span>PSL Standardization</span>
              <span>Accessibility First</span>
              <span>Privacy Guaranteed</span>
              <span>FYP Phase I</span>
            </div>
          </div>
        </div>

        <div className="ish-landing-container ish-footer-bottom">
          <p>© {new Date().getFullYear()} Ishara AI. Communication without barriers.</p>
          <span className="ish-footer-note">Honoring the Deaf &amp; Hard-of-Hearing Community of Pakistan</span>
        </div>
      </footer>
    </div>
  );
}
