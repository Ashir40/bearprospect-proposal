"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function HeroSection() {
  const handleExplore = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LampContainer className="min-h-screen">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="bg-gradient-to-br from-white via-teal-100 to-teal-300 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-8xl font-[family-name:var(--font-inter)]">
          BearProspect
        </h1>
        <p className="mt-2 bg-gradient-to-br from-teal-300 to-emerald-500 bg-clip-text text-center text-lg font-medium text-transparent sm:text-xl md:text-3xl font-[family-name:var(--font-inter)]">
          Autonomous B2B Sales Engine
        </p>
        <p className="mt-4 md:mt-6 max-w-2xl text-center text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          Built by Bearplex. Powered by AI. A fully autonomous system that discovers,
          researches, engages, and books meetings with high-value enterprise prospects
          — without human intervention.
        </p>
        <div className="mt-6 md:mt-8 flex gap-4">
          <InteractiveHoverButton
            text="Explore"
            className="w-36 md:w-40 border-teal-500/50 text-teal-300 bg-[#0a0f1e]"
            onClick={handleExplore}
          />
        </div>
        <p className="mt-8 md:mt-10 text-slate-500 text-xs sm:text-sm">
          Prepared for Hamad, CEO — Bearplex
        </p>
        <span className="mt-4 md:mt-6 inline-block px-3 md:px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400/80 text-[10px] sm:text-xs font-medium tracking-wide font-[family-name:var(--font-jetbrains-mono)]">
          INTERNAL PROPOSAL — MARCH 2026
        </span>
        <p className="mt-3 md:mt-4 text-slate-500 text-[10px] sm:text-xs font-[family-name:var(--font-jetbrains-mono)]">
          Created, Strategized &amp; Researched by <span className="text-teal-400/70">Ashir Nadeem</span>
        </p>
      </motion.div>
    </LampContainer>
  );
}
