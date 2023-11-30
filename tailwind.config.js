/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: { max: "761px" },
      lg: { max: "1199px" },
      'sm-min':{min:'200px'},
      'md-min':{min:'761px'},
      'lg-min':{min:'1199px'},
      'video-screen':{min:'761px',max:'1156px'}
    },
    extend: {
      aspectRatio: {
        '140/93': '140/93'
      },
      fontFamily: {
        euclid: ['Euclid Circular B','Arial','Helvetica','sans-serif'],
        lato: ["Lato", "Arial", "Helvetica", "sans-serif"],
        inter:['Inter','Arial','Helvetica','sans-serif']
      },
      spacing: {
        22: "88px",
        18: "72px",
        30: "120px",
      },
      fontSize: {
        xl: "2.375rem",
      },
      colors: {
        dotColor: "#1D90F6",
        'btn-bg':'#1d90f5',
        'main-heading':'#142640',
        'span-color':'#8996a3',
        'dull-grey':'#f5f8fa',
        'blue-grey':'#edf0f2'
      },
      lineHeight: {
        'extra-lose':'64px'
      }
    },
  },
  plugins: [],
};
