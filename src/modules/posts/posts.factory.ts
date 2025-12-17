import { PostSchema } from "./postsSchema.js";
import { zocker } from "zocker";
import { SEED } from "../../utils/testing.js";

const mockData = zocker(PostSchema).setSeed(SEED).generateMany(30);

export const mockPosts = mockData;
