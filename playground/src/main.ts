import { createApp } from 'vue'
import App from './App.vue'
import '@vue/repl/dist/style.css'
import "./assets/tailwind.css"
import install from "@selemondev/windi-ui"
import config from "@selemondev/windi-ui/dist/theme/windiTheme"
import '@unocss/reset/tailwind.css'
// import 'onu-ui/dist/style.css'
import 'uno.css'
import "../node_modules/@selemondev/windi-ui/dist/style.css"

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: 'repl',
}

const app = createApp(App)
app.use(install, config)
app.mount('#play_ground')