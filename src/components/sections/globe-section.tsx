"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/cobe-globe";
import { Globe as GlobeIcon } from "lucide-react";

const markers = [
  { id: "sf", location: [37.7595, -122.4367] as [number, number], label: "San Francisco" },
  { id: "nyc", location: [40.7128, -74.006] as [number, number], label: "New York" },
  { id: "tokyo", location: [35.6762, 139.6503] as [number, number], label: "Tokyo" },
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "sydney", location: [-33.8688, 151.2093] as [number, number], label: "Sydney" },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai" },
  { id: "lahore", location: [31.5497, 74.3436] as [number, number], label: "Lahore (HQ)" },
  { id: "berlin", location: [52.52, 13.405] as [number, number], label: "Berlin" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
];

const arcs = [
  {
    id: "lahore-sf",
    from: [31.5497, 74.3436] as [number, number],
    to: [37.7595, -122.4367] as [number, number],
    label: "Lahore → SF",
  },
  {
    id: "lahore-london",
    from: [31.5497, 74.3436] as [number, number],
    to: [51.5074, -0.1278] as [number, number],
    label: "Lahore → London",
  },
  {
    id: "lahore-dubai",
    from: [31.5497, 74.3436] as [number, number],
    to: [25.2048, 55.2708] as [number, number],
  },
];

const stats = [
  { value: "150M+", label: "Companies Scanned" },
  { value: "800M+", label: "Professional Profiles" },
  { value: "24/7", label: "Autonomous Operation" },
  { value: "50-100", label: "Qualified Leads / Week" },
];

export function GlobeSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-teal-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <GlobeIcon className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-xs font-mono text-teal-300 uppercase tracking-widest">
              Global Reach
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Prospect Intelligence, Worldwide
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            BearProspect scans companies across every major market — identifying the right prospects at the right time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="w-full max-w-md mx-auto lg:max-w-none"
          >
            <Globe
              markers={markers}
              arcs={arcs}
              markerColor={[0.18, 0.83, 0.75]}
              baseColor={[0.04, 0.06, 0.12]}
              arcColor={[0.18, 0.83, 0.75]}
              glowColor={[0.04, 0.15, 0.27]}
              dark={1}
              mapBrightness={2.5}
              markerSize={0.03}
              markerElevation={0.01}
              speed={0.002}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-xl border border-teal-500/10 bg-teal-500/5 p-5"
                >
                  <p className="text-2xl md:text-3xl font-bold text-teal-300 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-xs mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              From Series B startups in San Francisco to enterprise companies in London and Dubai —
              BearProspect identifies companies actively hiring for roles Bearplex fills, tracks funding
              rounds, monitors tech stack changes, and scores each prospect against your ideal customer profile.
              All running autonomously, 24/7.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
