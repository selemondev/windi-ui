<script setup lang='ts'>
import { ref } from 'vue'

const show = ref(true)

function handleClose() {
  return show.value = false
}
</script>

<template>
  <div>
    <WAvatarGroup :max="2" size="md">
      <WAvatar src="https://github.com/selemondev.png" name="Selemon" initials="SB" />
      <WAvatar src="https://github.com/selemondev.png" name="Selemon" initials="SB" />
      <WAvatar src="https://github.cm/selemondev.png" name="Selemon" initials="SB" />
    </WAvatarGroup>
  </div>
  <div class="mt-48 p-4 space-y-2">
    <WAlert :is-visible="show" icon="ph:sun" :trailing="false" variant="danger-light" transition="slideRight" title="Alert" closable @close="handleClose">
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
