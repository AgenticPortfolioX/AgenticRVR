import { motion } from 'motion/react';
import { Workflow, Video, ArrowUpRight, Server, Zap, Sparkles, Laptop, Compass } from 'lucide-react';
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
            Modern systems designed to scale local trade and small business operations.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ==================== ROW 1 ==================== */}
          {/* 1. Contractor Digital Launchpad (Orange Premium Card - md:col-span-1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] p-10 text-black relative overflow-hidden group flex flex-col justify-between min-h-[320px]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center shrink-0">
                <Laptop className="w-7 h-7 text-black" />
              </div>
              
              <div className="mt-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/10 text-xs font-semibold text-black/85 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  Most Popular
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-3">Digital Launchpad</h3>
                <p className="text-black/75 font-semibold text-xs uppercase tracking-wider mb-3">3-Part System</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm font-medium text-black/90">
                    <span className="shrink-0 w-4 h-4 rounded-full bg-black/15 flex items-center justify-center text-[9px] font-black mt-0.5">1</span>
                    <span><strong>The Website</strong> — A stunning site that converts visitors into quote requests.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm font-medium text-black/90">
                    <span className="shrink-0 w-4 h-4 rounded-full bg-black/15 flex items-center justify-center text-[9px] font-black mt-0.5">2</span>
                    <span><strong>The Funnel</strong> — Instant SMS lead routing straight to your phone.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm font-medium text-black/90">
                    <span className="shrink-0 w-4 h-4 rounded-full bg-black/15 flex items-center justify-center text-[9px] font-black mt-0.5">3</span>
                    <span><strong>The Efficiencies</strong> — Backend automations that run your business.</span>
                  </li>
                </ul>
                <Link to="/digital-launchpad" className="flex items-center gap-2 text-sm font-bold text-black hover:text-black/80 transition-colors">
                  See The Full Package <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* 2. Automation Consultation (Grey Premium Card - md:col-span-2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Compass className="w-7 h-7 text-orange-500" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-3xl font-medium tracking-tight mb-3">Automation Consultation</h3>
                <p className="text-zinc-400 text-base max-w-xl mb-6 leading-relaxed">
                  Unlock hidden operational efficiency. We sit down with you to audit your current trade workflow and replace manual paperwork with autonomous business automation.
                </p>
                <Link to="/automation-consultation" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  Book A Consultation <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ==================== ROW 2 ==================== */}
          {/* 3. Agentic Workflows (Grey Premium Card - md:col-span-2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Workflow className="w-7 h-7 text-orange-500" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-3xl font-medium tracking-tight mb-3">Agentic Workflows</h3>
                <p className="text-zinc-400 text-base max-w-xl mb-6 leading-relaxed">
                  Automate the mundane. Scale the extraordinary. Custom AI agents designed to handle your back-office, schedule dispatch, and update invoices seamlessly.
                </p>
                <Link to="/workflows" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 4. Video Marketing & 3D (Grey Premium Card - md:col-span-1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-luminosity pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-transparent pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Video className="w-7 h-7 text-white" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-medium tracking-tight mb-2">Video Marketing &amp; 3D</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Cinematic real estate flythroughs, drone coverage, and high-impact custom short-form video ads.
                </p>
                <Link to="/video" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  Explore Portfolio <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ==================== ROW 3 ==================== */}
          {/* 5. Speed-to-Lead (Grey Card - md:col-span-1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-[#141414] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[220px]"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Zap className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-medium">Speed-to-Lead</h3>
              </div>
              
              <div className="mt-6">
                <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
                  Instant AI SMS auto-responses. Qualify inbound customer inquiries 24/7 without delays.
                </p>
                <Link to="/speed-to-lead" className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors">
                  Learn more <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 6. Agentic Replies (Grey Card - md:col-span-1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-[#141414] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[220px]"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-medium">Respond Agent</h3>
              </div>
              
              <div className="mt-6">
                <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
                  Automated local reputation and Google Business reviews response systems.
                </p>
                <Link to="/replies" className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors">
                  Learn more <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 7. Hardware Nodes (Grey Card - md:col-span-1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-[#141414] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[220px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Server className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-medium">Hardware Nodes</h3>
              </div>
              
              <div className="mt-6">
                <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
                  Sovereign Bitcoin, Lightning, and NOSTR node installations with autonomous health checking.
                </p>
                <Link to="/nodes" className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors">
                  Learn more <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
