/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        screen:"#F5F5F6",
        visa:'#40424A',
        button:'#2D7AEE',
        card:'#3B3C44',
        cart:'#8D8F97',
        title:'#81838B'
      },
    },
  },
  plugins: [],
}