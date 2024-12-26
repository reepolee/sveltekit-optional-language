import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$svg: 'src/svg',
			$lib: 'src/lib',
			$i18n: 'src/i18n',
			$src: 'src',
			$home: '.',
		},
	},
};

export default config;