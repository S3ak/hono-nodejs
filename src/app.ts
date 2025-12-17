import { Hono } from "hono";
import posts from "./modules/posts/post.route.js";
import home from "./modules/home/home.route.js";
import { BASE_URL } from "./constants.js";
export const app = new Hono()
  .route(`${BASE_URL}/`, home)
  .route(`${BASE_URL}/posts`, posts);

export type AppType = typeof app;
