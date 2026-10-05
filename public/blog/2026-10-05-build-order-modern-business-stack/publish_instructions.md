# Publish Instructions — Agentic Blog Post

**Post:** Build Order Beats Build Budget: How Metro Detroit Businesses Should Sequence a Modern Stack
**Slug:** `2026-10-05-build-order-modern-business-stack`
**Date:** 2026-10-05
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 8 — The Modern Business Stack
**Quality Gate:** see `analytics/performance_reports/2026-10-05-quality-gate.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-05-build-order-modern-business-stack/blog_final/final.md` | Repo `/public/blog/2026-10-05-build-order-modern-business-stack/final.md` |
| `feature_image.png` | `blog_posts/2026-10-05-build-order-modern-business-stack/blog_images/feature_image.png` | Repo `/public/blog/2026-10-05-build-order-modern-business-stack/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-05-build-order-modern-business-stack/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-10-05-build-order-modern-business-stack/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `/public/blog/2026-10-05-build-order-modern-business-stack/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-05-build-order-modern-business-stack/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-10-05-build-order-modern-business-stack/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-05-build-order-modern-business-stack/` for the auto-deployment script (flat 4-file archive convention). Folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename: known site issue, worked around again

`src/data/blog-posts.json` records `schema` for every Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the deploy convention publishes the file as `schema.json`. First observed 2026-09-28; still unresolved repo-side. Publish the JSON-LD under **both** filenames again to close the dangling reference. **Do not rename `schema.json`** — the site builder expects that name.

## 2. Frontmatter (verified this run)

```
---
title: "Build Order Beats Build Budget: How Metro Detroit Businesses Should Sequence a Modern Stack"
date: "2026-10-05"
description: "Businesses rarely fail at technology because they bought the wrong tools. ..."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-05. Word count: 1,963 raw / **1,689 prose-only** (11 markdown table rows account for 200 words; frontmatter 74).

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-10-05-build-order-modern-business-stack/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-05-build-order-modern-business-stack`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-31-make-your-website-convert`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-17-local-llm-device-anatomy`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-14-ai-compliance-paper-trail`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-20-chainlink-runtime-environment-cre-workflows`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack`

## 5. SEO / GEO Notes

- **Primary keywords:** modern business stack, integration tax, SaaS sprawl cost small business, build order technology roadmap, website plus AI stack
- **Secondary keywords:** private AI local LLM, Chainlink Runtime Environment, verifiable workflows, HIPAA-ready AI, professional web presence, AI tool consolidation, technology stack for professional services, AI stack Metro Detroit
- **Featured-snippet targets:** "What is a modern business stack," "What order should I build a business technology stack in," "What is the integration tax," "How many software tools does the average small business run," "Do I need a professional website before I buy AI tools," "Why do law firms hesitate to adopt AI," "What does the Chainlink Runtime Environment add to ordinary automation" — all written as direct answers under bolded FAQ questions.
- **Comparison tables (2):** the three-layer dependency map and the four-row wrong-order cost table. Tables are disproportionately quoted by AI answer engines.
- **Entity coverage for AI extraction:** integration tax, modern business stack, layer dependency, interface layer, processing layer, memory layer, SaaS sprawl, context-switching cost, data fragmentation, integration middleware, local LLM, on-premises inference, private AI, HIPAA-ready AI, attorney–client privilege, Chainlink Runtime Environment, CRE, verifiable workflows, audit trail, tamper-proof record, conversion rate benchmark, AI search referral, Metro Detroit, Oakland County, Wayne County, Genesee County.
- **Local signals:** Metro Detroit, Wayne/Oakland/Genesee Counties, Michigan, Auburn Hills (schema).
- **Honest-data posture preserved at publish — three caveats must survive editing:**
  1. Every third-party figure retains its publisher and vintage in the research report and stays attributable in the post (Deelo 2026 software-sprawl analysis; AI Workforce Weekly June 2026; 2026 conversion benchmark reporting; Secretariat/ACEDS 2026; Wolters Kluwer 2026 Future Ready Lawyer). Do not restate them as Agentic's own research.
  2. **The post deliberately concedes ground** — §"When to Stop at Layer One" tells a five-person, non-regulated, referral-driven business to buy only the website layer. Do not delete that section; the concession is the trust mechanism and protects against an unsubstantiated-claim problem.
  3. **No client outcomes or testimonials appear anywhere.** Pillar 9 case studies require verified results that are not on file and must not be fabricated. Do not add "a Troy practice saved X" language during editing.
- **Do not add guaranteed-outcome claims.** The supported claims are conditional on layer order and volume, not absolute.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the five internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (id field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
