export function FinalCTA() {
  return (
    <section className="py-14 px-5 bg-[#5B5FF6] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-[42px] font-bold tracking-tight leading-tight mb-3 text-balance">
          What if you never worked a weekend on close again?
        </h2>
        <p className="text-white/60 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
          Connect one client. See your books current tomorrow morning.
          Compare to your existing process. Decide for yourself.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a href="#pricing" className="px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#5B5FF6] text-sm font-bold transition-colors shadow-lg">
            Try Your First Client Free
          </a>
          <a href="#demo" className="px-6 py-2.5 rounded-full border border-white/30 hover:border-white/50 text-sm font-medium text-white/80 hover:text-white transition-colors">
            Watch Demo
          </a>
        </div>
        <p className="text-white/30 text-xs mt-4">$15/client/month after trial. No credit card. Cancel anytime.</p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-6 px-5 border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#5B5FF6] flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">Z</span>
          </div>
          <span className="text-xs font-bold text-gray-900">zenday</span>
          <span className="text-[10px] text-gray-400 ml-2">AI-powered continuous close for accounting firms</span>
        </div>
        <div className="flex items-center gap-6 text-[10px] text-gray-400">
          <a href="#" className="hover:text-gray-600">Privacy</a>
          <a href="#" className="hover:text-gray-600">Terms</a>
          <a href="#" className="hover:text-gray-600">Security</a>
          <span>2026 Zenday. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
