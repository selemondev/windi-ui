export default {
  WAlert: {
    base: {
      root: 'relative space-y-1 p-4 max-h-lg w-80 cursor-pointer rounded-md space-x-3 block',
      title: 'text-lg font-semibold',
      flexBetween: 'flex justify-between items-center w-full',
      body: 'text-sm leading-none mt-2.5',
      closeIcon: 'w-6 h-6 block',
      isLeading: 'space-x-4',
      isNotLeading: 'space-x-2',
      closeButtonClass: 'p-0.5 rounded-md -m-1 block transition duration-200 ease-in',
      leadingClass: 'absolute left-2.5 inset-y-0 cursor-pointer flex items-center overflow-hidden',
      trailingClass: 'absolute right-4 inset-y-0 cursor-pointer flex items-center overflow-hidden',
    },
    variants: {
      'default': {
        root: 'bg-yellow-500 text-white',
        outline: 'border border-yellow-500 !text-yellow-800',
        light: 'border border-yellow-500 bg-yellow-100 text-yellow-800',
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
