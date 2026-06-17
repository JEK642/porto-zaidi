import { useState } from "react";
import C from "../../constants/colors";

function IconGithub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.41-1.31.74-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectCard({ p }) {
  const [imgError, setImgError] = useState(false);
  const showImage = p.image && !imgError;

  return (
    <div className="pf-card">

      {/* Preview image / placeholder */}
      {showImage ? (
        <img
          src={p.image}
          alt={p.title}
          className="pf-card-image"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="pf-card-image-placeholder">
          <span>{p.num}</span>
          <span>PREVIEW UNAVAILABLE</span>
        </div>
      )}

      {/* Number */}
      <span style={{
        fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "2.6rem",
        color: C.goldBorder, lineHeight: 1, display: "block", marginBottom: 20,
        position: "relative", zIndex: 1,
      }}>
        {p.num}
      </span>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "1.15rem",
        marginBottom: 12, letterSpacing: "-0.02em", lineHeight: 1.3,
        position: "relative", zIndex: 1,
      }}>
        {p.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: "0.85rem", color: C.muted2, lineHeight: 1.75,
        marginBottom: 24, fontWeight: 300, position: "relative", zIndex: 1,
      }}>
        {p.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, position: "relative", zIndex: 1 }}>
        {p.tags.map((t) => <span key={t} className="pf-tag">{t}</span>)}
      </div>

      {/* Links */}
      {(p.github || p.demo) && (
        <div className="pf-card-links">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="pf-card-link-btn">
              <IconGithub /> GitHub
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="pf-card-link-btn">
              <IconExternalLink /> Live Demo
            </a>
          )}
        </div>
      )}

    </div>
  );
}
