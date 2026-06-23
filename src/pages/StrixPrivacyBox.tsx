import React from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  FileText,
  MessageSquare,
  Users,
  WifiOff,
  ArrowRight,
  CheckCircle2,
  Lock,
  PhoneCall,
  Laptop,
  HardDrive,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function StrixPrivacyBox() {
  useSEO(
    'Strix Privacy Box — Local AI Appliance for CPAs, Law Firms & Medical Offices | RVR LLC',
    'An on-site AI appliance that answers questions from your sensitive documents without ever connecting to the internet. Full HIPAA compliance, attorney-client privilege protection, zero data leaks. Hardware, installation, and maintenance included.'
  );


  const capabilities = [
    {
      icon: FileText,
      title: 'Secure Document Intelligence',
      desc: 'Ask plain-English questions across your entire PDF, Word, and text document library. Get pinpoint answers with source citations — no cloud upload ever.',
    },
    {
      icon: MessageSquare,
      title: 'Conversational Data Interface',
      desc: 'Interact with your data the way you think. "What did we bill Client X in Q3?" returns a direct answer from your files, not a vague search result.',
    },
    {
      icon: Users,
      title: 'Role-Based Access Control',
      desc: 'Attorneys see case files. CPAs see tax records. Physicians see patient charts. Each user sees only the document sets they are authorized for.',
    },
    {
      icon: WifiOff,
      title: 'Air-Gapped Inference',
      desc: 'The AI model runs entirely on the hardware appliance. No query ever leaves your office. No API calls to OpenAI, Google, or anyone else. Ever.',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Laptop Proof of Concept',
      desc: 'Before any deposit, we run a live demo on a laptop with a sample of your actual document types. You see the AI answer real questions from your files in real time. No commitment required.',
      icon: Laptop,
      badge: 'Free Demo',
    },
    {
      step: '02',
      title: '50% Deposit Triggers Hardware Order',
      desc: 'Once you are satisfied with the PoC, a 50% deposit funds the hardware order. The appliance is spec\'d, sourced, and assembled specifically for your document volume and access requirements.',
      icon: HardDrive,
      badge: 'Hardware',
    },
    {
      step: '03',
      title: 'On-Site Installation & Training',
      desc: 'We come to your office, rack the appliance, ingest your document library, configure role-based access, and train your team in a single half-day session. You are live the same day.',
      icon: Lock,
      badge: 'Go-Live',
    },
  ];

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen bg-[#050505] selection:bg-orange-500/30">
      <div className="max-w-7xl mx-auto">

        {/* ==================== HERO ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center max-w-5xl mx-auto relative pt-8"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/6 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <Shield className="w-4 h-4" />
            Private AI for Regulated Industries
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            The Local AI Privacy Box.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">All Intelligence, Zero Exposure.</span>
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed mb-4 max-w-3xl mx-auto">
            An on-site AI appliance that ingests, analyzes, and answers questions from your sensitive documents — without ever connecting to the internet.
          </p>
          <p className="text-base text-zinc-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            We come to your office and run AI on your actual documents before you spend a dollar on hardware. Full HIPAA compliance, attorney-client privilege protection, zero data leaks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-bold hover:opacity-90 transition-all shadow-lg"
            >
              Request a Live Air-Gapped Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </motion.div>


        {/* ==================== COMPLIANCE BADGE BAR ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 mb-24"
        >
          {[
            { stat: 'HIPAA', label: 'Compliant by architecture' },
            { stat: '0 bytes', label: 'Sent to any cloud' },
            { stat: 'Air-gapped', label: 'Inference engine' },
            { stat: '100%', label: 'Data stays on-premise' },
          ].map((item, i) => (
            <div key={i} className="bg-[#0d0d0d] px-8 py-7 text-center">
              <p className="text-2xl font-extrabold text-orange-400 mb-1">{item.stat}</p>
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>


        {/* ==================== KEY CAPABILITIES ==================== */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              Core Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What the Strix Box Does</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Every capability runs on-premise. Nothing crosses the network boundary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 flex gap-6 group hover:border-orange-500/25 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{cap.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* ==================== HOW IT WORKS ==================== */}
        <section className="mb-28 scroll-mt-28" id="how-it-works">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              The Presale Model
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">See It Before You Buy It</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We run a working proof of concept on a laptop with your actual documents before any hardware is ordered. You fund what you've already seen work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 flex flex-col group hover:border-orange-500/25 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-orange-400" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                      {step.badge}
                    </span>
                  </div>
                  <span className="text-5xl font-black text-white/5 mb-2">{step.step}</span>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* ==================== PRICING ==================== */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] p-10 text-black flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 text-[10px] font-bold uppercase tracking-wider mb-6">
                  Investment
                </div>
                <h3 className="text-3xl font-extrabold tracking-tight mb-6 leading-tight">Simple, Flat Pricing</h3>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white/35 shadow-md">
                    <p className="text-xs uppercase text-orange-950 font-bold mb-1">One-Time Setup</p>
                    <p className="text-4xl font-black text-black">$9,995</p>
                    <p className="text-sm text-black/70 mt-1">Hardware + installation + document ingestion + training (client-funded — 50% deposit triggers the hardware order, balance due at installation)</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-black/10 border border-black/10">
                    <p className="text-xs uppercase text-black/60 font-bold mb-1">Monthly Maintenance</p>
                    <p className="text-4xl font-black text-black">$600<span className="text-xl font-semibold">/mo</span></p>
                    <p className="text-sm text-black/70 mt-1">Model updates, hardware health monitoring, document re-indexing</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/10 border border-black/10 text-xs font-bold text-black/70">
                    50% deposit ($4,997.50) triggers the hardware order. Balance due at installation.
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-black/10 text-xs font-bold text-black/75">
                Client funds the hardware — you pay nothing upfront until you've seen it work.
              </div>
            </motion.div>

            {/* Ideal For Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Ideal For</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'CPA Firms',
                      desc: 'Query tax returns, engagement letters, and client financials in plain English. No sensitive data ever uploaded to a third-party AI service. Satisfies AICPA data governance best practices.',
                    },
                    {
                      title: 'Boutique Law Practices',
                      desc: 'Ask across case files, contracts, and discovery documents. Attorney-client privilege is protected by architecture — no query ever leaves your office, full stop.',
                    },
                    {
                      title: 'Medical Offices & Clinics',
                      desc: 'Search patient records, treatment protocols, and billing documents with natural language. HIPAA compliance is structural: the appliance has no internet interface at the inference layer.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 bg-orange-500/5 border border-orange-500/15 rounded-2xl p-4">
                <p className="text-xs text-orange-400/80 leading-relaxed font-medium">
                  <strong className="text-orange-400">Privacy Compliance Note:</strong> The Strix Box is designed from first principles for regulated industries. The air-gapped inference architecture means there is no data pathway to any external server, satisfying the technical safeguard requirements of HIPAA §164.312, SOC 2 Type II data residency controls, and attorney-client privilege confidentiality obligations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ==================== CTA ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />
          <PhoneCall className="w-12 h-12 text-orange-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Request a Live Air-Gapped Demo</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We'll bring a laptop, load a set of sample documents matching your document types, and let you ask real questions — live, in your office, before any money changes hands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            {[
              'No internet required at demo',
              'Uses your actual document types',
              'No sales pressure — just proof',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-zinc-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                {item}
                {i < 2 && <span className="hidden sm:block text-zinc-600 ml-2">•</span>}
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-extrabold hover:opacity-90 transition-all shadow-2xl shadow-orange-500/20 text-lg"
          >
            Get the Audit-Proof AI <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-zinc-600 mt-4">We'll reach back out within one business day.</p>
        </motion.section>

      </div>
    </div>
  );
}
