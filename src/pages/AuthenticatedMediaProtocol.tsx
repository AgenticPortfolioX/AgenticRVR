import { motion } from 'motion/react';
import { Shield, Lock, Globe, Eye, CheckCircle, ArrowRight, Zap, Network, Fingerprint, Key, Radio, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const techStack = [
  {
    name: 'World ID',
    subtitle: 'Proof of Humanity',
    icon: Fingerprint,
    color: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/20',
    accent: 'text-violet-400',
    glow: 'bg-violet-500/10',
    description:
      'Biometric Sybil resistance using Zero-Knowledge proofs. Cryptographically binds every piece of media to a verified, unique human—not a bot—without revealing their identity on-chain.',
  },
  {
    name: "Aztec's Noir",
    subtitle: 'Privacy & Reputation',
    icon: Eye,
    color: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/20',
    accent: 'text-cyan-400',
    glow: 'bg-cyan-500/10',
    description:
      'Zero-knowledge circuits blind sensitive metadata—exact GPS coordinates, identity—while enabling selective disclosure of contextual claims like geographic region or credibility score.',
  },
  {
    name: 'Chainlink',
    subtitle: 'CCIP, Functions & Automation',
    icon: Network,
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    glow: 'bg-blue-500/10',
    description:
      'Institutional-grade decentralized oracle network. Functions validate hardware certificates, Automation updates dynamic verification zones, and CCIP broadcasts "Verified Real" attestations across every major blockchain.',
  },
  {
    name: 'Secure Enclave',
    subtitle: 'Hardware-Backed Capture',
    icon: Key,
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/20',
    accent: 'text-orange-400',
    glow: 'bg-orange-500/10',
    description:
      'Your smartphone\'s Secure Enclave hashes and cryptographically signs media at the moment of capture, generating a full C2PA manifest before the content ever leaves your device.',
  },
];

const steps = [
  {
    number: '01',
    label: 'Secure Capture & Binding',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    description:
      'The smartphone\'s Secure Enclave hashes the media, signs it cryptographically, and creates a C2PA manifest at the exact moment of recording—before any transmission occurs.',
  },
  {
    number: '02',
    label: 'Identity Bonding',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    description:
      'World ID 2.0 generates a privacy-preserving Semaphore proof that binds the user\'s nullifier to the media hash—proving a unique human captured it without exposing identity on-chain.',
  },
  {
    number: '03',
    label: 'Privacy-Preserving Notarization',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    description:
      'Noir ZK-circuits mask exact GPS and identity data, outputting only a geographic bounding box. This proves media was filmed within an active verification zone without revealing the precise location.',
  },
  {
    number: '04',
    label: 'Decentralized Verification & Distribution',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    description:
      'Chainlink Functions verify hardware and ZK-proofs, then CCIP broadcasts a "Truth Attestation" across blockchains—issuing a universal "Verified Real" badge logged to our public repository.',
  },
];

const problems = [
  {
    icon: Shield,
    title: 'The Privacy Paradox',
    description:
      'Whistleblowers and activists must choose between personal safety and credibility. Revealing identity proves authenticity; staying anonymous gets evidence dismissed as a deepfake.',
  },
  {
    icon: Lock,
    title: 'Financial Fraud & Blackmail',
    description:
      'Sophisticated synthetic media enables bad actors to create convincing fraudulent content used to extort individuals or trick them into predatory financial scams.',
  },
  {
    icon: Globe,
    title: 'Historical Revisionism',
    description:
      'As deepfakes become indistinguishable from reality, manufactured "proof" of events that never happened permanently poisons collective memory and the historical record.',
  },
  {
    icon: Radio,
    title: 'Institutional Trust Collapse',
    description:
      'A "post-truth" environment emerges where undetectable synthetic media weaponizes public opinion, making it impossible to distinguish reality from fabrication.',
  },
];

const businessPoints = [
  {
    number: '1',
    title: 'Network Effects',
    description:
      'Integrating World ID creates a Sybil-resistant ecosystem where the cost of a deepfake attack scales vertically as our verified human user base expands.',
  },
  {
    number: '2',
    title: 'Value Capture & Competitive Moat',
    description:
      'B2B verification API fees and "legitimacy-as-a-service" subscriptions for platforms requiring high-integrity digital evidence.',
  },
  {
    number: '3',
    title: 'Regulatory Alignment',
    description:
      'Cryptographic provenance at the moment of capture aligns with the EU AI Act, U.S. deepfake disclosure laws, and emerging international C2PA conformance standards.',
  },
  {
    number: '4',
    title: 'Mathematical Certainty',
    description:
      'We replace reactive, probabilistic AI detection with absolute mathematical certainty using ZK-proofs and decentralized oracles verified at the source.',
  },
];

const roadmap = [
  {
    quarter: 'Q1 2026',
    label: 'Build & Test',
    active: false,
    description:
      'Develop core protocol components—mobile capture app, Noir circuits, validator service, Chainlink Functions & CCIP contracts. Deploy to testnet. Launch reputation website.',
  },
  {
    quarter: 'Q2 2026',
    label: 'Pilot & Market Entry',
    active: true,
    description:
      'Launch closed beta with select media organizations and journalists. Obtain EU AI Act and C2PA conformance certifications. Refine UX, API, and infrastructure.',
  },
  {
    quarter: 'Q3 2026',
    label: 'Scale & Global Adoption',
    active: false,
    description:
      'Decentralize the validator network. Release public SDK and self-serve tools. Expand to all major blockchains via CCIP. Integrate with global social media platforms.',
  },
];

export default function AuthenticatedMediaProtocol() {
  useSEO(
    'Authenticated Media Protocol | AMP by RVR LLC — Solving Deepfakes with Cryptography',
    'AMP uses hardware-backed ZK-proofs, World ID, Aztec Noir, and Chainlink to cryptographically authenticate real media—solving the deepfake crisis without sacrificing privacy.',
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            RVR LLC · Q2 2026 · Authenticated Media Protocol
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.05] mb-8 max-w-5xl"
          >
            Solving Deepfakes by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400">
              Cryptographically Authenticating
            </span>{' '}
            Real Ones.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          >
            A hardware-backed, zero-knowledge notarization protocol that proves a video was captured
            by a unique human at a specific real-world location—without revealing who they are or
            exactly where they stood.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              to="/AMPDemo"
              className="px-8 py-4 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Demo Tool <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </Link>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-16"
          >
            {[
              { label: 'Zero-Knowledge Proofs', value: '3-Layer' },
              { label: 'Blockchains via CCIP', value: 'Multi-Chain' },
              { label: 'Identity Exposure', value: 'Zero' },
              { label: 'Verification Standard', value: 'C2PA' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col"
              >
                <span className="text-2xl font-semibold text-white">{stat.value}</span>
                <span className="text-xs text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              The Problem
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Deepfakes are a crisis of trust.
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Synthetic media is no longer a future threat—it's an active weapon targeting
              individuals, institutions, and the historical record itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, i) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#141414] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 group-hover:bg-red-500/10 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">{problem.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{problem.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Solution Banner ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2rem] bg-gradient-to-br from-violet-600/20 via-[#141414] to-blue-600/20 border border-violet-500/20 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_60%)]" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                The Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                Proof of Humanity & Cryptography
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed">
                We present a hardware-backed, zero-knowledge notarization protocol that proves a
                video was captured by a unique human at a specific real-world location—
                <strong className="text-white">
                  {' '}
                  without revealing who they are or exactly where they stood.
                </strong>{' '}
                By merging unique humanity with decentralized verification, we empower users to
                prove their content is real without sacrificing personal safety or location privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow Steps ── */}
      <section className="py-24 px-6" id="workflow">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Solution Workflow
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Four steps to verified truth.
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Every authenticated piece of media passes through a four-layer cryptographic pipeline
              from capture to global verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-[#141414] rounded-[2rem] p-8 border ${step.border} relative overflow-hidden group`}
              >
                <div className={`absolute -top-10 -right-10 w-48 h-48 ${step.bg} rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`text-5xl font-bold ${step.color} opacity-40 font-mono`}>
                      {step.number}
                    </span>
                    <div className={`h-px flex-1 ${step.bg} border-t ${step.border}`} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{step.label}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              System Architecture
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Built without a trusted third party.
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Three decentralized zones—Verified Identity, Privacy & Execution, and Connectivity—
              work in concert so no single entity controls the verification pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-[#141414] rounded-[2rem] p-8 border ${tech.border} relative overflow-hidden group`}
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 ${tech.glow} rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.color} border ${tech.border} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${tech.accent}`} />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-medium">{tech.name}</h3>
                      <p className={`text-sm font-medium ${tech.accent} mt-1`}>{tech.subtitle}</p>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">{tech.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Business Model ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Business Model
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Bridging the trust gap.
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Our model aligns commercial sustainability with the public good—verified media becomes
              a global infrastructure layer, not a product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessPoints.map((point, i) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#141414] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group flex gap-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                <div className="relative z-10 flex gap-6">
                  <span className="text-6xl font-bold text-orange-500/20 font-mono leading-none">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{point.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Roadmap
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Next steps.</h2>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmap.map((item, i) => (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-[2rem] p-8 border relative overflow-hidden ${
                    item.active
                      ? 'bg-gradient-to-br from-orange-500/15 to-orange-600/5 border-orange-500/30'
                      : 'bg-[#141414] border-white/5'
                  }`}
                >
                  {item.active && (
                    <>
                      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
                      <div className="absolute -top-2 -right-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500 text-black text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                          We're Here
                        </span>
                      </div>
                    </>
                  )}
                  <div className="relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 ${item.active ? 'bg-orange-500 text-black' : 'bg-white/5 border border-white/10 text-zinc-400'}`}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className={`text-sm font-semibold mb-2 ${item.active ? 'text-orange-400' : 'text-zinc-500'}`}>
                      {item.quarter}
                    </p>
                    <h3 className="text-xl font-medium mb-3">{item.label}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-br from-violet-600/20 via-[#141414] to-blue-600/20 border border-violet-500/20 p-12 md:p-16 relative overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                Strategic Participation & Investment
              </div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 max-w-3xl mx-auto">
                Ready to authenticate the truth?
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                For inquiries regarding strategic participation, media partnerships, or prospective
                investment in the Authenticated Media Protocol, connect with us today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-10 py-4 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Get In Touch <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/"
                  className="px-10 py-4 rounded-full bg-white/5 border border-white/10 font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
