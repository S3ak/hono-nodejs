export interface Post {
  id: number;
  title: string;
  img: {
    url: string;
    alt: string;
  };
  dateCreatedAt: string;
}

export interface PostsResponse {
  data: Post[];
  meta: {
    total: number;
    limit: number;
  };
}
