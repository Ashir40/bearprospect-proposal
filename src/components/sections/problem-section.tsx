"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
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

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const GridItem = ({ area, icon, title, description, index }: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("min-h-[14rem] list-none", area)}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-red-500/20 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-red-500/10 bg-slate-950 p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-red-500/30 bg-red-500/10 p-2 text-red-400">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-red-300">
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
    <section className="relative bg-slate-950 py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium">
            THE PROBLEM
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-red-300 to-red-600 bg-clip-text text-transparent">
            Manual Prospecting is
            <br />Costing Revenue
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Bearplex has 65+ elite AI engineers building sovereign systems — but the sales pipeline still runs on manual effort.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {problems.map((problem, index) => (
            <GridItem
              key={index}
              area=""
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
