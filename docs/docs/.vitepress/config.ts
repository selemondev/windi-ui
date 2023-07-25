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
      { text: 'Playground', link: 'http://localhost:5173/play/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgZ3JlZXRpbmcgPSByZWYoXCJXZWxjb21lIHRvIFdpbmRpIFVJJ3MgcGxheWdyb3VuZCFcIilcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB3LWZ1bGwgbWluLWgtc2NyZWVuXCI+XG4gICAgPGgxIGNsYXNzPVwidGV4dC0yeGxcIj5cbiAgICAgIHt7IGdyZWV0aW5nIH19XG4gICAgPC9oMT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0LW1hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge1xuICAgIFwidnVlXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MTczL3BsYXkvc3JjL3Z1ZS1kZXYtcHJveHlcIixcbiAgICBcIkB2dWUvY29tcGlsZXItc2ZjXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MTczL3BsYXkvc3JjL3Z1ZS1zZmMtZGV2LXByb3h5XCIsXG4gICAgXCJAdnVlL3NoYXJlZFwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTE3My9wbGF5L3NyYy92dWUtc2hhcmVkLWRldi1wcm94eVwiLFxuICAgIFwidnVlLXVpLW5leHRcIjogXCJodHRwOi8vbG9jYWxob3N0OjUxNzMvcGxheS9zcmMvdnVlLXVpLW5leHQtZGV2LXByb3h5XCJcbiAgfSxcbiAgXCJzY29wZXNcIjoge31cbn0iLCJsaWItaW5zdGFsbC5qcyI6ImltcG9ydCB7IGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcbi8vIGltcG9ydCBVbm9VSSBmcm9tICdvbnUtdWknXG5pbXBvcnQgeyB1aSB9IGZyb20gXCJ2dWUtdWktbmV4dFwiO1xuXG5sZXQgaW5zdGFsbGVkID0gZmFsc2VcblxuZXhwb3J0IGZ1bmN0aW9uIGxpYkluc3RhbGwoKSB7XG4gIGlmIChpbnN0YWxsZWQpXG4gICAgcmV0dXJuXG4gIGNvbnN0IGluc3RhbmNlID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgLy8g5a6J6KOF57uE5Lu25bqT5YiwdnVlXG4gIGluc3RhbmNlLmFwcENvbnRleHQuYXBwLnVzZSh1aSlcbiAgaW5zdGFsbGVkID0gdHJ1ZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgYXdhaXQgbG9hZFN0eWxlKClcbiAgYXdhaXQgY3JlYXRlSW5qZWN0VW5vY3NzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTdHlsZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCdcbiAgICBsaW5rLmhyZWYgPSAndW5kZWZpbmVkJ1xuICAgIGxpbmsuaWQgPSAnbGliX3N0eWxlJ1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUpXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlamVjdClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChsaW5rKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5qZWN0VW5vY3NzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLmlkID0gJ3Vub2Nzc19zdHlsZSdcbiAgICBzdHlsZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSlcbiAgICBzdHlsZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlamVjdClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdHlsZSlcbiAgfSlcbn1cblxuLy8g5Y+R6YCBZG9t5L+h5oGv5YiwIOeItumhtemdolxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRIdG1sKCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuaW5uZXJIVE1MXG4gIHRvcC5wb3N0TWVzc2FnZShkaXYsIGxvY2F0aW9uLmFuY2VzdG9yT3JpZ2luc1swXSlcbn1cblxuLy8g5pS254i26aG16Z2i5Lyg5p2l5YiwIGNzc1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVub2Nzc0NvbXBpbGVSZXMoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc3R5bGVFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5vY3NzX3N0eWxlJylcbiAgICBpZiAoc3R5bGVFbG0pXG4gICAgICBzdHlsZUVsbS5pbm5lckhUTUwgPSBldmVudC5kYXRhXG4gIH0pXG59IiwiUGxheWdyb3VuZE1haW4udnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuaW1wb3J0IHsgZ2V0VW5vY3NzQ29tcGlsZVJlcywgaW5pdCwgbGliSW5zdGFsbCwgc2VuZEh0bWwgfSBmcm9tICcuL2xpYi1pbnN0YWxsLmpzJ1xuXG5saWJJbnN0YWxsKClcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGluaXQoKVxuICBzZW5kSHRtbCgpXG4gIGdldFVub2Nzc0NvbXBpbGVSZXMoKVxufSlcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxBcHAgLz5cbjwvdGVtcGxhdGU+IiwiaW1wb3J0X21hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge31cbn0iLCJfbyI6e319'},
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