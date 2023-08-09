---
title: Input
lang: en-US
---

# Input

An input component is a user interface element that is used to get user input in a text or number field.

## Basic Usage

You can use the `placeholder` prop to set a placeholder text for the `WInput` component as well as use `v-model` to make the `WInput` component reactive and also pass a text to the `label` prop as shown below:

<demo src="../../components/Input/inputBasic.vue" />

## Size

You can set the size of the `WInput` component by using the size prop as shown below:

<demo src="../../components/Input/inputSize.vue" />

By default, the `WInput` component's size is set to `md`.

## Disabled

You can disable the `WInput` component by setting the `disabled` prop as shown below:

<demo src="../../components/Input/inputDisabled.vue" />

## Rounded

You can round the borders of the `WInput` component by using the `rounded` prop as shown below:

<demo src="../../components/Input/inputRounded.vue" />

By default, the `WInput` component's roundedness is set to `md`.

## Required

You can use the `required` prop to display a red star next to the label to indicate that a an input is required as shown below:

<demo src="../../components/Input/inputRequired.vue" />

## Help

You can use the `help` prop to display some helper texts under the the `WInput` component as shown below:

<demo src="../../components/Input/inputHelp.vue" />

## Loading

You can use the `loading` prop to show a loading icon as well as disable the input as shown below:

<demo src="../../components/Input/inputLoading.vue" />

## Icon

You can use any icon from the [iconify](https://icones.netlify.app/) library by passing it to the `icon` prop and by specifying whether it is `leading` or `trailing` as shown below:

## Leading

You can set the icon to `leading` by just using the `icon` prop or by using the `leading` slot as shown below:

<demo src="../../components/Input/inputIconLeading.vue" />


## Trailing

You can set the icon to `trailing` by just using the `icon` prop and setting the `trailing` to `true` or by using the `trailing` slot as shown below:

<demo src="../../components/Input/inputIconTrailing.vue" />

or you can use both the `leading` and `trailing` icons.

Type anything in the input field so as to clear it using the `x` icon:

<demo src="../../components/Input/inputIconLeadingAndTrailing.vue" />

## Preset

```js
  WInput: {
    base: {
      root: 'relative',
      inputWrapper: 'relative shadow-sm bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none',
      inputRounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
      },
      inputPlaceholder: 'placeholder-gray-400 dark:placeholder-gray-500',
      inputLabel: 'flex mb-1 dark:text-white',
      inputHelp: 'flex mt-1 text-sm text-gray-400 dark:text-gray-500',
      inputRequiredDisplay: 'relative flex items-start',
      inputRequired: 'text-red-500',
      inputSize: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-sm',
        xl: 'text-base',
      },
      inputGap: {
        xs: 'gap-x-1.5',
        sm: 'gap-x-2',
        md: 'gap-x-2',
        lg: 'gap-x-2',
        xl: 'gap-x-2',
      },

      inputPadding: {
        xs: 'px-2.5 py-1.5',
        sm: 'px-2.5 py-1.5',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-2.5',
        xl: 'px-3.5 py-2.5',
      },

      inputLeadingPadding: {
        xs: 'ps-8',
        sm: 'ps-9',
        md: 'ps-10',
        lg: 'ps-11',
        xl: 'ps-12',
      },

      inputTrailingPadding: {
        xs: 'pe-8',
        sm: 'pe-9',
        md: 'pe-10',
        lg: 'pe-11',
        xl: 'pe-12',
      },

      inputIcon: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
      inputIconSize: {
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        md: 'h-5 w-5',
        lg: 'h-5 w-5',
        xl: 'h-6 w-6',
      },

      inputIconLeading: 'absolute inset-y-0 start-0 flex items-center',

      inputIconLeadingPadding: {
        xs: 'ps-2.5',
        sm: 'ps-2.5',
        md: 'ps-3',
        lg: 'ps-3.5',
        xl: 'ps-3.5',
      },

      inputIconTrailing: 'absolute inset-y-0 end-0 flex items-center cursor-pointer',

      inputIconTrailingPadding: {
        xs: 'pe-2.5',
        sm: 'pe-2.5',
        md: 'pe-3',
        lg: 'pe-3.5',
        xl: 'pe-3.5',
      },
      inputLoadingIcon: 'svg-spinners:bars-rotate-fade',
    },

    variants: {
      default: {
        root: 'relative',
        inputWrapper: 'relative shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-800 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none rounded-md',
        inputPlaceholder: 'placeholder-gray-400 dark:placeholder-gray-500',
        inputLabel: 'flex text-sm mb-1 dark:text-white',
        inputHelp: 'flex mt-1 text-sm text-gray-400 dark:text-gray-500',
        inputRequiredDisplay: 'relative flex items-start',
        inputRequired: 'text-red-500',
        inputLoadingIcon: 'svg-spinners:bars-rotate-fade',
      },
    },
  },
```