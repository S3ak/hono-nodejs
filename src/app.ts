import { Hono } from "hono";
import type { PostsResponse } from "./types.js";
import type { Context } from "hono";
import { BASE_URL } from "./constants.js";
import { getPosts } from "./modules/posts/posts.model.js";

export const app = new Hono()
  .get("/", (c: Context) => {
    return c.text("Bobs your uncle");
  })
  .get(`${BASE_URL}/posts`, (c: Context) => {
    // const { limit = 30, offset = 0 } = c.req.query();

    const posts = getPosts({});

    return c.json<PostsResponse>({
      data: posts,
      meta: {
        total: 200,
        limit: 30,
        count: 1,
      },
    });
  });

export type AppType = typeof app;
