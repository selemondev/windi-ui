import { getCurrentInstance } from 'vue'
import install from 'windi-vue'
import windiTheme from 'windi-vue/dist/theme/windiTheme'

let installed = false

export function libInstall() {
  if (installed)
    return
  const instance = getCurrentInstance()
  
  instance.appContext.app.use(install, windiTheme)
  installed = true
}

export async function init() {
  await loadStyle()
  await createInjectUnocss()
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '#STYLE#'
    link.id = 'lib_style'
    link.addEventListener('load', resolve)
    link.addEventListener('error', reject)
    document.body.append(link)
  })
}

export function createInjectUnocss() {
  return new Promise((resolve, reject) => {
    const style = document.createElement('style')
    style.id = 'unocss_style'
    style.addEventListener('load', resolve)
    style.addEventListener('error', reject)
    document.body.append(style)
  })
}


export function sendHtml() {
  const div = document.querySelector('#app').innerHTML
  top.postMessage(div, location.ancestorOrigins[0])
}


export function getUnocssCompileRes() {
  window.addEventListener('message', (event) => {
    const styleElm = document.querySelector('#unocss_style')
    if (styleElm)
      styleElm.innerHTML = event.data
  })
}