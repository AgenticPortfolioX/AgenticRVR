import React from 'react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import {
  Users,
  Zap,
  Star,
  FileText,
  CreditCard,
  Eye,
  BarChart,
  UserPlus,
  Headset,
  CheckSquare,
  ArrowRight,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const coreServices = [
  {
    icon: Users,
    name: 'Automated Crew Dispatch / Team Coordination',
    price: '$500–$700',
    description: 'A nightly automated system that pulls the next day\'s schedule and sends personalized SMS or voice alerts to each crew member with job details, gate codes, and scope of work.',
    idealFor: 'Trades, landscaping, cleaning, HVAC, pest control'
  },
  {
    icon: Zap,
    name: 'Speed-to-Lead / Instant Qualification',
    price: '$600–$800',
    description: 'When a new lead submits a quote request, a Claude agent calls or texts back within minutes to qualify the budget, answer FAQs, and book the appointment directly into your calendar.',
    idealFor: 'Contractors, roofers, lawyers, medical offices, home services'
  },
  {
    icon: Star,
    name: 'Automated Review & Reputation Engine',
    price: '$400–$500',
    description: 'When a job is marked "Paid", an agent generates a personalized review request referencing specific job details. It tracks responses and sends gentle follow-ups automatically.',
    idealFor: 'Local service businesses dependent on Google reviews'
  },
  {
    icon: FileText,
    name: 'Document & Onboarding Processor',
    price: '$550–$750',
    description: 'Clients submit documents and an agent extracts key data, organizes it in your CRM/Drive, sends reminders for missing items, creates profiles, and notifies the team.',
    idealFor: 'Property management, insurance, contractors, legal, medical'
  },
  {
    icon: CreditCard,
    name: 'Invoice & Payment Follow-Up',
    price: '$450–$650',
    description: 'Auto-generates and sends invoices from job data, tracking them in QuickBooks/Xero. Claude sends polite, personalized reminders and escalations for late payments.',
    idealFor: 'Any business that invoices for services'
  },
  {
    icon: Eye,
    name: 'Competitive Intel Agent',
    price: '$500–$700',
    description: 'Monitors 3-5 competitors daily across multiple signals (pricing, website changes, hiring, social) and compiles a clean morning executive brief delivered to your inbox.',
    idealFor: 'Business owners and executives seeking strategic positioning'
  },
  {
    icon: BarChart,
    name: 'Report Generator / Executive Summary',
    price: '$450–$600',
    description: 'Pulls data from scheduling, accounting, and CRM tools to produce a weekly executive summary covering jobs completed, revenue trends, bottlenecks, and recommendations.',
    idealFor: 'Owners needing visibility without the manual overhead'
  }
];

const stackableAddons = [
  {
    icon: UserPlus,
    name: 'Client Onboarding Agent',
    price: 'Add-on',
    description: 'After a sale is closed, an agent takes over the welcome process—sending a personalized message, walking the client through expectations, and collecting remaining info.',
    idealFor: 'Attach after a sale is closed on any core service'
  },
  {
    icon: Headset,
    name: 'Customer Support Triage Agent',
    price: '+$200–$400',
    description: 'A first-line support agent that handles common inbound requests via chat/SMS. Answers FAQs, resolves simple issues, and escalates complex cases to a human.',
    idealFor: 'Businesses with regular inbound support questions'
  },
  {
    icon: CheckSquare,
    name: 'Project Management Task Picker',
    price: 'Add-on',
    description: 'An agent connected to Asana/Linear that picks up tasks from a queue, reads requirements, drafts initial work, marks progress, and hands off for human review.',
    idealFor: 'Clients using PM tools with standardized, repeatable tasks'
  }
];

export default function ManagedServices() {
  useSEO(
    'Managed AI Services Catalog | AgenticRVR',
    'Explore our catalog of 10 stackable managed AI services designed to support your core operations.'
  );

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen bg-[#050505] selection:bg-orange-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center max-w-4xl mx-auto relative pt-8"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <Layers className="w-4 h-4" />
            Stackable Backend Automations
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Managed AI Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Catalog</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-3xl mx-auto">
            These 10 ancillary services are designed to be stacked seamlessly onto our core Automation Consultation or Digital Launch Pad builds. We build, host, and maintain them for a flat monthly fee.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/automation-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Back to Automation Consultation
            </Link>
          </div>
        </motion.div>

        {/* CORE SERVICES */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">7 Core Managed Services</h2>
            <p className="text-zinc-400 max-w-2xl">High-impact, standalone automated workflows that replace significant manual administrative drag.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-orange-500/20 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <span className="text-xs font-mono font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                        {service.price}/mo
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 mb-1">Ideal For</p>
                    <p className="text-xs text-zinc-300 font-medium">{service.idealFor}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* STACKABLE ADD-ONS */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">3 Stackable Add-Ons</h2>
            <p className="text-zinc-400 max-w-2xl">These attach to any of the core services above. They add functionality but aren't typically sold standalone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stackableAddons.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-b from-[#1a1a1a] to-[#141414] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-white/10 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-zinc-300" />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {addon.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{addon.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">{addon.description}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 mb-1">When To Attach</p>
                    <p className="text-xs text-zinc-300 font-medium">{addon.idealFor}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center bg-orange-500/10 border border-orange-500/20 rounded-[2rem] p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to stack these onto your operations?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            These services are deployed seamlessly behind your main infrastructure. To get started, we recommend scheduling an Operational Audit.
          </p>
          <Link 
            to="/automation-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-black font-bold hover:bg-orange-400 transition-colors shadow-lg"
          >
            Schedule Operational Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
