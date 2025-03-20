// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: true,

	app: {
		head: {
			charset: 'utf-16',
			htmlAttrs: {
				lang: 'en',
			},
			viewport: 'width=device-width,initial-scale=1',
			title: 'Lukas Olivier',
			titleTemplate: '%s - Lukas Olivier',
			meta: [
				{
					name: 'description',
					content: 'The e-portfolio of Lukas Olivier',
				},
			],
		},
	},

	modules: [
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		'@nuxt/content',
		'@nuxt/image',
		'@nuxtjs/color-mode',
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/eslint',
		'@nuxthub/core',
	],

	hub: {
		database: true,
	},

	typescript: {
		strict: true,
	},

	colorMode: {
		preference: 'system',
		classSuffix: '',
	},

	fonts: {
		families: [
			{
				name: 'Space Grotesk',
				provider: 'none',
				preload: true,
				display: 'swap',
			},
			{
				name: 'Poppins',
				provider: 'none',
				preload: true,
				display: 'swap',
			},
		],
		providers: {
			google: false,
		},
	},

	site: {
		url: 'https://www.lukasolivier.be', // Needed for og-image
	},

	// Performance

	image: {
		format: ['webp'],
		quality: 100,
	},

	critters: {
		config: {
			preload: 'swap',
		},
	},

	// TailwindCSS
	postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	// Content
	content: {
		database: {
			type: 'd1',
			binding: 'DB',
		},

		build: {
			markdown: {
				highlight: {
					// Light and dark mode using Nuxt Color Mode
					theme: 'nord',
				},
			},
		},
	},

	css: ['~/assets/css/tailwind.css'],
	compatibilityDate: '2024-11-02',
});
