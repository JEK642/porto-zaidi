import C from "../constants/colors";
import SectionLabel from "./ui/SectionLabel";
import { SKILLS } from "../constants/data";

export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", zIndex: 1 }}>
      <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px" }}>
        <SectionLabel>Skills</SectionLabel>

        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 60 }}>
          Tools &amp; Technologies
        </h2>

        <div className="pf-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          {SKILLS.map((group) => (
            <div key={group.label} style={{ background: C.surface, padding: 32, border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.12em", color: C.gold, textTransform: "uppercase", marginBottom: 20 }}>
                {group.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((item) => (
                  <span key={item} className="pf-skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
