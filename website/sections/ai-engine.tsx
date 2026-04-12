"use client"

import { useState } from "react"
import { Brain, ShieldCheck, MessageSquare, FileBarChart, RefreshCw, Check } from "lucide-react"

const features = [
  {
    id: "categorize",
    icon: Brain,
    label: "AI Categorization",
    title: "Categorizes transactions with 90%+ accuracy. Learns from every correction.",
    description: "Zenday reads vendor names, infers categories from transaction descriptions, applies your chart of accounts, and handles the long tail of ambiguous transactions. Every override trains the AI for next time.",
    bullets: [
      "Per-client AI brain — no cross-client data sharing",
      "Learns vendor patterns: DoorDash → Meals after 3 corrections",
      "Handles multi-currency, split transactions, and intercompany",
      "Confidence scoring on every categorization (you see the number)",
    ],
  },
  {
    id: "confidence",
    icon: ShieldCheck,
    label: "Confidence Scoring",
    title: "The AI knows what it doesn't know. That's how you trust it.",
    description: "Every transaction gets a confidence score from 0 to 100. Above 95% = auto-posted (if you enable it). Below 95% = goes to your review queue. You decide the threshold. You control the autonomy.",
    bullets: [
      "Adjustable confidence threshold per client",
      "Review queue shows AI reasoning for every flagged item",
      "One-click approve, override, or ask-client",
      "Override rate drops from ~10% in month 1 to <2% by month 3",
    ],
  },
  {
    id: "chase",
    icon: MessageSquare,
    label: "Client Chase",
    title: "Missing receipt? Zenday already asked for it.",
    description: "When a document is missing or a question needs answering, the AI drafts a contextual chase message — not a template. You approve with one click. Escalating cadence: day 3, day 7, day 14.",
    bullets: [
      "Context-aware drafts: 'Hi Sarah, missing receipt for $2,340 at Office Depot'",
      "One-click approve via email or client portal",
      "Automatic escalation cadence",
      "Tracks response status and updates the roster",
    ],
  },
  {
    id: "close",
    icon: FileBarChart,
    label: "Close Deliverable",
    title: "Month-end package generated on day 1. Not day 15.",
    description: "Because books are continuously closed, Zenday generates the monthly financial package — P&L, balance sheet, cash flow — on the first of the next month. You review, add notes, and send to the client.",
    bullets: [
      "P&L, balance sheet, and cash flow auto-generated",
      "Variance analysis: this month vs. last, flagged changes",
      "One-click send to client via portal or email",
      "Branded deliverable with your firm's logo",
    ],
  },
  {
    id: "reconcile",
    icon: RefreshCw,
    label: "Reconciliation",
    title: "Reconciled to the penny. Every day.",
    description: "Zenday matches categorized transactions to bank balances via Plaid. Discrepancies are flagged immediately — not discovered during month-end crunch. Continuous reconciliation means the books are always audit-ready.",
    bullets: [
      "Daily reconciliation against real bank balances",
      "Discrepancies flagged in real time, not at month-end",
      "Auto-match for clear items, flag for ambiguous ones",
      "Reconciliation status visible on the client roster",
    ],
  },
]

export function AIEngine() {
  const [active, setActive] = useState("categorize")
  const activeFeature = features.find((f) => f.id === active)!

  return (
    <section id="ai-engine" className="py-14 px-5 bg-[#5B5FF6] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-[38px] font-bold tracking-tight leading-tight mb-2">
            The AI Close Engine.
          </h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto">
            Not AI features bolted onto practice management. A purpose-built AI that does the bookkeeping work and asks you to approve.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                active === f.id
                  ? "bg-white text-[#5B5FF6] shadow-lg"
                  : "bg-white/15 text-white/80 hover:bg-white/25 border border-white/20"
              }`}
            >
              <f.icon className="w-3.5 h-3.5" />
              {f.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">{activeFeature.title}</h3>
            <p className="text-white/60 text-[13px] leading-relaxed mb-5">{activeFeature.description}</p>
            <div className="space-y-2">
              {activeFeature.bullets.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" />
                  <span className="text-[13px] text-white/80">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review queue preview */}
          <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm p-5">
            <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Live preview — Review queue</div>
            {[
              { vendor: "Office Depot", amount: "$2,340.00", category: "Office Supplies", confidence: 97, status: "auto" },
              { vendor: "DoorDash", amount: "$87.50", category: "Meals & Entertainment", confidence: 92, status: "auto" },
              { vendor: "Unknown Transfer", amount: "$15,000.00", category: "—", confidence: 34, status: "review" },
            ].map((txn) => (
              <div key={txn.vendor} className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] text-white/90 font-medium">{txn.vendor}</span>
                    <span className="text-[11px] text-white/40">{txn.amount}</span>
                  </div>
                  <span className="text-[11px] text-white/40">{txn.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-medium ${txn.confidence >= 90 ? "text-emerald-300" : "text-rose-300"}`}>
                    {txn.confidence}%
                  </span>
                  {txn.status === "auto" ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Auto</span>
                  ) : (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300">Review</span>
                  )}
                </div>
              </div>
            ))}
            <p className="text-[10px] text-white/25 mt-3">2 transactions auto-posted. 1 needs your 10-second review.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
