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
        "secondary-color": "#292929",
        "secondary-color-gradiant": "#393939",
        "red-gradiant": "#f92847",
        //grandiant white
        "gray-gradiant": "#BDC3C7",
        "gray-light-gradiant": "#E0E5E7",
        white: "#ffffff",
      },
      borderRadius: {
        popup: "12px",
      },
      dropShadow: {
        selected: ["0 1px 8px rgb(255, 238, 7)", "0 1px 1px rgb(255, 208, 21)"],
        logo: ["0 1px 1px rgba(255, 238, 7,15)", "0 1px 1px rgb(255, 208, 21)"],
        normal: ["0 1px 1px rgb(255, 238, 255)", "0 1px 1px rgb(255, 255, 7)"],
        mitical: ["0 1px 8px rgb(228, 21, 255)", "0 1px 1px rgb(165, 61, 249)"],
        legendary: [
          "0 2px 8px rgb(255, 55, 20)",
          "0 1px 8px rgb(249, 196, 61)",
        ],
      },
      fontSize: {
        "title-card": ["24px", { lineHeight: "32px" }],
        "subtitle-card": ["16px", { lineHeight: "20px" }],
        "litle-title-card": ["12px", { lineHeight: "20px" }],
        "content-card": ["14px", { lineHeight: "24px" }],
        menu: ["1em", { lineHeight: "16px" }],
        subtitle: ["2em", { lineHeight: "16px" }],
        contact: ["1.2em", { lineHeight: "16px" }],
        title: ["3.5em", { lineHeight: "24px" }],
      },
      fontFamily: {
        sans: [
          "Inter var, sans-serif",
          { fontFeatureSettings: '"cv11", "ss01"' },
        ],
        victor: "Victor Mono",
        manrope: "Manrope, sans-serif",
        chivo: "Chivo Mono, monospace",
      },
    },
  },
  plugins: [],
};
