<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()

const toggle = useToggle(isDark)

const searchTerm = ref('')

function clearSearchTerm() {
  return searchTerm.value = ''
}
</script>

<template>
  <div class="grid place-items-center dark:bg-black w-full min-h-screen">
    <button class="dark:text-white" @click="toggle()">
      Theme
    </button>
    <div>
      <div class="space-y-6">
        <WInput v-model="searchTerm" icon="carbon:search" placeholder="Search">
          <template v-if="searchTerm !== ''" #trailing>
            <WIcon name="heroicons:x-mark-20-solid" class="text-gray-500" @click="clearSearchTerm()" />
          </template>
        </WInput>
      </div>
    </div>
  </div>
</template>
