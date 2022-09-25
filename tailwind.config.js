/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'principal-dark':'#282828',
        'hover-dark': '#404040',
        'principal':'#E8F9FD',
        'text-dark-h2':'#FFF',
        'text': '#707070',
        'star': '#F0A800',
        'text-dark': '#b3b3b3'

      },
      spacing:{
        'navbar':'8.3%'
      },
      fontFamily:{
        'oswald' : ['Oswald', 'Georgia'],
      },
    },
  },
  plugins: [],
}