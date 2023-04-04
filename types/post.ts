import { Author } from './author';
import { Comment } from './comment';

export type PostType = {
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  id: string
  authors: Author[]
  comments: Comment[]
};
