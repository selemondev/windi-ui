<script setup lang='ts'>
import { computed, defineComponent, onMounted, ref, useSlots } from 'vue'
import type { PropType } from 'vue'
import classNames from 'classnames'
import { Icon } from '@iconify/vue'
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps'
import type { VariantJSWithClassesListProps } from '../../utils/getVariantProps'
import type { WInput } from '../../Types/componentsTypes/components'
import windiTheme from '../../theme/windiTheme'
import { Components } from '../../Types/enums/Components'
import { useVariants } from '../../composables/useVariants'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = defineProps({
  ...getVariantPropsWithClassesList<WInput>(),
  modelValue: {
    type: [String, Number],
    default: '',
  },
  rounded: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    default: null,
  },
  padded: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  loadingIcon: {
    type: String,
    default: () => windiTheme.WInput.base.inputLoadingIcon,
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
  loading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<Size>,
    default: 'md',
    validator(value: string) {
      return Object.keys(windiTheme.WInput.base.inputSize).includes(value)
    },
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number): void
}>()
const slots = useSlots()
const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<WInput>(
    Components.WInput,
    customProps as VariantJSWithClassesListProps<WInput>,
  )
})

function onInput(event: InputEvent) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
const input = ref<HTMLInputElement | null>(null)

function autoFocus() {
  if (props.autofocus)
    input.value?.focus()
}

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || (props.loading && !props.trailing) || props.leadingIcon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
})

const leadingIconName = computed(() => {
  if (props.loading)
    return props.loadingIcon

  return props.leadingIcon || props.icon
})

const trailingIconName = computed(() => {
  if (props.loading && !isLeading.value)
    return props.loadingIcon

  return props.trailingIcon || props.icon
})

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, 100)
})

const inputLabelTextSize = computed(() => {
  return classNames(
    variant.value.inputLabel,
    windiTheme.WInput.base.inputSize && windiTheme.WInput.base.inputSize[props.size],
  )
})

const inputWrapperClass = computed(() => {
  return classNames(
    windiTheme.WInput.base.inputRounded[props.rounded],
    variant.value.inputWrapper,
    variant.value.inputPlaceholder,
    windiTheme.WInput.base.inputSize && windiTheme.WInput.base.inputSize[props.size],
    props.padded ? windiTheme.WInput.base.inputPadding && windiTheme.WInput.base.inputPadding[props.size] : '!p-0',
    (isLeading.value || slots.leading) && windiTheme.WInput.base.inputLeadingPadding && windiTheme.WInput.base.inputLeadingPadding[props.size],
    (isTrailing.value || slots.trailing) && windiTheme.WInput.base.inputTrailingPadding && windiTheme.WInput.base.inputTrailingPadding[props.size],
  )
})

const leadingIconClass = computed(() => {
  return classNames(
    variant.value.inputIcon,
    windiTheme.WInput.base.inputIconSize && windiTheme.WInput.base.inputIconSize[props.size],
    props.loading && 'animate-spin',
  )
})

const iconLeadingWrapperClass = computed(() => {
  return classNames(
    variant.value.inputIconLeading,
    windiTheme.WInput.base.inputIconLeadingPadding && windiTheme.WInput.base.inputIconLeadingPadding[props.size],
  )
})

const iconTrailingWrapperClass = computed(() => {
  return classNames(
    variant.value.inputIconTrailing,
    windiTheme.WInput.base.inputIconTrailingPadding && windiTheme.WInput.base.inputIconTrailingPadding[props.size],
  )
})

const trailingIconClass = computed(() => {
  return classNames(
    variant.value.inputIcon,
    windiTheme.WInput.base.inputIconSize && windiTheme.WInput.base.inputIconSize[props.size],
    props.loading && !isLeading.value && 'animate-spin',
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.WInput,
  inheritAttrs: false,
})
</script>

<template>
  <div>
    <div :class="variant.inputRequiredDisplay">
      <span v-if="props.label" :class="inputLabelTextSize">{{ props.label }}</span>
      <span v-if="required" :class="variant.inputRequired">*</span>
    </div>
    <div :class="variant.root">
      <!-- @vue-ignore -->
      <input
        :id="name"
        ref="input"
        :name="name"
        :value="modelValue"
        :type="type"
        :required="required"
        :placeholder="placeholder"
        :disabled="disabled || loading"
        class="form-input"
        :class="inputWrapperClass"
        v-bind="$attrs"
        @input="onInput"
      >
      <slot />

      <span v-if="(isLeading && leadingIconName) || $slots.leading" :class="iconLeadingWrapperClass">
        <slot name="leading" :disabled="disabled" :loading="loading">
          <Icon :icon="leadingIconName" :class="leadingIconClass" />
        </slot>
      </span>

      <span v-if="(isTrailing && trailingIconName) || $slots.trailing" :class="iconTrailingWrapperClass">
        <slot name="trailing" :disabled="disabled" :loading="loading">
          <Icon :icon="trailingIconName" :class="trailingIconClass" />
        </slot>
      </span>
    </div>
    <div>
      <span v-if="props.help" :class="variant.inputHelp">{{ props.help }}</span>
    </div>
  </div>
</template>

<style>
.form-input {
  appearance: none;
}
</style>
