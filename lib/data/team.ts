export interface TeamMember {
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
  domain?: string;
  favoriteTech?: string;
  focus?: string;
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
    favoriteTech: "Python",
    focus: "Community",
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
    favoriteTech: "React",
    focus: "Hackathons",
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
    favoriteTech: "Figma",
    focus: "Events",
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
    favoriteTech: "Java",
    focus: "Workshops",
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
    favoriteTech: "C++",
    focus: "Logistics",
    links: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
  {
    name: "Krishna Srinivas Madhira",
    role: "Technical Expert",
    image: "/krishna.png",
    objectPosition: "top",
    domain: "Technical",
    favoriteTech: "TypeScript",
    focus: "Open Source",
    links: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
];
