export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  joinedDate: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorId: string;
  authorEmail: string;
  date: string;
  image?: string;
  likes: number;
  likedBy: string[];
  comments: Comment[];
  tags: string[];
}

export interface Comment {
  id: string;
  author: string;
  authorId: string;
  content: string;
  date: string;
}

export type Theme = 'light' | 'dark';
export type CurrentPage = 'welcome' | 'home' | 'blogs' | 'profile';