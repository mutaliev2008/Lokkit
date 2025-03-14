import { PostComment } from './post-comment.model';

export interface Post {
  id: number;
  title: string;
  authorId: number;
  secondName: string;
  firstName: string;
  userName: string;
  userAvatar: string;
  role?: string;
  post_image?: string;
  post_content?: string;
  hashtags?: string[];
  likes: number;
  comments: PostComment[];
  shares: number;
}
