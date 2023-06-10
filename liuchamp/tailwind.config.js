/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: [
		'src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				custom: {
					whitePalo: '#FBFBFA',
					fullBlack: '#1E1E1E',
					greenFalse: '#D8E1CF',
				},
			},
			fontFamily: {
				sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
				display: ['var(--font-blacker-regular)'],
			},
		},
	},
	plugins: [],
}
