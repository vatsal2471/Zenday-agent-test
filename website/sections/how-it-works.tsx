import { Link2, Moon, Sun, Calendar } from "lucide-react"

const steps = [
  {
    num: "01",
    icon: Link2,
    title: "Connect one client's QBO",
    time: "2 minutes",
    description: "Pick your messiest client. The one that stresses you out. Connect their QuickBooks via Plaid. Zenday pulls their chart of accounts and 3 months of transaction history.",
    detail: "Zenday builds a vendor dictionary, learns categorization patterns, and creates an AI brain specific to this client. No two clients share data.",
  },
  {
    num: "02",
    icon: Moon,
    title: "Zenday works overnight",
    time: "While you sleep",
    description: "New bank transactions arrive via Plaid. Zenday categorizes them, matches receipts, flags anomalies, and drafts chase messages for missing documents — all before your morning coffee.",
    detail: "Every categorization gets a confidence score. High confidence (95%+) = auto-posted. Low confidence = flagged for your review. The AI knows what it doesn't know.",
  },
  {
    num: "03",
    icon: Sun,
    title: "You review in 5 minutes",
    time: "Every morning",
    description: "Open Zenday. See the roster. 4 clients green (current). 1 yellow (waiting on client response). 1 red (3 exceptions need your judgment). Handle the red items. Done.",
    detail: "One-click approve. One-click override. One-click 'ask client.' The AI learns from every correction and gets better next time.",
  },
  {
    num: "04",
    icon: Calendar,
    title: "Month-end is a non-event",
    time: "Day 1 of next month",
    description: "The books were closed every day this month. On the 1st, Zenday generates the financial package — P&L, balance sheet, cash flow. You review and send to the client. No crunch. No weekend.",
    detail: "Your clients think you hired 10 new staff. You didn't. You connected Zenday.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 px-5 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[38px] font-bold tracking-tight leading-tight mb-3 text-gray-900 text-balance">
            How it actually works.
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Not a feature tour. This is what your first 30 days look like.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.num} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <div className="flex items-start gap-5">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#5B5FF6]/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#5B5FF6]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-[#5B5FF6] tracking-widest uppercase">{step.num}</span>
                    <span className="text-[10px] text-gray-400 tracking-wider uppercase">{step.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-3">{step.description}</p>
                  <p className="text-[12px] text-gray-400 leading-relaxed italic">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
