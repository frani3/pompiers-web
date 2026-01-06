/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bombero-red': '#D61F26',
        'bombero-blue': '#0E1B3A'
      }
    },
  },
  plugins: [],
}