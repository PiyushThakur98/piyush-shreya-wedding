import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Mandala, SectionTitle } from './Decor'
import { useT } from '../lib/lang'

const BURST = Array.from({ length: 18 }, (_, i) => ({ angle: (i / 18) * Math.PI * 2, dist: 110 + (i % 3) * 45, color: ['#f59e0b', '#e11d48', '#ea580c', '#fbbf24'][i % 4] }))

export function DateReveal() {
  const t = useT()
  const weddingData = t.data
  const [open, setOpen] = useState(false)
  return <section className="pattern relative overflow-hidden bg-cream">
    <Mandala className="pointer-events-none absolute -right-40 -top-24 h-96 w-96 text-gold/10" />
    <div className="section-shell relative text-center">
      <SectionTitle eyebrow={t.date.eyebrow} title={t.date.title} />
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/65">{t.date.sub}</p>
      <motion.div initial={{ opacity: 0, y: 24, rotateX: 25 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ duration: .9 }} className="relative mx-auto mt-10 max-w-md border border-gold/45 bg-white/30 p-2 [perspective:800px]">
        {open && <div className="pointer-events-none absolute left-1/2 top-1/2 z-20" aria-hidden="true">{BURST.map((p, i) => <motion.span key={i} className="absolute h-3 w-2 rounded-[80%_0_80%_0]" style={{ background: p.color }} initial={{ x: 0, y: 0, opacity: 1, scale: .4, rotate: 0 }} animate={{ x: Math.cos(p.angle) * p.dist, y: Math.sin(p.angle) * p.dist + 40, opacity: 0, scale: 1.2, rotate: 540 }} transition={{ duration: 1.4, ease: 'easeOut' }} />)}</div>}
        <button onClick={() => setOpen(v => !v)} aria-expanded={open} className="group relative flex min-h-52 w-full flex-col items-center justify-center overflow-hidden border border-gold/40 bg-ivory px-6 text-center transition hover:bg-white/50">
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(214,182,95,0.28),_rgba(255,255,255,0.1)_50%,_rgba(17,17,17,0.08))] transition-opacity duration-700 ${open ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,_rgba(136,98,50,0.38),_rgba(255,255,255,0.22),_rgba(136,98,50,0.38))] transition-all duration-700 ease-out ${open ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`} />
          <Sparkles className="relative z-10 h-5 w-5 text-gold transition group-hover:rotate-12" aria-hidden="true" />
          <AnimatePresence mode="wait">
            {!open ? <motion.span key="prompt" initial={{ opacity: 0, filter: 'blur(4px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(4px)' }} transition={{ duration: 0.35 }} className="relative z-10 mt-4 font-display text-2xl text-maroon">{t.date.tap}</motion.span>
              : <motion.span key="date" initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(4px)' }} transition={{ duration: 0.4 }} className="relative z-10 mt-4 font-display text-4xl text-maroon sm:text-5xl">{weddingData.dateLabel}</motion.span>}
          </AnimatePresence>
          {/* <span className="relative z-10 mt-3 text-[10px] uppercase tracking-[0.2em] text-ink/50">{open ? weddingData.city : '11 · 12 · 26'}</span> */}
        </button>
      </motion.div>
    </div>
  </section>
}
