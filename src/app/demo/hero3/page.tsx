"use client"

import { Header } from "@/components/ui/header-3"
import { HeroSection3 } from "@/components/ui/hero-3"

export default function Hero3Demo() {
  return (
    <div className="flex w-full flex-col bg-background text-foreground min-h-screen">
      <Header />
      <main className="grow">
        <HeroSection3 />
      </main>
      <div className="fixed bottom-6 left-6 z-[200]">
        <a href="/" className="text-slate-400 text-sm hover:text-teal-300 transition-colors bg-[#0a0f1e]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-500/20">← Back to proposal</a>
      </div>
    </div>
  )
}
