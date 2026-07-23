# Publish Instructions: AI Appointment Scheduling Post

## Post Metadata
- **Title:** Your Time, Automated: How AI Appointment Scheduling Saves Metro Detroit Small Businesses 15+ Hours Every Week
- **Date:** 2026-07-23
- **Slug:** ai-appointment-scheduling-automation-metro-detroit
- **Category:** Agentic Workflows
- **Author:** Agentic
- **Pillar:** Pillar 2: Future-Proofing Small Biz
- **Primary Keyword:** AI scheduling automation Metro Detroit
- **Word Count:** ~1,700 words

## Files to Publish

| File | Path | Purpose |
|------|------|---------|
| `final.md` | `blog_final/final.md` | Blog post content with YAML frontmatter |
| `feature_image.png` | `blog_images/feature_image.png` | 1280x720 feature image |
| `sdira_compliance_schema.json` | `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD structured data (Article + FAQPage + LocalBusiness + Service) |
| `publish_instructions.md` | `publish_instructions/publish_instructions.md` | This file |

## Deployment Steps

1. **GitHub Pages Deployment** via `github-blog-deployment` skill:
   - Push `final.md` to the AgenticRVR blog repository
   - Push `sdira_compliance_schema.json` for structured data
   - Push `feature_image.png` to `assets/images/ai-appointment-scheduling-automation-metro-detroit/feature_image.png`
   - Update the blog index to include the new post entry

2. **Social Media Promotion** (LinkedIn, X/Twitter):
   - Primary LinkedIn post: AI scheduling ROI statistics (lead with the 15+ hours/week saved stat)
   - X/Twitter thread: Break down the no-show cost numbers by industry
   - Instagram: Short video or infographic on no-show rates

3. **Internal Linking**: Add links from the blog home page and related posts
   - Link to: `after-hours-leads-worth-more` (June 25) — "after-hours leads convert at 2.5x"
   - Link to: `ai-phone-agent-lead-intake` (July 13) — "AI phone agent captures every lead"
   - Link to: `speed-to-lead-by-the-numbers` (June 8) — "responding within 5 minutes"

4. **Schema Deployment**: Ensure the JSON-LD is embedded in the blog HTML or served via `<script type="application/ld+json">` tag

5. **Post-Publication Verification**:
   - Verify rendering: Blog post loads correctly at the slug URL
   - Verify schema: Use Google Rich Results Test to validate JSON-LD
   - Verify image: Feature image renders in blog card view
   - Verify category: Post appears under "Agentic Workflows" category filter

## Notes
- This is Pillar 2 (Future-Proofing Small Biz) content — complements the existing Pillar 1 (ROI of Speed) and Pillar 3 (Visual Storytelling) posts
- Contains data tables that support featured snippet extraction for "no-show rate by industry" queries
- FAQ section targets "AI appointment scheduling" and "automated appointment reminders" featured snippets
- Brand key phrases woven in: "Speed to Lead", "Autonomous Workflow", "Zero Latency Growth", "Future-proof"
