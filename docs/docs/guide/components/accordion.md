# Accordion

An Accordion displays a list of high-level options that can expand or collapse to reveal more information about a subject or item.

## Basic Usage

You can expand multiple panels at the same time

<demo src="../../components/Accordion/accordionBasic.vue" />

## Style

You can customize the background color of the accordion item when it is active by using `accordionItemActiveBackgroundColor`and `accordionItemActiveTitleColor` as shown below:

<demo src="../../components/Accordion/accordionActiveBackgroundColor.vue" />


## Disabled 

The disabled attribute is used to indicate whether a `WAccordionItem` should be disabled or not. It accepts a Boolean value, where "true" means the `WAccordionItem` is disabled, and "false" means it is enabled. By default it is false.

<demo src='../../components/Accordion/accordionDisabled.vue' />


## Icons

The `WAccordionItem` component allows you to include two icons - one positioned in front of the title (leading) and the other at the far end, after the title (trailing).

You can use the `leading` icon as shown below:

<demo src='../../components/Accordion/accordionIconLeading.vue' />

You can use the `trailing` icon by setting the `trailing` prop to `true` as shown below:

<demo src='../../components/Accordion/accordionIconTrailing.vue' />

If you need both the `leading` and `trailing` icons, you can use the `leading` and `trailing` slot respectively as shown below:

<demo src="../../components/Accordion/accordionIconSlot.vue" />


## Rounded

You can use the `rounded` prop to give the `WAccordionItem` rounded borders as shown below:

<demo src="../../components/Accordion/accordionRounded.vue" />

## Transitions

You can use the `accordionItembody` preset to set the transition of the `WAccordionItem` as shown below:

<demo src="../../components/Accordion/accordionTransitions.vue" />

By default, the transition is set to `duration-500`

## Presets

```js
  WAccordion: {
    base: {
      root: 'w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-900 flex flex-col',
    },

    variants: {},
  },
  WAccordionItem: {
    base: {
      root: 'border-t dark:bg-black dark:border-gray-900 transition duration-500 hover:bg-gray-100 dark:hover:bg-gray-900',
      accordionItemActiveBackgroundColor: 'bg-gray-200 dark:bg-gray-800',
      accordionItemActiveTitleColor: 'text-black dark:text-white',
      accordionItemActiveLeadingIconColor: 'text-xl text-black dark:text-white',
      accordionItemActiveTrailingIconColor: 'text-xl text-black dark:text-white',
      accordionItemRounded: 'first:rounded-t-lg last:rounded-b-lg',
      accordionItemTitle: 'font-medium dark:text-white text-black',
      accordionIsDisabled: 'bg-gray-100 dark:bg-gray-900 dark:text-gray-700',
      accordionItemIcon: 'relative ml-auto dark:text-white h-5 w-5 text-black transition-transform duration-500 md:h-6 md:w-6',
      accordionItemIconIsDisabled: 'dark:text-gray-800 text-gray-300',
      accordionItemButton: 'flex justify-between items-center cursor-pointer p-2',
      accordionItemIconIsLeading: 'space-x-2.5',
      accordionItemIconIsNotLeading: 'space-x-2',
      accordionItemLeadingClass: 'absolute left-2.5 cursor-pointer flex items-center overflow-hidden',
      accordionItemTrailingClass: 'absolute right-4 inset-y-0 cursor-pointer flex items-center overflow-hidden',
      accordionItembody: 'overflow-hidden px-5 transition-[height] duration-500 text-black will-change-[height] md:px-6',
      accordionItemContent: 'py-2 font-light leading-relaxed tracking-wide text-black dark:text-white',
    },
    variants: {
      default: {
        root: 'border-b dark:bg-black border-gray-300 dark:border-gray-900 transition duration-500 hover:bg-gray-100 dark:hover:bg-gray-900',
        accordionItemActiveBackgroundColor: 'bg-gray-200 dark:bg-gray-800',
        accordionItemRounded: 'first:rounded-t-lg last:rounded-b-lg',
        accordionItemTitle: 'font-medium dark:text-white text-black',
        accordionIsDisabled: 'text-gray-400 bg-gray-100',
        accordionItemIcon: 'relative ml-auto dark:text-white h-5 w-5 text-black transition-transform duration-500 md:h-6 md:w-6',
        accordionItemIconIsLeading: 'space-x-2.5',
        accordionItemIconIsNotLeading: 'space-x-2',
        accordionItemButton: 'flex justify-between items-center cursor-pointer p-2',
        accordionItemLeadingClass: 'absolute left-2.5 cursor-pointer flex items-center overflow-hidden',
        accordionItemTrailingClass: 'absolute right-4 inset-y-0 cursor-pointer flex items-center overflow-hidden',
        accordionItembody: 'overflow-hidden px-5 transition-[height] duration-500 text-black will-change-[height] md:px-6',
        accordionItemContent: 'py-2 font-light leading-relaxed tracking-wide text-black dark:text-white',
      },
    },
  },

```
