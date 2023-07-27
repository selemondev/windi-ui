import type { WithVariantProps } from '../variant'

interface WComponentRoot extends Record<string, unknown> {
  root?: string
};

export interface WAlert extends WComponentRoot {
  title?: string
  closeButtonClass?: string
  flexBetween?: string
  body?: string
  closeIcon?: string
  trailingClass?: string
  leadingClass?: string
}

export interface WIcon extends WComponentRoot {
  size?: string
}

export type WAlertVariants = WithVariantProps<WAlert>
