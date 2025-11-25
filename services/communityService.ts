
import { Post, Comment } from '../types';
import { COMMUNITY_POSTS as DEFAULT_POSTS } from '../constants';

const POSTS_KEY = 'nebula_community_posts';

export const CommunityService = {
  getPosts: (): Post[] => {
    const postsStr = localStorage.getItem(POSTS_KEY);
    if (!postsStr) {
      // Initialize with default data if empty
      localStorage.setItem(POSTS_KEY, JSON.stringify(DEFAULT_POSTS));
      return DEFAULT_POSTS;
    }
    return JSON.parse(postsStr);
  },

  addPost: (post: Post): Post[] => {
    const posts = CommunityService.getPosts();
    const newPosts = [post, ...posts];
    localStorage.setItem(POSTS_KEY, JSON.stringify(newPosts));
    return newPosts;
  },

  likePost: (postId: string): Post[] => {
    const posts = CommunityService.getPosts();
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
    return updatedPosts;
  },

  addComment: (postId: string, comment: Comment): Post[] => {
      const posts = CommunityService.getPosts();
      const updatedPosts = posts.map(post => {
          if (post.id === postId) {
              return { ...post, comments: [...post.comments, comment] };
          }
          return post;
      });
      localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
      return updatedPosts;
  }
};
