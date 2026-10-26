# Publish Instructions — Agentic Blog Post

**Post:** The Cutover: What to Protect When You Finally Replace the Landing Page
**Slug:** `2026-10-26-the-cutover-replace-landing-page`
**Date:** 2026-10-26
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 1 — Professional Website Building
**Quality Gate:** see `analytics/performance_reports/quality_gate_2026-10-26.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-26-the-cutover-replace-landing-page/blog_final/final.md` | Repo `public/blog/2026-10-26-the-cutover-replace-landing-page/final.md` |
| `feature_image.png` | `blog_posts/2026-10-26-the-cutover-replace-landing-page/blog_images/feature_image.png` | Repo `public/blog/2026-10-26-the-cutover-replace-landing-page/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-26-the-cutover-replace-landing-page/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `public/blog/2026-10-26-the-cutover-replace-landing-page/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `public/blog/2026-10-26-the-cutover-replace-landing-page/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-26-the-cutover-replace-landing-page/publish_instructions/publish_instructions.md` | Repo `public/blog/2026-10-26-the-cutover-replace-landing-page/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-26-the-cutover-replace-landing-page/` for the auto-deployment script (flat 4-file archive convention). The folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename

`src/data/blog-posts.json` records `schema` for every Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the site builder expects `schema.json`. Publish the JSON-LD under **both** filenames (5-blob tree) to close the dangling reference. Do not rename `schema.json`.

## 2. Frontmatter (verified this run)

```
---
title: "The Cutover: What to Protect When You Finally Replace the Landing Page"
date: "2026-10-26"
description: "Replacing a landing page with a real website does not cost rankings — an unplanned cutover does. Google's own site-move rules, the redirect map, the performance baseline, and the 30-day watch that keep an established Metro Detroit business from losing what it already built."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-26. Word count: **2,096 raw / 1,697 prose-only** (333 table words, 66 frontmatter words) — inside the Agentic 1,300–1,700 prose band.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it).
2. Push `feature_image.png` to `/public/blog/2026-10-26-the-cutover-replace-landing-page/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json`, plus the alias copy at `sdira_compliance_schema.json`. Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-26-the-cutover-replace-landing-page`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected. Expect exactly one `script[type="application/ld+json"]` block on the rendered page.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-17-landing-page-to-real-website` (opening argument)
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-08-one-page-cant-do-five-jobs` (architecture)
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-24-website-build-quote-checklist` (build scope)
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture` (verifiable record of change)
- `https://agenticportfoliox.github.io/AgenticRVR/contact` (closing CTA)

External citations (primary sources, not aggregators):
- `https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes` (linked twice: PageRank statement, fluctuation window)
- `https://web.dev/articles/vitals` (Core Web Vitals thresholds)
- `https://web.dev/case-studies/milliseconds-make-millions` (Deloitte / 55 study for Google)

## 5. SEO / GEO Notes

- **Primary keyword:** replace a landing page with a full website
- **Secondary keywords:** website migration checklist small business, 301 redirect map, keep rankings when redesigning a website, website launch checklist Metro Detroit, redirect old page to new page, how long do 301 redirects take to work, do I need change of address for a redesign
- **Featured-snippet targets:** "Will replacing my landing page hurt my search rankings," "Do 301 redirects lose link value," "Do I need the Change of Address tool," "How long should redirects stay in place," "What should be measured before and after launch," "Can we keep the old landing page live" — each answered in 2–4 sentences directly under the H3 FAQ question and mirrored in the FAQPage schema.
- **Tables (3 content tables):** (a) four cutover failure modes → week-one symptom → prevention; (b) Core Web Vitals metric → what it measures → pass threshold; (c) 30-day watch → where to look → act-when trigger. Table (c) is the extractable asset; migration guides in the ranking set say "monitor for 90 days" without giving a single decision threshold.
- **Highest-quotability insights:** (a) permanent redirects do not lose PageRank — the loss is time, not authority; (b) the Change of Address tool is domain-change-only, so a same-domain rebuild does not need it; (c) a form that reports success while posting to a dead endpoint is the most expensive kind of green checkmark; (d) two weeks of ranking softness is expected, two weeks of a top page at zero traffic is a missed redirect.
- **Entity coverage for AI extraction:** Google Search Central, 301/308 permanent redirect, PageRank, Change of Address, Search Console Pages report, Core Web Vitals, LCP 2.5s, INP 200ms, CLS 0.1, 75th percentile, mobile-first indexing, noindex, robots.txt, 404/410, XML sitemap, redirect chain, Deloitte *Milliseconds Make Millions*, Google Business Profile, UTM, Metro Detroit, Oakland / Wayne / Genesee County, Renowned Value Restoration LLC, Chainlink Runtime Environment, verifiable workflows.
- **Local signals:** Metro Detroit in intro argument, title tag and closing; Troy contractor and Royal Oak dental practice in the URL-map section; Oakland / Wayne / Genesee County plus Auburn Hills address and weekday hours in LocalBusiness schema.
- **Freshness hooks:** 2026-dated SERP is saturated with agency checklists; this post is the only one framed as the risk an owner is avoiding, with named thresholds. Google's documentation is cited as the live authority rather than paraphrased folklore.

### Honest-data posture preserved at publish — these caveats must survive editing

1. **No traffic-loss percentage is quoted.** Agency blogs circulate "60% of redesigns lose 20–50% of traffic" with no primary study; it is excluded. Do not add it during editing.
2. **No client outcomes or testimonials appear anywhere.** Pillar 9 requires verified results that are not on file. Do not add "an Oakland County firm recovered in nine days" language.
3. **No guaranteed ranking outcome.** The post states Google's own hedge ("a few weeks or more") and explicitly calls a resolving dip normal. Do not convert it into a recovery promise.
4. **The Deloitte figures are attributed, not claimed.** 8.4% retail conversion lift, 9.2% higher spend, and 21.6% more users reaching form submission come from a 37-brand, 30-million-session study commissioned by Google. Do not restate them as Agentic's measurements or as guarantees for a local service business.
5. **The post concedes limits three times. Do not delete:** (a) ranking fluctuation after a move is documented and normal; (b) most small service sites need only a short redirect map — a forty-row spreadsheet, not a migration program; (c) some old pages should be retired with an honest 404 or 410 rather than redirected.
6. **No Michigan-specific legal or regulatory claim.** Nothing in this topic depends on state regulation; none is invented.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the four internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (`id` field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
- [ ] Confirm exactly one `script[type="application/ld+json"]` block on the rendered page
