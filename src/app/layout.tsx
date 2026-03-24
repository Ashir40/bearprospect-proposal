import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0f1e]">{children}</body>
    </html>
  );
}
