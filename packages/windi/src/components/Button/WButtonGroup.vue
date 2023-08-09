<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import type { WButtonGroup } from '../../Types/componentsTypes/components'
import { Components } from '../../Types/enums/Components'
import { useVariants } from '../../composables/useVariants'

const props = defineProps({
  ...getVariantPropsWithClassesList<WButtonGroup>(),
  vertical: {
    type: Boolean,
    default: false,
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.vertical ? 'vertical' : 'horizontal',
  }
  return useVariants<WButtonGroup>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Components.WButtonGroup, customProps,
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WButtonGroup,
})
</script>

<template>
  <div :class="variant.root">
    <slot />
  </div>
</template>
