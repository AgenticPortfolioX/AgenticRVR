# Publishing Instructions — 2026-11-12

**Post:** Where Quote Requests Die: The Intake Path Audit Nobody Runs
**Brand:** Agentic (Agentic Portfolio X) · **Pillar:** 6 — Website & Conversion Strategy
**Slug:** `2026-11-12-intake-path-audit-quote-requests`
**Live URL:** https://agenticportfoliox.github.io/AgenticRVR/blog/2026-11-12-intake-path-audit-quote-requests

---

## 1. Files

| File | Source | Destination on GitHub |
|---|---|---|
| `final.md` | `blog_final/final.md` | `public/blog/2026-11-12-intake-path-audit-quote-requests/final.md` |
| `feature_image.png` | `blog_images/feature_image.png` (1280×720) | `.../feature_image.png` |
| `schema.json` | `sdira_compliance_schema/sdira_compliance_schema.json` | `.../schema.json` |
| `sdira_compliance_schema.json` | same file (alias copy) | `.../sdira_compliance_schema.json` |
| `publish_instructions.md` | this file | `.../publish_instructions.md` |

**Schema filename rule:** deploy the JSON-LD as `schema.json` (the site builder expects that name) **and** publish an identical alias at `sdira_compliance_schema.json` so the registry's recorded path resolves.

## 2. Deployment Method

Use the `github-blog-deployment` skill, **Mode B** (cron): write the deploy script to a unique path (`/home/umbrel/.hermes/cache/deploy_agentic_20261112/deploy.py`) and run it as:

```bash
PATH=/home/umbrel/.venvs/deploy/bin:$PATH python3 /home/umbrel/.hermes/cache/deploy_agentic_20261112/deploy.py
```

Repo: `AgenticPortfolioX/AgenticRVR`, branch `main`, no-clone Git Data API (blob → tree → commit → ref update).
Also append the new entry to `src/data/blog-posts.json` at head (decode base64, append, re-encode) — the site index reads that file.

## 3. Frontmatter (already in final.md — do not modify)

```
title: "Where Quote Requests Die: The Intake Path Audit Nobody Runs"
date: "2026-11-12"
description: "Your website may be delivering more requests than your business can answer. ..."
category: "Agentic Workflows"
author: "Agentic"
```

`category` is the **brand** value (`Agentic Workflows`), not the pillar name. Do not change it to "Website & Conversion Strategy" — that breaks site category filtering.

## 4. Post-Deploy Verification Checklist

- [ ] Contents API returns 5 files under `public/blog/2026-11-12-intake-path-audit-quote-requests/`
- [ ] `src/data/blog-posts.json` at head contains the slug (decode base64 — `download_url` is CDN-cached)
- [ ] Registry entry's `schema` path resolves 200 (`/blog/<slug>/sdira_compliance_schema.json` or `/schema.json`)
- [ ] Pages deploy run for head commit = `conclusion: success`
- [ ] Live page renders H1, both tables, 5 FAQ H3s; `document.querySelectorAll('script[type="application/ld+json"]').length === 1`
- [ ] Control fetches: prior slug 2026-11-09 returns 200; a bogus slug returns 404

## 5. Internal Links Used (all must exist)

- `/blog/2026-10-08-one-page-cant-do-five-jobs-website-architecture`
- `/blog/2026-08-31-make-your-website-convert`
- `/blog/2026-10-26-the-cutover-replace-landing-page`
- `/blog/2026-10-29-automation-stops-at-company-line`

## 6. Known Site-Wide Renderer Notes (not defects in this post)

- The italic byline line renders with literal asterisks on the live site (template limitation, all posts).
- GFM tables may render as raw pipe text depending on the renderer; the markdown must stay as-is either way.

## 7. Post-Publish Actions

- Update `strategy/content_calendar/2026-11-12-intake-path-audit-quote-requests.md` → `status: "published"`.
- Copy the 4 archive files to `blogged/2026-11-12-intake-path-audit-quote-requests/` (flat, no subdirectories).
- Next scheduled slot: **2026-11-16, Pillar 5 — AI Privacy & Compliance Education** ("Model provenance: proving what the AI said six months later").

## 8. Distribution Notes

- LinkedIn (B2B, law/healthcare/professional services): lead with the arithmetic — seven handoffs at 80% each leaves 21%.
- X (AI/Chainlink community): lead with the CRE section — verifiable workflow timestamps for multi-party handoffs.
- Do not lead with the missed-call statistic; the 62% provenance caveat is the differentiator, not the headline.
