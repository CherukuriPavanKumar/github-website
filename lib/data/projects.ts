export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  builders: string[];
  year: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export const showcaseProjects: Project[] = [
  {
    id: "p01",
    title: "Agent Vortex",
    shortDescription: "An AI operating system that plans, reasons, and executes complex workflows...",
    longDescription: "An AI operating system that plans, reasons, and executes complex workflows using autonomous agents, long-term memory, and real-world integrations.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop",
    builders: ["Pavan Kumar"],
    year: "2025",
    techStack: ["Python", "LangGraph", "PostgreSQL", "Docker", "Gemini"],
    features: [
      "Autonomous agent workflows",
      "Long-term memory architecture",
      "Real-world tool integrations",
      "Complex reasoning capabilities"
    ],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "p02",
    title: "Agent Astra",
    shortDescription: "A next-generation AI assistant built for natural conversations and intelligent task execution.",
    longDescription: "A next-generation AI assistant built for natural conversations, intelligent task execution, and seamless interaction across everyday workflows.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    builders: ["Pavan Kumar"],
    year: "2025",
    techStack: ["Python", "FastAPI", "LLMs", "React"],
    features: [
      "Natural conversation engine",
      "Intelligent task execution",
      "Seamless workflow interaction",
      "FastAPI backend architecture"
    ],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "p03",
    title: "Mini Genie",
    shortDescription: "A consumer-scale reimplementation of DeepMind's Genie world model.",
    longDescription: "A consumer-scale reimplementation of DeepMind's Genie world model, exploring video tokenization, latent actions, and interactive world simulation.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    builders: ["Pavan Kumar"],
    year: "2025",
    techStack: ["PyTorch", "Transformers", "Computer Vision", "Research"],
    features: [
      "Video tokenization pipeline",
      "Latent action exploration",
      "Interactive world simulation",
      "Consumer-scale architecture"
    ],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "p04",
    title: "SwiftChain",
    shortDescription: "A decentralized cryptocurrency payment platform enabling secure, transparent, and low-cost blockchain transactions.",
    longDescription: "A decentralized cryptocurrency payment platform enabling secure, transparent, and low-cost blockchain transactions.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2000&auto=format&fit=crop",
    builders: ["Pavan Kumar"],
    year: "2025",
    techStack: ["Solidity", "Ethereum", "React", "Web3"],
    features: [
      "Secure blockchain transactions",
      "Low-cost payment routing",
      "Transparent ledger system",
      "Decentralized architecture"
    ],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "p05",
    title: "TripSpark",
    shortDescription: "A modern travel booking platform featuring interactive maps and trip discovery.",
    longDescription: "A modern travel booking platform featuring interactive maps, cloud media management, and seamless trip discovery inspired by Airbnb.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
    builders: ["Pavan Kumar"],
    year: "2025",
    techStack: ["Node.js", "Express", "MongoDB", "Mapbox"],
    features: [
      "Interactive Mapbox integration",
      "Cloud media management",
      "Seamless trip discovery",
      "Modern Airbnb-inspired UI"
    ],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "p06",
    title: "ImmersiView",
    shortDescription: "An immersive 3D real estate visualization platform powered by Gaussian Splatting.",
    longDescription: "An immersive 3D real estate visualization platform powered by Gaussian Splatting, enabling photorealistic walkthroughs directly in the browser.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
    builders: ["Pavan Kumar"],
    year: "2025",
    techStack: ["Three.js", "React", "Gaussian Splatting", "WebGL"],
    features: [
      "Gaussian Splatting rendering",
      "Photorealistic browser walkthroughs",
      "Immersive 3D visualization",
      "WebGL performance optimization"
    ],
    githubUrl: "#",
    liveUrl: "#"
  }
];
