<script lang="ts">
import { defineComponent } from 'vue'
import { Components } from '../../Types/enums/Components'

export default defineComponent({
  name: Components.WAlertDescription,
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
