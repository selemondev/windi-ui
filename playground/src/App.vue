<script setup lang="ts">
// import { OMessage as message } from 'onu-ui'
import { Repl } from '@vue/repl'
// import type { OMessageProps } from 'onu-ui'
import playConfig from '../playground.config'
import Header from '~/components/Header.vue'
import { useStore } from '~/composables/store'
import type { ReplStore, UserOptions, Versions } from '~/composables/store'
import { generate } from '~/utils/uno/uno'
import { handleKeydown } from '~/utils/format'
import { IS_DEV } from '~/constants'

const loading = ref(true)
const sfcOptions: any = {
    script: {
        reactivityTransform: true,
    },
}
const initialUserOptions: UserOptions = {}
const params = new URLSearchParams(location.search)


const initialVersions: Versions = {
    //@ts-ignore
    [playConfig.compLibShort]: (IS_DEV ? `@${__COMMIT__}` : params.get(playConfig.compLibShort)) || 'latest',
    vue: params.get('vue') || 'latest',
}


const store = useStore({
    serializedState: location.hash.slice(1),
    userOptions: initialUserOptions,
    versions: initialVersions,
}) as ReplStore


store.init().then(() => {
    loading.value = false
    //   message({
    //     content: 'please wait patiently',
    //     type: 'info',
    //   } as OMessageProps)
})

watchEffect(() => {
    history.replaceState({}, '', `#${store.serialize()}`)
})

window.addEventListener(
    'message',
    (event) => {
        if (typeof event.data === 'string') {
            generate(event.data, (css: string) => {
                const frame = document.querySelectorAll('iframe')
                if (frame.length > 0)
                    frame[0].contentWindow?.postMessage(css, '*')
            })
        }
    },
    false,
)
</script>

<template>
    <div class="comp-lib-play">
        <Header :store="store" />
        <!-- store as any because store.compiler is shallowRef -->
        <Repl v-if="!loading" ref="repl" :store="store as any" auto-resize :sfc-options="sfcOptions" :clear-console="false"
            :show-import-map="store.userOptions.value.showHidden || false"
            @keydown="(event) => handleKeydown(event, store)" />
        <div v-if="loading" class="loading-wrapper" flex items-center justify-center flex-col>
            <p text-lg>
                loading the playground...... 🤣
            </p>
        </div>
    </div>
</template>

<style>
body {
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    --base: #444;
    --nav-height: 52px;
    --color-file-active: #06b6d4;
}

.comp-lib-play .file.active,
.comp-lib-play button.active {
    color: var(--color-file-active);
    border-bottom: 3px solid var(--color-file-active);
    cursor: text;
}

.vue-repl {
    height: calc(100vh - var(--nav-height) - 1px);
}

/*loading*/
.loading-wrapper {
    width: 100%;
    min-height: calc(100vh - var(--nav-height) - 1px);
}

.loading-wrapper>.i-carbon-circle-dash {
    width: 3rem;
    height: 3rem;
    animation: loadingCircle 1s infinite linear;
}

@keyframes loadingCircle {
    to {
        transform: rotate(360deg);
    }
}
</style>