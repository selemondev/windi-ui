/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", 'node_modules/@windi/ui-vue/dist/theme/*.{js,ts,json}'],
  theme: {
    extend: {},
  },
  plugins: [require('@windi-ui/tailwind-config/tailwind.config')],
};