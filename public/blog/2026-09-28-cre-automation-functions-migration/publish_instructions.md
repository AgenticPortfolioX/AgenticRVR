# Publish Instructions — Agentic Blog Post

**Post:** The Deadline Already Passed: Migrating Chainlink Automation and Functions to CRE Before a Silent Failure Compounds
**Slug:** `2026-09-28-cre-automation-functions-migration`
**Date:** 2026-09-28
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 3 — CRE / Chainlink Verified Automation
**Quality Gate:** see `analytics/performance_reports/quality_gate_2026-09-28.md`

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-09-28-cre-automation-functions-migration/blog_final/final.md` | Repo `/public/blog/2026-09-28-cre-automation-functions-migration/final.md` |
| `feature_image.png` | `blog_posts/2026-09-28-cre-automation-functions-migration/blog_images/feature_image.png` | Repo `/public/blog/2026-09-28-cre-automation-functions-migration/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-09-28-cre-automation-functions-migration/sdira_compliance_schema/sdira_compliance_schema.json` | Repo `/public/blog/2026-09-28-cre-automation-functions-migration/schema.json` (renamed on deploy) |
| `publish_instructions.md` | `blog_posts/2026-09-28-cre-automation-functions-migration/publish_instructions/publish_instructions.md` | Repo `/public/blog/2026-09-28-cre-automation-functions-migration/publish_instructions.md` |

Archived flat copies of all four live in `blogged/2026-09-28-cre-automation-functions-migration/` for the auto-deployment script. Folder name includes the slug — date-only folder names are not found by the deployment script.

## 2. Frontmatter (verified this run)

```
---
title: "The Deadline Already Passed: Migrating Chainlink Automation and Functions to CRE Before a Silent Failure Compounds"
date: "2026-09-28"
description: "Chainlink Automation v1.x, v2.1, and Functions have all passed their published sunset dates. ..."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified with `head -c 3` → `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-09-28.

## 3. Deployment Steps

1. Push `final.md` to the repo, preserving the leading `---` frontmatter block exactly (no blank line before it — a missing frontmatter block causes the post to fail silently with no error).
2. Push `feature_image.png` to `/public/blog/2026-09-28-cre-automation-functions-migration/feature_image.png`. Confirm 1280x720 (16:9).
3. Deploy the schema JSON-LD as `schema.json` (the site builder expects that filename; the blogged copy is named `sdira_compliance_schema.json`). Keep the `@graph` shape intact — Article, FAQPage, LocalBusiness, Service.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-28-cre-automation-functions-migration`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected.

## 4. Internal Links Used (all previously deployed — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-20-chainlink-runtime-environment-cre-workflows`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-07-blockchain-verified-business-processes`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-24-sovereign-technology-data-ownership`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack`

## 5. SEO / GEO Notes

- **Primary keywords:** Chainlink Automation sunset, Chainlink Automation deprecated, migrate upkeeps to CRE, Chainlink Functions sunset, Chainlink Runtime Environment, CRE migration guide
- **Secondary keywords:** AutomationReceiver bridge pattern, setCallAllowed, CallNotAllowed error, KeystoneForwarder address, setExpectedWorkflowId, workflow identity checks, performUpkeep selector 0x4585e33b, verifiable automation, Chainlink Runtime Environment consulting, CRE workflow automation Michigan
- **Featured-snippet targets:** "Has Chainlink Automation been shut down," "When did Chainlink Automation v1.x / v2.1 sunset," "When did Chainlink Functions shut down," "How do I migrate an upkeep to CRE," "What is the AutomationReceiver bridge pattern," "Why does my workflow fail with CallNotAllowed" — all written as direct answers under bolded FAQ questions.
- **Comparison tables (3):** the published-deadline table, the Automation-to-CRE terminology mapping, and the `CallNotAllowed` cause table. Tables are disproportionately quoted by AI answer engines.
- **Entity coverage for AI extraction:** Chainlink Runtime Environment, Chainlink Automation, Chainlink Functions (CLF), upkeep, `checkUpkeep()`, `performUpkeep()`, workflow, Decentralized Oracle Network, WebAssembly, cron trigger, EVM Log trigger, signed report, `KeystoneForwarder`, `IReceiver`, `AutomationReceiver.sol`, `setCallAllowed`, `setExpectedAuthor`, `setExpectedWorkflowId`, `setExpectedWorkflowName`, `CallNotAllowed`, function selector, WorkflowRegistry, Aave DAO, Aave Robot, Infosys, Bottomline, Global Pay Connect, CCIP, ISO 20022.
- **Local signals:** Metro Detroit, Oakland/Wayne/Genesee Counties, Auburn Hills.
- **Honest-data posture preserved at publish:** every date is quoted exactly as Chainlink's own documentation publishes it. Four caveats must survive editing: (1) whether the published sunset dates mirror live service state or a documentation-forward schedule is unverified — do not strengthen that claim; (2) Chainlink has not disclosed a count of un-migrated upkeeps — do not invent one; (3) the July 15 service-interruption window is quoted as published on the Automation dashboard and only that first window was directly confirmed; (4) the 35,400-gas figure is Chainlink's own documentation example output, not a measured production cost. Do not add any claim of guaranteed outcomes, and do not add client outcomes — Pillar 9 case studies remain unverified and must not be fabricated.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the four internal posts return 200
- [ ] Confirm the blog registry (`src/data/blog-posts.json`) contains the new slug (id field) after the Auto-Sync workflow runs
