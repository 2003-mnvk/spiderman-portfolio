import { useState } from "react";

function Entry({ onEnter }) {
  const [shooting, setShooting] = useState(false);

  const handleEnter = () => {
    if (shooting) return;

    setShooting(true);

    setTimeout(() => {
      onEnter();
    }, 1800);
  };

  return (
    <div className={`entry-screen ${shooting ? "web-shot" : ""}`}>

      {/* Dark cinematic background */}
      <div className="entry-vignette"></div>

      {/* Small particles */}
      <div className="entry-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* ===================================== */}
      {/* CINEMATIC WEB */}
      {/* ===================================== */}

      <svg
        className="cinematic-web"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
      >

        <defs>

          {/* Silk glow */}
          <filter
            id="webGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              stdDeviation="2.5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>


          {/* Stronger shooting glow */}
          <filter
            id="webShotGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>


          {/* Silk gradient */}
          <linearGradient
            id="silkGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#ffffff"
              stopOpacity="0.15"
            />

            <stop
              offset="50%"
              stopColor="#ffffff"
              stopOpacity="0.9"
            />

            <stop
              offset="100%"
              stopColor="#d7d7d7"
              stopOpacity="0.25"
            />
          </linearGradient>

        </defs>


        {/* ================================= */}
        {/* MAIN SHOOTING STRANDS */}
        {/* ================================= */}

        <g
          className="web-strands"
          filter="url(#webGlow)"
        >

          <path d="M800 500 C735 450 620 350 470 170" />
          <path d="M800 500 C735 430 570 300 250 210" />
          <path d="M800 500 C700 470 500 455 120 450" />
          <path d="M800 500 C675 530 490 600 170 760" />
          <path d="M800 500 C720 565 610 690 430 900" />
          <path d="M800 500 C850 420 970 300 1170 150" />
          <path d="M800 500 C880 430 1050 300 1380 230" />
          <path d="M800 500 C920 480 1130 455 1510 430" />
          <path d="M800 500 C900 540 1100 630 1450 760" />
          <path d="M800 500 C880 570 1000 700 1180 920" />

        </g>


        {/* ================================= */}
        {/* SECONDARY FIBERS */}
        {/* ================================= */}

        <g className="web-fibers">

          <path d="M800 500 C650 390 520 280 470 170" />
          <path d="M800 500 C600 400 400 260 250 210" />
          <path d="M800 500 C560 470 320 450 120 450" />
          <path d="M800 500 C580 520 330 650 170 760" />
          <path d="M800 500 C650 580 520 760 430 900" />

          <path d="M800 500 C950 390 1080 270 1170 150" />
          <path d="M800 500 C1000 390 1200 270 1380 230" />
          <path d="M800 500 C1040 470 1300 450 1510 430" />
          <path d="M800 500 C1000 530 1250 650 1450 760" />
          <path d="M800 500 C950 590 1080 760 1180 920" />

        </g>


        {/* ================================= */}
        {/* NATURAL WEB CONNECTIONS */}
        {/* ================================= */}

        <g className="web-connections">

          {/* Left upper */}
          <path d="M690 400 C625 330 555 270 470 170" />
          <path d="M600 350 C500 300 390 240 250 210" />

          {/* Left middle */}
          <path d="M620 450 C470 435 300 430 120 450" />
          <path d="M520 470 C400 500 270 610 170 760" />

          {/* Left lower */}
          <path d="M620 555 C570 650 490 790 430 900" />
          <path d="M700 600 C640 700 550 820 430 900" />

          {/* Right upper */}
          <path d="M900 400 C980 330 1080 240 1170 150" />
          <path d="M1000 350 C1120 300 1260 250 1380 230" />

          {/* Right middle */}
          <path d="M980 450 C1150 435 1330 425 1510 430" />
          <path d="M1080 480 C1220 540 1360 670 1450 760" />

          {/* Right lower */}
          <path d="M980 555 C1040 650 1110 800 1180 920" />
          <path d="M900 600 C980 700 1090 830 1180 920" />

        </g>


        {/* ================================= */}
        {/* FINE SILK THREADS */}
        {/* ================================= */}

        <g className="fine-web">

          <path d="M760 470 C690 400 620 330 540 270" />
          <path d="M740 485 C650 450 540 420 430 390" />
          <path d="M740 520 C650 550 560 600 470 670" />

          <path d="M840 470 C910 400 980 330 1060 270" />
          <path d="M860 485 C950 450 1060 420 1170 390" />
          <path d="M860 520 C950 550 1040 600 1130 670" />

        </g>


        {/* ================================= */}
        {/* CENTER IMPACT */}
        {/* ================================= */}

        <g className="web-core">

          <circle
            cx="800"
            cy="500"
            r="9"
          />

          <circle
            cx="800"
            cy="500"
            r="22"
          />

          <circle
            cx="800"
            cy="500"
            r="38"
          />

        </g>

      </svg>


      {/* ===================================== */}
      {/* ENTRY CONTENT */}
      {/* ===================================== */}

      <div className="entry-content">

        <div className="entry-spider">
          🕷
        </div>

        <p className="entry-eyebrow">
          A WEB-SLINGER'S PORTFOLIO
        </p>

        <h1>
          WELCOME
        </h1>

        <p className="entry-subtitle">
          Every story begins with a single thread.
        </p>

        <button
          className="enter-web-button"
          onClick={handleEnter}
          disabled={shooting}
        >

          <span>
            {shooting
              ? "WEB SHOT"
              : "ENTER THE WEB"}
          </span>

          {!shooting && (
            <span className="button-arrow">
              →
            </span>
          )}

        </button>

        <div className="entry-hint">
          CLICK TO BEGIN
        </div>

      </div>


      {/* Shooter flash */}
      <div className="web-flash"></div>

    </div>
  );
}

export default Entry;