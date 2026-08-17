import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (id) => {
    setMenuOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const navItems = [
    {
      id: "about",
      label: "About",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  return (
    <nav className="navbar">

      {/* ============================= */}
      {/* LOGO */}
      {/* ============================= */}

      <button
        className="logo"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
      >
        KM<span>🕷</span>
      </button>


      {/* ============================= */}
      {/* DESKTOP NAVIGATION */}
      {/* ============================= */}

      <div className="nav-links">

        {navItems.map((item) => (
          <button
            key={item.id}
            className={
              activeSection === item.id
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() =>
              handleNavigation(item.id)
            }
          >
            {item.label}

            {activeSection === item.id && (
              <span className="nav-web-line"></span>
            )}
          </button>
        ))}

      </div>


      {/* ============================= */}
      {/* MOBILE MENU BUTTON */}
      {/* ============================= */}

      <button
        className={`menu-toggle ${
          menuOpen ? "open" : ""
        }`}
        onClick={() =>
          setMenuOpen((prev) => !prev)
        }
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >

        <span></span>
        <span></span>
        <span></span>

      </button>


      {/* ============================= */}
      {/* MOBILE MENU */}
      {/* ============================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <div className="mobile-menu-inner">

          <span className="mobile-menu-label">
            NAVIGATION
          </span>


          {navItems.map((item, index) => (
            <button
              key={item.id}
              className={
                activeSection === item.id
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
              style={{
                "--item-index": index,
              }}
              onClick={() =>
                handleNavigation(item.id)
              }
            >

              <span>
                0{index + 1}
              </span>

              {item.label}

            </button>
          ))}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;