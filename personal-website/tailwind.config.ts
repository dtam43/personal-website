import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		animation: {
			overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
		},
		keyframes: {
			overlayShow: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' }
			},
			contentShow: {
				'0%': { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
				'100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
			}
		},
		extend: {
			colors: {
				primary: '#0e0e0e',
				secondary: '#608eb8',
				tertiary: '#232351',
				accent: '#FFFDFA',
				text: '#ffffff'
			},
			fontFamily: {
				'sans': ['Arial'],
				'courier': ['Courier New'],
			},
			backgroundOpacity: {
				'10': '0.1',
				'20': '0.2',
				'30': '0.3',
			}
		}
	},
	plugins: []
};
export default config;
