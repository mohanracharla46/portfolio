export const PORTFOLIO_DATA = {
  personal: {
    name: "MOHAN RACHARLA",
    shortName: "MR",
    title: "FULL-STACK FREELANCE DEVELOPER • HYDERABAD",
    tagline: "I BUILD DIGITAL PRODUCTS.",
    heroDescription: "Fast, low-cost website & app development in Hyderabad. Custom web apps, SaaS platforms and digital products engineered from idea to production.",
    year: "2026",
    location: "Hyderabad, Telangana, India",
    introLabel: "01 / INTRO",
    introStatement: "I DON'T JUST WRITE CODE. I BUILD THINGS.",
    introParagraph: "Based in Hyderabad, India — I provide freelance full-stack development for startups, businesses, and founders seeking fast, low-cost website & app solutions.",
    aboutStatement: "I LIKE TURNING IDEAS INTO REAL PRODUCTS.",
    aboutDescription: "Freelance Full-Stack Developer based in Hyderabad specializing in affordable web development, rapid prototyping, React, Python, Flask, and cloud database architecture.",
    contactEmail: "racharlamohan16@gmail.com",
    phone: "+91 8464069091",
    phoneRaw: "8464069091",
    githubUrl: "https://github.com/MohanRacharla",
    linkedinUrl: "https://www.linkedin.com/in/mohan-racharla-48a166266",
  },

  projects: [
    {
      id: "codenative",
      number: "01",
      title: "CODENATIVE",
      subtitle: "India's Telugu-first coding learning platform.",
      description: "Founded and engineered India's premier Telugu coding platform featuring interactive sandboxes, AI-powered doubt solving, and step-by-step course tracks.",
      category: "EDTECH PLATFORM / FOUNDER",
      year: "2026",
      tech: ["Python", "Flask", "JavaScript", "SQLite", "Supabase"],
      accentColor: "#B8FF3C",
      liveUrl: "https://codenative.co.in/",
      githubUrl: "https://github.com/MohanRacharla",
      stats: [
        { label: "Barrier", value: "ZERO" },
        { label: "Role", value: "Founder & Lead Dev" },
        { label: "Target", value: "100% Free Telugu" }
      ],
      codeSnippet: {
        telugu: "కంప్యూటర్ కు సంకేతాలు పంపే ఫంక్షన్",
        code: "def welcome_learner(name):\n    message = f\"నమస్కారం {name}! programming సులభం.\"\n    return message"
      }
    },
    {
      id: "referitup",
      number: "02",
      title: "REFERITUP",
      subtitle: "Referral and rewards platform.",
      description: "A full-suite growth and referral automation ecosystem handling conversion tracking, tier calculations, unique link generation, and automated payouts.",
      category: "SAAS PLATFORM",
      year: "2025",
      tech: ["React", "Laravel", "PHP", "MySQL"],
      accentColor: "#4E9FFF",
      liveUrl: "https://referitup.com/",
      githubUrl: "https://github.com/MohanRacharla",
      dashboardMetrics: [
        { label: "Total Referrals", value: "1,482" },
        { label: "Earnings Payout", value: "$12,450" },
        { label: "Conversion Rate", value: "24.8%" }
      ]
    },
    {
      id: "nkxus",
      number: "03",
      title: "NKXUS",
      subtitle: "Digital network & modern web platform.",
      description: "High-performance web platform engineered with clean frontend architecture, ultra-fast asset delivery, and responsive interactive components.",
      category: "WEB PLATFORM",
      year: "2025",
      tech: ["React", "JavaScript", "Node.js", "REST APIs", "CSS3"],
      accentColor: "#9D4EDD",
      liveUrl: "https://nkxus.com/",
      githubUrl: "https://github.com/MohanRacharla",
      featuresList: ["Interactive Components", "Sub-100ms Load Speed", "Fluid Motion UX"]
    },
    {
      id: "ira-media",
      number: "04",
      title: "IRA MEDIA CONCEPTS",
      subtitle: "Digital media & web agency platform.",
      description: "Designed and engineered modern digital web applications, media systems, and interactive branding experiences for client digital campaigns.",
      category: "MEDIA PLATFORM / WEB DEV",
      year: "2026",
      tech: ["React", "JavaScript", "CSS3", "Python"],
      accentColor: "#B8FF3C",
      liveUrl: "https://iramediaconcepts.com/",
      githubUrl: "https://github.com/MohanRacharla"
    },
    {
      id: "ira-reports",
      number: "05",
      title: "IRA MEDIA REPORTS",
      subtitle: "Client media analytics & reporting system.",
      description: "Custom analytics dashboard built for Ira Media Concepts, aggregating real-time media campaign stats, ROI metrics, and client report feeds.",
      category: "ENTERPRISE ANALYTICS",
      year: "2026",
      tech: ["Python", "JavaScript", "SQL", "API Integration"],
      accentColor: "#FF9F1C",
      liveUrl: "https://reports.iramediaconcepts.com/",
      githubUrl: "https://github.com/MohanRacharla",
      agencyUrl: "https://iramediaconcepts.com/"
    },
    {
      id: "gogocar",
      number: "06",
      title: "GOGOCAR",
      subtitle: "Mobility and vehicle analytics platform.",
      description: "Real-time vehicle telemetry dashboard monitoring battery health, engine diagnostic feeds, and fleet route performance metrics.",
      category: "ANALYTICS & MOBILITY",
      year: "2025",
      tech: ["React", "Node.js", "Telemetry API", "Chart.js"],
      accentColor: "#FF5E36",
      liveUrl: "https://www.gogocar.in/",
      githubUrl: "https://github.com/MohanRacharla",
      telemetry: {
        speed: "84 km/h",
        battery: "92%",
        range: "340 km",
        health: "OPTIMAL"
      }
    }
  ],

  smallProjects: [
    {
      id: "nkxus-portfolio",
      number: "01",
      title: "NKXUS PORTFOLIO",
      category: "AGENCY PORTFOLIO",
      subtitle: "Showcase platform for digital agency & tech offerings.",
      domain: "portfolio.nkxus.com",
      url: "https://portfolio.nkxus.com/",
      tags: ["React", "CSS3", "Agency Platform"],
      accentColor: "#B8FF3C"
    },
    {
      id: "amarnath-sarangula",
      number: "02",
      title: "AMARNATH SARANGULA",
      category: "PERSONAL BRAND",
      subtitle: "Executive personal brand website with custom modern aesthetic.",
      domain: "amarnathsarangula.in",
      url: "https://amarnathsarangula.in/",
      tags: ["Web Design", "Frontend", "Branding"],
      accentColor: "#4E9FFF"
    },
    {
      id: "psmsk",
      number: "03",
      title: "PSMSK TEMPLE",
      category: "TEMPLE & DEVOTIONAL",
      subtitle: "Official temple digital portal, darshan info & community services.",
      domain: "psmsk.com",
      url: "https://psmsk.com/",
      tags: ["Temple Portal", "Devotional", "Community"],
      accentColor: "#FF9F1C"
    },
    {
      id: "vwish-technologies",
      number: "04",
      title: "VWISH TECHNOLOGIES",
      category: "IT SERVICES",
      subtitle: "Technology solutions provider portal & client interface.",
      domain: "vwishtechnologies.com",
      url: "https://vwishtechnologies.com/",
      tags: ["IT Services", "React", "Node.js"],
      accentColor: "#9D4EDD"
    },
    {
      id: "the-glory-spa",
      number: "05",
      title: "THE GLORY SPA",
      category: "WELLNESS & LIFESTYLE",
      subtitle: "Premium spa booking & wellness luxury portal.",
      domain: "thegloryspa.in",
      url: "https://thegloryspa.in/",
      tags: ["UI/UX", "Booking System", "Lifestyle"],
      accentColor: "#FF5E36"
    },
    {
      id: "the-bliss-wellness",
      number: "06",
      title: "THE BLISS WELLNESS",
      category: "LUXURY SPA",
      subtitle: "Luxury health, wellness and massage client website.",
      domain: "theblisswellnessspa.in",
      url: "https://theblisswellnessspa.in/",
      tags: ["Luxury UI", "Responsive", "Spa Platform"],
      accentColor: "#B8FF3C"
    },
    {
      id: "hyderabad-spas",
      number: "07",
      title: "HYDERABAD SPAS",
      category: "DIRECTORY & ENGINE",
      subtitle: "City-wide spa directory and customer lead engine.",
      domain: "hyderabadspas.com",
      url: "https://hyderabadspas.com/",
      tags: ["Directory Hub", "SEO Engine", "Web App"],
      accentColor: "#4E9FFF"
    }
  ],

  capabilities: [
    { name: "WEB APPLICATIONS", desc: "High performance modern web applications with clean, responsive user interfaces." },
    { name: "PLATFORMS", desc: "Scalable multi-tenant platforms engineered from conceptual architecture to deployment." },
    { name: "APIs", desc: "Clean, well-documented RESTful and real-time APIs built with Python and Node.js." },
    { name: "BACKENDS", desc: "Robust database schemas, authentication engines, and reliable background jobs." },
    { name: "PRODUCTS", desc: "Transforming raw ideas into fully functional digital products with intentional UX." }
  ],

  techStack: [
    { name: "PYTHON", category: "Backend / Logic", detail: "Flask, Django, FastAPI, Automation scripts & AI tool pipelines." },
    { name: "REACT", category: "Frontend Framework", detail: "Component architecture, hooks, state management & fluid animations." },
    { name: "FLASK", category: "Microservices", detail: "Lightweight Python APIs, REST endpoints & rapid microservice development." },
    { name: "DJANGO", category: "Full-Stack Python", detail: "ORM models, security, admin backends & robust web applications." },
    { name: "FASTAPI", category: "Async API Engine", detail: "High performance async REST APIs with automatic OpenAPI specs." },
    { name: "LARAVEL", category: "PHP Framework", detail: "MVC architecture, relational database ORM, and enterprise web solutions." },
    { name: "JAVASCRIPT", category: "Core Language", detail: "ES6+ standards, DOM manipulation, asynchronous state & browser APIs." },
    { name: "SQL", category: "Database Systems", detail: "Relational database modeling, query optimization in MySQL & PostgreSQL." },
    { name: "SUPABASE", category: "Cloud Infrastructure", detail: "Postgres database, real-time channels, auth & storage bucket integrations." },
    { name: "GIT", category: "Version Control", detail: "Branching strategies, CI/CD integration & collaborative workflow codebases." }
  ],

  experience: [
    {
      year: "2026",
      role: "Founder",
      company: "CodeNative",
      link: "https://codenative.co.in/",
      type: "Founder Project",
      description: "Founded India's leading Telugu coding platform. Engineered cloud compiler sandbox, video curriculum delivery system, and AI doubt solver."
    },
    {
      year: "2026",
      role: "Software Developer",
      company: "Nkxus Pvt Ltd",
      link: "https://nkxus.com/",
      type: "Full-Time",
      description: "Engineered scalable digital platform architecture, built responsive web applications, and optimized client asset delivery."
    }
  ],

  currentlyBuilding: {
    title: "CODENATIVE v2.0",
    status: "BUILDING",
    description: "Developing an updated web compiler engine with multi-language native translations and instant code execution feedback for beginners.",
    progress: 78,
    tech: ["Python", "Supabase", "React", "Docker"]
  }
};
