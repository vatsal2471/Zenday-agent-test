"use client"

import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

const rosterData = [
  { name: "Acme Design Co", status: "current", asOf: "Yesterday", needs: "—", txns: 34 },
  { name: "Summit Group LLC", status: "current", asOf: "Yesterday", needs: "—", txns: 21 },
  { name: "Nova Digital Inc", status: "waiting", asOf: "3 days ago", needs: "1 question sent", txns: 45 },
  { name: "Brightpath Consulting", status: "review", asOf: "2 days ago", needs: "3 exceptions", txns: 28 },
  { name: "Lakeside Properties", status: "current", asOf: "Yesterday", needs: "—", txns: 19 },
  { name: "Ember Creative Studio", status: "current", asOf: "Yesterday", needs: "—", txns: 52 },
]

const statusConfig = {
  current: { icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50", label: "Current" },
  waiting: { icon: Clock, color: "text-amber-500", bg: "bg-amber-50", label: "Waiting" },
  review: { icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-50", label: "Review" },
}

export function Hero() {
  return (
    <section className="pt-24 pb-14 px-5 bg-gradient-to-b from-[#F0EEFF] via-[#F7F5FF] to-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Pain-first badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200 shadow-sm mb-6">
          <span className="text-xs font-semibold text-rose-600">87% of accountants work weekends during close</span>
        </div>

        {/* Outcome headline */}
        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-4 text-balance text-gray-900">
          Your clients{"'"} books.{" "}
          <span className="bg-gradient-to-r from-[#5B5FF6] to-[#8B5CF6] bg-clip-text text-transparent">
            Current every morning.
          </span>
        </h1>

        <p className="text-sm md:text-[15px] text-gray-500 max-w-xl mx-auto mb-7 leading-relaxed">
          Zenday{"'"}s AI categorizes transactions, chases missing documents, and reconciles accounts — overnight.
          You log in, review what it did in 5 minutes, and move on. Month-end becomes a non-event.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <a href="#pricing" className="px-6 py-2.5 rounded-full bg-[#5B5FF6] hover:bg-[#4A4EE5] text-white text-sm font-semibold transition-colors shadow-md shadow-[#5B5FF6]/20">
            Try your first client free
          </a>
          <a href="#demo" className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 bg-white hover:border-[#5B5FF6]/30 text-sm font-medium text-gray-600 transition-colors shadow-sm">
            Watch 5-min demo
          </a>
        </div>
        <p className="text-xs text-gray-400">$15/client/month after trial. No credit card required.</p>
      </div>

      {/* Roster View — THE PRODUCT */}
      <div className="max-w-4xl mx-auto mt-10">
        <div className="rounded-xl overflow-hidden border border-gray-200/80 shadow-2xl shadow-[#5B5FF6]/10 bg-white">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 bg-gray-50/80">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-8 py-0.5 rounded bg-gray-100 text-[10px] text-gray-400">app.getzenday.com</div>
            </div>
          </div>

          {/* Roster header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">Good morning, Vatsal</p>
              <p className="text-xs text-gray-400">Tuesday, April 12 — 6 clients managed by Zenday AI</p>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> 4 current</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> 1 waiting</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" /> 1 needs review</span>
            </div>
          </div>

          {/* Summary bar */}
          <div className="px-6 py-3 bg-[#5B5FF6]/[0.03] border-b border-[#5B5FF6]/10">
            <p className="text-xs text-[#5B5FF6] font-medium">
              Last night: 199 transactions coded across 6 clients. 3 need your review. 1 client question sent automatically.
            </p>
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1.5fr_0.5fr] gap-4 px-6 py-2 text-[10px] font-medium text-gray-400 uppercase tracking-wider border-b border-gray-50">
            <span>Client</span>
            <span>Status</span>
            <span>Books as of</span>
            <span>Needs you</span>
            <span className="text-right">Txns</span>
          </div>

          {/* Roster rows */}
          {rosterData.map((client) => {
            const s = statusConfig[client.status as keyof typeof statusConfig]
            const Icon = s.icon
            return (
              <div key={client.name} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr_0.5fr] gap-2 md:gap-4 px-6 py-3 border-b border-gray-50 hover:bg-gray-50/50 transition-colors items-center">
                <span className="text-sm font-medium text-gray-900">{client.name}</span>
                <div className="flex items-center gap-1.5">
                  <div className={`w-5 h-5 rounded-md ${s.bg} flex items-center justify-center`}>
                    <Icon className={`w-3 h-3 ${s.color}`} />
                  </div>
                  <span className={`text-xs font-medium ${s.color}`}>{s.label}</span>
                </div>
                <span className="text-xs text-gray-500">{client.asOf}</span>
                <span className="text-xs text-gray-500">{client.needs}</span>
                <span className="text-xs text-gray-400 md:text-right">{client.txns}</span>
              </div>
            )
          })}

          {/* Bottom summary */}
          <div className="px-6 py-3 bg-gray-50/50 text-xs text-gray-400">
            Your daily review: ~5 minutes. Weekend work this month: 0 hours.
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-3">This is your morning on Zenday. Every morning.</p>
      </div>
    </section>
  )
}
