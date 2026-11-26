import { Link } from "react-router-dom";

export default function AuthLayout({
  children,
  pageClassName = "",
  layoutClassName = "",
  mainClassName = "",
}) {
  return (
    <main className={`ish-auth-page ${pageClassName}`.trim()}>
      <section className={`ish-auth-layout ${layoutClassName}`.trim()}>
        <aside className="ish-auth-brand">
          <div className="ish-brand-backdrop-glow" aria-hidden="true" />
          
          <header className="ish-brand-header">
            <Link to="/" className="ish-brand-logo" aria-label="Ishara AI home">
              <span className="ish-brand-logo-symbol">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 11V6a2 2 0 0 1 4 0v5" />
                  <path d="M11 9V4a2 2 0 0 1 4 0v6" />
                  <path d="M15 10V6a2 2 0 0 1 4 0v7a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3a2 2 0 0 1 4 0v3" />
                </svg>
              </span>
              <span className="ish-brand-name">ishara<span>.ai</span></span>
            </Link>
            <span className="ish-brand-badge">PSL Platform</span>
          </header>

          <div className="ish-brand-message">
            <div className="ish-brand-tagline">Inclusive Accessibility</div>
            <h1>Communication without barriers.</h1>
            <p>
              Bridging the gap between spoken language and Pakistan Sign Language (PSL)
              with human-centered assistive technology.
            </p>

            <ul className="ish-brand-highlights" aria-label="Key platform capabilities">
              <li>
                <span className="ish-highlight-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Real-time Live Camera sign capture</span>
              </li>
              <li>
                <span className="ish-highlight-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>High-definition video upload & validation</span>
              </li>
              <li>
                <span className="ish-highlight-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Curated Pakistan Sign Language Dictionary</span>
              </li>
            </ul>
          </div>

          <footer className="ish-brand-footer">
            <span className="ish-brand-footer-text">
              Designed for Deaf &amp; Hard-of-Hearing Communities in Pakistan
            </span>
          </footer>

          <div className="ish-brand-decoration" aria-hidden="true">
            <div className="ish-deco-circle-1" />
            <div className="ish-deco-circle-2" />
          </div>
        </aside>

        <section className={`ish-auth-main ${mainClassName}`.trim()}>
          {children}
        </section>
      </section>
    </main>
  );
}
