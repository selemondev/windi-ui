import { defineConfig } from 'vitepress'
import { version } from '../../../package.json'
import { SearchPlugin } from "vitepress-plugin-search";
import { applyPlugins } from './plugins/code'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { plugins: [SearchPlugin()] },
  title: "Windi UI",
  description: "Build Accessible Apps 10x faster",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/windi.png",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    logo: '../public/windi.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', items: [] },
      { text: 'Components', items: [] },
      { text: 'Windi UI', items: [] },
      { text: 'Playground', link: 'http://localhost:5173/play/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPSd0cyc+XG4gIFxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+IiwiUGxheWdyb3VuZE1haW4udnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuaW1wb3J0IHsgZ2V0VW5vY3NzQ29tcGlsZVJlcywgaW5pdCwgbGliSW5zdGFsbCwgc2VuZEh0bWwgfSBmcm9tICcuL2xpYi1pbnN0YWxsLmpzJ1xuXG5saWJJbnN0YWxsKClcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGluaXQoKVxuICBzZW5kSHRtbCgpXG4gIGdldFVub2Nzc0NvbXBpbGVSZXMoKVxufSlcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxBcHAgLz5cbjwvdGVtcGxhdGU+IiwiaW1wb3J0X21hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge31cbn0iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJ2dWVcIjogXCJodHRwOi8vbG9jYWxob3N0OjUxNzMvcGxheS9zcmMvdnVlLWRldi1wcm94eVwiLFxuICAgIFwiQHZ1ZS9jb21waWxlci1zZmNcIjogXCJodHRwOi8vbG9jYWxob3N0OjUxNzMvcGxheS9zcmMvdnVlLXNmYy1kZXYtcHJveHlcIixcbiAgICBcIkB2dWUvc2hhcmVkXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MTczL3BsYXkvc3JjL3Z1ZS1zaGFyZWQtZGV2LXByb3h5XCIsXG4gICAgXCJ2dWUtdWktbmV4dFwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTE3My9wbGF5L3NyYy92dWUtdWktbmV4dC1kZXYtcHJveHlcIlxuICB9LFxuICBcInNjb3Blc1wiOiB7fVxufSIsImxpYi1pbnN0YWxsLmpzIjoiaW1wb3J0IHsgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuLy8gaW1wb3J0IFVub1VJIGZyb20gJ29udS11aSdcbmltcG9ydCB7IHVpIH0gZnJvbSBcInZ1ZS11aS1uZXh0XCI7XG5cbmxldCBpbnN0YWxsZWQgPSBmYWxzZVxuXG5leHBvcnQgZnVuY3Rpb24gbGliSW5zdGFsbCgpIHtcbiAgaWYgKGluc3RhbGxlZClcbiAgICByZXR1cm5cbiAgY29uc3QgaW5zdGFuY2UgPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBcbiAgLy8gaW5zdGFuY2UuYXBwQ29udGV4dC5hcHAudXNlKHVpKVxuICBpbnN0YWxsZWQgPSB0cnVlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBhd2FpdCBsb2FkU3R5bGUoKVxuICBhd2FpdCBjcmVhdGVJbmplY3RVbm9jc3MoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN0eWxlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0J1xuICAgIGxpbmsuaHJlZiA9ICd1bmRlZmluZWQnXG4gICAgbGluay5pZCA9ICdsaWJfc3R5bGUnXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSlcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgcmVqZWN0KVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGxpbmspXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbmplY3RVbm9jc3MoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgc3R5bGUuaWQgPSAndW5vY3NzX3N0eWxlJ1xuICAgIHN0eWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlKVxuICAgIHN0eWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgcmVqZWN0KVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHN0eWxlKVxuICB9KVxufVxuXG4vLyDlj5HpgIFkb23kv6Hmga/liLAg54i26aG16Z2iXG5leHBvcnQgZnVuY3Rpb24gc2VuZEh0bWwoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5pbm5lckhUTUxcbiAgdG9wLnBvc3RNZXNzYWdlKGRpdiwgbG9jYXRpb24uYW5jZXN0b3JPcmlnaW5zWzBdKVxufVxuXG4vLyDmlLbniLbpobXpnaLkvKDmnaXliLAgY3NzXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5vY3NzQ29tcGlsZVJlcygpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzdHlsZUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bm9jc3Nfc3R5bGUnKVxuICAgIGlmIChzdHlsZUVsbSlcbiAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IGV2ZW50LmRhdGFcbiAgfSlcbn0iLCJfbyI6e319' },
      { text: "Showcase", link: '' },
      { text: `v${version}`, link: '' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '✨&nbsp;&nbsp; Getting Started',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/guide/getting-started/index.md' },
            { text: 'Installation', link: '/guide/getting-started/installation.md' },
            { text: 'Theme', link: '/guide/getting-started/theme.md' }
          ]
        },

        {
          text: "📦&nbsp;&nbsp; Components",
          collapsed: true,
          items: [
            { text: 'Accordion', link: '/guide/components/accordion.md' },
            { text: 'Alert', link: '/guide/components/alert.md' },
            { text: 'Avatar', link: '/guide/components/avatar.md'},
            { text: 'Badge', link: '/guide/components/badge.md'}
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/selemondev/windi-ui' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-PRESENT Selemon Brahanu',
    },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md)
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
})