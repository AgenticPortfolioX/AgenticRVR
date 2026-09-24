# Publish Instructions — Agentic Blog Post

**Post:** The Quote Tells You Everything: What a Professional Website Build Includes and What a Cheap One Skips
**Slug:** `2026-09-24-website-build-quote-checklist`
**Date:** 2026-09-24
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 1 — Professional Website Building
**Quality Gate:** 137/140 (97.9%) — READY FOR PUBLICATION (report: `analytics/performance_reports/quality_gate_2026-09-24.md`)

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-09-24-website-build-quote-checklist/blog_final/final.md` | Repo `/public/blog/2026-09-24-website-build-quote-checklist/final.md` |
| `feature_image.png` | `blog_posts/2026-09-24-website-build-quote-checklist/blog_images/feature_image.png` | Repo `/public/blog/2026-09-24-website-build-quote-checklist/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-09-24-website-build-quote-checklist/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-09-24-website-build-quote-checklist/schema.json` (renamed on deploy) |
| `publish_instructions.md` | `blog_posts/2026-09-24-website-build-quote-checklist/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-09-24-website-build-quote-checklist/publish_instructions.md` |

Archived flat copies of all four live in `blogged/2026-09-24-website-build-quote-checklist/` for the auto-deployment script. Folder name includes the slug — date-only folder names are not found by the deployment script.

## 2. Frontmatter (verified this run)

```
---
title: "The Quote Tells You Everything: What a Professional Website Build Includes and What a Cheap One Skips"
date: "2026-09-24"
description: "Two quotes, one word in common — 'website.' The difference lives in six line items most quotes never name. ..."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-09-24.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-09-24-website-build-quote-checklist/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-24-website-build-quote-checklist`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-17-landing-page-to-real-website`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-31-make-your-website-convert`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack`

## 5. SEO / GEO Notes

- **Primary keywords:** professional website builder Metro Detroit, what is included in a website build, website design cost Michigan 2026, custom website vs template
- **Secondary keywords:** how to choose a web developer, who owns my website, agency lock-in, Core Web Vitals 2026 thresholds, WCAG 2.2 AA compliance, ADA website lawsuit risk, AI crawler JavaScript rendering, structured data business website
- **Featured-snippet targets:** "what is included in a professional website build," the 2026 cost question, the Core Web Vitals thresholds, the accessibility question, website ownership, server-side rendering for AI search, and build timeline — all written as direct answers under bolded FAQ questions.
- **Comparison tables (5):** the six quote line items, Core Web Vitals thresholds, the ownership table, 2026 cost tiers, and the implicit question-to-failure-mode mapping. Tables are disproportionately quoted by AI answer engines.
- **Entity coverage for AI extraction:** Core Web Vitals, LCP, INP, CLS, Chrome UX Report, WCAG 2.2 Level AA, WebAIM Million, ADA Title III, Seyfarth Shaw, UsableNet, DreamHost 2026 Local Business Trust Index, Google Business Profile, schema.org structured data, server-side rendering, client-side rendering, domain registrar, CMS admin.
- **Local signals:** Metro Detroit, Oakland/Wayne/Genesee Counties, Auburn Hills.
- **Honest-data posture preserved at publish:** every statistic carries its source and year inline. Three caveats must survive editing: (1) WebAIM's own statement that automated detection is partial and absence of detected errors does not prove conformance; (2) Seyfarth's 2025 count of 3,117 is website-accessibility cases specifically while UsableNet's ~6,176 is a projection from a combined federal-and-state dataset — do not merge them into one figure; (3) settlement benchmarks are labeled directional, not predictive. Do not add any claim of guaranteed rankings or invented client results.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the three internal posts return 200
