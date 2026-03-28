import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, MessageSquare, Smartphone, Info, Lock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function OptInStory() {
  useSEO('SMS Opt-In Information | Renowed Value Restoration LLC', 'Details on how to opt-in to our messaging service and mandatory legal disclosures.');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <ShieldCheck className="w-4 h-4" />
            Compliance Verified
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Stay Connected <span className="text-orange-500">via Text</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            To opt-in to our messaging service, please text <span className="text-white font-bold">START</span> to <span className="text-white font-bold">+18444916828</span> from your mobile device.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Section 1: Detailed Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Info className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-medium">Mandatory Disclosure</h2>
            </div>
            <div className="space-y-6">
              <p className="text-zinc-300 leading-relaxed">
                By texting START to +18444916828, you consent to receive recurring automated text messages from Renowed Value Restoration LLC regarding service updates and scheduling. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Reply STOP to cancel, HELP for help.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Privacy Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-medium text-white">Privacy Assurance</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed italic">
              "Your mobile information will not be shared with third parties for marketing or promotional purposes."
            </p>
          </motion.div>

          {/* Section 3: Policies Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <p className="text-zinc-500 text-sm mb-4">
              Detailed terms regarding our messaging program can be found in our:
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link to="/terms" className="text-orange-500 hover:text-orange-400 font-medium underline underline-offset-4 decoration-orange-500/20">Terms & Conditions</Link>
              <Link to="/privacy" className="text-orange-500 hover:text-orange-400 font-medium underline underline-offset-4 decoration-orange-500/20">Privacy Policy</Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
