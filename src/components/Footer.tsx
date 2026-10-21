import { Heart, ArrowUp } from 'lucide-react'
import { weddingData } from '../data/weddingData'
import { Diya } from './Decor'

export function Footer() {
  return <footer className="border-t border-gold/35 bg-ivory">
    <div className="section-shell pb-12 pt-16 text-center">
      <div className="flex items-end justify-center gap-8"><Diya /><div className="ornament text-3xl">ॐ</div><Diya /></div>
      <p className="mt-5 font-deva text-sm text-gold">॥ शुभमस्तु ॥</p>
      <p className="gold-shimmer mt-3 font-italian text-4xl sm:text-5xl">{weddingData.couple.groom} &amp; {weddingData.couple.bride}</p>
      <p className="mt-3 text-[10px] uppercase tracking-[.25em] text-ink/45">{weddingData.dateLabel} · {weddingData.city}</p>
      <div className="mx-auto my-8 h-px w-12 bg-gold" />
      <p className="text-xs text-ink/50">Made with <Heart className="mx-1 inline h-3 w-3 fill-current text-maroon" aria-hidden="true" /> for a lifetime of memories.</p>
      <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="mx-auto mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-maroon hover:text-gold">Back to top <ArrowUp className="h-3 w-3" /></a>
    </div>
  </footer>
}
