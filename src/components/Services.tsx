import { motion } from 'motion/react';
import { Workflow, Video, Home, Cuboid, ArrowUpRight, Server, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Our Solutions</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Four specialized divisions working in harmony to elevate your business.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* Agentic Workflows - Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-colors duration-500" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <Workflow className="w-7 h-7 text-orange-500" />
              </div>
              
              <div>
                <h3 className="text-3xl font-medium mb-3">Agentic Workflows</h3>
                <p className="text-zinc-400 text-lg max-w-md mb-6">
                  Automate the mundane. Scale the extraordinary. Custom AI agents designed for your unique business processes.
                </p>
                <Link to="/workflows" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-1 flex flex-col gap-6 h-full">
            {/* Speed-to-Lead - Half Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-[#141414] rounded-[2rem] p-6 border border-white/5 relative overflow-hidden group min-h-0"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/10 transition-colors duration-500" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center border border-white/10">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-medium">Speed-to-Lead</h3>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  <p className="text-zinc-400 text-xs line-clamp-2">
                    Instant AI responses. Qualify leads 24/7.
                  </p>
                  <Link to="/speed-to-lead" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-orange-500 hover:bg-orange-500 hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Agentic Reviews - Half Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex-1 bg-[#141414] rounded-[2rem] p-6 border border-white/5 relative overflow-hidden group min-h-0"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2 group-hover:bg-orange-500/10 transition-colors duration-500" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center border border-white/10">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-medium">Agentic Replies</h3>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  <p className="text-zinc-400 text-xs line-clamp-2">
                    Automated review management & reputation growth.
                  </p>
                  <Link to="/replies" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-orange-500 hover:bg-orange-500 hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hardware Nodes - Orange Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] p-10 text-black relative overflow-hidden group"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center">
                <Server className="w-7 h-7" />
              </div>
              
              <div>
                <h3 className="text-3xl font-medium mb-2">Hardware Nodes</h3>
                <p className="text-black/70 font-medium mb-4 text-sm">
                  Sovereign Bitcoin, Lightning, and NOSTR Nodes with Agentic Ai Management.
                </p>
                <Link to="/nodes" className="flex items-center gap-2 text-sm font-medium text-black hover:text-black/70 transition-colors">
                  View Specs <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Video Marketing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                <Video className="w-7 h-7 text-white" />
              </div>
              
              <div className="max-w-2xl">
                <h3 className="text-3xl font-medium mb-3">Video Marketing & 3D</h3>
                <p className="text-zinc-300 text-lg mb-6">
                  Custom video ads, cinematic real estate drone flythroughs, and immersive 3D graphics generated from standard photos.
                </p>
                <Link to="/video" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  Explore Portfolio <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
