import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'
import { Mandala, SectionTitle } from './Decor'
import { useT } from '../lib/lang'

type Left = { days: number; hours: number; minutes: number; seconds: number }
function getLeft(): Left {
  const diff = Math.max(0, new Date(weddingData.dateISO).getTime() - Date.now())
  const total = Math.floor(diff / 1000)
  return { days: Math.floor(total / 86400), hours: Math.floor(total / 3600) % 24, minutes: Math.floor(total / 60) % 60, seconds: total % 60 }
}

export function Countdown() {
  const t = useT()
  const [left, setLeft] = useState(getLeft)
  useEffect(() => { const id = window.setInterval(() => setLeft(getLeft()), 1000); return () => clearInterval(id) }, [])
  return <section className="pattern relative overflow-hidden bg-ivory">
    <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 text-gold/10" />
    <div className="section-shell relative text-center">
      <SectionTitle eyebrow={t.countdown.eyebrow} title={t.countdown.title} />
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {Object.entries(left).map(([label, value], i) => <motion.div key={label} initial={{ opacity: 0, y: 24, scale: .9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .1, type: 'spring', stiffness: 140, damping: 14 }} className="relative overflow-hidden border border-gold/40 bg-cream/80 p-6 shadow-[inset_0_0_0_4px_rgba(255,249,239,1),inset_0_0_0_5px_rgba(181,150,90,.25)] sm:p-8">
          <div className="relative h-12 overflow-hidden font-italian text-4xl leading-[3rem] text-maroon sm:h-16 sm:text-6xl sm:leading-[4rem]">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span key={value} className="block" initial={{ y: '-100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ duration: .45, ease: [.22, 1, .36, 1] }}>{String(value).padStart(2, '0')}</motion.span>
            </AnimatePresence>
          </div>
          <div className="mt-2 text-[9px] uppercase tracking-[.25em] text-ink/45">{t.countdown.units[i]}</div>
        </motion.div>)}
      </div>
    </div>
  </section>
}
