import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Target, Users, Zap } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function About() {
  useSEO('About Us', 'Learn more about Renowed Value Restoration LLC, our mission, and our three core pillars.');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-sm text-orange-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
          >
            Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Agentic</span> Era.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            We believe the future belongs to those who automate the mundane and secure their sovereignty. Renowed Value Restoration LLC was founded to bridge the gap between cutting-edge AI, high-end creative media, and decentralized hardware.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'To empower businesses and individuals with autonomous tools that save time, generate revenue, and protect privacy.'
            },
            {
              icon: Users,
              title: 'Who We Are',
              desc: 'A collective of AI engineers, 3D artists, and Bitcoin maximalists dedicated to building uncompromising products.'
            },
            {
              icon: Zap,
              title: 'Our Approach',
              desc: 'We do not compromise on quality. Whether it is a custom workflow, a 4K render, or a sovereign node, we deliver excellence.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] border border-white/5 rounded-3xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,107,0,0.1)_0%,transparent_70%)]" />
          <h2 className="text-4xl md:text-5xl font-medium mb-8 relative z-10">The Three Pillars</h2>
          <div className="grid md:grid-cols-3 gap-12 relative z-10 text-left">
            <div>
              <div className="text-orange-500 font-mono text-sm mb-2">01</div>
              <h4 className="text-xl font-medium mb-3">Workflows</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Replacing rigid SaaS subscriptions with dynamic, autonomous AI agents that execute complex tasks across your business.</p>
            </div>
            <div>
              <div className="text-orange-500 font-mono text-sm mb-2">02</div>
              <h4 className="text-xl font-medium mb-3">Media</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Transforming standard inputs into breathtaking outputs. From iPhone photos to 4K cinematic drone flythroughs and 3D graphics.</p>
            </div>
            <div>
              <div className="text-orange-500 font-mono text-sm mb-2">03</div>
              <h4 className="text-xl font-medium mb-3">Hardware</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Providing the physical infrastructure for a sovereign digital life. Umbrel OS, Bitcoin, Lightning, and Nostr in one box.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
