import type { Components } from './enums/Components'
import type { WAlertVariants, WAvatarGroup, WAvatarVariants, WBadgeVariants, WButtonVariants, WIconVariants } from './componentsTypes/components'

export declare interface CSSClassKeyValuePair {
  [key: string]: any
}
export declare type CSSClasses = CSSClass[]
export declare type CSSClass =
    | CSSClassKeyValuePair
    | string
    | CSSClasses
    | undefined

export declare type CSSClassesList<ClassesKeys extends string = string> = {
  [key in ClassesKeys]?: CSSClass
}

export declare type CSSRawClassesList<ClassesKeys> = {
  [T in keyof ClassesKeys]?: CSSClass
}

export type WithVariantProps<P> = {
  base?: CSSRawClassesList<P>
  variants?: Variants<P>
} & P

export interface Variants<P> {
  [key: string]: CSSRawClassesList<P> | undefined
}

export interface WindiUIConfiguration {
  transitions: Record<string, Record<string, string>>
  [Components.WAlert]?: WAlertVariants
  [Components.WAvatar]?: WAvatarVariants
  [Components.WIcon]?: WIconVariants
  [Components.WAvatarGroup]?: WAvatarGroup
  [Components.WBadge]?: WBadgeVariants
  [Components.WButton]?: WButtonVariants

}
