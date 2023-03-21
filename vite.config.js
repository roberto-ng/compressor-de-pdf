import { defineConfig } from 'vite'

export default defineConfig({
    esbuild: {
      keepNames: true,
    },
    optimizeDeps: {
      esbuildOptions: {
        keepNames: true,
      },
    },
});