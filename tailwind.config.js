/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "setmore-blue": "#1d90f5",
        "hover-blue": "#126ab8",
      },
      fontFamily: {
        euclid: ["Euclid Circular B", "Arial", "Helvetica", "sans-serif"],
        lato: ["Lato", "Arial", "Helvetica", "sans-serif"],
        inter: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
