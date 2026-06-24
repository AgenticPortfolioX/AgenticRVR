import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Zap, Settings2, ArrowRight, CheckCircle2, Globe, Timer, Sparkles, Shield, Edit3, TrendingUp, Mail } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Laptop,
    title: 'Fast-Loading, Optimized Template',
    description: 'Built with React or high-end Webflow — your site loads in under a second, looks stunning on every device, and is engineered to convert visitors into leads.',
    highlight: 'Mobile-first, sub-second load times'
  },
  {
    icon: Mail,
    title: 'Contact Form Routing',
    description: 'Every form submission on your site is routed instantly to your email and/or Slack. No delays, no missed opportunities — you\'ll know the moment a lead comes in.',
    highlight: 'Instant email & Slack alerts'
  },
  {
    icon: Globe,
    title: 'Basic Local SEO Setup',
    description: 'We optimize your Google Business Profile and structure your site to rank for local searches in your city and service area. Show up when customers are looking for you.',
    highlight: 'Google Business Profile optimization'
  },
  {
    icon: Shield,
    title: 'Managed Hosting & Security',
    description: 'Your site is hosted on fast, secure infrastructure with SSL, automated backups, and continuous monitoring. We handle the tech — you run your business.',
    highlight: 'SSL, backups & 24/7 monitoring'
  },
  {
    icon: Edit3,
    title: 'Monthly Content Updates',
    description: 'Up to 1 hour of monthly edits included — update photos, change pricing, add services, or tweak copy. Just tell us what you need and we handle it.',
    highlight: 'Up to 1 hour of edits per month'
  }
];

export default function DigitalLaunchpad() {
  useSEO(
    'Website Build & Managed Hosting — Digital Launch Pad | RVR LLC',
    'Professional website build for local businesses. Fast templates, contact form routing, local SEO, managed hosting, and monthly content updates. Starting at $1,500 + $100/mo.'
  );

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
            <Laptop className="w-4 h-4" />
            Website Build &amp; Managed Hosting
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            A professional website for your business.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Starting at $1,500.</span>
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed mb-4 max-w-3xl mx-auto">
            If you don't have a website — or yours is slow, outdated, or not bringing in leads — you are losing customers to competitors every single day. We fix that.
          </p>
          <p className="text-base text-zinc-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            A fast, optimized template, contact forms routed straight to your phone or Slack, local SEO to get found on Google, and managed hosting so you never have to think about it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-bold hover:opacity-90 transition-all shadow-lg"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
            >
              See What's Included
            </a>
          </div>
        </motion.div>


        {/* ==================== SOCIAL PROOF BAR ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 mb-24"
        >
          {[
            { stat: '$1,500', label: 'One-time setup' },
            { stat: '$100', label: 'Per month hosting' },
            { stat: '< 48hrs', label: 'Site goes live' },
            { stat: '100%', label: 'Mobile optimized' },
          ].map((item, i) => (
            <div key={i} className="bg-[#0d0d0d] px-8 py-7 text-center">
              <p className="text-3xl font-extrabold text-orange-400 mb-1">{item.stat}</p>
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>


        {/* ==================== FEATURES SECTION ==================== */}
        <section className="mb-28 scroll-mt-28" id="features">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              What's Included
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Everything You Need to Get Online</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A complete website package — built, deployed, and maintained so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 group hover:border-orange-500/20 transition-all flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shrink-0">
                    <Icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed flex-grow">{feature.description}</p>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-500">
                      <Sparkles className="w-3 h-3" />
                      {feature.highlight}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* ==================== PRICING SECTION ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2.5rem] p-12 md:p-16 text-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 text-xs font-semibold text-black/70 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Simple, Transparent Pricing
              </div>

              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-6xl md:text-7xl font-extrabold tracking-tight">$1,500</span>
                <span className="text-xl font-bold text-black/70">setup</span>
              </div>

              <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-3xl md:text-4xl font-bold">$100</span>
                <span className="text-base font-semibold text-black/70">/month — managed hosting &amp; support</span>
              </div>

              <ul className="max-w-lg mx-auto space-y-3 text-left mb-10">
                {[
                  'Fast-loading, optimized template (React or Webflow)',
                  'Contact form routing to email & Slack',
                  'Local SEO & Google Business Profile setup',
                  'Managed hosting, SSL, backups & security',
                  'Up to 1 hour of monthly content edits',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-black/85">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-black text-white font-extrabold hover:bg-black/90 transition-all shadow-2xl text-lg"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-xs text-black/60 mt-4 font-semibold">No lock-in contracts. You own everything we build.</p>
            </div>
          </div>
        </motion.section>


        {/* ==================== WHY YOU NEED A WEBSITE ==================== */}
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-6">Without a Professional Website</h3>
                <ul className="space-y-5 text-zinc-400">
                  {[
                    ['Invisible on Google', 'Customers search for your service + city and your name never appears. They call your competitor instead.'],
                    ['Zero credibility', 'Before hiring anyone, people check the website. No site = no trust = lost job before you even bid it.'],
                    ['No lead capture', 'Word of mouth slows down. You\'re stuck waiting for referrals instead of having a 24/7 lead generation machine.'],
                    ['Falling behind', 'Your competitor with a basic website is showing up above you. You are losing the battle before it starts.'],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 shrink-0 mt-1 font-bold">✕</span>
                      <span><strong className="text-zinc-200">{title}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 text-zinc-500 text-sm">
                <strong className="text-zinc-400">46%</strong> of small businesses still have no website. Every one of them is giving customers away.
              </div>
            </motion.div>

            {/* The Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-400/10 via-[#141414] to-zinc-900/20 border border-orange-500/20 rounded-[2rem] p-10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-orange-400 mb-6">With the Digital Launch Pad</h3>
                <ul className="space-y-5 text-zinc-300">
                  {[
                    ['Stunning first impression', 'A fast, modern site that looks better than 99% of local competitors — specifically built to convert visitors into customers.'],
                    ['Found on Google', 'Your Google Business Profile is optimized so you show up in local search results where customers are looking.'],
                    ['Leads routed to you instantly', 'Every contact form submission hits your email and Slack immediately. You respond fast. You close the deal.'],
                    ['Zero technical headaches', 'We handle hosting, security, updates, and maintenance. Your site stays fast, secure, and up to date without any effort on your part.'],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span><strong className="text-white">{title}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-orange-500/10 text-orange-400 text-sm font-semibold">
                RVR sites go from zero to live in <strong className="text-white">under 48 hours</strong>.
              </div>
            </motion.div>
          </div>
        </section>


        {/* ==================== STACKABLE AUTOMATIONS ==================== */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-orange-500/10 border border-orange-500/20 text-center flex flex-col items-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Stackable AI Automations</h3>
            <p className="text-zinc-400 mb-8 max-w-2xl">
              Once your site is live, you can add managed AI services — like automated lead response, review generation, crew dispatch, and more — that run 24/7 without any extra lift on your part.
            </p>
            <Link
              to="/managed-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Explore Managed AI Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>


        {/* ==================== CTA ==================== */}
        <div className="text-center pt-6">
          <p className="text-zinc-500 text-sm mb-6">Ready to get online and start winning customers?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-extrabold hover:opacity-90 transition-all shadow-2xl shadow-orange-500/20 text-lg"
          >
            Build My Website <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-zinc-600 mt-4">We'll reach back out within one business day.</p>
        </div>

      </div>
    </div>
  );
}
