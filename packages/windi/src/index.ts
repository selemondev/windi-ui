import type { App, defineComponent } from 'vue'
import './assets/css/tailwind.css'
import Alert from './components/Alert/WAlert.vue'
import AlertDescription from './components/Alert/WAlertDescription.vue'
import Icon from './components/Icon/WIcon.vue'
import type { WindiUIConfiguration } from './Types/variant'
import windiTheme from './theme/windiTheme'

const components: Record<string, ReturnType<typeof defineComponent>> = {
  Alert,
  AlertDescription,
  Icon,
}

function install(app: App, configuration: WindiUIConfiguration) {
  for (const component in components)
    app.component(components[component].name, components[component])
  // app.component(Alert.name, Alert)
  // app.component(AlertDescription.name, AlertDescription)
  // app.component(Icon.name, Icon)
  app.provide('config', configuration)
}

export default { install, windiTheme }

export { default as Alert } from './components/Alert'
export { default as AlertDescription } from './components/Alert'
export { default as Icon } from './components/Icon'
