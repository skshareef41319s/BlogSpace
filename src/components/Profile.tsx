import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, Calendar, Edit3, Save, X, Heart, MessageCircle } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import BlogCard from './BlogCard';

const Profile: React.FC = () => {
  const { user, updateProfile, blogs } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editEmail, setEditEmail] = useState(user?.email || '');
  const [editBio, setEditBio] = useState(user?.bio || '');
  const [activeTab, setActiveTab] = useState<'posts' | 'liked'>('posts');

  if (!user) return null;

  const userBlogs = blogs.filter(blog => blog.authorId === user.id);
  const likedBlogs = blogs.filter(blog => blog.likedBy.includes(user.id));

  const handleSave = () => {
    if (editName.trim() && editEmail.trim()) {
      updateProfile({
        name: editName.trim(),
        email: editEmail.trim(),
        bio: editBio.trim()
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditName(user.name);
    setEditEmail(user.email);
    setEditBio(user.bio || '');
    setIsEditing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateProfile({ profilePicture: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden mb-8"
      >
        <div className="relative h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="absolute -bottom-12 left-8">
            <div className="relative">
              <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full p-1 shadow-xl">
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <label className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer">
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="pt-16 p-8">
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4 max-w-md">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="text-3xl font-bold bg-transparent border-b-2 border-blue-500 focus:outline-none text-gray-900 dark:text-white pb-2 w-full"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="text-lg bg-transparent border-b-2 border-blue-500 focus:outline-none text-gray-600 dark:text-gray-300 pb-2 w-full"
                    placeholder="Your email"
                  />
                  <textarea
                    value={editBio}
                    onChange={(e) => setEditBio(e.target.value)}
                    className="text-base bg-transparent border-b-2 border-blue-500 focus:outline-none text-gray-600 dark:text-gray-300 pb-2 w-full resize-none"
                    placeholder="Tell us about yourself..."
                    rows={3}
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {user.name}
                  </h1>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-3">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {new Date(user.joinedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  {user.bio && (
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                      {user.bio}
                    </p>
                  )}
                </>
              )}
            </div>

            <div className="flex space-x-2">
              {isEditing ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCancel}
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSave}
                    className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Save className="w-5 h-5" />
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsEditing(true)}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                >
                  <Edit3 className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {userBlogs.length}
              </div>
              <div className="text-sm font-medium text-blue-800 dark:text-blue-300">Posts Written</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {userBlogs.reduce((sum, blog) => sum + blog.likes, 0)}
              </div>
              <div className="text-sm font-medium text-purple-800 dark:text-purple-300">Total Likes</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">
                {userBlogs.reduce((sum, blog) => sum + blog.comments.length, 0)}
              </div>
              <div className="text-sm font-medium text-pink-800 dark:text-pink-300">Comments Received</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex">
            {[
              { key: 'posts', label: 'My Posts', icon: MessageCircle, count: userBlogs.length },
              { key: 'liked', label: 'Liked Posts', icon: Heart, count: likedBlogs.length }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.key}
                  whileHover={{ y: -1 }}
                  onClick={() => setActiveTab(tab.key as 'posts' | 'liked')}
                  className={`flex-1 px-6 py-4 font-semibold transition-all duration-200 flex items-center justify-center space-x-2 relative ${
                    activeTab === tab.key
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    {tab.count}
                  </span>
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeProfileTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'posts' ? (
            userBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userBlogs.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index} showActions />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No posts yet
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Start sharing your thoughts with the community!
                </p>
              </motion.div>
            )
          ) : (
            likedBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedBlogs.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No liked posts yet
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore the blog feed and like posts you enjoy!
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;