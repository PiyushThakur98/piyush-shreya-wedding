import imageOne from './IMG_1494.jpeg'
import imageTwo from './IMG_1691.jpeg'
import imageThree from './Snapchat-268013077.jpg'

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
  locationLink?: string
}

export type CoupleImage = {
  src: string
  alt: string
  position?: string
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
  locationLink: 'https://maps.app.goo.gl/vgS2ECLfFJZhjhKm7',
  contactLink: 'tel:+919650017141',
  mapEmbedUrl: 'https://www.google.com/maps?q=Golden%20Apple%20Darbar%20Hall%20No.%202%20Pitampura%20Delhi&output=embed',
  events: [
    { id: 'engagement', title: 'Engagement', eyebrow: 'The beginning of forever', date: '7th December 2026', time: '5:00 PM onwards', venue: 'Utsav Sadan', address: 'Kingsway Camp, GTB Nagar', description: 'Join us as we celebrate the promise of a beautiful life together.', dressCode: 'Festive / formal', locationLink: 'https://maps.app.goo.gl/y3T3uKEx9L4Dj4pX6' },
    { id: 'haldi-mehndi', title: 'Haldi / Mehndi', eyebrow: 'A little colour, a lot of joy', date: '9th December 2026', time: '12:00 PM Haldi · 4:00 PM Mehndi', venue: 'A-1736 Greenfield Colony', address: 'Faridabad', description: 'An afternoon of haldi, henna, marigolds, music and easy laughter with our favourite people.', dressCode: 'Festive florals', locationLink: 'https://maps.app.goo.gl/3zyXp9ZMvwjyb8Cp9' },
    { id: 'sangeet', title: 'Sangeet', eyebrow: 'Music under the stars', date: '10th December 2026', time: '7:00 PM onwards', venue: 'A-1736 Greenfield Colony', address: 'Faridabad', description: 'An evening of family performances, old songs, new memories and a little dancing.', dressCode: 'Indian glam', locationLink: 'https://maps.app.goo.gl/3zyXp9ZMvwjyb8Cp9' },
  ] as WeddingEvent[],
  coupleImages: [
    { src: imageOne, alt: 'Couple photo 1', position: 'center 28%' },
    { src: imageTwo, alt: 'Couple photo 2', position: 'center 20%' },
    { src: imageThree, alt: 'Couple photo 3', position: 'center 32%' },
  ] as CoupleImage[],
  thingsToKnow: [
    { title: 'Wedding', body: '11th December 2026 · Golden Apple, Darbar Hall No. 2, Pitampura, Delhi', link: 'https://maps.app.goo.gl/vgS2ECLfFJZhjhKm7', linkLabel: 'View location' },
    { title: 'Contact', body: '9811587141 · 9811165025 · 9999016181 · 9650254118 · 9650017141', link: 'tel:+919650017141', linkLabel: 'Call 9650017141' },
    { title: 'A gentle reminder', body: 'Please arrive 30 minutes before each celebration. Come comfortable, come festive, come ready to celebrate.' },
  ],
}
