---
title: Badge
lang: en-US
---

# Badge

A Badge is used to highlight an item's status for quick recognition.

## Basic Usage

<demo src="../../components/Badge/badgeBasic.vue" />

## Chip

A badge can be used as a chip. You can set the `chip` prop to display a chip as shown below:

<demo src="../../components/Badge/badgeChip.vue" />

## Value

A badge can be used to display a number or string. If the `value` is greater than the `max-value`, the value will be displayed with the `+` icon as shown below:

<demo src="../../components/Badge/badgeValue.vue" />

## Square 

The badge can also be displayed as a square by using the `square` prop as shown below:

<demo src="../../components/Badge/badgeSquare.vue" />

## Position

You can place the badge in different positions by using the `position` prop as shown below:

<demo src="../../components/Badge/badgePosition.vue" />

By default, the chip position is set to `top-right`.

## Preset

```js
  WBadge: {
    base: {
      root: 'flex items-center',
      default: 'relative',
      badgeBody: 'text-xs text-white rounded-xl px-1.5 border !border-white dark:border-neutral-800 inline-block ',
      badgeChip: 'w-3 h-3 !p-0',
      badgeSquare: '!rounded-[5px]',
      badgePosition: {
        'top-left': 'absolute top-0 left-0 -translate-x-[45%] -translate-y-[45%]',
        'top-right': 'absolute top-0 right-0 translate-x-[45%] -translate-y-[45%]',
        'bottom-right':
          'absolute bottom-0 right-0 translate-x-[45%] translate-y-[45%]',
        'bottom-left':
          'absolute bottom-0 left-0 -translate-x-[45%] translate-y-[45%]',
      },
    },

    variants: {
      default: {
        badgeBody: 'bg-yellow-500',
      },
      primary: {
        badgeBody: 'bg-blue-500',
      },
      success: {
        badgeBody: 'bg-green-500',
      },
      warning: {
        badgeBody: 'bg-orange-500',
      },
      danger: {
        badgeBody: 'bg-red-500',
      },
    },
  },
```