/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "Arial", "Helvetica", "sans-serif"],
        Euclid: ["Euclid Circular B", "Arial", "Helvetica", "sans-serif"],
        Inter:"Inter,Arial,Helvetica,sans-serif"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xl:['38px', {
        lineHeight: '48px',
          fontWeight: '600',
      }]
      },
      colors: {
        blueDot:'#1d90f5'
      },
    },
    boxShadow: {
      inputShadow:"0 1px 2px 0 rgba(48,58,71,.2), 0 1px 3px 0 rgba(48,58,71,.1)"
    }
  },
  plugins: [],
}
