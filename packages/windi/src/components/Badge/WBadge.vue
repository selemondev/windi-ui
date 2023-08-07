<script setup lang='ts'>
import { computed, defineComponent, useSlots } from 'vue'
import classNames from 'classnames'
import { Positions } from '../../Types/enums/Positions'
import { Components } from '../../Types/enums/Components'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import type { WBadge } from '../../Types/componentsTypes/components'
import { useVariants } from '../../composables/useVariants'
import windiTheme from '../../theme/windiTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<WBadge>(),
  square: {
    type: Boolean,
    default: false,
  },
  chip: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: Positions.TR,
  },
  maxValue: {
    type: Number,
    default: null,
  },
  value: {
    type: [String, Number],
    default: null,
  },
})
const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<WBadge>(
    Components.WBadge,
    customProps as VariantJSWithClassesListProps<WBadge>,
  )
})

const slots = useSlots()
const badgeValue = computed(() => {
  if (props.chip || !props.value)
    return

  if (props.maxValue !== null)
    return Number(props.value) > props.maxValue ? `${props.maxValue}+` : props.value

  else
    return props.value
})

const badgePosition = computed(() => {
  return classNames(
    slots.default && windiTheme.WBadge.base.badgePosition[props.position],
  )
})

const badgeChip = computed(() => {
  return classNames(
    props.chip && variant.value.badgeChip,
  )
})

const badgeSquare = computed(() => {
  return classNames(
    props.square && variant.value.badgeSquare,
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WBadge,
})
</script>

<template>
  <div :class="variant.root">
    <span :class="variant.default">
      <slot />
      <Transition v-bind="variant.transitions?.fade">
        <span
          :class="[
            variant.badgeBody, badgePosition, badgeChip, badgeSquare,
          ]"
        >
          <slot name="badgeValue">{{ badgeValue }}</slot>
        </span>
      </Transition>
    </span>
  </div>
</template>
