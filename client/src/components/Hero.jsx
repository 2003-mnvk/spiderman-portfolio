import { useEffect, useState } from "react";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({
        x,
        y,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero">

      {/* ================================= */}
      {/* BACKGROUND WEB */}
      {/* ================================= */}

      <div
        className="hero-web"
        style={{
          transform: `
            translate(
              ${mousePosition.x * 12}px,
              ${mousePosition.y * 12}px
            )
          `,
        }}
      >

        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >

          <circle
            cx="500"
            cy="500"
            r="120"
          />

          <circle
            cx="500"
            cy="500"
            r="220"
          />

          <circle
            cx="500"
            cy="500"
            r="330"
          />

          <circle
            cx="500"
            cy="500"
            r="450"
          />

          <line
            x1="500"
            y1="500"
            x2="500"
            y2="0"
          />

          <line
            x1="500"
            y1="500"
            x2="850"
            y2="150"
          />

          <line
            x1="500"
            y1="500"
            x2="1000"
            y2="500"
          />

          <line
            x1="500"
            y1="500"
            x2="850"
            y2="850"
          />

          <line
            x1="500"
            y1="500"
            x2="500"
            y2="1000"
          />

          <line
            x1="500"
            y1="500"
            x2="150"
            y2="850"
          />

          <line
            x1="500"
            y1="500"
            x2="0"
            y2="500"
          />

          <line
            x1="500"
            y1="500"
            x2="150"
            y2="150"
          />

        </svg>

      </div>


      {/* ================================= */}
      {/* HERO CONTENT */}
      {/* ================================= */}

      <div className="hero-content">

        <p className="hero-small">
          THE WEB-SLINGER'S PORTFOLIO
        </p>


        <h1>
          KARTHIKEYA
        </h1>


        <h2>
          FULL STACK DEVELOPER
        </h2>


        <p className="hero-description">
          Building modern web experiences with code,
          creativity and a little bit of chaos.
        </p>


        <button
          className="web-button"
          onClick={scrollToAbout}
        >

          <span>
            ENTER THE WEB
          </span>

          <span className="web-button-arrow">
            →
          </span>

        </button>

      </div>


      {/* ================================= */}
      {/* SPIDER */}
      {/* ================================= */}

      <div
        className="hero-spider"
        style={{
          transform: `
            translate(
              ${mousePosition.x * -18}px,
              ${mousePosition.y * -18}px
            )
            rotate(${mousePosition.x * 4}deg)
          `,
        }}
      >

        <div className="spider-symbol">
          🕷
        </div>

      </div>


      {/* ================================= */}
      {/* SCROLL INDICATOR */}
      {/* ================================= */}

      <div className="hero-scroll">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line"></div>

      </div>

    </section>
  );
}

export default Hero;