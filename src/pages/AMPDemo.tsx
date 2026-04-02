import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Database } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

import AMPDemoLive from './AMPDemoLive';
import AMPDemoSimulated from './AMPDemoSimulated';

export default function AMPDemo() {
  useSEO(
    'AMP Mission Control | Photo Authentication — Deepfake Slayer',
    'Experience the Authenticated Media Protocol (AMP). Toggle between our 6-phase off-chain simulation and our 4-phase live blockchain mission control.',
  );

  const [mode, setMode] = useState<'simulated' | 'live'>('simulated');

  return (
    <div className="relative min-h-screen bg-[#050505]">
      {/* ── Fixed Toggle Interface at the top ── */}
      <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-[280px] px-4">
        <div className="relative p-1 bg-[#111] border border-white/10 rounded-full flex items-center shadow-2xl backdrop-blur-md">
          {/* Sliding Pill Background */}
          <motion.div
            className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white/10 border border-white/5 rounded-full"
            initial={false}
            animate={{ left: mode === 'simulated' ? '4px' : 'calc(50%)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          
          <button
            onClick={() => setMode('simulated')}
            className={`relative flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold transition-colors ${
              mode === 'simulated' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            Off-Chain
          </button>
          
          <button
            onClick={() => setMode('live')}
            className={`relative flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold transition-colors ${
              mode === 'live' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            On-Chain
          </button>
        </div>
      </div>

      {/* ── Content Render ── */}
      <AnimatePresence mode="wait">
        {mode === 'simulated' ? (
          <motion.div
            key="simulated"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <AMPDemoSimulated />
          </motion.div>
        ) : (
          <motion.div
            key="live"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <AMPDemoLive />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
