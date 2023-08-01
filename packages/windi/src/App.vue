<script setup lang='ts'>
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <WSwitch v-model="selected" on-icon="ph:sun" off-icon="ph:moon" class="text-xl" />
  </div>
</template>
