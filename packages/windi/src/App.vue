<script setup lang='ts'>

</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div class="w-96">
      <WAlert :is-visible="true" title="Critical Error" closable variant="primary-light">
        <template #leading>
          <WAvatar src="https://github.com/selemondev.png" />
        </template>
        <WDescription>
          <p>Hello there my friends how are you</p>
        </WDescription>
      </WAlert>
    </div>
  </div>
</template>
