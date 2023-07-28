<script setup lang='ts'>
import { computed, defineComponent, useAttrs } from 'vue'
import type { PropType } from 'vue'
import classNames from 'classnames'
import { Icon } from '@iconify/vue'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import type { WButton } from '../../Types/componentsTypes/components'
import { Components } from '../../Types/enums/Components'
import { useVariants } from '../../composables/useVariants'
import windiTheme from '../../theme/windiTheme'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
const props = defineProps({
  ...getVariantPropsWithClassesList<WButton>(),

  to: {
    type: String,
    default: null,
  },
  size: {
    type: String as PropType<Size>,
    default: 'md',
  },
  pill: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  leading: {
    type: Boolean,
    default: false,
  },
  trailing: {
    type: Boolean,
    default: false,
  },
  loadingIcon: {
    type: String,
    default: windiTheme.WButton.base.buttonLoadingIcon,
  },

  iconSize: {
    type: Number,
    default: 20,
  },

  label: {
    type: String,
    default: '',
  },
})
const bind = Object.assign({}, useAttrs(), props.to ? { href: props.to } : {})

const variant = useVariants<WButton>(Components.WButton, props)

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || (props.loading && !props.trailing)
})

const leadingIcon = computed(() => {
  if (props.loading)
    return props.loadingIcon

  return props.icon
})

const trailingIcon = computed(() => {
  if (props.loading && !isLeading.value)
    return props.loadingIcon

  return props.icon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || (props.loading && props.trailing)
})

const buttonBlock = computed(() => {
  return props.full && variant.full
})

const buttonWrapperClass = computed(() => {
  return classNames(
    variant.root,
    variant.buttonFlex,
    windiTheme.WButton.base.buttonSize[props.size],
    windiTheme.WButton.base.buttonGap[props.size],
    windiTheme.WButton.base.buttonPadding[props.size],
    buttonBlock.value,
    props.pill && variant.buttonPill,
    props.disabled && variant.disabled,
    (props.loading) && variant.loading,
  )
})

const iconSizeStyle = computed(() => {
  return { 'font-size': props.iconSize }
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WButton,
  inheritAttrs: true,
})
</script>

<template>
  <component :is="props.to ? 'a' : 'button'" :disabled="disabled" :class="buttonWrapperClass" v-bind="bind">
    <slot name="leading" :disabled="disabled" :loading="props.loading">
      <Icon v-if="isLeading && leadingIcon" :icon="leadingIcon" :style="iconSizeStyle" />
    </slot>

    <slot>
      <span v-if="label" :class="variant.buttonLabel">
        {{ label }}
      </span>
    </slot>

    <slot name="trailing" :disabled="disabled" :loading="props.loading">
      <Icon v-if="isTrailing && trailingIcon" :icon="trailingIcon" :style="iconSizeStyle" />
    </slot>
  </component>
</template>
