# Publish Instructions — Agentic Blog Post

**Post:** Hash, Don't Host: What Blockchain-Verified Records Store, and What Never Leaves Your Building
**Slug:** `2026-10-12-hash-dont-host-verifiable-records-architecture`
**Date:** 2026-10-12
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 7 — Blockchain-Verified Business Processes
**Quality Gate:** see `analytics/performance_reports/2026-10-12-quality-gate.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-10-12-hash-dont-host-verifiable-records-architecture/blog_final/final.md` | Repo `/public/blog/2026-10-12-hash-dont-host-verifiable-records-architecture/final.md` |
| `feature_image.png` | `blog_posts/2026-10-12-hash-dont-host-verifiable-records-architecture/blog_images/feature_image.png` | Repo `/public/blog/2026-10-12-hash-dont-host-verifiable-records-architecture/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-10-12-hash-dont-host-verifiable-records-architecture/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-10-12-hash-dont-host-verifiable-records-architecture/schema.json` (renamed on deploy) |
| `sdira_compliance_schema.json` (alias copy) | same source file | Repo `/public/blog/2026-10-12-hash-dont-host-verifiable-records-architecture/sdira_compliance_schema.json` — same content, published under the filename the site registry records |
| `publish_instructions.md` | `blog_posts/2026-10-12-hash-dont-host-verifiable-records-architecture/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-10-12-hash-dont-host-verifiable-records-architecture/publish_instructions.md` |

Archived flat copies of all four delivery files live in `blogged/2026-10-12-hash-dont-host-verifiable-records-architecture/` for the auto-deployment script (flat 4-file archive convention). The folder name includes the slug — date-only folder names are not found by the deployment script.

### Schema filename: known site issue, worked around again

`src/data/blog-posts.json` records `schema` for every Agentic post as `/blog/<slug>/sdira_compliance_schema.json`, while the deploy convention publishes the file as `schema.json`. First observed 2026-09-28; still unresolved repo-side. Publish the JSON-LD under **both** filenames again to close the dangling reference. **Do not rename `schema.json`** — the site builder expects that name.

## 2. Frontmatter (verified this run)

```
---
title: "Hash, Don't Host: What Blockchain-Verified Records Store, and What Never Leaves Your Building"
date: "2026-10-12"
description: "Encrypted data on a ledger is still personal data — the EDPB settled that in July 2026. ..."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-10-12. Word count: 1,985 raw / **1,533 prose-only** (26 markdown table rows account for 383 words; frontmatter 69) — inside the Agentic 1,300–1,700 prose band.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-10-12-hash-dont-host-verifiable-records-architecture/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-07-blockchain-verified-business-processes`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-20-chainlink-runtime-environment-cre-workflows`

*(The draft carries no inline hyperlinks this run; add the two links above in the "How Agentic Builds It" section at edit time if inline linking is desired — both targets are live.)*

## 5. SEO / GEO Notes

- **Primary keywords:** what goes on a blockchain, on-chain vs off-chain data, blockchain data privacy, hash not data, proof of existence blockchain
- **Secondary keywords:** blockchain storage cost, GDPR blockchain right to erasure, EDPB blockchain guidelines, HIPAA audit trail blockchain, attorney-client privilege AI disclosure, zero-knowledge proof business, verifiable records architecture, key destruction, salted hashing, Metro Detroit
- **Featured-snippet targets:** "Does anything personal ever go on the blockchain," "Is a hash of personal data still personal data," "How do you satisfy a deletion or amendment request if a record is on a chain," "Why not use a private blockchain and store everything there," "What does a verifiable record cost to run," "What should a Metro Detroit business do first" — all written as direct 2–3 sentence answers under H3 FAQ questions.
- **Tables (3):** the three-layer record table, the EDPB-says/means-for-you table, the on-chain cost comparison, and the data-class placement table. Comparison tables are disproportionately quoted by AI answer engines, and the placement table is the extractable asset of the post.
- **Entity coverage for AI extraction:** cryptographic hash, fingerprint, proof of existence, on-chain, off-chain, EVM storage, gas, SSTORE, SHA-256, EDPB Guidelines 02/2025, anonymisation, three-criteria test, record isolation, linkage, inference, key destruction, salted hashing, data controller, permissionless chain, consortium chain, international transfer, Article 46, HIPAA Security Rule audit controls, 45 CFR 164.526, statement of disagreement, attorney-client privilege, zero-knowledge proof, confidential computing, TEE, fully homomorphic encryption, private transactions, Chainlink Runtime Environment, oracle, Metro Detroit, Oakland/Wayne/Genesee County.
- **Local signals:** Metro Detroit (intro, regulator table, fraud section, FAQ, closing), Auburn Hills (schema), Wayne/Oakland/Genesee Counties (schema), Michigan (schema).
- **Freshness hook:** the EDPB finalized its blockchain guidelines on 8 July 2026 — a dated, authoritative event that the business-facing SERP has not yet absorbed. Keep the date in the post; it is the GEO advantage.

### Honest-data posture preserved at publish — these caveats must survive editing
1. Every third-party figure keeps its publisher and vintage: EDPB (guidelines finalized 8 July 2026), Entrust 2025 Identity Fraud Report, Sumsub Identity Fraud Report 2025–2026, FBI IC3 2024 Annual Report, published Ethereum storage-cost measurements (Ethereum StackExchange; Autheo), Chainlink (updated Feb 2026), Blockchain Council (June 2026). Do not restate them as Agentic's own research.
2. **The post deliberately concedes ground.** The FAQ "Why not use a private blockchain and store everything there?" tells the reader that permissioned and consortium chains are the right structure when on-chain personal data is genuinely unavoidable. Do not delete that concession — it is the trust mechanism and it guards against an unsubstantiated-claim problem.
3. **The post says most businesses should put no personal data on-chain at all.** That is a deliberate anti-sales line. Do not soften it into a blockchain-always answer.
4. **No client outcomes or testimonials appear anywhere.** Pillar 9 case studies require verified results that are not on file and must not be fabricated. Do not add "a Troy practice cut audit time by X" language during editing.
5. **Do not add guaranteed-outcome claims.** Costs and storage figures are conditional on network conditions and usage volume, and the post states them that way.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the two internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (id field) after the Auto-Sync workflow runs
- [ ] Confirm both `schema.json` and `sdira_compliance_schema.json` are reachable at the post path
