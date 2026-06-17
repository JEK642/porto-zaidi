export const PROJECTS = [
  {
    num: "01",
    title: "XAUUSD Price Analyzer Bot",
    desc: "Manual gold (XAUUSD) price analysis is slow and prone to missing key trend shifts. I built a Python bot that pulls real-time price data via API and automatically analyzes movement patterns to generate trading signals, using pandas for data processing and requests for API integration. Currently used as a personal research tool, it removes the manual effort of tracking price charts and provides a structured starting point for trading decisions.",
    tags: ["Python", "Trading Bot", "Price Analysis", "Automation"],
    image: "/projects/xauusd-preview.png",
    github: "https://github.com/JEK642/xauusd-analyzer",
    demo: null,
  },
  {
    num: "02",
    title: "Web Supplier Platform",
    desc: "Supplier management web application built with React, featuring a responsive UI, product catalog, and streamlined supplier data management.",
    tags: ["React", "JavaScript", "Frontend", "Responsive"],
    image: "/projects/web-supplier-preview.png",
    github: "https://github.com/JEK642/web-supplier-platform",
    demo: "https://web-supplier-demo.vercel.app",
  },
  {
    num: "03",
    title: "Telegram Bot Automation",
    desc: "The family business relied on manual data entry through WhatsApp for daily transaction records, a process prone to errors and inconsistent formatting. I developed a Telegram bot that captures structured input directly from staff and automatically syncs it to Google Sheets in real time, built with Node.js, the Telegram Bot API, and Google Sheets API. It replaced the manual logging workflow entirely, standardizing how data is recorded and removing the need for manual transcription.",
    tags: ["Telegram API", "Google Sheets API", "Automation", "Node.js"],
    image: "/projects/telegram-bot-preview.png",
    github: null,
    demo: null,
  },
  {
    num: "04",
    title: "Elderly Health App — UX Research",
    desc: "Final thesis: comprehensive UX research and accessible design for a health application targeting elderly users, with wireframes and prototypes in Figma.",
    tags: ["Figma", "UX Research", "Accessibility", "Prototyping"],
    image: "/projects/elderly-health-preview.png",
    github: null,
    demo: "https://figma.com/proto/elderly-health-app",
  },
  {
    num: "05",
    title: "Responsive Frontend Interfaces",
    desc: "Collection of modern responsive web interfaces built with core web technologies, focused on usability, clean visual structure, and responsive design principles.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: "/projects/responsive-frontend-preview.png",
    github: "https://github.com/JEK642/responsive-interfaces",
    demo: "https://responsive-interfaces-demo.netlify.app",
  },
];

export const SKILLS = [
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { label: "Design", items: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"] },
  { label: "Tools", items: ["GitHub", "VS Code", "Google Sheets API", "Telegram API"] },
  { label: "Workflow", items: ["AI-Assisted Dev", "Bot Development", "Automation", "Responsive Design"] },
];

export const EXPERIENCE = [
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