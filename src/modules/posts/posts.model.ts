import { mockPosts as posts } from "./posts.factory.js";

export function getPosts({ _limit = 30, _offset = 0 }) {
  // #TODO: We will make the actual database call here
  return posts;
}
