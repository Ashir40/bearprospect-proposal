"use client";
import React from "react";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ShaderBackground from "@/components/ui/shader-background";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function HeroSection() {
  const handleExplore = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ShaderBackground />
      <HeroGeometric
        badge="INTERNAL PROPOSAL — MARCH 2026"
        title1="BearProspect"
        title2="Autonomous B2B Sales Engine"
        description="Built by Bearplex. Powered by AI. A fully autonomous system that discovers, researches, engages, and books meetings with high-value enterprise prospects — without human intervention."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <InteractiveHoverButton
            text="Explore Proposal"
            className="w-44 md:w-48 border-white/20 text-white/80 bg-white/[0.03] hover:border-white/40"
            onClick={handleExplore}
          />
          <Link href="/research">
            <InteractiveHoverButton
              text="View Market Data"
              className="w-44 md:w-48 border-indigo-400/30 text-indigo-300/80 bg-white/[0.03] hover:border-indigo-400/50"
            />
          </Link>
        </div>
        <p className="text-white/25 text-[10px] sm:text-xs text-center max-w-md mx-auto mb-6">
          50.2M addressable businesses across 4 niches — real data from 150M+ companies
        </p>
        <p className="text-white/30 text-xs sm:text-sm">
          Prepared for Hamad, CEO — Bearplex
        </p>
        <p className="mt-3 text-white/20 text-[10px] sm:text-xs font-[family-name:var(--font-jetbrains-mono)]">
          Created, Strategized &amp; Researched by <span className="text-indigo-400/50">Ashir Nadeem</span>
        </p>
      </HeroGeometric>
    </div>
  );
}
