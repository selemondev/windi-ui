---
title: Kbd
lang: en-US
---

# Kbd

A Kbd, also known as a keyboard UI component, is a user interface element that is designed to represent a keyboard or keyboard-like input.

## Basic Usage

You can use the default slot to set the text of the `WKbd` component as shown below:

<demo src="../../components/Kbd/kbd.vue" />

## Size

You can set the size of the `WKbd` component by using the `size` prop as shown below:

<demo src="../../components/Kbd/kbdSize.vue" />

By default, the `WKbd` component's size is set to `sm`.

## Preset

```js

WKbd: {
    base: {
      root: 'inline-flex items-center justify-center text-gray-900 px-1 dark:text-white',
      KbdRounded: 'rounded',
      KbdFont: 'font-medium',
      KbdBackground: 'bg-gray-100 dark:bg-gray-800',
      KbdRing: 'ring-1 ring-gray-300 ring-inset dark:ring-gray-700',
      KbdSize: {
        xs: 'h-4 min-w-[16px] text-[10px]',
        sm: 'h-5 min-w-[20px] text-[11px]',
        md: 'h-6 min-w-[24px] text-[12px]',
        lg: 'h-7 min-w-[28px] text-[13px]',
        xl: 'h-8 min-w-[32px] text-[14px]',
      },
    },

    variants: {
      default: {
        root: 'inline-flex items-center justify-center text-gray-900 px-1 dark:text-white',
        KbdRounded: 'rounded',
        KbdFont: 'font-medium',
        KbdBackground: 'bg-gray-100 dark:bg-gray-800',
        KbdRing: 'ring-1 ring-gray-300 ring-inset dark:ring-gray-700',
      },
    },
},

```