import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="font-semibold text-xl tracking-tight">Renowed Value Restoration LLC<span className="text-orange-500">.</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 mr-8">
          <Link to="/workflows" className="hover:text-white transition-colors">Automated Workflows</Link>
          <Link to="/speed-to-lead" className="hover:text-white transition-colors">Speed-to-Lead</Link>
          <Link to="/replies" className="hover:text-white transition-colors">Respond Agent</Link>
          <Link to="/video" className="hover:text-white transition-colors">Video Marketing</Link>
          <Link to="/nodes" className="hover:text-white transition-colors">Hardware Nodes</Link>
          <Link to="/blog" className="hover:text-white transition-colors">Updates</Link>
        </div>
        <Link to="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors inline-flex items-center justify-center">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
