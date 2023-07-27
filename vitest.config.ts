import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

const r = (p: string) => resolve(__dirname, p)
export default defineConfig({
  plugins: [Vue()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
  resolve: {
    alias: {
      'windi-ui': r('./packages/windi'),
    },
  },
})
