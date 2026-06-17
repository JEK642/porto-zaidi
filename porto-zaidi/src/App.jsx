import { useEffect } from "react";
import C from "./constants/colors";

import "./styles/global.css";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  // Inject Google Fonts once at app level
  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,800;1,9..144,500&family=Figtree:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Figtree', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>

      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `linear-gradient(${C.goldBorder} 1px, transparent 1px), linear-gradient(90deg, ${C.goldBorder} 1px, transparent 1px)`,
        backgroundSize: "72px 72px", opacity: 0.35,
      }} />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

    </div>
  );
}
