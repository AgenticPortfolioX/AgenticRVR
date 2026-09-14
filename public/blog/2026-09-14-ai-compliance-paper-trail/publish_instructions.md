# Publish Instructions — Agentic Blog Post

**Post:** Prove It: The AI Paper Trail Metro Detroit Businesses Need Before Their Next Audit
**Slug:** `2026-09-14-ai-compliance-paper-trail`
**Date:** 2026-09-14
**Author:** Agentic
**Category:** Agentic Workflows
**Pillar:** 5 — AI Privacy & Compliance Education

---

## 1. Files in This Package

| File | Source path | Destination |
|---|---|---|
| `final.md` | `blog_posts/2026-09-14-ai-compliance-paper-trail/blog_final/final.md` | Repo `/content/blog/2026-09-14-ai-compliance-paper-trail.md` (or site's blog collection path) |
| `feature_image.png` | `blog_posts/2026-09-14-ai-compliance-paper-trail/blog_images/feature_image.png` | Repo `/public/blog/2026-09-14-ai-compliance-paper-trail/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-09-14-ai-compliance-paper-trail/sdira_compliance_schema/sdira_compliance_schema.json` | Site template `<head>` as JSON-LD, or repo `/public/blog/2026-09-14-ai-compliance-paper-trail/schema.json` |

Archived flat copies of all three live in `blogged/2026-09-14-ai-compliance-paper-trail/` for the auto-deployment script.

## 2. Frontmatter Requirements (already verified)

```
---
title: "Prove It: The AI Paper Trail Metro Detroit Businesses Need Before Their Next Audit"
date: "2026-09-14"
description: "Regulators rarely punish the breach. They punish the missing document. ..."
category: "Agentic Workflows"
author: "Agentic"
---
```

Verified this run: first 3 characters are `---`; exactly 5 keys; `category` is the brand name (`Agentic Workflows`), not the pillar name; `date` matches 2026-09-14.

## 3. Deployment Steps

1. Copy `final.md` into the blog content directory, preserving the leading `---` frontmatter block exactly.
2. Copy `feature_image.png` to `/public/blog/2026-09-14-ai-compliance-paper-trail/feature_image.png`. It is 1280x720 (16:9).
3. Inject the JSON-LD from `sdira_compliance_schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block. The graph contains Article, FAQPage, LocalBusiness, and Service nodes; keep the `@graph` shape intact.
4. Confirm the post renders at `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-14-ai-compliance-paper-trail`.
5. Confirm it appears under the "Agentic Workflows" category filter.
6. Validate the schema with Google's Rich Results Test — FAQPage and Article should both be detected.

## 4. Internal Links Used (all live posts — do not break)

- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-13-hipaa-local-llm-private-ai`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack`
- `https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-07-blockchain-verified-business-processes`

## 5. SEO / GEO Notes

- **Primary keywords:** AI compliance Michigan, AI paper trail, HIPAA AI documentation requirements, Michigan data breach notification law, AI use policy business, attorney-client privilege AI
- **Featured-snippet targets:** the 60-day HIPAA clock, Michigan's "without unreasonable delay" standard, and the five-document list are written as direct answers under H3 bold questions in the FAQ.
- **Entity coverage for AI extraction:** MCL 445.72, MCL 445.81–445.85, MCL 500.550–500.565, SB 359, SB 360, HIPAA Security Rule NPRM (90 FR 800), 45 CFR §§ 164.400–414, 45 CFR §164.314(a)(2)(i), ABA Formal Opinion 512.
- **Local signals:** Metro Detroit, Oakland/Wayne/Genesee Counties, Auburn Hills.
- **Honest-data posture preserved at publish:** SB 359 and SB 360 are labeled pending, not law; the Security Rule NPRM is labeled proposed, not final. Do not edit those qualifiers out.

## 6. Post-Publish Checklist

- [ ] Confirm canonical URL resolves without a 404
- [ ] Confirm the brand category filter shows the post
- [ ] Run Rich Results Test on the live URL
- [ ] Confirm links to the three internal posts return 200
