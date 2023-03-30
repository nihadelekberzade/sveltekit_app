import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import baseUrl from './src/utils/constants/baseUrl';
import run from 'vite-plugin-run';

export default defineConfig({
	plugins: [sveltekit(),
		run([{
			name: 'pocketbase initialization',
			pattern: ['']
		}])
	],
	server: {
		proxy: {
			'/api': {
				target: baseUrl,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', 'tests/*.{spec,test}.{js,ts}'],
		environment: 'jsdom',
		globals: true,
		setupFiles: 'src/setupTests.ts'
	}
});
