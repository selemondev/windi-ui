---
title: Divider
lang: en-US
---

# Divider

A Divider is an element used to separate content or sections in a user interface.

## Basic Usage

You can use the `WDivider` component as shown below:

<demo src="../../components/Divider/dividerBasic.vue" />

## Vertical

You can use the `vertical` prop to make the `WDivider` component align vertically as shown below:

<demo src="../../components/Divider/dividerVertical.vue" />

## Preset

```js
WDivider: {
    base: {
      root: 'w-full h-px',
      dividerVertical: 'relative !w-px !h-4 !inline-block',
    },
    variants: {
      default: {
        root: 'bg-gray-400 dark:bg-zinc-600',
      },
    },
},
```

