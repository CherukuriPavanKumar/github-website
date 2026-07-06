"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ——————————— Scroll-revealed element ——————————— */
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-80px" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ——————————— Diff block data ——————————— */
const removedLines = [
  "fear of asking questions",
  "watching without building",
  "keeping knowledge private",
];

const addedLines = [
  "curiosity over perfection",
  "open source by default",
  "sharing what we learn",
];

/* ——————————— Diff block component ——————————— */
const DiffBlock = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-60px" }}
    className="w-full max-w-[640px] overflow-hidden rounded-lg border"
    style={{
      backgroundColor: "#161B22",
      borderColor: "#30363D",
    }}
  >
    {/* Header row */}
    <div
      className="flex items-center justify-between border-b px-4 py-2.5"
      style={{ borderColor: "#30363D" }}
    >
      <span
        className="font-mono text-xs font-medium"
        style={{ color: "#C97A4A" }}
      >
        values.diff
      </span>
      <span
        className="font-mono text-xs"
        style={{ color: "#C97A4A" }}
      >
        3 +{"  "}3 -
      </span>
    </div>

    {/* Diff lines */}
    <div className="px-0 py-1">
      {removedLines.map((line, i) => (
        <div
          key={`r-${i}`}
          className="group flex items-baseline gap-3 px-4 py-[5px] transition-colors duration-200"
          style={{ backgroundColor: "rgba(248,81,73,0.08)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(248,81,73,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(248,81,73,0.08)";
          }}
        >
          <span
            className="select-none font-mono text-sm leading-relaxed"
            style={{ color: "#F85149" }}
          >
            -
          </span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "#F85149" }}
          >
            {line}
          </span>
        </div>
      ))}
      {addedLines.map((line, i) => (
        <div
          key={`a-${i}`}
          className="group flex items-baseline gap-3 px-4 py-[5px] transition-colors duration-200"
          style={{ backgroundColor: "rgba(63,185,80,0.08)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(63,185,80,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(63,185,80,0.08)";
          }}
        >
          <span
            className="select-none font-mono text-sm leading-relaxed"
            style={{ color: "#3FB950" }}
          >
            +
          </span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "#3FB950" }}
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

/* ——————————— Animated gradient orb ——————————— */
const GlowOrb = () => (
  <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2">
    <div className="relative h-[500px] w-[700px] md:h-[600px] md:w-[900px]">
      <div
        className="absolute inset-0 animate-pulse rounded-full opacity-[0.12] blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #58a6ff 0%, #1f6feb 30%, transparent 70%)",
          animationDuration: "4s",
        }}
      />
      <div
        className="absolute inset-0 translate-x-20 animate-pulse rounded-full opacity-[0.06] blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #a371f7 0%, #8b5cf6 40%, transparent 70%)",
          animationDuration: "6s",
          animationDelay: "1s",
        }}
      />
    </div>
  </div>
);

/* ——————————— Dot grid background ——————————— */
const DotGrid = () => (
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.25]"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}
  />
);

/* ——————————— Main section ——————————— */
const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-5 py-24 sm:px-8 md:px-12 md:py-36 lg:py-44"
    >
      {/* Visual layers */}
      <DotGrid />
      <motion.div style={{ y: orbY }} className="absolute inset-0">
        <GlowOrb />
      </motion.div>

      {/* Subtle top border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section label */}
        <Reveal>
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/25 md:mb-8">
            Who we are
          </p>
        </Reveal>

        {/* Manifesto */}
        <div className="mb-16 md:mb-24">
          <Reveal delay={0.1}>
            <h2 className="text-[clamp(2.2rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white/30">
              We don&apos;t build clubs.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-[clamp(2.2rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
              We build builders.
            </h2>
          </Reveal>
        </div>

        {/* Content grid — text left, diff right */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          {/* Left: stacked paragraphs */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.15}>
              <p className="text-base leading-[1.7] text-white/45 sm:text-lg">
                GitHub Community GITAM is where curiosity becomes code,
ideas become projects, and collaboration becomes growth.
A place where students learn by building,<br></br>
not just by watching.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-base leading-[1.7] text-white/45 sm:text-lg">
                We learn by building, sharing, and shipping together. Every project, event, and conversation exists to help students grow through real-world experience.
              </p>
            </Reveal>
          </div>

          {/* Right: diff block spanning full height */}
          <DiffBlock />
        </div>

        {/* Bottom accent */}
        <Reveal delay={0.3}>
          <div className="relative mt-20 md:mt-28">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
            <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-sm" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export { WhoWeAre };
