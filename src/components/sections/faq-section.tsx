"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Why does BearProspect take ~20 minutes to research a single prospect?",
    answer:
      "Because shallow research gets you ignored. In those 20 minutes, BearProspect's AI agents crawl the prospect's website, analyze their tech stack, scan their LinkedIn hiring activity, review recent funding rounds, read their job postings to identify pain points, map decision-makers across the org, score them against our ICP, and generate a hyper-personalized outreach angle. A human doing this manually takes 30-45 minutes and still misses signals. The AI does it in 20 minutes with 100% consistency across every single prospect — no shortcuts, no fatigue, no missed details. Multiply that by 50-100 prospects per week and you're looking at 16-33 hours of deep research running autonomously while your BD team focuses on closing.",
  },
  {
    question: "Bearplex has 65+ engineers — why isn't prospecting happening?",
    answer:
      "Simple — there's no system for it. Bearplex has never had an outbound or inbound pipeline outside of Upwork. Ashir and Awais handle BD, but their work has been Upwork-only because that's the only channel that exists today. It's not a capability gap — both have the experience and potential to close enterprise deals outside the platform. What's been missing is the infrastructure: no lead sourcing, no automated outreach, no follow-up sequences, no way to systematically find and engage prospects beyond Upwork. Now is the right time to change that. BearProspect builds that missing infrastructure — a proper outbound and inbound system that discovers qualified leads, researches them, and runs personalized outreach automatically. Ashir and Awais plug into the pipeline where they add the most value: qualifying warm leads, running discovery calls, and closing. The system does the heavy lifting they've never had tooling for; they bring the strategy and relationships.",
  },
  {
    question: "How is this different from tools like Apollo, Instantly, or Lemlist?",
    answer:
      "Those tools are email blasters with a database. They give you a list of contacts and let you send templates with {firstName} merge tags. BearProspect is fundamentally different — it's an autonomous agent system. It doesn't just send emails; it discovers prospects using real-time signals (hiring patterns, funding events, tech stack changes), conducts deep research on each one, generates genuinely personalized outreach (not template fill-ins), handles replies intelligently, manages objections with scripted responses, and books meetings autonomously. Apollo gives you a gun. BearProspect gives you a sniper who finds the target, takes the shot, and handles the aftermath.",
  },
  {
    question: "What if the AI sends something embarrassing or off-brand?",
    answer:
      "Every message goes through a 22-point quality audit before sending. The system has anti-AI voice rules (no 'leveraging', no 'I'm excited to', no generic ChatGPT fingerprints), enforces Bearplex's brand voice (technical founder energy, peer-to-peer tone), and checks for factual accuracy against the prospect's actual data. You can also set approval workflows — review the first 50 messages manually, then let it run autonomously once you're confident. The system learns from your corrections. We're building this for Bearplex first, so our reputation is on the line too.",
  },
  {
    question: "What's the realistic timeline to see results?",
    answer:
      "Phase 1 goes live in 3 weeks with the first autonomous outreach campaign hitting 50 prospects/week. By week 5, the full pipeline is running — discovery to booked meetings, fully autonomous. By week 8, you have multi-channel sequences (email + LinkedIn), A/B testing, and a self-improving intelligence loop. Realistically, expect the first booked meetings from BearProspect within 4-5 weeks of starting the build. The system compounds — every interaction teaches it what converts for Bearplex's specific services and ICP.",
  },
  {
    question: "Can this become a product we sell to other companies?",
    answer:
      "That's the strategic play. BearProspect starts as Bearplex's internal sales engine, but it's architected from day one as a multi-tenant SaaS platform. Once it's proven (3-6 months of internal usage data), you can white-label it or sell it directly to other B2B tech companies. The market for AI-powered sales automation is growing 40%+ YoY. You'd be selling a system that you use every day, backed by real results data. That's the strongest possible sales pitch — 'we use this ourselves, here are our numbers.'",
  },
  {
    question: "What data sources power the prospect intelligence?",
    answer:
      "The system integrates with Vibe Prospecting for access to 150M+ company records and 800M+ professional profiles. But raw data isn't enough — BearProspect layers on real-time signal detection: website technology analysis (BuiltWith-style), job posting monitoring (what roles are they hiring for?), funding round tracking (who just raised Series B+?), LinkedIn activity scanning, and news/PR monitoring. These signals combined tell you not just WHO to target, but WHEN to reach out — the moment a company's pain becomes acute enough to buy.",
  },
  {
    question: "How does the lead scoring actually work?",
    answer:
      "Every prospect gets a 0-100 score based on weighted signals: ICP fit (industry, size, funding stage) = 30%, pain signal strength (hiring for roles we fill, tech debt indicators, scaling challenges) = 25%, engagement readiness (recent activity, responsiveness indicators) = 20%, deal potential (budget signals, contract size indicators) = 15%, and timing (how recently signals fired) = 10%. A prospect scoring 80+ means: right industry, clear pain point, decision-maker identified, and active signals in the last 30 days. Your BD team only sees high-confidence leads.",
  },
  {
    question: "What happens when a prospect replies with an objection?",
    answer:
      "The Reply Classifier categorizes every response into: Interested (route to meeting booker), Objection (route to objection handler), Not Now (add to nurture sequence), or Unsubscribe (remove immediately). For objections, we've pre-scripted handlers for the three most common ones: 'We're building in-house' (response: offer to augment their team, not replace), 'We tried AI and it didn't work' (response: specific case study of Bearplex fixing failed AI implementations), 'Too expensive' (response: reframe as cost of inaction with ROI math). The AI adapts the script to each specific conversation context.",
  },
  {
    question: "What makes BearProspect a competitive moat for Bearplex?",
    answer:
      "Every outreach cycle feeds data back into the system — which industries respond fastest, what messaging converts, which pain points resonate, what objections come up. After 3-6 months, Bearplex owns a proprietary sales intelligence layer that no competitor can replicate. A sales agency walks away with the relationship data when the contract ends. A tool like Apollo gives the same data to everyone. BearProspect is a compounding asset — it gets smarter about selling Bearplex's specific services with every single interaction. Combine that with the option to productize it into a standalone SaaS and you're not just solving your own pipeline problem, you're building a new revenue line.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-xs font-mono text-teal-300 uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about BearProspect — the what, the why, and the how.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <div
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-teal-500/30 bg-teal-500/5"
                    : "border-slate-800/60 bg-slate-900/30 hover:border-slate-700/60"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-start gap-4 p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="text-teal-500/60 font-mono text-xs mt-1.5 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-white font-medium text-sm md:text-base leading-relaxed">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 mt-0.5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-teal-400" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-12 md:pl-14">
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
