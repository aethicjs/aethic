import { fileURLToPath, URL } from 'url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'Aethic',
      fileName: (format) => `aethic.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          lodash: '_',
        },
        sourcemap: true,
      },
    },
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
