<script setup lang='ts'>
import { ref } from 'vue'

const agree = ref('')
</script>

<template>
  <div class="grid place-items-center mt-72">
    <WCheckbox v-model="agree" icon="quill:checkmark-double" variant="warning" help="Please check the checkbox" label="Checkbox" required />
  </div>
</template>
