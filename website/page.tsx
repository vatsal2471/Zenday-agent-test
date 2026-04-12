// Zenday Website — Drop-in replacement for app/website-bright/page.tsx
// Copy this file to app/website-bright/page.tsx (or any route)
// Copy the sections/ folder to the same directory
//
// Built from: STRATEGY.md, RESEARCH.md, CUSTOMER-RESEARCH.md, AUDIT.md
// Every section addresses specific findings from competitive research
// and firm-owner buying behavior analysis.

import { Nav } from "./sections/nav"
import { Hero } from "./sections/hero"
import { Problem } from "./sections/problem"
import { HowItWorks } from "./sections/how-it-works"
import { AIEngine } from "./sections/ai-engine"
import { Trust } from "./sections/trust"
import { Pricing } from "./sections/pricing"
import { Demo } from "./sections/demo"
import { FAQ } from "./sections/faq"
import { FinalCTA, Footer } from "./sections/final-cta"

export default function ZendayWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* 1. NAV — Features/Pricing/FAQ + "Try Your First Client Free" CTA */}
      <Nav />

      {/* 2. HERO — Outcome headline + roster screenshot + $15/client */}
      {/* Replaces: "The first unified workspace for accounting teams" */}
      {/* Now: "Your clients' books. Current every morning." */}
      <Hero />

      {/* 3. PROBLEM — Specific firm owner pain, not abstract benefits */}
      {/* Weekend work + can't hire + AI graveyard */}
      <Problem />

      {/* 4. HOW IT WORKS — 4-step story of first 30 days */}
      {/* Connect → AI works overnight → 5-min review → month-end non-event */}
      <HowItWorks />

      {/* 5. AI ENGINE — The differentiator. Not practice management features. */}
      {/* Categorization, confidence scoring, client chase, close deliverable, reconciliation */}
      {/* Includes live review queue preview showing confidence scores */}
      <AIEngine />

      {/* 6. TRUST — Founder story + post-Botkeeper transparency + parallel run offer */}
      {/* "Built by a firm owner" + "Every action visible" + "Try one client" */}
      <Trust />

      {/* 7. PRICING — $15/client with cost comparison vs current stack */}
      {/* Shows: current cost ($3,300) vs Zenday ($450) for 30 clients */}
      <Pricing />

      {/* 8. DEMO — Video with timestamps and post-video CTA */}
      <Demo />

      {/* 9. FAQ — Real objections firm owners have, answered directly */}
      {/* Includes: "How is this different from Double/Karbon?" */}
      {/* "Is this actually AI or humans?" "What if you shut down?" */}
      <FAQ />

      {/* 10. FINAL CTA — "What if you never worked a weekend on close again?" */}
      <FinalCTA />

      {/* 11. FOOTER */}
      <Footer />
    </div>
  )
}
