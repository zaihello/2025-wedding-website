/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //cursive自定義的類別名稱
        //Great Vibes: Google Fonts 的字體
        //cursive'是瀏覽器內建的通用字體
        cursive:['Great Vibes','cursive'],
      }
    },
  },
  plugins: [],
}

