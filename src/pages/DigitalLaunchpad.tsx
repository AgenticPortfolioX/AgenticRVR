import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Laptop, Zap, Settings2, ArrowRight, CheckCircle2, MessageSquare, Star, ArrowUpRight, Globe, Phone, RefreshCw, TrendingUp, MousePointerClick, Sparkles } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function DigitalLaunchpad() {
  useSEO(
    'Digital Launchpad — Websites for Contractors & Trade Businesses | RVR LLC',
    'Your blue collar business deserves a website that works as hard as you do. We build stunning, high-converting sites for contractors, trades, and service businesses — plus the funnel and backend automations to turn visitors into booked jobs.'
  );

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Roofing Estimate',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activePillar, setActivePillar] = useState<1 | 2 | 3>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };

  const pillars = {
    1: {
      label: 'The Front-End Asset',
      sublabel: 'The Website',
      icon: Globe,
      tagline: 'Your 24/7 silent salesman.',
      description: 'Most blue collar businesses are invisible online. We change that with a fast, stunning, mobile-first website engineered specifically to make visitors call, click, and book — not bounce.',
      bullets: [
        { strong: 'Built for Trades', text: 'Designed for roofers, fencers, HVAC, plumbers, landscapers, painters, and every contractor in between.' },
        { strong: 'Mobile-First', text: 'Over 80% of homeowners search for local contractors on their phones. Your site loads fast and looks sharp on every device.' },
        { strong: 'Local SEO Foundation', text: 'Structured to rank on Google for your city + service searches right out of the gate.' },
        { strong: '"Get A Quote" Optimized', text: 'Every element of the page pushes the visitor toward one action: requesting an estimate from you.' },
      ]
    },
    2: {
      label: 'The Conversion Layer',
      sublabel: 'The Funnel',
      icon: MousePointerClick,
      tagline: 'Turn clicks into booked jobs.',
      description: 'A beautiful website means nothing if leads fall through the cracks. We wire in the automated lead capture and instant routing so every visitor who expresses interest becomes a real, live opportunity.',
      bullets: [
        { strong: 'Instant SMS Lead Routing', text: 'The moment someone fills out your quote form, you get a text. No email delays. No missed leads. Win the job before the next guy even checks his inbox.' },
        { strong: 'Google Business Profile Setup', text: 'We optimize your Maps listing to appear in the local 3-pack where homeowners make their first decision.' },
        { strong: 'Review Generation Trigger', text: 'When a job is marked paid, an automated text fires to the client requesting a 5-star Google review — building your authority on autopilot.' },
        { strong: 'Speed-to-Lead Advantage', text: 'Research shows responding within 5 minutes increases close rates by 5x vs. responding in 30 minutes.' },
      ]
    },
    3: {
      label: 'The Backend',
      sublabel: 'The Efficiencies',
      icon: Settings2,
      tagline: 'Automate the admin. Focus on the work.',
      description: 'Once your site is live and leads are flowing, we layer in the operational backbone that eliminates the paperwork grind — so you can run a bigger business with the same size team.',
      bullets: [
        { strong: 'Estimate-to-Project Automation', text: 'An approved field estimate automatically creates a project task in your system — no manual re-entry.' },
        { strong: 'Automated Crew Dispatch', text: 'The night before every job, each crew member gets a text with the address, gate code, client notes, and scope of work.' },
        { strong: 'Invoice Sync', text: 'Field data syncs directly with your accounting software so your books close themselves.' },
        { strong: 'Reputation Monitoring', text: 'We track your Google rating and competitors\' activity so you always know where you stand.' },
      ]
    }
  };

  const active = pillars[activePillar];
  const ActiveIcon = active.icon;

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
            Built For Blue Collar Business Owners
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Your business does great work.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Your website should prove it.</span>
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed mb-4 max-w-3xl mx-auto">
            If you don't have a website — or you have one that looks like it was built in 2009 — you are losing jobs to less-skilled competitors every single day. We fix that.
          </p>
          <p className="text-base text-zinc-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            The Digital Launchpad is a complete 3-part system: a stunning website that converts, a funnel that routes every lead straight to your phone, and backend automations that remove the admin drag.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pillars"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-bold hover:opacity-90 transition-all shadow-lg"
            >
              See How It Works <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Try The Live Demo
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
            { stat: '< 48hrs', label: 'Site goes live' },
            { stat: '5x', label: 'Close rate boost' },
            { stat: '< 1s', label: 'Lead SMS delivery' },
            { stat: '100%', label: 'Mobile optimized' },
          ].map((item, i) => (
            <div key={i} className="bg-[#0d0d0d] px-8 py-7 text-center">
              <p className="text-3xl font-extrabold text-orange-400 mb-1">{item.stat}</p>
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>


        {/* ==================== 3-PILLAR INTERACTIVE SECTION ==================== */}
        <section className="mb-28 scroll-mt-28" id="pillars">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              The System
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">One Package. Three Pillars.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Every blue collar business needs all three layers working together. We build and deploy all of it.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10">
            {([1, 2, 3] as const).map((n) => {
              const p = pillars[n];
              const Icon = p.icon;
              return (
                <button
                  key={n}
                  onClick={() => setActivePillar(n)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 border ${
                    activePillar === n
                      ? 'bg-orange-500 text-black border-orange-500 shadow-lg shadow-orange-500/20'
                      : 'bg-[#141414] text-zinc-400 border-white/5 hover:border-orange-500/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>
                    <span className={`block text-[10px] uppercase tracking-wider font-bold ${activePillar === n ? 'text-black/60' : 'text-zinc-600'}`}>Pillar {n}</span>
                    {p.sublabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Pillar Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left: Description */}
              <div className="lg:col-span-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] p-10 text-black flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center mb-6">
                    <ActiveIcon className="w-7 h-7 text-black" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-2">{active.label}</p>
                  <h3 className="text-3xl font-extrabold tracking-tight mb-2">{active.sublabel}</h3>
                  <p className="text-base font-bold text-black/80 mb-4 italic">"{active.tagline}"</p>
                  <p className="text-sm text-black/80 leading-relaxed">{active.description}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-black/10 text-xs font-bold text-black/60 uppercase tracking-wider">
                  Pillar {activePillar} of 3
                </div>
              </div>

              {/* Right: Bullets */}
              <div className="lg:col-span-7 bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-center">
                <h4 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-8">What's Included</h4>
                <div className="space-y-6">
                  {active.bullets.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-bold text-sm">{b.strong}: </span>
                        <span className="text-zinc-400 text-sm leading-relaxed">{b.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {activePillar < 3 ? (
                  <button
                    onClick={() => setActivePillar((activePillar + 1) as 1 | 2 | 3)}
                    className="mt-10 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-zinc-400 hover:text-white hover:border-orange-500/30 transition-all"
                  >
                    Next: Pillar {activePillar + 1} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href="#demo"
                    className="mt-10 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm font-semibold text-orange-400 hover:bg-orange-500/20 transition-all"
                  >
                    See It In Action <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>


        {/* ==================== WHY YOUR WEBSITE IS THE FOUNDATION ==================== */}
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
                <h3 className="text-2xl font-bold text-red-400 mb-6">If You Have No Website (Or A Bad One)</h3>
                <ul className="space-y-5 text-zinc-400">
                  {[
                    ['Invisible on Google', 'Homeowners search "roofing company near me" and your name never appears — they call someone else.'],
                    ['Zero credibility check', 'Before calling anyone, people Google the business. No website = no trust = lost job before you even bid it.'],
                    ['No lead capture', 'Word of mouth slows, referrals dry up, and you\'re stuck waiting for the phone to ring.'],
                    ['Chasing competitors', 'Your competitor with a basic $500 template site is showing up above you. You are outbid before it starts.'],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 shrink-0 mt-1 font-bold">✕</span>
                      <span><strong className="text-zinc-200">{title}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 text-zinc-500 text-sm">
                <strong className="text-zinc-400">46%</strong> of small businesses still have no website. Every one of them is giving jobs away.
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
                <h3 className="text-2xl font-bold text-orange-400 mb-6">With The Digital Launchpad</h3>
                <ul className="space-y-5 text-zinc-300">
                  {[
                    ['Stunning first impression', 'A site that looks better than 99% of local competitors — and is specifically built to make visitors request a quote.'],
                    ['Google Maps presence', 'Your Google Business Profile is set up and optimized so you rank in the local three-pack where jobs are won.'],
                    ['Leads straight to your phone', 'Every form submission triggers an instant SMS to your cell. You respond first. You win the job.'],
                    ['Automated reputation growth', 'Happy customers are automatically asked for reviews. Your star rating climbs without you lifting a finger.'],
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


        {/* ==================== LIVE DEMO (The Funnel in Action) ==================== */}
        <section className="mb-28 scroll-mt-28" id="demo">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              Live Demo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Funnel, Live.</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Submit the form below and watch the instant SMS routing fire to the simulated phone on the right — exactly how it works for real clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">Your Website</p>
                  <h3 className="text-lg font-bold">Request a Free Estimate</h3>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mike Hoffman"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(248) 555-0182"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors text-white"
                      >
                        <option>Roofing Estimate</option>
                        <option>Fencing Installation</option>
                        <option>Deck Construction</option>
                        <option>HVAC Service</option>
                        <option>Landscaping / Lawn</option>
                        <option>Plumbing Repair</option>
                        <option>Interior Painting</option>
                        <option>General Contracting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Brief Description</label>
                      <textarea
                        rows={2}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="A few lines about the job..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-black font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <><RefreshCw className="w-4 h-4 animate-spin" /> Routing Lead...</>
                      ) : (
                        <>Submit & Trigger SMS Alert <Zap className="w-4 h-4" /></>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Lead Routed!</h4>
                    <p className="text-zinc-400 text-sm">Check the phone on the right. That SMS just hit in under 1 second.</p>
                    <button
                      onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', service: 'Roofing Estimate', details: '' }); }}
                      className="mt-6 text-xs text-orange-400 hover:text-orange-300 underline"
                    >
                      Reset Demo
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[300px] h-[580px] bg-zinc-900 rounded-[3rem] p-3 border-4 border-zinc-800 shadow-[0_0_60px_-10px_rgba(249,115,22,0.2)] relative overflow-hidden flex flex-col">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20" />

                <div className="flex-1 bg-[#0c0c0e] rounded-[2.5rem] p-4 pt-10 flex flex-col justify-between overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-zinc-500 px-2 mb-3 font-mono">
                    <span>9:41 AM</span>
                    <div className="flex items-center gap-1">
                      <span>5G</span>
                      <span className="w-4 h-2 bg-zinc-500 rounded-sm" />
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col">
                    {/* Thread Header */}
                    <div className="border-b border-white/5 pb-3 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-xs text-orange-400 font-black shrink-0">
                        R
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">RVR Lead Router</p>
                        <p className="text-[8px] text-green-400 font-semibold">System Active • 24/7</p>
                      </div>
                    </div>

                    <div className="space-y-3 flex-grow">
                      <div className="bg-zinc-800/60 border border-white/5 text-zinc-400 text-[10px] p-2.5 rounded-xl max-w-[85%]">
                        Standing by. New quote requests from your site will appear here instantly.
                      </div>

                      <AnimatePresence>
                        {formSubmitted && (
                          <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="bg-orange-500 text-black text-[10px] p-3.5 rounded-xl max-w-[92%] ml-auto shadow-xl"
                          >
                            <div className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[8px] opacity-70 mb-2">
                              <Zap className="w-3 h-3" /> [!] NEW LEAD INCOMING
                            </div>
                            <p className="font-extrabold text-[13px] mb-1.5">{formData.service || 'Roofing Estimate'}</p>
                            <div className="space-y-1 border-t border-black/10 pt-1.5 text-[9px] font-semibold leading-relaxed">
                              <p><strong>Name:</strong> {formData.name || 'Mike Hoffman'}</p>
                              <p><strong>Cell:</strong> {formData.phone || '(248) 555-0182'}</p>
                              {formData.details && <p className="italic">"{formData.details}"</p>}
                            </div>
                            <div className="mt-2 text-[8px] font-bold text-black/50 uppercase text-right">SMS Delivered · &lt;0.8s</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2 text-[10px] text-zinc-500 mt-3">
                    <MessageSquare className="w-3 h-3 shrink-0" />
                    <span>{formSubmitted ? 'Lead routed. Awaiting next inquiry.' : 'Awaiting form submission...'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ==================== RESULTS / METRICS ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />

          <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Numbers Don't Lie</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Speed and presence are everything in local trades. The Digital Launchpad is engineered around the exact statistics that separate the contractors who feast from the ones who scramble.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left mb-12">
            {[
              { stat: '5x', label: 'Close Rate Increase', desc: 'Responding to a lead within 5 minutes vs. 30 minutes increases your chances of closing by 500%.' },
              { stat: '78%', label: 'Search on Mobile', desc: 'Of local service searches happen on mobile phones. Your site is pixel-perfect on every screen.' },
              { stat: '#1', label: 'Trust Signal', desc: 'A professional website is the #1 factor homeowners cite when choosing a local contractor over a referral.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="text-4xl font-extrabold text-orange-400 mb-1">{item.stat}</p>
                <p className="text-sm font-bold text-white mb-2">{item.label}</p>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 border-t border-white/5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-sm text-zinc-400 font-semibold">No tech knowledge needed on your end</span>
            <span className="hidden sm:block text-zinc-600">•</span>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-sm text-zinc-400 font-semibold">You own everything we build</span>
            <span className="hidden sm:block text-zinc-600">•</span>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-sm text-zinc-400 font-semibold">Flat monthly hosting & support available</span>
          </div>
        </motion.section>


        {/* ==================== ADD-ON MODULES ==================== */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              High-Margin Add-Ons
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Automated Agent Modules</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Supercharge your Digital Launch Pad with battle-tested AI agents that run 24/7 without any extra lift on your part.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Module 1: Speed 2 Lead */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between group hover:border-orange-500/25 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shrink-0">
                  <Zap className="w-7 h-7 text-orange-400" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
                  Add-On Module 01
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">Speed 2 Lead</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Instant lead capture, auto-SMS to owner, and 24-hour booking nudges. The moment someone submits a form, your phone lights up and an automated follow-up sequence begins — qualifying the lead before your competitor even checks their email.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Sub-1-second SMS delivery to owner',
                    'Automated 24h follow-up nudge sequence',
                    'Lead qualification without manual effort',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/speed-to-lead"
                className="relative z-10 self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all"
              >
                Learn More <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Module 2: Review Response Agent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between group hover:border-orange-500/25 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shrink-0">
                  <Sparkles className="w-7 h-7 text-orange-400" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
                  Add-On Module 02
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">Review Response Agent</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Automated Google Review requests triggered 24 hours after a job completes, with a monitoring dashboard. Your star rating climbs on autopilot — no manual follow-up, no awkward ask, just a steady stream of 5-star credibility.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Auto-triggered 24h post-job review request',
                    'Google Business Profile reputation monitoring',
                    'Dashboard showing rating trends & competitor activity',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/replies"
                className="relative z-10 self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all"
              >
                Learn More <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>


        {/* ==================== CTA ==================== */}
        <div className="text-center pt-6">
          <p className="text-zinc-500 text-sm mb-6">Ready to stop being invisible online?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-extrabold hover:opacity-90 transition-all shadow-2xl shadow-orange-500/20 text-lg"
          >
            Launch My Digital Presence <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-zinc-600 mt-4">We'll reach back out within one business day.</p>
        </div>

      </div>
    </div>
  );
}
