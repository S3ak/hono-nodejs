import { z } from "@hono/zod-openapi";
import { PostSchema } from "./postsSchema.js";

export type Post = z.infer<typeof PostSchema>;
export interface PostsResponse {
  data: Post[];
  meta: {
    total: number;
    limit: number;
    count: number;
  };
}
