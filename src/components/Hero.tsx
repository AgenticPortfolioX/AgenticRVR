import { motion } from 'motion/react';
import { ArrowRight, Laptop, Zap, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: main copy */}
          <div className="max-w-3xl flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Digital Foundations &amp; Operational Workflows
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-8"
            >
              Scale your business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">agentic</span> precision.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
            >
              We build fast local digital foundations to capture high-intent leads on autopilot and design intelligent automated workflows to streamline your small business operations.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link to="/digital-launchpad" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Digital Launchpad <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/workflows" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                Explore Workflows
              </Link>
            </motion.div>
          </div>

          {/* Right: Beautiful local trade digital transformation preview card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-[420px] flex-shrink-0 relative w-full"
          >
            <div className="rounded-[2rem] bg-gradient-to-br from-orange-500/10 via-[#141414] to-zinc-800/20 border border-orange-500/15 p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500/40" />
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/40" />
                  <span className="w-3.5 h-3.5 rounded-full bg-green-500/40" />
                </div>
                <span className="text-xs text-zinc-500 font-mono">rvr-system-active</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center border border-orange-500/20 shrink-0">
                    <Laptop className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Local SEO Funnel</p>
                    <p className="text-xs text-zinc-400">High-converting online presence</p>
                  </div>
                  <div className="ml-auto text-xs font-mono text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded">98% SEO</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center border border-orange-500/20 shrink-0">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Instant Lead Router</p>
                    <p className="text-xs text-zinc-400">Forms direct to phone SMS</p>
                  </div>
                  <div className="ml-auto text-xs font-mono text-orange-400 font-bold bg-orange-400/10 px-2 py-0.5 rounded">&lt;1s alert</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center border border-orange-500/20 shrink-0">
                    <Terminal className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Operations Engine</p>
                    <p className="text-xs text-zinc-400">Contracts, CRM & invoicing</p>
                  </div>
                  <div className="ml-auto text-xs font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">Autonomous</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                <span>RVR LLC Transformation Core</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
