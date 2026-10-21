import { motion } from 'framer-motion'
import { Music2, Pause, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import { subscribe, toggle } from '../lib/music'

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  useEffect(() => subscribe(setPlaying), [])
  return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4 }} className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-gold/60 bg-cream/95 py-1.5 pl-3 pr-1.5 shadow-luxury backdrop-blur-sm">
    <motion.span animate={playing ? { rotate: 360 } : { rotate: 0 }} transition={playing ? { repeat: Infinity, duration: 6, ease: 'linear' } : { duration: .4 }}><Music2 className="h-4 w-4 text-gold" aria-hidden="true" /></motion.span>
    <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
      {[0, 1, 2, 3].map(i => <motion.span key={i} className="w-[3px] rounded-full bg-maroon/70" animate={playing ? { height: ['30%', '100%', '45%', '80%', '30%'] } : { height: '30%' }} transition={playing ? { repeat: Infinity, duration: 1 + i * .15, ease: 'easeInOut', delay: i * .1 } : {}} />)}
    </span>
    <button onClick={() => void toggle()} className="rounded-full bg-maroon p-2 text-cream transition hover:bg-wine" aria-label={playing ? 'Pause wedding music' : 'Play wedding music'}>{playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button>
  </motion.div>
}
