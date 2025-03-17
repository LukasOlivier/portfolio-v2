---
title: 'Setting Up a Nuxt 3 Starter Project'
date: 17/03/25
description: 'How to set up a Nuxt 3 project, install essential modules, and follow best practices for a clean and efficient development process.'
image: /blog-img/nuxt-setup-2025/thumbnail.png
alt: 'Nuxt 3 Starter Project'
published: true
sitemap:
  loc: /blog/11-Nuxt-setup-2025
  lastmod: 2025-03-17
  changefreq: monthly
  priority: 0.8
---

# Setting Up a Nuxt 3 Starter Project

Nuxt 3 is a robust framework designed for building modern web applications using Vue.js. This guide will walk you through the process of setting up a Nuxt 3 project, installing essential modules, and adhering to best practices to maintain a clean and efficient development workflow. You can view the completed project on [GitHub](https://github.com/LukasOlivier/nuxt-starter).

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** - [Version 18.x](https://nodejs.org/en) or newer (preferably an [active LTS release](https://github.comnodejs/release#release-schedule))
- **Text Editor** - Any IDE works, but [Visual Studio Code](https://code.visualstudio.com/) with the [Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) or [WebStorm](https://www.jetbrains.com/webstorm/) is recommended

### Additional Tips

- Use an **even-numbered Node.js version** (e.g., 18, 20, etc.)
- Install the [Nuxtr extension](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode) for enhanced development tools
- **WSL (for Windows users)** - [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install) improves performance with a Linux-based environment

## Creating a Nuxt 3 Project

To create a new Nuxt 3 project, open your terminal and run:

```bash
pnpm create nuxt <project-name>
cd <project-name>
pnpm dev -o
```

Your browser should automatically open [http://localhost:3000](http://localhost:3000), displaying your new Nuxt app.

## Installing Essential Modules

For a fully functional Nuxt 3 setup, install the following modules using your favorite package manager (e.g., pnpm, yarn, or npm):

- **[@nuxt/fonts](https://fonts.nuxt.com/get-started/installation)** - Optimized font loading
- **[@nuxt/icon](https://nuxt.com/modules/icon)** - Simple and efficient icon handling
- **[TailwindCSS](https://tailwindcss.com/docs/installation/framework-guides/nuxt)** - Utility-first CSS framework
- **[ESLint & Prettier](https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg)** - Enforces clean and consistent code
- **[@nuxtjs/seo](https://nuxtseo.com/docs/nuxt-seo/getting-started/installation)** - Enhances SEO with minimal configuration
- **[@nuxt/img](https://image.nuxt.com/get-started/installation)** - Optimized image loading

Add them to your _nuxt.config.ts_:

```ts
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/seo',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/eslint',
	],
});
```

## Project Structure & Naming Conventions

To maintain a clean project structure, create these folders:

- **`pages/`** - Holds all your application pages
- **`components/`** - Reusable Vue components
- **`layouts/`** - Defines page layouts (e.g. default, mobile, etc.)

**Naming Conventions:**

- Use **kebab-case** for files and folders (e.g., _public/blog-images_)
- Use **CamelCase** for component names (e.g., _MyComponent.vue_)
- Components should have **multi-word names** to avoid conflicts

These are just recommendations, but following them will help keep your project organized and maintainable. If you have a different preference, feel free to adjust as needed. As long as you're consistent!

## Creating Our First Page

Create an _index.vue_ file inside the _pages_ folder:

```vue
<template>
	<div>
		<h1>Hello World!</h1>
	</div>
</template>
```

### Layouts in Nuxt 3

Layouts are very powerful in Nuxt for structuring your application. Let’s create a default layout. I use this a lot for headers and footer because they stay the same on multiple pages. You can also create a mobile.vue or whatever that comes to mind.

Create _default.vue_ in the _layouts_ folder:

```vue
<template>
	<div>
		<!-- You can add a header here -->
		<slot />
		<!-- You can add a footer here -->
	</div>
</template>
```

The "slot" tag is where the page content will be rendered.

Now, modify _app.vue_ to use layouts:

```vue
<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
```

## Modules

### Nuxt Fonts

To use fonts in our web-app, I recommend using _@nuxt/fonts_. It's more optimized including than including the url in the 'head' section and is very easy to configure.

#### Configuration

Add the following to your _nuxt.config.ts_:

```ts
export default defineNuxtConfig({
	modules: ['@nuxt/fonts'],
	fonts: {
		families: [
			{ name: 'Space Grotesk', preload: true, display: 'swap' },
			{ name: 'Poppins', preload: true, display: 'swap' },
		],
		providers: {
			google: false, // Disable Google Fonts for GDPR compliance
		},
	},
});
```

### Icons

_@nuxt/icon_ is a no-brainer in each project for me. It provides a quick setup, a wide collection of icons, and is very easy to use. See the full collection at: [icones.js.org](https://icones.js.org/). Let's add an icon to our index page.

#### Example Usage

```vue
<template>
	<div>
		<h1>Hello world!</h1>
		<Icon name="uil:globe" style="color: black" />
	</div>
</template>
```

### Nuxt Image

_@nuxt/img_ is a powerful image optimization module for Nuxt applications. It automatically optimizes your images for better performance and user experience while being incredibly simple to implement. Check out the docs for more information: [image.nuxt.com](https://image.nuxt.com/).

#### Configuration

Add the following to your _nuxt.config.ts_:

```ts
export default defineNuxtConfig({
	// other configurations
	image: {
		quality: 80,
		format: ['webp', 'avif', 'jpg'],
	},
});
```

#### Example Usage

hello-world.jpg is an image in the _public_ folder.

```vue
<template>
	<div>
		<div>
			<h1>Hello world!</h1>
			<Icon name="uil:globe" style="color: black" />
		</div>
		<NuxtImg src="/images/hello-world.png" alt="Nuxt Logo" />
	</div>
</template>
```

### TailwindCSS

I'm a big fan of Tailwind for styling. The official documentation explains it best: [Tailwind Nuxt Guide](https://tailwindcss.com/docs/installation/framework-guides/nuxt). Lets use it in our index page.

#### Example Usage

```vue
<template>
	<div class="flex h-screen flex-col items-center justify-center">
		<div class="flex items-center justify-center p-4 text-2xl">
			<Icon name="uil:globe" style="color: black" />
			<h1 class="text-blue-500">Hello world!</h1>
			<Icon name="uil:globe" style="color: black" />
		</div>
		<NuxtImg src="/images/hello-world.png" alt="Nuxt Logo" />
	</div>
</template>
```

### ESLint & Prettier

ESLint and Prettier help maintain a clean and consistent codebase. Trust me, you need them!

There is already an excellent guide to set this up: [Adding ESLint and Prettier to Nuxt 3](https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg). However, the article didn't mention this but you need to install _@nuxtjs/eslint-config-typescript_ as well.

There are many prettier configurations available, but I like to use the following:

```json
// .prettierrc
{
	"semi": true,
	"singleQuote": true,
	"useTabs": true,
	"tabWidth": 2,
	"trailingComma": "es5",
	"printWidth": 80,
	"endOfLine": "lf",
	"arrowParens": "always",
	"bracketSpacing": true,
	"embeddedLanguageFormatting": "auto",
	"plugins": [
		"prettier-plugin-organize-imports",
		"prettier-plugin-tailwindcss"
	],
	"htmlWhitespaceSensitivity": "ignore",
	"vueIndentScriptAndStyle": true
}
```

## SEO Configuration

You can change the SEO information on a per-page basis using the _useHead_ function. I like to set default SEO metadata is set in _app.vue_, and specify the title per page.

Example setup in _app.vue_

```vue
<script setup>
	const description = `Hi, welcome to our nuxt starter site! This project includes all basic needs for almost every project!`;

	const ogTitle = 'Nuxt 3 - Starter project';

	const twitterDescription = `Hi, welcome to our nuxt starter site!`;

	const image = 'https://example.com/default-image.webp';

	const mySite = 'https://example.com';

	useHead({
		htmlAttrs: {
			lang: 'en',
		},
		link: [{ rel: 'canonical', href: mySite }],
		meta: [
			{ name: 'description', content: description },
			{
				name: 'keywords',
				content: 'nuxt 3, starter, project',
			},
			{ name: 'author', content: 'John Doe' },
			{ name: 'publisher', content: 'John Doe' },
			{ property: 'og:site_name', content: mySite },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: mySite },
			{ property: 'og:title', content: ogTitle },
			{ property: 'og:description', content: description },
			{ property: 'og:image', content: image },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:url', content: mySite },
			{ name: 'twitter:title', content: ogTitle },
			{ name: 'twitter:description', content: twitterDescription },
			{ name: 'twitter:image', content: image },
		],
	});
</script>
```

Example for _page.vue_

```vue
<script setup>
	useHead({
		title: 'Home',
		meta: [
			{
				name: 'description',
				content: 'Welcome to the index page of the Nuxt 3 starter project.',
			},
		],
	});
</script>
```

### Generating sitemap.xml & robots.txt with Nuxt SEO

_@nuxt/seo_ is an essential module for any production Nuxt application. It automatically generates a sitemap and robots.txt file, making your site more discoverable by search engines.

#### Configuration

Add the following to your _nuxt.config.ts_:

```ts
export default defineNuxtConfig({
	// other configurations
	site: { url: 'https://example.com', name: 'My Awesome Website' },
});
```

The module works automatically once configured. You don't need to add any additional code to your pages or components. It will:

- Generate a sitemap.xml file with all your routes
- Create a robots.txt file with your specified rules
- Update both files automatically when your content changes

While _@nuxt/seo_ offers many more advanced features like structured data, canonical URL management, and social media tag optimization, the basic setup above covers the essential functionality for most projects.

## That’s It!

Congratulations! You’ve set up a fully functional Nuxt 3 project with all the essential features. If you have any questions, feel free to reach out at: [mail@lukasolivier.be](mailto:mail@lukasolivier.be)
