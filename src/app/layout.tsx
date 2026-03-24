import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BearProspect — Autonomous B2B Sales Engine | Bearplex",
  description:
    "A fully autonomous system that discovers, researches, engages, and books meetings with high-value enterprise prospects. Built by Bearplex.",
  openGraph: {
    title: "BearProspect — Autonomous B2B Sales Engine",
    description:
      "Built by Bearplex. Powered by AI. Fully Autonomous.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950">{children}</body>
    </html>
  );
}
