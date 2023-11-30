/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sm-brand': '#1d90f5',
        'nav-items': '#556270',
        'light-blue-grey': '#edf0f2'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        euclid: ['Euclid Circular B', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
