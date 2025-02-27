// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
		'@nuxt/content',
		'@nuxt/image',
		'@vueuse/nuxt',
		'@nuxtjs/fontaine',
		'@nuxtjs/color-mode',
		'@nuxtjs/tailwindcss',
		'@vueuse/motion/nuxt',
		'@nuxt/fonts',
		'@nuxtjs/critters',
		'@nuxt/icon',
		'nuxt-booster',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		'@nuxt/eslint',
		'@nuxthub/core',
	],

	content: {
		database: {
			type: 'd1',
			binding: 'DB',
		},
	},
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

	css: ['~/assets/css/tailwind.css'],
	compatibilityDate: '2024-11-02',
});
