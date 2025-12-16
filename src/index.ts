import { serve } from "@hono/node-server";
import { Hono } from "hono";
import type { PostsResponse } from "./types.js";

const app = new Hono();

const BASE_URL = "/api/v1";

app.get("/", (c) => {
  return c.text("Bobs your uncle");
});

app.get(`${BASE_URL}/posts`, (c) => {
  return c.json<PostsResponse>({
    data: [
      {
        id: 1,
        title: "My first post",
        img: {
          url: "https://avatars.githubusercontent.com/u/98495527?s=200&v=4",
          alt: "some stuff",
        },
        dateCreatedAt: "131231231231231156",
      },
    ],
    meta: {
      total: 200,
      limit: 30,
    },
  });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
