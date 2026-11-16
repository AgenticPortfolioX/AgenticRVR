# Publishing Instructions — 2026-11-16

**Post:** Proving What the AI Said Six Months Later
**Brand:** Agentic (Agentic Portfolio X) · **Pillar:** 5 — AI Privacy & Compliance Education
**Slug:** `2026-11-16-model-provenance-proving-what-ai-said`
**Live URL:** https://agenticportfoliox.github.io/AgenticRVR/blog/2026-11-16-model-provenance-proving-what-ai-said

---

## 1. Files

| File | Source | Destination on GitHub |
|---|---|---|
| `final.md` | `blog_final/final.md` | `public/blog/2026-11-16-model-provenance-proving-what-ai-said/final.md` |
| `feature_image.png` | `blog_images/feature_image.png` (1280×720) | `.../feature_image.png` |
| `schema.json` | `sdira_compliance_schema/sdira_compliance_schema.json` | `.../schema.json` |
| `sdira_compliance_schema.json` | same file (alias copy) | `.../sdira_compliance_schema.json` |
| `publish_instructions.md` | this file | `.../publish_instructions.md` |

**Schema filename rule:** deploy the JSON-LD as `schema.json` (the site builder expects that name) **and** publish an identical alias at `sdira_compliance_schema.json` so the registry's recorded path resolves.

## 2. Deployment Method

Use the `github-blog-deployment` skill, **Mode B** (cron): write the deploy script to a unique path (`/home/umbrel/.hermes/cache/deploy_agentic_20261116/deploy.py`) and run it as:

```bash
PATH=/home/umbrel/.venvs/deploy/bin:$PATH python3 /home/umbrel/.hermes/cache/deploy_agentic_20261116/deploy.py
```

Repo: `AgenticPortfolioX/AgenticRVR`, branch `main`, no-clone Git Data API (blob → tree → commit → ref update).
Also append the new entry to `src/data/blog-posts.json` at head (decode base64, append, re-encode) — the site index reads that file.

## 3. Frontmatter (already in final.md — do not modify)

```
title: "Proving What the AI Said Six Months Later"
date: "2026-11-16"
description: "Your compliance framework already requires a record of what your AI system said, on which model version, with whose review — and vendors retire models on published schedules. ..."
category: "Agentic Workflows"
author: "Agentic"
```

`category` is the **brand** value (`Agentic Workflows`), not the pillar name. Do not change it to "AI Privacy & Compliance Education" — that breaks site category filtering.

## 4. Post-Deploy Verification Checklist

- [ ] Contents API returns 5 files under `public/blog/2026-11-16-model-provenance-proving-what-ai-said/`
- [ ] `src/data/blog-posts.json` at head contains the slug (decode base64 — `download_url` is CDN-cached)
- [ ] Registry entry's `schema` path resolves 200 (`/blog/<slug>/sdira_compliance_schema.json` or `/schema.json`)
- [ ] Pages deploy run for head commit = `conclusion: success`
- [ ] Live page renders H1, the four-layer table, 5 FAQ H3s; `document.querySelectorAll('script[type="application/ld+json"]').length === 1`
- [ ] Control fetches: prior slug 2026-11-12 returns 200; a bogus slug returns 404

## 5. Internal Links Used (all must exist)

- `/blog/2026-10-19-baa-is-not-a-vault-ai-privacy`
- `/blog/2026-09-17-local-llm-device-anatomy`
- `/blog/2026-11-02-owning-stack-after-hardware-refresh`
- `/blog/2026-10-12-hash-dont-host-verifiable-records-architecture`

## 6. Known Site-Wide Renderer Notes (not defects in this post)

- Post has **no byline line** (per 2026-11-12 convention), so the historic literal-asterisks byline artifact does not apply here.
- GFM tables may render as raw pipe text depending on the renderer; the markdown must stay as-is either way.
- The post uses em dashes and `§` — both render fine; no HTML entities were introduced.

## 7. Post-Publish Actions

- Update `strategy/content_calendar/2026-11-16-model-provenance-proving-what-ai-said.md` → `status: "published"`.
- Copy the 4 archive files to `blogged/2026-11-16-model-provenance-proving-what-ai-said/` (flat, no subdirectories).
- Next scheduled slot: **2026-11-19, Pillar 7 — Blockchain-Verified Business Processes** ("What a verified record can and cannot prove in a dispute").

## 8. Distribution Notes

- **LinkedIn (law firms, healthcare practices, professional services):** lead with the six-year number and the drill — "pick one AI-assisted decision from six months ago and try to reconstruct it." The drill is the engagement hook; the CFR citation is the credibility hook.
- **X (AI/Chainlink community):** lead with the reproducibility finding — batch-variant kernels mean temperature zero is not deterministic, and determinism costs about 20% throughput. That is the technically interesting claim.
- **Do not** lead with the OpenAI litigation. It is the strongest legal fact but the most likely to read as vendor-bashing; it belongs mid-post as the "courts already treat these as documents" proof point.
- Secondary hook for a compliance audience: §164.312(b) says "contain **or use** electronic protected health information" — the two words that pull AI assistants into scope.
