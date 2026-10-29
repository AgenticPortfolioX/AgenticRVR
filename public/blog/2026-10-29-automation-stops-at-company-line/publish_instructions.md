# Publish Instructions — Agentic Blog Post

**Post:** Your Automation Stops at the Company Line: Why Multi-Party Workflows Still Run on Email
**Slug:** `2026-10-29-automation-stops-at-company-line`
**Date:** 2026-10-29
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 3 — CRE / Chainlink Verified Automation
**Quality Gate:** see `analytics/performance_reports/quality_gate_2026-10-29.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-29-automation-stops-at-company-line/blog_final/final.md` | Repo `public/blog/2026-10-29-automation-stops-at-company-line/final.md` |
| `feature_image.png` | `blog_posts/2026-10-29-automation-stops-at-company-line/blog_images/feature_image.png` | Repo `public/blog/2026-10-29-automation-stops-at-company-line/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-29-automation-stops-at-company-line/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `public/blog/2026-10-29-automation-stops-at-company-line/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `public/blog/2026-10-29-automation-stops-at-company-line/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-29-automation-stops-at-company-line/publish_instructions/publish_instructions.md` | Repo `public/blog/2026-10-29-automation-stops-at-company-line/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-29-automation-stops-at-company-line/` for the auto-deployment script (flat 4-file archive convention). The folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename

`src/data/blog-posts.json` records `schema` for every Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the site builder expects `schema.json`. Publish the JSON-LD under **both** filenames. Do not rename `schema.json`.

## 2. Frontmatter (verified this run)

```
---
title: "Your Automation Stops at the Company Line: Why Multi-Party Workflows Still Run on Email"
date: "2026-10-29"
description: "Inside your own walls, automation is enforceable. Across a company line, it can only be asked for — which is why suppliers, contractors, and partners still reconcile by spreadsheet. Here is what changes when both sides can verify the same fact on the Chainlink Runtime Environment."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-29. Word count: **2,027 raw / 1,686 prose-only** (270 table words, 71 frontmatter words) — inside the Agentic 1,300–1,700 prose band.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it).
2. Push `feature_image.png` to `/public/blog/2026-10-29-automation-stops-at-company-line/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json`, plus the alias copy at `sdira_compliance_schema.json`. Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-29-automation-stops-at-company-line`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected. Expect exactly one `script[type="application/ld+json"]` block on the rendered page.
7. FAQ parity check: the page body carries **5** H3 FAQ questions and the FAQPage schema carries the same **5**. Do not add a sixth to the schema without adding it to the body.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-20-chainlink-runtime-environment-cre-workflows` (verifiable workflows definition, Pillar 3)
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-28-cre-automation-functions-migration` (Automation sunset deadlines, Pillar 3)
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-13-hipaa-local-llm-private-ai` (private AI stays on-premises, Pillar 2)
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-15-hire-or-automate-staffing-math-2027` (sovereign technology layer, Pillar 10)
- `https://agenticportfoliox.github.io/AgenticRVR/contact` (closing CTA)

External citations (primary sources and statute text, not aggregators):
- `https://docs.chain.link/cre/overview` (Workflow DON, Capability DON, BFT consensus)
- `https://docs.chain.link/cre/capabilities/confidential-http-ts` (Confidential HTTP, Vault DON, enclave)
- `https://docs.chain.link/cre/guides/operations/deploying-workflows` (Workflow Registry control plane)
- `https://legislature.mi.gov/Laws/MCL?objectName=MCL-450-837` (UETA — legal effect of electronic records)
- `https://legislature.mi.gov/Laws/MCL?objectName=MCL-450-839` (UETA — attribution by security procedure)
- `https://legislature.mi.gov/Laws/MCL?objectName=MCL-450-840` (UETA — effect of a changed record)
- `https://legislature.mi.gov/Laws/MCL?objectName=MCL-570-1110` (Construction Lien Act — sworn statements)
- `https://www.pymnts.com/blockchain/2026/bottomline-partners-with-chainlink-to-connect-600-banks-to-blockchain-settlement/` (Bottomline scale + CRE coordination)
- `https://www.bottomline.com/newsroom/press-releases/bottomline-launches-global-pay-connect-provide-financial-institutions-future-proofed-payment-messaging-ecosystem` (launch date, ISO 20022)

## 5. SEO / GEO Notes

- **Primary keyword:** cross-company workflow automation
- **Primary commercial keyword:** Chainlink Runtime Environment consulting
- **Secondary keywords:** multi-party workflow automation, verifiable workflows, consensus computing, confidential HTTP, DON-signed report, construction draw schedule automation, construction lien sworn statement, Michigan Uniform Electronic Transactions Act, verifiable workflow automation Michigan
- **Featured-snippet targets:** "What is cross-company workflow automation," "Why does automation break down between two companies," "What is the Chainlink Runtime Environment in plain terms," "How do you keep data private in a multi-party workflow," "Do electronic records hold up in Michigan" — each answered in 2–3 sentences directly under the H3 and mirrored in the FAQPage schema.
- **Tables (2 content tables):** (a) the four parts every cross-company workflow needs — trigger / shared fact / rule / proof, with who owns each today; (b) eight workflows with their shared fact and a yes/no verdict. Table (b) is the extractable asset: existing draw-management content sells a centralizing platform and never gives a go/no-go test.
- **Highest-quotability insights:** (a) automation inside one company is enforceable, across a company line it can only be asked for — the blocker is a control gap, not a technology gap; (b) the shared fact is the expensive part of every cross-company process and no single company can own it; (c) Confidential HTTP is what makes multi-party workflows possible between competitors — prove the outcome, keep the pricing; (d) Michigan's UETA already gives weight to a record produced under an agreed security procedure (MCL 450.839) and lets the conforming party void an altered record (MCL 450.840) — the statute cannot create the record for you.
- **Entity coverage for AI extraction:** Chainlink Runtime Environment, Workflow DON, Capability DON, Byzantine Fault Tolerant consensus, WASM, Go, TypeScript, cron trigger, HTTP trigger, onchain event trigger, DON-signed report, Confidential HTTP, Vault DON, secure enclave, Workflow Registry, IReceiver, ISO 20022, CCIP, Bottomline Global Pay Connect, Michigan Uniform Electronic Transactions Act, MCL 450.837 / 450.839 / 450.840, Michigan Construction Lien Act, MCL 570.1110, sworn statement, draw schedule, lien waiver, Metro Detroit, Oakland / Wayne / Genesee County, Renowned Value Restoration LLC.
- **Local signals:** Warren mechanical contractor in the opening; Michigan Construction Lien Act sworn statements in the draw section; UETA sections in the legal section; Oakland / Wayne / Genesee plus Auburn Hills address and weekday hours in LocalBusiness schema; Metro Detroit in title-adjacent copy and closing.
- **Freshness hooks:** the Bottomline × Chainlink launch (2026-09-17) and the current CRE documentation (including Confidential HTTP and the onchain Workflow Registry) are cited as live sources; the post's decision rule is not available in the ranking set, which is entirely tool-list and platform-vendor content.

### Honest-data posture preserved at publish — these caveats must survive editing

1. **No client outcomes, no invented case study.** The opening vignette is a described pattern, not a named client, and no dollar savings are claimed. Do not add "an Oakland County contractor cut draws from 14 days to 2."
2. **The Bottomline figures are attributed, not claimed.** $16T+ annual payments, 600+ banks, 1,200 financial institutions, ~15% of internal cross-border Swift traffic come from Bottomline/PYMNTS/Chainlink Today coverage of the 2026-09-17 launch. They are not Agentic's numbers and must not be restated as such.
3. **The post concedes limits explicitly. Do not delete:** (a) not every workflow needs this — single-owner processes are cheaper automated conventionally; (b) where a trusted neutral already holds the truth, use the neutral; (c) determinism rules out some logic; (d) gas and execution cost can exceed the value on low-frequency, low-value processes.
4. **Legal statements are narrow and cited by section.** No legal advice framing, no claim that a smart-contract record is automatically admissible or dispositive. The UETA text speaks for itself; the post adds only that a contract must say the record governs.
5. **No ROI percentage is quoted.** The pilot metric is described qualitatively ("one disputed process, one measurable result") because no verified Agentic measurement exists.
6. **Chainlink documentation is described as it currently reads.** If CRE's capability set changes, re-check `docs.chain.link/cre/overview` before republishing.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the four internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (`id` field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
- [ ] Confirm exactly one `script[type="application/ld+json"]` block on the rendered page
- [ ] Confirm FAQ count parity: 5 in the body, 5 in the schema
