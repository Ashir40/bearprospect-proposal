"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MermaidDiagram } from "@/components/ui/mermaid";
import { cn } from "@/lib/utils";
import {
  Database,
  Brain,
  Zap,
  MessageCircle,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const architectureDiagram = `flowchart TB
    subgraph DATA["Data Layer"]
        VP["Vibe Prospecting API"]
        WM["Website Monitor"]
        HS["Hiring Signals"]
        FS["Funding Signals"]
    end

    subgraph INTELLIGENCE["Intelligence Layer"]
        RA["Research Agent"]
        LS["Lead Scorer"]
        PM["Pain Mapper"]
        CS["Case Study Selector"]
    end

    subgraph EXECUTION["Execution Layer"]
        PE["Personalization Engine"]
        EO["Email Orchestrator"]
        LO["LinkedIn Agent"]
        SO["Sequence Manager"]
    end

    subgraph CONVERSATION["Conversation Layer"]
        RC["Reply Classifier"]
        OH["Objection Handler"]
        MB["Meeting Booker"]
        HO["Human Handoff"]
    end

    subgraph OPERATIONS["Operations Layer"]
        CRM["CRM Sync"]
        NT["Notifications"]
        DB["Analytics Dashboard"]
        AB["A/B Engine"]
    end

    VP --> RA
    WM --> RA
    HS --> RA
    FS --> RA
    RA --> LS
    LS --> PM
    PM --> CS
    CS --> PE
    PE --> EO
    PE --> LO
    EO --> SO
    LO --> SO
    SO --> RC
    RC --> OH
    RC --> MB
    OH --> MB
    MB --> HO
    HO --> CRM
    CRM --> NT
    CRM --> DB
    DB --> AB
    AB -.->|"Optimization"| PE

    style DATA fill:#0f2b2b,stroke:#2dd4bf,color:#99f6e4
    style INTELLIGENCE fill:#0f2b1a,stroke:#10b981,color:#a7f3d0
    style EXECUTION fill:#2b1f0f,stroke:#f59e0b,color:#fde68a
    style CONVERSATION fill:#1f0f2b,stroke:#8b5cf6,color:#ddd6fe
    style OPERATIONS fill:#2b0f1a,stroke:#f43f5e,color:#fecdd3`;

const layers = [
  {
    title: "Data Layer",
    icon: <Database className="h-6 w-6" />,
    color: "teal",
    items: [
      "Vibe Prospecting API — 150M+ companies, 800M+ contacts",
      "Website Monitor — Tech stack changes, new pages",
      "Hiring Signals — Job boards, LinkedIn monitoring",
      "Funding Signals — News & press releases",
    ],
  },
  {
    title: "Intelligence Layer",
    icon: <Brain className="h-6 w-6" />,
    color: "emerald",
    items: [
      "Research Agent — Deep prospect analysis",
      "Lead Scorer — AI Readiness + Budget + Urgency",
      "Pain Mapper — Prospect need → Bearplex service",
      "Case Study Selector — Auto-match portfolio",
    ],
  },
  {
    title: "Execution Layer",
    icon: <Zap className="h-6 w-6" />,
    color: "amber",
    items: [
      "Personalization Engine — Claude API powered",
      "Email Orchestrator — SendGrid / AWS SES",
      "LinkedIn Agent — Connection + messaging",
      "Sequence Manager — Multi-touch cadence",
    ],
  },
  {
    title: "Conversation Layer",
    icon: <MessageCircle className="h-6 w-6" />,
    color: "violet",
    items: [
      "Reply Classifier — Intent detection",
      "Objection Handler — AI sales agent",
      "Meeting Booker — Calendly integration",
      "Human Handoff — Escalation to BD team",
    ],
  },
  {
    title: "Operations Layer",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "rose",
    items: [
      "CRM Sync — HubSpot / Pipedrive",
      "Notifications — Slack · WhatsApp · Telegram",
      "Analytics Dashboard — Next.js + Supabase",
      "A/B Engine — Message optimization",
    ],
  },
];

const layerColorMap: Record<string, { border: string; bg: string; text: string }> = {
  teal: { border: "border-teal-500/20", bg: "bg-teal-500/8", text: "text-teal-400" },
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/8", text: "text-emerald-400" },
  amber: { border: "border-amber-500/20", bg: "bg-amber-500/8", text: "text-amber-400" },
  violet: { border: "border-violet-500/20", bg: "bg-violet-500/8", text: "text-violet-400" },
  rose: { border: "border-rose-500/20", bg: "bg-rose-500/8", text: "text-rose-400" },
};

const techStack = [
  { category: "Core AI", items: ["Claude API + Agent SDK", "Vibe Prospecting — B2B Data"], color: "teal" },
  { category: "Backend", items: ["Python Async Workers", "Supabase — DB + Auth", "Redis — Queue + Cache"], color: "emerald" },
  { category: "Delivery", items: ["SendGrid / AWS SES", "Calendly API", "LinkedIn API"], color: "amber" },
  { category: "Frontend & Ops", items: ["Next.js Dashboard", "HubSpot API — CRM", "Slack / WhatsApp Alerts"], color: "violet" },
];

export function ArchitectureSection() {
  return (
    <section className="relative bg-background py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-sm font-medium">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-teal-200 bg-clip-text text-transparent">
            Five Layers. One Engine.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Each layer is independently scalable and connected through event-driven pipelines.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 p-6 rounded-2xl bg-card border border-border overflow-x-auto"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-4 text-center font-[family-name:var(--font-jetbrains-mono)]">
            Full System Architecture
          </p>
          <MermaidDiagram chart={architectureDiagram} className="mermaid-wrapper flex justify-center" />
        </motion.div>

        {/* Layers */}
        <div className="space-y-4 mb-24">
          {layers.map((layer, index) => {
            const colors = layerColorMap[layer.color];
            return (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border-[0.75px] border-border p-2"
                >
                  <GlowingEffect spread={30} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", colors.bg, colors.text)}>{layer.icon}</div>
                      <h3 className={cn("text-lg md:text-xl font-bold shrink-0 w-full md:w-48", colors.text)}>{layer.title}</h3>
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {layer.items.map((item, i) => (
                          <div key={i} className="px-3 py-2 rounded-lg bg-background/80 border border-border/50 text-sm text-muted-foreground">{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                {index < layers.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowRight className="h-5 w-5 text-border rotate-90" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((stack, index) => {
            const colors = layerColorMap[stack.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border-[0.75px] border-border p-2"
              >
                <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 p-6">
                  <h4 className={cn("text-sm font-bold uppercase tracking-wider mb-4 font-[family-name:var(--font-jetbrains-mono)]", colors.text)}>{stack.category}</h4>
                  <div className="space-y-2">
                    {stack.items.map((item, i) => (
                      <div key={i} className="px-3 py-2 rounded-lg bg-background/80 border border-border/50 text-sm text-foreground/80">{item}</div>
                    ))}
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
