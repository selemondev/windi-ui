---
title: Button
lang: en-US
---

# Button

A Button component is used to trigger an action or event, such as submitting a form, opening a Dialog or a Modal, canceling an action, or performing a delete operation.

## Basic usage

You can use the `label` prop to set the text of the Button as shown below with various variants:

<demo src="../../components/Button/buttonBasic.vue" />

## Theme

The `WButton` component comes with various themes such as light, outline and dashed as demonstrated below:

### Light

You can set the `light` theme to the variants as shown below:

<demo src="../../components/Button/buttonLight.vue" />

### Outline

You can set the `outline` theme to the variants as shown below:

<demo src="../../components/Button/buttonOutline.vue" />

### Dashed

You can set the `dashed` theme to the variants as shown below:

<demo src="../../components/Button/buttonDashed.vue" />

### Ghost

You can set the `ghost` theme to the variants as shown below:

<demo src="../../components/Button/buttonGhost.vue" />

## Size

You can set the `size` of the button by using the `size` prop as shown below:

<demo src="../../components/Button/buttonSize.vue" />

By default, the size of the button is `md`.


## Disabled

You can use the `disabled` prop to determine whether a button is disabled or not as shown below:

<demo src="../../components/Button/buttonDisabled.vue" />

## Rounded

You can use the `pill` prop to round the button into a pill like shape as shown below:

<demo src="../../components/Button/buttonPill.vue" />

## Loading

You can use the `loading` prop if the button is in a loading state as shown below:

<demo src="../../components/Button/buttonLoading.vue" />

## Icon

You can use any icon from the [iconify](https://icones.netlify.app/) library by passing it to the `icon` prop and by specifying whether it is `leading` or `trailing` as shown below:

### Leading

You can set the icon to `leading` by just using the `icon` prop or by using the `leading` slot as shown below:

<demo src="../../components/Button/buttonIconLeading.vue" />


### Trailing

You can set the icon to `trailing` by either setting the `trailing` prop to `true` or by using the `trailing` slot as shown below:

<demo src="../../components/Button/buttonIconTrailing.vue" />

or you can use both the `leading` and `trailing` icons as shown below:

<demo src="../../components/Button/buttonLeadingAndTrailing.vue" />

### Icon only

You can use `icon` only by not passing a text to the `label` prop as shown below:

<demo src="../../components/Button/buttonIconOnly.vue" />

## Full

You can use the `full` prop to make the `WButton` fill the width of its container as shown below:

<demo src="../../components/Button/buttonFull.vue" />


## Link

You can use the `to` prop to make the `WButton` act as a link by passing a link to the `to` prop as shown below:

<demo src="../../components/Button/buttonLink.vue" />

By default, the type of the `WButton` is set to type of button.

## Group

You can group multiple buttons together by using the `WButtonGroup` component as shown below:

<demo src="../../components/Button/buttonGroupComponent.vue" />

You can specify if the button group is vertically or horizontally aligned by using the `vertical` prop as shown below:

<demo src="../../components/Button/buttonGroupVertical.vue" />

By default, the `vertical` prop is set to `false`.

## Preset

```js

  WButton: {
    base: {
      root: 'focus:outline-none text-white block font-medium focus-visible:outline-0 rounded-md disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 transition-all duration-200 ease-in',
      buttonFlex: 'flex items-center',
      buttonLoadingIcon: 'svg-spinners:bars-rotate-fade',
      buttonPill: '!rounded-full',
      buttonLoading: '!bg-opacity-50 opacity-40 pointer-events-none !cursor-not-allowed !hover:bg-opacity-50 inline-flex items-center',
      buttonFull: 'w-full flex justify-center items-center',
      buttonDisabled: '!shadow-none !cursor-not-allowed bg-opacity-40 dark:opacity-40',
      buttonLink: '!bg-transparent !text-black !p-0',
      buttonSize: {
        'xs': 'text-xs',
        'sm': 'text-sm',
        'md': 'text-sm',
        'lg': 'text-sm',
        'xl': 'text-base',
        '2xl': 'text-lg',
      },
      buttonGap: {
        'xs': 'gap-x-1.5',
        'sm': 'gap-x-1.5',
        'md': 'gap-x-2',
        'lg': 'gap-x-2.5',
        'xl': 'gap-x-2.5',
        '2xl': 'gap-x-3',
      },
      buttonPadding: {
        'xs': 'px-2.5 py-1.5',
        'sm': 'px-2.5 py-1.5',
        'md': 'px-3 py-2',
        'lg': 'px-3.5 py-2.5',
        'xl': 'px-3.5 py-2.5',
        '2xl': 'px-4 py-3',
      },
    },

    variants: {
      'default': {
        root: 'bg-yellow-500 hover:enabled:bg-yellow-600 !disabled:hover:bg-yellow-100',
      },
      'default-outline': {
        root: [
          'border border-yellow-500 disabled:opacity-40 text-yellow-800 dark:text-yellow-500 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-light': {
        root: [
          'border border-yellow-500 disabled:opacity-40 dark:bg-yellow-50 bg-yellow-100 dark:bg-yellow-500/20 dark:text-yellow-500 text-yellow-800 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-yellow-500 text-yellow-800 dark:text-yellow-500 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-ghost': {
        root: [
          'text-yellow-500 disabled:opacity-40 dark:text-yellow-500 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'primary': {
        root: 'bg-blue-500 hover:enabled:bg-blue-600',
      },
      'primary-light': {
        root: [
          'border border-blue-500 bg-blue-100 disabled:opacity-40 dark:bg-blue-500/20 dark:text-blue-500 text-blue-800 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'primary-outline': {
        root: [
          'border border-blue-500 disabled:opacity-40 text-blue-800 dark:text-blue-500 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'primary-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-blue-500 dark:text-blue-500 text-blue-800 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'primary-ghost': {
        root: [
          'text-blue-500 disabled:opacity-40 dark:text-blue-500 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'success': {
        root: 'bg-green-500 hover:enabled:bg-green-600',
      },

      'success-light': {
        root: [
          'border border-green-500 bg-green-100 disabled:opacity-40 dark:bg-green-500/20 dark:text-green-500 text-green-800 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'success-outline': {
        root: [
          'border border-green-500 disabled:opacity-40 text-green-800 dark:text-green-500 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'success-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-green-500 dark:text-green-500 text-green-800 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'success-ghost': {
        root: [
          'text-green-500 disabled:opacity-40 dark:text-green-500 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning': {
        root: 'bg-orange-500 hover:enabled:bg-orange-600',
      },
      'warning-light': {
        root: [
          'border border-orange-500 bg-orange-100 disabled:opacity-40 dark:bg-orange-500/20 dark:text-orange-500 text-orange-800 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-outline': {
        root: [
          'border border-orange-500 disabled:opacity-40 text-orange-800 dark:text-orange-500 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-orange-500 text-orange-800 dark:text-orange-500 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-ghost': {
        root: [
          'text-orange-500 disabled:opacity-40 dark:text-orange-500 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger': {
        root: 'bg-red-500 hover:enabled:bg-red-600',
      },
      'danger-light': {
        root: [
          'border border-red-500 bg-red-100 disabled:opacity-40 dark:bg-red-500/20 dark:text-red-500 text-red-800 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger-outline': {
        root: [
          'border border-red-500 disabled:opacity-40 text-red-800 dark:text-red-500 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger-ghost': {
        root: [
          'text-red-500 disabled:opacity-40 dark:text-red-500 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-red-500 text-red-800 dark:text-red-500 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
    },
  },
  
  WButtonGroup: {
    base: {
      root: 'flex [&>:not(:first-child):not(:last-child)]:rounded-none',
    },
    variants: {
      horizontal: {
        root: '[&>:first-child]:rounded-r-none [&>:last-child]:rounded-l-none [&>*+*]:border-l-0',
      },
      vertical: {
        root: 'flex-col [&>:first-child]:rounded-b-none [&>:last-child]:rounded-t-none [&>*+*]:border-t-0 [&>:not(:last-child):not(:focus-visible)]:!shadow-none',
      },
    },
  },

```
