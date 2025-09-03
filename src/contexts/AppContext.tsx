import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, BlogPost } from '../types';
import { saveToStorage, loadFromStorage } from '../utils/storage';
import { dummyUsers, dummyBlogs } from '../data/dummyData';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  users: User[];
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, 'id' | 'date' | 'likes' | 'likedBy' | 'comments'>) => void;
  updateBlog: (blogId: string, updates: Partial<BlogPost>) => void;
  deleteBlog: (blogId: string) => void;
  toggleLike: (blogId: string) => void;
  addComment: (blogId: string, content: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => loadFromStorage('user'));
  const [users, setUsers] = useState<User[]>(() => {
    const saved = loadFromStorage('users');
    return saved || dummyUsers;
  });
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = loadFromStorage('blogs');
    return saved || dummyBlogs;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    saveToStorage('user', user);
  }, [user]);

  useEffect(() => {
    saveToStorage('users', users);
  }, [users]);

  useEffect(() => {
    saveToStorage('blogs', blogs);
  }, [blogs]);

  const addBlog = (blogData: Omit<BlogPost, 'id' | 'date' | 'likes' | 'likedBy' | 'comments'>) => {
    const newBlog: BlogPost = {
      ...blogData,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      likedBy: [],
      comments: []
    };
    setBlogs(prev => [newBlog, ...prev]);
  };

  const updateBlog = (blogId: string, updates: Partial<BlogPost>) => {
    setBlogs(prev => prev.map(blog => 
      blog.id === blogId ? { ...blog, ...updates } : blog
    ));
  };

  const deleteBlog = (blogId: string) => {
    setBlogs(prev => prev.filter(blog => blog.id !== blogId));
  };

  const toggleLike = (blogId: string) => {
    if (!user) return;
    
    setBlogs(prev => prev.map(blog => {
      if (blog.id === blogId) {
        const isLiked = blog.likedBy.includes(user.id);
        return {
          ...blog,
          likes: isLiked ? blog.likes - 1 : blog.likes + 1,
          likedBy: isLiked 
            ? blog.likedBy.filter(id => id !== user.id)
            : [...blog.likedBy, user.id]
        };
      }
      return blog;
    }));
  };

  const addComment = (blogId: string, content: string) => {
    if (!user || !content.trim()) return;

    const newComment = {
      id: Date.now().toString(),
      author: user.name,
      authorId: user.id,
      content: content.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    setBlogs(prev => prev.map(blog => {
      if (blog.id === blogId) {
        return {
          ...blog,
          comments: [...blog.comments, newComment]
        };
      }
      return blog;
    }));
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    setUsers(prev => prev.map(u => u.id === user.id ? updatedUser : u));
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      users,
      blogs,
      addBlog,
      updateBlog,
      deleteBlog,
      toggleLike,
      addComment,
      searchTerm,
      setSearchTerm,
      selectedTag,
      setSelectedTag,
      updateProfile
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};