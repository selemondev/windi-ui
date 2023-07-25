<script setup lang="ts">
import { ref, version as vueVersion } from 'vue'
const msg = ref('Hello Onu UI!')
// const checkVal = ref(true)
// const mv = ref(true)
// const avatarSrcs = 'https://github.com/selemondev.png'

// const className = 'dark'
// const isDark = ref(false)

// const toggleTheme = () => {
//   if (typeof window !== 'undefined') {
//     const rootCls = document.documentElement.classList
//     isDark.value = !isDark.value
//     if (isDark.value)
//       rootCls.add(className)
//     else
//       rootCls.remove(className)
//   }
// }
</script>

<template>
  <div p-5 space-y-3>
    <h1>{{ msg }}</h1>

    <!-- <div fscw gap-2>
      <img :src="avatarSrcs" h-10 w-10 />
    </div> -->


    <p text-black>Vue {{ vueVersion }}</p>
  </div>
</template>

<style>
/* body {
  color: var(--onu-colors-text);
  background-color: var(--onu-colors-background);
} */
</style>