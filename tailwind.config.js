/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#2a3447',
        soft: '#384256',
        dark: '#222b3c',
        textMain: 'white',
        textSoft: '#ddd',
        textDark:'#2a3447'
      }
    },
  },
  plugins: [],
}