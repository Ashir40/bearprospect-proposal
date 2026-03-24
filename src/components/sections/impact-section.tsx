"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Zap,
  Target,
  Calendar,
  Clock,
  Eye,
  Package,
  Shield,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    label: "Outreach Volume",
    current: "5-10/week",
    projected: "200-400/week",
    improvement: "40x",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    label: "Research Time / Prospect",
    current: "30-45 min",
    projected: "0 min",
    improvement: "100%",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    label: "Reply Rate",
    current: "2-3%",
    projected: "8-15%",
    improvement: "5x",
    icon: <Target className="h-5 w-5" />,
  },
  {
    label: "Meetings / Month",
    current: "1-2",
    projected: "15-25",
    improvement: "15x",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    label: "BD Focus on Closing",
    current: "30%",
    projected: "100%",
    improvement: "3x",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    label: "Pipeline Visibility",
    current: "Minimal",
    projected: "Full Analytics",
    improvement: "Complete",
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

const strategicValues = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fill the Pipeline",
    description: "Autonomous lead gen running 24/7 — no manual research, no missed opportunities.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Productize It",
    description: "BearProspect becomes a standalone SaaS product sold to other B2B tech companies.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Living Demo",
    description: "The system itself is a live proof of Bearplex's autonomous agent expertise.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Competitive Moat",
    description: "Proprietary sales intelligence that improves with every interaction — impossible to replicate.",
  },
];

export function ImpactSection() {
  return (
    <section className="relative bg-slate-950 py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            PROJECTED IMPACT
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
            The Numbers Speak
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border-[0.75px] border-slate-800 p-2"
            >
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    {metric.icon}
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400">
                      {metric.improvement}
                    </span>
                  </div>
                </div>
                <h4 className="text-sm text-slate-500 mb-3 font-medium">
                  {metric.label}
                </h4>
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Current</p>
                    <p className="text-lg text-red-400/80 line-through decoration-red-500/50">
                      {metric.current}
                    </p>
                  </div>
                  <div className="text-slate-700">→</div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Projected</p>
                    <p className="text-2xl font-bold text-emerald-400">
                      {metric.projected}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Strategic Value
          </h3>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            BearProspect isn&apos;t just a sales tool — it&apos;s a strategic asset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {strategicValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border-[0.75px] border-slate-800 p-2"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800/50 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
