---
title: Checkbox
lang: en-US
---

# Checkbox

A checkbox is a user interface element that allows users to toggle between two possible states, usually representing binary options such as "checked" or "unchecked," "on" or "off," or "selected" or "not selected".

## Basic Usage

You can use the `label` prop to set the text of the `WCheckbox` component as well as use `v-model` to make the `WCheckbox` component reactive as shown below with various variants:

<demo src="../../components/Checkbox/checkbox.vue" />

## Disabled

You can disable the `WCheckbox` component by using the `disabled` prop as shown below:

<demo src="../../components/Checkbox/checkboxDisabled.vue" />

## Required

You can use the `required` prop to display a red star next to the label as shown below:

<demo src="../../components/Checkbox/checkboxRequired.vue" />

## Help

You can use the `help` prop to display some helper texts under the the `WCheckbox` component as shown below:

<demo src="../../components/Checkbox/checkboxHelper.vue" />

## Icon

You can change the default icon of the `WCheckbox` component by setting an icon using the `icon` prop as shown below:

<demo src="../../components/Checkbox/checkboxIcon.vue" />

## Preset

```js
  WCheckbox: {
    base: {
      root: 'relative flex items-start cursor-pointer',
      checkbox: [
        'relative dark:border-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600 flex bg-white items-center justify-center transition-all select-none !h-4 !w-4 overflow-hidden border shadow-sm shadow-slate-600/10 border-slate-300 rounded',
        'active:peer-checked:pt-1.5 peer-focus-visible:shadow-[0_1px_1px_0,0_0_0_3px]',
      ],
      checkboxIconSize: 'text-sm',
      checkboxDisplay: 'flex items-center h-5',
      checkboxInput: 'peer absolute inset-0 m-0 h-full w-full cursor-pointer !opacity-0',
      checkboxSpace: 'ms-2 text-sm',
      checkIcon: 'flex justify-center items-center opacity-0 h-full w-full',
      checkIconActive: '!mt-0 opacity-100 text-blue-600 drop-shadow-sm [text-shadow:0_1px_0_rgba(0,0,0,0.07)]',
      checkboxLabel: 'font-medium text-gray-700 dark:text-gray-200',
      checkboxRequired: 'text-red-500 dark:text-red-400',
      checkboxHelp: 'text-gray-500 dark:text-gray-400',
      checkboxHelpDisabled: 'text-gray-300 dark:text-gray-700',
    },
    variants: {
      default: {
        checkbox:
          'hover:!border-yellow-600 active:!bg-yellow-600/30 peer-checked:!bg-yellow-600 peer-checked:border-yellow-600 active:peer-checked:bg-yellow-600 peer-focus-visible:border-yellow-600 peer-focus-visible:shadow-yellow-600/30',
        checkIcon: '!text-white',
      },
      primary: {
        checkbox:
          'hover:!border-blue-600 active:!bg-blue-600/30 peer-checked:!bg-blue-600 peer-checked:border-blue-600 active:peer-checked:bg-blue-600 peer-focus-visible:border-blue-600 peer-focus-visible:shadow-blue-600/30',
        checkIcon: '!text-white',
      },
      success: {
        checkbox:
          'active:!bg-green-500/30 active:!border-green-500 hover:!border-green-500 active:peer-checked:bg-green-500 peer-checked:!bg-green-500 peer-checked:border-green-500 peer-focus-visible:border-green-500 peer-focus-visible:shadow-green-500/30',
        checkIcon: '!text-white',
      },
      warning: {
        checkbox:
          'active:!bg-orange-500/30 active:!border-orange-500 hover:!border-orange-500 active:peer-checked:bg-orange-500 peer-checked:!bg-orange-500 peer-checked:border-orange-500 peer-focus-visible:border-orange-500 peer-focus-visible:shadow-orange-500/30',
        checkIcon: '!text-white',
      },
      danger: {
        checkbox:
          'active:!bg-red-500/30 active:!border-red-500 hover:!border-red-500 peer-checked:!bg-red-500 active:peer-checked:bg-red-500 peer-checked:border-red-500 peer-focus-visible:border-red-500 peer-focus-visible:shadow-red-500/30',
        checkIcon: '!text-white',
      },
      disabled: {
        checkbox:
          'cursor-not-allowed !border-gray-300 active:!border-gray-300 !bg-gray-100 active:!bg-gray-100 peer-checked:!border-gray-300 hover:!border-gray-300 active:!pt-0 dark:!text-zinc-500 dark:!bg-neutral-700 dark:!border-neutral-700 peer-checked:!bg-gray-100 dark:peer-checked:!bg-neutral-700 dark:peer-checked:!border-gray-700',
        checkIcon: '!text-gray-300 dark:!text-gray-500 [text-shadow:none]',
        checkboxLabel: 'text-gray-300 dark:text-gray-500',
        checkboxRequired: 'pointer-events-none text-red-100',
      },
    },
  },

```