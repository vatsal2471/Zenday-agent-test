import { Play } from "lucide-react"

export function Demo() {
  return (
    <section id="demo" className="py-14 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5B5FF6]/10 border border-[#5B5FF6]/20 mb-3">
            <Play className="w-3 h-3 text-[#5B5FF6]" />
            <span className="text-[11px] font-semibold text-[#5B5FF6]">5-Minute Demo</span>
          </div>
          <h2 className="text-2xl md:text-[38px] font-bold tracking-tight text-gray-900 text-balance">
            See what your morning looks like on Zenday.
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-lg mx-auto">
            A real walkthrough of bank feed automation, AI categorization, close management, and financial reporting.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl shadow-[#5B5FF6]/5">
          <iframe
            src="https://clueso.site/embed/beho7uz3vte8xsno?autoplay=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full aspect-video border-0"
            title="zenday Product Demo"
          />
        </div>

        {/* Timestamps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {[
            { time: "0:00", label: "Bank Feed Setup" },
            { time: "1:30", label: "AI Categorization" },
            { time: "3:00", label: "Close Dashboard" },
            { time: "4:00", label: "Financial Reports" },
          ].map((ch) => (
            <div key={ch.time} className="text-center p-3 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-[11px] font-bold text-[#5B5FF6]">{ch.time}</span>
              <p className="text-[11px] text-gray-500 mt-0.5">{ch.label}</p>
            </div>
          ))}
        </div>

        {/* Post-video CTA */}
        <div className="text-center mt-8">
          <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#5B5FF6] hover:bg-[#4A4EE5] text-white text-sm font-semibold transition-colors shadow-md shadow-[#5B5FF6]/20">
            Ready? Try your first client free
          </a>
        </div>
      </div>
    </section>
  )
}
