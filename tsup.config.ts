import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  clean: true,
  dts: true,
  entry: ['./src/index.ts'],
  external: ['react', 'react-dom'],
  format: ['cjs', 'esm'],
  minify: !options.watch,
  sourcemap: true,
  splitting: false,
}))
