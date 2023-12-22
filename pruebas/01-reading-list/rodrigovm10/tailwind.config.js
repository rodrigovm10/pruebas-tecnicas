/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'pastel-green': {
					50: '#f5fcf1',
					100: '#e5fbdd',
					200: '#ccf4be',
					300: '#a2ea8b',
					400: '#7edb61',
					500: '#4cbe29',
					600: '#3a9d1c',
					700: '#307b1a',
					800: '#2a611a',
					900: '#225017',
					950: '#0e2c07'
				}
			}
		}
	},
	plugins: []
}
