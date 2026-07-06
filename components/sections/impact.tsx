"use client";

import React from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { Users } from "lucide-react";

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER HOOK
   ═══════════════════════════════════════════════════ */
function AnimatedCounter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => {
        animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
      }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════ */
export const ImpactSection = () => {
  return (
    <section id="events" className="bg-black px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <motion.p
            className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.p>
          <motion.h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Every event leaves a mark.
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-6 md:gap-6">
          
          {/* 1. Git-a-thon (Tall 2x2 - Left) */}
          <motion.div
            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A] md:col-span-2 md:row-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="/2.jpeg" 
                alt="Git-a-thon — Full auditorium group photo"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Gradient + text — hidden by default, revealed on hover */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 md:p-8">
              <div className="mb-3 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-md">
                Flagship Event
              </div>
              <h3 className="mb-2 font-serif text-3xl font-medium text-white md:text-4xl">Git-a-thon</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Our annual 48-hour hackathon where hundreds of students build, ship, and deploy real products overnight.
              </p>
            </div>
          </motion.div>

          {/* 2. Builders Counter (Standard 2x1 - Top Middle) */}
          <motion.div
            className="group flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center text-center">
              <Users className="mb-4 h-6 w-6 text-white/20 transition-colors group-hover:text-blue-400" />
              <h3 className="font-serif text-5xl font-medium tracking-tight text-white md:text-6xl">
                <AnimatedCounter to={900} suffix="+" />
              </h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/40">Active Builders</p>
            </div>
          </motion.div>

          {/* 3. Workshops (Tall 2x2 - Right) */}
          <motion.div
            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A] md:col-span-2 md:row-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="/1.jpeg" 
                alt="Workshop — Teaching web development"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 md:p-8">
              <h3 className="mb-2 font-serif text-3xl font-medium text-white">Weekly Sessions</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Deep dives into open source, system design, and cutting-edge web frameworks.
              </p>
            </div>
          </motion.div>

          {/* 4. Events Counter (Standard 2x1 - Middle Center) */}
          <motion.div
            className="group flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-white/20 transition-colors group-hover:text-green-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-5xl font-medium tracking-tight text-white md:text-6xl">
                <AnimatedCounter to={70} suffix="+" />
              </h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/40">Events Hosted</p>
            </div>
          </motion.div>

          {/* 5. Community Quote (Wide 3x1 - Bottom Left) */}
          <motion.div
            className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="/3.jpeg" 
                alt="Data Xplore event — group photo"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col justify-center p-6 opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 md:p-8">
              <p className="font-serif text-xl italic leading-relaxed text-white/90 md:text-2xl">
                &ldquo;The fastest way to learn is to surround yourself with people who are shipping real things.&rdquo;
              </p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/50">
                Data Xplore &middot; GitHub Community GITAM
              </div>
            </div>
          </motion.div>

          {/* 6. Projects Shipped (Wide 3x1 - Bottom Right) */}
          <motion.div
            className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="/4.jpeg" 
                alt="Community session — packed classroom"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10 flex h-full flex-col justify-end p-6 opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 md:p-8">
              <h3 className="mb-2 font-serif text-2xl font-medium text-white md:text-3xl">Open Source First</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Our members don&apos;t just consume. They contribute. 30+ projects shipped this year.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
