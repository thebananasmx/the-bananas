
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bananas: {
          DEFAULT: "#FFE000", // Amarillo vibrante solicitado
          black: "#000000",
          zinc: {
            400: "#A1A1AA",
          }
        }
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
