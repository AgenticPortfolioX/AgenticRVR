import { motion } from 'motion/react';
import { ArrowRight, Play, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left: main copy */}
          <div className="max-w-3xl flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              The Future of Automation, Media, &amp; Hardware
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-8xl font-medium tracking-tighter leading-[1.1] mb-8"
            >
              Scale your vision with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">agentic</span> precision.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
            >
              We build intelligent workflows, craft stunning video marketing assets, and provide sovereign hardware nodes for the decentralized future.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link to="/workflows" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Explore Workflows <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/nodes" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                View Hardware
              </Link>
            </motion.div>
          </div>

          {/* Right: AMP feature card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-[340px] xl:w-[380px] flex-shrink-0 mt-4 lg:mt-20"
          >
            <Link to="/AMP" className="block group">
              <div className="rounded-[2rem] bg-gradient-to-br from-violet-600/20 via-[#141414] to-blue-700/20 border border-violet-500/25 p-8 relative overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.3)]">
                {/* Glow layers */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.15),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />
                
                {/* Live badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-xs text-violet-300 font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  RVR LLC · Q2 2026
                </div>

                <div className="w-12 h-12 rounded-2xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-violet-400" />
                </div>

                <h3 className="text-2xl font-medium text-white mb-2 leading-tight">
                  Authenticated <br />Media Protocol
                </h3>
                <p className="text-sm font-medium text-violet-400 mb-4">AMP by RVR LLC</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Solving deepfake videos by cryptographically authenticating real ones. Zero-knowledge proofs. No identity exposure.
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['World ID', 'Noir ZK', 'Chainlink', 'C2PA'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">{tech}</span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-violet-400 group-hover:text-violet-300 transition-colors">
                  Explore the Protocol
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
