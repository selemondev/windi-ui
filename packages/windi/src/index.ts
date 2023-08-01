import type { App, defineComponent } from 'vue'
import './assets/css/tailwind.css'
import Alert from './components/Alert/WAlert.vue'
import AlertDescription from './components/Alert/WAlertDescription.vue'
import Avatar from './components/Avatar/WAvatar.vue'
import Icon from './components/Icon/WIcon.vue'
import type { WindiUIConfiguration } from './Types/variant'
import AvatarGroup from './components/Avatar/WAvatarGroup.vue'
import Badge from './components/Badge/WBadge.vue'
import Button from './components/Button/WButton.vue'
import ButtonGroup from './components/Button/WButtonGroup.vue'
import Accordion from './components/Accordion/WAccordion.vue'
import AccordionItem from './components/Accordion/WAccordionItem.vue'
import Kbd from './components/Kbd/WKbd.vue'
import Input from './components/Input/WInput.vue'
import Checkbox from './components/Checkbox/WCheckbox.vue'
import Divider from './components/Divider/WDivider.vue'
import Switch from './components/Switch/WSwitch.vue'
import Tag from './components/Tag/WTag.vue'
import windiTheme from './theme/windiTheme'
import Modal from './components/Modal/WModal.vue'

const components: Record<string, ReturnType<typeof defineComponent>> = {
  Accordion,
  AccordionItem,
  Alert,
  AlertDescription,
  Icon,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  ButtonGroup,
  Kbd,
  Input,
  Checkbox,
  Divider,
  Switch,
  Tag,
  Modal,
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
export { default as Badge } from './components/Badge'
export { default as Button } from './components/Button'
export { default as ButtonGroup } from './components/Button'
export { default as Accordion } from './components/Accordion'
export { default as AccordionItem } from './components/Accordion'
export { default as Kbd } from './components/Kbd'
export { default as Input } from './components/Input'
export { default as Checkbox } from './components/Checkbox'
export { default as Divider } from './components/Divider'
export { default as Switch } from './components/Switch'
export { default as Tag } from './components/Tag'
export { default as Modal } from './components/Modal'
