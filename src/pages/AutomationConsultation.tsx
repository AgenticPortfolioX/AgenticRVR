import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Briefcase, Workflow, Calendar, PhoneCall, CheckCircle2, ArrowRight, Eye, Server, Zap, Sparkles, Send, Database, Star } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function AutomationConsultation() {
  useSEO(
    'Workflow Automation & Operational Audits | RVR LLC',
    'Custom workflow automation and ground-up operational audits for service businesses. Eliminate administrative drag, reclaim time, and scale with digital plumbing.'
  );

  // States for interactive components
  const [activeIntelCompetitor, setActiveIntelCompetitor] = useState('Competitor A');
  const [coordinationStep, setCoordinationStep] = useState(1);
  const [auditSignedUp, setAuditSignedUp] = useState(false);

  // Simulated data for Competitive Intel Agent Briefing
  const intelBriefs: Record<string, {
    pricing: string;
    website: string;
    jobs: string;
    social: string;
    updateTime: string;
  }> = {
    'Competitor A': {
      pricing: 'Lowered flat-rate service call from $120 to $99 for summer special promotion.',
      website: 'Added a new service landing page for "High-Efficiency AC Tune-up Systems".',
      jobs: 'Posted 2 new openings for Licensed HVAC Lead Installer & Sheet Metal Fabricator.',
      social: 'VP of Ops announced expanding local fleet operations into Northern Wayne County.',
      updateTime: '06:48 AM EST'
    },
    'Competitor B': {
      pricing: 'Introduced an 18-month 0% financing option for major residential installations.',
      website: 'Redesigned checkout portal; integrated a live automated scheduling calendar widget.',
      jobs: 'Hiring 3 Residential Plumbers & 1 Apprentice helper (Oakland County territory).',
      social: 'Founder highlighted a major commercial renovation subcontract bid win.',
      updateTime: '06:52 AM EST'
    },
    'Competitor C': {
      pricing: 'Unchanged. Standard commercial quoting rates remain highly consistent.',
      website: 'No changes detected. Site remains static since Q1.',
      jobs: 'No active job postings identified this morning.',
      social: 'Shared team community service project and standard holiday discount post.',
      updateTime: '06:55 AM EST'
    }
  };

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen bg-[#050505] selection:bg-orange-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* ==================== CORE VALUE PROPOSITION & HERO SECTION ==================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center max-w-4xl mx-auto relative pt-8"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <Compass className="w-4 h-4" />
            Operational Defense Systems
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Get your weekends back.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Eliminate administrative drag on autopilot.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-3xl mx-auto">
            Speaking directly to service business owners ($1M–$10M revenue, 5–50 employees) who are drowning in manual coordination, late invoices, and scheduling bottlenecks. We build the operational plumbing to run your trades on rails.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#audit-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-orange-500/10"
            >
              Get The Operational Audit <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#services-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Explore Core Services
            </a>
          </div>

          {/* MBA / AI Authority Builder Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 p-8 rounded-[2rem] bg-gradient-to-br from-[#141414] to-zinc-900/40 border border-white/5 max-w-3xl mx-auto text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-7 h-7 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Rigorous Operations Management Lens</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Our systems represent the intersection of an **advanced MBA operational background** and **enterprise-grade AI architecture**. We do not just throw ad-hoc technology at your problems. We analyze your workflows through a strict business management framework, reverse-engineer your core bottlenecks, and build the custom digital plumbing necessary to scale.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* ==================== GROUND-UP OPERATIONAL AUDIT SECTION ==================== */}
        <section className="py-12 scroll-mt-24 mb-24 animate-fade-in" id="audit-section">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              Diagnostic Foundations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Ground-Up Operational Audit</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our deep-dive walkthrough to trace your business plumbing and identify hidden friction points.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <Compass className="w-7 h-7 text-orange-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white tracking-tight">Deep-Dive Workflow Walkthrough</h3>
                
                <p className="text-base text-zinc-300 leading-relaxed">
                  We conduct a deep-dive walkthrough of your entire business workflow. We track exactly how a customer moves from an **initial inquiry, to a scheduled job, to an invoice, to a paid balance**. We map out every piece of software you use (and where those systems fail to talk to each other).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase text-orange-500 font-bold tracking-wider">Audit Diagnostic</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Software friction tracking, time-bleed pinpointing, and complete integration gap audits.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase text-orange-500 font-bold tracking-wider">The Deliverable</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">You receive a concrete, step-by-step roadmap showing exactly which processes can be handed off to AI and cloud workflows.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between text-zinc-500 text-xs">
                <span>Fee: $500 (One-Time)</span>
                <span className="font-mono text-orange-400">10+ Office Hours Saved Weekly</span>
              </div>
            </motion.div>

            {/* Managed Retainer Flow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] p-10 text-black flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 text-[10px] font-bold uppercase tracking-wider mb-6">
                  Host &amp; Maintain
                </div>
                <h3 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight">Delivery &amp; Retainer Flow</h3>
                <p className="font-bold text-black/90 mb-6 leading-relaxed">
                  We don't just hand you a blueprint and leave. We build, host, and maintain the plumbing.
                </p>

                <div className="space-y-4 text-sm font-semibold">
                  <div className="p-4 rounded-xl bg-black/10 border border-black/10">
                    <p className="text-xs uppercase text-black/60 font-bold mb-1">1. The Build</p>
                    <p className="text-black text-xs">We build a managed agent or custom workflow to solve your #1 operational bottleneck.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/35 shadow-md">
                    <p className="text-xs uppercase text-orange-950 font-bold mb-1">2. Cloud Deploy</p>
                    <p className="text-black text-xs">We deploy it on high-security cloud infrastructure for high stability and fast execution.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/10 border border-black/10">
                    <p className="text-xs uppercase text-black/60 font-bold mb-1">3. Stackable Retainer</p>
                    <p className="text-black text-xs">A base <strong>$500/month retainer</strong> covers hosting, monitoring, one core agent/workflow, and optimization. Additional agents stack as needed.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/10 text-xs font-bold text-black/75">
                Maintain 100% operational continuity.
              </div>
            </motion.div>
          </div>
        </section>


        {/* ==================== CORE SERVICES GRID ==================== */}
        <section className="py-12 border-t border-white/5 scroll-mt-24 mb-24" id="services-section">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              Service Offerings
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Automation Capabilities</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our specialized, high-converting integrations engineered to replace manual drag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Custom Data & Workflow Routing */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-orange-500/25 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Custom Data &amp; Workflow Routing</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We engineer the hidden digital plumbing your business lacks. Whether it’s **instantly transforming an approved field estimate into an active project task**, auto-dispatching job details and gate codes to your crew's phones the night before, or syncing field data directly with your accounting software—we make your apps talk so your people don't have to.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-semibold text-orange-500 flex items-center gap-1.5">
                Integrations Core <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            {/* Service 2: The Speed-to-Lead Integration */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-orange-500/25 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">The "Speed-to-Lead" Integration</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  If your business handles high volumes of incoming quote requests, we seamlessly plug your forms directly into our **24/7 conversational voice caller engine**. The moment a request hits your system, our automated agent calls them back **within 3 minutes** to qualify their budget and lock them directly into your calendar.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-semibold text-orange-500 flex items-center gap-1.5">
                Qualify Instantly <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            {/* Service 3: Automated Review & Reputation Extraction */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-orange-500/25 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Automated Review &amp; Reputation</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The second a job is marked **"Paid"** in your system, an automated, personalized text or email triggers to the client requesting a **5-star Google review**. This builds your local search authority entirely on autopilot, without your team ever having to remember to ask.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-semibold text-orange-500 flex items-center gap-1.5">
                Autopilot Authority <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          </div>
        </section>


        {/* ==================== PRODUCTIZED ASSETS ==================== */}
        <section className="py-12 border-t border-white/5 scroll-mt-24" id="productized-assets">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              Autonomous Systems
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Productized AI Assets</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Pre-engineered digital architectures deployed and customized directly into your operational stack.
            </p>
          </div>

          {/* Asset 1: The Competitive Intel Agent */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 font-medium">
                <Eye className="w-4 h-4" /> Productized Asset 01
              </div>

              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Product Name: The Competitive Intel Agent
              </h3>

              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                Value Proposition: **Know exactly what your top 5 local or national competitors are doing while you sleep, without spending a single minute doing manual research.**
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">
                    <strong>Continuous Autonomous Monitoring</strong>: The agent tracks 5 chosen competitors 24/7, watching for sudden pricing model changes, new website pages, local job postings, and executive social updates.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">
                    <strong>The 7:00 AM Executive Brief</strong>: Your system compiles all tracking data into a dead-simple, single-page brief delivered straight to your inbox by 7:00 AM every single morning.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">
                    <strong>Strategic Leverage</strong>: Use this data internally to adjust your own pricing and hiring strategies instantly, or package and sell the intelligence directly to market partners.
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Competitive Intel Agent Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-[#141414] border border-white/10 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider">Intel Brief Dashboard</span>
                  </div>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-zinc-500 font-mono">rvr-v2.0-core</span>
                </div>

                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">Select Target Competitor:</p>
                <div className="flex gap-2 mb-6">
                  {['Competitor A', 'Competitor B', 'Competitor C'].map((comp) => (
                    <button
                      key={comp}
                      onClick={() => setActiveIntelCompetitor(comp)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeIntelCompetitor === comp
                          ? 'bg-orange-500 text-black font-bold shadow-md'
                          : 'bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10'
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>

                {/* Brief panel */}
                <div className="bg-black/45 border border-white/5 rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-center text-[9px] text-zinc-500 border-b border-white/5 pb-2 font-mono">
                    <span>Delivered: 7:00 AM EST</span>
                    <span className="text-orange-400">Scraped: {intelBriefs[activeIntelCompetitor].updateTime}</span>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-orange-400/90 mb-1">Pricing Model Detection</p>
                      <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                        {intelBriefs[activeIntelCompetitor].pricing}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-orange-400/90 mb-1">Website Architecture Update</p>
                      <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                        {intelBriefs[activeIntelCompetitor].website}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-orange-400/90 mb-1">Active Hiring &amp; Careers</p>
                      <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                        {intelBriefs[activeIntelCompetitor].jobs}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-orange-400/90 mb-1">Social Footprint &amp; Executive PR</p>
                      <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                        {intelBriefs[activeIntelCompetitor].social}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>Continuous autonomous tracking active</span>
                  <span className="font-mono text-orange-400">5/5 Competitors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Asset 2: Autonomous Morning Coordination */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Interactive Coordination Simulated Smartphone Mockup */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <div className="w-[320px] h-[580px] bg-zinc-900 rounded-[3rem] p-3 border-4 border-zinc-800 shadow-[0_0_45px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden flex flex-col">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-800 ml-auto mr-4" />
                </div>
                
                {/* Phone screen */}
                <div className="flex-1 bg-[#0c0c0e] rounded-[2.5rem] p-4 pt-10 flex flex-col justify-between overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-zinc-500 px-2 mb-2 font-mono">
                    <span>9:41 AM</span>
                    <div className="flex items-center gap-1">
                      <span>5G</span>
                      <span className="w-4 h-2 bg-zinc-500 rounded-sm" />
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-start">
                    {/* Header */}
                    <div className="border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-xs text-orange-400 font-bold shrink-0">
                        OP
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">Automated Crew Dispatch</p>
                        <p className="text-[8px] text-orange-400">RVR Coordination Engine</p>
                      </div>
                    </div>

                    {/* Chat simulator flow */}
                    <div className="space-y-3 max-h-[360px] overflow-y-auto">
                      <div className="bg-zinc-800/60 border border-white/5 text-zinc-400 text-[10px] p-2.5 rounded-xl max-w-[85%] text-left">
                        Awaiting calendar trigger... Evening schedule executes at 7:00 PM. Click next step to trigger alert.
                      </div>

                      {coordinationStep >= 2 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-orange-500 text-black text-[10px] p-3.5 rounded-xl max-w-[90%] font-semibold text-left ml-auto shadow-lg"
                        >
                          <div className="flex items-center gap-1 font-bold uppercase tracking-wider text-[8px] opacity-75 mb-1.5">
                            <Workflow className="w-3 h-3 text-black" /> [!] TOMORROW'S JOB DISPATCH ALERT
                          </div>
                          <p className="font-extrabold text-sm mb-1">Job: Residential Installation</p>
                          <div className="space-y-1 border-t border-black/10 pt-1.5 text-[9px] font-medium leading-relaxed">
                            <p><strong>Address:</strong> 1422 Old Maple Dr, Oakland Township</p>
                            <p><strong>Gate Access:</strong> #4492</p>
                            <p><strong>Client Notes:</strong> Homeowner requests trucks park on gravel side drive, not grass. Back gate unlocked.</p>
                            <p><strong>Work Scope:</strong> Full AC unit retrofitting, copper line insulation, digital thermostat integration.</p>
                          </div>
                          <div className="mt-2 text-[8px] font-bold text-right text-black/60 uppercase">Auto-dispatch Alert Complete</div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setCoordinationStep(1)}
                        className={`flex-1 py-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors ${
                          coordinationStep === 1 
                            ? 'bg-zinc-700 text-white' 
                            : 'bg-zinc-800/40 text-zinc-500 border border-white/5'
                        }`}
                      >
                        Reset Trigger
                      </button>
                      <button 
                        onClick={() => setCoordinationStep(2)}
                        className={`flex-1 py-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors ${
                          coordinationStep === 2 
                            ? 'bg-orange-500 text-black font-extrabold' 
                            : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                        }`}
                      >
                        Trigger Text
                      </button>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center justify-between text-[9px] text-zinc-500">
                      <span>SMS Alerts routed to phone</span>
                      <span className="font-mono text-green-400 font-bold">100% Sent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asset 2 Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 font-medium">
                <Server className="w-4 h-4" /> Productized Asset 02
              </div>

              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Product Name: Automated Team Coordination Engine
              </h3>

              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                Value Proposition: **Eliminate the morning phone tag, chaotic group chats, and text-messaging bottlenecks before your crews hit the field.**
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">
                    <strong>Calendar-Driven Dispatch</strong>: The system hooks directly into your primary scheduling or dispatch calendar (like Jobber, Housecall Pro, or Airtable).
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">
                    <strong>Zero-Friction Crew Alerts</strong>: The evening before a job, the system automatically runs the schedule and sends a clean, structured text alert directly to each crew member's phone.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">
                    <strong>Complete Scope Delivery</strong>: The automated alert delivers the job address, gate access codes, client notes, and the specific scope of work for the next day, ensuring your team arrives fully informed without a single manual morning text required.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ==================== HIGH CONVERTING BOOKING MODULE ==================== */}
        <section className="py-12 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />
            <PhoneCall className="w-12 h-12 text-orange-500 mx-auto mb-6 animate-pulse" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Reclaim 10+ Hours/Week of Free Time</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Our trade operations audit is a rigorous, value-driven process. No tech buzzwords. No pushy sales pitch. Just deep operational relief, clean digital plumbing, and weekends back.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-zinc-300 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Advanced MBA Auditing Lens
              </div>
              <div className="hidden sm:block text-zinc-600">•</div>
              <div className="flex items-center gap-2 text-zinc-300 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Stackable $500/mo Base Retainer
              </div>
              <div className="hidden sm:block text-zinc-600">•</div>
              <div className="flex items-center gap-2 text-zinc-300 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 10+ Weekly Office Hours Saved
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!auditSignedUp ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
                >
                  <button 
                    onClick={() => setAuditSignedUp(true)}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-extrabold hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2 shadow-xl"
                  >
                    Schedule $500 Operational Audit <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold max-w-md mx-auto"
                >
                  <p className="text-sm">Audit Requested Successfully! Our operations specialist will contact your office cell to schedule the Discovery session.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
