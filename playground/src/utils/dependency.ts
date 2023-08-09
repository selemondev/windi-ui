import playConfig from '../../playground.config'
import type { Dependency } from '../../playground.config'
import type { Versions } from '~/composables/store'
import type { ImportMap } from '~/utils/import-map'
import { IS_DEV } from '~/constants'

// 生成 cdn url
export const genCDNLink = (
  pkg: string,
  version: string | undefined = '',
  path = '',
  cdnUrl: string,
) => {
  //@ts-ignore
  if (IS_DEV && (version === `@${__COMMIT__}` || /vue/.test(pkg))) {
    if (pkg === '@vue/runtime-dom')
      pkg = 'vue'

    return playConfig.devDeps[pkg]?.path
  }
  else {
    version = version ? `@${version}` : ''
  }
  return `${cdnUrl}${pkg}${version}${path}`
}


export const genVueLink = (version: string) => {
  const compilerSfc = genCDNLink(
    '@vue/compiler-sfc',
    version,
    playConfig.coreDeps['@vue/compiler-sfc'].path,
    playConfig.cdnUrl.skypack,
  )
  const runtimeDom = genCDNLink(
    '@vue/runtime-dom',
    version,
    playConfig.coreDeps.vue.path,
    playConfig.cdnUrl.skypack,
  )
  return {
    compilerSfc,
    runtimeDom,
  }
}


export const genImportMap = ({
  vue,
  [playConfig.compLibShort]: lib,
}: Partial<Versions> = {}): ImportMap => {

  const deps: Record<string, Dependency> = {
    ...playConfig.coreDeps,
  }

  Object.keys(deps).forEach((key: string) => {
    if (/vue/.test(key))
      deps[key].version = vue

    if (key.includes(playConfig.compLibShort))
      deps[key].version = lib
  })

  return {
    imports: Object.fromEntries(
      Object.entries({ ...deps, ...playConfig.libDeps }).map(([key, dep]) => [
        key,
        genCDNLink(
          dep.pkg ?? key,
          dep.version,
          dep.path,
          dep.source === 'skyPack'
            ? playConfig.cdnUrl.skypack
            : playConfig.cdnUrl.jsdelivr,
        ),
      ]),
    ),
  }
}