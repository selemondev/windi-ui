import { createApp } from 'vue'
import App from './App.vue'
import '@vue/repl/dist/style.css'
import "./assets/tailwind.css"
import '@unocss/reset/tailwind.css'
import 'uno.css'

import windiTheme from 'windi-vue/dist/theme/windiTheme'

import install from 'windi-vue'

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: 'repl',
}

const app = createApp(App)
app.use(install, windiTheme)
app.mount('#play_ground')