import { useState, useEffect } from "react";

const C = {
  bg: "#080808",
  surface: "#0f0f0f",
  gold: "#C8A54A",
  goldDim: "rgba(200,165,74,0.11)",
  goldBorder: "rgba(200,165,74,0.22)",
  text: "#EDE9DA",
  muted: "#7A7060",
  muted2: "#A89E8E",
};

const PROJECTS = [
  {
    num: "01",
    title: "XAUUSD Price Analyzer Bot",
    desc: "Automated bot that analyzes gold (XAUUSD) price movements, generates real-time signals, and provides trend analysis for smarter trading decisions.",
    tags: ["Python", "Trading Bot", "Price Analysis", "Automation"],
  },
  {
    num: "02",
    title: "Web Supplier Platform",
    desc: "Supplier management web application built with React, featuring a responsive UI, product catalog, and streamlined supplier data management.",
    tags: ["React", "JavaScript", "Frontend", "Responsive"],
  },
  {
    num: "03",
    title: "Telegram Bot Automation",
    desc: "Operational bot for a family business that automates data recording and reporting, integrated with Google Sheets for real-time data management.",
    tags: ["Telegram API", "Google Sheets API", "Automation", "Node.js"],
  },
  {
    num: "04",
    title: "Elderly Health App — UX Research",
    desc: "Final thesis: comprehensive UX research and accessible design for a health application targeting elderly users, with wireframes and prototypes in Figma.",
    tags: ["Figma", "UX Research", "Accessibility", "Prototyping"],
  },
  {
    num: "05",
    title: "Responsive Frontend Interfaces",
    desc: "Collection of modern responsive web interfaces built with core web technologies, focused on usability, clean visual structure, and responsive design principles.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
];

const SKILLS = [
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { label: "Design", items: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"] },
  { label: "Tools", items: ["GitHub", "VS Code", "Google Sheets API", "Telegram API"] },
  { label: "Workflow", items: ["AI-Assisted Dev", "Bot Development", "Automation", "Responsive Design"] },
];

const EXPERIENCE = [
  {
    date: "2024 – 2025",
    title: "President",
    org: "Keluarga Pelajar Mahasiswa Balikpapan (KPMB) — Yogyakarta",
    points: [
      "Led organizational operations, program planning, and cross-team coordination.",
      "Managed external relations and collaborated with regional stakeholders.",
      "Oversaw budgeting, administration, and execution of large-scale events.",
    ],
  },
  {
    date: "2021 – 2026",
    title: "Bachelor of Informatics",
    org: "Universitas Ahmad Dahlan — Yogyakarta, Indonesia",
    points: [
      "GPA 3.34 — Focused on frontend development, UI/UX design, and automation.",
      "Final thesis: UI/UX research for an elderly-focused health application.",
    ],
  },
];

function SectionLabel({ children, center = false }) {
  return (
    <div style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: "0.68rem",
      letterSpacing: "0.15em",
      color: C.gold,
      textTransform: "uppercase",
      marginBottom: 20,
      display: "flex",
      alignItems: "center",
      gap: 12,
      justifyContent: center ? "center" : "flex-start",
    }}>
      {children}
      <span style={{ width: 40, height: 1, background: C.goldBorder, flexShrink: 0 }} />
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,800;1,9..144,500&family=Figtree:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.id = "pf-styles";
    style.textContent = `
      html { scroll-behavior: smooth; }
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: ${C.bg}; overflow-x: hidden; }

      .pf-nav-link {
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.1em;
        color: ${C.muted2};
        text-decoration: none;
        text-transform: uppercase;
        transition: color 0.2s;
      }
      .pf-nav-link:hover { color: ${C.gold}; }

      .pf-btn-primary {
        font-family: 'Figtree', sans-serif;
        font-weight: 500;
        font-size: 0.9rem;
        padding: 13px 32px;
        background: ${C.gold};
        color: #000;
        border: none;
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-block;
        letter-spacing: 0.01em;
      }
      .pf-btn-primary:hover { background: #DDB95A; transform: translateY(-2px); }

      .pf-btn-outline {
        font-family: 'Figtree', sans-serif;
        font-weight: 500;
        font-size: 0.9rem;
        padding: 13px 32px;
        background: transparent;
        color: ${C.text};
        border: 1px solid rgba(255,255,255,0.18);
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-block;
        letter-spacing: 0.01em;
      }
      .pf-btn-outline:hover { border-color: ${C.gold}; color: ${C.gold}; transform: translateY(-2px); }

      .pf-card {
        background: ${C.surface};
        border: 1px solid rgba(255,255,255,0.05);
        padding: 36px 32px;
        transition: all 0.3s;
        position: relative;
        overflow: hidden;
      }
      .pf-card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, ${C.goldDim} 0%, transparent 60%);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
      }
      .pf-card:hover { border-color: ${C.goldBorder}; transform: translateY(-3px); }
      .pf-card:hover::after { opacity: 1; }

      .pf-skill-tag {
        font-family: 'DM Mono', monospace;
        font-size: 0.75rem;
        padding: 8px 16px;
        border: 1px solid ${C.goldBorder};
        color: ${C.muted2};
        transition: all 0.2s;
        cursor: default;
        letter-spacing: 0.04em;
        display: inline-block;
      }
      .pf-skill-tag:hover { border-color: ${C.gold}; color: ${C.gold}; background: ${C.goldDim}; }

      .pf-tag {
        font-family: 'DM Mono', monospace;
        font-size: 0.65rem;
        letter-spacing: 0.06em;
        padding: 4px 12px;
        background: ${C.goldDim};
        color: ${C.gold};
        border: 1px solid ${C.goldBorder};
        display: inline-block;
      }

      .pf-contact-link {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 24px;
        border: 1px solid ${C.goldBorder};
        color: ${C.muted2};
        text-decoration: none;
        font-family: 'DM Mono', monospace;
        font-size: 0.75rem;
        letter-spacing: 0.06em;
        transition: all 0.2s;
      }
      .pf-contact-link:hover { border-color: ${C.gold}; color: ${C.gold}; transform: translateY(-2px); }

      @media (max-width: 768px) {
        .pf-hide-mobile { display: none !important; }
        .pf-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        .pf-stats-grid { grid-template-columns: 1fr 1fr !important; }
        .pf-section-pad { padding: 72px 24px !important; }
        .pf-hero-pad { padding: 110px 24px 64px !important; }
        .pf-exp-pad { padding-left: 36px !important; }
      }
    `;
    document.head.appendChild(style);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => {
      document.head.removeChild(link);
      const s = document.getElementById("pf-styles");
      if (s) document.head.removeChild(s);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Figtree', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>

      {/* GRID BG */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `linear-gradient(${C.goldBorder} 1px, transparent 1px), linear-gradient(90deg, ${C.goldBorder} 1px, transparent 1px)`,
        backgroundSize: "72px 72px", opacity: 0.35,
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "20px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.92)" : "rgba(8,8,8,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? C.goldBorder : "transparent"}`,
        transition: "all 0.3s",
      }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "1.2rem", color: C.gold, letterSpacing: "-0.02em" }}>ZM.</span>
        <div className="pf-hide-mobile" style={{ display: "flex", gap: 36 }}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="pf-nav-link">{s}</a>
          ))}
        </div>
        <a href="mailto:zarans1906@gmail.com" className="pf-btn-primary pf-hide-mobile" style={{ padding: "9px 22px", fontSize: "0.78rem" }}>
          Hire Me
        </a>
      </nav>

      {/* ─── HERO ─── */}
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

          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
            {["Frontend Developer", "UI/UX Designer", "Bot Developer"].map((r, i) => (
              <span key={r} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: C.muted, letterSpacing: "0.08em" }}>{r}</span>
                {i < 2 && <span style={{ width: 32, height: 1, background: C.goldBorder }} />}
              </span>
            ))}
          </div>

          <p style={{ fontSize: "1rem", color: C.muted2, maxWidth: 500, lineHeight: 1.8, marginBottom: 52, fontWeight: 300 }}>
            Fresh Informatics graduate from UAD. I build web interfaces, automation bots,
            and digital solutions powered by modern tools and AI-assisted workflows.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#projects" className="pf-btn-primary">View My Work</a>
            <a href="#contact" className="pf-btn-outline">Get In Touch</a>
          </div>

          <div style={{ marginTop: 80, display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 1, height: 52, background: `linear-gradient(to bottom, ${C.gold}, transparent)` }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: C.muted, letterSpacing: "0.12em" }}>SCROLL DOWN</span>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" style={{ position: "relative", zIndex: 1, background: C.surface }}>
        <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px" }}>
          <SectionLabel>About</SectionLabel>
          <div className="pf-two-col" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 72, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 36 }}>
                Building Digital<br /><em style={{ color: C.gold, fontStyle: "italic" }}>Solutions</em>
              </h2>
              {[
                "I'm a fresh Informatics graduate from Universitas Ahmad Dahlan, specializing in frontend development, UX design, and automation. I love building tools that solve real problems.",
                "As President of the Balikpapan Student Association in Yogyakarta, I led teams, managed programs, and coordinated large-scale events — strengthening my communication and leadership.",
                "I embrace AI-assisted workflows as a development multiplier, staying adaptable and fast in a rapidly evolving tech landscape.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: "0.95rem", color: C.muted2, lineHeight: 1.85, marginBottom: 18, fontWeight: 300 }}>{p}</p>
              ))}
            </div>
            <div className="pf-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[
                { num: "3.34", label: "GPA — UAD Informatics" },
                { num: "5+", label: "Projects Delivered" },
                { num: "2yr", label: "Org. Leadership" },
                { num: "∞", label: "Learning Mindset" },
              ].map((s) => (
                <div key={s.label} style={{ background: C.bg, border: `1px solid ${C.goldBorder}`, padding: "28px 24px" }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "2.4rem", color: C.gold, lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: C.muted, letterSpacing: "0.06em", lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" style={{ position: "relative", zIndex: 1 }}>
        <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px" }}>
          <SectionLabel>Skills</SectionLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 60 }}>
            Tools &amp; Technologies
          </h2>
          <div className="pf-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {SKILLS.map((group) => (
              <div key={group.label} style={{ background: C.surface, padding: 32, border: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.12em", color: C.gold, textTransform: "uppercase", marginBottom: 20 }}>{group.label}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map((item) => <span key={item} className="pf-skill-tag">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" style={{ position: "relative", zIndex: 1, background: C.surface }}>
        <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px" }}>
          <SectionLabel>Projects</SectionLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 60 }}>
            Selected Work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
            {PROJECTS.map((p) => (
              <div key={p.num} className="pf-card">
                <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "2.6rem", color: C.goldBorder, lineHeight: 1, display: "block", marginBottom: 20, position: "relative", zIndex: 1 }}>{p.num}</span>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "1.15rem", marginBottom: 12, letterSpacing: "-0.02em", lineHeight: 1.3, position: "relative", zIndex: 1 }}>{p.title}</h3>
                <p style={{ fontSize: "0.85rem", color: C.muted2, lineHeight: 1.75, marginBottom: 24, fontWeight: 300, position: "relative", zIndex: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, position: "relative", zIndex: 1 }}>
                  {p.tags.map((t) => <span key={t} className="pf-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" style={{ position: "relative", zIndex: 1 }}>
        <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px" }}>
          <SectionLabel>Experience</SectionLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 60 }}>
            My Journey
          </h2>
          <div className="pf-exp-pad" style={{ borderLeft: `1px solid ${C.goldBorder}`, paddingLeft: 52 }}>
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.title} style={{ position: "relative", paddingBottom: i < EXPERIENCE.length - 1 ? 56 : 0 }}>
                <div style={{ position: "absolute", left: -59, top: 6, width: 14, height: 14, border: `1px solid ${C.gold}`, background: C.bg, transform: "rotate(45deg)" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: C.gold, marginBottom: 8 }}>{exp.date}</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: 4, letterSpacing: "-0.02em" }}>{exp.title}</h3>
                <div style={{ fontSize: "0.85rem", color: C.muted2, marginBottom: 20 }}>{exp.org}</div>
                <ul style={{ listStyle: "none" }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ fontSize: "0.875rem", color: "#aaa", lineHeight: 1.75, paddingLeft: 20, paddingBottom: 6, position: "relative", fontWeight: 300 }}>
                      <span style={{ position: "absolute", left: 0, color: C.gold, opacity: 0.5 }}>—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ position: "relative", zIndex: 1, background: C.surface }}>
        <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px", textAlign: "center" }}>
          <SectionLabel center>Contact</SectionLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}>
            Let's Build Something<br />
            <em style={{ color: C.gold, fontStyle: "italic" }}>Together</em>
          </h2>
          <p style={{ fontSize: "0.95rem", color: C.muted2, lineHeight: 1.8, fontWeight: 300, maxWidth: 440, margin: "0 auto 52px" }}>
            Open to full-time roles, freelance projects, and interesting collaborations.
            Based in Balikpapan, Indonesia.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:zarans1906@gmail.com" className="pf-contact-link">✉ zarans1906@gmail.com</a>
            <a href="tel:08819799737" className="pf-contact-link">✆ 0881-9799-737</a>
            {/* Ganti URL GitHub & LinkedIn kamu di sini */}
            <a href="https://github.com/username-kamu" target="_blank" rel="noreferrer" className="pf-contact-link">⌥ GitHub</a>
            <a href="https://linkedin.com/in/username-kamu" target="_blank" rel="noreferrer" className="pf-contact-link">in LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${C.goldBorder}`,
        padding: "24px 48px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.68rem",
        color: C.muted,
        letterSpacing: "0.08em",
      }}>
        © 2025 ZAIDI MUFTHISOR — BUILT WITH REACT ⬡ BALIKPAPAN, ID
      </footer>
    </div>
  );
}