import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="about-section">

      <Reveal>

        <div className="section-title">
          <p>CHAPTER 01</p>
          <h2>ORIGIN STORY</h2>
        </div>


        <div className="about-container">

          {/* IMAGE */}

          <div className="about-image">

            <div className="image-frame">

              <div className="profile-placeholder">
                KM
              </div>

            </div>

          </div>


          {/* CONTENT */}

          <div className="about-content">

            <span className="about-label">
              BEHIND THE MASK
            </span>


            <h3>
              Turning ideas into
              <span> digital experiences.</span>
            </h3>


            <p>
              I'm Karthikeya, a developer who enjoys building
              full-stack web applications and exploring modern
              technologies.
            </p>


            <p>
              I work with JavaScript, React, Node.js, Express
              and MongoDB to create applications that are
              functional, scalable and enjoyable to use.
            </p>


            <p>
              Currently exploring the intersection of
              Full Stack Development, Cloud and AI.
            </p>


            <div className="about-stats">

              <div className="stat">
                <strong>03+</strong>
                <span>PROJECTS</span>
              </div>


              <div className="stat">
                <strong>01+</strong>
                <span>YEAR EXPERIENCE</span>
              </div>


              <div className="stat">
                <strong>∞</strong>
                <span>IDEAS</span>
              </div>

            </div>

          </div>

        </div>

      </Reveal>

    </section>
  );
}

export default About;