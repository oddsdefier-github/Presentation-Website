/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./files/**/*.{html,js}",
    "./home.html",

  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        box1: '#47b0ff',
      },
    },

    
  },
  plugins: [],
}
