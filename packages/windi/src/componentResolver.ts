import type { ComponentResolver } from 'unplugin-vue-components'

export function WindiUIComponentResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^W[A-Z]/))
        return { name, from: 'windi-vue' }
    },
  }
}
