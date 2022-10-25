import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import EsLint from 'vite-plugin-linter';
// import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';
const { EsLinter, linterPlugin } = EsLint;

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    // tsConfigPaths(),
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
  resolve: {
    alias: [
      {
        find: '#rtkstore',
        replacement: path.resolve(__dirname, './src/app/store'),
      },
    ],
  },
}));
