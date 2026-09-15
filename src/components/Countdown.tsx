import { useEffect, useState } from 'react'
import { weddingData } from '../data/weddingData'

type Left = { days: number; hours: number; minutes: number; seconds: number }
function getLeft(): Left {
  const diff = Math.max(0, new Date(weddingData.dateISO).getTime() - Date.now())
  const total = Math.floor(diff / 1000)
  return { days: Math.floor(total / 86400), hours: Math.floor(total / 3600) % 24, minutes: Math.floor(total / 60) % 60, seconds: total % 60 }
}

export function Countdown() {
  const [left, setLeft] = useState(getLeft)
  useEffect(() => { const id = window.setInterval(() => setLeft(getLeft()), 1000); return () => clearInterval(id) }, [])
  return <section className="bg-ivory pattern">
    <div className="section-shell text-center">
      <p className="eyebrow">Until we say “I do”</p>
      <h2 className="display mt-3 text-4xl text-maroon sm:text-6xl">Counting the moments</h2>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 border border-gold/40 sm:grid-cols-4">
        {Object.entries(left).map(([label, value], i) => <div key={label} className={`p-6 sm:p-8 ${i < 3 ? 'border-b border-gold/30 sm:border-b-0 sm:border-r' : ''} ${i === 0 ? 'border-r' : ''}`}><div className="font-italiana text-4xl text-maroon sm:text-6xl">{String(value).padStart(2, '0')}</div><div className="mt-2 text-[9px] uppercase tracking-[.25em] text-ink/45">{label}</div></div>)}
      </div>
    </div>
  </section>
}
