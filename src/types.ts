import { z } from "@hono/zod-openapi";
import type { MetaSchema } from "./schema.js";

export type Meta = z.infer<typeof MetaSchema>;
