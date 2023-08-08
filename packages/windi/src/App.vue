<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()

const toggle = useToggle(isDark)
const isOpen = ref(false)

function openModal() {
  return isOpen.value = true
}
</script>

<template>
  <div class="grid place-items-center dark:bg-black w-full min-h-screen">
    <button class="dark:text-white" @click="toggle()">
      Theme
    </button>
    <WButton
      :variants="{
        'my-variant': {
          root: 'bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-all duration-200 ease-in',
        },
      }" :variant="['my-variant']" label="Open Modal" @click="openModal"
    />
    <WModal v-model="isOpen" />
  </div>
</template>
