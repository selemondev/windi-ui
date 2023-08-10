import "./assets/css/tailwind.css"
import { createApp } from 'vue'
import App from './App.vue'
import install from "windi-vue"
import config from "windi-vue/dist/theme/windiTheme"
const app = createApp(App)
app.use(install, config)
app.mount('#app')
