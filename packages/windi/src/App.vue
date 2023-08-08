<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()

const toggle = useToggle(isDark)

const checked = ref(false)
</script>

<template>
  <div class="grid place-items-center dark:bg-black w-full min-h-screen">
    <button class="dark:text-white" @click="toggle()">
      Theme
    </button>
    <div>
      <WCheckbox v-model="checked" disabled label="Agree" help="Please mark the checkbox." required />
    </div>
  </div>
</template>
