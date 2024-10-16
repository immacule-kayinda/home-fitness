/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    fontFamily: {
      urbanist: ['Urbanist', 'sans-serif']
    },
    extend: {
      colors:
        { background: "#4b4052", text: '#DFCBEB', front: "#FFBFFE", tab: "#5E4D67", 'tab-hover': "#66536F" },
    },
  },
  plugins: [],
}