"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#5B5FF6] flex items-center justify-center">
              <span className="text-xs font-bold text-white">Z</span>
            </div>
            <span className="text-sm font-bold text-gray-900">zenday</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#ai-engine" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">AI Engine</a>
            <a href="#pricing" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <a href="#demo" className="text-[13px] text-gray-500 hover:text-gray-900 px-4 py-1.5">
            Watch Demo
          </a>
          <a href="#pricing" className="text-[13px] px-5 py-2 rounded-full bg-[#5B5FF6] hover:bg-[#4A4EE5] text-white font-medium transition-colors">
            Try Your First Client Free
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-3">
          <a href="#how-it-works" className="text-sm text-gray-500">How It Works</a>
          <a href="#ai-engine" className="text-sm text-gray-500">AI Engine</a>
          <a href="#pricing" className="text-sm text-gray-500">Pricing</a>
          <a href="#faq" className="text-sm text-gray-500">FAQ</a>
          <a href="#pricing" className="text-sm px-5 py-2.5 rounded-full bg-[#5B5FF6] text-white text-center font-medium mt-1">
            Try Your First Client Free
          </a>
        </div>
      )}
    </nav>
  )
}
