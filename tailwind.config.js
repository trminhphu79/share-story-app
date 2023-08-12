/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      mobile: { 'min': '320px', 'max': '599px' },
      sm: { 'min': '600px', 'max': '959px' },
      md: { 'min': '960px', 'max': '1279px' },
      lg: { 'min': '1280px', 'max': '1439px' },
      xl: '1440px',

    }
  },
  darkMode: "class",
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('flowbite/plugin')
  ]
}