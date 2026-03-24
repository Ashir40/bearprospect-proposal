"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { FunnelSection } from "@/components/sections/funnel-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { ScopeSection } from "@/components/sections/scope-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="relative bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <span className="text-sm font-bold text-slate-950">B</span>
            </div>
            <span className="text-lg font-bold text-white">
              Bear<span className="text-cyan-400">Prospect</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#problem" className="hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="hover:text-white transition-colors">Solution</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#scope" className="hover:text-white transition-colors">Scope</a>
            <a href="#impact" className="hover:text-white transition-colors">Impact</a>
          </div>
          <div className="text-xs text-slate-600">
            Internal Proposal
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

      {/* CTA */}
      <CTASection />
    </main>
  );
}
