"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MermaidDiagram } from "@/components/ui/mermaid";
import { AlertTriangle, Clock, MessageSquareOff, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "70% Time on Research",
    description: "Sales team spends most of their time on manual research & admin — only 30% on actual selling.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "No Signal Detection",
    description: "No systematic way to detect companies that need AI engineering right now — opportunities slip away daily.",
  },
  {
    icon: <MessageSquareOff className="h-5 w-5" />,
    title: "Generic Outreach",
    description: "Messaging doesn't speak to prospect's tech stack, AI gaps, or specific pain points — gets ignored.",
  },
  {
    icon: <TrendingDown className="h-5 w-5" />,
    title: "Inconsistent Follow-ups",
    description: "Warm leads go cold because follow-ups are manual and inconsistent. Zero data on what converts.",
  },
];

const problemDiagram = `graph TD
    A["Manual Prospecting"] --> B["Hours on LinkedIn & Google"]
    A --> C["Inconsistent outreach volume"]
    A --> D["Generic messaging ignored"]
    A --> E["No systematic follow-up"]
    B --> F["Lost Revenue"]
    C --> F
    D --> F
    E --> F

    style A fill:#7f1d1d,stroke:#dc2626,color:#fca5a5
    style F fill:#7f1d1d,stroke:#dc2626,color:#fca5a5
    style B fill:#1a1a2e,stroke:#991b1b,color:#fca5a5
    style C fill:#1a1a2e,stroke:#991b1b,color:#fca5a5
    style D fill:#1a1a2e,stroke:#991b1b,color:#fca5a5
    style E fill:#1a1a2e,stroke:#991b1b,color:#fca5a5`;

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const GridItem = ({ icon, title, description, index }: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      className="min-h-[14rem] list-none"
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-red-500/10 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-red-900/20 bg-[#0d1224] p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-red-500/20 bg-red-500/5 p-2 text-red-400/80">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-red-300/90">
                {title}
              </h3>
              <p className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-slate-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export function ProblemSection() {
  return (
    <section className="relative bg-[#0a0f1e] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400/80 text-sm font-medium">
            THE PROBLEM
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-red-200 to-red-400 bg-clip-text text-transparent">
            Manual Prospecting is
            <br />Costing Revenue
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Bearplex has 65+ elite AI engineers building sovereign systems — but the sales pipeline still runs on manual effort.
          </p>
        </motion.div>

        {/* Mermaid Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-2xl bg-[#0d1224] border border-[#1a2744] overflow-x-auto"
        >
          <MermaidDiagram chart={problemDiagram} className="mermaid-wrapper flex justify-center" />
        </motion.div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {problems.map((problem, index) => (
            <GridItem
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
