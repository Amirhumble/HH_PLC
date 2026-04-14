/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(160, 193, 114)",
          dark: "rgb(130, 160, 90)",
          light: "rgba(160, 193, 114, 0.15)",
        },
        secondary: "rgb(45, 42, 38)",
        accent: {
          DEFAULT: "rgb(31, 41, 55)", // Dark gray instead of reddish brown
          light: "rgb(55, 65, 81)",
        },
        background: "rgb(255, 255, 255)",
        surface: "rgb(248, 249, 250)",
        navy: "rgb(19, 36, 55)",
      },
    },
  },
  plugins: [],
}
