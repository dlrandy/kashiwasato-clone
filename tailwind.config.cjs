/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        llg: '980px',
        xlg: '1190px',
        xll: '1365px',
      }
    },
  },
  plugins: [],
}
