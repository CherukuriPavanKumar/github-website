"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll";
import {
  AIDiorama,
  WebDevDiorama,
  CyberDiorama,
  OpenSourceDiorama,
  CreativeStudioDiorama,
} from "@/components/ui/dioramas";

const domains = [
  {
    title: "Agentic Development",
    description:
      "Build autonomous systems that think, plan, and act. From LLM-powered agents to multi-step reasoning pipelines, we push the boundaries of what AI can do independently.",
    content: <AIDiorama />,
  },
  {
    title: "Web Engineering",
    description:
      "Architect production-grade systems. We go beyond templates — focusing on performance, scalability, and shipping real products with modern stacks.",
    content: <WebDevDiorama />,
  },
  {
    title: "Digital Defence",
    description:
      "Secure the systems we build. Learn offensive security, penetration testing, cryptography, and incident response through hands-on CTFs and real-world scenarios.",
    content: <CyberDiorama />,
  },
  {
    title: "Open Source / DevEx",
    description:
      "Contribute to the tools developers use every day. We build CLIs, libraries, GitHub Actions, and developer tools — and ship them to the open-source ecosystem.",
    content: <OpenSourceDiorama />,
  },
  {
    title: "Creative Studio",
    description:
      "The visual voice of the community. Content strategy, photography, graphic design, video production, and brand storytelling — where creativity meets craft.",
    content: <CreativeStudioDiorama />,
  },
];

export const DomainsSection = () => {
  return (
    <section id="domains" className="bg-black py-24 md:py-32">
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
