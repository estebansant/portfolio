/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Build your palette here
      black: '#252422',
      secondary_black: '#403d39',
      gray: '#ccc5b9',
      white: '#FAFAFA',
      secondary_white: '#f1faee',
      green: '#38b000',
    },
    extend: {},
  },
  plugins: [],
}
