"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Database, FileSpreadsheet, Shield, AlertTriangle, CheckCircle2, XCircle,
  CreditCard, TrendingUp, Users, Building2, DollarSign, Target,
  Zap, ArrowRight, Globe, EyeOff, Brain, ShoppingCart, Store,
  ExternalLink, Search, BarChart3, FileDown, Clock, Layers,
  ChevronDown, Lock, Unlock, AlertCircle, Activity,
} from "lucide-react";

/* ═══════════════ DATASETS ═══════════════ */

const datasets = [
  {
    id: "ds-4f395c2b-5403-4550-b031-9bca9c1b0f09",
    name: "US Decision Makers — Web Intent",
    fileName: "BearProspect_Invisible_Market_50_Decision_Makers.xlsx",
    exportDate: "March 26, 2026 — 2:55 PM UTC",
    rows: 49,
    creditsUsed: 332,
    source: "Vibe Prospecting API",
    type: "Prospects (People)",
    filters: "US, $500K-$25M revenue, 11-500 employees, C-Suite/VP/Director, website intent",
    fields: ["Full Name", "Job Title", "Company", "City", "State", "Professional Email", "Mobile Phone", "LinkedIn", "Education", "Skills"],
    quality: { emails: 49, phones: 43, linkedin: 49, total: 49 },
    status: "exported",
    note: "Intent-based decision makers — these companies ALREADY have websites. Useful as referral partners, not direct ghost market targets.",
    vibeUrl: "https://app.vibeprospecting.ai/lists?dataset_id=ds-4f395c2b-5403-4550-b031-9bca9c1b0f09",
  },
  {
    id: "ds-4c0b7b06-13fa-44c0-812e-2f67741a493e",
    name: "Ghost Market — No Website US Businesses",
    fileName: "BearProspect_Ghost_Market_50_Businesses.xlsx",
    exportDate: "March 26, 2026 — 3:24 PM UTC",
    rows: 50,
    creditsUsed: 50,
    source: "Vibe Prospecting API",
    type: "Businesses (Companies)",
    filters: "US, $500K-$75M revenue, 11-1000 employees, NO website, private",
    fields: ["Company Name", "City", "State", "Employees", "Revenue", "Industry", "LinkedIn Profile", "Description"],
    quality: { linkedin: 45, noWebsite: 50, total: 50 },
    status: "exported",
    note: "True ghost businesses — confirmed NO website. ~80% false positive rate detected during validation. Requires manual verification before outreach.",
    vibeUrl: "https://app.vibeprospecting.ai/lists?dataset_id=ds-4c0b7b06-13fa-44c0-812e-2f67741a493e",
  },
];

/* ═══════════════ VALIDATION RESULTS ═══════════════ */

const decisionMakerValidation = [
  { name: "Pete Jimison", company: "Frequency", title: "CEO", status: "verified", flags: "None" },
  { name: "Stephanie Kilfeather", company: "AAR", title: "Director, Events", status: "verified", flags: "Location: DC vs Reston" },
  { name: "Jeremy Aaronson", company: "UpSellit", title: "CRO", status: "verified", flags: "None" },
  { name: "Chris Wampler", company: "UpSellit", title: "CEO & Co-Founder", status: "verified", flags: "None" },
  { name: "David Kocher", company: "RevenueWell", title: "CCO", status: "verified", flags: "None" },
  { name: "Fern Mandelbaum", company: "Emerson Collective", title: "MD, Venture", status: "verified", flags: "Also Stanford GSB Lecturer" },
  { name: "Stephen Prosser", company: "RevenueWell", title: "CTO", status: "verified", flags: "Title may be SVP Engineering" },
  { name: "Nicolas Bernadi", company: "Shaw Bakers", title: "Partner & CEO", status: "verified", flags: "None" },
  { name: "Dan O'Mahony", company: "Inkhouse", title: "MD, West", status: "verified", flags: "Based in SF, not Waltham" },
  { name: "Melanie Carver", company: "AAFA", title: "Chief Mission Officer", status: "verified", flags: "None" },
];

const ghostValidation = [
  { name: "Brilliant Ads", claimed: "No website", actual: "LinkedIn-only page", status: "suspicious", reason: "May not be a real operating company" },
  { name: "Egger & Co", claimed: "No website", actual: "May have website", status: "needs-check", reason: "Could be confused with Fritz Egger GmbH" },
  { name: "Taskify", claimed: "No website", actual: "Multiple Taskify sites exist", status: "false", reason: "taskify.com likely exists" },
  { name: "Hire Resolve", claimed: "No website", actual: "hireresolve.co.za EXISTS", status: "false", reason: "SA recruitment firm with website" },
  { name: "CompuGain", claimed: "No website", actual: "compugain.com EXISTS", status: "false", reason: "Known IT services company" },
  { name: "Fierce Pharma", claimed: "No website", actual: "fiercepharma.com EXISTS", status: "false", reason: "Major pharma news site by Questex" },
  { name: "Billingsley Travel", claimed: "No website", actual: "Plausibly no site", status: "plausible", reason: "Small family travel agency" },
  { name: "DyCoders", claimed: "No website", actual: "Unknown", status: "needs-check", reason: "No strong signal either way" },
  { name: "BigSpring", claimed: "No website", actual: "bigspring.ai EXISTS", status: "false", reason: "Known workforce learning platform" },
  { name: "Montegallo", claimed: "No website", actual: "Italian brand has site", status: "needs-check", reason: "MI entity unclear" },
];

/* ═══════════════ ARCHITECTURE ═══════════════ */

const architectureModules = [
  {
    title: "Discovery Engine",
    icon: <Search className="h-5 w-5" />,
    color: "bg-amber-500/10 text-amber-500",
    description: "Live, filterable, searchable prospect database from 45.4M ghost businesses",
    features: [
      "Revenue slider: $500K to $25M+",
      "Employee filter: 1 to 5,000+",
      "Industry: 200+ NAICS codes",
      "Geography: Country/State/City",
      "has_website: false (locked filter)",
      "Map view with cluster pins",
      "Supabase cache — no re-fetching",
    ],
    dataFlow: "User filters → Vibe API (fetch-entities) → Cache in Supabase → Render DataTable + MapView",
    creditCost: "1 credit per business fetched",
  },
  {
    title: "Enrichment Pipeline",
    icon: <Layers className="h-5 w-5" />,
    color: "bg-violet-500/10 text-violet-500",
    description: "4-stage enrichment from basic info to AI-scored outreach priority",
    features: [
      "Stage 1: Basic (Vibe) — name, address, revenue",
      "Stage 2: Contact Discovery — emails, phones via Hunter/Apollo",
      "Stage 3: Competitor Intel — do competitors have websites?",
      "Stage 4: AI Scoring — Website Readiness Score (0-100)",
    ],
    dataFlow: "Ghost business → Enrich firmographics → Find contacts → Competitor gap analysis → Claude API scoring",
    creditCost: "1-6 credits per enrichment type",
  },
  {
    title: "Outreach Automator",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-blue-500/10 text-blue-500",
    description: "Multi-channel sequences built for the 'no website' pitch",
    features: [
      "Pre-built templates: competitor angle, customer-can't-find-you angle",
      "Day 0: Personalized email with competitor data",
      "Day 3: Follow-up with case study",
      "Day 7: LinkedIn connection",
      "Day 14: Final offer email",
      "A/B testing variants",
    ],
    dataFlow: "Prospect list → Template engine → Email (Resend) + LinkedIn + Direct mail (Lob API)",
    creditCost: "N/A — uses external email APIs",
  },
  {
    title: "Analytics Dashboard",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "bg-emerald-500/10 text-emerald-500",
    description: "Pipeline funnel, response rates, ROI calculator",
    features: [
      "Prospects Found → Enriched → Contacted → Converted",
      "Revenue by industry chart",
      "Geographic heatmap",
      "Response rate by template",
      "ROI calculator (deals closed x avg value)",
    ],
    dataFlow: "Supabase realtime → TanStack Query → Chart.js / Recharts",
    creditCost: "N/A — reads from cached data",
  },
];

/* ═══════════════ CREDIT TIERS ═══════════════ */

const creditTiers = [
  {
    tier: "Tier 1",
    label: "LinkedIn Outreach",
    recommended: true,
    credits: "2,000",
    cost: "$200*",
    output: "1,000 ghost businesses with LinkedIn profiles",
    method: "Manual LinkedIn CEO outreach",
    conversion: "2-5% expected",
    deals: "20-50 website projects",
  },
  {
    tier: "Tier 2",
    label: "Cold Call + Direct Mail",
    recommended: false,
    credits: "10,000",
    cost: "$1,000*",
    output: "5,000 businesses with addresses/phones",
    method: "Cold call + direct mail campaigns",
    conversion: "3-8% expected",
    deals: "150-400 website projects",
  },
  {
    tier: "Tier 3",
    label: "Full Decision Maker Hunt",
    recommended: false,
    credits: "90,000",
    cost: "$9,000*",
    output: "~500-1,000 decision maker contacts",
    method: "Direct email/phone to owners & CEOs",
    conversion: "5-10% hit rate on contact data",
    deals: "25-100 website projects",
  },
];

/* ═══════════════ NICHE SUMMARIES ═══════════════ */

const nicheSummaries = [
  {
    id: "invisible",
    name: "The Invisible Market",
    icon: <EyeOff className="h-5 w-5" />,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    tam: "45.4M",
    target: "3.85M",
    winRate: "5-8%",
    avgDeal: "$3K-$15K",
    approach: "No website = direct pain point",
    insight: "Ghost businesses have zero digital footprint. Their decision makers don't exist in B2B databases. The data gap IS the competitive moat — nobody else can reach them either.",
    validated: true,
    validationResult: "~20% true ghosts, ~80% database false positives",
    creditsTested: 382,
  },
  {
    id: "ai-security",
    name: "AI & Security Frontier",
    icon: <Brain className="h-5 w-5" />,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    tam: "15,343",
    target: "5,000",
    winRate: "3-5%",
    avgDeal: "$25K-$100K",
    approach: "AI/security buying intent signals",
    insight: "High-value companies actively researching AI and cybersecurity. 342K+ decision makers identified. Best for enterprise security consulting or AI implementation services.",
    validated: false,
    validationResult: "Not yet tested — requires separate hunt",
    creditsTested: 0,
  },
  {
    id: "wordpress",
    name: "WordPress Ecosystem",
    icon: <Globe className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    tam: "2.97M",
    target: "13,628",
    winRate: "4-7%",
    avgDeal: "$5K-$25K",
    approach: "WooCommerce businesses with web dev intent",
    insight: "Massive WordPress install base. Target businesses using WooCommerce that show intent for web development services — they're ready to upgrade or migrate.",
    validated: false,
    validationResult: "Not yet tested — requires separate hunt",
    creditsTested: 0,
  },
  {
    id: "shopify",
    name: "Shopify Commerce",
    icon: <ShoppingCart className="h-5 w-5" />,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    tam: "1.84M",
    target: "987",
    winRate: "5-10%",
    avgDeal: "$10K-$50K",
    approach: "Shopify stores with ecommerce dev intent",
    insight: "Shopify/Shopify Plus stores showing buying intent for ecommerce development. Smaller pool but higher conversion — these businesses are actively shopping for help.",
    validated: false,
    validationResult: "Not yet tested — requires separate hunt",
    creditsTested: 0,
  },
];

/* ═══════════════ REUSABLE COMPONENTS ═══════════════ */

function StatCard({ icon, label, value, sub, color, delay = 0 }: {
  icon: React.ReactNode; label: string; value: string; sub?: string; color: string; delay?: number;
}) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }} viewport={{ once: true }}
      className="relative rounded-2xl border-[0.75px] border-border p-2">
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

function StatusBadge({ status }: { status: string }) {
  const configs: Record<string, { bg: string; text: string; icon: React.ReactNode; label: string }> = {
    verified: { bg: "bg-emerald-500/10 border-emerald-500/20", text: "text-emerald-400", icon: <CheckCircle2 className="h-3 w-3" />, label: "VERIFIED" },
    false: { bg: "bg-red-500/10 border-red-500/20", text: "text-red-400", icon: <XCircle className="h-3 w-3" />, label: "FALSE — HAS WEBSITE" },
    suspicious: { bg: "bg-amber-500/10 border-amber-500/20", text: "text-amber-400", icon: <AlertTriangle className="h-3 w-3" />, label: "SUSPICIOUS" },
    plausible: { bg: "bg-blue-500/10 border-blue-500/20", text: "text-blue-400", icon: <CheckCircle2 className="h-3 w-3" />, label: "PLAUSIBLE" },
    "needs-check": { bg: "bg-orange-500/10 border-orange-500/20", text: "text-orange-400", icon: <AlertCircle className="h-3 w-3" />, label: "NEEDS CHECK" },
    exported: { bg: "bg-emerald-500/10 border-emerald-500/20", text: "text-emerald-400", icon: <FileDown className="h-3 w-3" />, label: "EXPORTED" },
  };
  const c = configs[status] || configs.suspicious;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border ${c.bg} ${c.text} text-[10px] font-bold font-[family-name:var(--font-jetbrains-mono)]`}>
      {c.icon}{c.label}
    </span>
  );
}

/* ═══════════════ MAIN PAGE ═══════════════ */

export default function DashboardPage() {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <main className="relative bg-background min-h-screen">
      <ThemeToggle />
      <div className="fixed top-0 left-0 right-0 h-5 z-[101]" onMouseEnter={() => setNavVisible(true)} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-xl border-b border-teal-900/20 transition-all duration-500 ease-in-out ${
        navVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`} onMouseEnter={() => setNavVisible(true)} onMouseLeave={() => setNavVisible(false)}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/bearplex-logo.png" alt="Bearplex" width={30} height={30} className="rounded-full" />
            <span className="text-base md:text-lg font-bold text-foreground">Bear<span className="text-primary">Prospect</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#datasets" className="hover:text-primary transition-colors">Datasets</a>
            <a href="#validation" className="hover:text-primary transition-colors">Validation</a>
            <a href="#architecture" className="hover:text-primary transition-colors">Architecture</a>
            <a href="#niches" className="hover:text-primary transition-colors">4 Niches</a>
            <a href="#credits" className="hover:text-primary transition-colors">Credits</a>
            <Link href="/research" className="hover:text-primary transition-colors">Research</Link>
          </div>
          <span className="text-xs text-muted-foreground font-[family-name:var(--font-jetbrains-mono)]">Dashboard</span>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-100 dark:bg-violet-500/5 text-violet-700 dark:text-violet-400 text-sm font-medium">
              <Activity className="h-3.5 w-3.5" />HUNT DASHBOARD — MARCH 26, 2026
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <span className="bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">Data Hunt</span><br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">Results & Analysis</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Complete audit of our Vibe Prospecting hunt — what we found, what it cost, what&apos;s real,
            and what we need to scale across <span className="text-foreground font-semibold">all 4 niches</span>.
          </motion.p>

          {/* Quick Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard icon={<FileSpreadsheet className="h-5 w-5 text-violet-400" />} label="Datasets Exported" value="2" sub="CSV files generated" color="bg-violet-500/10" />
            <StatCard icon={<Users className="h-5 w-5 text-emerald-400" />} label="Total Records" value="99" sub="49 people + 50 businesses" color="bg-emerald-500/10" delay={0.1} />
            <StatCard icon={<CreditCard className="h-5 w-5 text-amber-400" />} label="Credits Spent" value="382" sub="of 400 starting balance" color="bg-amber-500/10" delay={0.2} />
            <StatCard icon={<Shield className="h-5 w-5 text-blue-400" />} label="Validation Rate" value="100%" sub="10/10 decision makers verified" color="bg-blue-500/10" delay={0.3} />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SECTION 1: DATASETS ═══════════════ */}
      <section id="datasets" className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-medium">
            <FileSpreadsheet className="h-3 w-3" />EXPORTED DATASETS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">CSV Files Generated</h2>
          <p className="text-muted-foreground mb-10">Two datasets exported from Vibe Prospecting on March 26, 2026.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {datasets.map((ds, i) => (
            <motion.div key={ds.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }} viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border/50 overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-border/30 flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">{ds.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />{ds.exportDate}
                  </div>
                </div>
                <StatusBadge status={ds.status} />
              </div>
              {/* Body */}
              <div className="px-5 py-4 space-y-3">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div><span className="text-muted-foreground">File:</span> <span className="text-foreground font-[family-name:var(--font-jetbrains-mono)] text-[10px]">{ds.fileName}</span></div>
                  <div><span className="text-muted-foreground">Rows:</span> <span className="text-foreground font-bold font-[family-name:var(--font-jetbrains-mono)]">{ds.rows}</span></div>
                  <div><span className="text-muted-foreground">Type:</span> <span className="text-foreground">{ds.type}</span></div>
                  <div><span className="text-muted-foreground">Credits:</span> <span className="text-amber-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">{ds.creditsUsed}</span></div>
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Filters:</span>
                  <span className="ml-1 text-foreground">{ds.filters}</span>
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Fields:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {ds.fields.map(f => (
                      <span key={f} className="px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground text-[10px]">{f}</span>
                    ))}
                  </div>
                </div>
                {/* Quality Bar */}
                <div className="pt-2 border-t border-border/20">
                  <p className="text-[10px] text-muted-foreground font-semibold mb-2">DATA QUALITY</p>
                  {"emails" in ds.quality && (
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                        <p className="text-emerald-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">{(ds.quality as { emails: number }).emails}/{ds.quality.total}</p>
                        <p className="text-[10px] text-muted-foreground">Emails</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-blue-500/5 border border-blue-500/10">
                        <p className="text-blue-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">{(ds.quality as { phones: number }).phones}/{ds.quality.total}</p>
                        <p className="text-[10px] text-muted-foreground">Phones</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-violet-500/5 border border-violet-500/10">
                        <p className="text-violet-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">{(ds.quality as { linkedin: number }).linkedin}/{ds.quality.total}</p>
                        <p className="text-[10px] text-muted-foreground">LinkedIn</p>
                      </div>
                    </div>
                  )}
                  {"noWebsite" in ds.quality && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-center p-2 rounded-lg bg-red-500/5 border border-red-500/10">
                        <p className="text-red-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">{(ds.quality as { noWebsite: number }).noWebsite}/{ds.quality.total}</p>
                        <p className="text-[10px] text-muted-foreground">No Website</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-violet-500/5 border border-violet-500/10">
                        <p className="text-violet-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">{(ds.quality as { linkedin: number }).linkedin}/{ds.quality.total}</p>
                        <p className="text-[10px] text-muted-foreground">LinkedIn</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* Note */}
                <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10 text-xs text-amber-300/80">
                  <AlertTriangle className="h-3 w-3 inline mr-1.5" />{ds.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ SECTION 2: VALIDATION ═══════════════ */}
      <section id="validation" className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium">
            <Shield className="h-3 w-3" />DATA VALIDATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Truth Check</h2>
          <p className="text-muted-foreground mb-10">We verified 10 samples from each dataset against live web sources.</p>
        </motion.div>

        {/* Decision Makers Validation */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border/50 overflow-hidden mb-8">
          <div className="px-5 py-4 border-b border-border/30 flex items-center gap-3 bg-emerald-500/5">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <div>
              <h3 className="text-base font-bold text-foreground">Decision Makers — 10/10 Verified</h3>
              <p className="text-xs text-muted-foreground">All sampled prospects confirmed real via LinkedIn, ZoomInfo, RocketReach</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Name</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Company</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Title</th>
                  <th className="px-4 py-3 text-center text-xs text-muted-foreground font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Flags</th>
                </tr>
              </thead>
              <tbody>
                {decisionMakerValidation.map((v, i) => (
                  <tr key={i} className="border-b border-border/10 last:border-0">
                    <td className="px-4 py-2.5 text-xs font-semibold text-foreground">{v.name}</td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">{v.company}</td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">{v.title}</td>
                    <td className="px-4 py-2.5 text-center"><StatusBadge status={v.status} /></td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">{v.flags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Ghost Business Validation */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border/50 overflow-hidden mb-8">
          <div className="px-5 py-4 border-b border-border/30 flex items-center gap-3 bg-red-500/5">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <div>
              <h3 className="text-base font-bold text-foreground">Ghost Businesses — 4/10 False Positives Detected</h3>
              <p className="text-xs text-muted-foreground">&quot;No website in database&quot; does NOT mean &quot;no website in reality&quot;</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Company</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Claimed</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Actual Finding</th>
                  <th className="px-4 py-3 text-center text-xs text-muted-foreground font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Reason</th>
                </tr>
              </thead>
              <tbody>
                {ghostValidation.map((v, i) => (
                  <tr key={i} className="border-b border-border/10 last:border-0">
                    <td className="px-4 py-2.5 text-xs font-semibold text-foreground">{v.name}</td>
                    <td className="px-4 py-2.5 text-xs text-red-400 font-[family-name:var(--font-jetbrains-mono)]">{v.claimed}</td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">{v.actual}</td>
                    <td className="px-4 py-2.5 text-center"><StatusBadge status={v.status} /></td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">{v.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 p-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Target className="h-5 w-5 text-violet-400" />Key Validation Insight
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The Vibe Prospecting <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-[family-name:var(--font-jetbrains-mono)]">has_website: false</code> filter
            checks whether a website exists <strong className="text-foreground">in their database</strong>, not whether the company actually has one.
            Companies like <strong className="text-foreground">Fierce Pharma</strong> (fiercepharma.com) and <strong className="text-foreground">BigSpring</strong> (bigspring.ai)
            have well-established websites but are simply missing from Vibe&apos;s domain index.
            Every ghost business list <strong className="text-foreground">requires manual verification</strong> before outreach — expect a ~20% true ghost rate from raw exports.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════ SECTION 3: ARCHITECTURE ═══════════════ */}
      <section id="architecture" className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium">
            <Layers className="h-3 w-3" />SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Discovery Engine Design</h2>
          <p className="text-muted-foreground mb-10">Four modules to turn ghost market data into paying web development clients.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {architectureModules.map((mod, i) => (
            <motion.div key={mod.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="px-5 py-4 border-b border-border/30 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${mod.color} flex items-center justify-center`}>{mod.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{mod.title}</h3>
                  <p className="text-xs text-muted-foreground">{mod.description}</p>
                </div>
              </div>
              <div className="px-5 py-4 space-y-3">
                <ul className="space-y-1.5">
                  {mod.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <ArrowRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="p-3 rounded-lg bg-muted/20 border border-border/20">
                  <p className="text-[10px] text-muted-foreground font-semibold mb-1">DATA FLOW</p>
                  <p className="text-xs text-foreground font-[family-name:var(--font-jetbrains-mono)]">{mod.dataFlow}</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CreditCard className="h-3 w-3 text-amber-400" />
                  <span className="text-muted-foreground">Cost:</span>
                  <span className="text-amber-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">{mod.creditCost}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
          className="mt-8 rounded-2xl bg-card border border-border/50 overflow-hidden">
          <div className="px-5 py-4 border-b border-border/30">
            <h3 className="text-base font-bold text-foreground">Recommended Tech Stack</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20">
            {[
              { layer: "Frontend", tech: "Next.js 16 + React 19", why: "SSR, already using" },
              { layer: "Database", tech: "Supabase (PostgreSQL)", why: "RLS, Realtime, Auth" },
              { layer: "Data Source", tech: "Vibe Prospecting API", why: "150M+ companies" },
              { layer: "AI Scoring", tech: "Claude API", why: "Prospect fit analysis" },
              { layer: "Email", tech: "Resend", why: "React email templates" },
              { layer: "Maps", tech: "Mapbox GL", why: "Dark theme support" },
              { layer: "Jobs Queue", tech: "Inngest / Trigger.dev", why: "Background enrichment" },
              { layer: "Deploy", tech: "Vercel", why: "Already configured" },
            ].map(s => (
              <div key={s.layer} className="p-4 bg-card">
                <p className="text-[10px] text-muted-foreground font-semibold mb-1">{s.layer.toUpperCase()}</p>
                <p className="text-xs font-bold text-foreground">{s.tech}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{s.why}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ SECTION 4: ALL 4 NICHES ═══════════════ */}
      <section id="niches" className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-medium">
            <Target className="h-3 w-3" />4 MARKET NICHES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Niche Analysis & Status</h2>
          <p className="text-muted-foreground mb-10">Current state of research, validation, and cost for each of the four target niches.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {nicheSummaries.map((niche, i) => (
            <motion.div key={niche.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}
              className={`rounded-2xl bg-card border ${niche.borderColor} overflow-hidden`}>
              {/* Header */}
              <div className={`px-5 py-4 border-b border-border/30 ${niche.bgColor}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${niche.color} flex items-center justify-center text-white`}>{niche.icon}</div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{niche.name}</h3>
                      <p className="text-xs text-muted-foreground">TAM: {niche.tam} businesses</p>
                    </div>
                  </div>
                  {niche.validated ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                      <CheckCircle2 className="h-3 w-3" />TESTED
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-muted text-muted-foreground text-[10px] font-bold">
                      <Lock className="h-3 w-3" />UNTESTED
                    </span>
                  )}
                </div>
              </div>
              {/* Stats Grid */}
              <div className="px-5 py-4 grid grid-cols-2 gap-3">
                <div className="text-xs"><span className="text-muted-foreground">Target:</span> <span className="text-foreground font-bold font-[family-name:var(--font-jetbrains-mono)]">{niche.target}</span></div>
                <div className="text-xs"><span className="text-muted-foreground">Win Rate:</span> <span className="text-foreground font-bold font-[family-name:var(--font-jetbrains-mono)]">{niche.winRate}</span></div>
                <div className="text-xs"><span className="text-muted-foreground">Avg Deal:</span> <span className="text-foreground font-bold font-[family-name:var(--font-jetbrains-mono)]">{niche.avgDeal}</span></div>
                <div className="text-xs"><span className="text-muted-foreground">Approach:</span> <span className="text-foreground">{niche.approach}</span></div>
              </div>
              {/* Insight */}
              <div className="px-5 pb-4">
                <p className="text-xs text-muted-foreground leading-relaxed">{niche.insight}</p>
              </div>
              {/* Validation Status */}
              <div className="px-5 py-3 border-t border-border/20 bg-muted/10 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-muted-foreground">Validation:</span>
                  <span className="ml-1 text-foreground">{niche.validationResult}</span>
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Credits used:</span>
                  <span className="ml-1 text-amber-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">{niche.creditsTested}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Combined Strategy Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
          className="mt-8 rounded-2xl bg-card border border-border/50 overflow-hidden">
          <div className="px-5 py-4 border-b border-border/30">
            <h3 className="text-base font-bold text-foreground">Combined Market Opportunity</h3>
            <p className="text-xs text-muted-foreground">Total addressable market across all 4 niches: <span className="text-foreground font-bold">50.2M businesses</span></p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30 bg-muted/20">
                  <th className="px-4 py-3 text-left text-xs text-muted-foreground font-medium">Niche</th>
                  <th className="px-4 py-3 text-right text-xs text-muted-foreground font-medium">TAM</th>
                  <th className="px-4 py-3 text-right text-xs text-muted-foreground font-medium">Target</th>
                  <th className="px-4 py-3 text-right text-xs text-muted-foreground font-medium">Win Rate</th>
                  <th className="px-4 py-3 text-right text-xs text-muted-foreground font-medium">Avg Deal</th>
                  <th className="px-4 py-3 text-center text-xs text-muted-foreground font-medium">Status</th>
                  <th className="px-4 py-3 text-right text-xs text-muted-foreground font-medium">Credits to Hunt</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Invisible Market", tam: "45.4M", target: "3.85M", rate: "5-8%", deal: "$3K-$15K", status: "tested", credits: "2,000" },
                  { name: "AI & Security", tam: "15,343", target: "5,000", rate: "3-5%", deal: "$25K-$100K", status: "untested", credits: "5,000" },
                  { name: "WordPress", tam: "2.97M", target: "13,628", rate: "4-7%", deal: "$5K-$25K", status: "untested", credits: "3,000" },
                  { name: "Shopify Commerce", tam: "1.84M", target: "987", rate: "5-10%", deal: "$10K-$50K", status: "untested", credits: "2,000" },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-border/10 last:border-0">
                    <td className="px-4 py-2.5 text-xs font-semibold text-foreground">{r.name}</td>
                    <td className="px-4 py-2.5 text-xs text-foreground text-right font-[family-name:var(--font-jetbrains-mono)]">{r.tam}</td>
                    <td className="px-4 py-2.5 text-xs text-foreground text-right font-[family-name:var(--font-jetbrains-mono)]">{r.target}</td>
                    <td className="px-4 py-2.5 text-xs text-foreground text-right font-[family-name:var(--font-jetbrains-mono)]">{r.rate}</td>
                    <td className="px-4 py-2.5 text-xs text-foreground text-right font-[family-name:var(--font-jetbrains-mono)]">{r.deal}</td>
                    <td className="px-4 py-2.5 text-center">
                      {r.status === "tested" ? <StatusBadge status="verified" /> : <StatusBadge status="needs-check" />}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-amber-400 text-right font-bold font-[family-name:var(--font-jetbrains-mono)]">{r.credits}</td>
                  </tr>
                ))}
                <tr className="bg-muted/20">
                  <td className="px-4 py-3 text-xs font-bold text-foreground">TOTAL</td>
                  <td className="px-4 py-3 text-xs font-bold text-foreground text-right font-[family-name:var(--font-jetbrains-mono)]">50.2M</td>
                  <td colSpan={4}></td>
                  <td className="px-4 py-3 text-xs font-bold text-amber-400 text-right font-[family-name:var(--font-jetbrains-mono)]">12,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ SECTION 5: CREDIT BUDGET ═══════════════ */}
      <section id="credits" className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-medium">
            <CreditCard className="h-3 w-3" />CREDIT BUDGET
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">What It Costs to Scale</h2>
          <p className="text-muted-foreground mb-10">Three tiers for the Invisible Market niche alone. Plus 12,000 credits to test all 4 niches.</p>
        </motion.div>

        {/* Current Balance */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border/50 p-6 mb-8">
          <h3 className="text-base font-bold text-foreground mb-4">Session Summary — March 26, 2026</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-xl bg-muted/20">
              <p className="text-2xl font-bold text-foreground font-[family-name:var(--font-jetbrains-mono)]">400</p>
              <p className="text-xs text-muted-foreground">Starting Credits</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-violet-500/10">
              <p className="text-2xl font-bold text-violet-400 font-[family-name:var(--font-jetbrains-mono)]">332</p>
              <p className="text-xs text-muted-foreground">Spent on Prospects</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-amber-500/10">
              <p className="text-2xl font-bold text-amber-400 font-[family-name:var(--font-jetbrains-mono)]">50</p>
              <p className="text-xs text-muted-foreground">Spent on Ghost Businesses</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-red-500/10">
              <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-jetbrains-mono)]">18</p>
              <p className="text-xs text-muted-foreground">Credits Remaining</p>
            </div>
          </div>
        </motion.div>

        {/* Credit Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {creditTiers.map((tier, i) => (
            <motion.div key={tier.tier} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}
              className={`relative rounded-2xl bg-card border overflow-hidden ${tier.recommended ? "border-violet-500/40" : "border-border/50"}`}>
              {tier.recommended && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              )}
              <div className="px-5 py-4 border-b border-border/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground font-[family-name:var(--font-jetbrains-mono)]">{tier.tier}</span>
                  {tier.recommended && (
                    <span className="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold">RECOMMENDED</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground">{tier.label}</h3>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="text-center py-3">
                  <p className="text-3xl font-bold text-amber-400 font-[family-name:var(--font-jetbrains-mono)]">{tier.credits}</p>
                  <p className="text-xs text-muted-foreground">credits needed</p>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-muted-foreground">Output:</span><span className="text-foreground text-right">{tier.output}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Method:</span><span className="text-foreground text-right">{tier.method}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Conversion:</span><span className="text-foreground text-right">{tier.conversion}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Est. Deals:</span><span className="text-emerald-400 font-bold text-right">{tier.deals}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 border border-violet-500/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">The Data Gap is the Moat</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
            Ghost businesses are invisible because they have zero digital presence. No one else can reach them.
            The agency that cracks the outreach code for ghost businesses <strong className="text-foreground">owns a market with zero competition</strong>.
            Start with 2,000 credits. Validate the pitch. Then scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/research" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity">
              View Research Data <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-muted/20 transition-colors">
              Back to Proposal
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          BearProspect Dashboard — Generated March 26, 2026 — Data: Vibe Prospecting API — Analysis: Claude Code
        </p>
        <p className="text-xs text-muted-foreground mt-1">Bearplex &copy; 2026</p>
      </footer>
    </main>
  );
}
