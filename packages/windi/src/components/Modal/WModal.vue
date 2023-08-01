<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import { useVariants } from '../../composables/useVariants'
import type { WModal } from '../../Types/componentsTypes/components'
import { Components } from '../../Types/enums/Components'

const props = defineProps({
  ...getVariantPropsWithClassesList<WModal>(),
  modelValue: {
    type: Boolean,
    default: false,
  },
  disableClose: {
    type: Boolean,
    default: false,
  },
  appear: {
    type: Boolean,
    default: false,
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  transition: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
  (event: 'close')
}>()

const variant = computed(() => {
  const customProps = {
    ...props,
  }

  return useVariants<WModal>(
    Components.WModal,
    customProps as VariantJSWithClassesListProps<WModal>,
  )
})

const isOpen = computed({
  get() {
    return props.modelValue
  },

  set(value) {
    return emit('update:modelValue', value)
  },
})

const transitionClassWrapper = computed(() => {
  if (!props.transition)
    return {}

  return {
    ...variant.value.transitions,
  }
})

function close(value: boolean) {
  isOpen.value = value

  emit('close')
}

const transitionOverlay = computed(() => {
  return classNames(
    variant.value.modalOverlayTransition,
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WModal,
})
</script>

<template>
  <TransitionRoot :appear="appear" :show="isOpen" as="template">
    <Dialog :class="variant.root" @close="(e: boolean) => !props.disableClose && close(e)">
      <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="transitionOverlay">
        <div :class="[variant.modalOverlayBase, variant.modalOverlayBackground]" />
      </TransitionChild>

      <div :class="variant.modalWrapper">
        <div :class="variant.container">
          <TransitionChild as="template" :appear="appear" v-bind="transitionClassWrapper">
            <DialogPanel :class="[variant.modalBase, variant.modalHeight, variant.modalWidth, variant.modalShadow, variant.modalBackground, variant.modalRing, variant.modalRounded]">
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
