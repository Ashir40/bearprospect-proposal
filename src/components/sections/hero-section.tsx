"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function HeroSection() {
  return (
    <LampContainer className="min-h-screen">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide">
          INTERNAL PROPOSAL — MARCH 2026
        </span>
        <h1 className="mt-4 bg-gradient-to-br from-slate-200 to-slate-500 py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-8xl">
          BearProspect
        </h1>
        <p className="mt-2 bg-gradient-to-br from-cyan-300 to-cyan-600 bg-clip-text text-center text-xl font-medium text-transparent md:text-3xl">
          Autonomous B2B Sales Engine
        </p>
        <p className="mt-6 max-w-2xl text-center text-slate-400 text-base md:text-lg leading-relaxed">
          Built by Bearplex. Powered by AI. A fully autonomous system that discovers,
          researches, engages, and books meetings with high-value enterprise prospects
          — without human intervention.
        </p>
        <div className="mt-8 flex gap-4">
          <InteractiveHoverButton
            text="Explore"
            className="w-40 border-cyan-500/50 text-cyan-400 bg-slate-950"
          />
        </div>
        <p className="mt-12 text-slate-600 text-sm">
          Prepared for Hamad, CEO — Bearplex
        </p>
      </motion.div>
    </LampContainer>
  );
}
