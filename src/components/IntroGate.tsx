import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { weddingData } from '../data/weddingData'
import { play } from '../lib/music'
import { Diya, Divider, Lotus, Mandala, Toran } from './Decor'

const EASE = [.65, 0, .35, 1] as const
// deterministic gold dust so it doesn't reshuffle on re-render
const DUST = Array.from({ length: 22 }, (_, i) => ({ left: (i * 47) % 100, size: 2 + (i % 3), delay: (i * .7) % 6, dur: 6 + (i % 5) }))

function Door({ side, open }: { side: 'left' | 'right'; open: boolean }) {
  const left = side === 'left'
  return <motion.div
    initial={false}
    animate={{ rotateY: open ? (left ? -105 : 105) : 0 }}
    transition={{ duration: 2, ease: EASE }}
    style={{ transformOrigin: left ? 'left center' : 'right center' }}
    className={`maroon-pattern absolute inset-y-0 w-1/2 overflow-hidden bg-maroon shadow-[0_0_80px_rgba(0,0,0,.45)] ${left ? 'left-0' : 'right-0'}`}
  >
    {/* depth: darker toward the hinge */}
    <div className={`absolute inset-0 from-black/40 via-transparent to-black/15 ${left ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}`} />
    <div className="absolute inset-3 border border-gold/60 sm:inset-5" />
    <div className="absolute inset-[18px] border border-gold/20 sm:inset-7" />
    {/* carved arch with jali lattice */}
    <div className="jali absolute inset-x-6 bottom-[30%] top-[9%] rounded-t-full border-2 border-gold/50 sm:inset-x-12" />
    <div className="absolute inset-x-9 bottom-[32%] top-[12%] rounded-t-full border border-gold/25 sm:inset-x-16" />
    <Mandala className="absolute left-1/2 top-[17%] h-24 w-24 -translate-x-1/2 text-gold/45 sm:h-40 sm:w-40" />
    {/* lower panel */}
    <div className="absolute inset-x-6 bottom-[7%] h-[17%] border border-gold/45 sm:inset-x-12">
      <div className="absolute inset-2 border border-gold/20" />
      <Lotus className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-gold/50" />
    </div>
    {/* gold edge + studs along the meeting edge */}
    <div className={`absolute inset-y-0 w-1.5 bg-gradient-to-b from-gold via-amber-200 to-gold ${left ? 'right-0' : 'left-0'}`} />
    <div className={`absolute inset-y-6 flex flex-col justify-between ${left ? 'right-3' : 'left-3'}`} aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-amber-100 to-gold shadow" />)}
    </div>
    {/* knocker */}
    <div className={`absolute top-1/2 -translate-y-1/2 ${left ? 'right-7' : 'left-7'}`}>
      <div className="h-6 w-6 rounded-full border-2 border-amber-200 bg-gradient-to-br from-amber-200 to-gold shadow-lg" />
      <motion.div animate={{ rotate: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} className="mx-auto -mt-1 h-8 w-8 origin-top -translate-x-1 rounded-full border-[3px] border-gold shadow" />
    </div>
  </motion.div>
}

export function IntroGate({ onOpen, onDone }: { onOpen: () => void; onDone: () => void }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])
  const enter = () => {
    if (open) return
    void play()
    setOpen(true)
    onOpen()
    window.setTimeout(onDone, 2200)
  }

  return <motion.div animate={open ? { opacity: 0 } : { opacity: 1 }} transition={open ? { delay: 1.7, duration: .5 } : {}} className="fixed inset-0 z-[60] overflow-hidden [perspective:1800px]" role="dialog" aria-label="Wedding invitation cover">
    <Door side="left" open={open} />
    <Door side="right" open={open} />

    {/* light pouring through the seam as the doors part */}
    {open && <motion.div initial={{ opacity: 0, scaleX: .05 }} animate={{ opacity: [0, 1, 0], scaleX: [.05, 1, 1.4] }} transition={{ duration: 1.6, ease: 'easeOut' }} className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,rgba(255,244,204,.95),rgba(251,191,36,.35)_35%,transparent_70%)]" aria-hidden="true" />}

    <motion.div animate={open ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }} transition={{ duration: .6 }} className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24"><Toran /></motion.div>

    {/* rising gold dust */}
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {DUST.map((d, i) => <motion.span key={i} className="absolute bottom-0 rounded-full bg-amber-200 shadow-[0_0_6px_rgba(253,230,138,.9)]" style={{ left: `${d.left}%`, width: d.size, height: d.size }} animate={{ y: [0, -900], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: d.dur, delay: d.delay, ease: 'linear' }} />)}
    </div>

    <motion.div initial={{ opacity: 0 }} animate={open ? { opacity: 0, scale: .85 } : { opacity: 1, scale: 1 }} transition={{ duration: open ? .5 : 1.2 }} className="absolute inset-0 z-10 flex items-center justify-center px-5">
      <Mandala className="pointer-events-none absolute h-[135vmin] w-[135vmin] text-gold/15" />
      <div className="animate-spin-slow pointer-events-none absolute h-[80vmin] w-[80vmin] rounded-full bg-[repeating-conic-gradient(rgba(251,191,36,.18)_0deg_6deg,transparent_6deg_18deg)] blur-md [mask-image:radial-gradient(circle,#000_20%,transparent_70%)]" aria-hidden="true" />

      <motion.div initial={{ y: 30, scale: .95 }} animate={{ y: 0, scale: 1 }} transition={{ duration: 1, ease: [.22, 1, .36, 1] }} className="relative w-full max-w-sm rounded-t-full border border-gold/60 bg-gradient-to-b from-wine/95 via-wine/90 to-maroon/90 px-6 pb-10 pt-20 text-center text-cream shadow-[0_30px_80px_rgba(0,0,0,.5),0_0_60px_rgba(181,150,90,.25)] backdrop-blur-sm sm:max-w-md sm:px-10">
        <div className="pointer-events-none absolute inset-2 rounded-t-full border border-gold/25" aria-hidden="true" />
        {/* crown lotus on the arch */}
        <motion.div initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: .2, type: 'spring', stiffness: 160, damping: 12 }} className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-wine text-gold shadow-[0_0_24px_rgba(251,191,36,.45)]"><Lotus className="h-6 w-6" /></motion.div>
        {/* corner flourishes */}
        {['left-3 rotate-0', 'right-3 -scale-x-100'].map(pos => <svg key={pos} viewBox="0 0 40 40" className={`pointer-events-none absolute bottom-3 h-9 w-9 text-gold/60 ${pos}`} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M2 38V20M2 38h18M2 30c8 0 8-8 16-8M10 38c0-8 8-8 8-16" /><circle cx="18" cy="22" r="1.6" fill="currentColor" /></svg>)}

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="font-deva text-sm text-gold sm:text-base">॥ श्री गणेशाय नमः ॥</motion.p>
        <motion.p initial={{ opacity: 0, scale: .9, filter: 'blur(6px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ delay: .55, duration: 1 }} className="gold-shimmer mt-3 px-2 py-3 font-deva text-5xl leading-normal drop-shadow-[0_2px_12px_rgba(251,191,36,.25)] sm:text-6xl">शुभ विवाह</motion.p>
        <Divider className="mt-3" />
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9 }} className="mt-5 font-display text-3xl sm:text-4xl">{weddingData.couple.groom} <span className="text-gold">&amp;</span> {weddingData.couple.bride}</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-3 text-[10px] uppercase tracking-[.3em] text-cream/70">Wedding Invite</motion.p>
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: .96 }} onClick={enter} autoFocus className="group relative mt-9 inline-flex items-center justify-center overflow-hidden rounded-full border border-gold bg-gradient-to-r from-gold via-amber-300 to-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[.22em] text-wine shadow-[0_0_30px_rgba(233,207,138,.45)]">
          <span className="absolute inset-0 animate-ping rounded-full border border-gold/70" aria-hidden="true" />
          <motion.span className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" initial={{ left: '-40%' }} animate={{ left: ['-40%', '140%'] }} transition={{ repeat: Infinity, duration: 2.4, repeatDelay: 1, ease: 'easeInOut' }} aria-hidden="true" />
          <span className="relative">Open Invitation</span>
        </motion.button>
        {/* <p className="mt-4 text-[10px] tracking-[.12em] text-cream/50">Turn your sound on for the full experience</p> */}
      </motion.div>
    </motion.div>

    <motion.div animate={open ? { opacity: 0 } : { opacity: 1 }} className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-between px-6 sm:bottom-8 sm:px-12"><Diya /><Diya /></motion.div>
  </motion.div>
}
