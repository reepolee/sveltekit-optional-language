import { sveltekit } from '@sveltejs/kit/vite';
import { svelteInspector } from '@sveltejs/vite-plugin-svelte-inspector';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	esbuild: {
		target: 'esnext'
	},
	define: {
		'process.env': process.env,
		'import.meta.env.BUILD_TIMESTAMP': JSON.stringify(new Date().toISOString())
	},
	plugins: [tailwindcss(), sveltekit(), svelteInspector({})]
});
