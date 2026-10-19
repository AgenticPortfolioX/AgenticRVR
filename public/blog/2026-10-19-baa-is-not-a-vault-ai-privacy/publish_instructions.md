# Publish Instructions — Agentic Blog Post

**Post:** The BAA Is Not a Vault: What HIPAA and Attorney-Client Privilege Actually Require From Your AI
**Slug:** `2026-10-19-baa-is-not-a-vault-ai-privacy`
**Date:** 2026-10-19
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 5 — AI Privacy & Compliance Education
**Quality Gate:** see `analytics/performance_reports/2026-10-19-baa-is-not-a-vault-quality-gate.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-19-baa-is-not-a-vault-ai-privacy/blog_final/final.md` | Repo `/public/blog/2026-10-19-baa-is-not-a-vault-ai-privacy/final.md` |
| `feature_image.png` | `blog_posts/2026-10-19-baa-is-not-a-vault-ai-privacy/blog_images/feature_image.png` | Repo `/public/blog/2026-10-19-baa-is-not-a-vault-ai-privacy/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-19-baa-is-not-a-vault-ai-privacy/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-10-19-baa-is-not-a-vault-ai-privacy/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `/public/blog/2026-10-19-baa-is-not-a-vault-ai-privacy/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-19-baa-is-not-a-vault-ai-privacy/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-10-19-baa-is-not-a-vault-ai-privacy/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-19-baa-is-not-a-vault-ai-privacy/` for the auto-deployment script (flat 4-file archive convention). The folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename: known site issue, worked around again

`src/data/blog-posts.json` records `schema` for every Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the deploy convention publishes the file as `schema.json`. First observed 2026-09-28; still unresolved repo-side. Publish the JSON-LD under **both** filenames again to close the dangling reference (5-blob tree). **Do not rename `schema.json`** — the site builder expects that name.

## 2. Frontmatter (verified this run)

```
---
title: "The BAA Is Not a Vault: What HIPAA and Attorney-Client Privilege Actually Require From Your AI"
date: "2026-10-19"
description: "A signed business associate agreement allocates responsibility for protected health information. It does not keep that information inside your building — and for law firms, no such agreement exists at all. Here is what HIPAA and ABA Formal Opinion 512 actually require."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-19. Word count: **2,028 raw / 1,690 prose-only** (252 table words, 86 frontmatter words) — inside the Agentic 1,300–1,700 prose band.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-10-19-baa-is-not-a-vault-ai-privacy/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). Also publish the alias copy at `sdira_compliance_schema.json` so the registry's recorded path resolves. Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-19-baa-is-not-a-vault-ai-privacy`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected. Expect one `script[type="application/ld+json"]` block on the rendered page.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-14-ai-compliance-paper-trail`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture`
- `https://agenticportfoliox.github.io/AgenticRVR/contact` (closing CTA)

## 5. SEO / GEO Notes

- **Primary keyword:** business associate agreement AI
- **Secondary keywords:** HIPAA BAA AI vendor, can I use AI with PHI, attorney-client privilege AI, ABA Formal Opinion 512, HIPAA Security Rule final rule 2027, local LLM HIPAA, on-premises AI for healthcare, private AI Metro Detroit
- **Featured-snippet targets:** "Does a signed BAA make cloud AI HIPAA-compliant," "Can we use AI on patient information if the vendor signs a BAA," "Do law firms need a BAA to use AI," "Is a local LLM automatically HIPAA-compliant," "What does the proposed HIPAA Security Rule change, and when," "What is the cheapest defensible path for a small practice" — all written as direct 2–3 sentence answers under H3 FAQ questions.
- **Tables (2 content tables, 13 markdown rows total):** the covers/does-not-cover table (what a BAA allocates versus what it leaves untouched) and the cloud-with-BAA versus local-LLM comparison (8 decision factors). The comparison table is the extractable asset — no competitor publishes custody, training, subprocessor, audit-evidence, breach-notification, cost, and failure-mode side by side.
- **Highest-quotability insight:** HHS's cloud guidance states that the HIPAA Rules do not expressly require a provider to document its security practices or permit customer audits. Most BAA content assumes audit rights come with the agreement. This post corrects that, which is exactly the kind of precise fix answer engines reuse.
- **Entity coverage for AI extraction:** business associate agreement, business associate, covered entity, protected health information, ePHI, HHS Office for Civil Rights, 45 CFR 164.504(e), 164.502(e), 164.308(b)(1), 164.410, conduit exception, subcontractor flow-down, HIPAA Security Rule, Security Rule NPRM, OMB regulatory agenda, RIN 0945-AA22, multifactor authentication, network segmentation, penetration testing, risk analysis, technology asset inventory, data-flow map, ABA Formal Opinion 512, ABA Model Rules 1.1 / 1.6 / 1.4 / 1.5, informed consent, self-learning model, attorney-client privilege, Michigan Identity Theft Protection Act, MCL 445.61, Senate Bill 359, Local LLM, private AI that stays on-premises, HIPAA-ready AI, Chainlink Runtime Environment, verifiable workflows, Metro Detroit, Oakland/Wayne/Genesee County.
- **Local signals:** Metro Detroit (intro, law-firm section, build section, closing), Oakland / Wayne / Genesee County, Michigan's absent comprehensive privacy law and the Identity Theft Protection Act's penalty schedule, Auburn Hills address and hours (schema).
- **Freshness hooks:** OMB's July 2027 final-rule date (reported 2026-07-08), the January 6, 2025 Federal Register publication, ABA Formal Opinion 512 (2024-07-29), and Michigan SB 359's current committee status. All dated, authoritative, and not yet absorbed by the local business SERP.

### Honest-data posture preserved at publish — these caveats must survive editing

1. **The Security Rule update is proposed, not final.** Every requirement in the post is labeled as what the proposed rule *would* do. The July 2027 date comes from OMB's regulatory agenda and is explicitly described as non-binding. Do not rewrite it as current law.
2. **The post deliberately concedes ground five times. Do not delete:** (a) a BAA is mandatory and valuable — it is a liability map, not a fraud; (b) there is no encryption-key exemption, so cloud AI is not a loophole; (c) a local LLM is **not** automatically compliant — possession is not compliance; (d) a vendor with remote support access can recreate the third party; (e) cloud AI is not unlawful.
3. **No client outcomes or testimonials appear anywhere.** Pillar 9 case studies require verified results that are not on file and must not be fabricated. Do not add "a Troy practice cut its exposure by X" language during editing.
4. **No legal advice framing.** The post describes regulatory requirements and the ABA's ethics guidance; it does not tell a firm what its own counsel would conclude. Do not add "this satisfies your obligation" language.
5. **Michigan penalty figures** ($250 per failure, $750,000 per-breach cap) come from secondary summaries of the Identity Theft Protection Act — if the statute link is added during editing, verify against MCL 445.72 before publishing the figures.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the two internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (id field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
