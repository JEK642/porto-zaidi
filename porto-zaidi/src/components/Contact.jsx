import C from "../constants/colors";
import SectionLabel from "./ui/SectionLabel";

const LINKS = [
  { href: "mailto:zarans1906@gmail.com", label: "✉ zarans1906@gmail.com" },
  { href: "tel:08819799737",             label: "✆ 0881-9799-737" },
  { href: "https://github.com/JEK642",                        label: "⌥ GitHub",   external: true },
  { href: "https://linkedin.com/in/zaidi-mufthisor1906",      label: "in LinkedIn", external: true },
];

export default function Contact() {
  return (
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
          {LINKS.map(({ href, label, external }) => (
            <a
              key={href}
              href={href}
              className="pf-contact-link"
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
