<script setup lang='ts'>
import { computed, defineComponent, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import classNames from 'classnames'
import { Icon } from '@iconify/vue'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import { useVariants } from '../../composables/useVariants'
import { Components } from '@/Types/enums/Components'
import type { WAccordionItem } from '@/Types/componentsTypes/components'

const props = defineProps({
  ...getVariantPropsWithClassesList<WAccordionItem>(),
  title: {
    type: String,
    default: null,
  },

  active: {
    type: String,
    default: null,
  },

  rounded: {
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
  icon: {
    type: String,
    default: '',
  },
  opened: {
    type: Boolean,
    default: false,
  },
})
const show = ref(false)
const contents = ref<HTMLElement>()

const { height: targetHeight } = useElementSize(contents, undefined, {
  box: 'border-box',
})

const height = computed(() => (show.value ? targetHeight.value : 0))

const toggle = () => (show.value = !show.value)

const variant = computed(() => {
  return useVariants<WAccordionItem>(
    Components.WAccordionItem,
    props as VariantJSWithClassesListProps<WAccordionItem>,
  )
})

const accordionItem = computed(() => {
  return classNames(
    show.value ? [variant.value.accordionItemActiveBackgroundColor, variant.value.accordionItemButton] : variant.value.accordionItemButton,
  )
})

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing)
})

const leadingIcon = computed(() => {
  return props.icon
})

const trailingIcon = computed(() => {
  return props.icon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || props.trailing
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WAccordionItem,
})
</script>

<template>
  <div>
    <div :class="[variant.root, props.rounded && variant.accordionItemRounded]">
      <div :class="accordionItem" :aria-expanded="show" @click="toggle">
        <div
          :class="[$slots.leading || isLeading ? variant.isLeading : variant.isNotLeading]"
          class="flex items-center"
        >
          <div class="shrink-0">
            <span v-if="(isLeading || $slots.leading)" class="space-x-2">
              <slot name="leading">
                <Icon :icon="leadingIcon" class="text-2xl" />
              </slot>
            </span>
          </div>
          <div>
            <div>
              <div :class="variant.accordionItemTitle">
                <h2>{{ props.title }}</h2>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!isTrailing && !$slots.trailing" :class="variant.accordionItemIcon">
          <WIcon
            name="material-symbols:keyboard-arrow-down" :class="[show ? `rotate-180 ${variant.accordionItemIcon}` : `rotate-65 ${variant.accordionItemIcon}`]"
          />
        </div>
        <div v-if="(isTrailing || $slots.trailing)">
          <slot name="trailing" :active="show">
            <Icon :icon="trailingIcon" class="text-2xl" />
          </slot>
        </div>
      </div>
    </div>
  </div>

  <div
    :style="{
      height: `${height}px`,
    }" :class="variant.accordionItembody"
  >
    <div ref="contents" :class="variant.accordionItemContent">
      <slot />
    </div>
  </div>
</template>
