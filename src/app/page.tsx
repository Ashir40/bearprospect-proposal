"use client";

import Image from "next/image";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { FunnelSection } from "@/components/sections/funnel-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { ScopeSection } from "@/components/sections/scope-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { GlobeSection } from "@/components/sections/globe-section";

export default function Home() {
  return (
    <main className="relative bg-[#0a0f1e]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-teal-900/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/bearplex-logo.png"
              alt="Bearplex"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-base md:text-lg font-bold text-white font-[family-name:var(--font-inter)]">
              Bear<span className="text-teal-400">Prospect</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#problem" className="hover:text-teal-300 transition-colors duration-300">Problem</a>
            <a href="#solution" className="hover:text-teal-300 transition-colors duration-300">Solution</a>
            <a href="#architecture" className="hover:text-teal-300 transition-colors duration-300">Architecture</a>
            <a href="#scope" className="hover:text-teal-300 transition-colors duration-300">Scope</a>
            <a href="#impact" className="hover:text-teal-300 transition-colors duration-300">Impact</a>
            <a href="#faq" className="hover:text-teal-300 transition-colors duration-300">FAQ</a>
          </div>
          <div className="text-xs text-slate-600 font-[family-name:var(--font-jetbrains-mono)]">
            Bearplex Internal
          </div>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection />

      {/* Problem */}
      <div id="problem">
        <ProblemSection />
      </div>

      {/* Solution - Funnel */}
      <div id="solution">
        <FunnelSection />
      </div>

      {/* Architecture */}
      <div id="architecture">
        <ArchitectureSection />
      </div>

      {/* Scope & Timeline */}
      <div id="scope">
        <ScopeSection />
      </div>

      {/* Impact */}
      <div id="impact">
        <ImpactSection />
      </div>

      {/* Global Reach - Globe */}
      <div id="reach">
        <GlobeSection />
      </div>

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
