import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Laptop, Zap, Target, Shield, ArrowRight, CheckCircle2, Phone, Star, ArrowUpRight, MessageSquare } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function DigitalLaunchpad() {
  useSEO(
    'Contractor Digital Launchpad | RVR LLC',
    'Get a high-converting local digital foundation that captures trade leads on autopilot. Built for local trade and small businesses.'
  );

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Roofing',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen bg-[#050505] selection:bg-orange-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center max-w-4xl mx-auto relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <Laptop className="w-4 h-4" />
            Core Digital Foundations
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Stop losing jobs to the competition<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">just because they found them on Google first.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-3xl mx-auto">
            We build your high-converting local digital foundation so you can capture high-intent local trade leads on autopilot. Zero tech complexity. Max close rates.
          </p>

          <a 
            href="#estimate-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-orange-500/10"
          >
            See How It Works <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* The Pain vs The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6">The Old Way (Leads Die Fast)</h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0 mt-1">✕</span>
                  <span><strong>No website or Google ranking</strong>, meaning local homeowners go to competitors they found online first.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0 mt-1">✕</span>
                  <span><strong>Contact forms that go to an unmonitored email inbox</strong>, taking 24 to 48 hours for you to reply.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0 mt-1">✕</span>
                  <span><strong>No review management system</strong>, leaving you with zero stars and lower local authority.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0 mt-1">✕</span>
                  <span><strong>Personal assets exposed</strong> due to lack of a formal baseline business or corporate structuring.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-zinc-500 text-sm">
              Average B2B lead response time is currently <strong className="text-zinc-400">42 hours</strong>.
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-400/10 via-[#141414] to-zinc-800/10 border border-orange-500/20 rounded-[2rem] p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">The Digital Launchpad Way</h3>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Stunning single-page SEO funnel</strong> optimized specifically to convert local traffic.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Instant Lead Routing via SMS</strong> straight to your phone. Win the job before others even reply.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Google Business Profile setup</strong> optimized to rank high where local homeowners search.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Ancillary Business Structuring (Add-on)</strong> including clean corporate folders and EIN registration.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-orange-400 text-sm font-semibold">
              RVR leads trigger SMS routing to your phone in <strong className="text-white">&lt; 1 second</strong>.
            </div>
          </motion.div>
        </div>

        {/* Core Pillars Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Launchpad Pillars</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our 4-part system sets up everything you need to dominate your local trade market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-orange-500/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                <Laptop className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">The High-Intent Funnel</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We build a fast, mobile-optimized, single-page website tailored specifically for contractors and service providers.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <strong>High-converting design</strong> made to turn local visitors into qualified estimators.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <strong>Frictionless "Get an Estimate"</strong> capture form minimizes user drop-offs.
                </li>
              </ul>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-orange-500/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Lead Routing</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Speed wins trade jobs. The second a local customer requests an estimate online, we routing the data directly.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <strong>Direct SMS alert routing</strong> containing phone, name, and trade requirements.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <strong>Win the estimate instantly</strong> while your competitor is still asleep.
                </li>
              </ul>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-orange-500/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local SEO &amp; Authority</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Be the business that homeowners find first. We optimize your local maps presence to claim the top spots.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <strong>Google Business Profile setup</strong> to rank highest in Wayne, Oakland & Genesee map searches.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <strong>Organic local keyword tailoring</strong> targeting high-intent local homeowners.
                </li>
              </ul>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-orange-500/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ancillary Business Setup</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Secure your foundations. We provide add-on operations assistance for new businesses or corporate restructures.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <strong>EIN Acquisition & legal baseline structuring</strong> to establish perfect credibility.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <strong>Clean corporate folder structures</strong> to insulate personal assets completely.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Interactive Estimate Demo */}
        <div className="mb-24 scroll-mt-28" id="estimate-demo">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">See It In Action</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Submit the demo form below to simulate the instant lead routing system. Watch the simulated smartphone on the right display the alert!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 shadow-2xl relative"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-orange-400" /> Request Estimate Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. John Miller" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Cell Phone (For alert mockup)</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. (248) 555-0199" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Service Needed</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors text-white"
                    >
                      <option>Roofing Estimate</option>
                      <option>Deck Construction</option>
                      <option>Fencing Installation</option>
                      <option>Kitchen Remodeling</option>
                      <option>Custom Handyman Solution</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Project Brief Details</label>
                  <textarea 
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    placeholder="Brief description of the job..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-black font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                >
                  {isSubmitting ? 'Submitting Estimate Request...' : 'Submit Lead & Trigger SMS'}
                </button>
              </form>
            </motion.div>

            {/* Simulated Phone Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[320px] h-[580px] bg-zinc-900 rounded-[3rem] p-3 border-4 border-zinc-800 shadow-[0_0_40px_-5px_rgba(249,115,22,0.15)] relative overflow-hidden flex flex-col">
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
                    {/* Simulated Text thread */}
                    <div className="border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-xs text-orange-400 font-bold shrink-0">
                        RVR
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">RVR Instant Lead Router</p>
                        <p className="text-[8px] text-green-400">System Live</p>
                      </div>
                    </div>

                    <div className="space-y-3 max-h-[380px] overflow-y-auto">
                      <div className="bg-zinc-800/60 border border-white/5 text-zinc-400 text-[10px] p-2.5 rounded-xl max-w-[85%] text-left">
                        Hello. This is the RVR lead routing pipeline. Direct customer quote requests will alert this screen within 1 second. Try submitting the estimate form.
                      </div>

                      <AnimatePresence>
                        {formSubmitted && (
                          <motion.div 
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="bg-orange-500 text-black text-[10px] p-3 rounded-xl max-w-[85%] font-medium text-left ml-auto shadow-lg"
                          >
                            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[8px] opacity-75 mb-1.5">
                              <Zap className="w-3 h-3 text-black" /> [!] NEW HIGH-INTENT LEAD
                            </div>
                            <p className="font-bold text-sm mb-1">{formData.service || 'Roofing Estimate'}</p>
                            <div className="space-y-0.5 border-t border-black/10 pt-1 text-[9px]">
                              <p><strong>Name:</strong> {formData.name || 'John Miller'}</p>
                              <p><strong>Cell:</strong> {formData.phone || '(248) 555-0199'}</p>
                              <p><strong>Email:</strong> {formData.email || 'john@example.com'}</p>
                              <p className="italic">"{formData.details || 'Need minor roof repair on colonial roof'}"</p>
                            </div>
                            <div className="mt-2 text-[8px] font-bold text-right text-black/60 uppercase">SMS Alert Routed · &lt; 0.8s</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center text-[10px] text-zinc-500">
                    <MessageSquare className="w-3.5 h-3.5 mr-2 text-zinc-400" />
                    {formSubmitted ? 'Lead routed successfully' : 'Awaiting form submission...'}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Real Michigan Case Studies / Results */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.05),transparent_60%)] pointer-events-none" />
          <Star className="w-12 h-12 text-orange-500 mx-auto mb-6 fill-orange-500 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built For High Conversion</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Trade leads are highly volatile. Homeowners dial 3 or 4 businesses on Google Maps and hire the **first builder who responds**. By routing forms directly to SMS, you lock down the contract before competitors even boot up their laptops.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-3xl font-extrabold text-orange-400 mb-1">5X</p>
              <p className="text-sm font-semibold text-white mb-2">Close Rate Increase</p>
              <p className="text-xs text-zinc-500">Responding in under 5 minutes vs 30 minutes increases local close rates by 500%.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-3xl font-extrabold text-orange-400 mb-1">98%</p>
              <p className="text-sm font-semibold text-white mb-2">Local SEO Mastery</p>
              <p className="text-xs text-zinc-500">Google Business Profiles rank in the top maps three-pack where homeowners look first.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-3xl font-extrabold text-orange-400 mb-1">100%</p>
              <p className="text-sm font-semibold text-white mb-2">Personal Asset Shield</p>
              <p className="text-xs text-zinc-500">Add-on baseline corporate setup ensures your personal assets remain safe.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-extrabold hover:bg-zinc-200 transition-colors shadow-2xl"
          >
            Launch Your Digital Foundation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
