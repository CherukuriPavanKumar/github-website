"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContributionGraph } from "@/components/ui/contribution-graph";
import { communityEvents } from "@/lib/data/events";

export const ActivitySection = () => {
  return (
    <section className="bg-black px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Community Activity
          </motion.p>
          <motion.h2
            className="mb-8 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Every square tells a story.
          </motion.h2>
          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our calendar isn&apos;t measured in commits. It&apos;s measured in workshops, hackathons, late-night coding sessions, open-source contributions, and builders coming together.
          </motion.p>
        </div>

        {/* Graph Container */}
        <motion.div
          className="rounded-2xl border border-white/[0.08] bg-[#0d1117] p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ContributionGraph events={communityEvents} />
        </motion.div>
        
      </div>
    </section>
  );
};
