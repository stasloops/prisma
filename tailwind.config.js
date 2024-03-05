/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5dcabd',
        primary_bg: '#171717',
        second_bg: '#212121',
        red: '#ef4444',
        green: '#4ade80'
      },
      fontSize: {
        title: '1.5rem',
        title_sm: '1.15rem',
      },
    },
  },
  plugins: [],
}

