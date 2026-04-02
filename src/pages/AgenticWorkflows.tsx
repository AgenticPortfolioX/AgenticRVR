import React from 'react';
import { motion } from 'motion/react';
import { Workflow, Bot, Zap, ArrowRight, CheckCircle2, TrendingUp, Cpu, Network, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function AgenticWorkflows() {
  useSEO('Automated Workflows | RVR LLC', 'Custom AI agents that take action, use tools, and complete complex multi-step processes across your business.');

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
            <Workflow className="w-4 h-4" />
            Agentic Workflows
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Automate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">impossible</span>.
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            We build custom AI agents that don't just answer questions—they take action, use tools, and complete complex multi-step processes across your business.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-3xl font-medium mb-6">The Cost of Manual Work</h2>
            <p className="text-zinc-400 mb-8">
              Your most valuable asset is time. Yet, your team spends countless hours on repetitive, rule-based tasks that stifle growth and innovation.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl">40%</span>
                </div>
                <div>
                  <p className="text-white font-medium">Time Wasted</p>
                  <p className="text-sm text-zinc-500">The average worker spends 40% of their day on manual administrative tasks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl">10x</span>
                </div>
                <div>
                  <p className="text-white font-medium">Error Reduction</p>
                  <p className="text-sm text-zinc-500">Automated systems reduce data entry and processing errors by up to 10x.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl">24/7</span>
                </div>
                <div>
                  <p className="text-white font-medium">Continuous Operation</p>
                  <p className="text-sm text-zinc-500">Agents don't sleep. They process data, generate reports, and trigger actions around the clock.</p>
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
            <h2 className="text-3xl font-medium mb-6">Beyond Chatbots</h2>
            <p className="text-black/80 text-lg mb-8 font-medium">
              Traditional AI just generates text. Agentic workflows actually execute tasks across your software stack.
            </p>
            
            <div className="bg-black/10 rounded-xl p-6 mb-4 backdrop-blur-sm border border-black/10">
              <div className="text-xs font-bold uppercase tracking-wider text-black/60 mb-2">Standard AI</div>
              <p className="font-medium">"Here is a draft of an email you can send to your client."</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">Agentic Workflow</div>
              <p className="font-medium text-black">"I retrieved the client data from Salesforce, drafted the proposal, generated the PDF, and emailed it to the client. I've also updated the CRM status to 'Proposal Sent'."</p>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium tracking-tight mb-4">Our Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We don't just hand you software. We architect, build, and deploy custom agents tailored to your exact operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Network className="w-6 h-6 text-orange-500" />,
                title: "Process Discovery",
                desc: "We analyze your current manual workflows to identify high-ROI automation targets and map the exact logic required."
              },
              {
                icon: <Cpu className="w-6 h-6 text-orange-500" />,
                title: "Agent Architecture",
                desc: "We design specialized AI agents equipped with the exact tools, API connections, and decision-making frameworks they need."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
                title: "Deployment & Monitoring",
                desc: "Agents are deployed into your environment with full observability, error handling, and human-in-the-loop controls."
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
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Scale Without Overhead</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
            By automating complex workflows, businesses can scale their operations <span className="text-white font-medium">exponentially</span> without linearly increasing their headcount or operational costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> API Integrations
            </div>
            <div className="hidden sm:block text-zinc-600">•</div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Multi-Step Reasoning
            </div>
            <div className="hidden sm:block text-zinc-600">•</div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Human-in-the-loop
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
