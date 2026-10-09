import { ExperienceItem, Project, ServiceItem } from '../types';
import originalPhotoImg from '../assets/images/amog_original_photo.jpg';
import sankalpLogoImg from '../assets/images/sankalp_logo_1787416978436.jpg';
import rideSharingImg from '../assets/images/ride_sharing_mockup_1787401060031.jpg';
import tutorFinderImg from '../assets/images/tutor_finder_mockup_1787401081928.jpg';
import pickleballImg from '../assets/images/pickleball_mockup_1787401094978.jpg';

export const PERSONAL_INFO = {
  name: "Amog Rao",
  fullName: "POTLAPALLY AMOG RAO",
  role: "Full-Stack Developer",
  tagline: "I build modern web apps, robust APIs, and intelligent systems.",
  location: "Hyderabad / Vijayawada, India",
  phone: "7207495814",
  email: "amograo77@gmail.com",
  calUrl: "https://cal.com/amog-rao-hnd3vf/30min",
  calUsername: "amog-rao-hnd3vf",
  calLink: "amog-rao-hnd3vf/30min",
  github: "https://github.com/amograo9661",
  githubUsername: "amograo9661",
  linkedin: "https://www.linkedin.com/in/amog-rao-b14332285",
  linkedinUsername: "amog-rao-b14332285",
  linkedinDisplayName: "Amog Rao",
  availability: "Available for Internships & Full-Time Software Roles",
  defaultAvatar: originalPhotoImg,
  fullPhoto: originalPhotoImg,
  headline: "Building modern web applications, reliable APIs, and intelligent systems.",
  intro: "Hi, I'm Amog Rao — a passionate Computer Science student at KL University specializing in AI & Autonomous Systems. I build responsive web applications, secure full-stack solutions, and robust APIs with Java, Spring Boot, React, and SQL.",
  bio: "Computer Science student specializing in AI for Autonomous Systems with hands-on experience in Full Stack Development, Java, Spring Boot, React.js, and SQL databases. Strong foundation in DSA, OOP, and DBMS with experience in building scalable REST APIs and testing user interfaces.",
  educationShort: "KL University • B.Tech CSE (AI & Autonomous Systems)",
  careerInterests: [
    "Full Stack Development",
    "Java & Spring Boot",
    "Frontend Systems",
    "RESTful APIs",
    "AI & Autonomous Systems",
    "Cloud & DevOps"
  ],
  missionStatement: "My mission is to build reliable full-stack systems and intelligent features that solve real problems.",
  missionSkills: ["JAVA", "REACT", "SPRING BOOT", "NODE.JS", "SQL", "AWS"],
};

export interface SkillCategoryGroup {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Modern, responsive UI & user experience",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Bootstrap", "JavaScript (ES6+)"]
  },
  {
    id: "backend",
    name: "Backend & APIs",
    description: "Robust business logic, microservices & REST APIs",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs", "JWT Auth"]
  },
  {
    id: "database",
    name: "Databases",
    description: "Relational persistence, query optimization & schemas",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Database Design", "CRUD Operations"]
  },
  {
    id: "tools",
    name: "Cloud & Tools",
    description: "Modern engineering workflow & containerization",
    skills: ["AWS", "Docker", "Git & GitHub", "Postman", "Linux", "Vite"]
  },
  {
    id: "core-ai",
    name: "Core CS & AI",
    description: "Foundational CS principles & autonomous intelligence",
    skills: ["Data Structures (DSA)", "OOP", "DBMS", "Software Testing", "Sensor Fusion / ACC", "Python"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "backend",
    number: "01",
    title: "Backend Platforms",
    description: "Designing REST APIs and databases with Spring Boot, Node.js, PostgreSQL and MySQL that stay reliable under load.",
    skills: ["Spring Boot", "Node.js", "PostgreSQL", "MySQL", "RESTful Architecture"],
    iconName: "Server"
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend Systems",
    description: "Building responsive, accessible interfaces with React.js, HTML5, CSS3 and Bootstrap.",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Bootstrap"],
    iconName: "Layout"
  },
  {
    id: "fullstack",
    number: "03",
    title: "Full Stack Apps",
    description: "Shipping complete applications with authentication, CRUD operations, and clean UI/UX from end to end.",
    skills: ["JWT Authentication", "Role-Based Access", "API Gateway", "State Management", "Full-Stack CI/CD"],
    iconName: "Layers"
  },
  {
    id: "ai-autonomous",
    number: "04",
    title: "AI & Autonomous Systems",
    description: "Exploring sensor fusion and control systems for ACC and lane-keeping features in autonomous vehicles.",
    skills: ["Sensor Fusion", "Control Systems (ACC)", "Lane Detection", "Python/OpenCV", "Predictive Models"],
    iconName: "Cpu"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "bookmark-manager",
    title: "Bookmark Manager (Curation Engine)",
    subtitle: "Full-stack curation engine with hand-crafted motion transitions",
    category: "Full Stack",
    description: "Full-stack bookmark curation web app with an Express/SQLite backend and custom CSS motion transitions.",
    longDescription: "Built a full-stack bookmark curation web app as a final-year project, with a React 18 + TypeScript + Vite frontend and an Express/SQLite backend. Implemented hand-written CSS animations (card fade/rise, hover lift, modal slide, toast transitions) for a polished, dependency-light UI.",
    image: rideSharingImg,
    tags: ["React 18", "TypeScript", "Vite", "Node.js", "Express", "SQLite"],
    features: [
      "Full-Stack Architecture: React 18 frontend paired with an Express and SQLite persistence layer",
      "Hand-Crafted Animations: Card fade/rise, hover lift, modal slide, and toast transitions",
      "Tagging & Organization: Dynamic bookmark collection filtering, search, and categorization",
      "Lightweight Performance: Zero heavy animation libraries for ultra-fast render speeds"
    ],
    architecture: [
      "Frontend: React 18 + TypeScript + Vite",
      "Backend: Node.js & Express.js REST API",
      "Database: SQLite lightweight embedded SQL storage"
    ],
    metrics: "Instantaneous sub-10ms UI responses with silky 60fps hand-written transitions",
    githubUrl: "https://github.com/amograo9661"
  },
  {
    id: "home-tutor-finder",
    title: "Home Tutor Finder",
    subtitle: "Discovery & booking platform connecting students with verified educators",
    category: "Full Stack",
    description: "Responsive tutor-finder platform with user-focused interfaces and tutor discovery functionality.",
    longDescription: "Built a responsive tutor-finder platform with React.js frontend, Node.js backend, SQL database integration, and authentication. Developed user-focused interfaces and tutor discovery functionality.",
    image: tutorFinderImg,
    tags: ["React.js", "Node.js", "SQL", "Authentication", "Express"],
    features: [
      "Multi-Parameter Search: Filter tutors by subject, ratings, hourly pricing, and availability",
      "User Authentication: Safe authentication flow for student and tutor profiles",
      "Tutor Profiles: Detailed background, educational qualification verification, and student feedback",
      "Booking Request Management: Direct inquiry forms and scheduled slot confirmation"
    ],
    architecture: [
      "Frontend: React.js with modular component tree & responsive layouts",
      "Server: Express.js REST API with clean controller-service-repository pattern",
      "Database: Relational SQL schema with foreign key cascading for bookings and ratings"
    ],
    metrics: "Streamlined search indexing reducing query lookups to single-digit milliseconds",
    githubUrl: "https://github.com/amograo9661"
  },
  {
    id: "pickleball-website",
    title: "Pickle Ball Website",
    subtitle: "Community hub, court reservation, and tournament tracking portal",
    category: "Frontend",
    description: "Responsive web pages with interactive features and reusable UI components.",
    longDescription: "Developed responsive web pages with interactive features and reusable UI components for desktop and mobile. Used Git and GitHub for version control and project collaboration.",
    image: pickleballImg,
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Git", "GitHub"],
    features: [
      "Dynamic Court Scheduler: Visual calendar for reserved and open court slots",
      "Reusable UI Component Library: Modular cards, modal dialogs, and responsive navigation",
      "Mobile-Optimized Experience: Fluid touch controls and responsive layouts for athletes on mobile",
      "Interactive Player Leaderboard: Live tournament scoring cards and standings"
    ],
    architecture: [
      "Frontend: React.js + Modern HTML5 Semantic Markup",
      "Styling: Clean CSS3 transitions and Tailwind CSS utilities",
      "Component Architecture: Encapsulated reusable widgets for schedule and tournament brackets"
    ],
    metrics: "100% Google Lighthouse performance score on core web vitals",
    githubUrl: "https://github.com/amograo9661"
  },
  {
    id: "autonomous-acc-lka",
    title: "Adaptive Cruise Control & Lane Keeping Assistant",
    subtitle: "Sensor fusion and control algorithms for autonomous vehicle safety",
    category: "Autonomous & AI",
    description: "Worked on integrating ACC and LKA using sensor fusion concepts to support safer and more reliable vehicle assistance.",
    longDescription: "Engineered sensor fusion pipelines combining radar range estimates and camera-based lane boundary detections. Implemented longitudinal velocity regulation for Adaptive Cruise Control (ACC) alongside lateral steering corrections for Lane Keeping Assistance (LKA).",
    image: rideSharingImg,
    tags: ["AI for Autonomous Systems", "Sensor Fusion", "ACC", "LKA", "Python", "Control Systems"],
    features: [
      "Sensor Fusion Pipeline: Multi-source sensor telemetry reconciliation for target distance estimation",
      "Adaptive Cruise Control (ACC): Dynamic speed and headway adjustment based on lead vehicle velocity",
      "Lane Keeping Assistant (LKA): Computer vision based lane departure detection and steering torque assist",
      "Safety Critical Simulation: Validated under simulated highway scenarios and adverse conditions"
    ],
    architecture: [
      "Perception: Computer vision edge & polynomial lane fitting",
      "Control: PID and model predictive longitudinal/lateral control",
      "Simulation: Virtual test track validation environment"
    ],
    metrics: "Reliable real-time lane tracking and headway regulation under simulated test courses",
    githubUrl: "https://github.com/amograo9661"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "sankalp",
    organization: "Sankalp",
    role: "Frontend Developer & Application Tester",
    period: "Feb 2026 – Jul 2026",
    location: "India",
    type: "work",
    gradeOrBadge: "Internship",
    logo: sankalpLogoImg,
    description: [
      "Developed clean, responsive, user-friendly frontend interfaces and implemented key UI screens and interactions.",
      "Maintained consistent, minimal design and worked with the team to translate application requirements into functional UI.",
      "Tested features and user flows to identify bugs, UI issues, and functional problems, supporting application quality."
    ],
    skills: ["React.js", "Frontend Development", "Application Testing", "UI/UX", "Quality Assurance"]
  },
  {
    id: "kl-university",
    organization: "KL University",
    role: "B.Tech in Computer Science and Engineering",
    period: "Expected May 2027",
    location: "Vijayawada, India",
    type: "education",
    gradeOrBadge: "Academics",
    description: [
      "Specialization in Artificial Intelligence for Autonomous Systems.",
      "Strong foundation in DSA, OOP, DBMS with exposure to AWS, Git, GitHub, and Docker."
    ],
    skills: ["AI for Autonomous Systems", "Java", "DSA", "OOP", "DBMS", "AWS"]
  }
];

export const RESUME_DATA = {
  header: {
    fullName: "POTLAPALLY AMOG RAO",
    phone: "7207495814",
    email: "amograo77@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/amog-rao-b14332285",
    linkedinDisplay: "linkedin.com/in/amog-rao-b14332285",
    githubUrl: "https://github.com/amograo9661",
    githubDisplay: "github.com/amograo9661"
  },
  professionalSummary: "Computer Science and Engineering student specializing in AI for Autonomous Systems with hands-on experience in Full Stack Development, Java, Spring Boot, React.js, SQL, and REST APIs. Experienced in responsive web applications, authentication, CRUD operations, databases, testing, and software development practices. Strong foundation in DSA, OOP, DBMS with exposure to AWS, Git, GitHub, and Docker. Seeking software development opportunities across full-stack, backend, Java, AI/ML, and cloud roles.",
  education: [
    {
      institution: "KL University",
      degree: "B.Tech in Computer Science and Engineering (AI for Autonomous Systems)",
      cgpa: "CGPA: 8.81/10",
      year: "Expected May 2027"
    },
    {
      institution: "Sri Chaitanya Raman Bhavan",
      degree: "Intermediate",
      year: "2021–2023"
    },
    {
      institution: "Dr. KKR Gowtham International School",
      degree: "10th Standard",
      year: "2020–2021"
    }
  ],
  technicalSkills: {
    languages: "Java, Python, C, JavaScript, TypeScript",
    frontend: "React.js, HTML5, CSS3, Bootstrap",
    backend: "Spring Boot, Node.js, Express, REST APIs",
    databases: "PostgreSQL, MySQL, SQLite",
    core: "DSA, OOP, DBMS",
    tools: "Git, GitHub, Docker, Postman, VS Code",
    cloud: "AWS"
  },
  experience: [
    {
      company: "Sankalp",
      role: "Frontend Developer & Application Tester",
      type: "Internship",
      period: "Feb 2026 – Jul 2026",
      bullets: [
        "Developed clean, responsive, user-friendly frontend interfaces and implemented key UI screens and interactions.",
        "Maintained consistent, minimal design and worked with the team to translate application requirements into functional UI.",
        "Tested features and user flows to identify bugs, UI issues, and functional problems, supporting application quality."
      ]
    }
  ],
  projects: [
    {
      title: "Bookmark Manager (Curation Engine)",
      techStack: "React 18 | TypeScript | Vite | Node.js/Express | SQLite",
      bullets: [
        "Built a full-stack bookmark curation web app as a final-year project, with a React 18 + TypeScript + Vite frontend and an Express/SQLite backend.",
        "Implemented hand-written CSS animations (card fade/rise, hover lift, modal slide, toast transitions) for a polished, dependency-light UI."
      ]
    },
    {
      title: "Home Tutor Finder",
      techStack: "React.js | Node.js | SQL | Authentication",
      bullets: [
        "Built a responsive tutor-finder platform with React.js frontend, Node.js backend, SQL database integration, and authentication.",
        "Developed user-focused interfaces and tutor discovery functionality."
      ]
    },
    {
      title: "Pickle Ball Website",
      techStack: "HTML5 | CSS3 | JavaScript | React.js | Git | GitHub",
      bullets: [
        "Developed responsive web pages with interactive features and reusable UI components for desktop and mobile.",
        "Used Git and GitHub for version control and project collaboration."
      ]
    },
    {
      title: "Adaptive Cruise Control & Lane Keeping Assistant",
      techStack: "AI for Autonomous Systems",
      bullets: [
        "Worked on integrating ACC and LKA using sensor fusion concepts to support safer and more reliable vehicle assistance."
      ]
    }
  ],
  certifications: [
    "AWS Certification / Course"
  ],
  careerInterests: [
    "Software Development",
    "Full Stack Development",
    "Java Development",
    "Backend Development",
    "AI/ML",
    "Cloud Computing",
    "Autonomous Systems"
  ]
};
