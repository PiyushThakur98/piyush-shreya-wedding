import { motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'

export function Invitation() {
  return <section id="invitation" className="bg-ivory">
    <div className="section-shell text-center">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7 }}>
        <div className="ornament text-4xl">ॐ</div>
        <div className="mx-auto my-5 gold-rule" />
        <p className="eyebrow">With the blessings of our families</p>
        <p className="mx-auto mt-8 max-w-2xl font-display text-xl leading-relaxed text-ink/80 sm:text-2xl">{weddingData.blessing}</p>
        <div className="mx-auto mt-12 max-w-xl border-y border-gold/40 py-10">
          <p className="eyebrow">{weddingData.families}</p>
          <p className="mt-4 font-italiana text-5xl text-maroon sm:text-7xl">Invite</p>
          <p className="mt-5 font-display text-3xl sm:text-4xl">{weddingData.couple.groom} <span className="text-gold">&amp;</span> {weddingData.couple.bride}</p>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-ink/65">{weddingData.invitation}</p>
        </div>
      </motion.div>
    </div>
  </section>
}
