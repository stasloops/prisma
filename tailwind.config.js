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
        second_bg: '#212121'
      },
      fontSize: {
        title: '1.5rem',
        title_sm: '1.15rem',
      },
    },
  },
  plugins: [],
}

