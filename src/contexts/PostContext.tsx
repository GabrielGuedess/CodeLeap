import { createContext, useEffect, useState } from 'react';

import { type PostDTO } from 'dtos/PostDTO';

import { postStorage } from 'storage/postStorage';

type PostContextDataProps = {
  posts: PostDTO[];
  isLoading: boolean;
  createPost: (post: PostDTO) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  editPost: (post: PostDTO) => Promise<void>;
};

type PostContextProviderProps = {
  children: React.ReactNode;
};

export const PostContext = createContext<PostContextDataProps>(
  {} as PostContextDataProps,
);

export const PostContextProvider = ({ children }: PostContextProviderProps) => {
  const [posts, setPosts] = useState<PostDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function createPost(post: PostDTO) {
    try {
      setIsLoading(true);

      localStorage.setItem(postStorage, JSON.stringify([...posts, post]));

      setPosts(state => [...state, post]);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function deletePost(id: string) {
    try {
      setIsLoading(true);

      const filterPosts = posts.filter(post => post.id !== id);

      localStorage.setItem(postStorage, JSON.stringify(filterPosts));

      setPosts(filterPosts);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function editPost(post: PostDTO) {
    try {
      setIsLoading(true);

      const filterPosts = posts.map(item => {
        if (item.id === post.id) {
          return post;
        }

        return item;
      });

      localStorage.setItem(postStorage, JSON.stringify(filterPosts));

      setPosts(filterPosts);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function loadPosts() {
    try {
      setIsLoading(true);

      const currentPosts = localStorage.getItem(postStorage);

      setPosts(currentPosts ? JSON.parse(currentPosts) : []);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, isLoading, createPost, deletePost, editPost }}
    >
      {children}
    </PostContext.Provider>
  );
};
