<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import { Icon } from '@iconify/vue'
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

  icon: {
    type: String,
    default: 'fluent:checkmark-12-filled',
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
    variant: props.disabled ? [props.variant, 'disabled'] : props.variant,
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
    variant.value.checkboxInput,
    variant.value.checkbox,
    variant.value.checkIcon,
    variant.value.checkIconActive,
  )
})

const isChecked = computed(() => {
  return props.modelValue && variant.value.checkIconActive
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WCheckbox,
})
</script>

<template>
  <label :class="variant.root">
    <div :class="variant.checkboxDisplay">
      <input
        :id="props.name" v-model="toggle" :name="props.name" :required="props.required" :value="props.value"
        :disabled="props.disabled" :checked="props.checked" type="checkbox" :class="checkboxWrapperClass" v-bind="$attrs"
      >
      <span :class="variant.checkbox">
        <div
          :class="[
            variant.checkIcon,
            isChecked,
          ]"
        >
          <Icon v-if="props.icon" :icon="props.icon" :class="variant.checkboxIconSize" />
          <Icon v-else :icon="props.icon" :class="variant.checkboxIconSize" />
        </div>
      </span>
    </div>
    <div v-if="label || $slots.label" :class="variant.checkboxSpace">
      <label :for="name" :class="variant.checkboxLabel">
        <slot name="label">{{ label }}</slot>
        <span v-if="required" :class="variant.checkboxRequired">*</span>
      </label>
      <p v-if="help" :class="[props.disabled ? variant.checkboxHelpDisabled : variant.checkboxHelp]">
        {{ help }}
      </p>
    </div>
  </label>
</template>
