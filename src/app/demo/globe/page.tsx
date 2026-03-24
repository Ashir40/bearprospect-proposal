"use client"

import { Globe } from "@/components/ui/cobe-globe"

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
]

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
    label: "Lahore → Dubai",
  },
]

export default function GlobeDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#0a0f1e] p-8 overflow-hidden">
      <p className="text-teal-400 text-xs font-mono uppercase tracking-widest mb-2">Component Demo</p>
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-2 tracking-tight">Interactive Globe</h1>
      <p className="text-slate-400 text-sm mb-8">Prospect reach across 150M+ companies worldwide</p>
      <div className="w-full max-w-lg">
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
        />
      </div>
      <a href="/" className="mt-8 text-teal-400/60 text-sm hover:text-teal-300 transition-colors">← Back to proposal</a>
    </div>
  )
}
