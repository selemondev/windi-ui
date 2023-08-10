module.exports = {
  content: ['./docs/.vitepress/**/*.{js,ts,vue}', './components/**/*.{js,ts,vue,md}', './src/**/*.{js,ts,vue}', 'node_modules/@windi/ui-vue/dist/theme/*.{js,ts,json}'],
  plugins: [],
  darkMode: 'class',
  theme: {
    extends: {
      fontFamily: {
        Roboto: 'Roboto'
      }
    }
  },
}
