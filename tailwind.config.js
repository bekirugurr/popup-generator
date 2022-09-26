/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prime-violet': '#7D4AEA',
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
