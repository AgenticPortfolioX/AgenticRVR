import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, Mail, Phone, Linkedin, Github, Calendar, Twitter, Instagram, Send, Code2, MessageCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function Connect() {
  useSEO('Connect with Justin Gramke', 'Digital Contact Hub for Justin Gramke, Compliance Architect.');

  const [formData, setFormData] = useState({ name: '', email: '', text: '', telegram: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState<'text' | 'telegram' | 'email'>('text');
  const [error, setError] = useState('');

  const handleSaveContact = () => {
    const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:Justin Gramke
NICKNAME:Grams
TITLE:Compliance Architect
TEL;TYPE=CELL:810-240-0069
EMAIL:jmgramke@gmail.com
URL:https://agenticservices.com
END:VCARD`;

    const blob = new Blob([vcfData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Justin_Gramke.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExchangeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (!formData[contactMethod].trim()) {
      setError(`Please enter your ${contactMethod === 'email' ? 'email address' : contactMethod === 'text' ? 'phone number' : 'Telegram handle'}.`);
      return;
    }

    setIsSubmitting(true);
    // In a real app, this would trigger an API call to send the "Nice to meet you" email/text
    setTimeout(() => {
      setFormData({ name: '', email: '', text: '', telegram: '' });
      setSubmitted(true);
      setIsSubmitting(false);
      setContactMethod('text');
      
      // Reset success message after a few seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen bg-[#050505] flex justify-center">
      {/* Mobile-optimized container */}
      <div className="w-full max-w-md">
        
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-center gap-6 md:gap-8 max-w-md mx-auto">
            {/* Main Profile Column */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="relative inline-block mb-4">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-orange-500/50 p-1">
                  <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                      alt="Justin Gramke" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-[#050505] rounded-full"></div>
              </div>
              <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-1">Justin Gramke</h1>
              <p className="text-orange-500 text-sm md:text-base font-medium h-6 flex items-center justify-center">Compliance Architect</p>
            </div>

            {/* Online Persona (Grams) Column */}
            <div className="flex-1 flex flex-col items-center text-center translate-x-4 translate-y-8">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-orange-500/30 p-1">
                  <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden">
                    <img 
                      src="https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wjc54pniMG8qgirj3XKNWKcg4PDq2vw0DVkGjSQ_qA1fPgcZsyclGqlcaCbShz-sOAEjl5CbZOA?auto=format&w=400" 
                      alt="Grams" 
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-lg md:text-xl font-medium tracking-tight mb-1">Grams</h2>
              <p className="text-orange-500 text-[10px] md:text-xs font-medium uppercase tracking-wider h-6 flex items-center justify-center">Pudgy Penguin #4860</p>
            </div>
          </div>
          
          <p className="text-zinc-400 text-sm leading-relaxed px-4 mt-16 text-center">
            Bridging the gap between decentralized agentic systems and institutional compliance frameworks.
          </p>
        </motion.div>

        {/* Primary Action: Save to Contacts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <button 
            onClick={handleSaveContact}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(255,107,0,0.2)]"
          >
            <UserPlus className="w-5 h-5" />
            Save to Contacts
          </button>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3 mb-8"
        >
          <a href="mailto:jmgramke@gmail.com" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors">
            <Mail className="w-6 h-6 text-zinc-300" />
            <span className="text-xs font-medium text-zinc-300">Email</span>
          </a>
          <a href="tel:+18102400069" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors">
            <Phone className="w-6 h-6 text-zinc-300" />
            <span className="text-xs font-medium text-zinc-300">Call</span>
          </a>
          <a href="sms:+18102400069" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors">
            <MessageCircle className="w-6 h-6 text-zinc-300" />
            <span className="text-xs font-medium text-zinc-300">Text</span>
          </a>
          <a href="https://t.me/jmgramke" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors">
            <Send className="w-6 h-6 text-zinc-300" />
            <span className="text-xs font-medium text-zinc-300">Telegram</span>
          </a>
          <a href="https://www.linkedin.com/in/justin-gramke-292aa1a1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors">
            <Linkedin className="w-6 h-6 text-zinc-300" />
            <span className="text-xs font-medium text-zinc-300">LinkedIn</span>
          </a>
          <a href="https://github.com/bloodsport121/Chainlink-CRE-Agentic-Compliance-Bridge" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors text-center">
            <Code2 className="w-6 h-6 text-zinc-300" />
            <span className="text-xs font-medium text-zinc-300">Portfolio</span>
          </a>
        </motion.div>

        {/* Book a Meeting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <a 
            href="#" 
            className="w-full p-4 rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                <Calendar className="w-5 h-5 text-zinc-300 group-hover:text-orange-500 transition-colors" />
              </div>
              <div className="text-left">
                <div className="font-medium text-white">Book a Meeting</div>
                <div className="text-xs text-zinc-500">Schedule time on my calendar</div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
              <span className="text-zinc-500 group-hover:text-white transition-colors">→</span>
            </div>
          </a>
        </motion.div>

        {/* Exchange Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#141414] border border-white/5 rounded-2xl p-6 mb-8"
        >
          <h3 className="text-lg font-medium mb-2">Exchange Contact Info</h3>
          <p className="text-sm text-zinc-400 mb-4">Drop your details and I'll send you a quick "Nice to meet you" message.</p>
          
          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center text-green-400 text-sm font-medium">
              Thanks! I'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleExchangeSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your Name" 
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
              />

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setContactMethod('text')}
                  aria-pressed={contactMethod === 'text'}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
                    contactMethod === 'text' 
                      ? 'bg-orange-500/10 border-orange-500/50 text-orange-500' 
                      : 'bg-[#0a0a0a] border-white/10 text-zinc-400 hover:border-white/30 hover:text-zinc-300'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" /> Text
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('telegram')}
                  aria-pressed={contactMethod === 'telegram'}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
                    contactMethod === 'telegram' 
                      ? 'bg-orange-500/10 border-orange-500/50 text-orange-500' 
                      : 'bg-[#0a0a0a] border-white/10 text-zinc-400 hover:border-white/30 hover:text-zinc-300'
                  }`}
                >
                  <Send className="w-4 h-4" /> Telegram
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('email')}
                  aria-pressed={contactMethod === 'email'}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
                    contactMethod === 'email' 
                      ? 'bg-orange-500/10 border-orange-500/50 text-orange-500' 
                      : 'bg-[#0a0a0a] border-white/10 text-zinc-400 hover:border-white/30 hover:text-zinc-300'
                  }`}
                >
                  <Mail className="w-4 h-4" /> Email
                </button>
              </div>

              <div className="space-y-1">
                {contactMethod === 'text' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <input 
                      type="tel" 
                      value={formData.text}
                      onChange={(e) => setFormData({...formData, text: e.target.value})}
                      placeholder="Phone number (e.g., +1234567890)" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <p className="text-xs text-zinc-500 px-1 mt-2">We'll text you.</p>
                  </motion.div>
                )}
                {contactMethod === 'telegram' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <input 
                      type="text" 
                      value={formData.telegram}
                      onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                      placeholder="Telegram handle (e.g., @username)" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <p className="text-xs text-zinc-500 px-1 mt-2">We'll message you on Telegram.</p>
                  </motion.div>
                )}
                {contactMethod === 'email' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Email address (e.g., name@example.com)" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <p className="text-xs text-zinc-500 px-1 mt-2">We'll email you.</p>
                  </motion.div>
                )}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-white text-black text-sm font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Details <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 pb-8"
        >
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://github.com/bloodsport121" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
