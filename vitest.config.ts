import { defineConfig } from 'vitest/config'
import swc from 'unplugin-swc'

export default defineConfig({
	test: {
		// ... Specify options here.
	},
	plugins: [swc.vite()]
})
