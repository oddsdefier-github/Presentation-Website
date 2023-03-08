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
        
        border2: '#FFC247', 
        border3: '#ff7a60',
        cardText1: '#5C5885',
        cardText2: '#F5B534',
        cardText3: '#ff7b61',
       
        btnHover2: '#FDC453',
        btnHover3: '#F9A998',
        bgPage: '#202125',
        mpGreen: '#cae962',
        csmOrange: '#ff6f00',
        btnPurple: '#4B4399',
      },
      backgroundImage: {
        'mob-bg': "url('./images/mob-bg.jpg')",
      },
    },

    
  },
  plugins: [],
}
