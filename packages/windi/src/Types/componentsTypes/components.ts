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

export interface WButton extends WComponentRoot {
  full?: string
  buttonLabel?: string
  disabled?: string
  loading?: string
  buttonSize?: string
  buttonPill?: string
  buttonGap?: string
  buttonPadding?: string
  buttonFlex?: string
  buttonLoadingIcon?: string
}

export interface WButtonGroup extends WComponentRoot {
  buttonGroupRound?: string
}

export interface WAccordion extends WComponentRoot {}

export interface WAccordionItem extends WComponentRoot {
  body?: string
  icon?: string
  expanded?: string
  activator?: string
}

export type WAccordionVariant = WithVariantProps<WAccordion>

export type WAccordionItemVariants = WithVariantProps<WAccordionItem>

export type WAlertVariants = WithVariantProps<WAlert>

export type WAvatarVariants = WithVariantProps<WAvatar>

export type WIconVariants = WithVariantProps<WIcon>

export type WAvatarGroupVariants = WithVariantProps<WAvatarGroup>

export type WBadgeVariants = WithVariantProps<WBadge>

export type WButtonVariants = WithVariantProps<WButton>

export type WButtonGroupVariants = WithVariantProps<WButtonGroup>

export type WAccordionVariants = WithVariantProps<WAccordion>
