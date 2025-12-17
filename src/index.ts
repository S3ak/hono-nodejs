import { serve } from "@hono/node-server";
import { app } from "./app.js";

serve(
  {
    fetch: app.fetch,
    port: 8080,
  },
  (info) => {
    console.info(`Server is running on http://localhost:${info.port}`);
  }
);
