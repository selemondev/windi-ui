<script setup lang='ts'>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const toggleTheme = useToggle(isDark)

const isActive = ref(false)

function openModal() {
  return isActive.value = true
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen dark:bg-black bg-white">
    <WModal
      v-model="isActive"
    />
    <button class="text-black dark:text-white" @click="openModal">
      Open Modal
    </button>

    <button class="text-black dark:text-white" @click="toggleTheme()">
      Toggle Theme
    </button>
  </div>
</template>
