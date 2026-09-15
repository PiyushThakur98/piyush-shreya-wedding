import { useState } from 'react'
import type { FormEvent } from 'react'
import { Check, X } from 'lucide-react'

type Attendance = 'yes' | 'no' | null
export function RSVP() {
  const [attendance, setAttendance] = useState<Attendance>(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', guests: '1', note: '' })
  const submit = (e: FormEvent) => { e.preventDefault(); if (!attendance || !form.name.trim() || !form.email.trim()) return; setSent(true) }
  return <section id="rsvp" className="bg-cream">
    <div className="section-shell">
      <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Kindly respond</p><h2 className="display mt-3 text-4xl text-maroon sm:text-6xl">Will you join us?</h2><p className="mt-5 text-sm leading-7 text-ink/60">Your presence is the most precious gift. Please let us know so we can make every little detail count.</p></div>
      {!sent ? <form onSubmit={submit} className="mx-auto mt-10 max-w-2xl border border-gold/40 bg-ivory p-5 sm:p-8">
        <fieldset><legend className="eyebrow">Your answer</legend><div className="mt-4 grid grid-cols-2 gap-3">
          <button type="button" onClick={() => setAttendance('yes')} aria-pressed={attendance === 'yes'} className={`flex items-center justify-center gap-2 border p-4 text-xs font-semibold uppercase tracking-[.15em] transition ${attendance === 'yes' ? 'border-maroon bg-maroon text-white' : 'border-gold/40 text-ink hover:bg-white'}`}><Check className="h-4 w-4" /> Joyfully yes</button>
          <button type="button" onClick={() => setAttendance('no')} aria-pressed={attendance === 'no'} className={`flex items-center justify-center gap-2 border p-4 text-xs font-semibold uppercase tracking-[.15em] transition ${attendance === 'no' ? 'border-maroon bg-maroon text-white' : 'border-gold/40 text-ink hover:bg-white'}`}><X className="h-4 w-4" /> With love, no</button>
        </div></fieldset>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-semibold uppercase tracking-[.12em]">Name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-2 w-full border-b border-gold/50 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-maroon" placeholder="Your name" /></label>
          <label className="text-xs font-semibold uppercase tracking-[.12em]">Email<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-2 w-full border-b border-gold/50 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-maroon" placeholder="you@example.com" /></label>
          <label className="text-xs font-semibold uppercase tracking-[.12em]">Guests<select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="mt-2 w-full border-b border-gold/50 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none"><option>1</option><option>2</option><option>3</option><option>4</option></select></label>
          <label className="text-xs font-semibold uppercase tracking-[.12em]">Note (optional)<input value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} className="mt-2 w-full border-b border-gold/50 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-maroon" placeholder="A little note" /></label>
        </div>
        <button className="luxury-button mt-8 w-full sm:w-auto" disabled={!attendance}>{attendance ? 'Send RSVP' : 'Choose an answer'}</button>
      </form> : <div className="mx-auto mt-10 max-w-xl border border-gold/40 p-10 text-center"><div className="font-display text-4xl text-maroon">Thank you, {form.name.split(' ')[0]}.</div><p className="mt-4 text-sm leading-7 text-ink/60">Your RSVP has been recorded for this invitation. We cannot wait to celebrate together.</p><button onClick={() => setSent(false)} className="outline-button mt-6">Edit RSVP</button></div>}
    </div>
  </section>
}
