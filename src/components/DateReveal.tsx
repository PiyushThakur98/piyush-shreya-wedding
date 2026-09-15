import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function DateReveal() {
  const [open, setOpen] = useState(false)
  return <section className="pattern bg-cream">
    <div className="section-shell text-center">
      <p className="eyebrow">A date to remember</p>
      <h2 className="display mt-3 text-4xl text-maroon sm:text-6xl">Reveal the Date</h2>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/65">A little moment before the celebrations begin.</p>
      <div className="mx-auto mt-10 max-w-md border border-gold/45 bg-white/30 p-2">
        <button onClick={() => setOpen(v => !v)} aria-expanded={open} className="group flex min-h-52 w-full flex-col items-center justify-center border border-gold/40 bg-ivory px-6 text-center transition hover:bg-white/50">
          <Sparkles className="h-5 w-5 text-gold transition group-hover:rotate-12" aria-hidden="true" />
          <AnimatePresence mode="wait">
            {!open ? <motion.span key="prompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 font-display text-2xl text-maroon">Tap to reveal</motion.span>
              : <motion.span key="date" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 font-display text-4xl text-maroon sm:text-5xl">{weddingData.dateLabel}</motion.span>}
          </AnimatePresence>
          <span className="mt-3 text-[10px] uppercase tracking-[0.2em] text-ink/50">{open ? weddingData.city : '11 · 12 · 26'}</span>
        </button>
      </div>
    </div>
  </section>
}
