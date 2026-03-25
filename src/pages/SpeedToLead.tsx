import React from 'react';
import { motion } from 'motion/react';
import { Zap, Clock, MessageSquare, Calendar, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function SpeedToLead() {
  useSEO('Speed-to-Lead Agents | Renowed Value Restoration LLC', 'AI systems that respond to new leads instantly, 24/7, without human intervention.');

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <Zap className="w-4 h-4" />
            Instant Response AI
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
            The lead never waits.<br />
            <span className="text-zinc-500">You never miss out.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            A speed-to-lead agent is an AI system that responds to new leads instantly, 24/7, without human intervention. Wake up to qualified appointments instead of cold leads.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
          >
            Hire This Agent <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* The Problem & Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-white/5 rounded-[2rem] p-10"
          >
            <h2 className="text-3xl font-medium mb-6">Why Speed Matters</h2>
            <p className="text-zinc-400 mb-8">
              The numbers are brutal. Average B2B response time is 42 hours. Most leads are dead by then.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl">78%</span>
                </div>
                <div>
                  <p className="text-white font-medium">Buy from the first responder</p>
                  <p className="text-sm text-zinc-500">Customers buy from the company that responds first.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl">21x</span>
                </div>
                <div>
                  <p className="text-white font-medium">More likely to qualify</p>
                  <p className="text-sm text-zinc-500">Responding in 5 minutes vs 30 minutes increases qualification by 21x.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl">50%</span>
                </div>
                <div>
                  <p className="text-white font-medium">Go to the fastest vendor</p>
                  <p className="text-sm text-zinc-500">Half of all leads go to the vendor that responds first.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] p-10 text-black flex flex-col justify-center"
          >
            <h2 className="text-3xl font-medium mb-6">The Intelligent Difference</h2>
            <p className="text-black/80 text-lg mb-8 font-medium">
              Speed-to-lead isn't just about being fast. It's about being fast AND intelligent.
            </p>
            
            <div className="bg-black/10 rounded-xl p-6 mb-4 backdrop-blur-sm border border-black/10">
              <div className="text-xs font-bold uppercase tracking-wider text-black/60 mb-2">Dumb Autoresponder ($50/mo)</div>
              <p className="font-medium">"Thanks for your inquiry, we'll be in touch soon."</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">Our Agentic Solution ($500/mo)</div>
              <p className="font-medium text-black">"Hey John, thanks for reaching out about our landscaping services. Quick question: is this for a residential or commercial project?"</p>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium tracking-tight mb-4">How It Works</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              When someone submits a form on your website, our agent takes over instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="w-6 h-6 text-orange-500" />,
                title: "Instant Response",
                desc: "Responds within seconds via text, email, or call."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-orange-500" />,
                title: "Qualifies Leads",
                desc: "Asks qualifying questions and captures key information."
              },
              {
                icon: <Calendar className="w-6 h-6 text-orange-500" />,
                title: "Books Meetings",
                desc: "Books a meeting directly on your calendar or sends a quote."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#141414] border border-white/5 rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 md:p-16 text-center"
        >
          <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Real Results</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
            This isn't theoretical. We've seen contractors, real estate agents, and service businesses increase close rates by <span className="text-white font-medium">30-50%</span> just by responding faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> 24/7 Operation
            </div>
            <div className="hidden sm:block text-zinc-600">•</div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Zero Human Intervention
            </div>
            <div className="hidden sm:block text-zinc-600">•</div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Instant Notifications
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
