/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      inset: {
        '-16':'-10rem',
        '-23':'-23.5rem'
      }
    },
  },
  plugins: [],
}