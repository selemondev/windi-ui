import type { App } from 'vue'
import './assets/css/tailwind.css'
import type { WindiUIConfiguration } from './Types/variant'

const defaultOptions: WindiUIOptions = {
  prefix: 'W',
  registerComponents: true,
}

export interface WindiUIOptions {
  prefix?: string
  components?: any
  theme?: any
  registerComponents?: boolean
}

function create(createOptions: WindiUIOptions = {}) {
  const install = (app: App, installOptions: WindiUIConfiguration) => {
    const options = {
      ...defaultOptions,
      ...createOptions,
      ...installOptions,
    }
    if (options.registerComponents) {
      if (options.components) {
        options.components.forEach((component: any) => {
          const name = component.name.startsWith('W') ? component.name.slice(1) : component.name

          app.component(`${options.prefix}${name}`, component)
        })
      }
    }
    app.provide('config', installOptions)
  }

  return {
    install,
  }
}

export default create
