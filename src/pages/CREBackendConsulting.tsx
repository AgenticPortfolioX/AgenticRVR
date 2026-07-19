import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Link as ChainIcon,
  Shield,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Server,
  Lock,
  GitBranch,
  Zap,
  BarChart3,
  PhoneCall,
  FileText,
  Activity,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import { CRE_WORKFLOWS, type CREWorkflow } from '../data/cre-workflows';
import ArchitectureFlow from '../components/ArchitectureFlow';

export default function CREBackendConsulting() {
  useSEO(
    'CRE Decentralized Backend Consulting | RVR LLC',
    'Replace fragile cloud cron jobs with Chainlink CRE workflows that run across a decentralized oracle network. Immutable logs, multi-source consensus, zero single-point-of-failure for high-liability business logic.'
  );


  const battleRows = [
    {
      aspect: 'Execution Point',
      traditional: 'Centralized virtual server (single cloud VM)',
      cre: 'Decentralized Oracle Network (WASM runtime)',
      icon: Server,
    },
    {
      aspect: 'Security Risk',
      traditional: 'One leaked password or API key can freeze or corrupt logic',
      cre: 'Zero — entire node matrix must reach consensus before execution',
      icon: Lock,
    },
    {
      aspect: 'The "Truth" Factor',
      traditional: 'One data source can glitch, return stale data, or be manipulated',
      cre: 'Multiple independent nodes, consensus-verified against each other',
      icon: GitBranch,
    },
    {
      aspect: 'Audit Trail',
      traditional: 'Mutable text logs — can be altered, deleted, or silently overwritten',
      cre: 'Cryptographically signed, immutable on-chain state — tamper-proof forever',
      icon: BarChart3,
    },
  ];

  // ── Portfolio state ──────────────────────────────────────────────────────
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>(null);
  const [expandedPanel, setExpandedPanel] = useState<'problem' | 'solution' | 'architecture' | null>(null);

  // Accent colour maps (Tailwind-safe static strings)
  const accentBg: Record<string, string> = {
    blue: 'bg-blue-500/10',
    red: 'bg-red-500/10',
    green: 'bg-emerald-500/10',
    amber: 'bg-amber-500/10',
    purple: 'bg-purple-500/10',
  };
  const accentBorder: Record<string, string> = {
    blue: 'border-blue-500/30',
    red: 'border-red-500/30',
    green: 'border-emerald-500/30',
    amber: 'border-amber-500/30',
    purple: 'border-purple-500/30',
  };
  const accentText: Record<string, string> = {
    blue: 'text-blue-400',
    red: 'text-red-400',
    green: 'text-emerald-400',
    amber: 'text-amber-400',
    purple: 'text-purple-400',
  };
  const accentGlow: Record<string, string> = {
    blue: 'shadow-blue-500/20',
    red: 'shadow-red-500/20',
    green: 'shadow-emerald-500/20',
    amber: 'shadow-amber-500/20',
    purple: 'shadow-purple-500/20',
  };

  // Icon resolver
  const iconFor = (wf: CREWorkflow) => {
    const map: Record<string, React.ElementType> = {
      'ccid-synchronizer': GitBranch,
      'ofac-circuit-breaker': ShieldAlert,
      'compliance-reporting-gateway': FileText,
      'progressive-aml-monitor': Activity,
      'fatf-travel-rule-router': Lock,
    };
    return map[wf.id] ?? Shield;
  };

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
            <ChainIcon className="w-4 h-4" />
            Chainlink CRE Decentralized Infrastructure
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            CRE Decentralized<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Backend Consulting</span>
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed mb-4 max-w-3xl mx-auto">
            Move your critical business logic from a single hackable server to a tamper-proof decentralized oracle network.
          </p>
          <p className="text-base text-zinc-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Immutable logs. Multi-source truth consensus. Zero single-point-of-failure. Built for businesses where automation errors carry real financial liability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-bold hover:opacity-90 transition-all shadow-lg"
            >
              Schedule a Backend Risk Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#the-battle"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
            >
              See The Comparison
            </a>
          </div>
        </motion.div>


        {/* ==================== STAT BAR ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 mb-24"
        >
          {[
            { stat: '99.9%', label: 'Uptime across node matrix' },
            { stat: '0', label: 'Single points of failure' },
            { stat: '∞', label: 'Immutable audit trail' },
            { stat: '100%', label: 'Consensus-verified execution' },
          ].map((item, i) => (
            <div key={i} className="bg-[#0d0d0d] px-8 py-7 text-center">
              <p className="text-3xl font-extrabold text-orange-400 mb-1">{item.stat}</p>
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>


        {/* ==================== THE BATTLE ==================== */}
        <section className="mb-28 scroll-mt-28" id="the-battle">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              Head-to-Head Comparison
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Traditional Cloud vs. Chainlink CRE</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Your cron jobs and cloud functions feel reliable — until they don't. Here's what's actually at stake.
            </p>
          </div>

          {/* Column Headers */}
          <div className="grid grid-cols-12 gap-4 mb-4 px-6">
            <div className="col-span-3" />
            <div className="col-span-4 text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full">
                <AlertTriangle className="w-3.5 h-3.5" /> Traditional Cloud
              </span>
            </div>
            <div className="col-span-5 text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
                <ChainIcon className="w-3.5 h-3.5" /> Chainlink CRE Workflow
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {battleRows.map((row, i) => {
              const Icon = row.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="grid grid-cols-12 gap-4 items-stretch"
                >
                  {/* Aspect label */}
                  <div className="col-span-3 bg-[#141414] border border-white/5 rounded-2xl p-5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-sm font-bold text-white">{row.aspect}</span>
                  </div>

                  {/* Traditional */}
                  <div className="col-span-4 bg-red-950/20 border border-red-500/15 rounded-2xl p-5 flex items-center">
                    <p className="text-sm text-red-300/80 leading-relaxed">{row.traditional}</p>
                  </div>

                  {/* CRE */}
                  <div className="col-span-5 bg-orange-500/5 border border-orange-500/20 rounded-2xl p-5 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <p className="text-sm text-zinc-200 leading-relaxed font-medium">{row.cre}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* ==================== USE CASES ==================== */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              Real-World Applications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Where CRE Pays for Itself</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Two high-liability workflows where a centralized system failure isn't a bug report — it's a lawsuit or a lost partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-orange-400" />
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
                  Use Case 01
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Solar Co-op True-Up Reconciliation</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  A solar energy co-op distributes quarterly payouts to fractional landowners based on actual kilowatt-hour production, utility buy-back rates, and each owner's percentage stake. In a centralized setup, a single bad API call to the utility data feed or a miscalculated formula in a cloud function triggers thousands of dollars in mis-distributions.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  With a Chainlink CRE workflow, energy production data is pulled from multiple independent oracle sources, consensus is reached before any calculation runs, and the resulting payout logic is executed on-chain — creating a cryptographically auditable record that any stakeholder can verify independently. Disputes drop to near zero.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-orange-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                Ideal for renewable energy co-ops, fractional real estate payouts, shared revenue distributions
              </div>
            </motion.div>

            {/* Use Case 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-orange-400" />
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
                  Use Case 02
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Inventory Credit Guard for Distribution Warehouses</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  A regional distribution company extends trade credit to hundreds of commercial buyers, with available credit lines automatically adjusted as inventory is consumed and restocked. A single stale data read from the warehouse ERP — caused by a timeout, a network hiccup, or an undocumented API change — can allow a buyer to exceed their limit by tens of thousands of dollars.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  A CRE workflow validates inventory levels against two independent data feeds before adjusting any credit line, logs every authorization event immutably, and triggers a multi-signature approval requirement when orders exceed a configurable risk threshold. The cloud cron job that used to run once an hour is replaced by an event-driven system that reacts in seconds and can't be spoofed.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-orange-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                Ideal for trade credit systems, inventory-backed lending, supply chain finance
              </div>
            </motion.div>
          </div>
        </section>


        {/* ==================== PRODUCTION WORKFLOW PORTFOLIO ==================== */}
        <section className="mb-28" id="production-workflows">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Production Workflows as a Service
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              5 Enterprise-Grade CRE Workflows
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Real production workflows built on the Chainlink Runtime Environment — each solving a distinct blockchain compliance, data-latency, or cross-chain automation bottleneck for financial institutions and regulated protocols.
            </p>
          </div>

          {/* ── Selector Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {CRE_WORKFLOWS.map((wf, i) => {
              const Icon = iconFor(wf);
              const isActive = activeWorkflow === wf.id;
              return (
                <motion.button
                  key={wf.id}
                  id={`workflow-tab-${wf.id}`}
                  onClick={() => {
                    setActiveWorkflow(isActive ? null : wf.id);
                    setExpandedPanel(null);
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`relative text-left rounded-2xl p-5 border transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? `${accentBg[wf.accentVariant]} ${accentBorder[wf.accentVariant]} shadow-xl ${accentGlow[wf.accentVariant]}`
                      : 'bg-[#141414] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isActive ? `${accentBg[wf.accentVariant]} ${accentBorder[wf.accentVariant]} border` : 'bg-white/5 border border-white/10'
                  }`}>
                    <Icon className={`w-5 h-5 ${isActive ? accentText[wf.accentVariant] : 'text-zinc-400'}`} />
                  </div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                    isActive ? accentText[wf.accentVariant] : 'text-zinc-600'
                  }`}>{wf.index}</div>
                  <p className={`text-sm font-bold leading-tight mb-2 ${
                    isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                  }`}>{wf.solutionName}</p>
                  <span className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    isActive
                      ? `${accentBg[wf.accentVariant]} ${accentText[wf.accentVariant]}`
                      : 'bg-white/5 text-zinc-500'
                  }`}>
                    {wf.category}
                  </span>
                  {isActive && (
                    <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full ${accentText[wf.accentVariant].replace('text-', 'bg-')} animate-pulse`} />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* ── Expanded Detail Panel ── */}
          <AnimatePresence mode="wait">
            {activeWorkflow && (() => {
              const wf = CRE_WORKFLOWS.find(w => w.id === activeWorkflow)!;
              const Icon = iconFor(wf);
              return (
                <motion.div
                  key={wf.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-[2rem] border p-8 md:p-10 ${accentBg[wf.accentVariant]} ${accentBorder[wf.accentVariant]}`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-black/30 border ${accentBorder[wf.accentVariant]}`}>
                      <Icon className={`w-8 h-8 ${accentText[wf.accentVariant]}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${accentText[wf.accentVariant]}`}>
                        Workflow {wf.index} · {wf.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">{wf.solutionName}</h3>
                      <p className="text-zinc-400 leading-relaxed">{wf.tagline}</p>
                    </div>
                    {/* Compliance Badges */}
                    <div className="flex flex-wrap gap-2 md:justify-end shrink-0 max-w-xs">
                      {wf.complianceFrameworks.map(f => (
                        <span key={f} className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-black/30 border ${accentBorder[wf.accentVariant]} ${accentText[wf.accentVariant]}`}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Three collapsible panels */}
                  <div className="space-y-3 mb-10">
                    {([
                      { key: 'problem', label: 'The Problem', content: wf.problem, icon: AlertTriangle },
                      { key: 'solution', label: 'The Solution', content: wf.solution, icon: Zap },
                    ] as const).map(({ key, label, content, icon: PanelIcon }) => (
                      <button
                        key={key}
                        id={`panel-${wf.id}-${key}`}
                        onClick={() => setExpandedPanel(expandedPanel === key ? null : key)}
                        className="w-full text-left"
                      >
                        <div className={`rounded-xl border p-5 transition-all duration-200 ${
                          expandedPanel === key
                            ? `bg-black/30 ${accentBorder[wf.accentVariant]}`
                            : 'bg-black/20 border-white/5 hover:border-white/15'
                        }`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <PanelIcon className={`w-4 h-4 ${expandedPanel === key ? accentText[wf.accentVariant] : 'text-zinc-500'}`} />
                              <span className={`text-sm font-bold ${expandedPanel === key ? 'text-white' : 'text-zinc-300'}`}>{label}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${expandedPanel === key ? 'rotate-180' : ''}`} />
                          </div>
                          <AnimatePresence>
                            {expandedPanel === key && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm text-zinc-400 leading-relaxed mt-4 overflow-hidden"
                              >
                                {content}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    ))}

                    {/* Architecture panel */}
                    <button
                      id={`panel-${wf.id}-architecture`}
                      onClick={() => setExpandedPanel(expandedPanel === 'architecture' ? null : 'architecture')}
                      className="w-full text-left"
                    >
                      <div className={`rounded-xl border p-5 transition-all duration-200 ${
                        expandedPanel === 'architecture'
                          ? `bg-black/30 ${accentBorder[wf.accentVariant]}`
                          : 'bg-black/20 border-white/5 hover:border-white/15'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Server className={`w-4 h-4 ${expandedPanel === 'architecture' ? accentText[wf.accentVariant] : 'text-zinc-500'}`} />
                            <span className={`text-sm font-bold ${expandedPanel === 'architecture' ? 'text-white' : 'text-zinc-300'}`}>Technical Architecture (High-Level)</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${expandedPanel === 'architecture' ? 'rotate-180' : ''}`} />
                        </div>
                        <AnimatePresence>
                          {expandedPanel === 'architecture' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-5 overflow-hidden"
                            >
                              <ArchitectureFlow
                                inputs={wf.architecture.inputs}
                                processing={wf.architecture.processing}
                                outputs={wf.architecture.outputs}
                                layers={wf.architecture.layers}
                                accentVariant={wf.accentVariant}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </div>

                  {/* Value Proposition */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {wf.valueProposition.map((vp, i) => (
                      <div key={i} className="flex items-start gap-3 bg-black/20 rounded-xl p-4 border border-white/5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${accentText[wf.accentVariant]}`} />
                        <p className="text-sm text-zinc-300 leading-relaxed">{vp}</p>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className={`rounded-xl p-5 border ${accentBorder[wf.accentVariant]} bg-black/20 flex items-start gap-3`}>
                    <ExternalLink className={`w-4 h-4 shrink-0 mt-0.5 ${accentText[wf.accentVariant]}`} />
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${accentText[wf.accentVariant]}`}>Ideal For</p>
                      <p className="text-sm text-zinc-400 leading-relaxed">{wf.idealFor}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>

          {/* No-selection prompt */}
          {!activeWorkflow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10 text-zinc-600 text-sm"
            >
              <Shield className="w-8 h-8 mx-auto mb-3 opacity-30" />
              Select a workflow above to explore its architecture, value proposition, and compliance scope.
            </motion.div>
          )}
        </section>


        {/* ==================== PROCESS / PRICING ==================== */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
              Audit-to-Deployment Pipeline
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How We Work</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              No boilerplate. Every engagement starts with a deep audit of your current automation stack before we write a single line of CRE logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Mini Audit & Proof of Concept',
                desc: 'We map your current automation architecture, identify the highest-liability single points of failure, and build a working PoC that demonstrates the CRE equivalent running on a testnet. You see it working before you commit.',
                badge: 'Discovery',
              },
              {
                step: '02',
                title: 'Full CRE Deployment',
                desc: 'Production-grade Chainlink CRE workflow deployed against real oracle feeds. Includes custom WASM job logic, data source configuration, consensus parameter tuning, and integration with your existing systems (ERP, CRM, accounting software).',
                badge: 'Build',
              },
              {
                step: '03',
                title: 'Monthly Oversight Retainer',
                desc: 'Ongoing node health monitoring, oracle feed verification, logic updates as your business rules evolve, and a monthly immutable audit summary delivered to your inbox. We stay on as your decentralized infrastructure team.',
                badge: 'Maintain',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#141414] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-orange-500/25 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-black text-white/5">{item.step}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ==================== CTA ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />
          <PhoneCall className="w-12 h-12 text-orange-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Schedule a Backend Risk Audit</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We'll map your current automation stack, identify every single-point-of-failure, and show you exactly what a Chainlink CRE replacement looks like — before you spend a dollar on build.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            {[
              'No existing blockchain knowledge required',
              'Works alongside your current stack',
              'Tamper-proof audit trail from day one',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-zinc-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                {item}
                {i < 2 && <span className="hidden sm:block text-zinc-600 ml-2">•</span>}
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-extrabold hover:opacity-90 transition-all shadow-2xl shadow-orange-500/20 text-lg"
          >
            Secure My Automation <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-zinc-600 mt-4">We'll reach back out within one business day.</p>
        </motion.section>

      </div>
    </div>
  );
}
