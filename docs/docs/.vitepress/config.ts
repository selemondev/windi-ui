import { defineConfig } from 'vitepress'
import { version } from '../../../packages/windi-ui/package.json'
import { SearchPlugin } from "vitepress-plugin-search";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { plugins: [SearchPlugin()] },
  title: "Windi UI",
  description: "Build Accessible Apps 10x faster",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', items: [] },
      { text: 'Components', items: [] },
      { text: 'Windi UI', items: []},
      { text: 'Playground', link: '/play'},
      { text: "Showcase", link: ''},
      { text: `v${version}`, link: ''}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/selemondev/windi-ui' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-PRESENT Selemon Brahanu',
    },
  }
})