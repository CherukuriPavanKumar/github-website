"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll";
import {
  AIDiorama,
  WebDevDiorama,
  CyberDiorama,
  DataScienceDiorama,
  CPDiorama,
  UIDiorama,
} from "@/components/ui/dioramas";

const domains = [
  {
    title: "AI & Machine Learning",
    description:
      "Train models, analyze patterns, and build the future. From neural networks to large language models, we explore the cutting edge of artificial intelligence.",
    content: <AIDiorama />,
  },
  {
    title: "Web Development",
    description:
      "Architect scalable applications. We focus on modern stacks, performance, and building products that can handle real users.",
    content: <WebDevDiorama />,
  },
  {
    title: "Cybersecurity",
    description:
      "Defend the digital world. Learn penetration testing, cryptography, and network security through hands-on CTFs and real-world scenarios.",
    content: <CyberDiorama />,
  },
  {
    title: "Data Science",
    description:
      "Turn raw data into actionable insights. Master data visualization, statistical analysis, and big data technologies.",
    content: <DataScienceDiorama />,
  },
  {
    title: "Competitive Programming",
    description:
      "Optimize everything. Master algorithms, data structures, and problem-solving to compete on a global scale.",
    content: <CPDiorama />,
  },
  {
    title: "UI/UX Design",
    description:
      "Craft beautiful, intuitive experiences. We bridge the gap between human psychology and digital interfaces.",
    content: <UIDiorama />,
  },
];

export const DomainsSection = () => {
  return (
    <section className="bg-black py-24 md:py-32">
      {/* Section label */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
        <p className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/25">
          Domains
        </p>
      </div>
      <StickyScroll content={domains} />
    </section>
  );
};
