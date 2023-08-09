import { compare } from 'compare-versions'
import type { MaybeRef } from '@vueuse/core'
import type { Ref, ShallowRef } from 'vue'
import { unref } from 'vue'
import playConfig from '../../playground.config'
import { genVueLink } from '~/utils/dependency'
import type { VersionKey, Versions } from '~/composables/store'
import { IS_DEV } from '~/constants'

export const getVersions = (pkg: MaybeRef<string>) => {
  const url = computed(() => `${playConfig.versionUrl}${unref(pkg)}`)
  return useFetch(url, {
    initialData: [],
    afterFetch: ctx => ((ctx.data = ctx.data.versions), ctx),
    refetch: true,
  }).json<string[]>().data as Ref<string[]>
}


export const getSupportVersions = (pkg: string, minVersion: string) => {
  const versions = getVersions(pkg)
  const IS_VUE = pkg === 'vue'
  return computed(() => {
    const canUserVersions = versions.value.filter(version =>
      compare(version, minVersion, '>='),
    )
    if (canUserVersions.length > 0) {
      canUserVersions.unshift('latest')
      IS_DEV && !IS_VUE && canUserVersions.unshift(`@${__COMMIT__}`)
    }

    return canUserVersions
  })
}


export async function setVueVersion(
  version: string,
  compiler: ShallowRef<typeof import('vue/compiler-sfc') | undefined>,
  state: { vueRuntimeURL: string },
  versions: Versions,
) {

  const { compilerSfc, runtimeDom } = genVueLink(version)

  compiler.value = await import(/* @vite-ignore */ compilerSfc)
  state.vueRuntimeURL = runtimeDom
  versions.vue = version

  // eslint-disable-next-line no-console
  console.info(`[@vue/repl] Now using Vue version: ${version}`)
}


export async function setVersion(
  key: VersionKey,
  version: string,
  versions: Versions,
  compiler: ShallowRef<typeof import('vue/compiler-sfc') | undefined>,
  state: { vueRuntimeURL: string },
) {
  switch (key) {
    case playConfig.compLibShort:
      versions[playConfig.compLibShort] = version
      break
    case 'vue':
      await setVueVersion(version, compiler, state, versions)
      break
  }
}