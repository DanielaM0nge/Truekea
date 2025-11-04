/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        'primary-light': '#FFA500',
        'primary-dark': '#E85D04',
      }
    },
  },
  plugins: [],
}