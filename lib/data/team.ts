export interface TeamMember {
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
  domain: string;
  bio: string;
  year: string;
  expertise: string[];
  links: {
    linkedin?: string;
    github?: string;
    email?: string;
    phone?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "K Sri Chakri",
    role: "President",
    image: "/chakri.jpg",
    domain: "Leadership",
    bio: "Leading the community vision and orchestrating technical initiatives at scale.",
    year: "4th Year",
    expertise: ["Community Building", "Strategic Planning", "System Architecture"],
    links: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
  {
    name: "Mahesh Prayaga",
    role: "Vice President",
    image: "/mahesh.webp",
    domain: "Management",
    bio: "Bridging the gap between product strategy and engineering execution. Hackathon enthusiast.",
    year: "4th Year",
    expertise: ["Product Management", "Hackathons", "Frontend Dev"],
    links: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
  {
    name: "N V Kasturi",
    role: "Secretary",
    image: "/kasturi.jpg",
    domain: "Operations",
    bio: "Designing user-centric experiences and streamlining organizational operations.",
    year: "3rd Year",
    expertise: ["UI/UX Design", "Operations", "Event Coordination"],
    links: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
  {
    name: "Meghana Mudundi",
    role: "Joint Secretary",
    image: "/meghana.jpg",
    domain: "Coordination",
    bio: "Architecting backend systems and driving technical workshops for the community.",
    year: "3rd Year",
    expertise: ["Backend Dev", "Technical Mentorship", "Workshops"],
    links: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
  {
    name: "Ch S Raja Varma",
    role: "Head of Operations",
    image: "/raja.jpeg",
    domain: "Operations",
    bio: "Optimizing community logistics and building high-performance operational pipelines.",
    year: "3rd Year",
    expertise: ["Logistics", "Operations", "Pipeline Optimization"],
    links: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
  {
    name: "Krishna Srinivas Madhira",
    role: "Technical Expert",
    image: "/krishna.webp",
    objectPosition: "top",
    domain: "Technical",
    bio: "Building open-source tools, obsessing over DX, and scaling web infrastructure.",
    year: "4th Year",
    expertise: ["Full Stack Dev", "Open Source", "Developer Experience"],
    links: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
];
