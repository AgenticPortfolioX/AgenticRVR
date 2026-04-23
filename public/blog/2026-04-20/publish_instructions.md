# Publishing Instructions
**Date:** 2026-04-20  
**Post:** From Lead Capture to 5-Star Review: Building an Autonomous Workflow That Never Sleeps  
**Brand:** Agentic  
**Target:** GitHub Pages (AgenticPortfolioX/AgenticRVR)

---

## File Manifest (4 files for deployment)

| File | Source Path | Target Path |
|---|---|---|
| `final.md` | `blog_posts/2026-04-20-autonomous-workflow-lead-to-review/blog_final/final.md` | `public/blog/2026-04-20/final.md` |
| `feature_image.png` | `blog_posts/2026-04-20-autonomous-workflow-lead-to-review/blog_images/feature_image.png` | `public/blog/2026-04-20/feature_image.png` |
| `sdira_compliance_schema.json` | `blog_posts/2026-04-20-autonomous-workflow-lead-to-review/sdira_compliance_schema/sdira_compliance_schema.json` | `public/blog/2026-04-20/sdira_compliance_schema.json` |
| `publish_instructions.md` | `blog_posts/2026-04-20-autonomous-workflow-lead-to-review/publish_instructions/publish_instructions.md` | `public/blog/2026-04-20/publish_instructions.md` |

## Pre-Deployment Checklist
- [x] `final.md` starts with YAML frontmatter (`---` on line 1)
- [x] Frontmatter contains exactly 5 keys: title, date, description, category, author
- [x] Category is "Agentic Workflows"
- [x] Author is "Agentic"
- [x] Schema JSON validates (Article + FAQ + LocalBusiness + Service)
- [x] No forbidden terms in content ("Manual entry", "Lumber", "IRS", "Appraisal", "Old-school")
- [x] Brand voice: Dynamic, Professional, Tech-Forward

## GitHub Deployment
- **Repository:** AgenticPortfolioX/AgenticRVR
- **Branch:** main
- **Target Path:** `public/blog/2026-04-20/`
- **Method:** No-Clone API Deployment (GitHub App Token)

## Post-Deployment
- GitHub Action `blog-automation.yml` will automatically run `scripts/sync-blog.ts`
- The script reads `final.md` frontmatter and regenerates `src/data/blog-posts.json`
- **Do NOT manually update the blog registry** — the Action handles it

## Verification
After deployment, verify the post renders at:
https://agenticportfoliox.github.io/AgenticRVR/blog

The blog post URL will be auto-generated from the frontmatter by the sync script.
