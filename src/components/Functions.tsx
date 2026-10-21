import { motion } from 'framer-motion'
import { CalendarDays, Clock3, Flame, Flower2, Gem, MapPin, Music } from 'lucide-react'
import { Mandala, SectionTitle, Toran } from './Decor'
import { useT } from '../lib/lang'

const ICONS: Record<string, typeof Gem> = { engagement: Gem, 'haldi-mehndi': Flower2, sangeet: Music, wedding: Flame }

export function Functions() {
  const t = useT()
  const weddingData = t.data
  return <section id="celebrations" className="maroon-pattern relative overflow-hidden bg-maroon text-cream">
    <Toran />
    <Mandala className="pointer-events-none absolute -left-48 bottom-0 h-[30rem] w-[30rem] text-gold/10" />
    <Mandala className="pointer-events-none absolute -right-48 top-24 h-[30rem] w-[30rem] text-gold/10" />
    <div className="section-shell relative pt-32 sm:pt-36">
      <SectionTitle eyebrow={t.events.eyebrow} title={t.events.title} light />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {weddingData.events.map((event, i) => {
          const Icon = ICONS[event.id] ?? Gem
          return <motion.article key={event.id} initial={{ opacity: 0, y: 40, rotateX: -12 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: (i % 2) * .12, duration: .8, ease: [.22, 1, .36, 1] }} whileHover={{ y: -6 }} className="card-glow group relative border border-gold/45 bg-wine/35 p-6 transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,.35)] sm:p-8">
            <span className="absolute right-5 top-4 font-display text-6xl italic text-gold/10 transition group-hover:text-gold/20 sm:right-7" aria-hidden="true">0{i + 1}</span>
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-maroon text-gold shadow-[0_0_20px_rgba(181,150,90,.25)]"><Icon className="h-5 w-5" aria-hidden="true" /></motion.div>
            <p className="eyebrow mt-6">{event.eyebrow}</p>
            <h3 className="display mt-3 text-3xl text-cream">{event.title}</h3>
            <div className="my-6 h-px w-10 bg-gold transition-all duration-500 group-hover:w-24" />
            <p className="text-sm leading-7 text-cream/70">{event.description}</p>
            <dl className="mt-7 space-y-4 border-t border-gold/25 pt-6 text-xs text-cream/75">
              <div className="flex gap-3"><CalendarDays className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /><div><dt className="sr-only">Date</dt><dd>{event.date}</dd></div></div>
              <div className="flex gap-3"><Clock3 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /><div><dt className="sr-only">Time</dt><dd>{event.time}</dd></div></div>
              <div className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /><div><dt className="sr-only">Venue</dt><dd>{event.venue}<br /><span className="text-cream/45">{event.address}</span></dd></div></div>
            </dl>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{t.events.dress}: {event.dressCode}</p>
              {event.locationLink ? <a href={event.locationLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-gold/60 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-wine"><MapPin className="h-3 w-3" aria-hidden="true" />{t.events.map}</a> : null}
            </div>
          </motion.article>
        })}
      </div>
    </div>
  </section>
}
