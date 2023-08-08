export default {
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
  WIcon: {
    base: {
      'root': 'block cursor-pointer',
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
        root: 'block cursor-pointer',
      },
    },
  },

  WBadge: {
    base: {
      root: 'flex items-center',
      default: 'relative',
      badgeBody: 'text-xs text-white rounded-xl px-1.5 border !border-white dark:border-neutral-800 inline-block ',
      badgeChip: 'w-3 h-3 !p-0',
      badgeSquare: '!rounded-[5px]',
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
        badgeBody: 'bg-yellow-500',
      },
      primary: {
        badgeBody: 'bg-blue-500',
      },
      success: {
        badgeBody: 'bg-green-500',
      },
      warning: {
        badgeBody: 'bg-orange-500',
      },
      danger: {
        badgeBody: 'bg-red-500',
      },
    },
  },

  WDivider: {
    base: {
      root: 'w-full h-px',
      dividerVertical: 'relative !w-px !h-4 !inline-block',
    },
    variants: {
      default: {
        root: 'bg-gray-400 dark:bg-zinc-600',
      },
    },
  },

  WButton: {
    base: {
      root: 'focus:outline-none text-white block font-medium focus-visible:outline-0 rounded-md disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 transition-all duration-200 ease-in',
      buttonFlex: 'flex items-center',
      buttonLoadingIcon: 'svg-spinners:bars-rotate-fade',
      buttonPill: '!rounded-full',
      buttonLoading: '!bg-opacity-50 opacity-40 pointer-events-none !cursor-not-allowed !hover:bg-opacity-50 inline-flex items-center',
      buttonFull: 'w-full flex justify-center items-center',
      buttonDisabled: '!shadow-none !cursor-not-allowed bg-opacity-40 dark:opacity-40',
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
          'border border-yellow-500 disabled:opacity-40 text-yellow-800 dark:text-yellow-500 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-light': {
        root: [
          'border border-yellow-500 disabled:opacity-40 dark:bg-yellow-50 bg-yellow-100 dark:bg-yellow-500/20 dark:text-yellow-500 text-yellow-800 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-yellow-500 text-yellow-800 dark:text-yellow-500 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'default-ghost': {
        root: [
          'text-yellow-500 disabled:opacity-40 dark:text-yellow-500 hover:enabled:bg-yellow-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'primary': {
        root: 'bg-blue-500 hover:enabled:bg-blue-600',
      },
      'primary-light': {
        root: [
          'border border-blue-500 bg-blue-100 disabled:opacity-40 dark:bg-blue-500/20 dark:text-blue-500 text-blue-800 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'primary-outline': {
        root: [
          'border border-blue-500 disabled:opacity-40 text-blue-800 dark:text-blue-500 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'primary-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-blue-500 dark:text-blue-500 text-blue-800 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'primary-ghost': {
        root: [
          'text-blue-500 disabled:opacity-40 dark:text-blue-500 hover:enabled:bg-blue-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'success': {
        root: 'bg-green-500 hover:enabled:bg-green-600',
      },

      'success-light': {
        root: [
          'border border-green-500 bg-green-100 disabled:opacity-40 dark:bg-green-500/20 dark:text-green-500 text-green-800 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'success-outline': {
        root: [
          'border border-green-500 disabled:opacity-40 text-green-800 dark:text-green-500 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },

      'success-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-green-500 dark:text-green-500 text-green-800 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'success-ghost': {
        root: [
          'text-green-500 disabled:opacity-40 dark:text-green-500 hover:enabled:bg-green-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning': {
        root: 'bg-orange-500 hover:enabled:bg-orange-600',
      },
      'warning-light': {
        root: [
          'border border-orange-500 bg-orange-100 disabled:opacity-40 dark:bg-orange-500/20 dark:text-orange-500 text-orange-800 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-outline': {
        root: [
          'border border-orange-500 disabled:opacity-40 text-orange-800 dark:text-orange-500 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-orange-500 text-orange-800 dark:text-orange-500 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'warning-ghost': {
        root: [
          'text-orange-500 disabled:opacity-40 dark:text-orange-500 hover:enabled:bg-orange-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger': {
        root: 'bg-red-500 hover:enabled:bg-red-600',
      },
      'danger-light': {
        root: [
          'border border-red-500 bg-red-100 disabled:opacity-40 dark:bg-red-500/20 dark:text-red-500 text-red-800 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger-outline': {
        root: [
          'border border-red-500 disabled:opacity-40 text-red-800 dark:text-red-500 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger-ghost': {
        root: [
          'text-red-500 disabled:opacity-40 dark:text-red-500 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
      'danger-dashed': {
        root: [
          'border border-dashed disabled:opacity-40 border-red-500 text-red-800 dark:text-red-500 hover:enabled:bg-red-800 hover:enabled:text-white duration-200 ease-in',
        ],
      },
    },
  },
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

  WInput: {
    base: {
      root: 'relative',
      inputWrapper: 'relative shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-800 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none',
      inputRounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
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
  WKbd: {
    base: {
      root: 'inline-flex items-center justify-center text-gray-900 px-1 dark:text-white',
      KbdRounded: 'rounded',
      KbdFont: 'font-medium',
      KbdBackground: 'bg-gray-100 dark:bg-gray-800',
      KbdRing: 'ring-1 ring-gray-300 ring-inset dark:ring-gray-700',
      KbdSize: {
        xs: 'h-4 min-w-[16px] text-[10px]',
        sm: 'h-5 min-w-[20px] text-[11px]',
        md: 'h-6 min-w-[24px] text-[12px]',
        lg: 'h-7 min-w-[28px] text-[13px]',
        xl: 'h-8 min-w-[32px] text-[14px]',
      },
    },

    variants: {
      default: {
        root: 'inline-flex items-center justify-center text-gray-900 px-1 dark:text-white',
        KbdRounded: 'rounded',
        KbdFont: 'font-medium',
        KbdBackground: 'bg-gray-100 dark:bg-gray-800',
        KbdRing: 'ring-1 ring-gray-300 ring-inset dark:ring-gray-700',
      },
    },
  },

  WSwitch: {
    base: {
      root: 'relative inline-flex h-5 w-9 focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
      switchRounded: 'rounded-full',
      switchActive: 'bg-green-500 dark:bg-green-400',
      switchInActive: 'bg-gray-200 dark:bg-gray-700',
      switchContainer: 'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200',
      switchContainerActive: 'translate-x-4 rtl:-translate-x-4',
      switchContainerInActive: 'translate-x-0 rtl:-translate-x-0',
      switchIcon: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
      switchIconActive: 'opacity-100 ease-in duration-200',
      switchIconInActive: 'opacity-0 ease-out duration-100',
      switchIconOn: 'h-3 w-3 text-green-500 dark:text-green-400',
      switchIconOff: 'h-3 w-3 text-gray-400 dark:text-gray-500',
    },

    defaults: {
      root: 'relative inline-flex h-5 w-9 focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
      switchRounded: 'rounded-full',
      switchActive: 'bg-green-500 dark:bg-green-400',
      switchInActive: 'bg-gray-200 dark:bg-gray-700',
    },
  },

  WTag: {
    base: {
      root: 'flex justify-between items-center text-xs px-2 space-x-3 cursor-pointer py-1 text-white',
      tagCloseIcon: 'w-3 h-3 rounded-md block transition duration-200 ease-in',
      tagRounded: {
        'xs': 'rounded-xs',
        'sm': 'rounded-sm',
        'md': 'rounded-md',
        'lg': 'rounded-lg',
        'xl': 'rounded-xl',
        '2xl': 'rounded-2xl',
        'full': 'rounded-full',
      },
      tagSize: {
        'xs': 'text-xs',
        'sm': 'text-sm',
        'md': 'text-sm',
        'lg': 'text-sm',
        'xl': 'text-base',
        '2xl': 'text-lg',
      },
    },
    variants: {
      'default': {
        root: 'bg-yellow-500 text-white',
      },
      'default-light': {
        root: [
          'border border-yellow-500 bg-yellow-100 text-yellow-800 duration-200 ease-in',
        ],
      },
      'default-dashed': {
        root: [
          'border border-dashed border-yellow-500 text-yellow-800 duration-200 ease-in',
        ],
      },
      'default-outline': {
        root: [
          'border border-yellow-500 text-yellow-800 duration-200 ease-in',
        ],
      },
      'primary': {
        root: 'bg-blue-500 text-white',
      },
      'primary-light': {
        root: [
          'border border-blue-500 bg-blue-100 text-blue-800 duration-200 ease-in',
        ],
      },

      'primary-outline': {
        root: [
          'border border-blue-500 text-blue-800 duration-200 ease-in',
        ],
      },

      'primary-dashed': {
        root: [
          'border border-dashed border-blue-500 text-blue-800 duration-200 ease-in',
        ],
      },
      'success': {
        root: 'bg-green-500 text-white',
      },

      'success-light': {
        root: [
          'border border-green-500 bg-green-100 text-green-800 duration-200 ease-in',
        ],
      },

      'success-outline': {
        root: [
          'border border-green-500 text-green-800 duration-200 ease-in',
        ],
      },

      'success-dashed': {
        root: [
          'border border-dashed border-green-500 text-green-800 duration-200 ease-in',
        ],
      },
      'warning': {
        root: 'bg-orange-500 text-white',
      },
      'warning-light': {
        root: [
          'border border-orange-500 bg-orange-100 text-orange-800 duration-200 ease-in',
        ],
      },
      'warning-outline': {
        root: [
          'border border-orange-500 text-orange-800 duration-200 ease-in',
        ],
      },
      'warning-dashed': {
        root: [
          'border border-dashed border-orange-500 text-orange-800 duration-200 ease-in',
        ],
      },
      'danger': {
        root: 'bg-red-500 text-white',
      },
      'danger-light': {
        root: [
          'border border-red-500 bg-red-100 text-red-800 duration-200 ease-in',
        ],
      },
      'danger-outline': {
        root: [
          'border border-red-500 text-red-800 duration-200 ease-in',
        ],
      },
      'danger-dashed': {
        root: [
          'border border-dashed border-red-500 text-red-800 duration-200 ease-in',
        ],
      },
    },
  },

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
