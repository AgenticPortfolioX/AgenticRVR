import React from 'react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { Link as ChainIcon, Shield, Compass, Laptop, ArrowDown } from 'lucide-react';

export default function BusinessPlan() {
  useSEO('Business Plans | AgenticRVR', 'Our service business plans for Automation Consultation, Digital Launch Pad, CRE Backend Consulting, and the Strix Box.');

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen bg-[#050505] selection:bg-orange-500/30">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center max-w-4xl mx-auto relative pt-8"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/6 rounded-full blur-[100px] pointer-events-none" />
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Our Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Business Plans</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Detailed overviews of our target markets, value propositions, pricing, and financial models for each of our core offerings.
          </p>
        </motion.div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          
          {/* Automation Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mb-6">
                <Compass className="w-7 h-7 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Automation Consultation</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                We audit and re‑engineer your manual, repetitive workflows into custom automations that save 15–30 hours per week. From CRM integrations to complex multi‑step approval pipelines, we design, build, and maintain the invisible machine that runs your back office. Our engagements are fixed‑fee and come with a 30‑day optimisation guarantee, ensuring you get immediate, measurable ROI.
              </p>
              <a href="#automation-full-plan" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all self-start">
                View Full Business Plan <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Digital Launch Pad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mb-6">
                <Laptop className="w-7 h-7 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Digital Launch Pad</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                A premium website and funnel service for trade contractors who are losing leads to voicemail. We build mobile‑first sites with automated intake forms, instant owner SMS alerts, and 24‑hour follow‑up nudges. Optional add‑ons include an Automated Review Harvester that triggers Google Review requests after every completed job, and an AI Database Reactivator that resurrects dead leads from your legacy customer lists—all working while you’re on the tools.
              </p>
              <a href="#digital-launch-full-plan" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all self-start">
                View Full Business Plan <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* CRE Backend Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mb-6">
                <ChainIcon className="w-7 h-7 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">CRE Decentralized Backend Consulting</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                We replace your fragile cloud cron jobs with tamper‑proof Chainlink CRE workflows. Instead of a single server that can be hacked or silently fail, your business logic runs across a decentralised network that reaches consensus on every output. Immutable, cryptographically signed audit logs give you bulletproof accountability. We specialise in high‑liability reconciliation, inventory credit guards, and green‑energy payout logic for Michigan mid‑market firms.
              </p>
              <a href="#cre-full-plan" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all self-start">
                View Full Business Plan <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Strix Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#141414] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mb-6">
                <Shield className="w-7 h-7 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Local AI Privacy Box (Strix Box)</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                An on‑premises AI appliance that reads, indexes, and answers questions from your sensitive documents—without sending a single byte to the cloud. Built on an AMD Strix Halo workstation with 128GB unified memory, it runs large language models entirely air‑gapped. Perfect for CPA firms, law practices, and medical offices that must maintain HIPAA or attorney‑client privilege. A flat $9,995 setup and $600/month retainer puts the power of private AI directly in your office.
              </p>
              <a href="#strix-full-plan" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all self-start">
                View Full Business Plan <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>


        {/* DETAILED SECTIONS */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Automation Full Plan */}
          <div id="automation-full-plan" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6">Automation Consultation – Full Business Plan</h2>
            <details className="bg-[#141414] border border-white/5 rounded-2xl p-6 group cursor-pointer marker:text-orange-500">
              <summary className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors focus:outline-none">
                Click to view full business plan for Automation Consultation
              </summary>
              <div className="mt-6 text-zinc-400 text-sm space-y-6 cursor-text">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
                  <p className="leading-relaxed">Automation Consultation is a high‑trust advisory and implementation service that dissects a client’s existing manual processes, identifies automation opportunities, and delivers a fully custom, integrated solution. Every engagement is fixed‑price, milestone‑based, and includes a post‑launch optimisation period. The service is technology‑agnostic: we leverage Make.com, n8n, Zapier, custom Python scripts, and API integrations to stitch together the client’s existing software stack.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Target Market</h3>
                  <p className="leading-relaxed mb-2">Mid‑sized service businesses (10–50 employees) drowning in administrative overhead: commercial contractors, property management firms, independent insurance agencies, and niche logistics companies.</p>
                  <p className="leading-relaxed">Decision‑maker: Owner, Operations Manager, or COO who feels the pain of repetitive data entry and error‑prone manual handoffs.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Value Proposition</h3>
                  <p className="leading-relaxed italic border-l-2 border-orange-500 pl-4 py-1">“You didn’t start your business to copy‑paste data between apps. We build the invisible machine that does it for you, cuts your admin time in half, and pays for itself in 90 days.”</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pricing & Packaging</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li><strong className="text-white">Process Audit & Automation Blueprint:</strong> $1,500 (flat) – 1‑day on‑site/remote deep dive, documented workflow map, ROI projection, and a prioritised implementation roadmap.</li>
                    <li><strong className="text-white">Custom Automation Build:</strong> $6,000–$12,000 (fixed fee per project) – design, build, test, and deploy up to 3 core automations. Includes 30 days of post‑launch monitoring and 1 revision cycle.</li>
                    <li><strong className="text-white">Ongoing Optimisation Retainer:</strong> $300/month – monthly health check, minor modifications, and access to new automation recipes.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sales & Marketing</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li><strong className="text-white">Lead magnet:</strong> “The 10‑Minute Admin Audit” PDF checklist.</li>
                    <li><strong className="text-white">Outreach:</strong> Warm email sequences to local business groups (BNI chapters, chamber of commerce).</li>
                    <li><strong className="text-white">Workshops:</strong> Free 30‑minute “Automation AMA” webinars co‑hosted with local accounting firms or business coaches.</li>
                    <li><strong className="text-white">Referral incentive:</strong> 10% finder’s fee for any closed project referred by a past client.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Delivery & Operations</h3>
                  <p className="leading-relaxed mb-2"><strong className="text-white">Process:</strong> Discovery call → Blueprint delivery (within 5 business days) → Build phase (2–4 weeks depending on complexity) → User acceptance testing → Launch & training → 30‑day optimisation window.</p>
                  <p className="leading-relaxed mb-2"><strong className="text-white">Tools:</strong> Make.com, n8n, Python, Airtable, API connectors. All documentation delivered as a Loom video walkthrough and a written SOP.</p>
                  <p className="leading-relaxed"><strong className="text-white">Solo delivery capacity:</strong> 2–3 concurrent builds, with 1 blueprint per week.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Financial Snapshot (per project)</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>Average project fee: $9,000</li>
                    <li>Direct costs (software subscriptions, contract QA): ~$200</li>
                    <li>Gross margin: ~98%</li>
                    <li>Target: 1 new project per month initially, growing to 2–3 per month.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Key Milestones (First 90 Days)</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>Publish the “10‑Minute Admin Audit” lead magnet.</li>
                    <li>Deliver 2 pro‑bono process audits to build case studies.</li>
                    <li>Close first paid blueprint.</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

          <hr className="border-white/10" />

          {/* Digital Launch Pad Full Plan */}
          <div id="digital-launch-full-plan" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6">Digital Launch Pad – Full Business Plan</h2>
            <details className="bg-[#141414] border border-white/5 rounded-2xl p-6 group cursor-pointer marker:text-orange-500">
              <summary className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors focus:outline-none">
                Click to view full business plan for Digital Launch Pad
              </summary>
              <div className="mt-6 text-zinc-400 text-sm space-y-6 cursor-text">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
                  <p className="leading-relaxed">Digital Launch Pad is a website‑and‑funnel service built exclusively for local trade contractors. It replaces their outdated, brochure‑style site with a mobile‑first lead capture machine that qualifies, follows up, and reactivates prospects automatically. The service combines high‑conversion design with powerful background automations: an intake funnel that instantly texts the owner and nudges the lead to book, an Automated Review Harvester that triggers Google Review requests after completed jobs, and an AI Database Reactivator that crafts multi‑wave sequences to resurrect dormant customer lists.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Target Market</h3>
                  <p className="leading-relaxed mb-2">Commercial HVAC, roofing, high‑end automotive detailing/powder coating, custom fabrication shops in Oakland/Wayne County, Michigan.</p>
                  <p className="leading-relaxed mb-2">The business does $500k–$5M annual revenue, relies on word‑of‑mouth, and currently loses 40‑60% of inbound leads due to no follow‑up.</p>
                  <p className="leading-relaxed">Decision‑maker: Owner (often working in the field) or General Manager.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Value Proposition</h3>
                  <p className="leading-relaxed italic border-l-2 border-orange-500 pl-4 py-1">“Your website shouldn’t be a digital brochure. It should be your hardest‑working employee—qualifying leads, following up, and reviving dead opportunities while you’re on the tools.”</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pricing & Packaging</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li><strong className="text-white">Lead Starter:</strong> $2,500 one‑time + $199/month – Custom mobile‑optimised 3–5 page site, guided quote form, auto‑SMS to owner, basic SEO.</li>
                    <li><strong className="text-white">Growth Machine (most popular):</strong> $5,000 one‑time + $349/month – Everything in Lead Starter + full intake funnel with 24‑hour booking nudges, Automated Review Harvester, monthly performance dashboard.</li>
                    <li><strong className="text-white">Revive & Dominate Add‑on:</strong> $1,500 one‑time + $150/month – AI Database Reactivator for one legacy customer list (dormant &gt;6 months), 3‑wave email/SMS sequence, reactivation reports.</li>
                    <li><strong className="text-white">Review Harvester standalone:</strong> $1,200 setup + $99/month.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sales & Marketing</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li><strong className="text-white">Cold outreach script:</strong> “Hi [Name], I saw your website doesn’t capture leads after hours. What would 3 extra qualified calls a month do for your business?”</li>
                    <li>Local Facebook/Instagram ads with a “Website Audit” funnel.</li>
                    <li>Direct mail to contractors with a “Lost Lead Calculator” one‑pager.</li>
                    <li>Supplier partnerships: offer referral kickbacks to HVAC supply houses and paint distributors.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Delivery & Operations</h3>
                  <p className="leading-relaxed mb-2"><strong className="text-white">Stack:</strong> Webflow or WordPress + Elementor, Make.com/n8n for automations, Twilio for SMS, Google Business Profile API for review links.</p>
                  <p className="leading-relaxed mb-2"><strong className="text-white">Timeline:</strong> 90‑min discovery → wireframe approval → build in 10 business days → automate → test → launch → 2‑hour owner training.</p>
                  <p className="leading-relaxed"><strong className="text-white">Capacity:</strong> 3–4 new builds per month solo using templated components.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Financial Snapshot (per Growth Machine client)</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>One‑time: $5,000</li>
                    <li>MRR: $349, with ~$50 costs → $299 net/month</li>
                    <li>At 10 clients: $2,990/month net recurring.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Key Milestones (First 90 Days)</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>Design 3 template website/funnel packages.</li>
                    <li>Build the Review Harvester automation once and make it reusable.</li>
                    <li>Land first 2 Growth Machine clients.</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

          <hr className="border-white/10" />

          {/* CRE Backend Consulting Full Plan */}
          <div id="cre-full-plan" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6">CRE Decentralized Backend Consulting – Full Business Plan</h2>
            <details className="bg-[#141414] border border-white/5 rounded-2xl p-6 group cursor-pointer marker:text-orange-500">
              <summary className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors focus:outline-none">
                Click to view full business plan for CRE Decentralized Backend Consulting
              </summary>
              <div className="mt-6 text-zinc-400 text-sm space-y-6 cursor-text">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
                  <p className="leading-relaxed">We audit and migrate high‑liability, automated backend processes from single‑point‑of‑failure cloud scripts to tamper‑proof Chainlink CRE (Cross‑Chain Runtime Environment) workflows. A CRE workflow compiles your business logic to WASM and executes it across a decentralized oracle network (DON). Multiple independent nodes fetch external data, verify inputs, and reach consensus before any transaction fires. The result: a system that cannot be silently altered by a single hacked password, and whose execution logs are cryptographically signed, immutable, and permanently auditable.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Target Market</h3>
                  <p className="leading-relaxed mb-2">Mid‑sized Michigan firms running high‑stakes automation: regional green‑energy cooperatives (solar/wind) doing member payout reconciliation, boutique distribution warehouses with inventory‑credit guard logic, specialty insurance MGAs handling automatic claim adjudication.</p>
                  <p className="leading-relaxed">Decision‑maker: CTO, Head of Operations, or owner who understands that a single glitch or breach could cost $100k+.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Value Proposition</h3>
                  <p className="leading-relaxed italic border-l-2 border-orange-500 pl-4 py-1">“One leaked API key can bankrupt your current backend. A decentralized oracle network won’t even blink. We replace your fragile cloud cron with a Truth Machine that can’t be hacked, silenced, or altered.”</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pricing & Packaging</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li><strong className="text-white">Mini Audit + Proof of Concept:</strong> $2,500 – 2‑day deep dive into one critical workflow, live side‑by‑side comparison demo, and risk report.</li>
                    <li><strong className="text-white">Full CRE Deployment:</strong> $12,000–$18,000 – architecture design, WASM development, DON node selection, testnet to mainnet migration, immutable dashboard, and team training.</li>
                    <li><strong className="text-white">Monthly Oversight Retainer:</strong> $500/month – log reviews, node performance reports, runtime updates, minor logic tweaks.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sales & Marketing</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>Direct outreach to green‑energy co‑op boards and local warehouse owner‑operators.</li>
                    <li>LinkedIn content featuring the “Battle” side‑by‑side demo video (traditional AWS cron failure vs. CRE resilience).</li>
                    <li>White‑label partnerships with Web2 MSPs who can’t offer decentralized security.</li>
                    <li><strong className="text-white">Lead magnet:</strong> “The 5‑Minute Backend Risk Self‑Assessment” checklist, driving to a booked audit.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Delivery & Operations</h3>
                  <p className="leading-relaxed mb-2"><strong className="text-white">Tech stack:</strong> Chainlink CLI, Rust/Go compiled to WASM, local testnet DON simulator.</p>
                  <p className="leading-relaxed mb-2"><strong className="text-white">Project lifecycle:</strong> Scoping workshop → Architecture doc → Off‑chain prototype → Audit & risk report → On‑chain staging → Client sign‑off → Mainnet launch.</p>
                  <p className="leading-relaxed">You deliver solo, with a contract smart‑contract auditor for larger engagements.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Financial Snapshot (per project)</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>Average deployment fee: $15,000</li>
                    <li>Direct costs: ~$1,000 (auditor review, testnet gas)</li>
                    <li>Gross margin: ~93%</li>
                    <li>Aim for 1–2 engagements per quarter.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Key Milestones (First 90 Days)</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>Produce a crisp 3‑minute side‑by‑side demo video.</li>
                    <li>Complete a pro‑bono audit for a friendly local business as a case study.</li>
                    <li>Secure first paid audit.</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

          <hr className="border-white/10" />

          {/* Strix Box Full Plan */}
          <div id="strix-full-plan" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6">Local AI Privacy Box (Strix Box) – Full Business Plan</h2>
            <details className="bg-[#141414] border border-white/5 rounded-2xl p-6 group cursor-pointer marker:text-orange-500">
              <summary className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors focus:outline-none">
                Click to view full business plan for Strix Privacy Box
              </summary>
              <div className="mt-6 text-zinc-400 text-sm space-y-6 cursor-text">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
                  <p className="leading-relaxed">The Strix Privacy Box is a turnkey on‑premises AI appliance for professional service firms that cannot risk sending client data to the cloud. It combines a powerful AMD Strix Halo mini‑workstation (128GB unified memory) with our proprietary Strix AI Core software stack. The system OCRs, embeds, and indexes all the firm’s sensitive documents into a local vector database. Users then query the data in plain English via a secure chat interface—without a single internet connection required for inference. The hardware is purchased only after a client signs a contract and pays a 50% deposit, making the model completely capital‑efficient.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Target Market</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed mb-2">
                    <li>Independent CPA and accounting firms (SSN‑laden tax documents, client P&Ls).</li>
                    <li>Boutique law practices (attorney‑client privilege, estate planning, litigation).</li>
                    <li>Small medical and dental offices (HIPAA‑governed intake forms and treatment notes).</li>
                  </ul>
                  <p className="leading-relaxed">Decision‑maker: Managing partner or practice manager, deeply concerned about data privacy and regulatory compliance.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Value Proposition</h3>
                  <p className="leading-relaxed italic border-l-2 border-orange-500 pl-4 py-1">“Your competitors are experimenting with ChatGPT and accidentally leaking client data. You can have a private AI that reads every document in your office, answers questions instantly, and never connects to the internet. All intelligence, zero exposure.”</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pricing & Financial Model</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li><strong className="text-white">Hardware + Installation:</strong> $9,995 one‑time – includes Strix Halo box, software provisioning, initial ingestion of up to 50GB of documents, network security setup, and 2‑hour staff training.</li>
                    <li><strong className="text-white">Monthly Maintenance Retainer:</strong> $600/month – automated vector index optimizations, model updates, feature rollouts, remote health checks (via secure VPN tunnel or on‑site), and priority support.</li>
                    <li><strong className="text-white">Implementation Deposit:</strong> 50% ($5,000) due at contract signing, which fully funds the $3,228 hardware purchase. The remaining 50% is paid on installation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sales Strategy – The Presale Blueprint</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li><strong className="text-white">Software‑first, hardware‑agnostic:</strong> Build the complete interface and indexing logic on your development laptop using Ollama, ChromaDB, and a Streamlit/Next.js frontend.</li>
                    <li><strong className="text-white">Live air‑gapped demo:</strong> Run the prototype on your laptop, disconnected from Wi‑Fi, using sample encrypted PDFs. Show them the AI ingesting and cross‑referencing data with zero cloud calls.</li>
                    <li><strong className="text-white">Privacy audit angle:</strong> Offer free “AI Compliance Risk Assessments” to local accountants and lawyers; uncover pain around document retrieval.</li>
                    <li><strong className="text-white">Close with the deposit model:</strong> “Sign today with $5,000 down, and we order your dedicated privacy box. Installation in two weeks.”</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Delivery & Operations</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li><strong className="text-white">Hardware:</strong> AMD Strix Halo mini‑PC with 128GB unified memory, 2TB NVMe, silent cooling. Sourced from a reliable system integrator.</li>
                    <li><strong className="text-white">Software stack:</strong> Ubuntu Server, Docker, Ollama, Open WebUI (or custom), ChromaDB, Tesseract/Unstructured for OCR, n8n for watched‑folder indexing triggers. All wrapped in a single provisioning script.</li>
                    <li><strong className="text-white">Installation day:</strong> Unbox, connect to local network, run provisioning, start bulk ingestion, train staff, hand over admin credentials.</li>
                    <li><strong className="text-white">Ongoing:</strong> Monthly remote check‑in via secure tunnel, model updates, and re‑indexing health checks.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Financial Snapshot (per client)</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>One‑time revenue: $9,995; hardware cost: ~$3,300; gross profit on setup: ~$6,695.</li>
                    <li>MRR: $600 at near‑zero variable cost.</li>
                    <li>Target: 1–2 new Strix Box deployments per quarter. After 12 months, 4 clients yield $2,400/month in recurring revenue.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Key Milestones (First 90 Days)</h3>
                  <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                    <li>Finalise the software stack and laptop demo.</li>
                    <li>Line up the hardware supplier.</li>
                    <li>Conduct 3 live air‑gapped demos for targeted firms.</li>
                    <li>Secure first signed contract and deposit.</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

        </div>
      </div>
    </div>
  );
}
