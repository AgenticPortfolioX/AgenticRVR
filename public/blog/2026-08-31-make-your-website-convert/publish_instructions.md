# Publish Instructions — Built Is Not Enough (2026-08-31)

## Post
- **Title:** Built Is Not Enough: How Metro Detroit Businesses Turn a Real Website Into Pipeline
- **Slug/dir:** `2026-08-31-make-your-website-convert`
- **Category (frontmatter):** "Agentic Workflows" (brand name — do NOT use the pillar name "Website & Conversion Strategy")
- **Author:** Agentic
- **Pillar:** 6 — Website & Conversion Strategy

## Files (4, flat in blogged/2026-08-31-make-your-website-convert/)
1. `final.md` — blog content (YAML frontmatter required; verified `---` first 3 chars)
2. `feature_image.png` — 720p (1280x720) 16:9 feature image
3. `sdira_compliance_schema.json` — schema.org JSON-LD (Article + FAQPage + LocalBusiness + Service). **Deploy to GitHub as `schema.json`** (website builder `sync-blog.ts` expects that filename).
4. `publish_instructions.md` — this file

## Deployment
- **GitHub repo:** `AgenticPortfolioX/AgenticRVR`
- **Target path on main:** `public/blog/2026-08-31-make-your-website-convert/`
- **Method:** `github-blog-deployment` skill (no-clone GitHub API, GitHub App JWT auth). Auto-deploy immediately after Quality Gate passes — do not wait for approval.
- **Registry:** do NOT manually update `blog-posts.json` — the GitHub Action `blog-automation.yml` syncs it on push.
- **Post-deploy verification:** (a) inline API check that 4 files exist under `public/blog/2026-08-31-make-your-website-convert/`, (b) GitHub Actions runs for the deploy commit (Auto-Sync + Pages) succeed, (c) live URL renders: https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-31-make-your-website-convert

## Cross-Links in Post (already embedded)
- 2026-08-17 landing-page-to-real-website (Pillar 1 — the credibility case this post builds on)
- 2026-08-27 the-modern-business-stack (Pillar 8 — stack tie-in: site captures, private AI qualifies, verifiable workflows prove)

## SEO/GEO Notes
- Primary keywords: "website conversion optimization", "landing page vs website", "local SEO Metro Detroit", "professional website builder Metro Detroit" — in H1, intro, and body.
- 6 FAQ questions in body AND FAQPage schema (snippet/AI-answer-ready, 2-4 sentence answers, front-loaded numbers).
- GEO angle: post explicitly covers AI search citations favoring multi-page sites — differentiator vs. national CRO content.
- Local signals: Metro Detroit, Oakland/Wayne/Genesee counties, Auburn Hills address, (248) 313-8955, valuerestoration@gmail.com.
- Key phrases woven in (5/8): "Professional web presence" ×2, "Local LLM" ×1, "Chainlink Runtime Environment" ×1, "Verifiable workflows" ×1, "Future-proof your business" ×1.

## Social
- LinkedIn (B2B): post the headline + the 2.9% vs 11.45% gap stat + link. No hashtags, no emojis.
- X (AI/community): short punchy hook — "Your website is live. The silence isn't normal. 2.9% median conversion isn't a ceiling."
