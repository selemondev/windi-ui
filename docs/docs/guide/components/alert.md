---
title: Alert
lang: en-US
---

# Alert

Alerts serve as a means to convey the status of an application or system.

## Basic usage

You can pass a title as a prop to the `WAlert` component by using the `title` prop as shown below:

<demo src="../../components/Alert/alertBasic.vue" />

In addition to that, you can pass the alert description by using the `WAlertDescription` component as shown below:

<demo src="../../components/Alert/alertDescription.vue" />

## Variants

The `WAlert` component comes with 5 different variants such as `default`, `primary`, `success`, `warning`, and `danger` as demonstrated below:

<demo src="../../components/Alert/alertVariants.vue" />


## Theme

The `WAlert` component comes with various themes such as `light`, `outline` and `dashed` as demonstrated below:

### Light

You can set the `light` theme to the variants as shown below:

<demo src="../../components/Alert/alertThemesLight.vue" />


### Outline

You can set the `outline` theme to the variants as shown below:

<demo src="../../components/Alert/alertThemeOutline.vue" />

### Dashed

You can set the `dashed` theme to the variants as shown below:

<demo src="../../components/Alert/alertThemeDashed.vue" />


## Closable

You can set the `closable` prop and an event to close the alert as shown below:

<demo src="../../components/Alert/alertClosable.vue" />

In the example above, the `WAlert` component has a `closable` prop, which allows you to display a close button on the `WAlert` component . When the close button is clicked, it emits a close event. You can handle this event by defining your own method inorder to close the `WAlert` component.


## Transitions

You can set the transition of the `WAlert` component when it is dismissed as shown below:

<demo src="../../components/Alert/alertTransition.vue" />

Windi UI offers four transition modes as of Windi UI version `v0.0.1`, namely: `slideRight`, `slideLeft`, `fade`, and `scale`.

By default, the `WAlert` component's transition is `slideRight`.


## Icons

You can set the icons of the `WAlert` component either at the beginning (leading) or at the end (trailing).

### Leading

<demo src="../../components/Alert/alertLeadingIcon.vue" />

### Trailing

You can set the icon as trailing by setting the `trailing` prop to `true` as show below:

<demo src="../../components/Alert/alertTrailingIcon.vue" />

If you need both the leading and trailing icons, you can use the leading and trailing slot respectively as shown below:

<demo src="../../components/Alert/alertIconSlot.vue" />


## Avatar 

You can use the `WAvatar` component with the `WAlert` component as shown below:

<demo src="../../components/Alert/alertAvatar.vue" />

## Custom

You can also create a custom alert component as demonstrated below:

<demo src="../../components/Alert/alertCustom.vue" />

## Preset

```js
  WAlert: {
    base: {
      root: 'w-full relative overflow-hidden rounded-md px-3 py-2.5',
      alertTitle: 'text-lg font-semibold',
      alertFlexBetween: 'flex justify-between items-center w-full',
      alertBody: 'text-sm leading-none mt-2.5',
      alertCloseIcon: 'w-6 h-6 block',
      alertIsLeading: 'space-x-1',
      alertIconIsLeading: 'pr-1.5',
      alertIsNotLeading: 'space-x-2',
      alertCloseButtonClass: 'p-0.5 rounded-md -m-1 block transition duration-200 ease-in',
    },
    variants: {
      'default': {
        root: 'bg-yellow-500 text-white w-full',
        alertCloseButtonClass: 'text-white py-1 px-1 hover:bg-yellow-800',
      },
      'default-light': {
        root: [
          'border border-yellow-500 bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-500 hover:bg-yellow-800 hover:text-white duration-200 ease-in dark:hover:bg-yellow-800 dark:hover:text-white',
        ],
        alertCloseButtonClass: 'hover:text-white py-1 px-1 hover:bg-yellow-900 !active:text-white',
      },
      'default-dashed': {
        root: [
          'border border-dashed border-yellow-500 text-yellow-800 hover:bg-yellow-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-yellow-900',
      },
      'default-outline': {
        root: [
          'border border-yellow-500 text-yellow-800 hover:bg-yellow-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-yellow-900',
      },
      'primary': {
        root: 'bg-blue-500 text-white',
        alertCloseButtonClass: 'text-white py-1 px-1 hover:bg-blue-800',
      },
      'primary-light': {
        root: [
          'border border-blue-500 bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-500 hover:bg-blue-800 hover:text-white duration-200 ease-in dark:hover:bg-blue-800 dark:hover:text-white',
        ],
        alertCloseButtonClass: 'hover:text-white py-1 px-1 hover:bg-blue-900 !active:text-white',
      },

      'primary-outline': {
        root: [
          'border border-blue-500 text-blue-800 hover:bg-blue-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-blue-900',
      },

      'primary-dashed': {
        root: [
          'border border-dashed border-blue-500 text-blue-800 hover:bg-blue-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-blue-900',
      },
      'success': {
        root: 'bg-green-500 text-white',
        alertCloseButtonClass: 'text-white py-1 px-1 hover:bg-green-800',
      },

      'success-light': {
        root: [
          'border border-green-500 bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-[#0CC57D] hover:bg-green-800 hover:text-white duration-200 ease-in dark:hover:bg-green-800 dark:hover:text-white',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-green-900',
      },

      'success-outline': {
        root: [
          'border border-green-500 text-green-800 hover:bg-green-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-green-900',
      },

      'success-dashed': {
        root: [
          'border border-dashed border-green-500 text-green-800 hover:bg-green-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-green-900',
      },
      'warning': {
        root: 'bg-orange-500 text-white',
        alertCloseButtonClass: 'text-white hover:text-white py-1 px-1 hover:bg-orange-800',
      },
      'warning-light': {
        root: [
          'border border-orange-500 bg-orange-100 text-orange-800 dark:bg-[#362C1E] dark:text-[#F5A525] hover:bg-orange-800 hover:text-white duration-200 ease-in dark:hover:bg-orange-800 dark:hover:text-white',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-orange-900',
      },
      'warning-outline': {
        root: [
          'border border-orange-500 text-orange-800 hover:bg-orange-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-orange-900',
      },
      'warning-dashed': {
        root: [
          'border border-dashed border-orange-500 text-orange-800 hover:bg-orange-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-orange-900',
      },
      'danger': {
        root: 'bg-red-500 text-white',
        alertCloseButtonClass: 'text-white hover:text-white py-1 px-1 hover:bg-red-800',
      },
      'danger-light': {
        root: [
          'border border-red-500 bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-500 hover:bg-red-800 dark:hover:bg-red-800 dark:hover:text-white hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-red-900',
      },
      'danger-outline': {
        root: [
          'border border-red-500 text-red-800 hover:bg-red-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-red-900',
      },
      'danger-dashed': {
        root: [
          'border border-dashed border-red-500 text-red-800 hover:bg-red-800 hover:text-white duration-200 ease-in',
        ],
        alertCloseButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-red-900',
      },
    },
  },
  
```


