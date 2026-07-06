"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data/faq";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black px-5 py-28 sm:px-8 md:px-12 md:py-40">
      <div className="mx-auto w-full max-w-3xl">

        {/* Header */}
        <div className="mb-20 text-center md:mb-28">
          <motion.p
            className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-base leading-relaxed text-white/40 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to know before joining the community.
          </motion.p>
        </div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top border */}
          <div className="h-px w-full bg-white/[0.06]" />

          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="group flex w-full items-center justify-between gap-4 py-7 text-left transition-colors duration-300 md:py-8"
                >
                  <span
                    className={`text-base font-medium leading-snug transition-colors duration-300 md:text-lg ${
                      isOpen
                        ? "text-white"
                        : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-colors duration-300 ${
                        isOpen
                          ? "text-green-500/80"
                          : "text-white/20 group-hover:text-white/40"
                      }`}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.25, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-base leading-[1.8] text-white/35 md:pr-12">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divider */}
                <div
                  className={`h-px w-full transition-colors duration-300 ${
                    isOpen ? "bg-white/[0.1]" : "bg-white/[0.06]"
                  }`}
                />
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
