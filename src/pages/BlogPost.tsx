import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Workflow, Video, Server } from 'lucide-react';
import { getPostBySlug } from '../utils/blogLoader';
import { useSEO } from '../hooks/useSEO';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Restoration Workflows': return Workflow;
    case 'Video Marketing': return Video;
    case 'Hardware Nodes': return Server;
    default: return Workflow;
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  useSEO(post.meta.title, post.meta.excerpt);
  const Icon = getCategoryIcon(post.meta.category);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Updates
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center gap-4 text-sm mb-6">
            <div className="flex items-center gap-2 text-orange-500 font-medium bg-[#141414] border border-white/5 px-3 py-1.5 rounded-full">
              <Icon className="w-4 h-4" />
              {post.meta.category}
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <Calendar className="w-4 h-4" />
              {post.meta.date}
            </div>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8"
          >
            {post.meta.title}
          </motion.h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12">
            {post.meta.excerpt}
          </p>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
            <img 
              src={post.resolvedImage} 
              alt={post.meta.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert prose-lg max-w-none prose-img:rounded-3xl prose-headings:font-medium prose-a:text-orange-500 prose-a:no-underline hover:prose-a:text-orange-400"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </motion.div>
      </div>
    </div>
  );
}
