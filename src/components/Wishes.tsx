import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionTitle } from './Decor'

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
      <SectionTitle eyebrow="Leave a little love" title="Wishes Wall" />
      <div className="mt-10 grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <motion.form initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} onSubmit={submit} className="border border-gold/40 bg-cream p-6 sm:p-8"><label className="block text-xs font-semibold uppercase tracking-[.12em]">Your name<input required value={name} onChange={e => setName(e.target.value)} className="mt-2 w-full border-b border-gold/50 bg-transparent px-0 py-3 text-sm normal-case tracking-normal outline-none focus:border-maroon" /></label><label className="mt-6 block text-xs font-semibold uppercase tracking-[.12em]">Your wish<textarea required value={message} onChange={e => setMessage(e.target.value)} rows={4} className="mt-2 w-full resize-none border-b border-gold/50 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-maroon" placeholder="Write something beautiful…" /></label><motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: .96 }} className="luxury-button mt-7">Add your wish</motion.button><p className="mt-4 text-[10px] leading-5 text-ink/45">Wishes are stored privately in this browser using localStorage.</p></motion.form>
        <div className="grid gap-3 sm:grid-cols-2"><AnimatePresence initial={false}>{wishes.length ? wishes.map(wish => <motion.article layout key={`${wish.date}-${wish.name}-${wish.message}`} initial={{ opacity: 0, scale: .8, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="border border-gold/35 bg-cream p-5"><p className="font-display text-lg italic leading-7 text-ink/80">“{wish.message}”</p><div className="mt-5 border-t border-gold/20 pt-4 text-[10px] uppercase tracking-[.16em] text-ink/45">{wish.name} · {wish.date}</div></motion.article>) : <motion.div key="empty" exit={{ opacity: 0 }} className="col-span-full flex min-h-56 items-center justify-center border border-dashed border-gold/40 p-8 text-center text-sm text-ink/45">Be the first to leave a wish.</motion.div>}</AnimatePresence></div>
      </div>
    </div>
  </section>
}
