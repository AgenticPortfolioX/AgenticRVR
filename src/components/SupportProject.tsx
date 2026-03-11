import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function SupportProject() {
  const [copiedMe, setCopiedMe] = useState(false);
  const [copiedHermes, setCopiedHermes] = useState(false);

  const handleCopy = (text: string, type: 'me' | 'hermes') => {
    navigator.clipboard.writeText(text);
    if (type === 'me') {
      setCopiedMe(true);
      setTimeout(() => setCopiedMe(false), 2000);
    } else {
      setCopiedHermes(true);
      setTimeout(() => setCopiedHermes(false), 2000);
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-6">Support the Project</h2>
          <p className="text-zinc-400 mb-8">
            Help us continue building by supporting with Lightning Address or Agent Zap.
          </p>

          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
              <div className="text-left">
                <div className="text-sm text-zinc-400 mb-1">Lightning Address:</div>
                <div className="font-mono text-orange-400">me@agenticportfoliox.github.io</div>
              </div>
              <button
                onClick={() => handleCopy('me@agenticportfoliox.github.io', 'me')}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-zinc-300"
                title="Copy to Clipboard"
              >
                {copiedMe ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
              <div className="text-left">
                <div className="text-sm text-zinc-400 mb-1">Agent Zap:</div>
                <div className="font-mono text-orange-400">hermes@agenticportfoliox.github.io</div>
              </div>
              <button
                onClick={() => handleCopy('hermes@agenticportfoliox.github.io', 'hermes')}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-zinc-300"
                title="Copy to Clipboard"
              >
                {copiedHermes ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
