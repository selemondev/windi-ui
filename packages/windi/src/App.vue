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
      <div class="flex space-x-3">
        <WAvatar
          src="https://github.com/selemondev.png" name="Selemondev" chip-color="green" chip-text="online"
          chip-position="top-right" size="lg"
        />
        <WAvatar
          src="https://github.com/Ryggs.png" name="Ryan Giggs" chip-color="green" chip-text="online"
          chip-position="top-left" size="lg"
        />
        <WAvatar
          src="https://github.com/atinux.png" name="Sebastian Chopin" chip-color="green" chip-text="online"
          chip-position="bottom-right" size="lg"
        />
        <WAvatar
          src="https://github.com/yyx990803.png" name="Evan You" chip-color="green" chip-text="online"
          chip-position="bottom-left" size="lg"
        />

        <WAvatar src="https://github.com/danielroe.png" name="Daniel Roe" chip-color="red" size="lg" />
        <WAvatar src="https://github.com/baroshem.png" name="Jakub Andrzejewski" chip-color="yellow" size="lg" />
        <WAvatar src="https://github.com/posva.png" name="Eduardo" chip-color="orange" size="lg" />
        <WAvatar src="https://github.com/pi0.png" name="Pooya Parsa" chip-color="purple" size="lg" />
        <WAvatar src="https://github.com/alvarosabu.png" name="Alvaro" chip-color="blue" size="lg" />
        <WAvatar src="https://github.com/webfansplz.png" name="Webfansplz" chip-color="green" size="lg" />
        <WAvatar src="https://github.com/danielkellyio.png" name="Daniel Kelly" chip-color="violet" size="lg" />
      </div>
    </div>
  </div>
</template>
