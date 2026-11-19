# Publishing Instructions — 2026-11-19

**Post:** Garbage In, Immutable Out: Where the Facts in a Verified Record Actually Come From
**Brand:** Agentic (Agentic Portfolio X) · **Pillar:** 7 — Blockchain-Verified Business Processes
**Slug:** `2026-11-19-garbage-in-immutable-out-oracle-problem`
**Target live URL:** https://agenticportfoliox.github.io/AgenticRVR/blog/2026-11-19-garbage-in-immutable-out-oracle-problem

---

## 1. Files

| File | Source | Destination on GitHub |
|---|---|---|
| `final.md` | `blog_final/final.md` | `public/blog/2026-11-19-garbage-in-immutable-out-oracle-problem/final.md` |
| `feature_image.png` | `blog_images/feature_image.png` (1280×720) | `.../feature_image.png` |
| `schema.json` | `sdira_compliance_schema/sdira_compliance_schema.json` | `.../schema.json` |
| `sdira_compliance_schema.json` | same file (alias copy) | `.../sdira_compliance_schema.json` |
| `publish_instructions.md` | this file | `.../publish_instructions.md` |

**Schema filename rule:** deploy the JSON-LD as `schema.json` (the site builder's expected name) **and** publish an identical alias at `sdira_compliance_schema.json` so the registry's recorded path resolves. Five blobs in the tree payload — this is the Agentic precedent, verified 2026-10-05.

## 2. Deployment Method

Use the `github-blog-deployment` skill, **Mode B** (cron): write the deploy script to a unique path (`/home/umbrel/.hermes/cache/deploy_agentic_20261119/deploy.py`) and run it as:

```bash
PATH=/home/umbrel/.venvs/deploy/bin:$PATH python3 /home/umbrel/.hermes/cache/deploy_agentic_20261119/deploy.py
```

Repo: `AgenticPortfolioX/AgenticRVR`, branch `main`, no-clone Git Data API (blob for the PNG → tree → commit → ref update). Do not hand-edit `src/data/blog-posts.json`; the `Blog Auto-Sync` action runs `sync-blog.ts` on push.

## 3. Frontmatter (already in final.md — do not modify)

```
title: "Garbage In, Immutable Out: Where the Facts in a Verified Record Actually Come From"
date: "2026-11-19"
description: "A ledger can prove a record has not changed since the day it was written. It cannot prove the record was true when it was written. ..."
category: "Agentic Workflows"
author: "Agentic"
```

`category` is the **brand** value (`Agentic Workflows`), not the pillar name. Do not change it to "Blockchain-Verified Business Processes" — that breaks site category filtering.

No byline line below the H1 (2026-11-12 convention), so the literal-asterisk byline artifact does not apply.

## 4. Post-Deploy Verification Checklist

- [ ] Contents API returns **5 files** under `public/blog/2026-11-19-garbage-in-immutable-out-oracle-problem/`
- [ ] `src/data/blog-posts.json` at head contains the slug — decode the Contents API base64 payload (`download_url` is CDN-cached); the registry key is `id`, not `slug`
- [ ] Registry entry's `schema` path resolves 200 (both `/schema.json` and `/sdira_compliance_schema.json`)
- [ ] Pages deploy run for the head commit = `conclusion: success` (a `cancelled` sibling run or a failed `Blog Auto-Sync` losing the registry race is benign — judge by the head commit's Pages run)
- [ ] Live page renders H1, the four-question table, 5 FAQ H3s; `document.querySelectorAll('script[type="application/ld+json"]').length === 1`
- [ ] Control fetches in the same call: prior slug `2026-11-16-model-provenance-proving-what-ai-said` returns 200; a bogus slug returns 404
- [ ] `diff -q` the served `final.md` against the local archive (byte-identical proves Pages is serving this post, not a cached predecessor)

## 5. Internal Links Used (all must exist in the repo)

- `/blog/2026-09-07-blockchain-verified-business-processes`
- `/blog/2026-11-16-model-provenance-proving-what-ai-said`
- `/blog/2026-10-29-automation-stops-at-company-line`
- `/blog/2026-10-12-hash-dont-host-verifiable-records-architecture`

## 6. Expected Renderer Behavior (not defects)

- GFM tables may render as raw pipe text depending on the renderer. Do **not** strip the table from `final.md`; it carries the post's core method and is load-bearing for answer-engine extraction. Check a known-good prior slug before blaming this deploy.
- Em dashes, `§`, and curly quotes are absent — the post uses plain ASCII punctuation and em dashes only; no HTML entities were introduced.
- The Agentic SPA emits exactly one `ld+json` block on rendered post pages as of 2026-10-05. A zero is now a real signal.

## 7. Post-Publish Actions

- Update `strategy/content_calendar/2026-11-19-garbage-in-immutable-out-oracle-problem.md` → `status: "published"`.
- Keep the 4 flat files in `blogged/2026-11-19-garbage-in-immutable-out-oracle-problem/`.
- Next scheduled slot: **2026-11-23, Pillar 10 — Future of Work & AI Agents** ("The job title that did not exist in 2024: who owns the intake path").
- Flag for the next Pillar 3 run (2026-11-30): this post pulled forward part of the planned "who checks the oracle's answer" angle. Shift 2026-11-30 to failure/exception handling — what the workflow does when the check fails.

## 8. Distribution Notes

- **LinkedIn (contractors, professional services, operations leads):** lead with the punch-list story and the four-question table. "Most operators can answer the first two from memory and stall on the last two" is the engagement hook; the table is the shareable artifact.
- **X (AI / Chainlink community):** lead with the DTCC / J.P. Morgan / CME production trade in Q3 2026 and the point that CRE workflows can be simulated locally before deployment. Technically interesting, verifiable, and not price talk.
- **Law firms and healthcare practices:** lead with confidential compute — proving a condition without producing the record (Space and Time Virtual Vaults, Q3 2026) — then the attestation scope limit.
- **Do not** lead with "blockchain." The post deliberately avoids token talk; leading with the ledger loses the contractor audience in the first sentence. Lead with the dispute.
- Secondary hook: "an attestation proves who said it, not that it is true" — the honesty of that scope is the differentiator against every vendor claiming verified equals true.
