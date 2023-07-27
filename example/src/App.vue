<script setup lang='ts'>
import { ref } from "vue"
const show = ref(true)

const handleClose = () => {
  return show.value = false
}
</script>

<template>
  <div class="mt-48 p-4 space-y-2">
    <WIcon name="ph:sun" size="100" />
    <WAlert :is-visible="show" variant="primary-light" transition="scale" title="Alert" closable @close="handleClose">
      <WAlertDescription>
        Hello from alert
      </WAlertDescription>
    </WAlert>

    <WAlert variant="primary" transition="fade" title="Alert" closable>
      <WAlertDescription>
        Hello from alert
      </WAlertDescription>
    </WAlert>

    <WAlert variant="primary-dashed" transition="slideLeft" title="Alert" closable>
      <WAlertDescription>
        Hello from alert
      </WAlertDescription>
    </WAlert>
  </div>
</template>
