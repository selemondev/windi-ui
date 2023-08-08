<script setup lang='ts'>
import { ref } from 'vue'

const password = ref('')

const email = ref('')

const inputType = ref('password')

const togglePasswordVisibility = () => {
    inputType.value = inputType.value === 'password' ? 'text' : 'password';
};
</script>

<template>
    <div class="grid place-items-center w-full">
        <div class="space-y-3">
            <WInput v-model="email" icon="ph:envelope" :trailing="true" placeholder="Email Address" label="Email"/>

            <WInput v-model="password" :type="inputType" label="Password" placeholder="Password" >
                <template #trailing>
                    <WIcon v-if="inputType === 'text'" name="ic:sharp-remove-red-eye" @click="togglePasswordVisibility()" size="xl" class="text-gray-500" />
                    <WIcon v-else name="mdi:eye-off" @click="togglePasswordVisibility()" size="xl" class="text-gray-500" />
                </template>
            </WInput>
        </div>
    </div>
</template>