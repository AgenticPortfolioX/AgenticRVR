# Publishing Instructions — 2026-11-09

**Post:** Keep, Consolidate, or Replace: Auditing the Stack You Already Own
**Brand:** Agentic (Agentic Portfolio X) · **Pillar:** 8 — The Modern Business Stack
**Slug:** `2026-11-09-keep-consolidate-replace-stack-audit`
**Live URL:** https://agenticportfoliox.github.io/AgenticRVR/blog/2026-11-09-keep-consolidate-replace-stack-audit

---

## 1. Files

| File | Source | Destination on GitHub |
|---|---|---|
| `final.md` | `blog_final/final.md` | `public/blog/2026-11-09-keep-consolidate-replace-stack-audit/final.md` |
| `feature_image.png` | `blog_images/feature_image.png` (1280×720) | `.../feature_image.png` |
| `schema.json` | `sdira_compliance_schema/sdira_compliance_schema.json` | `.../schema.json` |
| `sdira_compliance_schema.json` | same file (alias copy) | `.../sdira_compliance_schema.json` |
| `publish_instructions.md` | this file | `.../publish_instructions.md` |

**Schema filename rule:** deploy the JSON-LD as `schema.json` (the site builder expects that name) **and** publish an identical alias at `sdira_compliance_schema.json` so the registry's recorded path resolves. Verified working on Agentic deploys since 2026-10-05.

## 2. Deployment Method

Use the `github-blog-deployment` skill, **Mode B** (cron): write the deploy script to a unique path (`/home/umbrel/.hermes/cache/deploy_agentic_20261109/deploy.py`) and run it as:

```bash
PATH=/home/umbrel/.venvs/deploy/bin:$PATH python3 /home/umbrel/.hermes/cache/deploy_agentic_20261109/deploy.py
```

Repo: `AgenticPortfolioX/AgenticRVR`, branch `main`, no-clone Git Data API (blob → tree → commit → ref update).

## 3. Frontmatter (already in final.md — do not modify)

```
title: "Keep, Consolidate, or Replace: Auditing the Stack You Already Own"
date: "2026-11-09"
description: "Most technology audits count licenses and cancel the unused ones. ..."
category: "Agentic Workflows"
author: "Agentic"
```

`category` is the **brand** value (`Agentic Workflows`), not the pillar name. Do not change it to "The Modern Business Stack" — that breaks site category filtering.

## 4. Post-Deploy Verification Checklist

- [ ] Contents API returns 5 files under `public/blog/2026-11-09-keep-consolidate-replace-stack-audit/`
- [ ] `src/data/blog-posts.json` at head contains the slug (decode base64 — `download_url` is CDN-cached)
- [ ] Registry entry's `schema` path resolves 200 (`/blog/<slug>/sdira_compliance_schema.json` or `/schema.json`)
- [ ] Pages deploy run for head commit = `conclusion: success`
- [ ] Live page renders H1, the two tables, 5 FAQ H3s; `document.querySelectorAll('script[type="application/ld+json"]').length === 1`
- [ ] Control fetches: prior slug 2026-11-05 returns 200; a bogus slug returns 404

## 5. Internal Links Used (all must exist)

- `/blog/2026-10-05-build-order-modern-business-stack`
- `/blog/2026-08-31-make-your-website-convert`
- `/blog/2026-10-26-the-cutover-replace-landing-page`
- `/blog/2026-10-19-baa-is-not-a-vault-ai-privacy`
- `/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing`
- `/blog/2026-10-12-hash-dont-host-verifiable-records-architecture`
- `/blog/2026-11-02-owning-stack-after-hardware-refresh`

## 6. Known Site-Wide Renderer Notes (not defects in this post)

- The italic byline line renders with literal asterisks on the live site (template limitation, all posts).
- GFM tables may render as raw pipe text depending on the renderer; the markdown must stay as-is either way.

## 7. Post-Publish Actions

- Update `strategy/content_calendar/2026-11-09-keep-consolidate-replace-stack-audit.md` → `status: "published"`.
- Copy the 4 archive files to `blogged/2026-11-09-keep-consolidate-replace-stack-audit/` (flat, no subdirectories).
- Next scheduled slot: **2026-11-12, Pillar 6 — Website & Conversion Strategy** ("The intake path audit: where quote requests actually die").
