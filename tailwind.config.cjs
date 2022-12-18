/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,jsx,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#181818",
        "secondary-color": "#34495E",
        "secondary-color-gradiant": "#456B91",
        //grandiant white
        "gray-gradiant": "#BDC3C7",
        "gray-light-gradiant": "#E0E5E7",
        white: "#ffffff",
      },
      borderRadius: {
        popup: "12px",
      },
      fontSize: {
        "title-card": ["24px", { lineHeight: "32px" }],
        "subtitle-card": ["16px", { lineHeight: "20px" }],
        "litle-title-card": ["14px", { lineHeight: "20px" }],
        "content-card": ["14px", { lineHeight: "24px" }],
      },
      fontFamily: {
        sans: [
          "Inter var, sans-serif",
          { fontFeatureSettings: '"cv11", "ss01"' },
        ],
        victor: "Victor Mono",
        manrope: "Manrope, sans-serif",
      },
    },
  },
  plugins: [],
};
