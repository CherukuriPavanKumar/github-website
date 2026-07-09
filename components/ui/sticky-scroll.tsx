"use client";
import React, { useRef } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll position over this entire component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1 || 1));
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className="relative w-full"
      style={{
        // 60vh per card — snappier transitions
        height: `${cardLength * 60}vh`, 
      }}
    >
      {/* 
        This is the sticky container that pins to the screen for the duration
        of the scroll through this section.
      */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-12">
        <div className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-0 pt-16 md:pt-0">
          
          {/* Left/Top: Text Content */}
          <div className="relative z-10 flex h-[40%] w-full items-center justify-start md:h-full md:w-[45%]">
            {content.map((item, index) => {
              const isActive = activeCard === index;
              return (
                <div
                  key={item.title + index}
                  className="absolute left-0 w-full"
                  style={{
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                    transform: `translateY(${isActive ? "0px" : "30px"})`,
                    filter: `blur(${isActive ? "0px" : "8px"})`,
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <p className="mb-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/30">
                    Domain {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mb-4 md:mb-6 text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
                    {item.title}
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-white/50 sm:text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right/Bottom: Visual Dioramas */}
          <div className="relative flex h-[50%] w-full items-center justify-center md:h-full md:w-[50%]">
            {content.map((item, index) => {
              const isActive = activeCard === index;
              return (
                <div
                  key={index}
                  className="absolute h-full max-h-[300px] w-full max-w-[600px] md:max-h-none md:h-[55vh] overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.01] shadow-2xl backdrop-blur-md"
                  style={{
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                    transform: `scale(${isActive ? 1 : 0.95})`,
                    filter: `blur(${isActive ? "0px" : "12px"})`,
                    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {item.content}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};
