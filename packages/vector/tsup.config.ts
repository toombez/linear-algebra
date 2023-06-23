import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    dts: true,
    entry: ['./src/index.ts'],
    bundle: true,
    format: ['esm', 'cjs'],
    minify: !options.watch,
    clean: !options.watch,
    treeshake: !options.watch,
}))