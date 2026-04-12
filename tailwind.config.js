/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(160, 193, 114)",
        secondary: "rgb(123, 116, 107)",
        accent: "rgb(63, 27, 27)",
        background: "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
}
