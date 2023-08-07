/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: {'min': '320px', 'max': '599px'},
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px'
    }
  },
  darkMode: "class",
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
  ]
}