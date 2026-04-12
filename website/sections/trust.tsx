import { ShieldCheck, Eye, RotateCcw } from "lucide-react"

export function Trust() {
  return (
    <section className="py-14 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Founder story */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-[#5B5FF6]/10 flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-[#5B5FF6]">V</span>
          </div>
          <h2 className="text-2xl md:text-[32px] font-bold tracking-tight leading-tight mb-4 text-gray-900">
            Built by a firm owner who was tired of the same grind.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            {'"'}I run my own CPA firm. I{"'"}ve spent 15 years doing bookkeeping, close, and advisory.
            I built Zenday because I was tired of working weekends on month-end close,
            tired of training offshore teams that quit, and tired of tools that promise AI
            but deliver spreadsheets. Zenday runs my own firm{"'"}s books. If it breaks, I{"'"}m the first to know.{'"'}
          </p>
          <p className="text-xs text-gray-400">— Vatsal, Founder & CPA Firm Owner</p>
        </div>

        {/* Post-Botkeeper trust */}
        <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-8 mb-8">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
            After Bench and Botkeeper, you{"'"}re right to be skeptical.
          </h3>
          <p className="text-sm text-gray-500 text-center max-w-xl mx-auto mb-6">
            $300M+ in venture capital burned on AI bookkeeping companies that used humans behind the curtain.
            Zenday is different — and we can prove it, because every AI action is visible.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="text-center p-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                <Eye className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-[13px] font-bold text-gray-900 mb-1">Every action visible</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                See exactly what the AI did, why it chose that category, and what confidence score it assigned. No black box.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-3">
                <RotateCcw className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-[13px] font-bold text-gray-900 mb-1">Every action reversible</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                One-click undo on any AI categorization. Full audit trail. Nothing is permanent until you say so.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5 text-violet-600" />
              </div>
              <h4 className="text-[13px] font-bold text-gray-900 mb-1">No humans behind the curtain</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Pure AI. No offshore team pretending to be a bot. When Zenday categorizes a transaction, it{"'"}s the AI — not a person in Manila.
              </p>
            </div>
          </div>
        </div>

        {/* Parallel run offer */}
        <div className="rounded-xl border-2 border-[#5B5FF6]/20 bg-[#5B5FF6]/[0.03] p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Try it on one client. Keep everything else.
          </h3>
          <p className="text-sm text-gray-500 max-w-lg mx-auto mb-4">
            You don{"'"}t have to switch from Karbon, Double, or your offshore team. Pick one client.
            Connect their QBO. Zenday runs alongside your existing setup for 30 days.
            Compare the results yourself.
          </p>
          <a href="#pricing" className="inline-flex px-6 py-2.5 rounded-full bg-[#5B5FF6] hover:bg-[#4A4EE5] text-white text-sm font-semibold transition-colors shadow-md shadow-[#5B5FF6]/20">
            Start with one client — free
          </a>
        </div>
      </div>
    </section>
  )
}
