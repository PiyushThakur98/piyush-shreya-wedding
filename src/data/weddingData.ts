export type WeddingEvent = {
  id: string
  title: string
  eyebrow: string
  date: string
  time: string
  venue: string
  address: string
  description: string
  dressCode: string
}

export const weddingData = {
  couple: { groom: 'Piyush', bride: 'Shreya', full: 'Piyush & Shreya' },
  dateISO: '2026-12-11T18:00:00+05:30',
  dateLabel: '11 December 2026',
  city: 'Pitampura, Delhi',
  families: 'Your Families',
  hashtag: '#PiyushWedsShreya',
  blessing: 'With the blessings of our families, we invite you to witness the beginning of our forever.',
  invitation: 'Together with their families, Piyush & Shreya request the pleasure of your company as they celebrate love, laughter, and a lifetime together.',
  events: [
    { id: 'engagement', title: 'Engagement', eyebrow: 'The beginning of forever', date: '7th December 2026', time: '5:00 PM onwards', venue: 'Utsav Sadan', address: 'Kingsway Camp, GTB Nagar', description: 'Join us as we celebrate the promise of a beautiful life together.', dressCode: 'Festive / formal' },
    { id: 'haldi-mehndi', title: 'Haldi / Mehndi', eyebrow: 'A little colour, a lot of joy', date: '9th December 2026', time: '12:00 PM Haldi · 4:00 PM Mehndi', venue: 'A-1736 Greenfield Colony', address: 'Faridabad', description: 'An afternoon of haldi, henna, marigolds, music and easy laughter with our favourite people.', dressCode: 'Festive florals' },
    { id: 'sangeet', title: 'Sangeet', eyebrow: 'Music under the stars', date: '10th December 2026', time: '7:00 PM onwards', venue: 'A-1736 Greenfield Colony', address: 'Faridabad', description: 'An evening of family performances, old songs, new memories and a little dancing.', dressCode: 'Indian glam' },
  ] as WeddingEvent[],
  coupleImages: [
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', alt: 'Couple walking together outdoors' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85', alt: 'Wedding couple sharing a quiet moment' },
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85', alt: 'Bride and groom at a wedding celebration' },
  ],
  video: { title: 'Our little love story', embedUrl: 'https://www.youtube.com/embed/VIDEO_ID' },
  thingsToKnow: [
    { title: 'Wedding', body: '11th December 2026 · Golden Apple, Darbar Hall No. 2, Pitampura, Delhi' },
    { title: 'Contact', body: '9811587141 · 9811165025 · 9999016181 · 9650254118' },
    { title: 'A gentle reminder', body: 'Please arrive 30 minutes before each celebration. Come comfortable, come festive, come ready to celebrate.' },
  ],
}
