module.exports = {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'pupylinux': ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
