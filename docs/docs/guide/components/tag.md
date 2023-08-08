---
title: Tag
lang: en-US
---

# Tag

A tag is an element used in user interfaces to represent and display tags or labels associated with certain items or categories.

## Basic Usage

You can use the `value` prop to set the text of the Button as shown below with various variants:

<demo src="../../components/Tag/tagBasic.vue" />

## Theme

The `WTag` component comes with various themes such as light, outline and dashed as demonstrated below:

### Light

You can set the `light` theme to the variants as shown below:

<demo src="../../components/Tag/tagLight.vue" />

### Outline

You can set the `outline` theme to the variants as shown below:

<demo src="../../components/Tag/tagOutline.vue" />

### Dashed

You can set the `dashed` theme to the variants as shown below:

<demo src="../../components/Tag/tagDashed.vue" />

## Rounded

You can also round the borders of the `WTag` component by using the `rounded` prop as shown below:

<demo src="../../components/Tag/tagRounded.vue" />

By default, the roundedness of the `WTag` component is set to `md`.

## Closable

You can set the `closable` prop and an event to remove the `WTag` component as shown below:

<demo src="../../components/Tag/tagClosable.vue" />

## Preset

```js
  WTag: {
    base: {
      root: 'flex justify-between items-center text-xs px-2 space-x-3 cursor-pointer py-1 text-white',
      tagCloseIcon: 'w-3 h-3 rounded-md block transition duration-200 ease-in',
      tagRounded: {
        'xs': 'rounded-xs',
        'sm': 'rounded-sm',
        'md': 'rounded-md',
        'lg': 'rounded-lg',
        'xl': 'rounded-xl',
        '2xl': 'rounded-2xl',
        'full': 'rounded-full',
      },
    },
    variants: {
      'default': {
        root: 'bg-yellow-500 text-white',
      },
      'default-light': {
        root: [
          'bg-yellow-100 dark:bg-yellow-500/20 dark:text-yellow-500 text-yellow-800 duration-200 ease-in',
        ],
      },
      'default-dashed': {
        root: [
          'border border-dashed border-yellow-500 text-yellow-500 duration-200 ease-in',
        ],
      },
      'default-outline': {
        root: [
          'border border-yellow-500 text-yellow-500 duration-200 ease-in',
        ],
      },
      'primary': {
        root: 'bg-blue-500 text-white',
      },
      'primary-light': {
        root: [
          'bg-blue-100 dark:bg-blue-500/20 dark:text-blue-500 text-blue-800 duration-200 ease-in',
        ],
      },

      'primary-outline': {
        root: [
          'border border-blue-500 text-blue-500 duration-200 ease-in',
        ],
      },

      'primary-dashed': {
        root: [
          'border border-dashed border-blue-500 text-blue-500 duration-200 ease-in',
        ],
      },
      'success': {
        root: 'bg-green-500 text-white',
      },

      'success-light': {
        root: [
          'bg-green-100 dark:bg-green-500/20 dark:text-green-500 text-green-800 duration-200 ease-in',
        ],
      },

      'success-outline': {
        root: [
          'border border-green-500 text-green-500 duration-200 ease-in',
        ],
      },

      'success-dashed': {
        root: [
          'border border-dashed border-green-500 text-green-500 duration-200 ease-in',
        ],
      },
      'warning': {
        root: 'bg-orange-500 text-white',
      },
      'warning-light': {
        root: [
          'bg-orange-100 dark:bg-orange-500/20 dark:text-orange-500 text-orange-800 duration-200 ease-in',
        ],
      },
      'warning-outline': {
        root: [
          'border border-orange-500 text-orange-500 duration-200 ease-in',
        ],
      },
      'warning-dashed': {
        root: [
          'border border-dashed border-orange-500 text-orange-500 duration-200 ease-in',
        ],
      },
      'danger': {
        root: 'bg-red-500 text-white',
      },
      'danger-light': {
        root: [
          'bg-red-100 dark:bg-red-500/20 dark:text-red-500 text-red-800 duration-200 ease-in',
        ],
      },
      'danger-outline': {
        root: [
          'border border-red-500 text-red-500 duration-200 ease-in',
        ],
      },
      'danger-dashed': {
        root: [
          'border border-dashed border-red-500 text-red-500 duration-200 ease-in',
        ],
      },
    },
  },
```

