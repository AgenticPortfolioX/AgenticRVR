import React from 'react';
import { motion } from 'motion/react';
import { Home, ArrowLeft, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function CinematicRealEstate() {
  useSEO('Cinematic Real Estate | RVR LLC', 'We replicate real estate walkthroughs and drone flythroughs based entirely off standard property photos.');

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
            <Home className="w-4 h-4" />
            Cinematic Real Estate
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Drone Flythroughs from <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Photos</span>.
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12">
            We replicate real estate walkthroughs and drone flythroughs based entirely off standard property photos. No on-site filming required.
          </p>

          <div className="aspect-video bg-zinc-900 rounded-2xl relative flex items-center justify-center overflow-hidden mb-16 border border-white/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
            <PlayCircle className="w-16 h-16 text-white/80 relative z-10" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#141414] border border-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">No Videographer Needed</h3>
              <p className="text-zinc-400">Save thousands on expensive drone pilots and videographers. Just upload your standard listing photos, and our AI pipeline generates a cinematic 4K video.</p>
            </div>
            <div className="bg-[#141414] border border-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">48-Hour Turnaround</h3>
              <p className="text-zinc-400">Speed to market is critical in real estate. Get your fully rendered, ready-to-post cinematic walkthrough in just 48 hours.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
