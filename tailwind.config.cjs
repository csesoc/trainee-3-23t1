/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#FFFFFF",
      "accent-1": "#FF5252",
      "accent-2": "#F45420",
      secondary: "#EAEAEA",
      text: "#121212",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      default: "2px 4px 32px rgba(155, 49, 49, 0.1)",
    },
    extend: {},
  },
  plugins: [],
};

module.exports = config;
