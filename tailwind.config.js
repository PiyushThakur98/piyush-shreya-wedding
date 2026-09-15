/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F0E3',
        cream: '#FFF9EF',
        maroon: '#6E1F2E',
        wine: '#42131E',
        gold: '#B5965A',
        ink: '#291C1A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        italian: ['Italiana', '"Times New Roman"', 'serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 22px 70px rgba(41, 28, 26, 0.13)',
      },
    },
  },
  plugins: [],
}
