import { useState, useEffect } from "react";
import C from "../constants/colors";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ─── Mobile Menu ─── */}
      <div className={`pf-mobile-menu${menuOpen ? " open" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "1.2rem", color: C.gold, letterSpacing: "-0.02em" }}>
            ZM.
          </span>
          <button
            onClick={close}
            style={{
              background: "none",
              border: `1px solid ${C.goldBorder}`,
              color: C.gold,
              fontSize: "1rem",
              cursor: "pointer",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {NAV_LINKS.map((s) => (
          <a key={s} href={`#${s.toLowerCase()}`} className="pf-mobile-nav-link" onClick={close}>
            {s}
          </a>
        ))}

        <a
          href="mailto:zarans1906@gmail.com"
          className="pf-btn-primary"
          onClick={close}
          style={{ marginTop: 24, textAlign: "center" }}
        >
          Hire Me
        </a>
      </div>

      {/* ─── Desktop Nav ─── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "20px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.92)" : "rgba(8,8,8,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? C.goldBorder : "transparent"}`,
        transition: "all 0.3s",
      }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "1.2rem", color: C.gold, letterSpacing: "-0.02em" }}>
          ZM.
        </span>

        <div className="pf-hide-mobile" style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="pf-nav-link">{s}</a>
          ))}
        </div>

        <a href="mailto:zarans1906@gmail.com" className="pf-btn-primary pf-hide-mobile" style={{ padding: "9px 22px", fontSize: "0.78rem" }}>
          Hire Me
        </a>

        <button
          className="pf-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </nav>
    </>
  );
}
