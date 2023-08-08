<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()

const toggle = useToggle(isDark)

const isActive = ref(true)

function handleCloseTag() {
  return isActive.value = false
}
</script>

<template>
  <div class="grid place-items-center dark:bg-black w-full min-h-screen">
    <button class="dark:text-white" @click="toggle()">
      Theme
    </button>
    <div class="flex space-x-3">
      <WTag :is-active="isActive" value="Search" closable @close="handleCloseTag" />
      <WTag :is-active="isActive" value="Search" variant="primary" closable @close="handleCloseTag" />
      <WTag :is-active="isActive" value="Search" variant="success" closable @close="handleCloseTag" />
      <WTag :is-active="isActive" value="Search" variant="warning" closable @close="handleCloseTag" />
      <WTag :is-active="isActive" value="Search" variant="danger" closable @close="handleCloseTag" />
    </div>
  </div>
</template>
