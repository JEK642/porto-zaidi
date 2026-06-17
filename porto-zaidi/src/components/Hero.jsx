import C from "../constants/colors";

export default function Hero() {
  return (
    <section id="home" style={{ position: "relative", zIndex: 1 }}>
      <div className="pf-hero-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "134px 48px 90px" }}>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          border: `1px solid ${C.goldBorder}`, borderRadius: 100,
          padding: "6px 18px", marginBottom: 48,
          fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
          color: C.gold, letterSpacing: "0.1em",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.gold }} />
          OPEN TO WORK — BALIKPAPAN, ID
        </div>

        <h1 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 800,
          fontSize: "clamp(3.5rem, 9vw, 7.5rem)", lineHeight: 0.92,
          letterSpacing: "-0.04em", marginBottom: 28,
        }}>
          ZAIDI<br />
          <span style={{ color: C.gold }}>MUFTHISOR</span>
        </h1>

        {/* Role tags */}
        <div style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.05rem",
            color: C.gold,
            letterSpacing: "0.1em",
            fontWeight: 400,
            marginBottom: 10,
          }}>
            Frontend Developer
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.7rem",
            color: C.muted,
            letterSpacing: "0.08em",
          }}>
            + UI/UX Design • Bot Development
          </div>
        </div>

        <p style={{ fontSize: "1rem", color: C.muted2, maxWidth: 500, lineHeight: 1.8, marginBottom: 52, fontWeight: 300 }}>
          Fresh Informatics graduate from UAD. I build web interfaces, automation bots,
          and digital solutions powered by modern tools and AI-assisted workflows.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects" className="pf-btn-primary">View My Work</a>
          <a href="#contact" className="pf-btn-outline">Get In Touch</a>
          <a
            href="/cv-zaidi-mufthisor.pdf"
            target="_blank"
            rel="noreferrer"
            className="pf-btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        <div style={{ marginTop: 80, display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 1, height: 52, background: `linear-gradient(to bottom, ${C.gold}, transparent)` }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: C.muted, letterSpacing: "0.12em" }}>
            SCROLL DOWN
          </span>
        </div>
      </div>
    </section>
  );
}