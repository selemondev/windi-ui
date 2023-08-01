<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import { useVariants } from '../../composables/useVariants'
import type { WDivider } from '../../Types/componentsTypes/components'
import { Components } from '../../Types/enums/Components'

const props = defineProps({
  ...getVariantPropsWithClassesList<WDivider>(),
  vertical: {
    type: Boolean,
    default: false,
  },
})

const variant = computed(() => {
  return useVariants<WDivider>(Components.WDivider, props)
})

const isVertical = computed(() => {
  return classNames(
    props.vertical && variant.value.dividerVertical,
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WDivider,
})
</script>

<template>
  <div :class="[variant.root, isVertical]" role="separator" />
</template>
