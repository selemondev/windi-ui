export default {
  WAlert: {
    base: {
      root: 'w-full relative overflow-hidden rounded-md px-4',
      title: 'text-lg font-semibold',
      flexBetween: 'flex justify-between items-center w-full',
      body: 'text-sm leading-none mt-2.5',
      closeIcon: 'w-6 h-6 block',
      isLeading: 'space-x-4',
      isNotLeading: 'space-x-2',
      closeButtonClass: 'p-0.5 rounded-md -m-1 block transition duration-200 ease-in',
      leadingClass: 'absolute left-2.5 cursor-pointer flex items-center overflow-hidden',
      trailingClass: 'absolute right-4 inset-y-0 cursor-pointer flex items-center overflow-hidden',
    },
    variants: {
      'default': {
        root: 'bg-yellow-500 text-white w-full',
      },
      'default-light': {
        root: [
          'border border-yellow-500 bg-yellow-100 text-yellow-800 hover:bg-yellow-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: 'hover:text-white py-1 px-1 hover:bg-yellow-900 !active:text-white',
      },
      'default-dashed': {
        root: [
          'border border-dashed border-yellow-500 text-yellow-800 hover:bg-yellow-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-yellow-900',
      },
      'default-outline': {
        root: [
          'border border-yellow-500 text-yellow-800 hover:bg-yellow-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-yellow-900',
      },
      'primary': {
        root: 'bg-blue-500 text-white',
        closeButtonClass: 'text-white py-1 px-1 hover:bg-blue-800',
      },
      'primary-light': {
        root: [
          'border border-blue-500 bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: 'hover:text-white py-1 px-1 hover:bg-blue-900 !active:text-white',
      },

      'primary-outline': {
        root: [
          'border border-blue-500 text-blue-800 hover:bg-blue-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-blue-900',
      },

      'primary-dashed': {
        root: [
          'border border-dashed border-blue-500 text-blue-800 hover:bg-blue-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-blue-900',
      },
      'success': {
        root: 'bg-green-500 text-white',
        closeButtonClass: 'text-white py-1 px-1 hover:bg-green-800',
      },

      'success-light': {
        root: [
          'border border-green-500 bg-green-100 text-green-800 hover:bg-green-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-green-900',
      },

      'success-outline': {
        root: [
          'border border-green-500 text-green-800 hover:bg-green-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-green-900',
      },

      'success-dashed': {
        root: [
          'border border-dashed border-green-500 text-green-800 hover:bg-green-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-green-900',
      },
      'warning': {
        root: 'bg-orange-500 text-white',
        closeButtonClass: 'text-white hover:text-white py-1 px-1 hover:bg-orange-800',
      },
      'warning-light': {
        root: [
          'border border-orange-500 bg-orange-100 text-orange-800 hover:bg-orange-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-orange-900',
      },
      'warning-outline': {
        root: [
          'border border-orange-500 text-orange-800 hover:bg-orange-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-orange-900',
      },
      'warning-dashed': {
        root: [
          'border border-dashed border-orange-500 text-orange-800 hover:bg-orange-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-orange-900',
      },
      'danger': {
        root: 'bg-red-500 text-white',
        closeButtonClass: 'text-white hover:text-white py-1 px-1 hover:bg-red-800',
      },
      'danger-light': {
        root: [
          'border border-red-500 bg-red-100 text-red-800 hover:bg-red-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-red-900',
      },
      'danger-outline': {
        root: [
          'border border-red-500 text-red-800 hover:bg-red-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-red-900',
      },
      'danger-dashed': {
        root: [
          'border border-dashed border-red-500 text-red-800 hover:bg-red-800 hover:text-white duration-200 ease-in',
        ],
        closeButtonClass: '!active:text-white hover:text-white py-1 px-1 hover:bg-red-900',
      },
    },
  },
  WAvatarGroup: {
    base: {
      root: 'flex flex-row-reverse',
      margin: '-mx-2.5',
    },

    variants: {
      root: 'flex flex-row-reverse',
      margin: '-mx-2.5',
    },
  },
  WIcon: {
    base: {
      'root': 'w-6 h-6 block',
      'normal': 'text-base',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'base': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '6xl': 'text-6xl',
      '8xl': 'text-8xl',
    },

    variants: {
      default: {
        root: 'text-base block',
      },
    },
  },

  WBadge: {
    base: {
      root: 'flex items-center',
      default: 'relative',
      body: 'text-xs text-white rounded-xl px-1.5 border !border-white dark:border-neutral-800 inline-block ',
      chip: 'w-3 h-3 !p-0',
      square: '!rounded-[5px]',
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
        body: 'bg-yellow-500',
      },
      primary: {
        body: 'bg-blue-500',
      },
      success: {
        body: 'bg-green-500',
      },
      warning: {
        body: 'bg-orange-500',
      },
      danger: {
        body: 'bg-red-500',
      },
    },
  },

  WAvatar: {
    base: {
      'root': 'relative cursor-pointer inline-flex items-center justify-center bg-gray-100 rounded-full',
      'rounded': 'rounded-full',
      'placeholderClass': 'font-medium cursor-pointer text-gray-600 upperCase',
      'xs': 'h-6 w-6 text-[11px]',
      'sm': 'h-8 w-8 text-xs',
      'md': 'h-10 w-10 text-sm',
      'lg': 'h-12 w-12 text-base',
      'xl': 'h-14 w-14 text-lg',
      '2xl': 'h-16 w-16 text-xl',
      '3xl': 'h-20 w-20 text-2xl',
      'avatarChipClass': 'flex justify-center items-center absolute rounded-full !text-white cursor-pointer ring-1 !ring-white dark:ring-gray-600 text-white dark:text-gray-900',
      'avatarChipPosition': {
        'top-right': 'top-0 right-0',
        'bottom-right': 'bottom-0 right-0',
        'top-left': 'top-0 left-0',
        'bottom-left': 'bottom-0 left-0',
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
        rounded: 'rounded-full',
        placeholderClass: 'font-medium cursor-pointer text-gray-600 upperCase',
      },
    },

  },

  WButton: {
    base: {
      root: 'focus:outline-none focus-visible:outline-0 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 transition-all duration-200 ease-in',
      buttonLabel: 'block font-medium',
      buttonFlex: 'flex items-center',
      buttonLoadingIcon: 'svg-spinners:bars-rotate-fade',
      buttonPill: '!rounded-full',
      loading: '!bg-opacity-50 !hover:bg-opacity-50 inline-flex items-center',
      full: 'w-full flex justify-center items-center',
      disabled: '!shadow-none !cursor-not-allowed bg-transparent',
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
        root: 'bg-yellow-500 hover:bg-yellow-600',
      },
      'default-outline': {
        root: [
          'border border-yellow-500 text-yellow-800 hover:bg-yellow-800 hover:text-white duration-200 ease-in',
        ],
      },
      'default-light': {
        root: [
          'border border-yellow-500 bg-yellow-100 text-yellow-800 hover:bg-yellow-800 hover:text-white duration-200 ease-in',
        ],
      },
      'default-dashed': {
        root: [
          'border border-dashed border-yellow-500 text-yellow-800 hover:bg-yellow-800 hover:text-white duration-200 ease-in',
        ],
      },
      'default-ghost': {
        root: [
          'text-yellow-500 hover:bg-yellow-100',
        ],
      },
      'default-disabled': {
        root: [
          '!shadow-none !cursor-not-allowed !border-yellow-300 !text-gray-300 !bg-yellow-100 dark:!text-white dark:!border-neutral-700 active:!border-yellow-300 active:!bg-yellow-300 peer-checked:!border-yellow-300 hover:!border-yellow-300 !bg-yellow-300',
        ],
      },
      'primary': {
        root: 'bg-blue-500 hover:bg-blue-600 !disabled:hover:bg-blue-100',
      },
      'primary-light': {
        root: [
          'border border-blue-500 bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white duration-200 ease-in',
        ],
      },
      'primary-loading': {
        root: [
          '!shadow-none !cursor-not-allowed bg-blue-100',
        ],
      },

      'primary-outline': {
        root: [
          'border border-blue-500 text-blue-800 hover:bg-blue-800 hover:text-white duration-200 ease-in',
        ],
      },

      'primary-dashed': {
        root: [
          'border border-dashed border-blue-500 text-blue-800 hover:bg-blue-800 hover:text-white duration-200 ease-in',
        ],
      },
      'primary-ghost': {
        root: [
          'text-blue-500 hover:bg-blue-100',
        ],
      },
      'primary-disabled': {
        root: '!shadow-none !cursor-not-allowed !border-blue-300 !text-gray-300 !bg-blue-100 dark:!text-white dark:!border-neutral-700 active:!border-blue-300 active:!bg-blue-300 peer-checked:!border-blue-300 hover:!border-blue-300 !bg-blue-300',
      },
      'success': {
        root: 'bg-green-500 hover:bg-green-600',
      },

      'success-light': {
        root: [
          'border border-green-500 bg-green-100 text-green-800 hover:bg-green-800 hover:text-white duration-200 ease-in',
        ],
      },

      'success-outline': {
        root: [
          'border border-green-500 text-green-800 hover:bg-green-800 hover:text-white duration-200 ease-in',
        ],
      },

      'success-dashed': {
        root: [
          'border border-dashed border-green-500 text-green-800 hover:bg-green-800 hover:text-white duration-200 ease-in',
        ],
      },
      'success-ghost': {
        root: [
          'text-green-500 hover:bg-green-100',
        ],
      },
      'success-disabled': {
        root: '!shadow-none !cursor-not-allowed !border-green-300 !text-gray-300 !bg-green-100 dark:!text-white dark:!border-neutral-700 active:!border-green-300 active:!bg-green-300 peer-checked:!border-green-300 hover:!border-green-300 !bg-green-300',
      },
      'warning': {
        root: 'bg-orange-500 hover:bg-orange-600',
      },
      'warning-light': {
        root: [
          'border border-orange-500 bg-orange-100 text-orange-800 hover:bg-orange-800 hover:text-white duration-200 ease-in',
        ],
      },
      'warning-outline': {
        root: [
          'border border-orange-500 text-orange-800 hover:bg-orange-800 hover:text-white duration-200 ease-in',
        ],
      },
      'warning-dashed': {
        root: [
          'border border-dashed border-orange-500 text-orange-800 hover:bg-orange-800 hover:text-white duration-200 ease-in',
        ],
      },
      'warning-ghost': {
        root: [
          'text-orange-500 hover:bg-orange-100',
        ],
      },
      'warning-disabled': {
        root: '!shadow-none !cursor-not-allowed !border-orange-300 !text-gray-300 !bg-orange-100 dark:!text-white dark:!border-neutral-700 active:!border-orange-300 active:!bg-orange-300 peer-checked:!border-orange-300 hover:!border-orange-300 !bg-orange-300',
      },
      'danger': {
        root: 'bg-red-500 hover:bg-red-600',
      },
      'danger-light': {
        root: [
          'border border-red-500 bg-red-100 text-red-800 hover:bg-red-800 hover:text-white duration-200 ease-in',
        ],
      },
      'danger-outline': {
        root: [
          'border border-red-500 text-red-800 hover:bg-red-800 hover:text-white duration-200 ease-in',
        ],
      },
      'danger-ghost': {
        root: [
          'text-red-500 hover:bg-red-100',
        ],
      },
      'danger-dashed': {
        root: [
          'border border-dashed border-red-500 text-red-800 hover:bg-red-800 hover:text-white duration-200 ease-in',
        ],
      },
      'danger-disabled': {
        root: '!shadow-none !cursor-not-allowed !border-red-300 !text-gray-300 !bg-red-100 dark:!text-white dark:!border-neutral-700 active:!border-red-300 active:!bg-red-300 peer-checked:!border-red-300 hover:!border-red-300 !bg-red-300',
      },
    },
  },

  // chatgpt 😜
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
  transitions: {
    scale: {
      'enter-active-class': 'duration-200 ease-[cubic-bezier(0.175,0.885,0.32,1.475)]',
      'enter-from-class': 'transform scale-0',
      'leave-active-class': 'duration-200 ease-in',
      'leave-to-class': 'transform scale-0',
    },
    fade: {
      'enter-active-class': '0.5s ease-in duration-500',
      'enter-to-class': 'opacity-100',
      'enter-from-class': 'opacity-0',
      'leave-active-class': '0.5s ease-in duration-300',
      'leave-to-class': 'opacity-0 duration-300 ease-in',
      'leave-from-class': 'opacity-100',
    },

    slideLeft: {
      'enter-from-class': 'translate-x-[150%] opacity-0',
      'leave-to-class': 'translate-x-[-150%] duration-500 ease-in opacity-0',
      'enter-active-class': 'transition duration-500',
      'leave-active-class': 'transition duration-500',
    },

    slideRight: {
      'enter-from-class': 'translate-x-[150%] opacity-0',
      'leave-to-class': 'translate-x-[150%] duration-500 ease-in opacity-0',
      'enter-active-class': 'transition duration-500',
      'leave-active-class': 'transition duration-500',
    },
  },
}
