<script setup lang='ts'>
import { ref } from 'vue'

const isActive = ref(true)
</script>

<template>
    <div class="w-full space-y-3">
        <WAlert :is-visible="isActive" title="Hello world">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>

        <WAlert :is-visible="isActive" title="Hello world" variant="primary">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>


        <WAlert :is-visible="isActive" title="Hello world" variant="success">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>

        <WAlert :is-visible="isActive" title="Hello world" variant="warning">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>

        <WAlert :is-visible="isActive" title="Hello world" variant="danger">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>
    </div>
</template>