"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MermaidDiagram } from "@/components/ui/mermaid";
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

const funnelOverviewDiagram = `graph TB
    A["DISCOVER<br/>150M+ companies scanned"] --> B["RESEARCH<br/>20-min deep analysis per prospect"]
    B --> C["ENGAGE<br/>Multi-channel personalized outreach"]
    C --> D["CONVERT<br/>Autonomous reply handling"]
    D --> E["OPTIMIZE<br/>Self-improving intelligence"]
    E -.->|"Feedback loop"| A

    style A fill:#134e4a,stroke:#2dd4bf,color:#ccfbf1
    style B fill:#064e3b,stroke:#10b981,color:#d1fae5
    style C fill:#78350f,stroke:#f59e0b,color:#fef3c7
    style D fill:#4c1d95,stroke:#8b5cf6,color:#ede9fe
    style E fill:#881337,stroke:#f43f5e,color:#ffe4e6`;

const stages = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Intelligent Lead Sourcing",
    color: "teal",
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
    color: "emerald",
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
    metrics: "8-15% reply rate (vs 2-3% avg)",
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
    color: "violet",
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
    metrics: "Continuous improvement",
    details: [
      "Tracks: Email open → Reply → Meeting → Deal close",
      "A/B tests messaging variants automatically",
      "Refines ICP targeting based on conversion data",
      "Identifies optimal send times by region & persona",
    ],
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  teal: { border: "border-teal-500/20", bg: "bg-teal-500/8", text: "text-teal-400" },
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/8", text: "text-emerald-400" },
  amber: { border: "border-amber-500/20", bg: "bg-amber-500/8", text: "text-amber-400" },
  violet: { border: "border-violet-500/20", bg: "bg-violet-500/8", text: "text-violet-400" },
  rose: { border: "border-rose-500/20", bg: "bg-rose-500/8", text: "text-rose-400" },
};

export function FunnelSection() {
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
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-sm font-medium">
            THE SOLUTION
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-teal-200 bg-clip-text text-transparent">
            The Autonomous Funnel
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Five AI-powered stages working 24/7 — from discovery to booked meeting, with zero manual intervention.
          </p>
        </motion.div>

        {/* Funnel Overview Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 p-6 rounded-2xl bg-card border border-border overflow-x-auto"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-4 text-center font-[family-name:var(--font-jetbrains-mono)]">
            System Flow Overview
          </p>
          <MermaidDiagram chart={funnelOverviewDiagram} className="mermaid-wrapper flex justify-center" />
        </motion.div>

        <div className="relative">
          {stages.map((stage, index) => {
            const colors = colorMap[stage.color];
            // Visual funnel: each stage gets narrower (100% → 92% → 84% → 76% → 68%)
            const funnelWidth = 100 - index * 8;
            return (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative mb-8 mx-auto transition-all duration-500"
                  style={{ width: `${funnelWidth}%` }}
                >
                  <div className="relative rounded-[1.5rem] border-[0.75px] border-border p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className="relative overflow-hidden rounded-xl border-[0.75px] border-border/50 bg-card p-5 sm:p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
                        <div className={cn("w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0", colors.bg, colors.text)}>
                          {stage.mainIcon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={cn("text-xs font-bold tracking-[0.2em] uppercase font-[family-name:var(--font-jetbrains-mono)]", colors.text)}>
                              Stage {stage.number}
                            </span>
                            <div className={cn("h-px flex-1 opacity-20", colors.bg)} />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                            {stage.title}
                          </h3>
                          <p className="text-lg text-muted-foreground">{stage.subtitle}</p>
                        </div>
                        <div className={cn("px-4 py-2 rounded-full text-sm font-semibold shrink-0 border", colors.bg, colors.text, colors.border)}>
                          {stage.metrics}
                        </div>
                      </div>

                      <p className="text-foreground/80 text-base md:text-lg mb-8 leading-relaxed">
                        {stage.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {stage.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/80 border border-border/50">
                            <div className={cn("w-1.5 h-1.5 rounded-full mt-2 shrink-0", colors.text === "text-teal-400" ? "bg-teal-400" : colors.text === "text-emerald-400" ? "bg-emerald-400" : colors.text === "text-amber-400" ? "bg-amber-400" : colors.text === "text-violet-400" ? "bg-violet-400" : "bg-rose-400")} />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {stage.personas && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          <span className="text-xs text-muted-foreground mr-2 self-center">Target personas:</span>
                          {stage.personas.map((p) => (
                            <span key={p} className={cn("px-3 py-1 rounded-full text-xs font-medium", colors.bg, colors.text)}>{p}</span>
                          ))}
                        </div>
                      )}

                      {stage.output && (
                        <div className="mt-6 p-4 rounded-xl bg-background border border-border">
                          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider font-medium font-[family-name:var(--font-jetbrains-mono)]">Example Agent Output</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            <div><span className="text-muted-foreground">Company:</span> <span className="text-foreground">{stage.output.company}</span></div>
                            <div><span className="text-muted-foreground">Score:</span> <span className={colors.text}>{stage.output.score}</span></div>
                            <div><span className="text-muted-foreground">Pain:</span> <span className="text-foreground/80">{stage.output.pain}</span></div>
                            <div><span className="text-muted-foreground">Service Match:</span> <span className="text-foreground/80">{stage.output.service}</span></div>
                          </div>
                        </div>
                      )}

                      {stage.alerts && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          <span className="text-xs text-muted-foreground mr-2 self-center">Instant alerts via:</span>
                          {stage.alerts.map((a) => (
                            <span key={a} className={cn("px-3 py-1 rounded-full text-xs font-medium", colors.bg, colors.text)}>{a}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {index < stages.length - 1 && (
                  <div className="flex justify-center my-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <ArrowDown className="h-8 w-8 text-border" />
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
