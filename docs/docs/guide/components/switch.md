---
title: Switch
lang: en-US
---

# Switch

A Switch is an element that allows users to toggle between two states, typically representing binary options such as on/off, enabled/disabled, or true/false. It provides a visual indication of the current state and allows users to change that state by clicking or tapping on the toggle.

The `WSwitch` component is created using [@headlessui/vue's](https://headlessui.com/vue/switch) Switch component.

## Basic Usage

Use the `v-model` to make the `WSwitch` component reactive as shown below:

```js
<script setup>
import { ref } from 'vue'

const toggleSwitch = ref(false)
</script>

<template>
    <div>
        <WSwitch v-model="toggleSwitch" />
    </div>
</template>
```

## Disabled

You can disable the `WSwitch` component by using the `disabled` prop as shown below:

```js
<script setup>
import { ref } from 'vue'

const toggleSwitch = ref(false)
</script>

<template>
    <div>
        <WSwitch v-model="toggleSwitch" disabled />
    </div>
</template>
```

## Icon

You can use any icon from the [iconify](https://icones.netlify.app) library to set icons for various states such as on and off by using the `on-icon` prop and `off-icon` prop respectively as shown below:

```js
<script setup lang='ts'>
import { ref } from 'vue'

const toggleSwitch = ref(false)
</script>

<template>
    <div>
        <WSwitch v-model="toggleSwitch" on-icon="ph:moon" off-icon="ph:sun" />
    </div>
</template>
```

## Variants

You can customize the `WSwitch` component by using `variants` as shown below:

```js
<script setup>
import { ref } from 'vue'

const toggleSwitch = ref(false)
</script>

<template>
    <div class="flex space-x-4">
        <WSwitch v-model="toggleSwitch" :variants="{
            'my-variant': {
                switchActive: 'bg-yellow-500 dark:bg-yellow-400',
                switchIconOn: 'text-yellow-500 dark:text-yellow-400',
            },
        }" :variant="['my-variant']" on-icon="ph:moon" off-icon="ph:sun" />
        <WSwitch v-model="toggleSwitch" :variants="{
            'my-variant': {
                switchActive: 'bg-blue-500 dark:bg-blue-400',
                switchIconOn: 'text-blue-500 dark:text-blue-400',
            },
        }" :variant="['my-variant']" on-icon="ph:moon" off-icon="ph:sun" />
        <WSwitch v-model="toggleSwitch" :variants="{
            'my-variant': {
                switchActive: 'bg-green-500 dark:bg-green-400',
                switchIconOn: 'text-green-500 dark:text-green-400',
            },
        }" :variant="['my-variant']" on-icon="ph:moon" off-icon="ph:sun" />
        <WSwitch v-model="toggleSwitch" :variants="{
            'my-variant': {
                switchActive: 'bg-orange-500 dark:bg-orange-400',
                switchIconOn: 'text-orange-500 dark:text-orange-400',
            },
        }" :variant="['my-variant']" on-icon="ph:moon" off-icon="ph:sun" />
        <WSwitch v-model="toggleSwitch" :variants="{
            'my-variant': {
                switchActive: 'bg-red-500 dark:bg-red-400',
                switchIconOn: 'text-red-500 dark:text-red-400',
            },
        }" :variant="['my-variant']" on-icon="ph:moon" off-icon="ph:sun" />
    </div>
</template>
```

## Preset

```js
  WSwitch: {
    base: {
      root: 'relative inline-flex h-5 w-9 focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
      switchRounded: 'rounded-full',
      switchActive: 'bg-green-500 dark:bg-green-400',
      switchInActive: 'bg-gray-200 dark:bg-gray-700',
      switchContainer: 'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200',
      switchContainerActive: 'translate-x-4 rtl:-translate-x-4',
      switchContainerInActive: 'translate-x-0 rtl:-translate-x-0',
      switchIcon: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
      switchIconActive: 'opacity-100 ease-in duration-200',
      switchIconInActive: 'opacity-0 ease-out duration-100',
      switchIconOn: 'h-3 w-3 text-green-500 dark:text-green-400',
      switchIconOff: 'h-3 w-3 text-gray-400 dark:text-gray-500',
    },

    defaults: {
      root: 'relative inline-flex h-5 w-9 focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
      switchRounded: 'rounded-full',
      switchActive: 'bg-green-500 dark:bg-green-400',
      switchInActive: 'bg-gray-200 dark:bg-gray-700',
    },
  },
```