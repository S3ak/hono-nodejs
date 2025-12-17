import { z } from "@hono/zod-openapi";
import type { MetaSchema } from "./schema.js";
import type { Post } from "./modules/posts/postsTypes.js";

export type Meta = z.infer<typeof MetaSchema>;
export interface PostsResponse {
  data: Post[];
  meta: Meta;
}
