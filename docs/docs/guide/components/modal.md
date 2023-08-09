---
title: Modal
lang: en-US
---

# Modal

A `Modal` is a user interface element used to display content or options that require attention or interaction from the user. It is typically presented as a dialog box that appears on top of the main content, temporarily blocking interaction with the rest of the application or webpage. 

The `WModal` component is created using [@headlessui/vue's](https://headlessui.com/vue/dialog) `Dialog` component. 

## Basic Usage

Use the `v-model` to control the state of the `WModal` component as shown below:

<demo src="../../components/Modal/modalBasic.vue" />

## Disable transition

You can disable the transition of the `WModal` component by using the `transition` prop. Setting it to `false` disables the modal's transition, resulting in the modal appearing and disappearing abruptly without any smooth animations, as demonstrated below:

<demo src="../../components/Modal/modalDisableTransition.vue" />

By default, the `WModal` component's transition is set to `true`.

## Disable Overlay

You can disable the overlay of the `WModal` component by using the `overlay` prop. By setting it to `false`, you prevent the background from blurring when the modal is active as shown below:

<demo src="../../components/Modal/modalDisableOverlay.vue" />

By default, the `WModal` component's overlay is set to `true` .

## Disable Close

By using the `disableClose` prop, you can prevent the `WModal` component from closing when clicked outside. The modal will only be closed when a button or an icon inside it is clicked, as shown below:

<demo src="../../components/Modal/modalDisableClose.vue" />

## Preset

```js
  WModal: {
    base: {
      root: 'relative z-50',
      modalInner: 'fixed inset-0 overflow-y-auto',
      modalContainer: 'flex min-h-full items-center justify-center text-center',
      modalPadding: 'p-4',
      modalBase: 'relative text-left rtl:text-right overflow-hidden sm:my-8 w-full flex flex-col',
      modalShadow: 'shadow-xl',
      modalWidth: 'sm:max-w-lg',
      modalBackground: 'bg-white border dark:border-gray-600/40 dark:bg-black',
      modalRing: '',
      modalRounded: 'rounded-lg',
      modalHeight: 'h-96',
      modalOverlayBase: 'fixed inset-0 transition-opacity',
      modalOverlayBackground: 'bg-gray-200/75 dark:bg-[#09090B] dark:bg-opacity-90',
      modalOverlayTransition: {
        enter: 'ease-out duration-300',
        enterFrom: 'opacity-0',
        enterTo: 'opacity-100',
        leave: 'ease-in duration-200',
        leaveFrom: 'opacity-100',
        leaveTo: 'opacity-0',
      },
      modalTransition: {
        enter: 'ease-out duration-300',
        enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
        enterTo: 'opacity-100 translate-y-0 sm:scale-100',
        leave: 'ease-in duration-200',
        leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
        leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
      },

      variants: {
        default: {
          modalBackground: 'bg-white border dark:border-gray-600/40 dark:bg-black',
        },
      },
    },
  },
```