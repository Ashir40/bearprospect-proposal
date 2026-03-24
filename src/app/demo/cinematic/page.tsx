"use client"

import { CinematicHero } from "@/components/ui/cinematic-landing-hero"

export default function CinematicDemo() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen">
      <CinematicHero
        brandName="BearProspect"
        tagline1="Find the prospects,"
        tagline2="close the deals."
        cardHeading="Autonomous outreach."
        cardDescription={
          <>
            <span className="text-white font-semibold">BearProspect</span> discovers, researches, and engages high-value enterprise prospects with hyper-personalized AI-driven outreach — so your BD team focuses on closing, not sourcing.
          </>
        }
        metricValue={400}
        metricLabel="Prospects / Week"
        ctaHeading="Build your pipeline."
        ctaDescription="An autonomous B2B sales engine that discovers, researches, and books meetings with enterprise prospects — without human intervention."
      />
      <div className="fixed bottom-6 left-6 z-[200]">
        <a href="/" className="text-white/40 text-sm hover:text-white/80 transition-colors bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">← Back to proposal</a>
      </div>
    </div>
  )
}
