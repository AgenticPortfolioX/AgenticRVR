---
title: "Prove It: The AI Paper Trail Metro Detroit Businesses Need Before Their Next Audit"
date: "2026-09-14"
description: "Regulators rarely punish the breach. They punish the missing document. Here are the five artifacts every Metro Detroit business using AI must be able to produce, what Michigan law actually requires, and the 60-minute test that tells you where you stand."
category: "Agentic Workflows"
author: "Agentic"
---
# Prove It: The AI Paper Trail Metro Detroit Businesses Need Before Their Next Audit
*Published: September 14, 2026 | By Agentic*
---
Ask a business owner whether they are compliant with AI rules and you will get a policy document in return. Ask for the risk analysis, the tool inventory, or the vendor agreement, and the room goes quiet.

That gap is where enforcement lives. The Office for Civil Rights has been consistent about what it punishes in 2026: not the breach, but the missing paperwork underneath it. Every OCR settlement reviewed this year cited an inadequate or absent risk analysis. In April 2026, four HIPAA ransomware settlements totaling $1.16 million and touching 427,000 patients turned on that same deficiency.

The lesson is narrow. You are not graded on whether you adopted AI. You are graded on whether you can prove you managed it.

## The Five Documents That Decide the Outcome

Compliance for an AI-using business is not a philosophy. It is a file. Five artifacts do most of the work.

| # | Artifact | What it must contain | The question it answers |
|---|---|---|---|
| 1 | **AI use policy** | Approved tools, prohibited data classes, who may authorize a new tool, disclosure expectations | "Did leadership define the boundary?" |
| 2 | **AI tool inventory** | Every tool in use — including free consumer accounts — with data class touched and approval status | "Do you know what is actually running?" |
| 3 | **Vendor agreements** | Signed terms for every vendor touching regulated data; a Business Associate Agreement where PHI is involved | "Who else is accountable, and for what?" |
| 4 | **Written risk analysis** | Threats, vulnerabilities, current safeguards, and the gaps you have not closed | "Did you look, in writing, within the last 12 months?" |
| 5 | **Training and logs** | Staff training records plus access and audit logs retained to the applicable window | "Can you show what happened, and when?" |

A policy alone answers one of those questions. That is why "we have a policy" is the most common answer regulators reject.

## Michigan's Patchwork: What Actually Applies to You

Michigan has no comprehensive consumer data privacy law. That gets repeated as if it means nothing applies. It does not. Three state statutes reach an ordinary business in Oakland or Wayne County.

**The Identity Theft Protection Act (MCL 445.61–445.79d)** governs breach notice, with the operative provision at MCL 445.72. Notice to affected residents must go out **"without unreasonable delay."** Michigan imposes no fixed day count today. Encrypted data is exempt if the key was not also compromised. Knowingly failing to notify carries civil fines up to $250 per failure, capped at $750,000 per breach event, enforced by the Attorney General and county prosecutors.

Here is the part most owners miss: an open-ended deadline is harder to satisfy than a fixed one. "Without unreasonable delay" is measured against what an ordinarily prudent business would have done — which means it is measured against your documentation. A 45-day clock tells you when you failed. A reasonableness standard makes you prove you did not.

Two narrower statutes apply to specific operations. The **Social Security Number Privacy Act (MCL 445.81–445.85)** requires any business collecting Social Security numbers to maintain a written privacy policy — if your intake form has an SSN field, you own that obligation. The **Michigan Insurance Data Security Act (MCL 500.550–500.565)** requires insurance licensees to maintain a written information security program and notify the Department of Insurance within 10 business days of a cybersecurity event.

Two bills would tighten all of this. SB 360 passed the Michigan Senate in August 2025 and is pending in the House: it would add a firm 45-day deadline, require Attorney General notice for breaches affecting 100 or more residents, add biometric data to the breach definition, mandate 24 months of identity theft services after an SSN breach, and require NIST-aligned cybersecurity programs. SB 359, the Personal Data Privacy Act, remains in the Senate Committee of the Whole and has passed neither chamber. Neither is law today — but the direction is settled.

## Privilege and PHI: Where the Clock Actually Starts

For healthcare practices the federal clock is explicit. Under the HIPAA Breach Notification Rule (45 CFR §§ 164.400–414), affected individuals must be notified no later than 60 days after discovery. Breaches affecting 500 or more individuals go to HHS within 60 days; breaches under 500 are reported on an annual log due within 60 days after the calendar year ends, typically by March 1.

One overlooked requirement: a Business Associate Agreement must obligate the business associate to report **all security incidents**, not only those that rise to a breach, under 45 CFR §164.314(a)(2)(i). If your AI vendor agreement is silent on incidents that did not become breaches, it is under-specified.

HHS also proposed the largest Security Rule overhaul in two decades, published December 27, 2024 (90 FR 800). It remains proposed, not final, but it previews what auditors will want: written documentation of all policies, plans, and analyses; a technology asset inventory and network map showing how ePHI moves through your systems, refreshed at least every 12 months; and a far more specific written risk analysis. Those are habits worth adopting now — see our breakdown of [what private AI requires operationally](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-13-hipaa-local-llm-private-ai).

For law firms, the governing document is ABA Formal Opinion 512, issued July 29, 2024 — the ABA's first ethics guidance on generative AI. It maps AI use onto six Model Rules: competence (1.1), confidentiality (1.6), communication (1.4), supervision of employees and agents (5.1 and 5.3), meritorious claims (3.1), candor to the tribunal (3.3), and reasonable fees (1.5). It also warns that large language models may lack the ethical walls law offices rely on, raising conflict concerns under Rules 1.7 and 1.9.

Adoption is past the point of debate. Thomson Reuters reported in 2026 that 41% of law firms and 47% of corporate legal departments have legal teams using generative AI, up from 28% and 23% the year before.

## The 60-Minute Paper Trail Test

Set a timer. Can you produce all five of these within one hour?

1. A current, dated AI use policy that names approved tools.
2. A complete inventory of AI tools in use — including the free accounts nobody approved. Industry surveys find 52% of organizations have no formal policy governing external AI tools, and 43% cannot inventory the tools running across their workforce.
3. A signed agreement for every vendor touching regulated data, with a Business Associate Agreement where PHI is involved.
4. A written risk analysis dated within the last 12 months.
5. Training records and access logs retained to the applicable window.

If you cannot produce all five, you do not have a compliance program. You have a document and a hope.

## Where On-Premises Changes the Evidence Math

There is a second path, and it is the one we build: private AI that stays on-premises.

The compliance burden of cloud AI is largely a third-party burden. Every vendor touching regulated data adds an agreement, a data flow to document, and an incident-reporting obligation that depends on someone else's performance. A Local LLM device running inside your building removes that category of exposure for the workflows it handles — no client data crosses your network perimeter, so there is no third-party disclosure to log. For the architectural view, see [how the modern business stack fits together](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack).

| | Cloud AI with a BAA | Local LLM on-premises |
|---|---|---|
| Third parties touching client data | Vendor plus its subcontractors | None for the covered workflow |
| Vendor agreements required | Yes, per tool | Minimal for the covered workflow |
| Data-egress logging | Continuous obligation | Not applicable — no egress |
| Incident reporting | Depends on vendor performance | Within your control |
| Documentation duties | Unchanged | Unchanged |

That last row is the honest one. On-premises deployment changes what you must document; it does not eliminate documentation. You still need the policy, the inventory, and the risk analysis — you simply stop documenting someone else's exposure.

Where the record itself must hold up, Chainlink Runtime Environment work goes further. When a workflow writes to an independently verifiable record, you are not producing a self-reported log during an audit — you are producing one the other side can verify without taking your word for it, as we detailed in [the case for verifiable business processes](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-07-blockchain-verified-business-processes).

## Frequently Asked Questions

**Does Michigan have a fixed deadline to notify people after a data breach?**
Not today. MCL 445.72 requires notice without unreasonable delay, with no set day count. Pending SB 360 would impose a 45-day limit and require Attorney General notice for breaches affecting 100 or more residents.

**How long do we have to report a HIPAA breach?**
Individuals must be notified within 60 days of discovery. Breaches affecting 500 or more people are reported to HHS within 60 days; breaches under 500 go on an annual log due 60 days after the year ends.

**What documents prove our AI use is compliant?**
Five: an AI use policy, an inventory of every AI tool in use, signed vendor agreements including a BAA where PHI is involved, a written risk analysis updated at least annually, and training records with retained access logs.

**Is an AI policy by itself enough?**
No. Policy without an inventory and a written risk analysis is precisely the deficiency OCR has cited in its 2026 settlements. The policy defines the boundary; the analysis proves you checked whether it holds.

**Does using AI waive attorney-client privilege?**
Not by itself, but ABA Formal Opinion 512 requires lawyers to meet duties of competence, confidentiality, communication, supervision, and reasonable fees — and flags that some models lack the ethical walls protecting against conflicts under Rules 1.7 and 1.9.

**Is the new HIPAA Security Rule in effect?**
No. The proposed rule was published December 27, 2024 and remains proposed as of 2026. Its documentation, asset-inventory, and risk-analysis expectations are worth adopting now regardless of when the final rule lands.

**Should we just ban AI instead?**
That usually makes it worse. Blocked tools move to personal devices and personal accounts — the pattern behind findings that roughly a quarter to a third of employees have entered confidential company data into public AI tools.

**Does on-premises AI reduce our compliance obligations?**
It changes them rather than removing them. Workflows that never send data outside your building eliminate third-party disclosure documentation for that workflow; policy, inventory, and risk analysis duties remain.

## The Next Step

Run the 60-minute test this week. Most Metro Detroit businesses pass items one and five and fail the middle three — and the middle three are what matter when a regulator, a client, or an insurer asks.

If you are short on the artifacts, we build them alongside the technology: on-premises Local LLM devices for practices bound by HIPAA or attorney–client privilege, Chainlink Runtime Environment workflows where the record has to hold up, and a Professional web presence that makes your claims verifiable to the people checking. Sovereign technology is not a slogan — it is a stack you can document. Future-proof your business in the order the evidence demands. Call Agentic at (248) 313-8955 or email valuerestoration@gmail.com. We serve Metro Detroit and Oakland, Wayne, and Genesee Counties from Auburn Hills.
