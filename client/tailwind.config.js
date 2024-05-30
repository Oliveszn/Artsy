/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      // sm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        priColor: "#f3f3f3",
        secColor: "#000000",
        textColor: "#292929",
        textColorAlt: "#333333",
        tetColor: "#616161;",
        btnColor: "#272727",
        btnColorAlt: "#4693ED",
        btnColorTet: "#3EA03B",
        btnColorSec: "#999EA5",
        linkColor: "#006CA2",
        overlay: "rgba(0, 0, 0, .7)",
      },
    },
    fontFamily: {
      Stix: ["STIX Two Text", "sans-serif"],
      Clash: ["Clash Display", "sans-serif"],
      Sat: ["Satoshi", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
