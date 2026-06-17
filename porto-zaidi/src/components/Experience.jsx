import C from "../constants/colors";
import SectionLabel from "./ui/SectionLabel";
import { EXPERIENCE } from "../constants/data";

export default function Experience() {
  return (
    <section id="experience" style={{ position: "relative", zIndex: 1 }}>
      <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px" }}>
        <SectionLabel>Experience</SectionLabel>

        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 60 }}>
          My Journey
        </h2>

        <div className="pf-exp-pad" style={{ borderLeft: `1px solid ${C.goldBorder}`, paddingLeft: 52 }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.title} style={{ position: "relative", paddingBottom: i < EXPERIENCE.length - 1 ? 56 : 0 }}>

              {/* Diamond marker */}
              <div style={{
                position: "absolute", left: -59, top: 6,
                width: 14, height: 14,
                border: `1px solid ${C.gold}`,
                background: C.bg,
                transform: "rotate(45deg)",
              }} />

              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: C.gold, marginBottom: 8 }}>
                {exp.date}
              </div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: 4, letterSpacing: "-0.02em" }}>
                {exp.title}
              </h3>
              <div style={{ fontSize: "0.85rem", color: C.muted2, marginBottom: 20 }}>
                {exp.org}
              </div>

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
  );
}
