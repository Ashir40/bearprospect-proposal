"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { CheckCircle2 } from "lucide-react";

const nextSteps = [
  "Approve scope and timeline — Align on Phase 1 priority",
  "Set up Vibe Prospecting connector — Enable B2B data access",
  "Define initial ICP parameters — First target verticals and personas",
  "Allocate engineering resources — 2-3 engineers for Phase 1",
  "Begin build — Target Phase 1 live within 3 weeks",
];

export function CTASection() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-background py-32 px-4 md:px-8 overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#2dd4bf" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent leading-tight">
            Ready to Build the
            <br />Future of Sales?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            &ldquo;The best sales team is one that never sleeps, never forgets to follow up,
            and gets smarter with every conversation.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Recommended Next Steps
          </h3>
          <div className="space-y-3 max-w-xl mx-auto">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/80 border border-border/50"
              >
                <CheckCircle2 className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <InteractiveHoverButton
            text="Let's Go"
            className="w-44 border-teal-500/40 text-teal-300 bg-background text-lg py-3"
            onClick={handleClick}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            BearProspect
          </p>
          <p className="mt-2 text-muted-foreground text-sm">
            Built by Bearplex. Powered by AI. Fully Autonomous.
          </p>
          <p className="mt-4 text-muted-foreground text-xs">
            Created, Strategized &amp; Researched by <span className="text-teal-400/70">Ashir Nadeem</span>
          </p>
          <p className="mt-2 text-muted-foreground/40 text-xs font-[family-name:var(--font-jetbrains-mono)]">
            Bearplex Engineering Team — March 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
