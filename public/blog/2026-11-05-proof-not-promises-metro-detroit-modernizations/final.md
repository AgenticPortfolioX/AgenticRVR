---
title: "Proof, Not Promises: Three Metro Detroit Modernizations and What You Can Verify Yourself"
date: "2026-11-05"
description: "Three anonymized engagements — a website build, a local LLM deployment, and a Chainlink-verified workflow — each ending in an artifact the client holds, not a dashboard the vendor owns. Plus the five questions that separate a real case study from a testimonial."
category: "Agentic Workflows"
author: "Agentic"
---
# Proof, Not Promises: Three Metro Detroit Modernizations and What You Can Verify Yourself

*Published: November 5, 2026 | By Agentic*

---

Case studies in this industry are usually written to be admired, not checked. A logo wall, a handshake photo, "300% growth," and no way to confirm any of it.

The MIT NANDA research group reviewed more than 300 disclosed AI initiatives alongside 153 senior leaders and found that **95 percent of organizations report no measurable return** from generative AI, with only about 5 percent of integrated pilots extracting real value — and traced the failure to integration and process, not to model quality ([Fortune, August 2025](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo)). Gartner puts the share of a B2B purchase journey spent with all potential suppliers combined at **17 percent**, roughly 80 percent of it self-directed. Buyers decide before the call. What you publish is most of the pitch.

So this is not a testimonial post. Three engagements, one per service line, businesses anonymized at client request. No invented percentages — where a number appears, it is either a dated third-party study or something the client pulls from their own systems.

## Case One: A Website Doing Five Jobs and None of Them Well

A mechanical contractor, 30 years in business, Oakland County, six trucks, one page.

Diagnosis: not a traffic problem — Search Console showed impressions for service queries. The problem was proof. A buyer arrives from a county-level search, sees a single page built in 2014, and forms a judgment in seconds. Stanford's Web Credibility Project found that "design look" appeared in **46.1 percent** of the comments participants made while judging site credibility — more than any other single factor ([Fogg et al., ACM](https://dl.acm.org/doi/pdf/10.1145/997078.997097)). The page was not losing on rank. It was losing in the first second after arrival.

What was built: twenty-four pages, not one. Service pages per trade, county pages with genuine local content, a credentials page carrying licenses and insurance, project pages with photographs of actual work, and a quote path that captures trade and county in the first two fields. Structured data so the business can be read by both a browser and an answer engine.

What the client can verify: indexed page count in Search Console, branded query volume, call and direction actions in the Business Profile, form completions in GA4 with the source tagged. All of it in accounts the contractor owns.

Failure mode avoided: treating the rebuild as a redesign. A prettier one-pager would have changed the photography and nothing else. [The architecture was the fix](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture).

Elapsed: six weeks from kickoff to cutover.

## Case Two: A Prohibition With No Substitute

A 14-person law firm in Wayne County banned consumer AI for confidentiality reasons, then watched attorneys use it on personal phones in the parking lot.

Law360 Pulse's 2026 survey found **70 percent of law firm attorneys use AI at least weekly**, with 47 percent using it three or more times a week — up from 27 percent the year before — while **34 percent still report no AI training at all** ([Law360, March 2026](https://www.law360.com/articles/2454609/what-attorneys-really-think-about-ai)). The tools are already in the building. A policy that only prohibits does not remove them; it removes the audit trail.

Diagnosis: a policy problem that requires a substitute, not a stronger memo.

What was built: a single desktop local LLM device, about the size of a hardcover book, on the shelf beside the network switch. Private AI that stays on-premises means exactly this — no vendor endpoint, no tenant, no copy of a client file outside the office. Retrieval was scoped to matter templates and the firm's own precedent library rather than the entire document management system, because narrow retrieval produces better answers. A prompt library covered the four tasks the firm does in volume: intake summarization, chronology building, first-draft correspondence, deposition outline scaffolding. Then an evaluation set of 40 real matters with known-good outcomes, run before the device went live.

What the client can verify: the evaluation score on their own matters, a network egress log showing zero outbound traffic from the device, and time-to-first-draft on those four tasks measured before and after. The eval set is the artifact — it is the difference between "the AI works" and "the AI works on our work."

Failure mode avoided: buying hardware and calling it a deployment. [Sizing to the workload](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing) is half the job; the other half is proving output before attorneys are asked to trust it.

Elapsed: five weeks, two of them the eval set.

## Case Three: Three Companies, Three Copies of the Truth

A distributor, a freight broker, and a lender reconciling the same shipment. Each kept its own record. Every month, someone spent two days on a call comparing spreadsheets and arguing about whose system was right. Exceptions lived in email.

Diagnosis: not a speed problem — a trust problem. When three organizations each hold their own version of what happened, the workflow's real cost is the reconciliation, and its real risk is the version that wins by being loudest.

What was built: a CRE workflow in the Chainlink Runtime Environment, using a trigger-and-callback structure compiled to WebAssembly and run across a Workflow DON, invoking capability DONs for external calls and reaching Byzantine fault tolerant consensus on each result. Every step carries cryptographic proof that it occurred as defined ([Chainlink docs](https://docs.chain.link/cre)). The documents themselves never left anyone's system; what went onchain was a hash and an attestation ([the architecture](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture)).

What the client can verify: the attestation log, auditable by all three parties without trusting any one of them. Exception queue volume month over month. The age of the oldest open dispute.

Failure mode avoided: automating the happy path and leaving exceptions on email — [the pattern that quietly rebuilds the old process](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-29-automation-stops-at-company-line).

Elapsed: nine weeks, most of it mapping counterparties' definitions.

## What the Three Had in Common

| Bottleneck | Service | Artifact the client holds | Metric they own |
|---|---|---|---|
| No proof of who they are | Professional web presence | Indexed pages + owned analytics | Branded search, quote completions |
| No lawful way to use AI | Local LLM device | Evaluation set + egress log | Eval score, time-to-first-draft |
| No shared version of events | CRE workflow | Attestation log | Exception volume, dispute age |

Three sectors, one structural pattern. What decided success was not the technology choice:

1. **A named owner.** Not a committee. One person whose job included the project after launch.
2. **A baseline taken before the build.** Index count, evaluation score, exception volume. Without a number from before, "better" is an opinion.
3. **A written definition of done with a date.** Not "a modern website" — twenty-four pages, indexed, quote path live, by a specific Friday.

## How to Read Any Vendor's Case Study

Five questions. Ask them in the first meeting and watch what happens.

1. **What is the artifact?** Real work leaves something behind: a page inventory, an evaluation set, an attestation log. If the answer is a slide, there is no artifact.
2. **Who measured it?** A vendor dashboard is not evidence. Evidence lives in an account the client controls.
3. **What was the baseline?** No "before" number means no result, only an impression.
4. **What failed?** Every real engagement has a failure. A vendor reporting none is either new or editing.
5. **Would that client take your call?** Where names are withheld for confidentiality, ask whether the client would speak off the record.

## The Honest Limits

Three engagements is not a study. Names are withheld and details rounded to protect confidentiality. No lift percentages are claimed: a website's lead volume depends on the market, the season, and the follow-up, and a reconciliation saving is the client's number to publish, not ours.

One of these did not go cleanly. The firm's device sat idle for almost two months after install, because the attorneys had a policy and a machine but nobody owned the workflow. It started producing the week a named person was handed the evaluation set and the authority to change the prompt library.

Not every process belongs onchain. Where one company owns both ends, a database is cheaper, simpler, and easier to defend. Verifiable workflows earn their cost when the parties do not fully trust one another — which is precisely when email becomes the system of record.

## Frequently Asked Questions

### What does a modernization engagement cost?

Website builds are scoped by page count and complexity; local LLM deployments by device tier and workload, where a capable desktop device runs roughly $4,700 to $5,500 plus support; CRE work by counterparties and exception volume. All three are quoted after a diagnosis, not before.

### How long before we see anything?

Six weeks for a website build, five for a single local LLM deployment including its evaluation set, nine for a multi-party verified workflow. The first visible change usually arrives sooner: the day the baseline gets measured.

### Do you publish named client case studies?

Rarely. Practices and healthcare clients will not attach a name to a piece describing their internal systems, and asking damages the relationship. The trade is verification instead — artifacts a client can show, references off the record, and numbers the client publishes if they choose.

### We have all three problems. What do we fix first?

Whichever is losing money today. If prospects cannot find or believe you, the website is the bottleneck. If staff already use consumer AI on client data, the exposure is the bottleneck and the only one with a legal clock on it — HIPAA-ready AI is a design constraint, not a badge. Workflow verification usually comes third, because it depends on the other two being defined.

### How do we check a vendor's claims before we hire?

Ask for the artifact, the baseline, and the account holding the measurement. Then ask what failed. A vendor who answers all three in one meeting is describing work they did; one who cannot is describing work they would like to do.

## The Evidence You Keep

Every engagement above ends the same way: the client holds something that outlives the invoice. Pages they can index, an evaluation set they can re-run, an attestation log anyone can verify.

That is the argument for sovereign technology in one line — the proof stays with the business. Future-proof your business by seeing what your own baseline looks like: [start with a diagnosis](https://agenticportfoliox.github.io/AgenticRVR/contact) or call **(248) 313-8955**.

*Agentic (Renowned Value Restoration LLC) — professional websites, private AI, and verified automation for Metro Detroit businesses.*
