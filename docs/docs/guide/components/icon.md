---
title: Icon
lang: en-US
---

# Icon

Icons are used to visually represent objects or concepts and allow users to interact with them by clicking or tapping on them.

## Basic Usage

<demo src="../../components/Icon/iconBasic.vue" />

## Size

You can increase the size of the `WIcon` component by passing a size to the `size` prop as shown below:

<demo src="../../components/Icon/iconSize.vue" />

By default, the `WIcon` component's size is `base`

## Preset

```js
WIcon: {
    base: {
      'root': 'block cursor-pointer',
      'normal': 'text-base',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'base': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '6xl': 'text-6xl',
      '8xl': 'text-8xl',
    },

    variants: {
      default: {
        root: 'block cursor-pointer',
      },
    },
},
```
