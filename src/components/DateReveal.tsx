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
        <button onClick={() => setOpen(v => !v)} aria-expanded={open} className="group relative flex min-h-52 w-full flex-col items-center justify-center overflow-hidden border border-gold/40 bg-ivory px-6 text-center transition hover:bg-white/50">
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(214,182,95,0.28),_rgba(255,255,255,0.1)_50%,_rgba(17,17,17,0.08))] transition-opacity duration-700 ${open ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,_rgba(136,98,50,0.38),_rgba(255,255,255,0.22),_rgba(136,98,50,0.38))] transition-all duration-700 ease-out ${open ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`} />
          <Sparkles className="relative z-10 h-5 w-5 text-gold transition group-hover:rotate-12" aria-hidden="true" />
          <AnimatePresence mode="wait">
            {!open ? <motion.span key="prompt" initial={{ opacity: 0, filter: 'blur(4px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(4px)' }} transition={{ duration: 0.35 }} className="relative z-10 mt-4 font-display text-2xl text-maroon">Tap to reveal</motion.span>
              : <motion.span key="date" initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(4px)' }} transition={{ duration: 0.4 }} className="relative z-10 mt-4 font-display text-4xl text-maroon sm:text-5xl">{weddingData.dateLabel}</motion.span>}
          </AnimatePresence>
          <span className="relative z-10 mt-3 text-[10px] uppercase tracking-[0.2em] text-ink/50">{open ? weddingData.city : '11 · 12 · 26'}</span>
        </button>
      </div>
    </div>
  </section>
}
