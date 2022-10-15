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
      },
    },
  },
  plugins: [],
};
