"use client";

import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { showcaseProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

export const ProjectsShowcase = () => {
  const [activeId, setActiveId] = useState<string | null>(showcaseProjects[0]?.id || null);

  return (
    <section id="projects" className="bg-black px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto w-full max-w-5xl">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Things We've Built
          </motion.p>
          <motion.h2
            className="mb-6 text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Real projects.{" "}
            <span className="text-white/30">Real builders. Real impact.</span>
          </motion.h2>
        </div>

        {/* Projects List */}
        <motion.div
          className="border-t border-white/[0.06]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <LayoutGroup>
            {showcaseProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={activeId === project.id}
                onClick={() =>
                  setActiveId(activeId === project.id ? null : project.id)
                }
              />
            ))}
          </LayoutGroup>
        </motion.div>

      </div>
    </section>
  );
};
