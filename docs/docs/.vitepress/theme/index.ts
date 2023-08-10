// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
import Theme from 'vitepress/theme'
// import './style.css'
import './overrides.css'
import DemoBlock from '../components/demo-block'
import "./rainbow.css"
import "./style.css"
import './tailwind.css'
import 'uno.css'
import windiTheme from 'windi-vue/dist/theme/windiTheme'
import WindiUI from 'windi-vue'
let homePageStyle: HTMLStyleElement | undefined
export default {
  extend: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', DemoBlock)
    app.use(WindiUI, windiTheme)
    if (typeof window === 'undefined')
      return

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      { immediate: true },
    )
  },
}

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle)
      return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  }
  else {
    if (!homePageStyle)
      return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}