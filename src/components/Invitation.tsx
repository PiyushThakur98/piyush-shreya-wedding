import { motion } from 'framer-motion'
import { Divider, Mandala, Toran } from './Decor'
import { useT } from '../lib/lang'

const rise = (delay: number) => ({ initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .5 }, transition: { delay, duration: .8, ease: [.22, 1, .36, 1] as const } })

export function Invitation() {
  const t = useT()
  const weddingData = t.data
  return <section id="invitation" className="relative overflow-hidden bg-ivory">
    <Toran />
    <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 text-gold/10" />
    <div className="section-shell relative pt-32 text-center sm:pt-36">
      <motion.div initial={{ opacity: 0, scale: .6, rotate: -20 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 12 }} className="ornament text-5xl drop-shadow-[0_0_18px_rgba(181,150,90,.45)]">ॐ</motion.div>
      <Divider />
      <motion.p {...rise(.2)} className="mx-auto mt-8 max-w-2xl font-display text-xl leading-relaxed text-ink/80 sm:text-2xl">{weddingData.blessing}</motion.p>
      <motion.div initial={{ opacity: 0, scaleY: .8 }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .9 }} className="relative mx-auto mt-12 max-w-xl border-y border-gold/40 bg-cream/60 px-4 py-10 backdrop-blur-[2px]">
        <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-gold" aria-hidden="true" />
        <span className="absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-gold" aria-hidden="true" />
        <motion.p {...rise(.3)} className="eyebrow">{weddingData.families}</motion.p>
        <motion.p {...rise(.45)} className="mt-4 font-display text-2xl sm:text-3xl">{weddingData.hosts.split(/ (&|एवं) /).map((part, i) => <span key={i} className={i % 2 ? 'text-gold' : 'whitespace-nowrap'}>{i % 2 ? ` ${part} ` : part}</span>)}</motion.p>
        <motion.p initial={{ opacity: 0, letterSpacing: '0.3em', filter: 'blur(8px)' }} whileInView={{ opacity: 1, letterSpacing: '0em', filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: .65, duration: 1.2 }} className="mt-5 font-italian text-5xl text-maroon sm:text-7xl">{t.invite.big}</motion.p>
        <motion.p {...rise(.9)} className="mx-auto mt-5 max-w-lg font-display text-lg italic leading-8 text-ink/70">{weddingData.invitation}</motion.p>
      </motion.div>
      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-[1fr_auto_1fr]">
        {weddingData.lineage.map((side, i) => <motion.div key={side.role} initial={{ opacity: 0, x: i ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: .15, duration: .9, ease: [.22, 1, .36, 1] }} whileHover={{ y: -4 }} className={`card-glow relative border border-gold/35 bg-cream/70 px-6 py-8 shadow-[inset_0_0_0_5px_rgba(255,249,239,1),inset_0_0_0_6px_rgba(181,150,90,.25)] ${i ? 'order-3' : 'order-1'}`}>
          <p className="eyebrow">{side.role}</p>
          <p className="mt-3 font-italian text-4xl text-maroon sm:text-5xl">{side.name}</p>
          <div className="mx-auto my-4 h-px w-10 bg-gold" />
          {side.lines.map(line => <p key={line} className="text-sm leading-7 text-ink/70">{line}</p>)}
        </motion.div>)}
        <motion.span initial={{ scale: 0, rotate: -90 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: .5, type: 'spring' }} className="order-2 mx-auto self-center font-display text-2xl italic text-gold">{t.invite.with}</motion.span>
      </div>
    </div>
  </section>
}
