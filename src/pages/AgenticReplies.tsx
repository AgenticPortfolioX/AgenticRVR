import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Clock, Users, Search, MessageSquare, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function AgenticReplies() {
  useSEO('Agentic Replies | Automated Review Responses', 'Instantly reply to every customer review with intelligent, brand-consistent AI responses that drive local SEO and engagement.');

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
            <Sparkles className="w-4 h-4" />
            Instant Review Response AI
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
            The Automated <br />
            <span className="text-zinc-500">Review Respondent.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            A $500 monthly investment to ensure no customer is ignored. Our AI agent instantly 
            replies to every positive and negative review on your business profile, 24/7.
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
            <h2 className="text-3xl font-medium mb-6">Why Engagement Matters</h2>
            <p className="text-zinc-400 mb-8">
              A passive profile is a leaking bucket. Active engagement turns your reviews into a revenue-generating asset.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl whitespace-nowrap">5-9%</span>
                </div>
                <div>
                  <p className="text-white font-medium">Revenue Growth</p>
                  <p className="text-sm text-zinc-500">Increase in revenue correlated with just a one-star improvement on Google.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl">120h</span>
                </div>
                <div>
                  <p className="text-white font-medium">Labor Savings</p>
                  <p className="text-sm text-zinc-500">Annual manual labor replaced by automated intelligent responses.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold text-xl">56%</span>
                </div>
                <div>
                  <p className="text-white font-medium">Choose First Responders</p>
                  <p className="text-sm text-zinc-500">Of consumers choose the business that responds first to their inquiries.</p>
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
            <h2 className="text-3xl font-medium mb-6">Reputation Performance</h2>
            <p className="text-black/80 text-lg mb-8 font-medium">
              How the Agent transforms your engagement profile compared to industry standards.
            </p>
            
            <div className="space-y-4">
              <div className="bg-black/10 rounded-xl p-6 backdrop-blur-sm border border-black/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/60">Response Rate</span>
                  <span className="text-xs font-bold bg-black/20 px-2 py-0.5 rounded">Industry: ~13%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-black w-full" />
                  </div>
                  <span className="font-bold">100%</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Response Time</span>
                  <span className="text-xs font-bold bg-orange-100 px-2 py-0.5 rounded text-orange-700">Industry: 2-5 Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-orange-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-full" />
                  </div>
                  <span className="font-bold text-orange-600">&lt;15 Min</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Benefits */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium tracking-tight mb-4">Strategic Benefits</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Beyond the numbers, the agent providing business intelligence and consistent branding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
                title: "The Weekly Digest",
                desc: "Summarizes themes automatically, flagging operational issues mentioned in reviews."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-orange-500" />,
                title: "Brand Consistency",
                desc: "Tone-matched replies ensure every reviewer feels heard and valued by your brand."
              },
              {
                icon: <Search className="w-6 h-6 text-orange-500" />,
                title: "SEO Boost",
                desc: "Keyword-rich responses help you rank higher in local search results."
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
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Real Social Proof</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
            Google rewards active profiles. 100% response rates signal to algorithms to show your profile more frequently to potential customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> 100% Response Rate
            </div>
            <div className="hidden sm:block text-zinc-600">•</div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> &lt; 15 Min Response
            </div>
            <div className="hidden sm:block text-zinc-600">•</div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Sentiment Monitoring
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
