import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.string(),
        description: z.string(),
        image: z.string(),
        alt: z.string(),
        published: z.boolean(),
        sitemap: z.object({
          loc: z.string(),
          lastmod: z.string(),
          changefreq: z.string(),
          priority: z.number(),
          published: z.boolean()
        })
      })
    })
  }
})