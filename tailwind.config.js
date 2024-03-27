/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        primary: '#fe3938',
        secondary: '#363383',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light'],
  },
}

