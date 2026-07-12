"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GitBranch, Mail, Phone } from "lucide-react";
import { TeamMember } from "@/lib/data/team";

interface BuilderCardProps {
  member: TeamMember;
}

export const BuilderCard = ({ member }: BuilderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: isHovered ? -4 : 0,
        backgroundColor: isHovered ? "rgba(255,255,255,0.03)" : "transparent",
        borderColor: isHovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
        boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.4)" : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-transparent p-5 md:p-6"
    >
      {/* Portrait Section */}
      <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-lg bg-white/5 border border-white/10">
        <motion.img
          src={member.image}
          alt={member.name}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover object-top grayscale-[50%] transition-all duration-500 group-hover:grayscale-0"
        />
        {/* Subtle inner shadow for depth */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Info Section */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Name and Role */}
        <motion.div
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="mb-4"
        >
          <h3 className="font-serif text-xl font-medium text-white md:text-2xl">
            {member.name}
          </h3>
          <p className="mt-1 font-mono text-sm text-green-400/80">
            {member.role}
          </p>
        </motion.div>

        {/* Expanded Info (Domain, Tech, Focus) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 10 }}
              transition={{ opacity: { duration: 0.2 }, height: { type: "spring", stiffness: 300, damping: 25 }, y: { type: "spring", stiffness: 300, damping: 25 } }}
              className="mb-5 flex flex-col gap-2 overflow-hidden border-t border-white/10 pt-4"
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-white/40">Domain</span>
                <span className="text-white/80">{member.domain}</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-white/40">Year</span>
                <span className="text-white/80">{member.year}</span>
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] mt-1">
                <span className="font-mono text-white/40">Expertise</span>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((skill) => (
                    <span key={skill} className="rounded bg-white/5 border border-white/10 px-1.5 py-0.5 text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Icons */}
        <div className="mt-auto flex items-center gap-2 pt-2">
          {member.links.linkedin && (
            <SocialButton icon={<Briefcase className="h-4 w-4" />} href={member.links.linkedin} label="LinkedIn" />
          )}
          {member.links.github && (
            <SocialButton icon={<GitBranch className="h-4 w-4" />} href={member.links.github} label="GitHub" />
          )}
          {member.links.email && (
            <SocialButton icon={<Mail className="h-4 w-4" />} href={member.links.email} label="Email" />
          )}
          {member.links.phone && (
            <SocialButton icon={<Phone className="h-4 w-4" />} href={member.links.phone} label="Phone" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const SocialButton = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a
    href={href}
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/40 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400"
  >
    {icon}
  </a>
);
