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
      colors:{
        setmore: '#1d90f5',
        setmoreText: '#3b4c66',
        setmoreHeading: '#142640'
      },
      fontFamily: {
        setmoreHeading: ['Euclid Circular B,Arial,Helvetica,sans-serif'],
        setmoreText: ['Lato,Arial,Helvetica,sans-serif']
      },
      flexGrow: {
        '1/3': '33.333333%',
        '2/3': '66.666667%',
      },
    },
  },
  plugins: [],
}
