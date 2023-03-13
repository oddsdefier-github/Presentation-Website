/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./files/**/*.{html,js}",
    "./home.html",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   inter: "'Inter', sans-serif",
      // },
      colors: {
        symYellow: '#FFC247', 
        symYellow2: '#F5B534',
        bgPage: '#202125',
        mpGreen: '#cae962',
        csmOrange: '#ff6f00',
        btnPurple: '#4B4399',
      },
      
    },

    
  },
  plugins: [require('tailwindcss-font-inter')],
}
