<script setup lang='ts'>
import { ref } from 'vue'

const show = ref(true)

function handleClose() {
  return show.value = false
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <WAvatar src="https://github.cm/selemondev.png" name="Selemon" size="xl" chip-color="orange" chip-position="bottom-left" initials="SB" />
    <WBadge position="top-right" value="100" :max-value="99" variant="primary">
      <WIcon name="ph:bell" size="3xl" />
    </WBadge>
    <WAlert :is-visible="show" icon="ph:sun" :trailing="false" variant="primary" transition="slideLeft" title="Alert" closable @close="handleClose">
      <WAlertDescription>
        Hello from alert
      </WAlertDescription>
    </WAlert>
    <WButton icon="ph:sun" variant="warning-light" size="xl" type="button" />
    <WButtonGroup>
      <WButton icon="ph:sun" variant="primary" size="xl" type="button" />
      <WButton icon="ph:sun" variant="primary" size="xl" type="button" />
      <WButton icon="ph:sun" variant="primary" size="xl" type="button" />
    </WButtonGroup>
  </div>
  <div class="grid place-items-center">
    <WAvatarGroup :max="2" size="md">
      <WAvatar src="https://github.com/selemondev.png" name="Selemon" initials="SB" />
      <WAvatar src="https://github.com/selemondev.png" name="Selemon" initials="SB" />
      <WAvatar src="https://github.cm/selemondev.png" name="Selemon" initials="SB" />
    </WAvatarGroup>
  </div>
  <div class="mt-48 p-4 space-y-2">
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
