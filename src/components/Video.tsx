import { Play } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Video() {
  return <section className="bg-wine text-cream">
    <div className="section-shell">
      <div className="mb-9 text-center">
        <p className="eyebrow">A moving memory</p>
        <h2 className="display mt-3 text-4xl sm:text-6xl">{weddingData.video.title}</h2>
      </div>
      <div className="mx-auto max-w-4xl border border-gold/40 bg-black p-2">
        <div className="relative aspect-video overflow-hidden">
          <iframe className="h-full w-full" src={weddingData.video.embedUrl} title={weddingData.video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 border border-white/20 bg-black/30 px-3 py-2 text-[9px] uppercase tracking-[.2em] text-white/70"><Play className="h-3 w-3" /> Play</div>
        </div>
      </div>
    </div>
  </section>
}
