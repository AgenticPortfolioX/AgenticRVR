import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Workflow, Video, Server, Brain } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import blogPostsRaw from '../data/blog-posts.json';

// Type definition for blog post
interface BlogPostData {
  id: string;
  Title: string;
  Date: string;
  Description: string;
  Category: string;
  Author: string;
  image: string;
  path: string;
  schema: string;
}

const blogPosts = blogPostsRaw as BlogPostData[];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Agentic Workflows': return Workflow;
    case 'Video Marketing': return Video;
    case 'Hardware Nodes': return Server;
    case 'Agentic Nodes': return Brain;
    default: return Workflow;
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.id === slug);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      // Add basename if it exists in the environment or project config
      // React Router is using basename="/AgenticRVR"
      const fetchPath = post.path.startsWith('/') ? `/AgenticRVR${post.path}` : `/AgenticRVR/${post.path}`;
      
      fetch(fetchPath)
        .then(r => {
          if (!r.ok) throw new Error('Failed to load post content');
          return r.text();
        })
        .then(text => {
          const displayContent = text.replace(/^---\s*[\s\S]*?\s*---/, '').trim();
          setContent(displayContent);
        })
        .catch(err => {
          console.error(err);
          // Fallback if the path is not found with basename
          fetch(post.path)
            .then(r => r.text())
            .then(text => {
              const displayContent = text.replace(/^---\s*[\s\S]*?\s*---/, '').trim();
              setContent(displayContent);
            });
        });
    }
  }, [post]);

  useEffect(() => {
    if (post && post.schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      const schemaPath = post.schema.startsWith('/') ? `/AgenticRVR${post.schema}` : `/AgenticRVR/${post.schema}`;
      
      fetch(schemaPath)
        .then(r => r.json())
        .then(data => {
          script.text = JSON.stringify(data);
          document.head.appendChild(script);
        })
        .catch(() => {
          fetch(post.schema).then(r => r.json()).then(data => {
            script.text = JSON.stringify(data);
            document.head.appendChild(script);
          });
        });
        
      return () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  useSEO(post.Title, post.Description);
  const Icon = getCategoryIcon(post.Category);

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
              {post.Category}
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <Calendar className="w-4 h-4" />
              {post.Date}
            </div>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8"
          >
            {post.Title}
          </motion.h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12">
            {post.Description}
          </p>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
            <img 
              src={post.image.startsWith('/') ? `/AgenticRVR${post.image}` : `/AgenticRVR/${post.image}`} 
              alt={post.Title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback for dev environment or root deployment
                const target = e.target as HTMLImageElement;
                if (target.src.includes('/AgenticRVR')) {
                  target.src = post.image;
                }
              }}
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
            {content}
          </ReactMarkdown>
        </motion.div>
      </div>
    </div>
  );
}
