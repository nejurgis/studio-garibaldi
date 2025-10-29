import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const contactCollection = defineCollection({
  type: 'data',
  schema: z.object({
    email: z.string().email(),
    phone: z.string(),
    address: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  contact: contactCollection,
};
