import "./assets/css/tailwind.css"
import { createApp } from 'vue'
import App from './App.vue'
import install from "windi-ui"
import config from "windi-ui/dist/theme/windiTheme"
import myTheme from "./theme/myTheme"
const app = createApp(App)
app.use(install, config)
app.mount('#app')
