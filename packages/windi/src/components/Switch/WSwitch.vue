<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import { Switch } from '@headlessui/vue'
import { Icon } from '@iconify/vue'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import type { WSwitch } from '../../Types/componentsTypes/components'
import { useVariants } from '../../composables/useVariants'
import { Components } from '../../Types/enums/Components'

const props = defineProps({
  ...getVariantPropsWithClassesList<WSwitch>(),
  name: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onIcon: {
    type: String,
    default: null,
  },

  offIcon: {
    type: String,
    default: null,
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const toggle = computed({
  get() {
    return props.modelValue
  },

  set(value) {
    return emit('update:modelValue', value)
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<WSwitch>(
    Components.WSwitch,
    customProps as VariantJSWithClassesListProps<WSwitch>,
  )
})

const switchClassWrapper = computed(() => {
  return classNames(
    variant.value.root,
    variant.value.switchRounded,
    toggle.value ? variant.value.switchActive : variant.value.switchInActive,
  )
})
</script>

<script lang='ts'>
export default defineComponent({
  name: Components.WSwitch,
})
</script>

<template>
  <Switch
    v-model="toggle"
    :name="name"
    :disabled="disabled"
    :class="switchClassWrapper"
  >
    <span :class="[toggle ? variant.switchContainerActive : variant.switchContainerInActive, variant.switchContainer]">
      <span v-if="props.onIcon" :class="[toggle ? variant.switchIconActive : variant.switchIconInActive, variant.switchIcon]" aria-hidden="true">
        <Icon :icon="onIcon" :class="variant.switchIconOn" />
      </span>
      <span v-if="props.offIcon" :class="[toggle ? variant.switchIconInActive : variant.switchIconActive, variant.switchIcon]" aria-hidden="true">
        <Icon :icon="offIcon" :class="variant.switchIconOff" />
      </span>
    </span>
  </Switch>
</template>
