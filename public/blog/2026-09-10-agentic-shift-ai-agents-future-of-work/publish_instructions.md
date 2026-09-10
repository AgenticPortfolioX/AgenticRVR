# Publish Instructions — Agentic Blog Post

**Title:** The Agentic Shift: What Metro Detroit Businesses Should Prepare For Between Now and 2027
**Slug:** `2026-09-10-agentic-shift-ai-agents-future-of-work`
**Publish date:** September 10, 2026
**Author:** Agentic | **Category:** Agentic Workflows
**Pillar:** 10 — Future of Work & AI Agents

---

## 1. Files in This Package

| File | Purpose | Destination on repo |
|---|---|---|
| `final.md` | Post body with YAML frontmatter (5 keys) | `public/blog/2026-09-10-agentic-shift-ai-agents-future-of-work/final.md` |
| `feature_image.png` | 1280×720 16:9 feature image | `public/blog/2026-09-10-agentic-shift-ai-agents-future-of-work/feature_image.png` |
| `schema.json` | JSON-LD graph (Article + FAQPage + LocalBusiness + Service) | `public/blog/2026-09-10-agentic-shift-ai-agents-future-of-work/schema.json` |
| `publish_instructions.md` | This file | `public/blog/2026-09-10-agentic-shift-ai-agents-future-of-work/publish_instructions.md` |

> ⚠️ The archived schema file is named `sdira_compliance_schema.json` in `blogged/`. It MUST be uploaded to GitHub as **`schema.json`** — the website builder (`sync-blog.ts`) looks for that exact filename.

## 2. Frontmatter (must remain intact)

```
---
title: "The Agentic Shift: What Metro Detroit Businesses Should Prepare For Between Now and 2027"
date: "2026-09-10"
description: "AI agents moved from demo to default in 2026. Here is what the adoption data actually shows, why 40% of agentic projects get canceled, and the 12-month preparation plan for Metro Detroit businesses."
category: "Agentic Workflows"
author: "Agentic"
---
```

- Exactly 5 keys — do not add or rename.
- `category` must stay `"Agentic Workflows"` (brand name, not the pillar name).
- The file must begin with `---` as its first three characters. No leading blank line.

## 3. Deployment

Deploy via the `github-blog-deployment` skill (Mode B — cron):

- **Repo:** `AgenticPortfolioX/AgenticRVR`
- **Target path:** `public/blog/2026-09-10-agentic-shift-ai-agents-future-of-work/`
- **Auth:** GitHub App installation token (JWT → installation access token); credentials parsed from `/home/umbrel/.hermes/.env`
- **Method:** no-clone Git API (blob for the PNG → tree → commit → patch `refs/heads/main`)
- **Do not** manually edit `src/data/blog-posts.json` — the `blog-automation.yml` GitHub Action runs `sync-blog.ts` automatically on push.

## 4. Post-Deploy Verification

1. API GET on `repos/AgenticPortfolioX/AgenticRVR/contents/public/blog/2026-09-10-agentic-shift-ai-agents-future-of-work` returns all 4 files.
2. GitHub Actions: "Blog Auto-Sync" and "Deploy static content to Pages" both succeed for the deploy commit (a duplicate Auto-Sync run losing a race and reporting `failure` is benign — see pitfall #10 in the deployment skill).
3. `blog-posts.json` at head of `main` contains the slug `2026-09-10-agentic-shift-ai-agents-future-of-work`.
4. Live page renders: `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-10-agentic-shift-ai-agents-future-of-work/` (site is a JS SPA — verify in a browser, not with curl).

## 5. Content Notes for the Publisher

- **Two data tables** must render as real tables (markdown pipe syntax). They are the featured-snippet and AI-citation targets for this post.
- **Internal link** to the 2026-08-27 post `the-modern-business-stack` must resolve.
- **Contact link** points to `/contact`; phone **(248) 313-8955** appears in the closing block.
- FAQ is written as bold question headings (not an accordion) — the FAQPage schema mirrors all 8 questions for rich results.
- Word count: ~1,790 raw / ~1,700 prose. Innovator range respected (1,000–1,500 target; 1,300–1,700 effective with data tables).

## 6. Brand Compliance

- No forbidden terms ("manual entry," "lumber," "IRS," "appraisal," "old-school") — verified by word-boundary grep.
- Key phrases present: "Professional web presence" (3), "Chainlink Runtime Environment" (3), "Private AI that stays on-premises" (2), "Local LLM" (2), "Verifiable workflows" (2), "HIPAA-ready AI" (1), "Sovereign technology" (1), "Future-proof your business" (1).
- Agentic-only language. No fencing or digital-asset-valuation vocabulary.

## Related
- [[Agentic/README|Agentic Home]]
