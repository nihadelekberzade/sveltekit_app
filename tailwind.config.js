import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {},
		container: {
			center: true
		},
		colors: {
			...colors,
			'jungle-green': '#004B49'
		}
	},
	darkMode: 'media',
	plugins: [require('flowbite/plugin')]
}
