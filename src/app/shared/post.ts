export interface Post {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
  likes?: 0;
}

export interface Resonse {
  status: string;
  sources: Post[];
  name?: string;
}
