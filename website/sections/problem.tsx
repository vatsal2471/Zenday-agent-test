import { Clock, UserX, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: Clock,
    color: "text-rose-500",
    bg: "bg-rose-50",
    title: "You work weekends during close.",
    description: "87% of accountants work overtime every month-end. The crunch never ends because the process is fundamentally batch-based. You're doing in 5 days what should happen continuously.",
  },
  {
    icon: UserX,
    color: "text-amber-500",
    bg: "bg-amber-50",
    title: "You can't hire. Nobody's applying.",
    description: "300,000+ accountants quit since 2020. CPA candidates down 32%. Average time-to-fill: 73 days. Your offshore team just turned over — again. You're training a replacement for the third time.",
  },
  {
    icon: AlertTriangle,
    color: "text-violet-500",
    bg: "bg-violet-50",
    title: "AI bookkeeping keeps failing.",
    description: "ScaleFactor, Bench, Botkeeper — $300M+ in venture capital burned. They used humans behind the curtain and called it AI. You're right to be skeptical. But the technology has changed. Claude-class AI is genuinely different.",
  },
]

export function Problem() {
  return (
    <section className="py-14 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[38px] font-bold tracking-tight leading-tight mb-3 text-gray-900 text-balance">
            You already know the problem.
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            The accounting talent crisis is real. The month-end grind is unsustainable. And the last generation of AI tools let you down.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="p-6 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className={`w-10 h-10 rounded-lg ${p.bg} flex items-center justify-center mb-4`}>
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
