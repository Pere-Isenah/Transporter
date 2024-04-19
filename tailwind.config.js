/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "logo-blue": "#1A2E49",
        "logo-brown": "#B19768",
        "logo-cyan": "#B3DAF6",
      }
    },
  },
  plugins: [],
}