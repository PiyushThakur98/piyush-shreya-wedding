import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

type Wish = { name: string; message: string; date: string }
const KEY = 'piyush-shreya-wishes'
export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  useEffect(() => { try { setWishes(JSON.parse(localStorage.getItem(KEY) || '[]')) } catch { setWishes([]) } }, [])
  const submit = (e: FormEvent) => { e.preventDefault(); if (!name.trim() || !message.trim()) return; const next = [{ name: name.trim(), message: message.trim(), date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) }, ...wishes].slice(0, 12); setWishes(next); localStorage.setItem(KEY, JSON.stringify(next)); setName(''); setMessage('') }
  return <section className="bg-ivory">
    <div className="section-shell">
      <div className="text-center"><p className="eyebrow">Leave a little love</p><h2 className="display mt-3 text-4xl text-maroon sm:text-6xl">Wishes Wall</h2></div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <form onSubmit={submit} className="border border-gold/40 bg-cream p-6 sm:p-8"><label className="block text-xs font-semibold uppercase tracking-[.12em]">Your name<input required value={name} onChange={e => setName(e.target.value)} className="mt-2 w-full border-b border-gold/50 bg-transparent px-0 py-3 text-sm normal-case tracking-normal outline-none focus:border-maroon" /></label><label className="mt-6 block text-xs font-semibold uppercase tracking-[.12em]">Your wish<textarea required value={message} onChange={e => setMessage(e.target.value)} rows={4} className="mt-2 w-full resize-none border-b border-gold/50 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-maroon" placeholder="Write something beautiful…" /></label><button className="luxury-button mt-7">Add your wish</button><p className="mt-4 text-[10px] leading-5 text-ink/45">Wishes are stored privately in this browser using localStorage.</p></form>
        <div className="grid gap-3 sm:grid-cols-2">{wishes.length ? wishes.map((wish, i) => <article key={`${wish.date}-${i}`} className="border border-gold/35 bg-cream p-5"><p className="font-display text-lg italic leading-7 text-ink/80">“{wish.message}”</p><div className="mt-5 border-t border-gold/20 pt-4 text-[10px] uppercase tracking-[.16em] text-ink/45">{wish.name} · {wish.date}</div></article>) : <div className="col-span-full flex min-h-56 items-center justify-center border border-dashed border-gold/40 p-8 text-center text-sm text-ink/45">Be the first to leave a wish.</div>}</div>
      </div>
    </div>
  </section>
}
