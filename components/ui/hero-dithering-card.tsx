"use client";

import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="join" className="py-4 w-full flex justify-center items-center px-3 md:px-4">
      <div 
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[#161b22] shadow-sm min-h-[80vh] flex flex-col items-center justify-center duration-500">
             <Suspense fallback={<div className="absolute inset-0 bg-white/5" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparent
                colorFront="#2ea043"  // GitHub green accent
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border mt-5 border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              BECOME A BUILDER
            </div>

            {/* Headline */}
            <h2
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]"
              style={{ textShadow: "0 0 60px rgba(255,255,255,0.08), 0 2px 20px rgba(0,0,0,0.4)" }}
            >
              Your first commit, <br />
              <span className="text-white/60">starts here.</span>
            </h2>
            
            {/* Description */}
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Whether you're writing your first line of code<br />
              or shipping your hundredth project,<br />
              <br />
              <span className="text-white/80 font-medium">build with people who love building.</span>
            </p>

            {/* Button */}
            <a href="https://forms.gle/1h14yS9C4ctPRU2UA">
            <button className="group relative mb-5 inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-14 text-lg font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-white/20">
              <span className="relative z-10">Join the Community</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
