import * as packageJson from './package.json';

import EsLint from 'vite-plugin-linter';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const { EsLinter, linterPlugin } = EsLint;

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  publicDir: false,
  plugins: [
    react(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/component/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'component/index.ts'),
      name: 'KMCDesignSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `kmc-design-system.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
}));
