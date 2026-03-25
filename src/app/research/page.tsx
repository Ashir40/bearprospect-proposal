"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Globe,
  Eye,
  EyeOff,
  ShieldCheck,
  Brain,
  Bot,
  ShoppingCart,
  Store,
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  MapPin,
  Target,
  Crosshair,
  Zap,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Layers,
  Sparkles,
  Lock,
  Search,
  Database,
  ChevronDown,
} from "lucide-react";

/* ─────────────── REAL DATA FROM VIBE PROSPECTING API ─────────────── */

const invisibleMarket = {
  total: 45_405_641,
  headline: "45.4M",
  topCountries: [
    { name: "United States", count: 15_601_554, pct: 34.4 },
    { name: "India", count: 6_501_601, pct: 14.3 },
    { name: "France", count: 5_040_970, pct: 11.1 },
    { name: "United Kingdom", count: 2_514_221, pct: 5.5 },
    { name: "Spain", count: 2_422_190, pct: 5.3 },
    { name: "Brazil", count: 2_128_358, pct: 4.7 },
    { name: "China", count: 1_856_152, pct: 4.1 },
    { name: "Mexico", count: 1_647_304, pct: 3.6 },
  ],
  byRevenue: [
    { range: "$500K - $1M", count: 16_814_730, pct: 37.0 },
    { range: "$1M - $5M", count: 25_885_810, pct: 57.0 },
    { range: "$5M - $10M", count: 2_050_668, pct: 4.5 },
    { range: "$10M - $25M", count: 593_316, pct: 1.3 },
    { range: "$25M+", count: 61_117, pct: 0.2 },
  ],
  bySize: [
    { range: "11-50 employees", count: 3_254_325 },
    { range: "51-200 employees", count: 542_403 },
    { range: "201-500 employees", count: 33_500 },
    { range: "501-1,000 employees", count: 11_664 },
    { range: "1,001-5,000 employees", count: 5_262 },
  ],
  sizedTotal: 3_847_154,
};

const aiSecurityFrontier = {
  total: 15_343,
  headline: "15,343",
  decisionMakers: 342_310,
  topCountries: [
    { name: "United States", count: 11_489, pct: 74.9 },
    { name: "India", count: 535, pct: 3.5 },
    { name: "United Kingdom", count: 433, pct: 2.8 },
    { name: "Canada", count: 294, pct: 1.9 },
    { name: "Australia", count: 229, pct: 1.5 },
    { name: "Germany", count: 128, pct: 0.8 },
  ],
  byRevenue: [
    { range: "$5M - $10M", count: 836, pct: 5.4 },
    { range: "$10M - $25M", count: 4_994, pct: 32.6 },
    { range: "$25M - $75M", count: 4_040, pct: 26.3 },
    { range: "$75M - $200M", count: 2_345, pct: 15.3 },
    { range: "$200M - $1B", count: 2_742, pct: 17.9 },
    { range: "$1B+", count: 333, pct: 2.2 },
  ],
  bySize: [
    { range: "51-200", count: 7_255, pct: 47.3 },
    { range: "201-500", count: 3_431, pct: 22.4 },
    { range: "501-1,000", count: 2_044, pct: 13.3 },
    { range: "1,001-5,000", count: 2_613, pct: 17.0 },
  ],
  intentTopics: [
    "Artificial Intelligence",
    "Autonomous AI",
    "AI Automation",
    "AI Strategy",
    "Penetration Testing",
    "Vulnerability Scanning",
    "Cyber Security",
    "AI Security",
    "Red Team",
    "Breach & Attack Simulation",
  ],
  dmByDept: [
    { dept: "Engineering", count: 52_523 },
    { dept: "Operations", count: 54_813 },
    { dept: "Design", count: 9_285 },
    { dept: "Marketing", count: 4_186 },
  ],
};

const commerceBuilders = {
  shopifyTotal: 1_838_171,
  headline: "1.84M",
  ecomIntentTotal: 987,
  topCountries: [
    { name: "United States", count: 665_408, pct: 36.2 },
    { name: "India", count: 265_625, pct: 14.5 },
    { name: "United Kingdom", count: 117_854, pct: 6.4 },
    { name: "Brazil", count: 69_587, pct: 3.8 },
    { name: "France", count: 68_480, pct: 3.7 },
    { name: "Canada", count: 67_782, pct: 3.7 },
    { name: "Australia", count: 60_920, pct: 3.3 },
    { name: "Germany", count: 52_285, pct: 2.8 },
  ],
  byRevenue: [
    { range: "$0 - $500K", count: 276_123, pct: 15.0 },
    { range: "$500K - $1M", count: 425_164, pct: 23.1 },
    { range: "$1M - $5M", count: 706_237, pct: 38.4 },
    { range: "$5M - $10M", count: 194_153, pct: 10.6 },
    { range: "$10M - $25M", count: 192_727, pct: 10.5 },
    { range: "$25M+", count: 43_767, pct: 2.4 },
  ],
  bySize: [
    { range: "1-10 employees", count: 1_292_534, pct: 70.3 },
    { range: "11-50 employees", count: 300_574, pct: 16.4 },
    { range: "51-200 employees", count: 210_556, pct: 11.5 },
    { range: "201-500 employees", count: 34_507, pct: 1.9 },
  ],
};

/* ─────────────── ANIMATED COUNTER ─────────────── */

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="tabular-nums"
    >
      {value}{suffix}
    </motion.span>
  );
}

/* ─────────────── BAR COMPONENT ─────────────── */

function DataBar({ label, value, maxValue, color, delay = 0 }: {
  label: string;
  value: number;
  maxValue: number;
  color: string;
  delay?: number;
}) {
  const pct = Math.max((value / maxValue) * 100, 2);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <span className="text-xs text-muted-foreground w-28 shrink-0 text-right font-[family-name:var(--font-jetbrains-mono)]">{label}</span>
      <div className="flex-1 h-7 rounded-md bg-muted/40 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full rounded-md ${color}`}
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] font-bold text-foreground/80 font-[family-name:var(--font-jetbrains-mono)]">
          {value >= 1_000_000 ? `${(value / 1_000_000).toFixed(1)}M` : value >= 1_000 ? `${(value / 1_000).toFixed(1)}K` : value.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────── STAT CARD ─────────────── */

function StatCard({ icon, label, value, sub, color, delay = 0 }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  color: string;
  delay?: number;
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

/* ─────────────── COUNTRY ROW ─────────────── */

function CountryRow({ name, count, pct, delay = 0, color }: {
  name: string; count: number; pct: number; delay?: number; color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      viewport={{ once: true }}
      className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
    >
      <div className="flex items-center gap-2">
        <MapPin className="h-3 w-3 text-muted-foreground" />
        <span className="text-sm text-foreground">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground font-[family-name:var(--font-jetbrains-mono)]">
          {count >= 1_000_000 ? `${(count / 1_000_000).toFixed(1)}M` : count >= 1_000 ? `${(count / 1_000).toFixed(0)}K` : count}
        </span>
        <div className="w-16 h-1.5 rounded-full bg-muted/40 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            transition={{ delay: delay + 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`h-full rounded-full ${color}`}
          />
        </div>
        <span className="text-[11px] text-muted-foreground w-10 text-right font-[family-name:var(--font-jetbrains-mono)]">{pct}%</span>
      </div>
    </motion.div>
  );
}

/* ─────────────── INTENT TAG ─────────────── */

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

/* ═══════════════════════════════════════════════════════════════════ */
/*                         MAIN PAGE                                  */
/* ═══════════════════════════════════════════════════════════════════ */

export default function ResearchPage() {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <main className="relative bg-background min-h-screen">
      <ThemeToggle />

      {/* Nav trigger */}
      <div
        className="fixed top-0 left-0 right-0 h-5 z-[101]"
        onMouseEnter={() => setNavVisible(true)}
      />

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
            <a href="#commerce" className="hover:text-primary transition-colors duration-300">Commerce</a>
            <a href="#strategy" className="hover:text-primary transition-colors duration-300">Strategy</a>
            <Link href="/" className="hover:text-primary transition-colors duration-300">Back to Proposal</Link>
          </div>
          <span className="text-xs text-muted-foreground font-[family-name:var(--font-jetbrains-mono)]">
            Market Research
          </span>
        </div>
      </nav>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        {/* Radial gradient bg */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-100 dark:bg-teal-500/5 text-teal-700 dark:text-teal-400 text-sm font-medium">
              <Database className="h-3.5 w-3.5" />
              LIVE MARKET INTELLIGENCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          >
            <span className="bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              The Data Behind
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-500 dark:from-teal-400 dark:via-emerald-300 dark:to-cyan-400 bg-clip-text text-transparent">
              The Opportunity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Real-time intelligence from <span className="text-foreground font-semibold">150M+ companies</span> and{" "}
            <span className="text-foreground font-semibold">800M+ contacts</span> — powered by Vibe Prospecting.
            Three untapped markets. One autonomous engine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { label: "45.4M", sub: "Businesses Without Websites", color: "text-amber-600 dark:text-amber-400" },
              { label: "15,343", sub: "AI & Security Intent Companies", color: "text-violet-600 dark:text-violet-400" },
              { label: "1.84M", sub: "Shopify Commerce Businesses", color: "text-emerald-600 dark:text-emerald-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                className="px-6 py-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <p className={`text-2xl md:text-3xl font-bold font-[family-name:var(--font-jetbrains-mono)] ${stat.color}`}>
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs">Scroll to explore</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*    SECTION 1 — THE INVISIBLE MARKET                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="invisible-market" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
              Every single one is a potential client.
            </p>
          </motion.div>

          {/* Top-level stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard icon={<Building2 className="h-5 w-5 text-amber-700 dark:text-amber-400" />} label="Total Businesses" value="45.4M" sub="With $500K+ revenue, zero website" color="bg-amber-500/8" delay={0} />
            <StatCard icon={<DollarSign className="h-5 w-5 text-amber-700 dark:text-amber-400" />} label="Sweet Spot Revenue" value="$1M-$5M" sub="25.9M companies in this range" color="bg-amber-500/8" delay={0.1} />
            <StatCard icon={<Users className="h-5 w-5 text-amber-700 dark:text-amber-400" />} label="Established (11+ staff)" value="3.85M" sub="Not solopreneurs — real businesses" color="bg-amber-500/8" delay={0.2} />
            <StatCard icon={<Globe className="h-5 w-5 text-amber-700 dark:text-amber-400" />} label="Countries" value="100+" sub="Global opportunity across every market" color="bg-amber-500/8" delay={0.3} />
          </div>

          {/* Data grids */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Revenue breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <BarChart3 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <h3 className="text-sm font-semibold text-foreground">Distribution by Revenue</h3>
              </div>
              <div className="space-y-3">
                {invisibleMarket.byRevenue.map((item, i) => (
                  <DataBar key={i} label={item.range} value={item.count} maxValue={25_885_810} color="bg-gradient-to-r from-amber-500/70 to-amber-400/50" delay={i * 0.08} />
                ))}
              </div>
            </motion.div>

            {/* Top countries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <Globe className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <h3 className="text-sm font-semibold text-foreground">Top Markets by Volume</h3>
              </div>
              {invisibleMarket.topCountries.map((c, i) => (
                <CountryRow key={i} name={c.name} count={c.count} pct={c.pct * 2.9} delay={i * 0.05} color="bg-amber-500/60" />
              ))}
            </motion.div>
          </div>

          {/* Insight callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/20 bg-amber-50 dark:bg-amber-500/5 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">BearProspect Strategy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Target the <strong className="text-foreground">3.85M established businesses</strong> (11+ employees, $500K+ revenue) that have never invested in digital presence.
                  Filter by industry verticals where Bearplex has proven case studies. Outreach angle: <em>&ldquo;Your competitors are online. You&apos;re leaving money on the table.&rdquo;</em>
                  With a 2% conversion rate on outreach, that&apos;s <strong className="text-foreground">77,000 potential website projects</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*    SECTION 2 — THE AI & SECURITY FRONTIER                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="ai-frontier" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-100 dark:bg-violet-500/5 text-violet-700 dark:text-violet-400 text-sm font-medium">
              <Brain className="h-3.5 w-3.5" />
              NICHE 02 &mdash; THE AI & SECURITY FRONTIER
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-violet-600 dark:to-violet-300 bg-clip-text text-transparent mb-4">
              15,343 High-Value Targets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Companies actively showing <span className="text-violet-600 dark:text-violet-400 font-semibold">buying intent</span> for AI agents,
              autonomous systems, penetration testing, and cybersecurity. These aren&apos;t cold leads &mdash; they&apos;re already searching.
            </p>
          </motion.div>

          {/* Intent signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {aiSecurityFrontier.intentTopics.map((topic, i) => (
              <IntentTag key={i} label={topic} delay={i * 0.05} />
            ))}
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard icon={<Target className="h-5 w-5 text-violet-700 dark:text-violet-400" />} label="Companies with Intent" value="15,343" sub="Actively seeking AI & security solutions" color="bg-violet-500/8" delay={0} />
            <StatCard icon={<Users className="h-5 w-5 text-violet-700 dark:text-violet-400" />} label="Decision Makers" value="342K+" sub="CTOs, VPs, Directors in eng/IT/product" color="bg-violet-500/8" delay={0.1} />
            <StatCard icon={<DollarSign className="h-5 w-5 text-violet-700 dark:text-violet-400" />} label="Avg Revenue Range" value="$10M-$75M" sub="59% of companies in this bracket" color="bg-violet-500/8" delay={0.2} />
            <StatCard icon={<Building2 className="h-5 w-5 text-violet-700 dark:text-violet-400" />} label="Sweet Spot Size" value="51-200" sub="47% of total — agile enough to buy" color="bg-violet-500/8" delay={0.3} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Revenue breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <BarChart3 className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                <h3 className="text-sm font-semibold text-foreground">Company Revenue Distribution</h3>
              </div>
              <div className="space-y-3">
                {aiSecurityFrontier.byRevenue.map((item, i) => (
                  <DataBar key={i} label={item.range} value={item.count} maxValue={4_994} color="bg-gradient-to-r from-violet-500/70 to-violet-400/50" delay={i * 0.08} />
                ))}
              </div>
            </motion.div>

            {/* Company size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <Layers className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                <h3 className="text-sm font-semibold text-foreground">By Company Size (Employees)</h3>
              </div>
              <div className="space-y-3">
                {aiSecurityFrontier.bySize.map((item, i) => (
                  <DataBar key={i} label={item.range} value={item.count} maxValue={7_255} color="bg-gradient-to-r from-violet-500/70 to-purple-400/50" delay={i * 0.08} />
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Reachable Decision Makers by Department</p>
                <div className="grid grid-cols-2 gap-2">
                  {aiSecurityFrontier.dmByDept.map((d, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/30">
                      <span className="text-xs text-muted-foreground">{d.dept}</span>
                      <span className="text-xs font-bold text-violet-700 dark:text-violet-400 font-[family-name:var(--font-jetbrains-mono)]">
                        {(d.count / 1000).toFixed(1)}K
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Geography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border/50 p-6 mb-12"
          >
            <div className="flex items-center gap-2 mb-5">
              <Globe className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              <h3 className="text-sm font-semibold text-foreground">Geographic Distribution</h3>
              <span className="ml-auto text-xs text-muted-foreground">US dominates with 74.9% of intent signals</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {aiSecurityFrontier.topCountries.map((c, i) => (
                <CountryRow key={i} name={c.name} count={c.count} pct={c.pct} delay={i * 0.05} color="bg-violet-500/60" />
              ))}
            </div>
          </motion.div>

          {/* Insight callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-violet-500/20 bg-violet-50 dark:bg-violet-500/5 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <Bot className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">BearProspect Strategy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These 15,343 companies are <strong className="text-foreground">already looking for what Bearplex builds</strong>.
                  Target the 51-200 employee sweet spot ($10M-$75M revenue) — large enough to have budget, small enough to not build in-house.
                  With 342K+ decision-makers across engineering, product, and IT, each company has <strong className="text-foreground">~22 reachable contacts</strong>.
                  Multi-thread into CTO + VP Eng + Head of AI simultaneously. Expected meeting rate: <strong className="text-foreground">25-40 meetings/month</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*    SECTION 3 — THE COMMERCE BUILDERS                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="commerce" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-100 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
              <ShoppingCart className="h-3.5 w-3.5" />
              NICHE 03 &mdash; THE COMMERCE BUILDERS
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-emerald-600 dark:to-emerald-300 bg-clip-text text-transparent mb-4">
              1.84M Shopify Stores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Shopify ecosystem alone has <span className="text-emerald-600 dark:text-emerald-400 font-semibold">1.84 million businesses</span> —
              most outgrowing their templates, needing custom builds, migrations, and optimization.
              Plus <strong>987 companies</strong> actively showing ecommerce development intent.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard icon={<Store className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />} label="Shopify Ecosystem" value="1.84M" sub="Businesses on Shopify/Shopify Plus" color="bg-emerald-500/8" delay={0} />
            <StatCard icon={<Search className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />} label="Active Intent" value="987" sub="Seeking ecommerce development now" color="bg-emerald-500/8" delay={0.1} />
            <StatCard icon={<DollarSign className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />} label="Revenue $1M-$5M" value="706K" sub="38% of Shopify businesses" color="bg-emerald-500/8" delay={0.2} />
            <StatCard icon={<TrendingUp className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />} label="Growth Ready" value="545K" sub="50+ employees, ready to invest" color="bg-emerald-500/8" delay={0.3} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Revenue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <BarChart3 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-sm font-semibold text-foreground">Shopify Store Revenue Tiers</h3>
              </div>
              <div className="space-y-3">
                {commerceBuilders.byRevenue.map((item, i) => (
                  <DataBar key={i} label={item.range} value={item.count} maxValue={706_237} color="bg-gradient-to-r from-emerald-500/70 to-emerald-400/50" delay={i * 0.08} />
                ))}
              </div>
            </motion.div>

            {/* Countries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <Globe className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-sm font-semibold text-foreground">Top Shopify Markets</h3>
              </div>
              {commerceBuilders.topCountries.map((c, i) => (
                <CountryRow key={i} name={c.name} count={c.count} pct={c.pct * 2.7} delay={i * 0.05} color="bg-emerald-500/60" />
              ))}
            </motion.div>
          </div>

          {/* Company size breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border/50 p-6 mb-12"
          >
            <div className="flex items-center gap-2 mb-5">
              <Layers className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">Business Size Segments</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {commerceBuilders.bySize.map((seg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-muted/30 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 font-[family-name:var(--font-jetbrains-mono)]">
                    {seg.count >= 1_000_000 ? `${(seg.count / 1_000_000).toFixed(1)}M` : `${(seg.count / 1_000).toFixed(0)}K`}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{seg.range}</p>
                  <div className="mt-2 w-full h-1.5 rounded-full bg-muted/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${seg.pct}%` }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-emerald-500/60"
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1 font-[family-name:var(--font-jetbrains-mono)]">{seg.pct}%</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/5 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <ShoppingCart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">BearProspect Strategy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focus on the <strong className="text-foreground">545K businesses with 50+ employees</strong> on Shopify — they&apos;ve outgrown basic templates and
                  need custom development, performance optimization, or platform migration. Cross-reference with the <strong className="text-foreground">987 companies actively showing ecommerce development intent</strong> for
                  red-hot leads. Outreach angle: <em>&ldquo;Your Shopify store is leaving 30% of revenue on the table with template limitations.&rdquo;</em>
                  Pair with WordPress/WooCommerce migration offers for the price-sensitive segment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*    COMBINED STRATEGY                                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="strategy" className="relative bg-background py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-100 dark:bg-teal-500/5 text-teal-700 dark:text-teal-400 text-sm font-medium">
              <Zap className="h-3.5 w-3.5" />
              THE COMBINED PLAY
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-teal-600 dark:to-teal-300 bg-clip-text text-transparent mb-4">
              47.3M Total Addressable Market
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three niches. One engine. Here&apos;s how BearProspect turns data into revenue.
            </p>
          </motion.div>

          {/* Three-column strategy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              {
                niche: "01",
                title: "Invisible Market",
                color: "amber",
                colorClasses: {
                  badge: "border-amber-500/20 bg-amber-100 dark:bg-amber-500/5 text-amber-700 dark:text-amber-400",
                  icon: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                  stat: "text-amber-600 dark:text-amber-400",
                },
                icon: <EyeOff className="h-5 w-5" />,
                tam: "45.4M",
                target: "3.85M",
                approach: "\"You have no website\" — direct pain point, highest response rates",
                winRate: "5-8%",
                dealSize: "$3K-$15K",
              },
              {
                niche: "02",
                title: "AI & Security",
                color: "violet",
                colorClasses: {
                  badge: "border-violet-500/20 bg-violet-100 dark:bg-violet-500/5 text-violet-700 dark:text-violet-400",
                  icon: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
                  stat: "text-violet-600 dark:text-violet-400",
                },
                icon: <Brain className="h-5 w-5" />,
                tam: "15,343",
                target: "15,343",
                approach: "Intent-driven — they're already searching for AI/security solutions",
                winRate: "12-18%",
                dealSize: "$25K-$200K",
              },
              {
                niche: "03",
                title: "Commerce",
                color: "emerald",
                colorClasses: {
                  badge: "border-emerald-500/20 bg-emerald-100 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400",
                  icon: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                  stat: "text-emerald-600 dark:text-emerald-400",
                },
                icon: <ShoppingCart className="h-5 w-5" />,
                tam: "1.84M",
                target: "545K",
                approach: "\"Your template is costing you revenue\" — data-backed ROI pitch",
                winRate: "3-6%",
                dealSize: "$5K-$30K",
              },
            ].map((niche, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border-[0.75px] border-border p-2"
              >
                <GlowingEffect spread={30} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${niche.colorClasses.icon} flex items-center justify-center`}>
                      {niche.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-[family-name:var(--font-jetbrains-mono)]">NICHE {niche.niche}</p>
                      <p className="text-sm font-bold text-foreground">{niche.title}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">TAM</span>
                      <span className={`text-sm font-bold font-[family-name:var(--font-jetbrains-mono)] ${niche.colorClasses.stat}`}>{niche.tam}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Target Segment</span>
                      <span className={`text-sm font-bold font-[family-name:var(--font-jetbrains-mono)] ${niche.colorClasses.stat}`}>{niche.target}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Est. Win Rate</span>
                      <span className="text-sm font-bold text-foreground font-[family-name:var(--font-jetbrains-mono)]">{niche.winRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Avg Deal Size</span>
                      <span className="text-sm font-bold text-foreground font-[family-name:var(--font-jetbrains-mono)]">{niche.dealSize}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/30">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Approach:</strong> {niche.approach}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Data source badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">
                Data sourced from <strong className="text-foreground">Vibe Prospecting API</strong> &mdash; 150M+ businesses, 800M+ contacts &mdash; March 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*    CTA                                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The data is clear.<br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300 bg-clip-text text-transparent">
                The opportunity is massive.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              47.3M addressable businesses. 342K+ decision-makers. Three proven niches with clear outreach strategies.
              All BearProspect needs is the green light.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Back to Full Proposal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
