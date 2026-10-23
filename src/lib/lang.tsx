import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { weddingData } from '../data/weddingData'

const en = {
  data: weddingData,
  gate: { label: 'Wedding Invite', open: 'Open Invitation', sound: 'Turn your sound on for the full experience' },
  hero: { tagline: 'A celebration of love', scroll: 'Scroll to explore' },
  invite: { big: 'Invite You', with: 'with' },
  date: { eyebrow: 'A date to remember', title: 'Reveal the Date', sub: 'A little moment before the celebrations begin.', tap: 'Tap to reveal' },
  events: { eyebrow: 'Four chapters, one celebration', title: 'The Celebrations', map: 'View map', dress: 'Dress' },
  story: { eyebrow: 'Two lives, one story', title: ['Our', 'Story'], body: 'Somewhere between ordinary days and extraordinary laughter, we found a love that felt like home. This chapter is for the people who have cheered for us, carried us, and made our story possible.', closing: 'And now, we begin forever.' },
  countdown: { eyebrow: 'Until we say “I do”', title: 'Counting the moments', units: ['days', 'hours', 'minutes', 'seconds'] },
  info: { eyebrow: 'For a seamless celebration', title: 'Things to Know' },
  footer: { made: ['Made with', 'for a lifetime of memories.'], top: 'Back to top' },
  music: { play: 'Play wedding music', pause: 'Pause wedding music' },
}

// Hindi copy; venue names and addresses stay in English so they match Google Maps
const HI_EVENTS: Record<string, Partial<(typeof weddingData.events)[number]>> = {
  engagement: { title: 'सगाई', eyebrow: 'अटूट बंधन की शुरुआत', date: '7 दिसंबर 2026', time: 'सायं 5 बजे से', description: 'एक सुंदर जीवन के वचन के इस उत्सव में हमारे साथ शामिल हों।', dressCode: 'उत्सवी / औपचारिक' },
  'haldi-mehndi': { title: 'हल्दी / मेहंदी', eyebrow: 'थोड़ा रंग, ढेर सारी खुशियाँ', date: '9 दिसंबर 2026', time: 'हल्दी दोपहर 12 बजे · मेहंदी सायं 4 बजे', description: 'हल्दी, मेहंदी, गेंदे के फूल, संगीत और अपनों के साथ हँसी-खुशी भरी दोपहर।', dressCode: 'फूलों भरे उत्सवी परिधान' },
  sangeet: { title: 'संगीत', eyebrow: 'तारों भरी रात में संगीत', date: '10 दिसंबर 2026', time: 'सायं 7 बजे से', description: 'पारिवारिक प्रस्तुतियों, पुराने गीतों, नई यादों और थोड़े नृत्य की शाम।', dressCode: 'भारतीय परिधान' },
  wedding: { title: 'शुभ विवाह', eyebrow: 'दो दिल, एक जीवन', date: '11 दिसंबर 2026', time: 'सायं 6 बजे से', description: 'फेरे, वचन और जीवनभर का उत्सव — आपकी उपस्थिति हमारे लिए अनमोल है।', dressCode: 'पारंपरिक परिधान' },
}

const hi: typeof en = {
  data: {
    ...weddingData,
    couple: { groom: 'पीयूष', bride: 'श्रेया', full: 'पीयूष एवं श्रेया' },
    dateLabel: '11 दिसंबर 2026',
    city: 'पीतमपुरा, दिल्ली',
    families: 'अत्यंत हर्ष के साथ',
    hosts: 'श्रीमती रेखा वर्मा एवं श्री राकेश वर्मा',
    blessing: 'ईश्वर की कृपा और बड़ों के आशीर्वाद से, दो हृदय अपने अनंत सफ़र की शुरुआत कर रहे हैं।',
    invitation: 'अपने सुपुत्र के शुभ विवाह के मंगल अवसर पर आपको सपरिवार आमंत्रित करते हैं',
    lineage: [
      { role: 'वर', name: 'पीयूष', lines: ['सुपौत्र श्रीमती किरण देवी एवं स्व. ठाकुर जगदीश प्रसाद वर्मा'] },
      { role: 'वधू', name: 'श्रेया', lines: ['सुपुत्री श्रीमती भानु ग्रोवर एवं श्री अमित ग्रोवर', 'सुपौत्री श्रीमती विनय ग्रोवर एवं स्व. श्री हरीश ग्रोवर'] },
    ],
    events: weddingData.events.map(event => ({ ...event, ...HI_EVENTS[event.id] })),
    thingsToKnow: [
      { ...weddingData.thingsToKnow[0], title: 'संपर्क' },
      { ...weddingData.thingsToKnow[1], title: 'विनम्र निवेदन', body: 'कृपया प्रत्येक कार्यक्रम में 30 मिनट पूर्व पधारें। सहज रहें, उत्सव के रंग में रंगें।' },
    ],
  },
  gate: { label: 'विवाह निमंत्रण', open: 'निमंत्रण खोलें', sound: 'पूर्ण अनुभव के लिए आवाज़ चालू करें' },
  hero: { tagline: 'प्रेम का उत्सव', scroll: 'आगे देखें' },
  invite: { big: 'सादर आमंत्रण', with: 'संग' },
  date: { eyebrow: 'यादगार तिथि', title: 'शुभ तिथि', sub: 'उत्सव शुरू होने से पहले एक छोटा सा पल।', tap: 'देखने के लिए छुएं' },
  events: { eyebrow: 'चार अध्याय, एक उत्सव', title: 'मांगलिक कार्यक्रम', map: 'नक्शा देखें', dress: 'परिधान' },
  story: { eyebrow: 'दो जीवन, एक कहानी', title: ['हमारी', 'कहानी'], body: 'साधारण दिनों और असाधारण हँसी के बीच कहीं, हमें ऐसा प्रेम मिला जो घर जैसा लगा। यह अध्याय उन सबके लिए है जिन्होंने हमारा साथ दिया, हमें संभाला और हमारी कहानी को संभव बनाया।', closing: 'और अब, हम अनंत सफ़र शुरू करते हैं।' },
  countdown: { eyebrow: 'शुभ घड़ी तक', title: 'पलों की गिनती', units: ['दिन', 'घंटे', 'मिनट', 'सेकंड'] },
  info: { eyebrow: 'सुगम उत्सव के लिए', title: 'आवश्यक जानकारी' },
  footer: { made: ['जीवनभर की यादों के लिए', 'सहित सजाया गया।'], top: 'ऊपर जाएं' },
  music: { play: 'संगीत चलाएं', pause: 'संगीत रोकें' },
}

type Lang = 'en' | 'hi'
const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({ lang: 'en', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  // drives the html[lang=hi] CSS that removes letter-spacing (it breaks Devanagari conjuncts)
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useT = () => (useContext(LangContext).lang === 'hi' ? hi : en)

export function LangToggle() {
  const { lang, setLang } = useContext(LangContext)
  return <div className="fixed right-3 top-3 z-[70] flex overflow-hidden rounded-full border border-gold/60 bg-cream/90 text-[11px] font-semibold text-maroon shadow-luxury backdrop-blur" role="group" aria-label="Language">
    {(['en', 'hi'] as const).map(code => <button key={code} onClick={() => setLang(code)} aria-pressed={lang === code} className={`px-3 py-1.5 transition ${lang === code ? 'bg-maroon text-cream' : 'hover:bg-ivory'}`}>{code === 'en' ? 'EN' : 'हिं'}</button>)}
  </div>
}

// split into user-perceived characters so Devanagari matras stay attached to their letters
export const graphemes = (text: string) => [...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text)].map(s => s.segment)
