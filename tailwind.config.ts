/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '280px',
			},
			width: {
				'650': '650px',
				'950': '950px',
			},
			transitionDelay: {
				'100': '100ms',
				'200': '200ms',
			},
			keyframes: {
				'spin-delay': {
					'0%, 30%': { transform: 'rotate(0deg) scale(1)' },
					'50%': { transform: 'rotate(180deg) scale(0.8)' },
					'100%': { transform: 'rotate(360deg) scale(1)' },
				},
			},
			animation: {
				'splash-spin': 'spin-delay 1s linear infinite',
			},
			colors: {
				night: '#0e1111',
				'ghost-white': '#ECEBF3',
				'ash-gray': '#C7D6D5',
				'dim-gray': '#6D7275',
				'engineering-orange': '#C20114',
				'neon-blue': '#5465FF',
				vermilion: '#EF3E36',
			},
			fontFamily: {
				'gt-walsheim': ['GT Walsheim Trial', 'sans'],
				'maven-pro': ['Maven Pro', 'sans-serif'],
			},
			lineHeight: {
				custom: '20px',
			},
			letterSpacing: {
				custom: '0.2px',
			},
			borderRadius: {
				default: '10px',
				secondary: '8px',
			},
			boxShadow: {
				default: '2px 2px 30px rgba(0,0,0,0.2)',
				button: '0 3px 0 #3F2ABD',
				secondary: '1px 1px 8px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	plugins: [],
};
