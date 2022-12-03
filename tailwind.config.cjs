/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1280px',
      xl: '2560px',
    },
    colors: {
      // Color palette
      'black': '#252422',
      'secondary-black': '#403d39',
      'gray': '#ccc5b9',
      'white': '#FAFAFA',
      'secondary-white': '#f1faee',
      'green': '#38b000',
    },
    fontFamily:{
      Merriweather:['Merriweather', 'serif'],
      Lato:['Lato', 'sans-serif']
    },
    borderRadius: {
      'none': '0',
      'sm': '8px',
      'md': '12px',
      'lg': '16px',
      'full': '50%',
    },
    boxShadow:{
      'sm': '0 2px 4px 0 rgb(0 0 0 / 0.45)',
      'md': '3px 4px 6px 1px rgb(0 0 0 / 0.45)',
      'md2': '0 4px 6px 1px rgb(0 0 0 / 0.35)',
      'lg': '6px 10px 15px -3px rgb(0 0 0 / 0.45)',
      'xl': '9px 20px 25px -5px rgb(0 0 0 / 0.45)',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
