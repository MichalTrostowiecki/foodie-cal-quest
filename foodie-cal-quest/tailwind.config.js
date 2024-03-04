import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default  {
	content: [
		'index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		
	extend: {
		fontFamily: {
			protest: ["Protest Revolution", "sans-serif"],
			concert: ["Concert One", "sans-serif"]
		},
	},
	},
	plugins: [
		flowbitePlugin
	],
}

