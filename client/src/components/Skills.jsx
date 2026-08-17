import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import Reveal from "./Reveal";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <Reveal>

        <div className="section-title">
          <p>CHAPTER 02</p>
          <h2>SPIDER SENSE</h2>
        </div>

        <p className="skills-intro">
          Every developer has a set of tools. These are mine.
        </p>


        <div className="skills-web">

          {/* ================================= */}
          {/* WEB CONNECTIONS */}
          {/* ================================= */}

          <svg
            className="skills-connections"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid meet"
          >

            <line
              x1="400"
              y1="300"
              x2="400"
              y2="65"
            />

            <line
              x1="400"
              y1="300"
              x2="680"
              y2="150"
            />

            <line
              x1="400"
              y1="300"
              x2="690"
              y2="390"
            />

            <line
              x1="400"
              y1="300"
              x2="400"
              y2="535"
            />

            <line
              x1="400"
              y1="300"
              x2="110"
              y2="390"
            />

            <line
              x1="400"
              y1="300"
              x2="120"
              y2="150"
            />

            <line
              x1="400"
              y1="300"
              x2="680"
              y2="300"
            />

          </svg>


          {/* ================================= */}
          {/* CENTER */}
          {/* ================================= */}

          <div className="skill-center">

            <span>MY</span>

            <strong>STACK</strong>

          </div>


          {/* ================================= */}
          {/* REACT */}
          {/* ================================= */}

          <div className="skill-node node-react">

            <FaReact className="skill-icon react-icon" />

            <strong>React</strong>

            <small>FRONTEND</small>

          </div>


          {/* ================================= */}
          {/* JAVASCRIPT */}
          {/* ================================= */}

          <div className="skill-node node-js">

            <FaJsSquare className="skill-icon js-icon" />

            <strong>JavaScript</strong>

            <small>LANGUAGE</small>

          </div>


          {/* ================================= */}
          {/* AWS / CLOUD */}
          {/* ================================= */}

          <div className="skill-node node-cloud">

            <FaAws className="skill-icon cloud-icon" />

            <strong>Cloud</strong>

            <small>AWS</small>

          </div>


          {/* ================================= */}
          {/* NODE */}
          {/* ================================= */}

          <div className="skill-node node-node">

            <FaNodeJs className="skill-icon node-icon" />

            <strong>Node.js</strong>

            <small>RUNTIME</small>

          </div>


          {/* ================================= */}
          {/* EXPRESS */}
          {/* ================================= */}

          <div className="skill-node node-express">

            <SiExpress className="skill-icon express-icon" />

            <strong>Express</strong>

            <small>BACKEND</small>

          </div>


          {/* ================================= */}
          {/* MONGODB */}
          {/* ================================= */}

          <div className="skill-node node-mongo">

            <SiMongodb className="skill-icon mongo-icon" />

            <strong>MongoDB</strong>

            <small>DATABASE</small>

          </div>


          {/* ================================= */}
          {/* GIT */}
          {/* ================================= */}

          <div className="skill-node node-git">

            <FaGitAlt className="skill-icon git-icon" />

            <strong>Git</strong>

            <small>VERSION CONTROL</small>

          </div>

        </div>


        {/* ================================= */}
        {/* STATUS */}
        {/* ================================= */}

        <div className="skills-footer">

          <span>SPIDER-SENSE</span>

          <div className="sense-dot"></div>

          <span>ACTIVE</span>

        </div>

      </Reveal>

    </section>
  );
}

export default Skills;