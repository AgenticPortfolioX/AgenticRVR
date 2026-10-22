# Publish Instructions — Agentic Blog Post

**Post:** The Demo Is Not a Test: Sizing a Local LLM to Your Workload, Not Its Benchmark Score
**Slug:** `2026-10-22-demo-is-not-a-test-local-llm-sizing`
**Date:** 2026-10-22
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 2 — Private AI / Local LLM Devices
**Quality Gate:** see `analytics/performance_reports/quality_gate_2026-10-22.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-22-demo-is-not-a-test-local-llm-sizing/blog_final/final.md` | Repo `public/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing/final.md` |
| `feature_image.png` | `blog_posts/2026-10-22-demo-is-not-a-test-local-llm-sizing/blog_images/feature_image.png` | Repo `public/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-22-demo-is-not-a-test-local-llm-sizing/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `public/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `public/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-22-demo-is-not-a-test-local-llm-sizing/publish_instructions/publish_instructions.md` | Repo `public/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-22-demo-is-not-a-test-local-llm-sizing/` for the auto-deployment script (flat 4-file archive convention). The folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename

`src/data/blog-posts.json` records `schema` for every Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the site builder expects `schema.json`. Publish the JSON-LD under **both** filenames (5-blob tree) to close the dangling reference. Do not rename `schema.json`.

## 2. Frontmatter (verified this run)

```
---
title: "The Demo Is Not a Test: Sizing a Local LLM to Your Workload, Not Its Benchmark Score"
date: "2026-10-22"
description: "A vendor demo proves a local model can talk. It does not prove the model can read your files, hold a citation, or survive five people using it at once. Here is the sizing arithmetic and the pre-purchase test that turns a demo into a decision."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-22. Word count: **1,855 raw / 1,689 prose-only** (93 table words, 73 frontmatter words) — inside the Agentic 1,300–1,700 prose band.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it).
2. Push `feature_image.png` to `/public/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json`, plus the alias copy at `sdira_compliance_schema.json`. Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected. Expect exactly one `script[type="application/ld+json"]` block on the rendered page.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-14-ai-compliance-paper-trail`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-19-baa-is-not-a-vault-ai-privacy`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-17-landing-page-to-real-website`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture`
- `https://agenticportfoliox.github.io/AgenticRVR/contact` (closing CTA)

## 5. SEO / GEO Notes

- **Primary keyword:** sizing a local LLM for business
- **Secondary keywords:** how much VRAM for local LLM, local LLM for law firms, on-premises AI for healthcare, Q4_K_M vs Q8_0 quality, GGUF quantization quality loss, KV cache memory calculation, context window vs document capacity, lost in the middle long context, local LLM concurrent users, local AI evaluation before purchase, private AI for small business, local LLM Metro Detroit
- **Featured-snippet targets:** "How much memory does a local LLM need for a small practice," "Is Q4_K_M good enough, or do we need full precision," "Can a local LLM read a 200-page document," "How many people can use one local LLM device at once," "What benchmarks should we trust when comparing local models," "Do we need a local LLM, or is a cloud AI with a contract enough" — all answered in 2–4 sentences directly under H3 FAQ questions.
- **Table (1 content table, 6 markdown rows):** tier → weights at Q4_K_M → single-stream speed → realistic concurrent users → what it handles. The concurrency column is the extractable asset; no competitor page publishes concurrent-user bands alongside weight memory.
- **Highest-quotability insights:** (a) a 128,000-token context window does not mean a 200-page record set is readable — position-sensitive attention means the deciding sentence is likely in the trough (Liu et al., TACL 2024); (b) quantization failure lands on extraction and citation before it lands on conversation, which is why demos keep working; (c) concurrency, not tokens per second, is what a five-person firm feels.
- **Entity coverage for AI extraction:** Local LLM, GGUF, Q4_K_M, Q5_K_M, Q8_0, quantization, KV cache, context window, retrieval-augmented generation, MMLU, HumanEval, GSM8K, Chinchilla scaling laws (Hoffmann et al. 2022), "Lost in the Middle" (arXiv 2307.03172 / TACL 2024), HIPAA, attorney-client privilege, Chainlink Runtime Environment, verifiable workflows, Metro Detroit, Oakland / Wayne / Genesee County, Renowned Value Restoration LLC.
- **Local signals:** Metro Detroit (intro, evaluation section, closing), Oakland / Wayne / Genesee County in the closing block and LocalBusiness schema, Auburn Hills address and weekday hours in schema.
- **Freshness hooks:** 2026-dated practitioner sizing data (VRAM per quantization tier, measured tokens/sec), Q4_K_M as current default, the 2024 TACL long-context finding still not absorbed by the local-business SERP.

### Honest-data posture preserved at publish — these caveats must survive editing

1. **No prices are quoted.** Device and hardware pricing is deliberately absent because no verified price list was on file this run. Do not add "$4,000 device" or per-seat comparisons during editing.
2. **No benchmark scores are presented as our measurements.** MMLU/HumanEval/GSM8K appear only as characterizations of what those benchmarks measure, with the explicit statement that none measures task fitness.
3. **The post concedes limits five times. Do not delete:** (a) a local model is not a lawyer, physician, or accountant; (b) four task categories should never run unsupervised on device output; (c) possession is not compliance — encryption, access control, backups, incident response remain the client's; (d) retrieval is architecturally necessary, not optional, for long documents; (e) a vendor who cannot produce the forty-task test — including Agentic — is selling a demo.
4. **No client outcomes or testimonials appear anywhere.** Pillar 9 case studies require verified results that are not on file and must not be fabricated. Do not add "an Oakland County firm cut review time by X" language during editing.
5. **No legal or medical advice framing.** The post describes sizing method and evidence practice; it does not tell a practice what its own counsel or compliance officer would conclude.
6. **Concurrency figures are planning bands, not measured guarantees.** The post says to measure them during evaluation. Do not restate them as specifications.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the four internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (`id` field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
- [ ] Confirm exactly one `script[type="application/ld+json"]` block on the rendered page
