/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ["var(--color-primary)"],
        secondary: ["var(--color-secondary)"],
        text: ["var(--color-text)"],
      },
      fontFamily: {
        betterTime: ["var(--font-better-times)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
