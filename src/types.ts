export interface Meta {
  total: number;
  limit: number;
  count: number;
}

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
  meta: Meta;
}
