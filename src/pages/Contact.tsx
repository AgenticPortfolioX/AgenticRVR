import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function Contact() {
  useSEO('Contact Us', 'Get in touch with Renowed Value Restoration LLC for AI workflows, video marketing, and sovereign hardware nodes.');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const response = await fetch('https://formspree.io/f/valuerestoration@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
          >
            Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">future</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Ready to automate your workflows, elevate your marketing, or secure your sovereign node? We're here to help.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-medium mb-8">Contact Information</h2>
            
            <a href="mailto:valuerestoration@gmail.com" className="flex items-center gap-6 p-6 rounded-3xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-orange-500" />
              </div>
              <div>
                <div className="text-sm text-zinc-500 mb-1">Email Us</div>
                <div className="text-xl font-medium text-white">valuerestoration@gmail.com</div>
              </div>
            </a>

            <a href="tel:2483138955" className="flex items-center gap-6 p-6 rounded-3xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-orange-500" />
              </div>
              <div>
                <div className="text-sm text-zinc-500 mb-1">Call Us</div>
                <div className="text-xl font-medium text-white">(248) 313-8955</div>
              </div>
            </a>

            <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#141414] border border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-zinc-400" />
              </div>
              <div>
                <div className="text-sm text-zinc-500 mb-1">Location</div>
                <div className="text-xl font-medium text-white">Oakland County Michigan, Wayne County & Metro Detroit</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#141414] rounded-[2rem] p-8 md:p-10 border border-white/5"
          >
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm text-zinc-400">First Name</label>
                  <input id="firstName" name="firstName" required type="text" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm text-zinc-400">Last Name</label>
                  <input id="lastName" name="lastName" required type="text" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-zinc-400">Email</label>
                <input id="email" name="email" required type="email" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-zinc-400">Phone Number</label>
                <input id="phone" name="phone" type="tel" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-zinc-400">Message</label>
                <textarea id="message" name="message" required rows={4} disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none disabled:opacity-50" placeholder="How can we help you?"></textarea>
              </div>
              

              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-sm">Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm">Something went wrong. Please try again later.</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-black rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>


      </div>
    </div>
  );
}
