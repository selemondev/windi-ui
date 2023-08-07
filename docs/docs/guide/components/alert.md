---
title: Alert
lang: en-US
---

# Alert

Alerts serve as a means to convey the status of an application or system.

## Basic usage

You can pass a title as a prop to the `WAlert` component by using the `title` prop as shown below:

<demo src="../../components/Alert/alertBasic.vue" />

In addition to that, you can pass the alert description by using the `WAlertDescription` component as shown below:

<demo src="../../components/Alert/alertDescription.vue" />

## Variants

The `WAlert` component comes with 5 different variants such as `default`, `primary`, `success`, `warning`, and `danger` as demonstrated below:

<demo src="../../components/Alert/alertVariants.vue" />


## Theme

The `WAlert` component comes with various themes such as `light`, `outline` and `dashed` as demonstrated below:

### Light

You can set the `light` theme to the variants as shown below:

<demo src="../../components/Alert/alertThemesLight.vue" />


### Outline

You can set the `outline` theme to the variants as shown below:

<demo src="../../components/Alert/alertThemeOutline.vue" />

### Dashed

You can set the `dashed` theme to the variants as shown below:

<demo src="../../components/Alert/alertThemeDashed.vue" />


## Closable

You can set the `closable` prop and an event to close the alert as shown below:

<demo src="../../components/Alert/alertClosable.vue" />

In the example above, the `WAlert` component has a `closable` prop, which allows you to display a close button on the `WAlert` component . When the close button is clicked, it emits a close event. You can handle this event by defining your own method inorder to close the `WAlert` component.


## Transitions

You can set the transition of the `WAlert` component when it is dismissed as shown below:

<demo src="../../components/Alert/alertTransition.vue" />

Windi UI offers four transition modes as of Windi UI version `v0.0.1`, namely: `slideRight`, `slideLeft`, `fade`, and `scale`.

By default, the `WAlert` component's transition is `slideRight`.


## Icons

You can set the icons of the `WAlert` component either at the beginning (leading) or at the end (trailing).

### Leading

<demo src="../../components/Alert/alertLeadingIcon.vue" />

### Trailing

You can set the icon as trailing by setting the `trailing` prop to `true` as show below:

<demo src="../../components/Alert/alertTrailingIcon.vue" />

If you need both the leading and trailing icons, you can use the leading and trailing slot respectively as shown below:

<demo src="../../components/Alert/alertIconSlot.vue" />


## Avatar 

You can use the `WAvatar` prop with the `WAlert` component as shown below:

<demo src="../../components/Alert/alertAvatar.vue" />

## Custom

You can also create a custom alert component as demonstrated below:

<demo src="../../components/Alert/alertCustom.vue" />


