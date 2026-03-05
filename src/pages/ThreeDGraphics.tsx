import React from 'react';
import { motion } from 'motion/react';
import { Cuboid, ArrowLeft, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function ThreeDGraphics() {
  useSEO('3D Graphics | Agentic Services', 'Transform flat 2D images into immersive 3D product renders for online sellers and dropshippers.');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <Link to="/video" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Video Marketing
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-sm text-orange-400 mb-6">
            <Cuboid className="w-4 h-4" />
            3D Graphics
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">E-Commerce</span> Store.
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12">
            Perfect for online product sellers & drop shippers. Transform flat 2D images into immersive 3D product renders that increase perceived value and conversion rates.
          </p>

          <div className="aspect-video bg-zinc-900 rounded-2xl relative flex items-center justify-center overflow-hidden mb-16 border border-white/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
            <PlayCircle className="w-16 h-16 text-white/80 relative z-10" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#141414] border border-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">For Dropshippers</h3>
              <p className="text-zinc-400">Stop using the same AliExpress photos as your competitors. We turn basic supplier images into premium 3D renders that allow you to charge higher margins.</p>
            </div>
            <div className="bg-[#141414] border border-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">Interactive Web Assets</h3>
              <p className="text-zinc-400">Increase time-on-page and buyer confidence with 3D models that customers can spin, zoom, and interact with directly on your Shopify or custom storefront.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
