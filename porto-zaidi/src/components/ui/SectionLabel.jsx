import C from "../../constants/colors";

export default function SectionLabel({ children, center = false }) {
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
