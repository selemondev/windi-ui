# Installation

Add `Windi UI` to your project by running one of the following commands:

::: code-group
  ```bash [pnpm]
  pnpm add @windi-ui/vue
  ```
  ```bash [yarn]
  yarn add @windi-ui/vue
  ```
  ```bash [npm]
  npm install @windi-ui/vue
  ```
:::

## Usage

1. Add the Windi UI theme file in your tailwind.config.cjs file as shown below:

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "node_modules/@windi-ui/vue/dist/theme/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

```


### Component registration

- With Windi UI, you have the flexibility to register components precisely as you wish:

### Import All Components

- To import all the components provided by `Windi UI`, add `WindiUI` in your main entry file as shown below:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import windiTheme from '@windi-ui/vue/dist/theme/windiTheme'
import WindiUI from '@windi-ui/vue'

const app = createApp(App)
app.use(WindiUI, windiTheme)
app.mount('#app')
```

::: danger
Be warned. By doing this, you are importing all the components that are provided by Windi UI and in your final bundle all the components including the ones you didn't use will be bundled.
:::


### Individual Components with Tree Shaking

- Probably you might not want to globally register all the components but instead only import the components that you need. You can achieve this by doing the following: 

1. Import the `createWindiUI` option as well as the components you need as shown below:

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import windiTheme from '@windi-ui/vue/dist/theme/windiTheme'

import { WKbd, createWindiUI } from '@windi-ui/vue' // [!code ++]

import WindiUI from '@windi-ui/vue' // [!code --]

const app = createApp(App)

const UI = createWindiUI({ // [!code ++]
    prefix: 'T', // [!code ++]
    components: [WKbd], // [!code ++]
}) // [!code ++]

app.use(UI, windiTheme) // [!code ++]

app.use(WindiUI, windiTheme) // [!code --]

app.mount('#app')
```

2. Now you can use the component as shown below:

```js
<template>
  <div>
    <TKbd>K</TKbd>
  </div>
</template>

```

:::tip
The `prefix` option is only available for individual component imports.
:::


### Auto Imports with Tree Shaking

- **Windi UI** comes with an intelligent resolver that automatically imports only used components.

- This is made possible by leveraging a tool known as [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) which lets you auto import components on demand thus omitting import statements and still get the benefits of tree shaking.

- To achieve this you need to do the following: 

1. Install the `unplugin-vue-components` package by running one of the following commands:

::: code-group
  ```bash [pnpm]
  pnpm add -D unplugin-vue-components
  ```
  ```bash [yarn]
  yarn add -D unplugin-vue-components
  ```
  ```bash [npm]
  npm i -D unplugin-vue-components
  ```
:::

2. Head over to your `main.ts` or `main.js` file and set `registerComponents` to `false` as shown below:

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import windiTheme from '@windi-ui/vue/dist/theme/windiTheme'

import { WKbd, createWindiUI } from '@windi-ui/vue' // [!code --]

import { createWindiUI } from '@windi-ui/vue' // [!code ++]

import WindiUI from '@windi-ui/vue' // [!code --]

const app = createApp(App)

const UI = createWindiUI({ // [!code --]
    prefix: 'T', // [!code --]
    components: [WKbd], // [!code --]
}) // [!code --]


const UI = createWindiUI({ // [!code ++]
    registerComponents: false // [!code ++]
}) // [!code ++]

app.use(UI, windiTheme) // [!code ++]

app.use(WindiUI, windiTheme) // [!code --]

app.mount('#app')
```

3. Head over to your `vite.config.ts` or `vite.config.js` file and add the following:

```ts
// other imports
import { WindiUIComponentResolver } from '@windi-ui/vue'
import Components from "unplugin-vue-components/vite"

export default defineConfig({
  plugins: [
    // other plugins
    Components({
      resolvers: [
        WindiUIComponentResolver()
      ]
    }),
  ],
})

```

4. Now you can simply use any component that you want and it will be auto imported on demand ✨

```js
<template>
  <div>
    <WKbd>K</WKbd>
  </div>
</template>
```

🥳 Well done, you can now go ahead and build your web application with ease.