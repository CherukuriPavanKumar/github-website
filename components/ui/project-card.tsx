"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data/projects";
import { ArrowRight, GitBranch, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export const ProjectCard = ({ project, index, isActive, onClick }: ProjectCardProps) => {
  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      layout
      onClick={onClick}
      className="group relative w-full cursor-pointer overflow-hidden border-b border-white/[0.06] transition-colors duration-300 hover:bg-white/[0.02]"
      style={{ borderRadius: 0 }}
    >
      {/* ── COLLAPSED ROW ── */}
      <div className="flex w-full items-center gap-6 px-0 py-5 md:gap-10 md:py-7">
        {/* Number */}
        <span className="w-8 shrink-0 font-mono text-sm text-white/20 md:text-base">
          {formattedIndex}
        </span>

        {/* Thumbnail */}
        <div className="h-10 w-10 shrink-0 overflow-hidden md:h-14 md:w-14" style={{ borderRadius: 0 }}>
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          />
        </div>

        {/* Title + short desc */}
        <div className="flex flex-1 flex-col gap-0.5 md:gap-1">
          <h3 className="text-base font-medium tracking-tight text-white md:text-xl">
            {project.title}
          </h3>
          <AnimatePresence>
            {!isActive && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="line-clamp-1 text-xs text-white/35 md:text-sm"
              >
                {project.shortDescription}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Tech stack pills (desktop only, collapsed) */}
        <div className="hidden items-center gap-1.5 lg:flex">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/30"
              style={{ borderRadius: 0 }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Year */}
        <span className="hidden font-mono text-xs text-white/20 md:block">
          {project.year}
        </span>

        {/* Arrow */}
        <motion.div
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="shrink-0 text-white/25 transition-colors group-hover:text-white/50"
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>

      {/* ── EXPANDED CONTENT ── */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { type: "spring", stiffness: 250, damping: 28 },
              opacity: { duration: 0.2, delay: 0.05 },
            }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6 pb-8 pl-14 pr-0 md:flex-row md:gap-10 md:pb-10 md:pl-[4.5rem]">
              {/* Left: Image */}
              <div className="w-full shrink-0 md:w-[42%]">
                <div className="group/img relative aspect-[16/10] w-full overflow-hidden bg-white/[0.03]" style={{ borderRadius: 0 }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 border border-white/[0.08]" style={{ borderRadius: 0 }} />
                </div>
              </div>

              {/* Right: Details */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04, delayChildren: 0.08 },
                  },
                }}
                className="flex flex-1 flex-col justify-between"
              >
                {/* Meta row */}
                <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-green-400/70">
                    {project.year}
                  </span>
                  <span className="h-px flex-1 bg-white/[0.06]" />
                  <span className="font-mono text-[10px] text-white/30">
                    {project.builders.join(" · ")}
                  </span>
                </motion.div>

                {/* Description */}
                <motion.p variants={itemVariants} className="mb-5 text-sm leading-relaxed text-white/50 md:text-[15px]">
                  {project.longDescription}
                </motion.p>

                {/* Tech stack */}
                <motion.div variants={itemVariants} className="mb-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-white/50"
                      style={{ borderRadius: 0 }}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Features */}
                <motion.ul variants={itemVariants} className="mb-6 flex flex-col gap-1.5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-white/40">
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 bg-green-500/40" style={{ borderRadius: 0 }} />
                      {feature}
                    </li>
                  ))}
                </motion.ul>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-white/60 transition-all duration-300 hover:border-green-500/25 hover:bg-green-500/[0.06] hover:text-green-400 hover:shadow-[0_0_12px_rgba(34,197,94,0.08)]"
                      style={{ borderRadius: 0 }}
                    >
                      <GitBranch className="h-3.5 w-3.5" />
                      Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-white/60 transition-all duration-300 hover:border-green-500/25 hover:bg-green-500/[0.06] hover:text-green-400 hover:shadow-[0_0_12px_rgba(34,197,94,0.08)]"
                      style={{ borderRadius: 0 }}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-white/40 transition-all hover:text-white/70"
                    >
                      Case Study
                      <ArrowUpRight className="h-3 w-3 opacity-40" />
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
