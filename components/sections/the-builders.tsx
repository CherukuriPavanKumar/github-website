"use client";

import React from "react";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data/team";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

export const TheBuilders = () => {
  return (
    <section id="builders" className="bg-black px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            THE BUILDERS
          </motion.p>
          <motion.h2
            className="mb-8 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Meet the people behind the community.
          </motion.h2>
          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every event, workshop, hackathon, and initiative is made possible by a passionate team of student builders.
          </motion.p>
        </div>

        {/* Circular Builders Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/5 pt-16 md:pt-20"
        >
          <CircularTestimonials members={teamMembers} autoplay={true} />
        </motion.div>
        
      </div>
    </section>
  );
};
