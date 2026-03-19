import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const docsSchema = z.object({
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    to: z.string(),
    target: z.string().optional()
  })).optional()
})

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: ''
      },
      schema: docsSchema
    }),
    content_it: defineCollection({
      type: 'page',
      source: {
        include: 'it/**',
        prefix: ''
      },
      schema: docsSchema
    })
  }
})
