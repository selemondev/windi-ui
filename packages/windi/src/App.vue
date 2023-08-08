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
    <div class="flex items-center space-x-3">
      <div>
        <WButton to="https://github.com/selemondev" label="Selemondev" variant="primary" />
      </div>
    </div>
  </div>
</template>
