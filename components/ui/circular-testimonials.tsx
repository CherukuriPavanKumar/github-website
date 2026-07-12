"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight, Briefcase, GitBranch, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { TeamMember } from "@/lib/data/team";

interface CircularBuildersProps {
  members: TeamMember[];
  autoplay?: boolean;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  members,
  autoplay = true,
}: CircularBuildersProps) => {
  // Hardcoded dark theme colors matching GitHub aesthetic
  const colorName = "#ffffff";
  const colorRole = "rgba(74, 222, 128, 0.8)"; // green-400/80
  const colorDetail = "rgba(255, 255, 255, 0.6)"; // white/60
  const colorArrowBg = "rgba(255, 255, 255, 0.05)";
  const colorArrowFg = "rgba(255, 255, 255, 0.4)";
  const colorArrowHoverBg = "rgba(34, 197, 94, 0.1)"; // green-500/10
  const colorArrowHoverFg = "rgba(74, 222, 128, 1)"; // green-400

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const membersLength = useMemo(() => members.length, [members]);
  const activeMember = useMemo(
    () => members[activeIndex],
    [activeIndex, members]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % membersLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, membersLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, membersLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % membersLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [membersLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + membersLength) % membersLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [membersLength]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset = (index - activeIndex + membersLength) % membersLength;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + membersLength) % membersLength === index;
    const isRight = (activeIndex + 1) % membersLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants
  const containerVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Images */}
        <div className="image-container" ref={imageContainerRef}>
          {members.map((member, index) => (
            <img
              key={member.name}
              src={member.image}
              alt={member.name}
              className="testimonial-image"
              data-index={index}
              style={{ ...getImageStyle(index), objectPosition: member.objectPosition || "center" }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.h3
                variants={itemVariants}
                className="name font-serif text-4xl md:text-5xl"
                style={{ color: colorName }}
              >
                {activeMember.name}
              </motion.h3>
              
              <motion.p
                variants={itemVariants}
                className="designation font-mono text-lg tracking-wide uppercase mt-2"
                style={{ color: colorRole }}
              >
                {activeMember.role}
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm"
              >
                {activeMember.bio}
              </motion.p>
              
              <motion.div variants={itemVariants} className="mt-8 grid grid-cols-2 gap-y-6 gap-x-8 max-w-sm">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Domain</span>
                  <span className="text-base" style={{ color: colorDetail }}>{activeMember.domain}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Year of Study</span>
                  <span className="text-base font-mono" style={{ color: colorDetail }}>
                    {activeMember.year}
                  </span>
                </div>
                
                <div className="col-span-2 flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Core Expertise</span>
                  <div className="flex flex-wrap gap-2">
                    {activeMember.expertise.map(skill => (
                      <span key={skill} className="px-2.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Social Icons */}
              <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3">
                {activeMember.links.linkedin && (
                  <SocialButton icon={<Briefcase className="h-5 w-5" />} href={activeMember.links.linkedin} label="LinkedIn" />
                )}
                {activeMember.links.github && (
                  <SocialButton icon={<GitBranch className="h-5 w-5" />} href={activeMember.links.github} label="GitHub" />
                )}
                {activeMember.links.email && (
                  <SocialButton icon={<Mail className="h-5 w-5" />} href={activeMember.links.email} label="Email" />
                )}
                {activeMember.links.phone && (
                  <SocialButton icon={<Phone className="h-5 w-5" />} href={activeMember.links.phone} label="Phone" />
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button border border-white/10"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                borderColor: hoverPrev ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.1)"
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous member"
            >
              <ArrowLeft size={24} color={hoverPrev ? colorArrowHoverFg : colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button border border-white/10"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                borderColor: hoverNext ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.1)"
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next member"
            >
              <ArrowRight size={24} color={hoverNext ? colorArrowHoverFg : colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-container {
          width: 100%;
          padding: 2rem 0;
        }
        .testimonial-grid {
          display: grid;
          gap: 4rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 20rem;
          perspective: 1000px;
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .name {
          margin-bottom: 0.25rem;
        }
        .designation {
          margin-bottom: 2rem;
        }
        .arrow-buttons {
          display: flex;
          gap: 1rem;
          padding-top: 1.5rem;
        }
        .arrow-button {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 6rem;
          }
          .image-container {
            height: 28rem;
          }
          .arrow-buttons {
            padding-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const SocialButton = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a
    href={href}
    aria-label={label}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400"
  >
    {icon}
  </a>
);

export default CircularTestimonials;
