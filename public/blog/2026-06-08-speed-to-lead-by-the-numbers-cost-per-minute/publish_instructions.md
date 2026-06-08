# Publish Instructions — June 8, 2026

## Blog Post Details
- **Title:** Speed to Lead by the Numbers: What Every Minute of Response Delay Costs Your Metro Detroit Business
- **Slug:** speed-to-lead-by-the-numbers-cost-per-minute
- **Date:** 2026-06-08
- **Category:** Agentic Workflows
- **Author:** Agentic
- **Archetype:** Innovator (Dynamic, Professional, Tech-Forward)

## Files to Publish
1. `final.md` — Full blog post with YAML frontmatter
2. `feature_image.png` — Featured image (1280x720, 16:9)
3. `sdira_compliance_schema.json` — Schema.org JSON-LD (Article + FAQ + LocalBusiness + Service)
4. `publish_instructions.md` — This file

## Target Path (GitHub)
```
public/blog/2026-06-08-speed-to-lead-by-the-numbers-cost-per-minute/
├── index.md          (from final.md)
├── feature_image.png
├── schema.json       (from sdira_compliance_schema.json → renamed on deploy)
└── publish_instructions.md
```

## Deployment
- **Repository:** AgenticPortfolioX/AgenticRVR
- **Branch:** main
- **Method:** GitHub API (no-clone) via github-blog-deployment protocol
- **Registry:** Auto-handled by GitHub Action `blog-automation.yml` — do not manually update

## SEO/GEO Checklist
- [x] YAML frontmatter verified (`---` as first 3 chars)
- [x] All 5 required frontmatter keys present (title, date, description, category, author)
- [x] Schema JSON (Article + FAQ + LocalBusiness + Service)
- [x] Primary keywords in H2 headings
- [x] Metro Detroit / Oakland County location signals
- [x] E-E-A-T signals: Experience, Expertise, Authoritativeness, Trust
- [x] Forbidden terms check: PASS (no "manual entry," "lumber," "IRS," "appraisal," "old-school")
- [x] Quality Gate score: Pending

## Post-Publish Actions
- Share on LinkedIn (data-driven infographic version of the lead decay table)
- Share on X (speed-to-lead statistics thread — "What 1 minute of delay actually costs you")
- Share on Instagram (quote graphic: "Waiting 30 minutes costs you 90% of your leads")
