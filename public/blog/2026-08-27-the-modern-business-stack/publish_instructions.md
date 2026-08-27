# Publish Instructions — The Modern Business Stack (2026-08-27)

## Post
- **Title:** The Modern Business Stack: How Websites, Private AI, and Verified Workflows Compound for Metro Detroit Businesses
- **Slug/dir:** `2026-08-27-the-modern-business-stack`
- **Category (frontmatter):** "Agentic Workflows" (brand name — do NOT use the pillar name "The Modern Business Stack")
- **Author:** Agentic
- **Pillar:** 8 — The Modern Business Stack

## Files (4, flat in blogged/2026-08-27-the-modern-business-stack/)
1. `final.md` — blog content (YAML frontmatter required; verified `---` first 3 chars)
2. `feature_image.png` — 720p (1280x720) 16:9 feature image
3. `sdira_compliance_schema.json` — schema.org JSON-LD (Article + FAQPage + LocalBusiness + Service). **Deploy to GitHub as `schema.json`** (website builder `sync-blog.ts` expects that filename).
4. `publish_instructions.md` — this file

## Deployment
- **GitHub repo:** `AgenticPortfolioX/AgenticRVR`
- **Target path on main:** `public/blog/2026-08-27-the-modern-business-stack/`
- **Method:** `github-blog-deployment` skill (no-clone GitHub API, GitHub App JWT auth). Auto-deploy immediately after Quality Gate passes — do not wait for approval.
- **Registry:** do NOT manually update `blog-posts.json` — the GitHub Action `blog-automation.yml` syncs it on push.
- **Post-deploy verification:** (a) inline API check that 4 files exist under `public/blog/2026-08-27-the-modern-business-stack/`, (b) GitHub Actions runs for the deploy commit (Auto-Sync + Pages) succeed, (c) live URL renders: https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack

## Cross-Links in Post (already embedded)
- 2026-08-17 landing-page-to-real-website (Pillar 1)
- 2026-08-13 hipaa-local-llm-private-ai (Pillar 2)
- 2026-08-20 chainlink-runtime-environment-cre-workflows (Pillar 3)
- (Sovereign technology 2026-08-24 referenced by phrase; no URL link — intentional)

## SEO/GEO Notes
- Primary keyword "modern business stack" in H1 + first paragraph + FAQ #1.
- Exact phrase "Chainlink Runtime Environment" appears verbatim (canonical product name).
- 6 FAQ questions in body AND FAQPage schema (snippet-ready, 2-4 sentence answers, front-loaded).
- Local signals: Metro Detroit, Oakland/Wayne/Genesee counties, Auburn Hills address, (248) 313-8955.

## Social
- LinkedIn (B2B): post the headline + 2-3 sentence takeaway + link. No hashtags, no emojis.
- X (AI/Chainlink community): short punchy thread hook on the three-layer stack.
