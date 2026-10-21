import { motion } from 'framer-motion'
import { Carousel } from './Carousel'
import { useT } from '../lib/lang'

export function Couple() {
  const t = useT()
  const weddingData = t.data
  return <section className="bg-cream">
    <div className="section-shell">
      <div className="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }}>
          <p className="eyebrow">{t.story.eyebrow}</p>
          <h2 className="display mt-3 text-5xl leading-none text-maroon sm:text-7xl">{t.story.title[0]}<br /><span className="italic">{t.story.title[1]}</span></h2>
          <div className="my-7 gold-rule" />
          <p className="text-sm leading-8 text-ink/70">{t.story.body}</p>
          <p className="mt-5 font-display text-xl italic text-maroon/80">{t.story.closing}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: .1 }}><Carousel /></motion.div>
      </div>
    </div>
  </section>
}
