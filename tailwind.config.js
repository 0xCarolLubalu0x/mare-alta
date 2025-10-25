/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        azulEscuro: '#26206c',
        azulClaro: '#136faf',
      },
    },
  },
  plugins: [],
}
