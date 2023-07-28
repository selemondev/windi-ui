import type { WithVariantProps } from '../variant'

interface WComponentRoot extends Record<string, unknown> {
  root?: string
};

export interface WAlert extends WComponentRoot {
  title?: string
  closeButtonClass?: string
  flexBetween?: string
  body?: string
  isLeading?: string
  isNotLeading?: string
  closeIcon?: string
  trailingClass?: string
  leadingClass?: string
}

export interface WIcon extends WComponentRoot {
  size?: string
}

export interface WAvatar extends WComponentRoot {
  wrapper?: string
  chipClass?: string
  avatarSize?: string
  rounded?: string
  avatarClass?: string
  avatarChipSize?: string
  avatarChipPosition?: string
  placeholderClass?: string
}

export interface WAvatarGroup extends WComponentRoot {
  margin?: string
  reverse?: string
}

export interface WBadge extends WComponentRoot {
  default?: string
  body?: string
  chip?: string
  badgePosition?: string
  square?: string
}

export type WAlertVariants = WithVariantProps<WAlert>

export type WAvatarVariants = WithVariantProps<WAvatar>

export type WIconVariants = WithVariantProps<WIcon>

export type WAvatarGroupVariants = WithVariantProps<WAvatarGroup>

export type WBadgeVariants = WithVariantProps<WBadge>
