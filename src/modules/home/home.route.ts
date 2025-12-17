import { Hono } from "hono";
import type { Context } from "hono";

const app = new Hono().get("/", (c: Context) => {
  return c.text("Bobs your uncle");
});

export default app;
