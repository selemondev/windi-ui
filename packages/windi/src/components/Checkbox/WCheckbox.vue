<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import type { WCheckbox } from '../../Types/componentsTypes/components'
import { Components } from '../../Types/enums/Components'
import { useVariants } from '../../composables/useVariants'

const props = defineProps({
  ...getVariantPropsWithClassesList<WCheckbox>(),
  value: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  modelValue: {
    type: [Boolean, Array],
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', e): void
}>()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<WCheckbox>(
    Components.WCheckbox,
    customProps as VariantJSWithClassesListProps<WCheckbox>,
  )
})

const toggle = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const checkboxWrapperClass = computed(() => {
  return classNames(
    variant.value.checkboxWrapper,
    variant.value.checkIcon,
    variant.value.checkIconActive,
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WCheckbox,
})
</script>

<template>
  <div :class="variant.root">
    <div class="flex items-center h-5">
      <input
        :id="props.name" v-model="toggle" :name="props.name" :required="props.required" :value="props.value" :disabled="props.disabled"
        :checked="props.checked" type="checkbox" class="form-checkbox" :class="checkboxWrapperClass"
        v-bind="$attrs"
      >
    </div>
    <div v-if="label || $slots.label" class="ms-2 text-sm">
      <label :for="name" :class="variant.checkboxLabel">
        <slot name="label">{{ label }}</slot>
        <span v-if="required" :class="variant.checkboxRequired">*</span>
      </label>
      <p v-if="help" :class="variant.checkboxHelp">
        {{ help }}
      </p>
    </div>
  </div>
</template>
