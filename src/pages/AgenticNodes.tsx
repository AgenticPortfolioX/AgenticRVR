import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Server, Zap, Bitcoin, MessageSquare, Bot, TrendingUp } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function AgenticNodes() {
  useSEO('Hardware Nodes | RVR LLC', 'Combine the security of Bitcoin, the speed of Lightning, and the freedom of Nostr in one sleek, silent device.');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-sm text-orange-400 mb-6"
          >
            <Server className="w-4 h-4" />
            Hardware Nodes
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
          >
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Sovereign</span> Stack.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Combine the security of Bitcoin, the speed of Lightning, and the freedom of Nostr in one sleek, silent device.
          </motion.p>
        </div>

        {/* Premium Glow Card Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative group max-w-4xl mx-auto mb-32"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-[#050505] border border-white/10 rounded-[2rem] p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-orange-500/10 blur-[100px]" />
            <Bitcoin className="w-16 h-16 text-orange-500 mx-auto mb-8 relative z-10" />
            <h4 className="text-4xl md:text-5xl font-medium mb-6 relative z-10 tracking-tight">The Agentic Bitcoin Node</h4>
            <p className="text-zinc-400 text-lg md:text-xl mb-10 relative z-10 max-w-xl mx-auto leading-relaxed">
              Your personal AI agent lives here. It autonomously manages your node, routes Lightning payments, and interacts with Bitcoin and Nostr applications on your behalf.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link to="/order-node?model=base" className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 w-full sm:w-auto">
                Base Node <span className="text-zinc-500 font-normal">|</span> $1,400
              </Link>
              <Link to="/order-node?model=pro" className="px-8 py-4 bg-orange-500 text-black rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 w-full sm:w-auto">
                Pro Node <span className="text-black/60 font-normal">|</span> $1,900
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {[
            { icon: Bitcoin, title: 'Bitcoin Core', desc: 'Fully validating node. Be your own bank and verify your own transactions.' },
            { icon: Zap, title: 'Lightning Network', desc: 'Route payments and earn routing fees with automated channel management.' },
            { icon: MessageSquare, title: 'Nostr Relay', desc: 'Run your own sovereign communication relay for uncensorable social networking.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-xl font-medium mb-3">{item.title}</h4>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Middle Section: Autonomous Agentic Control */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium mb-6">
              <Bot className="w-4 h-4" /> Built-in Intelligence
            </div>
            <h3 className="text-3xl md:text-4xl font-medium mb-6">Agentic Control</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Your node isn't just a passive server; it's an active financial agent. It comes equipped with an AI that manages your infrastructure and executes strategies while you sleep.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Zap className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Lightning Management</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Autonomously manages channel liquidity, rebalances routes, and optimizes your node for maximum routing fee generation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MessageSquare className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Nostr Integration</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">The agent uses Nostr applications natively, broadcasting updates, reading signals, and managing your relay connections.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Automated Trading (Pro)</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Executes complex, high-speed trading strategies on Polymarket and Hyperliquid directly from your sovereign hardware.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-[#141414] border border-white/5 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.15)_0%,transparent_60%)]" />
             <Bot className="w-40 h-40 text-orange-500/20 relative z-10" />
             {/* Decorative floating elements */}
             <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center backdrop-blur-sm">
               <Bitcoin className="w-6 h-6 text-orange-500" />
             </motion.div>
             <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center backdrop-blur-sm">
               <TrendingUp className="w-6 h-6 text-orange-500" />
             </motion.div>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto"
        >
           {/* Base Model */}
           <div className="bg-[#141414] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col">
             <h4 className="text-2xl font-medium mb-2">Base Node</h4>
             <div className="text-5xl font-medium text-white mb-8">$1,400</div>
             <ul className="space-y-5 mb-10 flex-grow">
               <li className="flex items-center gap-4 text-zinc-300"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Bitcoin, Lightning & Nostr</li>
               <li className="flex items-center gap-4 text-zinc-300"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Base AI Agent Manager</li>
             </ul>
             <Link to="/order-node?model=base" className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors text-center block">Order Base Node</Link>
           </div>
           
           {/* Pro Model */}
           <div className="bg-gradient-to-b from-[#1a1410] to-[#0a0a0a] border border-orange-500/30 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-orange-500 text-black text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">Most Popular</div>
             <h4 className="text-2xl font-medium mb-2">Pro Node</h4>
             <div className="text-5xl font-medium text-orange-500 mb-8">$1,900</div>
             <ul className="space-y-5 mb-10 flex-grow">
               <li className="flex items-center gap-4 text-zinc-300"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Bitcoin, Lightning & Nostr</li>
               <li className="flex items-center gap-4 text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Polymarket Trading Bot</li>
               <li className="flex items-center gap-4 text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Hyperliquid Execution Bot</li>
             </ul>
             <Link to="/order-node?model=pro" className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-black rounded-full font-medium transition-colors shadow-[0_0_30px_rgba(255,107,0,0.3)] text-center block">Order Pro Node</Link>
           </div>
        </motion.div>

        {/* Tech Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden max-w-4xl mx-auto"
        >
          <div className="p-8 border-b border-white/5">
            <h4 className="text-2xl font-medium">Technical Specifications</h4>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { label: 'Processor', value: 'Raspberry Pi 5 (Quad-core ARM Cortex-A76)' },
              { label: 'Memory', value: '8GB or 16GB LPDDR4X' },
              { label: 'Storage', value: '2TB NVMe M.2 SSD' },
              { label: 'Network', value: 'Gigabit Ethernet, Wi-Fi 6' },
              { label: 'OS', value: 'Umbrel OS (Linux based)' },
            ].map((spec, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
                <div className="w-1/3 text-zinc-500 font-medium mb-2 md:mb-0">{spec.label}</div>
                <div className="w-2/3 text-zinc-200">{spec.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
