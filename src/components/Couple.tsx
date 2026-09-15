import { motion } from 'framer-motion'
import { Carousel } from './Carousel'

export function Couple() {
  return <section className="bg-cream">
    <div className="section-shell">
      <div className="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }}>
          <p className="eyebrow">Two lives, one story</p>
          <h2 className="display mt-3 text-5xl leading-none text-maroon sm:text-7xl">Our<br /><span className="italic">Story</span></h2>
          <div className="my-7 gold-rule" />
          <p className="text-sm leading-8 text-ink/70">Somewhere between ordinary days and extraordinary laughter, we found a love that felt like home. This chapter is for the people who have cheered for us, carried us, and made our story possible.</p>
          <p className="mt-5 font-display text-xl italic text-maroon/80">And now, we begin forever.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: .1 }}><Carousel /></motion.div>
      </div>
    </div>
  </section>
}
