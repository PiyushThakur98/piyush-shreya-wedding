import { Countdown } from './components/Countdown'
import { Couple } from './components/Couple'
import { DateReveal } from './components/DateReveal'
import { Footer } from './components/Footer'
import { Functions } from './components/Functions'
import { Hero } from './components/Hero'
import { Instagram } from './components/Instagram'
import { Invitation } from './components/Invitation'
import { MusicPlayer } from './components/MusicPlayer'
import { Wishes } from './components/Wishes'
import { weddingData } from './data/weddingData'
import { motion } from 'framer-motion'
import { MapPin, Phone, BellRing } from 'lucide-react'

function ThingsToKnow() {
  const icons = [MapPin, Phone, BellRing]
  return <section className="bg-cream">
    <div className="section-shell">
      <div className="text-center"><p className="eyebrow">For a seamless celebration</p><h2 className="display mt-3 text-4xl text-maroon sm:text-6xl">Things to Know</h2></div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {weddingData.thingsToKnow.map((item, i) => { const Icon = icons[i]; return <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="border border-gold/35 bg-ivory p-7"><Icon className="h-5 w-5 text-gold" aria-hidden="true" /><h3 className="mt-6 font-display text-2xl text-maroon">{item.title}</h3>{item.title === 'Contact' ? <p className="mt-3 text-sm leading-7 text-ink/60">{item.body.split(' · ').map((number, index) => <>{index > 0 && <span className="mx-1">·</span>}<a key={number} href={`tel:+91${number.replace(/\s|\./g, '')}`} className="inline-block text-maroon underline-offset-4 hover:underline" target="_blank" rel="noreferrer">{number}</a></>)}</p> : <p className="mt-3 text-sm leading-7 text-ink/60">{item.body}</p>}{item.link && item.title !== 'Contact' ? <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-maroon underline-offset-4 hover:underline">{item.linkLabel ?? 'Open link'}</a> : null}</motion.article> })}
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-gold/35 bg-ivory">
        <iframe title="Wedding venue map" src={weddingData.mapEmbedUrl} className="block h-[320px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </section>
}

export default function App() {
  return <main id="top">
    <Hero />
    <Invitation />
    <DateReveal />
    <Functions />
    <Couple />
    <Instagram />
    <Countdown />
    <ThingsToKnow />
    <Wishes />
    <Footer />
    <MusicPlayer />
  </main>
}
