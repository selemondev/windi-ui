<script setup lang='ts'>
import type { PropType } from 'vue'
import { computed, defineComponent, ref, watchEffect } from 'vue'
import classNames from 'classnames'
import { Icon } from '@iconify/vue'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
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
    required: false,
  },
  src: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<AvatarSize>,
    default: 'md',
  },

  icon: {
    type: String,
    default: 'ic:round-star-border',
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
  return props.initials || props.name?.charAt(0)
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<WAvatar>(
    Components.WAvatar,
    customProps as VariantJSWithClassesListProps<WAvatar>,
  )
})

const avatarWrapperClasses = computed<string>(() => {
  return classNames(
    variant.value.root,
    variant.value.avatarSize && variant.value[props.size],
  )
})
const avatarClasses = computed(() => {
  let sizeClass = ''

  if (typeof props.size === 'number') {
    return props.size
  }
  else {
    sizeClass += variant.value[props.size] || ''
    return classNames(variant.value.avatarRounded, sizeClass, variant.value.root)
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
    variant.value.avatarChipClass,
    windiTheme.WAvatar.base.avatarChipPosition[props.chipPosition],
  )
})

const avatarIconSize = computed(() => {
  return classNames(
    windiTheme.WAvatar.base.avatarIconSize[props.size],
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
    <span v-else-if="!avatarUrl" :class="variant.avatarPlaceholderClass">{{ fallback }}</span>
    <Icon v-if="!avatarUrl && !fallback" :icon="props.icon" :class="[avatarIconSize, variant.avatarIconColor]" />
    <span v-if="props.chipColor" :style="avatarChipColorStyles" :class="[avatarChipClass, avatarChipSize]">
      {{ chipText }}
    </span>
    <slot />
  </span>
</template>
