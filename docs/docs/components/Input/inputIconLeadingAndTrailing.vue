<script setup lang='ts'>
import { ref } from 'vue'

const searchTerm = ref('')

function clearSearchTerm() {
  return searchTerm.value = ''
}
</script>

<template>
    <div class="grid place-items-center w-full">
        <WInput v-model="searchTerm" icon="carbon:search" placeholder="Search">
            <template #trailing v-if="searchTerm !== ''">
                <WIcon name="heroicons:x-mark-20-solid" @click="clearSearchTerm()" class="text-gray-500" />
            </template>
        </WInput>
    </div>
</template>