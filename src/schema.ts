import { z } from "@hono/zod-openapi";

// #TODO: Implement schema for Swagger Docs
const _ParamsSchema = z.object({
  id: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
      example: "1212121",
    }),
});

export const MetaSchema = z.object({
  total: z.number().int().nonnegative(),
  limit: z.number().int().positive(),
  count: z.number().int().nonnegative(),
});
