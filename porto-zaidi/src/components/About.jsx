import C from "../constants/colors";
import SectionLabel from "./ui/SectionLabel";

const STATS = [
  { num: "3.34", label: "GPA — UAD Informatics" },
  { num: "5+",   label: "Projects Delivered" },
  { num: "2yr",  label: "Org. Leadership" },
  { num: "∞",    label: "Learning Mindset" },
];

const PARAGRAPHS = [
  "I'm a fresh Informatics graduate from Universitas Ahmad Dahlan, specializing in frontend development, UX design, and automation. I love building tools that solve real problems.",
  "As President of the Balikpapan Student Association in Yogyakarta, I led teams, managed programs, and coordinated large-scale events — strengthening my communication and leadership.",
  "I embrace AI-assisted workflows as a development multiplier, staying adaptable and fast in a rapidly evolving tech landscape.",
];

export default function About() {
  return (
    <section id="about" style={{ position: "relative", zIndex: 1, background: C.surface }}>
      <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px" }}>
        <SectionLabel>About</SectionLabel>

        <div className="pf-two-col" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 72, alignItems: "start" }}>

          {/* Left: text */}
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 36 }}>
              Building Digital<br /><em style={{ color: C.gold, fontStyle: "italic" }}>Solutions</em>
            </h2>
            {PARAGRAPHS.map((p, i) => (
              <p key={i} style={{ fontSize: "0.95rem", color: C.muted2, lineHeight: 1.85, marginBottom: 18, fontWeight: 300 }}>{p}</p>
            ))}
          </div>

          {/* Right: stats grid */}
          <div className="pf-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ background: C.bg, border: `1px solid ${C.goldBorder}`, padding: "28px 24px" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "2.4rem", color: C.gold, lineHeight: 1, marginBottom: 8 }}>
                  {s.num}
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: C.muted, letterSpacing: "0.06em", lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
