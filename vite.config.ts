import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	publicDir: 'static',
	// React's jsx-runtime reads process.env.NODE_ENV at module top-level to
	// pick its dev/prod code path. Vite's app builds inject this automatically,
	// but library-mode builds (what we use to produce a single Foundry module
	// script) don't — without this, `process` is undefined in the browser and
	// the whole bundle throws on load, before any of our Hooks ever register.
	define: {
		'process.env.NODE_ENV': JSON.stringify('production'),
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		cssMinify: true,
		lib: {
			entry: 'src/main.ts',
			formats: ['es'],
			fileName: () => 'tarokka.js',
		},
		rollupOptions: {
			output: {
				assetFileNames: 'tarokka.css',
			},
		},
		sourcemap: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
