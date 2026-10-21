import { Countdown } from './components/Countdown'
import { Couple } from './components/Couple'
import { DateReveal } from './components/DateReveal'
import { Footer } from './components/Footer'
import { Functions } from './components/Functions'
import { Hero } from './components/Hero'
// import { Instagram } from './components/Instagram'
import { Invitation } from './components/Invitation'
import { MusicPlayer } from './components/MusicPlayer'
// import { Wishes } from './components/Wishes'
import { weddingData } from './data/weddingData'
import { MotionConfig, motion } from 'framer-motion'
import { Phone, BellRing } from 'lucide-react'
import { Fragment, useState } from 'react'
import { IntroGate } from './components/IntroGate'
import { Mandala, Petals, ScrollProgress, SectionTitle } from './components/Decor'

function ThingsToKnow() {
  const icons = [Phone, BellRing]
  return <section className="relative overflow-hidden bg-cream">
    <Mandala className="pointer-events-none absolute -left-40 top-10 h-96 w-96 text-gold/10" />
    <div className="section-shell relative">
      <SectionTitle eyebrow="For a seamless celebration" title="Things to Know" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {weddingData.thingsToKnow.map((item, i) => { const Icon = icons[i]; return <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -4 }} className="card-glow border border-gold/35 bg-ivory p-7 transition-shadow hover:shadow-luxury"><Icon className="h-5 w-5 text-gold" aria-hidden="true" /><h3 className="mt-6 font-display text-2xl text-maroon">{item.title}</h3>{item.title === 'Contact' ? <p className="mt-3 text-sm leading-7 text-ink/60">{item.body.split(' · ').map((number, index) => <Fragment key={number}>{index > 0 && <span className="mx-1">·</span>}<a href={`tel:+91${number.replace(/\s|\./g, '')}`} className="inline-block text-maroon underline-offset-4 hover:underline" target="_blank" rel="noreferrer">{number}</a></Fragment>)}</p> : <p className="mt-3 text-sm leading-7 text-ink/60">{item.body}</p>}{item.link && item.title !== 'Contact' ? <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-maroon underline-offset-4 hover:underline">{item.linkLabel ?? 'Open link'}</a> : null}</motion.article> })}
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-gold/35 bg-ivory">
        <iframe title="Wedding venue map" src={weddingData.mapEmbedUrl} className="block h-[320px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </section>
}

export default function App() {
  const [opened, setOpened] = useState(false)
  const [gateGone, setGateGone] = useState(false)
  return <MotionConfig reducedMotion="user"><main id="top">
    {!gateGone && <IntroGate onOpen={() => setOpened(true)} onDone={() => setGateGone(true)} />}
    <ScrollProgress />
    {opened && <Petals />}
    <Hero ready={opened} />
    <Invitation />
    <DateReveal />
    <Functions />
    <Couple />
    {/* <Instagram /> */}
    <Countdown />
    <ThingsToKnow />
    {/* <Wishes /> */}
    <Footer />
    <MusicPlayer />
  </main></MotionConfig>
}
