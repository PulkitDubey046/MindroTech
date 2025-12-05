/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPink: '#ff007b',
        brandOrange: '#ff8a00'
      }
    }
  },
  plugins: []
}
