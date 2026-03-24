"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Search,
  Brain,
  Send,
  MessageCircle,
  BarChart3,
  ArrowDown,
  Database,
  Users,
  Mail,
  Bot,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Intelligent Lead Sourcing",
    color: "cyan",
    icon: <Search className="h-6 w-6" />,
    mainIcon: <Database className="h-10 w-10" />,
    description:
      "AI scans 150M+ companies and 800M+ professionals, filtering by ICP signals: funding rounds, hiring patterns, tech stack, and industry.",
    metrics: "50-100 qualified leads/week",
    details: [
      "Series B+ companies in fintech, healthtech, logistics, defense",
      "Companies hiring AI/ML roles (signals capacity gap)",
      "Cloud-native stacks lacking in-house AI teams",
      "Real-time funding & tech stack change monitoring",
    ],
    personas: ["CTO", "VP Eng", "Head of AI", "CPO"],
  },
  {
    number: "02",
    title: "RESEARCH",
    subtitle: "Deep Prospect Intelligence",
    color: "green",
    icon: <Brain className="h-6 w-6" />,
    mainIcon: <Users className="h-10 w-10" />,
    description:
      "For every qualified prospect, the Research Agent conducts the equivalent of 20 minutes of deep analysis — automatically.",
    metrics: "Lead Score: 0-100 per prospect",
    details: [
      "Analyzes company website, tech blog, and architecture",
      "Maps current tech stack & AI maturity level",
      "Scans job postings to identify AI capability gaps",
      "Profiles decision makers with verified contact data",
    ],
    output: {
      company: "Acme Fintech (Series C, $45M raised)",
      score: "87/100",
      pain: "Posted 3 ML engineer roles in 60 days, still unfilled",
      service: "Autonomous Agent Development + RAG Implementation",
    },
  },
  {
    number: "03",
    title: "ENGAGE",
    subtitle: "Hyper-Personalized Outreach",
    color: "amber",
    icon: <Send className="h-6 w-6" />,
    mainIcon: <Mail className="h-10 w-10" />,
    description:
      "Personalization engine maps each prospect's pain to a concrete Bearplex deliverable, then executes a multi-channel sequence.",
    metrics: "8-15% reply rate (vs 2-3% industry avg)",
    details: [
      "Day 0: Email — Lead with insight about THEIR business",
      "Day 1: LinkedIn — Personalized connection request",
      "Day 3: Email — Relevant case study / proof point",
      "Day 7: LinkedIn — Engage with their content",
      "Day 10: Email — Clear CTA for 15-min discovery call",
    ],
    personalization: [
      "References their specific tech stack",
      "Mentions recent funding or hiring activity",
      "Adjusts tone by seniority (technical for CTO, strategic for CEO)",
    ],
  },
  {
    number: "04",
    title: "CONVERT",
    subtitle: "Autonomous Conversation Handling",
    color: "purple",
    icon: <MessageCircle className="h-6 w-6" />,
    mainIcon: <Bot className="h-10 w-10" />,
    description:
      "AI classifies every reply, handles objections autonomously, and books discovery calls — alerting your BD team instantly.",
    metrics: "15-25 meetings booked/month",
    details: [
      "Reply classification: Interested / Objection / Not Now",
      '"Building in-house" → "Augment your team, ship faster while you hire"',
      '"Tried AI, didn\'t work" → "Our RLHF alignment approach is different"',
      '"Too expensive" → "Start with a 4-week paid pilot, prove ROI"',
    ],
    alerts: ["Slack", "WhatsApp", "Telegram", "Email"],
  },
  {
    number: "05",
    title: "OPTIMIZE",
    subtitle: "Self-Improving Intelligence Loop",
    color: "rose",
    icon: <BarChart3 className="h-6 w-6" />,
    mainIcon: <TrendingUp className="h-10 w-10" />,
    description:
      "The system tracks every interaction from open to close, A/B tests messaging, and refines the ICP — getting smarter with every cycle.",
    metrics: "Continuous improvement, zero manual tuning",
    details: [
      "Tracks: Email open → Reply → Meeting → Deal close",
      "A/B tests messaging variants automatically",
      "Refines ICP targeting based on conversion data",
      "Identifies optimal send times by region & persona",
    ],
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    glow: "from-cyan-300 to-cyan-600",
  },
  green: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    glow: "from-emerald-300 to-emerald-600",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    glow: "from-amber-300 to-amber-600",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    glow: "from-purple-300 to-purple-600",
  },
  rose: {
    border: "border-rose-500/30",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    glow: "from-rose-300 to-rose-600",
  },
};

export function FunnelSection() {
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
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            THE SOLUTION
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
            The Autonomous Funnel
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Five AI-powered stages working 24/7 — from discovery to booked meeting, with zero manual intervention.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-rose-500/50 hidden lg:block" />

          {stages.map((stage, index) => {
            const colors = colorMap[stage.color];
            return (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative mb-8"
                >
                  {/* Stage number badge */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-4 z-10">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
                        colors.bg,
                        colors.text,
                        colors.border,
                        "border"
                      )}
                    >
                      {stage.number}
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] border-[0.75px] border-slate-800 p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className="relative overflow-hidden rounded-xl border-[0.75px] border-slate-800/50 bg-slate-950 p-8 md:p-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                        <div
                          className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0",
                            colors.bg,
                            colors.text
                          )}
                        >
                          {stage.mainIcon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={cn(
                                "text-xs font-bold tracking-[0.2em] uppercase",
                                colors.text
                              )}
                            >
                              Stage {stage.number}
                            </span>
                            <div className={cn("h-px flex-1", colors.bg)} />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                            {stage.title}
                          </h3>
                          <p className="text-lg text-slate-400">
                            {stage.subtitle}
                          </p>
                        </div>
                        <div
                          className={cn(
                            "px-4 py-2 rounded-full text-sm font-semibold shrink-0",
                            colors.bg,
                            colors.text,
                            colors.border,
                            "border"
                          )}
                        >
                          {stage.metrics}
                        </div>
                      </div>

                      <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Details grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {stage.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50"
                          >
                            <div
                              className={cn(
                                "w-1.5 h-1.5 rounded-full mt-2 shrink-0",
                                colors.bg.replace("/10", "")
                              )}
                            />
                            <span className="text-sm text-slate-400">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Extra info for specific stages */}
                      {stage.personas && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          <span className="text-xs text-slate-500 mr-2 self-center">
                            Target personas:
                          </span>
                          {stage.personas.map((p) => (
                            <span
                              key={p}
                              className={cn(
                                "px-3 py-1 rounded-full text-xs font-medium",
                                colors.bg,
                                colors.text
                              )}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      )}

                      {stage.output && (
                        <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800">
                          <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-medium">
                            Example Agent Output
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-slate-500">Company:</span>{" "}
                              <span className="text-white">
                                {stage.output.company}
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-500">Score:</span>{" "}
                              <span className={colors.text}>
                                {stage.output.score}
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-500">Pain:</span>{" "}
                              <span className="text-slate-300">
                                {stage.output.pain}
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-500">Service Match:</span>{" "}
                              <span className="text-slate-300">
                                {stage.output.service}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {stage.alerts && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          <span className="text-xs text-slate-500 mr-2 self-center">
                            Instant alerts via:
                          </span>
                          {stage.alerts.map((a) => (
                            <span
                              key={a}
                              className={cn(
                                "px-3 py-1 rounded-full text-xs font-medium",
                                colors.bg,
                                colors.text
                              )}
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow between stages */}
                {index < stages.length - 1 && (
                  <div className="flex justify-center my-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <ArrowDown className="h-8 w-8 text-slate-600" />
                    </motion.div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
