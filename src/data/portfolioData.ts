export interface Project {
  id: string;
  title: string;
  tagline: string;
  date: string;
  category: string;
  description: string;
  bullets: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  accentColor?: string;
  gradient: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  yearBadge: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    icon: string;
    description: string;
    highlight?: boolean;
    level?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  type: 'hackathon' | 'publication' | 'competition';
  description: string;
  badge: string;
  highlightText: string;
  details: string[];
}

export const PERSONAL_INFO = {
  name: "Mukesh P",
  monogram: "MP",
  role: "AI Engineer & Full-Stack Developer",
  status: "Available for Internships & Projects",
  headline: "Specializing in Intelligent Document Processing, Multi-Agent RAG Architectures & Scalable ML Workflows",
  aboutParagraphs: [
    "I am a Computer Science Engineering undergraduate at SRM Institute of Science and Technology with a 9.18 CGPA, actively engineering production-grade AI systems, autonomous multi-agent pipelines, and high-performance full-stack architectures.",
    "Through my software development internship at Mecypher AI and winning 1st Prize at the Red Hat COE Hackathon, I have engineered end-to-end Intelligent Document Processing (IDP) pipelines, real-time ML monitoring dashboards, and deterministic smart contract integrations with sub-200ms response latencies.",
    "Driven by applied research, I author cutting-edge deep learning papers including AMFFT (Adaptive Multimodal Feature Fusion Transformer) and build resilient systems that transform complex data into actionable intelligence."
  ],
  education: {
    institution: "SRM Institute of Science and Technology",
    campus: "Ramapuram, Chennai",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    cgpa: "9.18",
    period: "Expected 2027"
  },
  contact: {
    email: "pmukeshshr@gmail.com",
    phone: "+91-9940260285",
    location: "Chennai, India",
    linkedin: "https://linkedin.com/in/mukesh-p",
    linkedinHandle: "in/mukesh-p",
    github: "https://github.com/Mukesh631102",
    githubHandle: "Mukesh631102",
    whatsapp: "https://wa.me/919940260285"
  },
  spokenLanguages: [
    { language: "English", proficiency: "Fluent / Professional" },
    { language: "German", proficiency: "Beginner" },
    { language: "Tamil", proficiency: "Native" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "python", description: "Production ML, Async APIs, IDP", highlight: true },
      { name: "JavaScript", icon: "javascript", description: "ES6+, Async, DOM, Web APIs" },
      { name: "C++", icon: "cpp", description: "Data Structures & High Performance" },
      { name: "Java", icon: "java", description: "OOP & Enterprise Backend" },
      { name: "SQL (PostgreSQL)", icon: "database", description: "Complex Queries, Indexing, RDBMS" },
      { name: "Solidity", icon: "solidity", description: "Smart Contracts & Payout Logic" },
      { name: "C", icon: "c", description: "Systems Programming & Memory" },
      { name: "R", icon: "r", description: "Statistical Modeling & Analysis" }
    ]
  },
  {
    category: "AI & Data Science",
    skills: [
      { name: "RAG & LangChain", icon: "brain", description: "Multi-Agent Citation Pipelines", highlight: true },
      { name: "EasyOCR & PaddleOCR", icon: "file-text", description: "Multi-Engine Text Extraction & IDP" },
      { name: "PyMuPDF", icon: "file-text", description: "PDF Parsing & Structured Extraction" },
      { name: "PyTorch", icon: "cpu", description: "Deep Learning, Custom Layers & Pruning" },
      { name: "LLM APIs (Groq)", icon: "zap", description: "Low-Latency Autonomous Inference" },
      { name: "OpenCV", icon: "eye", description: "Computer Vision & Preprocessing" },
      { name: "YOLOv8 & ResNet", icon: "layers", description: "Object Detection & Classification" },
      { name: "Pandas & NumPy", icon: "bar-chart-2", description: "High-Throughput Vectorized Analysis" },
      { name: "Scikit-Learn", icon: "activity", description: "Predictive Modeling & Ensembles" }
    ]
  },
  {
    category: "Frameworks & Backend",
    skills: [
      { name: "FastAPI", icon: "server", description: "Sub-200ms Async Microservices", highlight: true },
      { name: "Flask", icon: "flame", description: "Production ML Workflow Serving" },
      { name: "React", icon: "react", description: "Component-Driven User Interfaces" },
      { name: "Next.js", icon: "nextjs", description: "Full-Stack Server-Rendered Apps" },
      { name: "Node.js", icon: "nodejs", description: "High-Frequency Dual Backend" },
      { name: "Streamlit", icon: "layout", description: "Rapid AI & Financial Dashboards" },
      { name: "Tailwind CSS", icon: "palette", description: "Responsive & Modular Design" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Linux & Ubuntu", icon: "terminal", description: "Shell Scripting & Server Config", highlight: true },
      { name: "Git & GitHub", icon: "git", description: "Version Control & CI/CD Workflows" },
      { name: "GPU/CUDA", icon: "gpu", description: "Accelerated Tensor Compute" },
      { name: "Postman", icon: "send", description: "API Testing & Schema Validation" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "financial-workflow-rag",
    title: "AI Financial Workflow Platform",
    tagline: "Autonomous Multi-Agent RAG Orchestration",
    date: "Jan. 2026",
    category: "AI & Enterprise",
    featured: true,
    description: "Designed a Retrieval-Augmented Generation (RAG) pipeline to automate complex procurement, audit, and documentation workflows for educational institutions.",
    bullets: [
      "RAG Architecture: Engineered a high-precision RAG pipeline extracting institutional procurement regulations and financial guidelines.",
      "Agentic Orchestration: Implemented autonomous Multi-Agent systems (Retriever, Drafting, Verifier) ensuring policy adherence and citation-backed decision support.",
      "Enterprise Integration: Engineered seamless API-based integration with existing ERP systems and financial ledgers, ensuring 100% compliance with organizational protocols."
    ],
    technologies: ["Python", "Pandas", "Streamlit", "SQL", "RAG", "Multi-Agent Systems"],
    githubUrl: "https://github.com/Mukesh631102",
    gradient: "linear-gradient(135deg, #1f2738 0%, #171b26 100%)",
    accentColor: "#f3b432"
  },
  {
    id: "agroscope-intelligence",
    title: "AgroScope Precision Agriculture",
    tagline: "Satellite Telematics & Deterministic Smart Contracts",
    date: "Nov. 2025",
    category: "Full-Stack & Web3",
    featured: true,
    description: "Deployed a fully software-based predictive solution integrating satellite telematics for granular time-series field monitoring, actively eliminating IoT hardware dependencies.",
    bullets: [
      "1st Prize Winner: Awarded 1st Prize at Red Hat COE Hackathon (SIMATS, Chennai) for platform architecture.",
      "Interface & Logic Engine: Engineered a mobile interface restricted exclusively to voice and text inputs (eliminating image uploads), utilizing Solidity smart contracts to execute deterministic automated payouts based on localized data anomalies.",
      "High-Throughput Pipeline: Optimized a dual-backend (FastAPI/Node.js) to handle high-frequency data streams, ensuring sub-200ms responsiveness in low-connectivity environments."
    ],
    technologies: ["Python", "FastAPI", "Node.js", "Solidity", "Satellite Telematics", "Smart Contracts"],
    githubUrl: "https://github.com/Mukesh631102",
    gradient: "linear-gradient(135deg, #1c2b29 0%, #151d20 100%)",
    accentColor: "#48bb78"
  },
  {
    id: "neuralinsight-platform",
    title: "NeuralInsight Quality Visualization",
    tagline: "Dynamic Statistical Dashboards & Groq LLM Insights",
    date: "Mar. 2026",
    category: "Data Science & AI",
    featured: true,
    description: "Engineered an automated data science application to improve the visualization of current IT tools, enabling dynamic generation of statistical dashboards and interactive reports for end-users.",
    bullets: [
      "Dynamic Dashboard Generation: Profiled datasets to compute automated statistical distributions, variance metrics, and anomaly flags.",
      "Autonomous LLM Insights: Integrated an LLM AI interface (Groq LLM) to read statistical profiles and autonomously generate executive business insights, drastically accelerating day-to-day data analysis.",
      "High-Throughput API: Designed low-latency endpoints using FastAPI to ingest and transform large tabular data in real time."
    ],
    technologies: ["FastAPI", "Pandas", "Groq LLM", "Data Science", "Python", "Data Visualization"],
    githubUrl: "https://github.com/Mukesh631102",
    gradient: "linear-gradient(135deg, #2b2138 0%, #1c1828 100%)",
    accentColor: "#9f7aea"
  },
  {
    id: "document-asset-pipeline",
    title: "Intelligent Document & Asset Processing Pipeline",
    tagline: "Design Workflow Automation & Unstructured Data Extraction",
    date: "2026",
    category: "AI & Enterprise",
    featured: true,
    description: "Built an automated document processing pipeline using EasyOCR, PaddleOCR, PyMuPDF, and OpenCV to parse complex CAD spec sheets, CMF design guidelines, and unstructured PDF asset bundles without manual data entry.",
    bullets: [
      "Automated Extraction Pipeline: Built a multi-engine OCR pipeline using EasyOCR, PaddleOCR, PyMuPDF, and OpenCV to parse complex CAD spec sheets, CMF design guidelines, and unstructured PDF asset bundles without manual data entry.",
      "Streamlit Micro-App: Developed an intuitive Streamlit interface allowing non-technical designers to convert multi-format visual documents and spec tables into structured JSON/CSV data in seconds.",
      "Computer Vision Pipeline: Engineered custom image preprocessing routines (contour detection, adaptive thresholding, and deskewing) with OpenCV to cleanly extract low-resolution tables and typography from design mockups.",
      "80% Time Reduction: Eliminated manual asset re-keying and reduced documentation review times by 80%, streamlining cross-functional handoffs between Design, Engineering, and Supply Chain."
    ],
    technologies: ["EasyOCR", "PaddleOCR", "PyMuPDF", "OpenCV", "Streamlit", "Python"],
    githubUrl: "https://github.com/Mukesh631102",
    gradient: "linear-gradient(135deg, #1e2a30 0%, #141c22 100%)",
    accentColor: "#38bdf8"
  },
  {
    id: "auraprune-studio",
    title: "AuraPrune Studio",
    tagline: "Visual Tool Building & Making Complex AI Accessible",
    date: "2026",
    category: "Data Science & AI",
    featured: true,
    description: "Designed and deployed AuraPrune Studio, a full-stack web dashboard that turns complex neural network pruning and model optimization metrics into interactive, real-time visual insights.",
    bullets: [
      "Visual AI Dashboard: Designed and deployed a full-stack web dashboard that turns complex neural network pruning and model optimization metrics into interactive, real-time visual insights.",
      "Custom Pruning Layers: Implemented custom PyTorch PrunableLinear layers featuring trainable sigmoid gate scores and L1 sparsity regularization to visualize weight-pruning trade-offs dynamically.",
      "Vercel Deployment: Deployed a responsive web dashboard on Vercel with interactive visual controls, allowing non-technical teammates to experiment with parameter changes without writing code.",
      "UX Bridge for AI: Bridged the gap between AI backend logic and UI design by creating a frictionless visual interface, accelerating model performance analysis and decision-making turnaround times."
    ],
    technologies: ["PyTorch", "React", "Vercel", "Python", "Neural Network Pruning", "Full-Stack"],
    githubUrl: "https://github.com/Mukesh631102",
    gradient: "linear-gradient(135deg, #2a1f38 0%, #1a1428 100%)",
    accentColor: "#e879f9"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "mecypher-ai",
    role: "Software Development Intern",
    company: "Mecypher AI India",
    location: "Chennai, India",
    period: "Aug. 2025 – Feb. 2026",
    yearBadge: "2026",
    description: "Core contributor to production AI pipelines, Intelligent Document Processing (IDP), and real-time machine learning inference workflows.",
    bullets: [
      "Engineered multi-stage Intelligent Document Processing (IDP) and OCR pipelines utilizing PaddleOCR and PyMuPDF to extract and structure unstructured textual data.",
      "Architected a production-grade machine learning workflow platform using Python and Flask, implementing modular algorithms for end-to-end data ingestion, model training, and low-latency real-time inference.",
      "Designed responsive dashboards and REST APIs for real-time AI model monitoring; profiled and resolved latency hotspots to ensure platform scalability and responsiveness for concurrent users."
    ],
    technologies: ["Python", "Flask", "PaddleOCR", "PyMuPDF", "ML Workflows", "REST APIs", "Model Monitoring"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "red-hat-hackathon",
    title: "1st Prize Winner — Red Hat COE Hackathon",
    organization: "SIMATS, Chennai",
    type: "hackathon",
    badge: "1st Prize Winner",
    highlightText: "Awarded 1st Prize for designing and pitching the AgroScope platform architecture, integrating satellite telematics and Solidity smart contracts.",
    description: "Secured 1st Prize at the Red Hat Center of Excellence Hackathon for engineering an IoT-independent precision agriculture solution with deterministic micro-payout contracts.",
    details: [
      "Pitched end-to-end architecture to Red Hat enterprise judges",
      "Demonstrated real-time satellite data ingestion and automated policy verification",
      "Awarded highest honors among regional engineering competitors"
    ]
  },
  {
    id: "amfft-research",
    title: "Research Publication: AMFFT",
    organization: "Adaptive Multimodal Feature Fusion Transformer",
    type: "publication",
    badge: "Authored & Submitted",
    highlightText: "Authored and submitted the research paper 'Adaptive Multimodal Feature Fusion Transformer (AMFFT)'.",
    description: "Developed a novel deep learning architecture focusing on dynamic weight allocation across heterogeneous multimodal inputs to improve contextual representation.",
    details: [
      "Formulated cross-attention fusion layers for disparate signal streams",
      "Benchmarked against baseline Transformer models for latency and representation accuracy",
      "Prepared and submitted manuscript for scientific peer review"
    ]
  },
  {
    id: "v-vortex-nexathon",
    title: "Regional Competitive Hackathons",
    organization: "V-Vortex & Nexathon '25 (VIT Chennai)",
    type: "competition",
    badge: "Competitive Finalist",
    highlightText: "Active participant and team architect in regional technical competitions including V-Vortex and Nexathon '25.",
    description: "Collaborated under intense sprint environments to build rapid prototypes addressing pressing real-world challenges in data analysis and system integration.",
    details: [
      "Delivered production-ready prototypes within 24–36 hour hackathon time limits",
      "Engineered full-stack and machine learning solutions under strict time constraints"
    ]
  }
];
