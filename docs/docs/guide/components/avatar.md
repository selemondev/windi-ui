---
title: Avatar
lang: en-US
---

# Avatar

The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon.

## Basic usage

You can pass the image url to the `WAvatar` component by using the `src` prop as shown below:

<demo src="../../components/Avatar/avatarBasic.vue" />

## Size

You can use `size` prop to change the size of the Avatar.

<demo src="../../components/Avatar/avatarSize.vue" />


## Chip


To display a chip on the `WAvatar` component , utilize the `chip-color`, `chip-text`, and `chip-position` props as shown below:


<demo src="../../components/Avatar/avatarChip.vue" />


## Icon

If the image url, name or initials are not passed, the fallback will be an icon which you can customize as shown below:

<demo src="../../components/Avatar/avatarIcon.vue" />

If nothing is passed, the fallback icon will be a star as shown below:

<demo src="../../components/Avatar/avatarFallbackIcon.vue"/>

## Name

If the `name` prop is provided, the fallback will be defaulted to be the first letter of the name as shown below:

<demo src="../../components/Avatar/avatarName.vue"/>


## Initials

If you prefer to use initials, you can pass the initials to the `initials` prop as shown below and it will act as a fallback in the scenario where the image url is not provided:

<demo src="../../components/Avatar/avatarInitials.vue"/>


## Group

To stack avatars as a group, you can use the `WAvatarGroup` component as shown below:

<demo src="../../components/Avatar/avatarGroup.vue" />

### Max and size

You can use the `max` prop to limit avatars shown, displaying "+X" for remaining avatars and the `size` prop to size all the avatars equally as shown below:

<demo src="../../components/Avatar/avatarGroupMax.vue"/>


## Preset

```js

  WAvatar: {
    base: {
      'root': 'relative cursor-pointer inline-flex items-center justify-center bg-gray-100 rounded-full',
      'avatarRounded': 'rounded-full',
      'avatarPlaceholderClass': 'font-medium cursor-pointer text-gray-600 upperCase',
      'avatarIconColor': 'text-black',
      'xs': 'h-6 w-6 text-[11px]',
      'sm': 'h-8 w-8 text-xs',
      'md': 'h-10 w-10 text-sm',
      'lg': 'h-12 w-12 text-base',
      'xl': 'h-14 w-14 text-lg',
      '2xl': 'h-16 w-16 text-xl',
      '3xl': 'h-20 w-20 text-2xl',
      'avatarChipClass': 'flex justify-center items-center absolute rounded-full !text-white cursor-pointer text-white dark:text-gray-900',
      'avatarChipPosition': {
        'top-right': 'top-0 right-0',
        'bottom-right': 'bottom-0 right-0',
        'top-left': 'top-0 left-0',
        'bottom-left': 'bottom-0 left-0',
      },
      'avatarIconSize': {
        'xs': 'h-3 w-3',
        'sm': 'h-4 w-4',
        'md': 'h-6 w-6',
        'lg': 'h-7 w-7',
        'xl': 'h-8 w-8 ',
        '2xl': 'h-10 w-10',
        '3xl': 'h-12 w-12',
      },
      'avatarChipSize': {
        'xs': 'h-1.5 min-w-[0.375rem] text-[6px] p-px',
        'sm': 'h-2 min-w-[0.5rem] text-[7px] p-0.5',
        'md': 'h-2.5 min-w-[0.625rem] text-[8px] p-0.5',
        'lg': 'h-3 min-w-[0.75rem] text-[10px] p-0.5',
        'xl': 'h-3.5 min-w-[0.875rem] text-[11px] p-1',
        '2xl': 'h-4 min-w-[1rem] text-[12px] p-1',
        '3xl': 'h-5 min-w-[1.25rem] text-[14px] p-1',
      },

    },

    variants: {
      default: {
        root: 'relative cursor-pointer inline-flex items-center justify-center bg-gray-100 rounded-full',
        avatarRounded: 'rounded-full',
        avatarPlaceholderClass: 'font-medium cursor-pointer text-gray-600 upperCase',
        avatarIconColor: 'text-black',
      },
    },

  },

  WAvatarGroup: {
    base: {
      root: 'flex flex-row-reverse',
      avatarGroupMargin: '-mx-2.5',
    },

    variants: {
      root: 'flex flex-row-reverse',
      avatarGroupMargin: '-mx-2.5',
    },
  },

```

