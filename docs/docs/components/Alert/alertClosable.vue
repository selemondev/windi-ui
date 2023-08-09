<script setup lang='ts'>
import { ref } from 'vue'

const isDefaultActive = ref(true)

const handleDefaultAlertClose = () => {
    return isDefaultActive.value = false
}

const isPrimaryActive = ref(true)

const handlePrimaryAlertClose = () => {
    return isPrimaryActive.value = false
}

const isSuccessActive = ref(true)

const handleSuccessAlertClose = () => {
    return isSuccessActive.value = false
}

const isWarningActive = ref(true)

const handleWarningAlertClose = () => {
    return isWarningActive.value = false
}

const isDangerActive = ref(true)

const handleDangerAlertClose = () => {
    return isDangerActive.value = false
}
</script>

<template>
    <div class="w-full space-y-3">
        <WAlert :is-visible="isDefaultActive" closable @close="handleDefaultAlertClose" title="Hello world">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>

        <WAlert :is-visible="isPrimaryActive" closable @close="handlePrimaryAlertClose" title="Hello world" variant="primary">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>


        <WAlert :is-visible="isSuccessActive" closable @close="handleSuccessAlertClose" title="Hello world" variant="success">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>

        <WAlert :is-visible="isWarningActive" closable @close="handleWarningAlertClose" title="Hello world" variant="warning">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>

        <WAlert :is-visible="isDangerActive" closable @close="handleDangerAlertClose" title="Hello world" variant="danger">
            <WAlertDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, excepturi!
            </WAlertDescription>
        </WAlert>
    </div>
</template>