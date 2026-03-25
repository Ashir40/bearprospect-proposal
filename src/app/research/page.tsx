"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Globe,
  EyeOff,
  Brain,
  Bot,
  ShoppingCart,
  Store,
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  Target,
  Crosshair,
  Zap,
  ArrowRight,
  Sparkles,
  Search,
  Database,
  ChevronDown,
  Code2,
} from "lucide-react";

/* ═══════════════ REAL DATA — VIBE PROSPECTING API (March 2026) ═══════════════ */

const invisibleMarket = {
  total: "45.4M",
  rows: [
    { country: "United States", businesses: "15.6M", revenue: "$1M-$5M", pct: "34.4%" },
    { country: "India", businesses: "6.5M", revenue: "$500K-$1M", pct: "14.3%" },
    { country: "France", businesses: "5.0M", revenue: "$1M-$5M", pct: "11.1%" },
    { country: "United Kingdom", businesses: "2.5M", revenue: "$1M-$5M", pct: "5.5%" },
    { country: "Spain", businesses: "2.4M", revenue: "$500K-$1M", pct: "5.3%" },
    { country: "Brazil", businesses: "2.1M", revenue: "$500K-$1M", pct: "4.7%" },
    { country: "China", businesses: "1.9M", revenue: "$1M-$5M", pct: "4.1%" },
    { country: "Mexico", businesses: "1.6M", revenue: "$500K-$1M", pct: "3.6%" },
    { country: "Germany", businesses: "1.1M", revenue: "$1M-$5M", pct: "2.4%" },
    { country: "Italy", businesses: "941K", revenue: "$500K-$1M", pct: "2.1%" },
    { country: "Canada", businesses: "637K", revenue: "$1M-$5M", pct: "1.4%" },
    { country: "Belgium", businesses: "628K", revenue: "$500K-$1M", pct: "1.4%" },
    { country: "South Africa", businesses: "564K", revenue: "$500K-$1M", pct: "1.2%" },
    { country: "Australia", businesses: "478K", revenue: "$1M-$5M", pct: "1.1%" },
    { country: "Norway", businesses: "380K", revenue: "$1M-$5M", pct: "0.8%" },
  ],
  revenueBreakdown: [
    { range: "$500K - $1M", count: "16.8M", pct: "37.0%" },
    { range: "$1M - $5M", count: "25.9M", pct: "57.0%" },
    { range: "$5M - $10M", count: "2.1M", pct: "4.5%" },
    { range: "$10M - $25M", count: "593K", pct: "1.3%" },
    { range: "$25M+", count: "61K", pct: "0.2%" },
  ],
  sizeBreakdown: [
    { range: "11-50 employees", count: "3.25M" },
    { range: "51-200 employees", count: "542K" },
    { range: "201-500 employees", count: "33.5K" },
    { range: "501-1,000 employees", count: "11.7K" },
    { range: "1,001-5,000 employees", count: "5.3K" },
  ],
};

const aiSecurityFrontier = {
  total: "15,343",
  decisionMakers: "342K+",
  intentTopics: [
    "Artificial Intelligence", "Autonomous AI", "AI Automation", "AI Strategy",
    "Penetration Testing", "Vulnerability Scanning", "Cyber Security",
    "AI Security", "Red Team", "Breach & Attack Simulation",
  ],
  rows: [
    { country: "United States", businesses: "11,489", revenue: "$10M-$25M", pct: "74.9%" },
    { country: "India", businesses: "535", revenue: "$25M-$75M", pct: "3.5%" },
    { country: "United Kingdom", businesses: "433", revenue: "$25M-$75M", pct: "2.8%" },
    { country: "Canada", businesses: "294", revenue: "$10M-$25M", pct: "1.9%" },
    { country: "Australia", businesses: "229", revenue: "$25M-$75M", pct: "1.5%" },
    { country: "Germany", businesses: "128", revenue: "$75M-$200M", pct: "0.8%" },
    { country: "Brazil", businesses: "118", revenue: "$10M-$25M", pct: "0.8%" },
    { country: "France", businesses: "98", revenue: "$25M-$75M", pct: "0.6%" },
    { country: "Japan", businesses: "81", revenue: "$75M-$200M", pct: "0.5%" },
    { country: "Netherlands", businesses: "75", revenue: "$25M-$75M", pct: "0.5%" },
    { country: "Sweden", businesses: "63", revenue: "$25M-$75M", pct: "0.4%" },
    { country: "Switzerland", businesses: "63", revenue: "$75M-$200M", pct: "0.4%" },
    { country: "Singapore", businesses: "53", revenue: "$10M-$25M", pct: "0.3%" },
    { country: "Spain", businesses: "52", revenue: "$10M-$25M", pct: "0.3%" },
    { country: "Indonesia", businesses: "51", revenue: "$10M-$25M", pct: "0.3%" },
  ],
  revenueBreakdown: [
    { range: "$5M - $10M", count: "836", pct: "5.4%" },
    { range: "$10M - $25M", count: "4,994", pct: "32.6%" },
    { range: "$25M - $75M", count: "4,040", pct: "26.3%" },
    { range: "$75M - $200M", count: "2,345", pct: "15.3%" },
    { range: "$200M - $1B", count: "2,742", pct: "17.9%" },
    { range: "$1B+", count: "333", pct: "2.2%" },
  ],
  dmByDept: [
    { dept: "Engineering", count: "52.5K" },
    { dept: "Operations", count: "54.8K" },
    { dept: "Design", count: "9.3K" },
    { dept: "Marketing", count: "4.2K" },
  ],
};

const wordpressNiche = {
  total: "2.97M",
  intentTotal: "13,628",
  rows: [
    { country: "United States", businesses: "1.0M", revenue: "$1M-$5M", pct: "33.7%" },
    { country: "United Kingdom", businesses: "235K", revenue: "$1M-$5M", pct: "7.9%" },
    { country: "Germany", businesses: "163K", revenue: "$1M-$5M", pct: "5.5%" },
    { country: "Brazil", businesses: "125K", revenue: "$500K-$1M", pct: "4.2%" },
    { country: "France", businesses: "120K", revenue: "$1M-$5M", pct: "4.0%" },
    { country: "India", businesses: "118K", revenue: "$500K-$1M", pct: "4.0%" },
    { country: "Spain", businesses: "109K", revenue: "$500K-$1M", pct: "3.7%" },
    { country: "Canada", businesses: "105K", revenue: "$1M-$5M", pct: "3.5%" },
    { country: "Australia", businesses: "101K", revenue: "$1M-$5M", pct: "3.4%" },
    { country: "Netherlands", businesses: "86K", revenue: "$1M-$5M", pct: "2.9%" },
    { country: "Italy", businesses: "78K", revenue: "$500K-$1M", pct: "2.6%" },
    { country: "Mexico", businesses: "48K", revenue: "$500K-$1M", pct: "1.6%" },
    { country: "South Africa", businesses: "30K", revenue: "$500K-$1M", pct: "1.0%" },
    { country: "Belgium", businesses: "30K", revenue: "$1M-$5M", pct: "1.0%" },
    { country: "Argentina", businesses: "28K", revenue: "$500K-$1M", pct: "1.0%" },
  ],
  revenueBreakdown: [
    { range: "$0 - $500K", count: "396K", pct: "13.3%" },
    { range: "$500K - $1M", count: "734K", pct: "24.7%" },
    { range: "$1M - $5M", count: "1.1M", pct: "36.9%" },
    { range: "$5M - $10M", count: "354K", pct: "11.9%" },
    { range: "$10M - $25M", count: "299K", pct: "10.1%" },
    { range: "$25M+", count: "91K", pct: "3.1%" },
  ],
  sizeBreakdown: [
    { range: "1-10 employees", count: "1.94M", pct: "65.4%" },
    { range: "11-50 employees", count: "636K", pct: "21.4%" },
    { range: "51-200 employees", count: "321K", pct: "10.8%" },
    { range: "201-500 employees", count: "69K", pct: "2.3%" },
  ],
};

const commerceBuilders = {
  total: "1.84M",
  intentTotal: "987",
  rows: [
    { country: "United States", businesses: "665K", revenue: "$1M-$5M", pct: "36.2%" },
    { country: "India", businesses: "266K", revenue: "$500K-$1M", pct: "14.5%" },
    { country: "United Kingdom", businesses: "118K", revenue: "$1M-$5M", pct: "6.4%" },
    { country: "Brazil", businesses: "70K", revenue: "$500K-$1M", pct: "3.8%" },
    { country: "France", businesses: "68K", revenue: "$1M-$5M", pct: "3.7%" },
    { country: "Canada", businesses: "68K", revenue: "$1M-$5M", pct: "3.7%" },
    { country: "Australia", businesses: "61K", revenue: "$1M-$5M", pct: "3.3%" },
    { country: "Germany", businesses: "52K", revenue: "$1M-$5M", pct: "2.8%" },
    { country: "Italy", businesses: "39K", revenue: "$500K-$1M", pct: "2.1%" },
    { country: "Mexico", businesses: "34K", revenue: "$500K-$1M", pct: "1.9%" },
    { country: "Spain", businesses: "27K", revenue: "$500K-$1M", pct: "1.5%" },
    { country: "Japan", businesses: "22K", revenue: "$1M-$5M", pct: "1.2%" },
    { country: "Argentina", businesses: "20K", revenue: "$500K-$1M", pct: "1.1%" },
    { country: "Netherlands", businesses: "19K", revenue: "$1M-$5M", pct: "1.0%" },
    { country: "Indonesia", businesses: "16K", revenue: "$500K-$1M", pct: "0.9%" },
  ],
  revenueBreakdown: [
    { range: "$0 - $500K", count: "276K", pct: "15.0%" },
    { range: "$500K - $1M", count: "425K", pct: "23.1%" },
    { range: "$1M - $5M", count: "706K", pct: "38.4%" },
    { range: "$5M - $10M", count: "194K", pct: "10.6%" },
    { range: "$10M - $25M", count: "193K", pct: "10.5%" },
    { range: "$25M+", count: "44K", pct: "2.4%" },
  ],
};

/* ═══════════════ REUSABLE COMPONENTS ═══════════════ */

function StatCard({ icon, label, value, sub, color, delay = 0 }: {
  icon: React.ReactNode; label: string; value: string; sub?: string; color: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative rounded-2xl border-[0.75px] border-border p-2"
    >
      <GlowingEffect spread={30} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 p-5">
        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>{icon}</div>
        <p className="text-xs text-muted-foreground font-medium mb-1">{label}</p>
        <p className="text-2xl md:text-3xl font-bold text-foreground font-[family-name:var(--font-jetbrains-mono)]">{value}</p>
        {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
      </div>
    </motion.div>
  );
}

function IntentTag({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-100 dark:bg-violet-500/8 text-violet-700 dark:text-violet-300 text-xs font-medium"
    >
      <Crosshair className="h-3 w-3" />
      {label}
    </motion.span>
  );
}

/* ─── Data Table ─── */

function DataTable({ headers, rows, accentColor, delay = 0 }: {
  headers: string[];
  rows: Record<string, string>[];
  accentColor: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-card border border-border/50 overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={`${accentColor} border-b border-border/50`}>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-foreground font-[family-name:var(--font-jetbrains-mono)] whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (delay || 0) + i * 0.03, duration: 0.3 }}
                viewport={{ once: true }}
                className="border-b border-border/20 hover:bg-muted/20 transition-colors"
              >
                {Object.values(row).map((val, j) => (
                  <td key={j} className={`px-4 py-2.5 whitespace-nowrap font-[family-name:var(--font-jetbrains-mono)] text-xs ${j === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {val}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

/* ─── Small Summary Table ─── */

function SummaryTable({ title, icon, rows, accentColor }: {
  title: string;
  icon: React.ReactNode;
  rows: { label: string; value: string; extra?: string }[];
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-card border border-border/50 overflow-hidden"
    >
      <div className={`flex items-center gap-2 px-4 py-3 ${accentColor} border-b border-border/50`}>
        {icon}
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/20 last:border-0">
              <td className="px-4 py-2.5 text-xs text-muted-foreground">{row.label}</td>
              <td className="px-4 py-2.5 text-xs font-bold text-foreground text-right font-[family-name:var(--font-jetbrains-mono)]">{row.value}</td>
              {row.extra && <td className="px-4 py-2.5 text-xs text-muted-foreground text-right font-[family-name:var(--font-jetbrains-mono)]">{row.extra}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*                            MAIN PAGE                               */
/* ═══════════════════════════════════════════════════════════════════ */

export default function ResearchPage() {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <main className="relative bg-background min-h-screen">
      <ThemeToggle />

      <div className="fixed top-0 left-0 right-0 h-5 z-[101]" onMouseEnter={() => setNavVisible(true)} />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-xl border-b border-teal-900/20 transition-all duration-500 ease-in-out ${
          navVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        onMouseEnter={() => setNavVisible(true)}
        onMouseLeave={() => setNavVisible(false)}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/bearplex-logo.png" alt="Bearplex" width={30} height={30} className="rounded-full" />
            <span className="text-base md:text-lg font-bold text-foreground font-[family-name:var(--font-inter)]">
              Bear<span className="text-primary">Prospect</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#invisible-market" className="hover:text-primary transition-colors duration-300">Invisible Market</a>
            <a href="#ai-frontier" className="hover:text-primary transition-colors duration-300">AI & Security</a>
            <a href="#wordpress" className="hover:text-primary transition-colors duration-300">WordPress</a>
            <a href="#commerce" className="hover:text-primary transition-colors duration-300">Commerce</a>
            <a href="#strategy" className="hover:text-primary transition-colors duration-300">Strategy</a>
            <Link href="/" className="hover:text-primary transition-colors duration-300">Back to Proposal</Link>
          </div>
          <span className="text-xs text-muted-foreground font-[family-name:var(--font-jetbrains-mono)]">Market Research</span>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-100 dark:bg-teal-500/5 text-teal-700 dark:text-teal-400 text-sm font-medium">
              <Database className="h-3.5 w-3.5" />
              LIVE MARKET INTELLIGENCE
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <span className="bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">The Data Behind</span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-500 dark:from-teal-400 dark:via-emerald-300 dark:to-cyan-400 bg-clip-text text-transparent">The Opportunity</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Real-time intelligence from <span className="text-foreground font-semibold">150M+ companies</span> and{" "}
            <span className="text-foreground font-semibold">800M+ contacts</span> — powered by Vibe Prospecting.
            Four untapped markets. One autonomous engine.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4">
            {[
              { label: "45.4M", sub: "Without Websites", color: "text-amber-600 dark:text-amber-400" },
              { label: "15,343", sub: "AI & Security Intent", color: "text-violet-600 dark:text-violet-400" },
              { label: "2.97M", sub: "WordPress Ecosystem", color: "text-blue-600 dark:text-blue-400" },
              { label: "1.84M", sub: "Shopify Commerce", color: "text-emerald-600 dark:text-emerald-400" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                className="px-5 py-3 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <p className={`text-xl md:text-2xl font-bold font-[family-name:var(--font-jetbrains-mono)] ${stat.color}`}>{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-16 flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs">Scroll to explore</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ NICHE 01 — INVISIBLE MARKET ═══════════════ */}
      <section id="invisible-market" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-100 dark:bg-amber-500/5 text-amber-700 dark:text-amber-400 text-sm font-medium">
              <EyeOff className="h-3.5 w-3.5" />
              NICHE 01 &mdash; THE INVISIBLE MARKET
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-amber-600 dark:to-amber-300 bg-clip-text text-transparent mb-4">
              45.4 Million Ghost Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revenue-generating companies with <span className="text-amber-600 dark:text-amber-400 font-semibold">no website whatsoever</span>.
              They pay for offices, employees, and inventory &mdash; but not their digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard icon={<Building2 className="h-5 w-5 text-amber-700 dark:text-amber-400" />} label="Total Businesses" value="45.4M" sub="$500K+ revenue, zero website" color="bg-amber-500/8" delay={0} />
            <StatCard icon={<DollarSign className="h-5 w-5 text-amber-700 dark:text-amber-400" />} label="Sweet Spot" value="$1M-$5M" sub="25.9M companies in this range" color="bg-amber-500/8" delay={0.1} />
            <StatCard icon={<Users className="h-5 w-5 text-amber-700 dark:text-amber-400" />} label="Established (11+)" value="3.85M" sub="Real businesses, not solopreneurs" color="bg-amber-500/8" delay={0.2} />
            <StatCard icon={<Globe className="h-5 w-5 text-amber-700 dark:text-amber-400" />} label="Countries" value="100+" sub="Global opportunity" color="bg-amber-500/8" delay={0.3} />
          </div>

          {/* Market Table */}
          <DataTable
            headers={["#", "Country", "Businesses", "Top Revenue Tier", "Share"]}
            rows={invisibleMarket.rows.map((r, i) => ({ rank: `${i + 1}`, ...r }))}
            accentColor="bg-amber-500/5"
          />

          {/* Revenue + Size tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <SummaryTable
              title="Revenue Distribution"
              icon={<DollarSign className="h-4 w-4 text-amber-600 dark:text-amber-400" />}
              rows={invisibleMarket.revenueBreakdown.map(r => ({ label: r.range, value: r.count, extra: r.pct }))}
              accentColor="bg-amber-500/5"
            />
            <SummaryTable
              title="Company Size Breakdown"
              icon={<Users className="h-4 w-4 text-amber-600 dark:text-amber-400" />}
              rows={invisibleMarket.sizeBreakdown.map(r => ({ label: r.range, value: r.count }))}
              accentColor="bg-amber-500/5"
            />
          </div>

          {/* Strategy */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/20 bg-amber-50 dark:bg-amber-500/5 p-6 md:p-8 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">BearProspect Strategy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Target the <strong className="text-foreground">3.85M established businesses</strong> (11+ employees, $500K+ revenue) with no digital presence.
                  Outreach angle: <em>&ldquo;Your competitors are online. You&apos;re leaving money on the table.&rdquo;</em>
                  At 2% conversion, that&apos;s <strong className="text-foreground">77,000 potential website projects</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

      {/* ═══════════════ NICHE 02 — AI & SECURITY FRONTIER ═══════════════ */}
      <section id="ai-frontier" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-100 dark:bg-violet-500/5 text-violet-700 dark:text-violet-400 text-sm font-medium">
              <Brain className="h-3.5 w-3.5" />
              NICHE 02 &mdash; THE AI & SECURITY FRONTIER
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-violet-600 dark:to-violet-300 bg-clip-text text-transparent mb-4">
              15,343 High-Value Targets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Companies actively showing <span className="text-violet-600 dark:text-violet-400 font-semibold">buying intent</span>{" "}
              for AI agents, autonomous systems, penetration testing, and cybersecurity.
              These aren&apos;t cold leads &mdash; they&apos;re already searching.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-10">
            {aiSecurityFrontier.intentTopics.map((topic, i) => (
              <IntentTag key={i} label={topic} delay={i * 0.05} />
            ))}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard icon={<Target className="h-5 w-5 text-violet-700 dark:text-violet-400" />} label="Companies with Intent" value="15,343" sub="Actively seeking AI & security" color="bg-violet-500/8" delay={0} />
            <StatCard icon={<Users className="h-5 w-5 text-violet-700 dark:text-violet-400" />} label="Decision Makers" value="342K+" sub="CTOs, VPs, Directors" color="bg-violet-500/8" delay={0.1} />
            <StatCard icon={<DollarSign className="h-5 w-5 text-violet-700 dark:text-violet-400" />} label="Revenue Range" value="$10M-$75M" sub="59% of companies" color="bg-violet-500/8" delay={0.2} />
            <StatCard icon={<Building2 className="h-5 w-5 text-violet-700 dark:text-violet-400" />} label="Sweet Spot" value="51-200" sub="47% — agile enough to buy" color="bg-violet-500/8" delay={0.3} />
          </div>

          <DataTable
            headers={["#", "Country", "Businesses", "Top Revenue Tier", "Share"]}
            rows={aiSecurityFrontier.rows.map((r, i) => ({ rank: `${i + 1}`, ...r }))}
            accentColor="bg-violet-500/5"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <SummaryTable
              title="Revenue Distribution"
              icon={<DollarSign className="h-4 w-4 text-violet-600 dark:text-violet-400" />}
              rows={aiSecurityFrontier.revenueBreakdown.map(r => ({ label: r.range, value: r.count, extra: r.pct }))}
              accentColor="bg-violet-500/5"
            />
            <SummaryTable
              title="Reachable Decision Makers"
              icon={<Users className="h-4 w-4 text-violet-600 dark:text-violet-400" />}
              rows={aiSecurityFrontier.dmByDept.map(r => ({ label: r.dept, value: r.count }))}
              accentColor="bg-violet-500/5"
            />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="rounded-2xl border border-violet-500/20 bg-violet-50 dark:bg-violet-500/5 p-6 md:p-8 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <Bot className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">BearProspect Strategy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These 15,343 companies are <strong className="text-foreground">already looking for what Bearplex builds</strong>.
                  Target the 51-200 employee sweet spot ($10M-$75M revenue). With 342K+ decision-makers,
                  each company has <strong className="text-foreground">~22 reachable contacts</strong>.
                  Multi-thread CTO + VP Eng + Head of AI simultaneously. Expected: <strong className="text-foreground">25-40 meetings/month</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

      {/* ═══════════════ NICHE 03 — WORDPRESS ECOSYSTEM ═══════════════ */}
      <section id="wordpress" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-100 dark:bg-blue-500/5 text-blue-700 dark:text-blue-400 text-sm font-medium">
              <Code2 className="h-3.5 w-3.5" />
              NICHE 03 &mdash; THE WORDPRESS ECOSYSTEM
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-blue-600 dark:to-blue-300 bg-clip-text text-transparent mb-4">
              2.97M WordPress Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nearly <span className="text-blue-600 dark:text-blue-400 font-semibold">3 million businesses</span> running on
              WordPress/WooCommerce &mdash; plus <strong>13,628 companies</strong> actively showing intent for WordPress development,
              website design, and web development services.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard icon={<Code2 className="h-5 w-5 text-blue-700 dark:text-blue-400" />} label="WP/WooCommerce" value="2.97M" sub="Active WordPress businesses" color="bg-blue-500/8" delay={0} />
            <StatCard icon={<Search className="h-5 w-5 text-blue-700 dark:text-blue-400" />} label="Active Intent" value="13,628" sub="Seeking WP/web dev services" color="bg-blue-500/8" delay={0.1} />
            <StatCard icon={<DollarSign className="h-5 w-5 text-blue-700 dark:text-blue-400" />} label="Revenue $1M-$5M" value="1.1M" sub="37% of WordPress businesses" color="bg-blue-500/8" delay={0.2} />
            <StatCard icon={<Users className="h-5 w-5 text-blue-700 dark:text-blue-400" />} label="Growth Ready (50+)" value="390K" sub="Outgrowing basic themes" color="bg-blue-500/8" delay={0.3} />
          </div>

          <DataTable
            headers={["#", "Country", "Businesses", "Top Revenue Tier", "Share"]}
            rows={wordpressNiche.rows.map((r, i) => ({ rank: `${i + 1}`, ...r }))}
            accentColor="bg-blue-500/5"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <SummaryTable
              title="Revenue Distribution"
              icon={<DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
              rows={wordpressNiche.revenueBreakdown.map(r => ({ label: r.range, value: r.count, extra: r.pct }))}
              accentColor="bg-blue-500/5"
            />
            <SummaryTable
              title="Company Size Breakdown"
              icon={<Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
              rows={wordpressNiche.sizeBreakdown.map(r => ({ label: r.range, value: r.count, extra: r.pct }))}
              accentColor="bg-blue-500/5"
            />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-blue-50 dark:bg-blue-500/5 p-6 md:p-8 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">BearProspect Strategy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focus on <strong className="text-foreground">390K businesses with 50+ employees</strong> that have outgrown basic WordPress themes.
                  Cross-reference with <strong className="text-foreground">13,628 companies actively seeking web development</strong> for warm leads.
                  Offer custom theme development, WooCommerce optimization, headless WordPress migrations, and performance audits.
                  Outreach angle: <em>&ldquo;Your WordPress site loads in 6 seconds. Your competitors load in 1.5.&rdquo;</em>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

      {/* ═══════════════ NICHE 04 — SHOPIFY COMMERCE ═══════════════ */}
      <section id="commerce" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-100 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
              <ShoppingCart className="h-3.5 w-3.5" />
              NICHE 04 &mdash; SHOPIFY COMMERCE
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-emerald-600 dark:to-emerald-300 bg-clip-text text-transparent mb-4">
              1.84M Shopify Stores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Shopify ecosystem has <span className="text-emerald-600 dark:text-emerald-400 font-semibold">1.84 million businesses</span> &mdash;
              most outgrowing their templates. Plus <strong>987 companies</strong> with active ecommerce development intent.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard icon={<Store className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />} label="Shopify Ecosystem" value="1.84M" sub="Shopify & Shopify Plus" color="bg-emerald-500/8" delay={0} />
            <StatCard icon={<Search className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />} label="Active Intent" value="987" sub="Seeking ecommerce dev now" color="bg-emerald-500/8" delay={0.1} />
            <StatCard icon={<DollarSign className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />} label="Revenue $1M-$5M" value="706K" sub="38% of Shopify businesses" color="bg-emerald-500/8" delay={0.2} />
            <StatCard icon={<TrendingUp className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />} label="Growth Ready (50+)" value="245K" sub="Ready to invest in custom" color="bg-emerald-500/8" delay={0.3} />
          </div>

          <DataTable
            headers={["#", "Country", "Businesses", "Top Revenue Tier", "Share"]}
            rows={commerceBuilders.rows.map((r, i) => ({ rank: `${i + 1}`, ...r }))}
            accentColor="bg-emerald-500/5"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <SummaryTable
              title="Revenue Distribution"
              icon={<DollarSign className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />}
              rows={commerceBuilders.revenueBreakdown.map(r => ({ label: r.range, value: r.count, extra: r.pct }))}
              accentColor="bg-emerald-500/5"
            />
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/5 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <ShoppingCart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">BearProspect Strategy</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Target <strong className="text-foreground">245K businesses with 50+ employees</strong> on Shopify.
                    Cross-reference with <strong className="text-foreground">987 active ecommerce intent</strong> leads.
                    Pitch: <em>&ldquo;Your Shopify template is leaving 30% revenue on the table.&rdquo;</em>
                    Offer custom builds, Shopify Plus migrations, and performance optimization.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

      {/* ═══════════════ COMBINED STRATEGY ═══════════════ */}
      <section id="strategy" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-100 dark:bg-teal-500/5 text-teal-700 dark:text-teal-400 text-sm font-medium">
              <Zap className="h-3.5 w-3.5" />
              THE COMBINED PLAY
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-teal-600 dark:to-teal-300 bg-clip-text text-transparent mb-4">
              50.2M Total Addressable Market
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four niches. One engine. Here&apos;s how BearProspect turns data into revenue.
            </p>
          </motion.div>

          {/* Strategy comparison table */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border/50 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-500/5 border-b border-border/50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-foreground font-[family-name:var(--font-jetbrains-mono)]">Niche</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-foreground font-[family-name:var(--font-jetbrains-mono)]">TAM</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-foreground font-[family-name:var(--font-jetbrains-mono)]">Target</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-foreground font-[family-name:var(--font-jetbrains-mono)]">Win Rate</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-foreground font-[family-name:var(--font-jetbrains-mono)]">Avg Deal</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-foreground font-[family-name:var(--font-jetbrains-mono)]">Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { niche: "Invisible Market", tam: "45.4M", target: "3.85M", win: "5-8%", deal: "$3K-$15K", approach: "\"No website\" direct pain point" },
                    { niche: "AI & Security", tam: "15,343", target: "15,343", win: "12-18%", deal: "$25K-$200K", approach: "Intent-driven, already searching" },
                    { niche: "WordPress", tam: "2.97M", target: "390K", win: "4-7%", deal: "$5K-$25K", approach: "Performance & growth pitch" },
                    { niche: "Shopify Commerce", tam: "1.84M", target: "245K", win: "3-6%", deal: "$5K-$30K", approach: "Template limitations = lost revenue" },
                  ].map((row, i) => (
                    <motion.tr key={i}
                      initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }} viewport={{ once: true }}
                      className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 text-xs font-bold text-foreground">{row.niche}</td>
                      <td className="px-4 py-3 text-xs font-bold text-primary font-[family-name:var(--font-jetbrains-mono)]">{row.tam}</td>
                      <td className="px-4 py-3 text-xs font-[family-name:var(--font-jetbrains-mono)] text-muted-foreground">{row.target}</td>
                      <td className="px-4 py-3 text-xs font-[family-name:var(--font-jetbrains-mono)] text-muted-foreground">{row.win}</td>
                      <td className="px-4 py-3 text-xs font-[family-name:var(--font-jetbrains-mono)] text-muted-foreground">{row.deal}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">{row.approach}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Data source */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">
                Data sourced from <strong className="text-foreground">Vibe Prospecting API</strong> &mdash; 150M+ businesses, 800M+ contacts &mdash; March 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The data is clear.<br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300 bg-clip-text text-transparent">
                The opportunity is massive.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              50.2M addressable businesses. 342K+ decision-makers. Four proven niches.
              All BearProspect needs is the green light.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Back to Full Proposal <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
