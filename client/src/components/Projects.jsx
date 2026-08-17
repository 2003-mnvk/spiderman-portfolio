import Reveal from "./Reveal";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <Reveal>

        <div className="section-title">
          <p>CHAPTER 03</p>
          <h2>WEB ARCHIVE</h2>
        </div>

        <p className="projects-intro">
          Projects built, deployed and ready for action.
        </p>

        <div className="projects-grid">

          {/* ================================= */}
          {/* PROJECT 01 */}
          {/* ================================= */}

          <article className="project-card">

            <div className="project-top">

              <span className="case-number">
                CASE FILE // 001
              </span>

              <span className="case-status">
                ● COMPLETE
              </span>

            </div>

            <div className="project-image finance-image">

              <div className="project-image-overlay">
                <span>FINANCE SYSTEM</span>
              </div>

            </div>

            <div className="project-content">

              <span className="project-category">
                FULL STACK APPLICATION
              </span>

              <h3>
                Finance Tracker
              </h3>

              <p>
                A full-stack personal finance application
                designed to track income, expenses and
                financial activity through a clean dashboard.
              </p>

              <div className="tech-stack">

                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>JWT</span>

              </div>

              <div className="project-actions">

                <a
                  href="YOUR_EXISTING_FINANCE_LIVE_URL"
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE DEMO
                  <span>↗</span>
                </a>

                <a
                  href="YOUR_EXISTING_FINANCE_GITHUB_URL"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                  <span>↗</span>
                </a>

              </div>

            </div>

            <div className="project-scan"></div>

          </article>


          {/* ================================= */}
          {/* PROJECT 02 */}
          {/* ================================= */}

          <article className="project-card">

            <div className="project-top">

              <span className="case-number">
                CASE FILE // 002
              </span>

              <span className="case-status">
                ● COMPLETE
              </span>

            </div>

            <div className="project-image url-image">

              <div className="project-image-overlay">
                <span>URL SYSTEM</span>
              </div>

            </div>

            <div className="project-content">

              <span className="project-category">
                MERN APPLICATION
              </span>

              <h3>
                URL Shortener
              </h3>

              <p>
                A MERN-based URL shortening service that
                transforms long URLs into short,
                shareable links.
              </p>

              <div className="tech-stack">

                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>

              </div>

              <div className="project-actions">

                <a
                  href="YOUR_EXISTING_URL_SHORTENER_LIVE_URL"
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE DEMO
                  <span>↗</span>
                </a>

                <a
                  href="YOUR_EXISTING_URL_SHORTENER_GITHUB_URL"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                  <span>↗</span>
                </a>

              </div>

            </div>

            <div className="project-scan"></div>

          </article>


          {/* ================================= */}
          {/* PROJECT 03 */}
          {/* ================================= */}

          <article className="project-card project-coming">

            <div className="project-top">

              <span className="case-number">
                CASE FILE // 003
              </span>

              <span className="case-status classified-status">
                ● CLASSIFIED
              </span>

            </div>

            <div className="project-image future-image">

              <div className="project-image-overlay">
                <span>REDACTED</span>
              </div>

            </div>

            <div className="project-content">

              <span className="project-category">
                NEXT MISSION
              </span>

              <h3>
                Classified Project
              </h3>

              <p>
                A new mission is currently under
                development. Details will be revealed
                when the web is ready.
              </p>

              <div className="tech-stack">

                <span>React</span>
                <span>Node.js</span>
                <span>AI</span>
                <span>Cloud</span>

              </div>

              <div className="classified-text">
                ACCESS DENIED
              </div>

            </div>

            <div className="project-scan"></div>

          </article>

        </div>

      </Reveal>

    </section>
  );
}

export default Projects;