/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "2160px",
    },
    colors: {
      background: "#FFFFFF",
      "accent-1": "#FF5252",
      "light-accent-1": "hsl(0, 100%, 66%, 0.6)",
      "accent-2": "#F45420",
      secondary: "#EAEAEA",
      text: "#121212",
      transparent: "hsl(0, 0%, 0%, 0.0)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      default: "2px 4px 32px rgba(155, 49, 49, 0.1)",
      "default-solid": "8px 8px 0px #FF5252",
    },
    extend: {},
  },
  plugins: [],
};

module.exports = config;
