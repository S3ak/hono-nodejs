import type { Post } from "../posts/posts.js";
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfileWithPosts extends UserProfile {
  postsCount: number;
  posts: Post[];
}
