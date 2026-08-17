import { useState } from "react";
import "./index.css";

import Entry from "./components/Entry";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>

      {/* ============================= */}
      {/* ENTRY EXPERIENCE */}
      {/* ============================= */}

      {!entered && (
        <Entry onEnter={() => setEntered(true)} />
      )}


      {/* ============================= */}
      {/* MAIN PORTFOLIO */}
      {/* ============================= */}

      <main
        className={`portfolio ${
          entered ? "portfolio-visible" : "portfolio-hidden"
        }`}
      >

        <div className="web-background"></div>

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

      </main>

    </>
  );
}

export default App;