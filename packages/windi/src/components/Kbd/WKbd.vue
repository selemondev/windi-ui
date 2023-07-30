<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import { Components } from '../../Types/enums/Components'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import type { WKbd } from '../../Types/componentsTypes/components'
import { useVariants } from '../../composables/useVariants.ts'
import windiTheme from '../../theme/windiTheme.ts'

const props = defineProps({
  ...getVariantPropsWithClassesList<WKbd>(),
  value: {
    type: String,
    default: null,
  },

  size: {
    type: String,
    default: 'sm',
  },
})

const variant = useVariants<WKbd>(Components.WKbd, props)
const kbdWrapperClass = computed(() => {
  return classNames(
    variant.root,
    variant.KbdRounded,
    variant.KbdFont,
    variant.KbdBackground,
    variant.KbdRing,
    windiTheme.WKbd.base.KbdSize[props.size],
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WKbd,
})
</script>

<template>
  <kbd
    :class="kbdWrapperClass"
  >
    <slot>
      {{ value }}
    </slot>
  </kbd>
</template>
