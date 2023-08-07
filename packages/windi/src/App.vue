<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const toggle = useToggle(isDark)
</script>

<template>
  <div class="grid place-items-center dark:bg-black w-full min-h-screen">
    <button class="dark:text-white" @click="toggle()">
      Theme
    </button>
    <div>
      <div class="flex space-x-12">
        <WBadge value="online" variant="primary">
          <WButton label="Primary" variant="primary" />
        </WBadge>
        <WBadge value="online" variant="success">
          <WButton label="Success" variant="success" />
        </WBadge>
        <WBadge value="online" variant="warning">
          <WButton label="Warning" variant="warning" />
        </WBadge>
        <WBadge value="online" variant="danger">
          <WButton label="Danger" variant="danger" />
        </WBadge>
      </div>
    </div>
  </div>
</template>
