export const personalInfo = {
  name: "Dhia Romdhane",
  title: "Data Scientist & Full Stack Developer",
  location: "Tunisia",
  github: "https://github.com/dhia10",
  email: "dhia.romd1@gmail.com",
  phone: "+216 53 192 623",
  description: "Data Scientist specializing in AI/ML with strong full-stack development skills. Experienced in building scalable applications and entrepreneurial ventures. Active with Erasmus+ programs.",
};

export const education = [
  {
    institution: "ESPRIT",
    degree: "Data Science Engineering",
    focus: "Machine Learning, Deep Learning, AI Systems",
    icon: "🎓"
  },
  {
    institution: "ISSAT Sousse",
    degree: "Computer Science License",
    focus: "Software Engineering, Web Development, Database Systems",
    icon: "🎓"
  }
];

export const certifications = [
  {
    title: "Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    year: "2024",
    icon: "🤖"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations",
    issuer: "Oracle",
    year: "2025",
    icon: "☁️"
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    year: "2023",
    icon: "🌐"
  },
  {
    title: "The Machine Learning Process A-Z",
    issuer: "365 Data Science",
    year: "2023",
    icon: "📊"
  },
  {
    title: "The Machine Learning Algorithms A-Z",
    issuer: "365 Data Science",
    year: "2023",
    icon: "📈"
  }
];

export const experience = [
  {
    company: "Clevertech",
    role: "Data Science Intern (PFE)",
    period: "2023-2024",
    project: "Crime Prediction Model",
    description: "Developed ML models to predict crime types and frequencies in France using time-series analysis",
    icon: "💼"
  },
  {
    company: "RIDTech Agency",
    role: "Founder & Lead Developer",
    period: "2021-Present",
    project: "Digital Agency",
    description: "Creating websites, apps, and tools for clients. Sold multiple scraping applications including TikTok Live Scraper and Facebook app",
    icon: "🚀"
  },
  {
    company: "ProjectLib Ecosystem",
    role: "Co-Founder & Full Stack Developer",
    period: "2022-Present",
    project: "Startup Ecosystem",
    description: "Building a complete ecosystem with Amin Majbri (Idea Creator & Dev) including marketplace, payment integration, and multiple sub-platforms",
    icon: "🌐"
  }
];

export const skills = {
  "Data Science & AI": [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "Machine Learning", level: 90, icon: "🤖" },
    { name: "Deep Learning", level: 85, icon: "🧠" },
    { name: "TensorFlow/Keras", level: 85, icon: "🔥" },
    { name: "Computer Vision", level: 80, icon: "👁️" },
    { name: "Time Series Analysis", level: 80, icon: "📈" },
    { name: "Data Analysis", level: 90, icon: "📊" }
  ],
  "Backend Development": [
    { name: "Laravel", level: 90, icon: "🔴" },
    { name: "Symfony", level: 85, icon: "🎵" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Spring Boot", level: 75, icon: "🍃" },
    { name: "Express.js", level: 80, icon: "⚡" },
    { name: "PHP", level: 90, icon: "🐘" }
  ],
  "Frontend Development": [
    { name: "React", level: 85, icon: "⚛️" },
    { name: "Angular", level: 75, icon: "🅰️" },
    { name: "JavaScript/TypeScript", level: 88, icon: "📜" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "HTML/CSS", level: 95, icon: "🌐" }
  ],
  "Database & DevOps": [
    { name: "Firebase/Firestore", level: 90, icon: "🔥" },
    { name: "MySQL/PostgreSQL", level: 85, icon: "🗄️" },
    { name: "Oracle/PL-SQL", level: 75, icon: "🏛️" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "Nginx", level: 75, icon: "🌐" },
    { name: "Railway/Render", level: 80, icon: "🚂" }
  ],
  "Other Technologies": [
    { name: "JavaFX", level: 80, icon: "☕" },
    { name: "Three.js", level: 70, icon: "🎮" },
    { name: "Git/GitHub", level: 90, icon: "🔀" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "SEO", level: 80, icon: "🔍" },
    { name: "IoT/Cisco", level: 65, icon: "🔌" }
  ]
};

export const projects = {
  ai_ml: [
    {
      id: 1,
      title: "Crime Prediction Model",
      category: "Machine Learning",
      description: "PFE internship project at Clevertech. Developed time-series ML models to predict crime types and frequencies in France.",
      tags: ["Python", "ML", "Time-Series", "Data Analysis"],
      status: "Completed",
      highlight: true,
      icon: "🧠"
    },
    {
      id: 2,
      title: "Waste Sorting AI (SDG 6 & 14)",
      category: "Computer Vision",
      description: "AI system to detect and classify plastic, paper, and organic waste for recycling. Full team project including design, electronics, and AI.",
      tags: ["Python", "CV", "IoT", "Sustainability"],
      status: "Completed",
      icon: "♻️"
    },
    {
      id: 3,
      title: "AI Password Strength Analyzer",
      category: "NLP & Security",
      description: "Intelligent password strength evaluator using real AI logic (not just regex) integrated into JavaFX application.",
      tags: ["Python", "AI", "JavaFX", "Security"],
      status: "Completed",
      icon: "🔐"
    },
    {
      id: 15,
      title: "Network Security & Penetration Testing Lab",
      category: "Cybersecurity",
      description: "Hands-on security projects including network vulnerability assessment, basic penetration testing techniques, and secure application development practices. Understanding of common vulnerabilities (SQL injection, XSS, CSRF) and mitigation strategies.",
      tags: ["Security", "Networking", "Penetration Testing", "OWASP"],
      status: "Ongoing Learning",
      icon: "🔒"
    },
    {
      id: 4,
      title: "3D Printing Support & Volume Analyzer",
      category: "Computer Vision",
      description: "Advanced STL viewer with volume, weight, and cost estimation. Learning OrcaSlicer internals for support structure logic.",
      tags: ["Python", "3D Analysis", "STL", "Algorithms"],
      status: "In Development",
      icon: "🖨️"
    },
    {
      id: 5,
      title: "Fashion MNIST & Keras Projects",
      category: "Deep Learning",
      description: "Academic ML/DL projects including Fashion MNIST classification and reinforcement learning implementations.",
      tags: ["Python", "Keras", "DL", "Academic"],
      status: "Completed",
      icon: "👔"
    }
  ],
  ecosystem: [
    {
      id: 6,
      title: "ProjectLib Ecosystem",
      category: "Full Stack Platform",
      description: "Main umbrella brand with marketplace, user system, coins economy, real-time updates (Firebase), Konnect payments, and SEO optimization. Deployed on custom hosting with Nginx, PHP-FPM, and Supervisor. Co-founded with Amin Majbri.",
      tags: ["React", "Firebase", "Payments", "DevOps", "Nginx"],
      status: "Live",
      highlight: true,
      link: "https://projectlib.tn",
      icon: "🚀"
    },
    {
      id: 7,
      title: "Give-n-Take Platform",
      category: "Symfony Application",
      description: "Platform where users give items to earn GoldCoins and buy using SilverCoins. Admin validation system with 3-page architecture.",
      tags: ["Symfony", "PHP", "Economy", "CRUD"],
      status: "Live",
      icon: "🎁"
    },
    {
      id: 8,
      title: "FunFusion Marketplace",
      category: "Laravel/Symfony",
      description: "Large marketplace with buying/selling, coins economy, 3D printing cost calculator, printing orders, and real-time notifications.",
      tags: ["Laravel", "Firebase", "3D Printing", "Real-time"],
      status: "Live",
      icon: "🛒"
    }
  ],
  sold_apps: [
    {
      id: 9,
      title: "TikTok Live Phone Scraper",
      category: "Automation & Data",
      description: "Custom tool that reads TikTok live comments, extracts phone numbers, sends to Google Sheets with deduplication and CSV export. SOLD via RIDTech.",
      tags: ["Python", "Scraping", "Real-time", "Google Sheets"],
      status: "Sold",
      highlight: true,
      icon: "📲"
    },
    {
      id: 10,
      title: "Facebook Scraping App",
      category: "Automation",
      description: "Facebook automation and scraping application. SOLD to client.",
      tags: ["Python", "Automation", "API"],
      status: "Sold",
      icon: "📘"
    }
  ],
  web_dev: [
    {
      id: 11,
      title: "RIDTech Agency Website",
      category: "Business Platform",
      description: "Personal brand for creating websites, development services, apps/tools, branding, logos, and UI/UX design for clients.",
      tags: ["React", "Branding", "UI/UX", "Business"],
      status: "Live",
      icon: "🎨"
    },
    {
      id: 12,
      title: "4G/5G & Fiber Optic Coverage Analysis",
      category: "Network Analysis Platform",
      description: "Analysis, mapping and improvement of 4G/5G and Fiber Optic network coverage in Tebarka using Symfony. Comprehensive network infrastructure assessment and optimization tool.",
      tags: ["Symfony", "Network Analysis", "Mapping", "Telecommunications"],
      status: "Completed",
      icon: "📡"
    },
    {
      id: 13,
      title: "JavaFX Applications",
      category: "Desktop Development",
      description: "User management with JDBC, profile pages with AI suggestions, login systems with roles (ROLE_USER), and database CRUD operations.",
      tags: ["JavaFX", "Java", "JDBC", "Desktop"],
      status: "Multiple Projects",
      icon: "☕"
    },
    {
      id: 14,
      title: "Coffee Management Website",
      category: "Full Stack Application",
      description: "Complete coffee shop management system with Spring Boot backend (repository/service architecture, JPA) and Angular frontend. Features include order management, inventory tracking, and customer interface.",
      tags: ["Spring Boot", "Angular", "Java", "TypeScript"],
      status: "Completed",
      icon: "☕"
    }
  ]
};

export const languages = [
  { name: "Arabic", proficiency: "Native" },
  { name: "French", proficiency: "Fluent" },
  { name: "English", proficiency: "Fluent" },
  { name: "Deutsch", proficiency: "Intermediate" }
];

export const businessActivities = [
  {
    title: "Active Trading",
    description: "Cryptocurrency and financial markets trading",
    icon: "📈"
  },
  {
    title: "Online Payments",
    description: "Payment processing integration with Monétique Tunisia",
    icon: "💳"
  },
  {
    title: "Erasmus+ Programs",
    description: "Active participation in European educational exchange programs",
    icon: "🌍"
  },
  {
    title: "3D Animation",
    description: "Theatre-style Scrum explanations, logo creation, mascot design (Chill Croco)",
    icon: "🎬"
  }
];
