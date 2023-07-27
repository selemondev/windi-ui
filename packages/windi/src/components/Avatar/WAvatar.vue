<script setup lang='ts'>
import type { PropType } from 'vue'
import { computed, defineComponent, ref, watchEffect } from 'vue'
import classNames from 'classnames'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import type { WAvatar } from '../../Types/componentsTypes/components'
import { Components } from '../../Types/enums/Components'
import { useVariants } from '../../composables/useVariants'
import windiTheme from '../../theme/windiTheme'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type AvatarChipPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
const props = defineProps({
  ...getVariantPropsWithClassesList<WAvatar>(),
  name: {
    type: String,
    required: true,
    default: '?',
  },
  src: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<AvatarSize>,
    default: 'md',
  },

  initials: {
    type: String,
    default: null,
  },

  chipColor: {
    type: String,
    default: '',
  },

  chipSize: {
    type: String,
    default: 'md',
  },

  chipPosition: {
    type: String as PropType<AvatarChipPosition>,
    default: 'bottom-right',
  },

  chipText: {
    type: String,
    default: '',
  },

})

const avatarUrl = ref('')

watchEffect(() => {
  const img = new Image()
  img.src = props.src
  img.decode().then(() => (avatarUrl.value = props.src)).catch((err: string) => {
    avatarUrl.value = ''
    throw err
  })
})

const fallback = computed(() => {
  return props.initials || props.name.charAt(0) || '?'
})

const variant = useVariants<WAvatar>(Components.WAvatar, props)

const avatarWrapperClasses = computed<string>(() => {
  return classNames(
    variant.root,
    variant.avatarSize && variant[props.size],
  )
})
const avatarClasses = computed(() => {
  let sizeClass = ''

  if (typeof props.size === 'number') {
    return props.size
  }
  else {
    sizeClass += variant[props.size] || ''
    return classNames(variant.rounded, sizeClass, variant.root)
  }
})

const avatarChipSize = computed(() => {
  let sizeClass = ''

  if (typeof props.size === 'number') {
    return props.size
  }
  else {
    sizeClass += windiTheme.WAvatar.base.avatarChipSize[props.size] || ''
    return classNames(sizeClass)
  }
})

const avatarChipClass = computed(() => {
  return classNames(
    variant.avatarChipClass,
    windiTheme.WAvatar.base.avatarChipPosition[props.chipPosition],
  )
})

const avatarChipColorStyles = computed(() => ({
  'background-color': props.chipColor || '',
}))
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WAvatar,
})
</script>

<template>
  <span :class="[avatarWrapperClasses, avatarClasses]" :title="props.name">
    <img v-if="avatarUrl" :class="avatarClasses" :src="avatarUrl" :alt="props.name">
    <span v-else-if="!avatarUrl" :class="variant.placeholderClass">{{ fallback }}</span>
    <span v-if="props.chipColor" :style="avatarChipColorStyles" :class="[avatarChipClass, avatarChipSize]">
      {{ chipText }}
    </span>
    <slot />
  </span>
</template>