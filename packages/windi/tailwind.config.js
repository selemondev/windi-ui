// module.exports = require('@windi-ui/tailwind-config/tailwind.config')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/windi-vue/dist/theme/*.{js,ts,json}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      fontFamily: {
        Roboto: 'Roboto',
      },
    },
  },
  plugins: [],
}
