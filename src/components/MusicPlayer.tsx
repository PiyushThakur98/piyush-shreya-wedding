import { Music2, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  useEffect(() => { const a = audio.current; if (!a) return; const onEnd = () => setPlaying(false); a.addEventListener('ended', onEnd); return () => a.removeEventListener('ended', onEnd) }, [])
  const toggle = async () => { const a = audio.current; if (!a) return; if (playing) { a.pause(); setPlaying(false) } else { try { await a.play(); setPlaying(true) } catch { setPlaying(false) } } }
  return <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 border border-gold/60 bg-cream/95 px-2 py-2 shadow-luxury backdrop-blur-sm"><Music2 className="ml-1 h-4 w-4 text-gold" aria-hidden="true" /><button onClick={toggle} className="p-2 text-maroon hover:bg-ivory" aria-label={playing ? 'Pause wedding music' : 'Play wedding music'}>{playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button><audio ref={audio} preload="none" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_35a2c0d0c1.mp3?filename=indian-flute-ambient-11018.mp3" /></div>
}
