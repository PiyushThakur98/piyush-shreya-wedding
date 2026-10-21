import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { useReducedMotionPreference } from '../lib/useReducedMotion'
import { graphemes, useT } from '../lib/lang'

export function Hero({ ready }: { ready: boolean }) {
  const t = useT()
  const weddingData = t.data
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotionPreference()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.35 })
  const scale = useTransform(smoothProgress, [0, 0.42, 1], [1, 1.08, 2.65])
  const entranceY = useTransform(smoothProgress, [0, 1], ['0%', '12%'])
  const glow = useTransform(smoothProgress, [0.25, 0.7], [0, 0.9])
  const visualOpacity = useTransform(smoothProgress, [0.75, 1], [1, 0])

  return (
    <section ref={ref} aria-label="Wedding invitation cover" className="hero-sky relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
      <div className="cloud left-[4%] top-[17%] h-10 w-32 opacity-70" aria-hidden="true" />
      <div className="cloud right-[2%] top-[29%] h-12 w-40 opacity-55" aria-hidden="true" />
      <div className="cloud left-[30%] top-[7%] h-7 w-24 opacity-40" aria-hidden="true" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 pt-[26vh] text-center text-white sm:pt-[14vh]">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: .9, duration: .8 }} className="text-[10px] font-semibold uppercase tracking-[0.38em] sm:text-xs">{t.hero.tagline}</motion.p>
        <motion.div initial={{ scaleX: 0 }} animate={ready ? { scaleX: 1 } : {}} transition={{ delay: 1.1, duration: .8 }} className="my-4 h-px w-12 bg-white/70" />
        <h1 className="display text-5xl leading-[0.95] drop-shadow-sm sm:text-7xl lg:text-8xl" aria-label={weddingData.couple.full}>
          {[weddingData.couple.groom, '&', weddingData.couple.bride].map((word, w) => <span key={w} aria-hidden="true" className={`inline-block whitespace-nowrap ${w === 1 ? 'mx-3 max-sm:ml-0' : ''} ${w === 0 ? 'max-sm:block' : ''}`}>
            {graphemes(word).map((ch, i) => <motion.span key={i} className="inline-block" initial={{ opacity: 0, y: 40, rotateX: -90, filter: 'blur(6px)' }} animate={ready ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' } : {}} transition={{ delay: 1.2 + (w * 6 + i) * .06, duration: .7, ease: [.22, 1, .36, 1] }}>{ch}</motion.span>)}
          </span>)}
        </h1>
        {/* <p className="mt-5 font-display text-lg italic sm:text-2xl">{weddingData.dateLabel}</p> */}
      </div>

      {reduced ? (
        <motion.img initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: 'easeOut' }} src="/assets/Image_Final.png" alt="Wedding invitation artwork" className="absolute bottom-0 left-1/2 z-10 w-[112vw] max-w-[1050px] -translate-x-1/2 scale-[1.3] origin-bottom will-change-transform" />
      ) : (
        <motion.div initial={{ opacity: 0, scale: 1.08 }} animate={ready ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.2, ease: 'easeOut' }} style={{ scale, y: entranceY, opacity: visualOpacity }} className="absolute inset-x-0 bottom-0 z-10 mx-auto h-[74vh] max-h-[820px] w-full origin-[50%_78%] will-change-transform">
          <img src="/assets/Image_Final.png" alt="" className="absolute bottom-0 left-1/2 h-full w-[150vw] max-w-none -translate-x-1/2 scale-[1.3] sm:w-full sm:max-w-[1050px] origin-bottom object-contain object-bottom will-change-transform" />
          <motion.div style={{ opacity: glow }} className="absolute left-1/2 top-[30%] h-[55%] w-[8%] -translate-x-1/2 rounded-full bg-[#fff4cc] blur-3xl" aria-hidden="true" />
        </motion.div>
      )}

      <a href="#invitation" className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 text-center text-white/90 transition hover:text-white" aria-label="Scroll to explore the invitation">
        <span className="block text-[9px] uppercase tracking-[0.32em]">{t.hero.scroll}</span>
        <ChevronDown className="mx-auto mt-2 h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
