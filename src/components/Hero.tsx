import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { useReducedMotionPreference } from '../lib/useReducedMotion'
import { weddingData } from '../data/weddingData'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotionPreference()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.42, 1], [1, 1.08, 2.65])
  const entranceY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const glow = useTransform(scrollYProgress, [0.25, 0.7], [0, 0.9])
  const visualOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])

  return (
    <section ref={ref} aria-label="Wedding invitation cover" className="hero-sky relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
      <div className="cloud left-[4%] top-[17%] h-10 w-32 opacity-70" aria-hidden="true" />
      <div className="cloud right-[2%] top-[29%] h-12 w-40 opacity-55" aria-hidden="true" />
      <div className="cloud left-[30%] top-[7%] h-7 w-24 opacity-40" aria-hidden="true" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 pt-[16vh] text-center text-white sm:pt-[14vh]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.38em] sm:text-xs">A celebration of love</p>
        <div className="my-4 h-px w-12 bg-white/70" />
        <h1 className="display text-5xl leading-[0.95] drop-shadow-sm sm:text-7xl lg:text-8xl">{weddingData.couple.groom}<br className="sm:hidden" /> &amp; {weddingData.couple.bride}</h1>
        <p className="mt-5 font-display text-lg italic sm:text-2xl">{weddingData.dateLabel}</p>
      </div>

      {reduced ? (
        <motion.img initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: 'easeOut' }} src="/assets/1789479230143.png" alt="Wedding invitation artwork" className="absolute bottom-[-2px] left-1/2 z-10 w-[112vw] max-w-[1050px] -translate-x-1/2" />
      ) : (
        <motion.div initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} style={{ scale, y: entranceY, opacity: visualOpacity }} className="absolute inset-x-0 bottom-[-2px] z-10 mx-auto h-[74vh] max-h-[820px] w-full origin-[50%_78%]">
          <img src="/assets/1789479230143.png" alt="" className="absolute bottom-0 left-1/2 h-full w-full max-w-[1050px] -translate-x-1/2 object-contain object-bottom" />
          <motion.div style={{ opacity: glow }} className="absolute left-1/2 top-[30%] h-[55%] w-[8%] -translate-x-1/2 rounded-full bg-[#fff4cc] blur-3xl" aria-hidden="true" />
        </motion.div>
      )}

      <a href="#invitation" className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 text-center text-white/90 transition hover:text-white" aria-label="Scroll to explore the invitation">
        <span className="block text-[9px] uppercase tracking-[0.32em]">Scroll to explore</span>
        <ChevronDown className="mx-auto mt-2 h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
