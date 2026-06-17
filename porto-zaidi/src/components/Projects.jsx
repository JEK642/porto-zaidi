import C from "../constants/colors";
import SectionLabel from "./ui/SectionLabel";
import ProjectCard from "./ui/ProjectCard";
import { PROJECTS } from "../constants/data";

export default function Projects() {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 1, background: C.surface }}>
      <div className="pf-section-pad" style={{ maxWidth: 1140, margin: "0 auto", padding: "104px 48px" }}>
        <SectionLabel>Projects</SectionLabel>

        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 60 }}>
          Selected Work
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
          {PROJECTS.map((p) => <ProjectCard key={p.num} p={p} />)}
        </div>
      </div>
    </section>
  );
}
