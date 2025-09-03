import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import BlogCard from './BlogCard';
import CreateBlog from './CreateBlog';

const BlogFeed: React.FC = () => {
  const { blogs, searchTerm, setSearchTerm, selectedTag, setSelectedTag } = useApp();
  const [showCreateBlog, setShowCreateBlog] = useState(false);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach(blog => blog.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = searchTerm === '' || 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag === '' || blog.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [blogs, searchTerm, selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Latest Posts
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover amazing stories from our community of {blogs.length} posts
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCreateBlog(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Create Post</span>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search posts, authors, or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg"
          />
          {searchTerm && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </div>

        <div className="relative">
          <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="pl-12 pr-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white shadow-lg appearance-none cursor-pointer min-w-[200px]"
          >
            <option value="">All Categories</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>
                {tag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} showActions />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center py-20"
        >
          <div className="max-w-md mx-auto">
            <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              No posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {searchTerm || selectedTag 
                ? 'Try adjusting your search or filter criteria'
                : 'Be the first to share your story with the community!'
              }
            </p>
            {(searchTerm || selectedTag) && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Clear Filters
              </motion.button>
            )}
          </div>
        </motion.div>
      )}

      {showCreateBlog && <CreateBlog onClose={() => setShowCreateBlog(false)} />}
    </div>
  );
};

export default BlogFeed;