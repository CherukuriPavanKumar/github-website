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
      linkedin: "https://www.linkedin.com/in/ksrichakri/",
      github: "https://github.com/ksrichakri",
      email: "mailto:skedaris2@gitam.in",
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
      linkedin: "https://www.linkedin.com/in/mahesh-prayaga-850475240/",
      github: "https://github.com/mahesh-prayaga",
      email: "mailto:maheshprayaga09@gmail.com",
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
      linkedin: "https://www.linkedin.com/in/nvkasturi",
      github: "https://github.com/Kasturi25n",
      email: "mailto:nvkasturi4@gmail.com",
    },
  },
  {
    name: "Meghana Mudundi",
    role: "Joint Secretary",
    image: "/meghana.jpeg",
    domain: "Coordination",
    bio: "Architecting backend systems and driving technical workshops for the community.",
    year: "3rd Year",
    expertise: ["Backend Dev", "Technical Mentorship", "Workshops"],
    links: {
      linkedin: "https://www.linkedin.com/in/meghanamudundi/",
      github: "https://github.com/Megghanaa",
      email: "mailto:mmudundi@student.gitam.edu",
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
      linkedin: "https://www.linkedin.com/in/chsrajavarma/",
      github: "https://github.com/chsrajavarma8",
      email: "mailto:schekuri2@student.gitam.edu",
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
      linkedin: "https://www.linkedin.com/in/krishnasrinivas-/",
      github: "https://github.com/KrishnaSrinivas-24",
      email: "mailto:krishnasrinivas2409@gmail.com",
    },
  },
];
