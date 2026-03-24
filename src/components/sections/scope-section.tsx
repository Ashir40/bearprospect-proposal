"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Rocket, MessageSquare, Layers, CheckCircle2 } from "lucide-react";

const phases = [
  {
    number: "1",
    title: "Foundation",
    timeline: "Weeks 1-3",
    icon: <Rocket className="h-6 w-6" />,
    color: "cyan",
    milestone: "First autonomous outreach campaign live — 50 prospects/week",
    deliverables: [
      "B2B Intelligence Integration — Connect to 150M+ company database with ICP filtering",
      "Research Agent — Automated prospect analysis (website, tech stack, hiring, funding)",
      "Lead Scoring Model — AI readiness + budget + urgency scoring (0-100)",
      "Personalization Engine — Claude-powered email generation mapped to Bearplex services",
      "Email Infrastructure — SendGrid/SES integration with domain warmup",
      "Basic Dashboard — Lead list view, sequence status, reply tracking",
    ],
  },
  {
    number: "2",
    title: "Autonomous Conversations",
    timeline: "Weeks 4-5",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "purple",
    milestone: "End-to-end autonomous pipeline — from discovery to booked meeting",
    deliverables: [
      "Reply Classification — AI-powered intent detection on prospect replies",
      "Objection Handler — Trained on B2B AI sales objections specific to Bearplex",
      "Meeting Booker — Calendly API integration for auto-scheduling",
      "CRM Sync — HubSpot integration (leads, deals, activities)",
      "Team Notifications — Real-time alerts via Slack + WhatsApp",
    ],
  },
  {
    number: "3",
    title: "Multi-Channel & Intelligence",
    timeline: "Weeks 6-8",
    icon: <Layers className="h-6 w-6" />,
    color: "amber",
    milestone: "Fully autonomous, multi-channel, self-improving sales engine",
    deliverables: [
      "LinkedIn Agent — Automated connection requests + messaging",
      "Multi-Touch Sequencing — Coordinated email + LinkedIn + X outreach",
      "A/B Testing Engine — Automated message variant testing",
      "Analytics Dashboard — Full funnel metrics, conversion analytics, ROI tracking",
      "Self-Optimization Loop — System refines ICP, messaging, and timing from conversion data",
    ],
  },
];

const phaseColorMap: Record<string, { border: string; bg: string; text: string }> = {
  cyan: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
  purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400" },
  amber: { border: "border-amber-500/30", bg: "bg-amber-500/10", text: "text-amber-400" },
};

export function ScopeSection() {
  return (
    <section className="relative bg-slate-950 py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium">
            SCOPE & TIMELINE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
            Three Phases. Eight Weeks.
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Incremental delivery with working milestones at each phase.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-amber-500/50 hidden md:block" />

          {phases.map((phase, index) => {
            const colors = phaseColorMap[phase.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mb-12 md:pl-20"
              >
                {/* Phase number circle */}
                <div className="hidden md:flex absolute left-4 top-8 z-10">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border",
                      colors.bg,
                      colors.text,
                      colors.border
                    )}
                  >
                    {phase.number}
                  </div>
                </div>

                <div className="relative rounded-[1.5rem] border-[0.75px] border-slate-800 p-3">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800/50 p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colors.bg, colors.text)}>
                        {phase.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          Phase {phase.number}: {phase.title}
                        </h3>
                        <p className={cn("text-sm font-medium mt-1", colors.text)}>
                          {phase.timeline}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-2 mb-6">
                      {phase.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                          <CheckCircle2 className={cn("h-4 w-4 mt-0.5 shrink-0", colors.text)} />
                          <span className="text-sm text-slate-300">{d}</span>
                        </div>
                      ))}
                    </div>

                    {/* Milestone */}
                    <div className={cn("p-4 rounded-xl border", colors.bg, colors.border)}>
                      <p className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">Milestone</p>
                      <p className={cn("text-sm font-semibold", colors.text)}>{phase.milestone}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
