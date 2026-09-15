import { Instagram as InstagramIcon } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Instagram() {
  return <section className="bg-ivory">
    <div className="section-shell text-center">
      <InstagramIcon className="mx-auto h-6 w-6 text-gold" aria-hidden="true" />
      <p className="eyebrow mt-5">Share the celebration</p>
      <h2 className="display mt-3 text-4xl text-maroon sm:text-6xl">{weddingData.hashtag}</h2>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/60">Tag your favourite moments with our wedding hashtag. We cannot wait to see the celebration through your eyes.</p>
      <a className="outline-button mt-8" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Open Instagram</a>
    </div>
  </section>
}
