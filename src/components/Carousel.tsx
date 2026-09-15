import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { weddingData } from '../data/weddingData'

export function Carousel() {
  const [index, setIndex] = useState(0)
  const total = weddingData.coupleImages.length
  const go = (delta: number) => setIndex((index + delta + total) % total)
  return <div className="relative overflow-hidden border border-gold/35 bg-ink p-2">
    <div className="relative aspect-[4/5] sm:aspect-[16/10]">
      {weddingData.coupleImages.map((image, i) => <img key={image.src} src={image.src} alt={image.alt} loading={i === 0 ? 'eager' : 'lazy'} style={{ objectPosition: image.position ?? 'center' }} className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out ${i === index ? 'scale-100 opacity-100' : 'scale-105 pointer-events-none opacity-0'}`} />)}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent p-4 pt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-white/80">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</p>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous photo" className="border border-white/60 bg-black/20 p-2 text-white hover:bg-black/40"><ChevronLeft className="h-4 w-4" /></button>
          <button onClick={() => go(1)} aria-label="Next photo" className="border border-white/60 bg-black/20 p-2 text-white hover:bg-black/40"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  </div>
}
