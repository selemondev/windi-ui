<script lang="ts" setup>
import {
  XMarkIcon,
} from '@heroicons/vue/24/solid'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import type { WAlert } from '../../Types/componentsTypes/components'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import { useVariants } from '../../composables/useVariants'
import { Components } from '../../Types/enums/Components'

export type Transition = 'fade' | 'slide' | 'slideLeft' | 'slideRight' | 'scale'
const props = defineProps({
  ...getVariantPropsWithClassesList<WAlert>(),
  light: {
    type: Boolean,
    default: false,
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false,
  },
  transition: {
    type: String as PropType<Transition>,
    default: 'slide',
  },
  closable: {
    type: Boolean,
    default: false,
  },
  dismissLabel: {
    type: String,
    default: 'Dismiss',
  },
  icon: {
    type: String,
    default: '',
  },
  leadingIcon: {
    type: String,
    default: null,
  },
  trailingIcon: {
    type: String,
    default: null,
  },
  trailing: {
    type: Boolean,
    default: false,
  },
  leading: {
    type: Boolean,
    default: false,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (event: 'close'): void
}>()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<WAlert>(
    Components.WAlert,
    customProps as VariantJSWithClassesListProps<WAlert>,
  )
})

const leadingIconName = computed(() => {
  return props.leadingIcon || props.icon
})

const trailingIconName = computed(() => {
  return props.trailingIcon || props.icon
})

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || props.leadingIcon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || props.trailingIcon
})

const transition = computed(() => {
  return props.transition === 'scale' ? variant.value.transitions?.scale : props.transition === 'fade' ? variant.value.transitions?.fade : props.transition === 'slideLeft' ? variant.value.transitions?.slideLeft : variant.value.transitions?.slideRight
})

function onDismiss() {
  emit('close')
}
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WAlert,
})
</script>

<template>
  <Transition v-bind="transition" mode="out-in">
    <div v-if="props.isVisible" :class="variant.root">
      <div :class="variant.alertFlexBetween">
        <div :class="[$slots.leading || isLeading ? variant.alertIsLeading : variant.alertIsNotLeading]" class="flex items-center">
          <div class="shrink-0">
            <p v-if="(isLeading && leadingIconName) || $slots.leading" :class="variant.alertIconIsLeading">
              <slot name="leading">
                <Icon :icon="leadingIconName" class="text-2xl" />
              </slot>
            </p>
          </div>
          <div>
            <h2 v-if="props.title" :class="variant.alertTitle">
              {{ props.title }}
            </h2>
            <div class="text-sm">
              <slot />
            </div>
          </div>
        </div>

        <div>
          <div class="shrink-0">
            <button
              v-if="props.closable && !isTrailing && !$slots.trailing" :title="dismissLabel"
              :aria-label="dismissLabel" :class="variant.alertCloseButtonClass" @click="onDismiss()"
            >
              <XMarkIcon class="w-6 h-6 hover:text-white" :class="variant.alertCloseIcon" />
            </button>

            <button
              v-if="props.trailing || isTrailing || $slots.trailing" :title="dismissLabel"
              :aria-label="dismissLabel" :class="variant.alertTrailingClass" @click="onDismiss()"
            >
              <span v-if="(isTrailing && trailingIconName) || $slots.trailing">
                <slot name="trailing">
                  <Icon :icon="trailingIconName" class="text-2xl" />
                </slot>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
