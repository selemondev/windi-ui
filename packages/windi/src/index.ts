import type { App, defineComponent } from 'vue'
import './assets/css/tailwind.css'
import Alert from './components/Alert/WAlert.vue'
import AlertDescription from './components/Alert/WAlertDescription.vue'
import Avatar from './components/Avatar/WAvatar.vue'
import Icon from './components/Icon/WIcon.vue'
import type { WindiUIConfiguration } from './Types/variant'
import AvatarGroup from './components/Avatar/WAvatarGroup.vue'
import windiTheme from './theme/windiTheme'

const components: Record<string, ReturnType<typeof defineComponent>> = {
  Alert,
  AlertDescription,
  Icon,
  Avatar,
  AvatarGroup,
}

function install(app: App, configuration: WindiUIConfiguration) {
  for (const component in components)
    app.component(components[component].name, components[component])
  app.provide('config', configuration)
}

export default { install, windiTheme }

export { default as Alert } from './components/Alert'
export { default as AlertDescription } from './components/Alert'
export { default as Icon } from './components/Icon'
export { default as Avatar } from './components/Avatar'
export { default as AvatarGroup } from './components/Avatar'
