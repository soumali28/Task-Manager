/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      green: "#16a34a",
      zinc: {
        400: "#a1a1aa",
        500: "#71717a",
        700: "#1f2937",
        900: "#18181b",
      },
      purple: {
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
      },
      pink: {
        600: "#db2777",
        700: "#ee062d",
      },
      rose: "#f43f5e",
    },
    extend: {},
  },
  plugins: [],
};
