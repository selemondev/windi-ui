<script setup lang='ts'>
function handleClose() {
  alert('Closing')
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <WTag value="Success" variant="success-light" closable @close="handleClose" />
  </div>
</template>
