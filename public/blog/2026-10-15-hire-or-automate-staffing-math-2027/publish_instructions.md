# Publish Instructions — Agentic Blog Post

**Post:** Hire or Automate: The 2027 Headcount Math for a Metro Detroit Business
**Slug:** `2026-10-15-hire-or-automate-staffing-math-2027`
**Date:** 2026-10-15
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 10 — Future of Work & AI Agents
**Quality Gate:** see `analytics/performance_reports/2026-10-15-quality-gate.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-15-hire-or-automate-staffing-math-2027/blog_final/final.md` | Repo `/public/blog/2026-10-15-hire-or-automate-staffing-math-2027/final.md` |
| `feature_image.png` | `blog_posts/2026-10-15-hire-or-automate-staffing-math-2027/blog_images/feature_image.png` | Repo `/public/blog/2026-10-15-hire-or-automate-staffing-math-2027/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-15-hire-or-automate-staffing-math-2027/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-10-15-hire-or-automate-staffing-math-2027/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `/public/blog/2026-10-15-hire-or-automate-staffing-math-2027/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-15-hire-or-automate-staffing-math-2027/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-10-15-hire-or-automate-staffing-math-2027/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-15-hire-or-automate-staffing-math-2027/` for the auto-deployment script (flat 4-file archive convention). The folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename: known site issue, worked around again

`src/data/blog-posts.json` records `schema` for every Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the deploy convention publishes the file as `schema.json`. First observed 2026-09-28; still unresolved repo-side. Publish the JSON-LD under **both** filenames again to close the dangling reference (5-blob tree). **Do not rename `schema.json`** — the site builder expects that name.

## 2. Frontmatter (verified this run)

```
---
title: "Hire or Automate: The 2027 Headcount Math for a Metro Detroit Business"
date: "2026-10-15"
description: "A Michigan medical secretary costs about $176,000 over three years once benefits load in, and the state's labor force shrank 93,000 this year. Here is the headcount math, the three-column test, and where automation actually earns its place."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-15. Word count: 1,896 raw / **1,689 prose-only** (147 table words, 60 frontmatter words) — inside the Agentic 1,300–1,700 prose band.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-10-15-hire-or-automate-staffing-math-2027/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). Also publish the alias copy at `sdira_compliance_schema.json` so the registry's recorded path resolves. Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-15-hire-or-automate-staffing-math-2027`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected. Expect one `script[type="application/ld+json"]` block on the rendered page.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-17-local-llm-device-anatomy`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture`
- `https://agenticportfoliox.github.io/AgenticRVR/contact` (closing CTA)

## 5. SEO / GEO Notes

- **Primary keyword:** hire or automate
- **Secondary keywords:** fully loaded cost of an employee, true cost of hiring an employee 2026, cost of employee turnover 2026, Michigan median wage, medical secretary salary Michigan, bookkeeping clerk salary Michigan, customer service representative salary Michigan, paralegal salary Michigan, benefits percentage of total compensation, local LLM vs SaaS subscription, Metro Detroit staffing 2027
- **Featured-snippet targets:** "Is it cheaper to automate or to hire in 2026," "What is the fully loaded cost of an employee in Michigan," "Will AI replace my receptionist or bookkeeper," "Can I just use a cloud AI tool for client data," "Do I need blockchain to verify an automated workflow," "What should I automate first" — all written as direct 2–3 sentence answers under H3 FAQ questions.
- **Tables (2 content tables, 14 markdown rows total):** the role-cost table (five Michigan occupations with median wage, 1.43x loaded cost, three-year total) and the benefits-vs-pay divergence table. Comparison tables are disproportionately quoted by AI answer engines, and the role-cost table is the extractable asset of the post — no competitor publishes these five roles in one comparison.
- **The 30.1% vs. 43% distinction** is the highest-quotability insight: most online sources quote 30.1% as if it were added to salary. The post corrects that, which is the kind of precise fix answer engines reuse.
- **Entity coverage for AI extraction:** BLS Occupational Employment and Wage Statistics, BLS Employer Costs for Employee Compensation, fully loaded cost, benefits load, total compensation, health benefit cost per employee, family premium, turnover, cost per hire, replacement cost, labor force participation, job openings, qualified applicants, NFIB Small Business Jobs Report, Mercer, KFF, SHRM, Express Employment Professionals, Harris Poll, U.S. Chamber of Commerce, U.S. SBA Office of Advocacy, Goldman Sachs 10,000 Small Businesses Voices, Federal Reserve Small Business Credit Survey, McKinsey, Intuit QuickBooks, medical secretary, bookkeeping clerk, customer service representative, receptionist, paralegal, deterministic workflow, judgment-bound task, HIPAA, protected health information, attorney–client privilege, proprietary data, data boundary, Local LLM, private AI that stays on-premises, HIPAA-ready AI, sovereign technology, Chainlink Runtime Environment, verifiable workflows, audit trail, Metro Detroit, Oakland/Wayne/Genesee County.
- **Local signals:** Metro Detroit (intro, boundary section, worksheet, FAQ, closing), Michigan OEWS medians throughout, Michigan labor-force contraction of 93,000, NFIB Michigan respondent quote context, Auburn Hills / Wayne / Oakland / Genesee Counties (schema).
- **Freshness hooks:** NFIB's September 2026 jobs report (released 2026-10-01), Michigan's 2025 Annual Economic Analysis Report with preliminary 2026 data through June, and Mercer's 2026 benefit-cost projections. All three are dated, authoritative, and not yet absorbed by the business-facing SERP.

### Honest-data posture preserved at publish — these caveats must survive editing

1. Every third-party figure keeps its publisher and vintage: BLS OEWS (May 2025 Michigan state estimates, published May 2026), BLS ECEC (March 2026), NFIB (September 2026, released 2026-10-01), Mercer (2026), KFF (2025), Express Employment Professionals / Harris Poll (2026), SHRM (2025), Center for American Progress / Gallup, Intuit (2025), McKinsey (2023), U.S. Chamber of Commerce (2025). Do not restate them as Agentic's own research.
2. **The post deliberately concedes ground four times.** Do not delete: (a) some roles are cheaper **to hire** because judgment is the entire job; (b) 82% of AI-using small businesses **grew** headcount — this is a capacity decision, not a replacement decision; (c) only a minority of AI-using firms have fully embedded it, so "just automate it" is not a solved hand-off; (d) automation fails on undefined ROI and dirty input data, not model quality.
3. **No client outcomes or testimonials appear anywhere.** Pillar 9 case studies require verified results that are not on file and must not be fabricated. Do not add "a Troy practice cut headcount by X" language during editing.
4. **Do not add guaranteed-outcome claims.** Wage, benefit-load, and turnover figures are conditional planning benchmarks, and the post states them that way.
5. **Per-seat pricing pressure is directional 2026 industry reporting**, not a measured statistic — do not strengthen it into a cited trend line.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the two internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (id field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
