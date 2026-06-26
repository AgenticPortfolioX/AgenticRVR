import { motion } from 'motion/react';
import { Link as ChainIcon, Shield, ArrowUpRight, Compass, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Our Solutions</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Modern systems designed to scale local trade and small business operations.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ====== 1. Automation Consultation ====== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Compass className="w-7 h-7 text-orange-500" />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-medium tracking-tight mb-3">Automation Consultation</h3>
                <p className="text-zinc-400 text-base max-w-xl mb-2 leading-relaxed">
                  Unlock hidden operational efficiency. We audit your current workflow and replace manual paperwork with autonomous business automation.
                </p>
                <p className="text-orange-400/80 text-sm font-semibold mb-6">Starting at $500 — walk away with a full operational blueprint.</p>
                <Link to="/automation-consultation" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  Book A Consultation <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ====== 2. Digital Launch Pad (Orange Premium Card) ====== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] p-10 text-black relative overflow-hidden group flex flex-col justify-between min-h-[340px]"
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
                <h3 className="text-3xl font-bold tracking-tight mb-2">Digital Launch Pad</h3>
                <p className="text-black/75 font-semibold text-xs uppercase tracking-wider mb-3">Website Build &amp; Managed Hosting</p>
                <p className="text-black/85 text-sm leading-relaxed mb-6">
                  Purpose-built websites engineered exclusively for blue-collar businesses. We deploy intelligent AI automation to drastically reduce overhead, reclaim wasted man-hours, and maximize operational efficiency—transforming your web presence into a cost-saving machine for one flat monthly rate.
                </p>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-2xl font-extrabold text-black">$1,500</span>
                  <span className="text-black/60 text-xs font-semibold">setup</span>
                  <span className="text-black/30">|</span>
                  <span className="text-lg font-bold text-black">$100</span>
                  <span className="text-black/60 text-xs font-semibold">/mo</span>
                </div>
                <Link to="/digital-launchpad" className="flex items-center gap-2 text-sm font-bold text-black hover:text-black/80 transition-colors">
                  See Details <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* ====== 3. CRE Decentralized Backend Consulting ====== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <ChainIcon className="w-7 h-7 text-orange-500" />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-medium tracking-tight mb-3">CRE Backend Consulting</h3>
                <p className="text-orange-400/80 font-semibold text-sm mb-2">
                  Audited Automation That Can't Be Hacked or Silently Broken
                </p>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Replace fragile cloud cron jobs with a Chainlink CRE workflow that runs across a decentralized oracle network. Immutable logs, multi-source truth consensus, zero single-point-of-failure — ideal for high-liability reconciliation, inventory credit guards, and green-energy payout logic.
                </p>
                <Link to="/cre-backend-consulting" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  Secure My Automation <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ====== 4. Local LLM Device ====== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Shield className="w-7 h-7 text-orange-500" />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-medium tracking-tight mb-3">Local LLM Device</h3>
                <p className="text-orange-400/80 font-semibold text-sm mb-2">
                  Private AI for CPAs, Law Firms &amp; Medical Offices
                </p>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  An on-site AI appliance that ingests, analyzes, and answers questions from your sensitive documents — without ever connecting to the internet. Full regulatory compliance (HIPAA, attorney-client privilege), zero data leaks. We demo on a laptop at your office before you spend a dollar.
                </p>
                <Link to="/local-llm-device" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  Request a Free Demo <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
