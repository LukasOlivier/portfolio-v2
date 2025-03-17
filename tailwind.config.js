/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [],
	theme: {
		extend: {
			fontFamily: {
				spacegrotesk: ['Space Grotesk', 'sans-serif'],
			},
		},
		screens: {
			sm: '1px', // applies styles for screens wider than or equal to 640px

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '992px',
			// => @media (min-width: 992px) { ... }

			xl: '1200px',
			// => @media (min-width: 1200px) { ... }

			xxl: '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
