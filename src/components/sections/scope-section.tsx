"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MermaidDiagram } from "@/components/ui/mermaid";
import { cn } from "@/lib/utils";
import { Rocket, MessageSquare, Layers, CheckCircle2 } from "lucide-react";

const timelineDiagram = `gantt
    title BearProspect — Build Timeline
    dateFormat  YYYY-MM-DD

    section Phase 1: Foundation
    B2B Intelligence Integration     :a1, 2026-03-31, 7d
    Research Agent                   :a2, 2026-03-31, 10d
    Lead Scoring Model               :a3, after a2, 5d
    Personalization Engine           :a4, 2026-04-07, 10d
    Email Infrastructure             :a5, 2026-04-07, 7d
    Basic Dashboard                  :a6, after a4, 5d

    section Phase 2: Conversations
    Reply Classification             :b1, after a6, 5d
    Objection Handler                :b2, after a6, 7d
    Meeting Booker + CRM             :b3, after b1, 5d
    Team Notifications               :b4, after b3, 3d

    section Phase 3: Multi-Channel
    LinkedIn Agent                   :c1, after b4, 7d
    Multi-Touch Sequencing           :c2, after b4, 10d
    AB Testing + Analytics           :c3, after c1, 7d
    Self-Optimization Loop           :c4, after c3, 7d`;

const phases = [
  {
    number: "1",
    title: "Foundation",
    timeline: "Weeks 1-3",
    icon: <Rocket className="h-6 w-6" />,
    color: "teal",
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
    color: "violet",
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
  teal: { border: "border-teal-400/30 dark:border-teal-500/20", bg: "bg-teal-500/8", text: "text-teal-700 dark:text-teal-400" },
  violet: { border: "border-violet-500/20", bg: "bg-violet-500/8", text: "text-violet-700 dark:text-violet-400" },
  amber: { border: "border-amber-500/20", bg: "bg-amber-500/8", text: "text-amber-700 dark:text-amber-400" },
};

export function ScopeSection() {
  return (
    <section className="relative bg-background py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-100 dark:bg-amber-500/5 text-amber-700 dark:text-amber-400 text-sm font-medium">
            SCOPE & TIMELINE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-teal-500 dark:to-teal-200 bg-clip-text text-transparent">
            Three Phases. Eight Weeks.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Incremental delivery with working milestones at each phase.
          </p>
        </motion.div>

        {/* Gantt Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 p-6 rounded-2xl bg-card border border-border overflow-x-auto"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-4 text-center font-[family-name:var(--font-jetbrains-mono)]">
            Build Timeline — Gantt Chart
          </p>
          <MermaidDiagram chart={timelineDiagram} className="mermaid-wrapper flex justify-center" />
        </motion.div>

        {/* Phases */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/30 via-violet-500/30 to-amber-500/30 hidden md:block" />

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
                <div className="hidden md:flex absolute left-4 top-8 z-10">
                  <div className={cn("w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border", colors.bg, colors.text, colors.border)}>
                    {phase.number}
                  </div>
                </div>

                <div className="relative rounded-[1.5rem] border-[0.75px] border-border p-3">
                  <GlowingEffect spread={30} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colors.bg, colors.text)}>{phase.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Phase {phase.number}: {phase.title}</h3>
                        <p className={cn("text-sm font-medium mt-1 font-[family-name:var(--font-jetbrains-mono)]", colors.text)}>{phase.timeline}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {phase.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/80 border border-border/50">
                          <CheckCircle2 className={cn("h-4 w-4 mt-0.5 shrink-0", colors.text)} />
                          <span className="text-sm text-foreground/80">{d}</span>
                        </div>
                      ))}
                    </div>

                    <div className={cn("p-4 rounded-xl border", colors.bg, colors.border)}>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-medium font-[family-name:var(--font-jetbrains-mono)]">Milestone</p>
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
