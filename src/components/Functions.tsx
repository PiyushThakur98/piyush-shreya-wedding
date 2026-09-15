import { motion } from 'framer-motion'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Functions() {
  return <section id="celebrations" className="maroon-pattern bg-maroon text-cream">
    <div className="section-shell">
      <div className="text-center">
        <p className="eyebrow text-gold">Three chapters, one celebration</p>
        <h2 className="display mt-3 text-4xl sm:text-6xl">The Celebrations</h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {weddingData.events.map((event, i) => <motion.article key={event.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .08, duration: .65 }} className="border border-gold/45 bg-wine/35 p-6 sm:p-8">
          <p className="eyebrow">{event.eyebrow}</p>
          <h3 className="display mt-3 text-3xl text-cream">{event.title}</h3>
          <div className="my-6 h-px w-10 bg-gold" />
          <p className="text-sm leading-7 text-cream/70">{event.description}</p>
          <dl className="mt-7 space-y-4 border-t border-gold/25 pt-6 text-xs text-cream/75">
            <div className="flex gap-3"><CalendarDays className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /><div><dt className="sr-only">Date</dt><dd>{event.date}</dd></div></div>
            <div className="flex gap-3"><Clock3 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /><div><dt className="sr-only">Time</dt><dd>{event.time}</dd></div></div>
            <div className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /><div><dt className="sr-only">Venue</dt><dd>{event.venue}<br /><span className="text-cream/45">{event.address}</span></dd></div></div>
          </dl>
          <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gold">Dress: {event.dressCode}</p>
        </motion.article>)}
      </div>
    </div>
  </section>
}
