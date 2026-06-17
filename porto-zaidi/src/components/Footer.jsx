import C from "../constants/colors";

export default function Footer() {
  return (
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
  );
}
