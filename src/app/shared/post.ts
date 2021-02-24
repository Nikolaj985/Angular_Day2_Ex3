export interface Post {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  likes?: 0;
}

export interface Resonse {
  status: string;
  totalResult: number;
  articles: Post[];
}
