<script setup>
  const age = new Date().getFullYear() - 2003;
  const description = `Lukas Olivier: I am a ${age}-year-old software developer passionate about programming and technology.`;
  const ogTitle = 'Lukas Olivier - Software Developer';
  const twitterDescription = `Lukas Olivier: I am a ${age}-year-old software developer passionate about programming and technology.`;
  const image =
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp';
  const mySite = 'https://www.lukasolivier.be';

  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    link: [{ rel: 'canonical', href: 'https://www.lukasolivier.be' }],
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content:
          'lukas olivier, software developer, programming, technology, nuxt3, vue3, tailwindcss, javascript, typescript, html, css, scss, sass, nodejs, expressjs, github, git',
      },
      { name: 'author', content: 'Lukas Olivier' },
      { name: 'publisher', content: 'Lukas Olivier' },
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

  useSchemaOrg([
    definePerson({
      name: 'Lukas Olivier',
      image:
        'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
      email: 'mail@lukasolivier.be',
      jobTitle: 'Software Developer',
      description:
        'Software developer building fast, modern, maintainable web applications with Vue, Nuxt, and Node.js.',
      sameAs: [
        'https://www.linkedin.com/in/lukas-olivier',
        'https://github.com/LukasOlivier',
      ],
      worksFor: defineOrganization({
        name: 'Yapla',
        url: 'https://www.yapla.be',
      }),
    }),
  ]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  html.dark {
    color-scheme: dark;
  }
  ::selection {
    background-color: #6c91c2;
    color: #fff;
  }

  a:hover {
    color: var(--link-hover-color);
  }

  html.dark a:hover {
    --link-hover-color: white;
  }

  html a:hover {
    --link-hover-color: black;
  }
</style>
