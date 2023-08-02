<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import { useVariants } from '../../composables/useVariants'
import type { WModal } from '../../Types/componentsTypes/components'
import { Components } from '../../Types/enums/Components'
import windiTheme from '@/theme/windiTheme'

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
    emit('update:modelValue', value)
  },
})

const transitionClassWrapper = computed(() => {
  if (!props.transition)
    return {}

  return {
    ...windiTheme.WModal.base.modalOverlayTransition,
  }
})

function close(value: boolean) {
  isOpen.value = value

  emit('close')
}

const transitionOverlay = computed(() => {
  return {
    ...windiTheme.WModal.base.modalOverlayTransition,
  }
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WModal,
})
</script>

<template>
  <TransitionRoot :appear="appear" :show="isOpen" as="template">
    <Dialog :class="variant.root" @close="(e: boolean) => !disableClose && close(e)">
      <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="transitionOverlay">
        <div :class="[variant.modalOverlayBase, variant.modalOverlayBackground]" />
      </TransitionChild>

      <div :class="variant.modalInner">
        <div :class="[variant.modalContainer]">
          <TransitionChild as="template" :appear="appear" v-bind="transitionClassWrapper">
            <DialogPanel :class="[variant.modalPadding, variant.modalBase, variant.modalHeight, variant.modalWidth, variant.modalShadow, variant.modalBackground, variant.modalRing, variant.modalRounded]">
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
