<script setup lang='ts'>
import { ref } from 'vue'

const isActive = ref(false)

function handleOpen() {
  return isActive.value = true
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div class="w-96">
      <WAlert :is-visible="true" title="Critical Error" closable variant="primary-light">
        <WDescription>
          <p>Hello there my friends how are you</p>
        </WDescription>
      </WAlert>
    </div>
  </div>
</template>
