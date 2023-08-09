import { defineConfig } from 'vite'
import { SearchPlugin } from "vitepress-plugin-search";
import UnoCSS from 'unocss/vite'
var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
  allow: [],
  ignore: [],
};
export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    UnoCSS(),
    SearchPlugin(options)
  ],
})