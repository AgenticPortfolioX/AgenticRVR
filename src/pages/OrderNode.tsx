import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Server, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function OrderNode() {
  useSEO('Order Node | RVR LLC', 'Order your Restoration Bitcoin Node.');
  const [searchParams] = useSearchParams();
  const initialModel = searchParams.get('model') === 'pro' ? 'pro' : 'base';

  const [model, setModel] = useState<'base' | 'pro'>(initialModel);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const modelParam = searchParams.get('model');
    if (modelParam === 'pro' || modelParam === 'base') {
      setModel(modelParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-sm text-orange-400 mb-6"
          >
            <Server className="w-4 h-4" />
            Order Hardware
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
          >
            Order Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Agentic Bitcoin Node</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Select your model and provide your shipping details to get started.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#141414] rounded-[2rem] p-8 md:p-10 border border-white/5"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Model Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Select Model</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className={`relative flex flex-col p-6 rounded-2xl border cursor-pointer transition-colors ${model === 'base' ? 'border-orange-500 bg-orange-500/5' : 'border-white/10 bg-[#0a0a0a] hover:border-white/20'}`}>
                  <input type="radio" name="model" value="base" checked={model === 'base'} onChange={() => setModel('base')} className="sr-only" />
                  <span className="text-lg font-medium mb-1">Base Node</span>
                  <span className="text-2xl font-medium text-white mb-2">$1,400</span>
                  <span className="text-sm text-zinc-400">8GB RAM, 2TB NVMe SSD, Base AI Agent Manager</span>
                  {model === 'base' && (
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-black" />
                    </div>
                  )}
                </label>
                <label className={`relative flex flex-col p-6 rounded-2xl border cursor-pointer transition-colors ${model === 'pro' ? 'border-orange-500 bg-orange-500/5' : 'border-white/10 bg-[#0a0a0a] hover:border-white/20'}`}>
                  <input type="radio" name="model" value="pro" checked={model === 'pro'} onChange={() => setModel('pro')} className="sr-only" />
                  <span className="text-lg font-medium mb-1">Pro Node</span>
                  <span className="text-2xl font-medium text-orange-500 mb-2">$1,900</span>
                  <span className="text-sm text-zinc-400">16GB RAM, 2TB NVMe SSD, Trading & Execution Bots</span>
                  {model === 'pro' && (
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-black" />
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Shipping Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm text-zinc-400">First Name</label>
                  <input id="firstName" required type="text" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm text-zinc-400">Last Name</label>
                  <input id="lastName" required type="text" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-zinc-400">Email</label>
                <input id="email" required type="email" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm text-zinc-400">Shipping Address</label>
                <input id="address" required type="text" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="123 Main St" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm text-zinc-400">City</label>
                  <input id="city" required type="text" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="Detroit" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="zip" className="text-sm text-zinc-400">ZIP / Postal Code</label>
                  <input id="zip" required type="text" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="48201" />
                </div>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <p className="text-sm">Order request received! We'll contact you shortly for payment details.</p>
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
                  <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  Submit Order Request <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
