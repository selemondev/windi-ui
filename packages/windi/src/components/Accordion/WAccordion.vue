<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import { useVariants } from '../../composables/useVariants'
import type { WAccordion } from '../../Types/componentsTypes/components'
import { Components } from '../../Types/enums/Components'

const props = defineProps({
  ...getVariantPropsWithClassesList<WAccordion>(),
})

const variant = computed(() => {
  return useVariants<WAccordion>(
    Components.WAccordion,
    props as VariantJSWithClassesListProps<WAccordion>,
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WAccordion,
})
</script>

<template>
  <div :class="variant.root">
    <slot />
  </div>
</template>
