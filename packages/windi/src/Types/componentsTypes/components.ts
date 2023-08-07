import type { WithVariantProps } from '../variant'

interface WComponentRoot extends Record<string, unknown> {
  root?: string
};

export interface WAlert extends WComponentRoot {
  alertTitle?: string
  alertCloseButtonClass?: string
  alertFlexBetween?: string
  alertBody?: string
  alertIsLeading?: string
  alertIsNotLeading?: string
  alertCloseIcon?: string
  alertIconIsLeading?: string
  alertTrailingClass?: string
  alertLeadingClass?: string
}

export interface WIcon extends WComponentRoot {
  size?: string
}

export interface WAvatar extends WComponentRoot {
  avatarWrapper?: string
  avatarChipClass?: string
  avatarSize?: string
  avatarIconSize?: string
  avatarRounded?: string
  avatarClass?: string
  avatarChipSize?: string
  avatarChipPosition?: string
  avatarPlaceholderClass?: string
  avatarIconColor?: string
}

export interface WAvatarGroup extends WComponentRoot {
  avatarGroupMargin?: string
  reverse?: string
}

export interface WBadge extends WComponentRoot {
  default?: string
  badgeBody?: string
  badgeChip?: string
  badgePosition?: string
  badgeSquare?: string
}

export interface WButton extends WComponentRoot {
  buttonFull?: string
  buttonDisabled?: string
  buttonLoading?: string
  buttonSize?: string
  buttonPill?: string
  buttonGap?: string
  buttonPadding?: string
  buttonFlex?: string
  buttonLoadingIcon?: string
  buttonLink?: string
}

export interface WButtonGroup extends WComponentRoot {
  buttonGroupRound?: string
}

export interface WAccordion extends WComponentRoot {}

export interface WAccordionItem extends WComponentRoot {
  accordionItemActiveBackgroundColor?: string
  accordionItemRounded?: string
  accordionItemTitle?: string
  accordionItemIcon?: string
  accordionItemButton?: string
  accordionItemActiveTitleColor?: string
  accordionItemActiveLeadingIconColor?: string
  accordionItemActiveTrailingIconColor?: string
  accordionItemIconIsDisabled?: string
  accordionItemIconIsLeading?: string
  accordionItemIconIsNotLeading?: string
  accordionItemLeadingClass?: string
  accordionItemTrailingClass?: string
  accordionItemBody?: string
  accordionItemContent?: string
  accordionIsDisabled?: string
}

export interface WKbd extends WComponentRoot {
  KbdRounded?: string
  KbdFont?: string
  KbdBackground?: string
  KbdRing?: string
  KbdSize?: string
}

export interface WInput extends WComponentRoot {
  inputRounded?: string
  inputWrapper?: string
  inputPlaceholder?: string
  inputSize?: string
  inputGap?: string
  inputPadding?: string
  inputLeadingPadding?: string
  inputTrailingPadding?: string
  inputIcon?: string
  inputIconSize?: string
  inputIconLeading?: string
  inputIconLeadingPadding?: string
  inputIconTrailing?: string
  inputIconTrailingPadding?: string
  inputLoadingIcon?: string
  inputLabel?: string
  inputHelp?: string
  inputRequiredDisplay?: string
  inputRequired?: string
}

export interface WCheckbox extends WComponentRoot {
  checkbox?: string
  checkboxInput?: string
  checkboxLabel?: string
  checkboxRequired?: string
  checkboxHelp?: string
  checkIcon?: string
  checkboxSpace?: string
  checkIconActive?: string
  checkboxDisplay?: string
  checkboxIconSize?: string
}

export interface WDivider extends WComponentRoot {
  dividerVertical?: string
}

export interface WSwitch extends WComponentRoot {
  switchRounded?: string
  switchActive?: string
  switchInActive?: string
  switchContainer?: string
  switchContainerActive?: string
  switchContainerInActive?: string
  switchIcon?: string
  switchIconActive?: string
  switchIconInActive?: string
  switchIconOn?: string
  switchIconOff?: string
}

export interface WTag extends WComponentRoot {
  tagSize?: string
  tagRounded?: string
  tagCloseIcon?: string
}

export interface WModal extends WComponentRoot {
  modalInner?: string
  modalContainer?: string
  modalPadding?: string
  modalBase?: string
  modalOverlayBase?: string
  modalOverlayBackground?: string
  modalOverlayTransition?: string
  modalShadow?: string
  modalWidth?: string
  modalBackground?: string
  modalHeight?: string
  modalTransition?: string
  modalRing?: string
  modalRounded?: string
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

export type WKbdVariants = WithVariantProps<WKbd>

export type WInputVariants = WithVariantProps<WInput>

export type WCheckboxVariants = WithVariantProps<WCheckbox>

export type WDividerVariants = WithVariantProps<WDivider>

export type WSwitchVariants = WithVariantProps<WSwitch>

export type WTagVariants = WithVariantProps<WTag>

export type WModalVariants = WithVariantProps<WModal>
