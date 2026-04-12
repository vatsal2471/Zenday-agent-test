"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How is Zenday different from Keeper/Double, Client Hub, or Karbon?",
    a: "Those are tools where your team does the work. Zenday is an AI that does the work and asks your team to approve. You don't use Zenday — you oversee it, the same way you'd oversee a junior accountant. The difference: this junior works 24/7, never quits, and gets better every month.",
  },
  {
    q: "Is this actually AI or are there humans behind the curtain?",
    a: "Pure AI. No offshore team pretending to be a bot. When Zenday categorizes a transaction, it's the AI — powered by Claude, the same technology used by major enterprises. Every action is logged with a confidence score and full reasoning. You can verify any decision the AI made. We built Zenday specifically because we were tired of companies like Botkeeper and Bench disguising human labor as automation.",
  },
  {
    q: "What happens when the AI gets something wrong?",
    a: "Every categorization has a confidence score. Low-confidence items go to your review queue — they're never auto-posted without your approval. When you override the AI, it learns. DoorDash miscategorized once? You correct it. It never makes the same mistake again. Override rates typically drop from ~10% in month 1 to under 2% by month 3.",
  },
  {
    q: "Do I have to switch from Karbon or Double?",
    a: "No. Zenday runs alongside your existing tools. Keep Karbon for task management. Keep Double for whatever you use it for. Keep Gmail. Zenday only needs a connection to your client's QuickBooks or Xero. It doesn't replace your practice management — it replaces the manual bookkeeping work.",
  },
  {
    q: "What integrations does Zenday support?",
    a: "QuickBooks Online and Xero for the ledger. Plaid for direct bank feeds (faster than QBO's built-in bank feed). Email integration for client communication. More integrations are coming based on firm requests.",
  },
  {
    q: "How does per-client pricing work?",
    a: "$15 per client per month. You only pay for clients actively managed by Zenday. Add or remove clients anytime. Your first client is free for 30 days — no credit card required. A firm with 30 clients pays $450/month, which typically replaces $3,000+ in offshore costs plus weekend work.",
  },
  {
    q: "Is my clients' data safe?",
    a: "Yes. Enterprise-grade encryption in transit and at rest. Each client gets an isolated AI brain — no data is shared across clients. Full audit trail on every action. SOC 2 compliance in progress. Your clients' financial data is treated with the same care you'd expect from your own firm.",
  },
  {
    q: "How long does it take to set up?",
    a: "About 2 minutes per client. Connect QuickBooks via OAuth, select the client, and Zenday starts working. It pulls 3 months of transaction history, builds vendor rules, and begins processing new transactions overnight. By tomorrow morning, you'll see your first AI-categorized review queue.",
  },
  {
    q: "What if Zenday shuts down like Bench or Botkeeper?",
    a: "Your data lives in your QuickBooks/Xero — not in Zenday. We categorize and post transactions to YOUR ledger. If Zenday disappeared tomorrow, your books are intact in QBO/Xero exactly as they were. Nothing is locked in our platform. Additionally, Zenday is built by a firm owner who uses it daily for their own firm — this isn't a VC-funded experiment, it's a tool the founder depends on.",
  },
]

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-14 px-5 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-[38px] font-bold tracking-tight text-center mb-8 text-gray-900 text-balance">
          Questions firm owners actually ask.
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-xl bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-left"
              >
                <span className="text-[13px] font-medium text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-4">
                  <p className="text-[13px] text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
