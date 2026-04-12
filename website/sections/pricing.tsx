import { Check, ArrowRight } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="py-14 px-5 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[38px] font-bold tracking-tight mb-3 text-gray-900">
            $15 per client per month.
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            Your first client is free for 30 days. No credit card required. That{"'"}s $15 to never work a weekend on that client{"'"}s books again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* What you get */}
          <div className="p-6 rounded-2xl border-2 border-[#5B5FF6] bg-white shadow-lg shadow-[#5B5FF6]/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-900">Zenday Continuous Close</h3>
              <div>
                <span className="text-3xl font-bold text-gray-900">$15</span>
                <span className="text-sm text-gray-400">/client/mo</span>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mb-5">Everything your firm needs to keep one client{"'"}s books continuously closed.</p>
            <a href="#" className="block w-full text-center py-2.5 rounded-full bg-[#5B5FF6] hover:bg-[#4A4EE5] text-white text-[13px] font-medium transition-all mb-5">
              Start Free — First Client on Us
            </a>
            <div className="space-y-2.5">
              {[
                "AI transaction categorization with confidence scoring",
                "Per-client AI brain that learns from your corrections",
                "Automated client chase for missing documents",
                "Daily bank reconciliation via Plaid",
                "Multi-client roster dashboard",
                "Monthly financial package generation (P&L, BS, CF)",
                "Variance analysis and anomaly detection",
                "Full audit trail — every AI action logged",
                "QuickBooks Online + Xero integration",
                "Unlimited team members",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5B5FF6] mt-0.5 shrink-0" />
                  <span className="text-[12px] text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost comparison */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h3 className="text-sm font-bold text-gray-900 mb-4">What you pay now vs. Zenday</h3>
            <p className="text-[11px] text-gray-400 mb-5">For a firm with 30 bookkeeping clients:</p>

            {/* Current stack */}
            <div className="mb-6">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Your current monthly cost</div>
              <div className="space-y-2">
                {[
                  { item: "Close management tool (Double/Keeper)", cost: "$300" },
                  { item: "Offshore bookkeeper #1", cost: "$1,500" },
                  { item: "Offshore bookkeeper #2", cost: "$1,500" },
                  { item: "Weekend hours (your time, unpaid)", cost: "20+ hrs" },
                ].map((row) => (
                  <div key={row.item} className="flex items-center justify-between py-1">
                    <span className="text-[12px] text-gray-500">{row.item}</span>
                    <span className="text-[12px] font-medium text-gray-700">{row.cost}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-[12px] font-bold text-gray-900">Total</span>
                  <span className="text-[12px] font-bold text-rose-600">$3,300/mo + weekends</span>
                </div>
              </div>
            </div>

            {/* Zenday */}
            <div>
              <div className="text-[10px] font-bold text-[#5B5FF6] uppercase tracking-wider mb-3">With Zenday</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-1">
                  <span className="text-[12px] text-gray-500">Zenday (30 clients x $15)</span>
                  <span className="text-[12px] font-medium text-gray-700">$450</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[12px] text-gray-500">Offshore team</span>
                  <span className="text-[12px] font-medium text-gray-400 line-through">$3,000</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[12px] text-gray-500">Weekend hours</span>
                  <span className="text-[12px] font-medium text-emerald-600">0 hours</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-[12px] font-bold text-gray-900">Total</span>
                  <span className="text-[12px] font-bold text-emerald-600">$450/mo + zero weekends</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
              <p className="text-[12px] text-emerald-700 font-medium text-center">
                Save $2,850/month. Eliminate weekend work entirely.
              </p>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
          {[
            { title: "No Credit Card Required", desc: "Start your free trial with no payment details." },
            { title: "Cancel Anytime", desc: "No contracts. Remove a client whenever you want." },
            { title: "Keep Your Existing Tools", desc: "Zenday runs alongside Karbon, Double, and Gmail." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h4 className="text-[11px] font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
