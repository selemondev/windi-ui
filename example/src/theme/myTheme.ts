export default {
    WAlert: {
      base: {
        root: 'relative space-y-1 p-4 max-h-lg w-full cursor-pointer rounded-md space-x-3 block',
        title: 'text-lg font-semibold',
        body: 'text-sm leading-none mt-2.5',
        closeIcon: 'w-6 h-6 block',
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
  