import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Workflow, Video, Server, ArrowRight, Brain } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blog-posts.json';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Agentic Workflows': return Workflow;
    case 'Video Marketing': return Video;
    case 'Hardware Nodes': return Server;
    case 'Agentic Nodes': return Brain;
    default: return Workflow;
  }
};

export default function Blog() {
  useSEO('Updates & Social', 'Latest news, case studies, and updates from RVR LLC.');
  const [filter, setFilter] = useState('All');

  const filteredPosts = filter === 'All' ? blogPosts : blogPosts.filter(p => p.Category === filter);

  const categories = ['All', ...new Set(blogPosts.map(p => p.Category))];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
          >
            Updates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Insights</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            The latest from our workflows, creative studio, and hardware divisions.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-white text-black' 
                  : 'bg-[#141414] text-zinc-400 border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid - 4 columns on LG */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden group cursor-pointer hover:border-orange-500/30 transition-colors flex flex-col h-full"
              >
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={post.image} alt={post.Title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-white border border-white/10">
                    {(() => {
                      const Icon = getCategoryIcon(post.Category);
                      return <Icon className="w-3.5 h-3.5 text-orange-500" />
                    })()}
                    {post.Category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    {post.Date}
                  </div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">{post.Title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{post.Description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-orange-500 transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
