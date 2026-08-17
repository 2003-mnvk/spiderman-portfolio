import Reveal from "./Reveal";

function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
    >

      <Reveal>

        <div className="section-title">

          <p>CHAPTER 04</p>

          <h2>DAILY BUGLE FILES</h2>

        </div>


        <p className="experience-intro">
          A record of the missions, education and experience
          that shaped the developer behind the mask.
        </p>


        <div className="timeline">

          {/* EXPERIENCE */}

          <div className="timeline-item">

            <div className="timeline-date">
              2025 — PRESENT
            </div>


            <div className="timeline-dot"></div>


            <article className="bugle-card">

              <div className="bugle-header">

                <span>
                  THE DAILY BUGLE
                </span>

                <span>
                  TECHNOLOGY
                </span>

              </div>


              <div className="bugle-content">

                <p className="classified-label">
                  FIELD REPORT #001
                </p>


                <h3>
                  SAP Consultant
                </h3>


                <h4>
                  TCS — Tata Consultancy Services
                </h4>


                <p>
                  Working with SAP Sales and Distribution
                  while developing hands-on experience with
                  enterprise business processes and S/4HANA
                  concepts.
                </p>


                <div className="experience-tags">

                  <span>SAP SD</span>
                  <span>S/4HANA</span>
                  <span>Order to Cash</span>
                  <span>Enterprise Systems</span>

                </div>

              </div>

            </article>

          </div>


          {/* EDUCATION */}

          <div className="timeline-item">

            <div className="timeline-date">
              2021 — 2025
            </div>


            <div className="timeline-dot"></div>


            <article className="bugle-card">

              <div className="bugle-header">

                <span>
                  THE DAILY BUGLE
                </span>

                <span>
                  EDUCATION
                </span>

              </div>


              <div className="bugle-content">

                <p className="classified-label">
                  ORIGIN FILE #002
                </p>


                <h3>
                  Computer Science / Engineering
                </h3>


                <h4>
                  KL University
                </h4>


                <p>
                  Built a foundation in computer science and
                  software development while exploring web
                  technologies, programming and application
                  development.
                </p>


                <div className="experience-tags">

                  <span>Computer Science</span>
                  <span>Programming</span>
                  <span>Web Development</span>

                </div>

              </div>

            </article>

          </div>


          {/* CURRENT MISSION */}

          <div className="timeline-item">

            <div className="timeline-date">
              2026 — NEXT
            </div>


            <div className="timeline-dot active"></div>


            <article className="bugle-card current-mission">

              <div className="bugle-header">

                <span>
                  CLASSIFIED
                </span>

                <span>
                  MISSION
                </span>

              </div>


              <div className="bugle-content">

                <p className="classified-label">
                  CURRENT OBJECTIVE
                </p>


                <h3>
                  THE NEXT WEB
                </h3>


                <p>
                  Expanding into Full Stack Development,
                  Cloud and AI while building production-ready
                  applications and new creative projects.
                </p>


                <div className="mission-status">

                  <span className="status-dot"></span>

                  MISSION IN PROGRESS

                </div>

              </div>

            </article>

          </div>

        </div>

      </Reveal>

    </section>
  );
}

export default Experience;