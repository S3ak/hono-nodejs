import { PostSchema } from "./posts.schema.js";
import { zocker } from "zocker";
import { SEED } from "../../utils/testing.js";
import { faker } from "@faker-js/faker";

const mockData = zocker(PostSchema)
  .setSeed(SEED)
  .supply(PostSchema.shape.media.unwrap().shape.url, faker.image.url())
  .supply(PostSchema.shape.likes, faker.number.int({ max: 9999 }))
  .generateMany(30);

export const mockPosts = mockData;
