# Publish Instructions — Agentic Blog Post

**Post:** Unboxing Private AI: What a Local LLM Device Actually Does for Metro Detroit Law Firms and Medical Practices
**Slug:** `2026-09-17-local-llm-device-anatomy`
**Date:** 2026-09-17
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 2 — Private AI / Local LLM Devices
**Quality Gate:** 137/140 (97.9%) — READY FOR PUBLICATION

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-09-17-local-llm-device-anatomy/blog_final/final.md` | Repo `/public/blog/2026-09-17-local-llm-device-anatomy/final.md` |
| `feature_image.png` | `blog_posts/2026-09-17-local-llm-device-anatomy/blog_images/feature_image.png` | Repo `/public/blog/2026-09-17-local-llm-device-anatomy/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-09-17-local-llm-device-anatomy/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-09-17-local-llm-device-anatomy/schema.json` (renamed on deploy) |
| `publish_instructions.md` | `blog_posts/2026-09-17-local-llm-device-anatomy/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-09-17-local-llm-device-anatomy/publish_instructions.md` |

Archived flat copies of all four live in `blogged/2026-09-17-local-llm-device-anatomy/` for the auto-deployment script. Folder name includes the slug — date-only folder names are not found by the deployment script.

## 2. Frontmatter (already verified this run)

```
---
title: "Unboxing Private AI: What a Local LLM Device Actually Does for Metro Detroit Law Firms and Medical Practices"
date: "2026-09-17"
description: "A local LLM device is not a subscription and not a cloud service — ..."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified: first 3 characters are `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-09-17.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-09-17-local-llm-device-anatomy/feature_image.png`. Verified 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). The graph contains Article, FAQPage, LocalBusiness, and Service nodes — keep the `@graph` shape intact.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-17-local-llm-device-anatomy`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-13-hipaa-local-llm-private-ai`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-24-sovereign-technology-data-ownership`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-14-ai-compliance-paper-trail`

## 5. SEO / GEO Notes

- **Primary keywords:** local LLM for law firms, HIPAA-compliant local AI, on-premises AI for healthcare, private AI for small business, attorney-client privilege AI, local LLM device Metro Detroit
- **Featured-snippet targets:** "What is a local LLM device," the cost question, the 2026 hardware/VRAM requirement, HIPAA compliance for local AI, and the audit-trail question are written as direct 2–4 sentence answers under bolded FAQ questions.
- **Entity coverage for AI extraction:** Local LLM, RAG, HIPAA / 45 CFR 164.312, attorney-client privilege, MRPC 1.1/1.5/1.6, State Bar of Michigan, Ollama, vLLM, llama.cpp, Llama 3.3 70B, RTX 5090/5060 Ti, Apple Silicon, IBM Cost of a Data Breach, *Mata v. Avianca*, *Park v. Kim*.
- **Comparison tables (3):** hardware tiers with 2026 pricing, day-one workflows by sector, and the four-layer stack — tables are disproportionately quoted by AI answer engines.
- **Local signals:** Metro Detroit, Oakland/Wayne/Genesee Counties, Auburn Hills.
- **Honest-data posture preserved at publish:** all hardware prices, VRAM figures, and throughput numbers are attributed and dated to their published sources. The Michigan ethics statement must remain "the State Bar of Michigan has issued no formal opinion or advisory guidance" — do not edit it into a claim that Michigan has ruled on AI use.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the three internal posts return 200
