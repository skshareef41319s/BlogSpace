import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Calendar, Send, Edit3, Trash2, Tag } from 'lucide-react';
import { BlogPost } from '../types';
import { useApp } from '../contexts/AppContext';

interface BlogCardProps {
  blog: BlogPost;
  index: number;
  showActions?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index, showActions = false }) => {
  const { user, toggleLike, addComment, deleteBlog } = useApp();
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const isLiked = user ? blog.likedBy.includes(user.id) : false;
  const isOwner = user?.id === blog.authorId;

  const handleLike = () => {
    if (user) {
      toggleLike(blog.id);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(blog.id, newComment);
      setNewComment('');
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deleteBlog(blog.id);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 group"
    >
      {blog.image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          {blog.tags.length > 0 && (
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                <Tag className="w-3 h-3 text-blue-600" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {blog.tags[0]}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-semibold">
                {blog.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{blog.author}</h4>
              <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>

          {showActions && isOwner && (
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200"
              >
                <Edit3 className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDelete}
                className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {blog.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
          {blog.content}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                isLiked
                  ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 shadow-md'
                  : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{blog.likes}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">{blog.comments.length}</span>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {showComments && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="space-y-4 mb-4 max-h-48 overflow-y-auto">
                {blog.comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-semibold">
                        {comment.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {comment.author}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(comment.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{comment.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {user && (
                <form onSubmit={handleAddComment} className="flex space-x-3">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    disabled={!newComment.trim()}
                    className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export default BlogCard;