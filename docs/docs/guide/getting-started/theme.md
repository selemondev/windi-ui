# Theme

Windi UI supports both light and dark theme out of the box with no configuration needed from the developer's end.

In regards to customization, Windi UI offers two ways of customizing your components.
The first way is through the `variants` property and the second way is by creating your own theme file.

## Inline Variants

Let's explore an example of how theming works through the `variants` property with our `WButton` component:

```js
<template>
    <WButton :variants="{
        'my-variant': {
            buttonPill: '!rounded-none'
        }
    }" :variant="['my-variant', 'primary']" pill label="Button" />
</template>
```

In the provided code snippet above, we have an example implementation of a customizable button component `<WButton>`.

By default, when the `pill` prop is used with the `<WButton>` component, the button will be rendered with a fully rounded appearance (rounded-full). This means that the button's corners will be perfectly circular, creating a pill-like shape.

However, we have customized its appearance by using the `variants` property to change its roundedness and then we used the `variant` prop to pass an array of variants, including both the default variant `primary` and our custom variant `my-variant`.

Below are examples of both the `styled` and `unstyled` versions of the `WButton` component respectively:

<demo src="../../components/Theme/WButtonThemed.vue" />

## Theme creation


Windi UI leverages the power of Tailwind CSS as its default classes provider. 

However, since we value flexibility and understand that different projects have unique requirements, you have the freedom to use your own custom classes or opt for an alternative utility classes provider, allowing you to tailor the UI library to your specific needs and preferences.

Let's explore an example of how you can create your own theme and use it in your projects:

1. Create a `theme` folder in your `src` directory.

2. Inside your `theme` folder, create a `theme` file, for example `my-theme.ts`.

3. Start creating your themes based on the component's presets.

- Let's explore an example showcasing the versatility of the `WButton` preset:


```ts
  WButton: {
    base: {
      root: 'focus:outline-none text-white block font-medium focus-visible:outline-0 rounded-md disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 transition-all duration-200 ease-in',
      buttonFlex: 'flex items-center',
      buttonLoadingIcon: 'svg-spinners:bars-rotate-fade',
      buttonPill: '!rounded-full',
      buttonLoading: '!bg-opacity-50 pointer-events-none !cursor-not-allowed !hover:bg-opacity-50 inline-flex items-center',
      buttonFull: 'w-full flex justify-center items-center',
      buttonDisabled: '!shadow-none !cursor-not-allowed bg-opacity-100',
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
          'border border-yellow-500 text-yellow-800 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-light': {
        root: [
          'border border-yellow-500 bg-yellow-100 text-yellow-800 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-dashed': {
        root: [
          'border border-dashed border-yellow-500 text-yellow-800 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-ghost': {
        root: [
          'text-yellow-500 hover:enabled:bg-yellow-100',
        ],
      },
      'primary': {
        root: 'bg-blue-500 hover:enabled:bg-blue-600 !disabled:hover:bg-blue-100',
      },
      'primary-light': {
        root: [
          'border border-blue-500 bg-blue-100 text-blue-800 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'primary-loading': {
        root: [
          '!shadow-none !cursor-not-allowed bg-blue-100',
        ],
      },

      'primary-outline': {
        root: [
          'border border-blue-500 text-blue-800 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'primary-dashed': {
        root: [
          'border border-dashed border-blue-500 text-blue-800 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'primary-ghost': {
        root: [
          'text-blue-500 hover:enabled:bg-blue-100',
        ],
      },
      'success': {
        root: 'bg-green-500 hover:enabled:bg-green-600',
      },

      'success-light': {
        root: [
          'border border-green-500 bg-green-100 text-green-800 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'success-outline': {
        root: [
          'border border-green-500 text-green-800 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'success-dashed': {
        root: [
          'border border-dashed border-green-500 text-green-800 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'success-ghost': {
        root: [
          'text-green-500 hover:enabled:bg-green-100',
        ],
      },
      'warning': {
        root: 'bg-orange-500 hover:enabled:bg-orange-600',
      },
      'warning-light': {
        root: [
          'border border-orange-500 bg-orange-100 text-orange-800 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-outline': {
        root: [
          'border border-orange-500 text-orange-800 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-dashed': {
        root: [
          'border border-dashed border-orange-500 text-orange-800 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-ghost': {
        root: [
          'text-orange-500 hover:enabled:bg-orange-100',
        ],
      },
      'danger': {
        root: 'bg-red-500 hover:enabled:bg-red-600',
      },
      'danger-light': {
        root: [
          'border border-red-500 bg-red-100 text-red-800 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger-outline': {
        root: [
          'border border-red-500 text-red-800 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger-ghost': {
        root: [
          'text-red-500 hover:enabled:bg-red-100',
        ],
      },
      'danger-dashed': {
        root: [
          'border border-dashed border-red-500 text-red-800 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
    },
  },

```

The `Base` serves as the foundation, containing entries for all the essential components of the element. It applies permanent classes to each major part, ensuring consistent styling throughout.

The `Variants` section includes entries for every variant of the component. By default, the `Default` variant is automatically applied if no specific variant is selected. 

You can create your own theme by modifying the classes of the initial theme or by adding your own custom classes.

:::tip
When Windi UI v0.0.5 is released, developers will have access to a theme generator that will simplify the process of creating themes to match their preferred styles.
:::
