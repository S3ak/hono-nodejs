import { z } from "@hono/zod-openapi";

export const PostSchema = z.object({
  id: z.uuid(),
  userId: z.uuid(),
  title: z.string().min(2).max(200),
  content: z.string().min(2).max(2000),
  createdAt: z.date().transform((date) => date.toISOString()),
  updatedAt: z.date().transform((date) => date.toISOString()),
  likes: z.number().int().nonnegative(),
  comments: z.number().int().nonnegative(),
  media: z
    .object({
      url: z.url(),
      alt: z.string().min(1).max(500),
    })
    .optional(),
});
