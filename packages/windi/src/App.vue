<script setup lang='ts'>
import { ref } from 'vue'

const isActive = ref(false)

function handleOpen() {
  return isActive.value = true
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <button @click="handleOpen">
      Open Modal
    </button>
    <WModal v-model="isActive">
      hello there
    </WModal>
  </div>
</template>
