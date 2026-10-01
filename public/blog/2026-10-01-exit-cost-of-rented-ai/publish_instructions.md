# Publish Instructions — Agentic Blog Post

**Post:** The Exit Cost of Rented AI: What Cloud Dependency Actually Costs a Metro Detroit Business Over Three Years
**Slug:** `2026-10-01-exit-cost-of-rented-ai`
**Date:** 2026-10-01
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 4 — Sovereign Technology & Data Ownership
**Quality Gate:** see `analytics/performance_reports/quality_gate_2026-10-01.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-01-exit-cost-of-rented-ai/blog_final/final.md` | Repo `/public/blog/2026-10-01-exit-cost-of-rented-ai/final.md` |
| `feature_image.png` | `blog_posts/2026-10-01-exit-cost-of-rented-ai/blog_images/feature_image.png` | Repo `/public/blog/2026-10-01-exit-cost-of-rented-ai/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-01-exit-cost-of-rented-ai/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-10-01-exit-cost-of-rented-ai/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `/public/blog/2026-10-01-exit-cost-of-rented-ai/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-01-exit-cost-of-rented-ai/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-10-01-exit-cost-of-rented-ai/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-01-exit-cost-of-rented-ai/` for the auto-deployment script (the flat 4-file archive convention is unchanged; the schema alias exists only in the repo). Folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename: known site issue, worked around again this post

`src/data/blog-posts.json` records `schema` for **every** Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the deploy convention publishes the file as `schema.json`. First observed 2026-09-28 (recorded path returned 404 for that post and for 2026-09-24 while `schema.json` returned 200). Publish the JSON-LD under **both** filenames again to close the dangling reference for this post. **Do not rename `schema.json`** — the site builder expects that name. The underlying mismatch remains a repo-side fix that should be applied brand-wide.

## 2. Frontmatter (verified this run)

```
---
title: "The Exit Cost of Rented AI: What Cloud Dependency Actually Costs a Metro Detroit Business Over Three Years"
date: "2026-10-01"
description: "Cloud AI looks cheap because you only ever see one line of the bill. ..."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-01. Word count: 1,994 raw / **1,752 prose-only** (15 markdown table rows account for 174 words) — see quality gate for the length note.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-10-01-exit-cost-of-rented-ai/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-01-exit-cost-of-rented-ai`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-17-local-llm-device-anatomy`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-14-ai-compliance-paper-trail`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-24-sovereign-technology-data-ownership`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-31-make-your-website-convert`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack`

## 5. SEO / GEO Notes

- **Primary keywords:** cloud AI dependency cost, on-premises AI vs cloud cost, AI vendor lock-in, local LLM total cost of ownership, private AI for small business
- **Secondary keywords:** cloud AI cost overruns, hidden cloud AI costs, break-even on-premises AI, local LLM payback period, HIPAA-ready AI, local LLM for law firms, shadow AI data leakage, sovereign technology, data ownership, model deprecation risk
- **Featured-snippet targets:** "How much does cloud AI cost a small business," "When does an on-premises LLM pay for itself," "What are the hidden costs of cloud AI," "What does it cost to switch AI vendors," "Is it cheaper to run AI locally or use an API," "Is shadow AI a real risk for a small practice" — all written as direct answers under bolded FAQ questions.
- **Comparison tables (2):** the three-year TCO model and the six-row break-even table. Tables are disproportionately quoted by AI answer engines.
- **Entity coverage for AI extraction:** total cost of ownership, break-even point, AI vendor lock-in, model API, prompt library, evaluation harness, fine-tune, caching strategy, observability, billing integration, retry overhead, payload bloat, egress fee, shadow AI, data loss prevention (DLP), IBM Cost of a Data Breach 2026, HHS Office for Civil Rights, protected health information, business associate agreement, attorney-client privilege, American Bar Association, sovereign technology, local LLM, on-premises inference, Metro Detroit, Oakland County, Wayne County, Genesee County.
- **Local signals:** Metro Detroit, Oakland/Wayne/Genesee Counties, Auburn Hills, Troy, Rochester.
- **Honest-data posture preserved at publish — four caveats must survive editing:**
  1. The three-year TCO model is **illustrative**, with its assumptions stated in the post. It is not a quote, a client result, or a promise. Do not harden it into "what our clients save."
  2. **The post deliberately concedes ground** — below roughly one million tokens a day, and for bursty or sub-10%-utilization workloads, cloud is cheaper. Do not delete §"When Renting Is Genuinely the Right Answer" or the top rows of the break-even table; the concession is the trust mechanism, and it also protects against an unsubstantiated-claim problem.
  3. Every third-party figure retains its publisher and vintage inline (IBM *Cost of a Data Breach 2026*; HHS OCR 2025 breach count; Code Ninety endpoint telemetry across 420,000+ devices, audit window Dec 2025–Jan 2026; BlackFog/Sapio C-suite figure). Do not strip attributions or restate them as Agentic's own research.
  4. **No client outcomes appear anywhere.** Pillar 9 case studies require verified results that are not on file and must not be fabricated. Do not add "a Troy practice saved X" language during editing.
- **Do not add guaranteed-outcome claims.** "Significantly cheaper" is unsupported by the post's own table; the supported claims are volume-conditional.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the five internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (id field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
