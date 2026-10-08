# Publish Instructions — Agentic Blog Post

**Post:** One Page Can't Do Five Jobs: The Website Architecture That Gets Metro Detroit Businesses Found
**Slug:** `2026-10-08-one-page-cant-do-five-jobs-website-architecture`
**Date:** 2026-10-08
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 6 — Website & Conversion Strategy
**Quality Gate:** see `analytics/performance_reports/2026-10-08-quality-gate.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-08-one-page-cant-do-five-jobs-website-architecture/blog_final/final.md` | Repo `/public/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture/final.md` |
| `feature_image.png` | `blog_posts/2026-10-08-one-page-cant-do-five-jobs-website-architecture/blog_images/feature_image.png` | Repo `/public/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-08-one-page-cant-do-five-jobs-website-architecture/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `/public/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-08-one-page-cant-do-five-jobs-website-architecture/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-08-one-page-cant-do-five-jobs-website-architecture/` for the auto-deployment script (flat 4-file archive convention). Folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename: known site issue, worked around again

`src/data/blog-posts.json` records `schema` for every Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the deploy convention publishes the file as `schema.json`. First observed 2026-09-28; still unresolved repo-side. Publish the JSON-LD under **both** filenames again to close the dangling reference. **Do not rename `schema.json`** — the site builder expects that name.

## 2. Frontmatter (verified this run)

```
---
title: "One Page Can't Do Five Jobs: The Website Architecture That Gets Metro Detroit Businesses Found"
date: "2026-10-08"
description: "The median dedicated page converts at 4.02% against 2.35% for a general one, and search engines rank pages, not businesses. ..."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-08. Word count: 1,947 raw / **1,694 prose-only** (6 markdown table rows account for 181 words; frontmatter 72) — within the Agentic ≤1,700 prose ceiling.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-17-landing-page-to-real-website`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-31-make-your-website-convert`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-24-website-build-quote-checklist`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack`

## 5. SEO / GEO Notes

- **Primary keywords:** how many pages should a website have, website architecture, service pages, landing page vs website, local SEO site structure
- **Secondary keywords:** one page per service, service-area pages, location pages, thin content, internal linking, crawl depth, orphan pages, AI search citations, Google AI Overviews, FAQ schema, professional website builder Metro Detroit
- **Featured-snippet targets:** "How many pages should a small business website have," "Does every service need its own page," "When do I need service-area or location pages," "Can too many pages hurt my SEO," "What pages does every local business website need," "How does site architecture affect AI search like ChatGPT and Google AI Overviews," "Do I need internal links between my pages" — all written as direct answers under bolded FAQ questions.
- **Tables (1) and lists (1):** the six-row "one page, one job" page-inventory table and the five-step page audit. Tables and numbered lists are disproportionately quoted by AI answer engines.
- **Entity coverage for AI extraction:** website architecture, site structure, service page, dedicated landing page, services hub, service-area page, location page, query-to-page matching, thin content, internal linking, link equity, crawl depth, orphan page, topical authority, FAQ schema, Google AI Overviews, AI search citation, Google Business Profile, local SEO, conversion rate benchmark, Metro Detroit, Oakland County, Wayne County, Genesee County.
- **Local signals:** Metro Detroit, Wayne/Oakland/Genesee Counties, Michigan, Auburn Hills (schema).
- **Honest-data posture preserved at publish — three caveats must survive editing:**
  1. Every third-party figure retains its publisher and vintage in the research report and stays attributable in the post (Scalify 2026; Digital Applied 2026; BrightLocal 2026; Network Solutions 2026; Whitespark Local Search Ranking Factors; Hobo 2026; Leapd 2026; quickseo.ai 2026). Do not restate them as Agentic's own research.
  2. **The post deliberately concedes ground** — §"When One Page Is Actually Enough" tells a single-service, referral-driven business that one excellent page can be exactly right. Do not delete that section; the concession is the trust mechanism and protects against an unsubstantiated-claim problem.
  3. **No client outcomes or testimonials appear anywhere.** Pillar 9 case studies require verified results that are not on file and must not be fabricated. Do not add "a Troy practice gained X% traffic" language during editing.
- **Do not add guaranteed-outcome claims.** The supported claims are conditional on page structure and volume, not absolute.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the four internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (id field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
