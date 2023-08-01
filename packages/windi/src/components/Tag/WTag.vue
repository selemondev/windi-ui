<script setup lang='ts'>
import { computed, defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
import classNames from 'classnames'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import { Components } from '../../Types/enums/Components'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import type { WTag } from '../../Types/componentsTypes/components'
import { useVariants } from '../../composables/useVariants'
import windiTheme from '../../theme/windiTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<WTag>(),
  closable: {
    type: Boolean,
    default: false,
  },

  rounded: {
    type: String,
    default: 'md',
  },

  size: {
    type: String,
    default: 'md',
  },

  dismissLabel: {
    type: String,
    default: 'Dismiss',
  },

  value: {
    type: String,
    default: null,
  },
})

const emit = defineEmits<{
  (event: 'close'): void
}>()

const isActive = ref(true)

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }

  return useVariants<WTag>(
    Components.WTag,
    customProps as VariantJSWithClassesListProps<WTag>,
  )
})

const tagWrapperClass = computed(() => {
  return classNames(
    variant.value.root,
    windiTheme.WTag.base.tagRounded[props.rounded],
    windiTheme.WTag.base.tagSize[props.size],
  )
})
function onDismiss() {
  emit('close')
  return isActive.value = false
}
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WTag,
})
</script>

<template>
  <div v-if="isActive" :class="tagWrapperClass">
    <p>{{ props.value }}</p>
    <p v-if="props.closable">
      <Icon icon="ph:x-bold" :aria-label="dismissLabel" :class="variant.tagCloseIcon" @click="onDismiss()" />
    </p>
  </div>
</template>
