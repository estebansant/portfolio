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
    spacing: {
      px: '1px',
    },
    borderRadius: {
      'none': '0',
      'sm': '8px',
      DEFAULT: '12px',
      'lg': '16px',
      'full': '50%',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
