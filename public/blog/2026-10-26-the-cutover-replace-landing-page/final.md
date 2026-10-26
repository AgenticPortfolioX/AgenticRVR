---
title: "The Cutover: What to Protect When You Finally Replace the Landing Page"
date: "2026-10-26"
description: "Replacing a landing page with a real website does not cost rankings — an unplanned cutover does. Google's own site-move rules, the redirect map, the performance baseline, and the 30-day watch that keep an established Metro Detroit business from losing what it already built."
category: "Agentic Workflows"
author: "Agentic"
---
# The Cutover: What to Protect When You Finally Replace the Landing Page

*Published: October 26, 2026 | By Agentic*

---

The owner knows the landing page is holding them back. They have known for two years. What keeps it in place is not the cost of a new site — it is the fear that the day it goes live, the phone stops ringing.

That fear is well placed, and it is aimed at the wrong thing. A well-built site does not cost an established business its traffic. An unplanned cutover does: the hour when the old page comes down and the new one takes over, and nobody has mapped where the old addresses were supposed to go.

Cutover day is a project of its own.

## The Landing Page Is an Asset, Whether or Not It Looks Like One

A landing page that has been live for four years has accumulated things nobody itemized: links from a supplier, a chamber listing, a local news mention, a Google Business Profile pointing at it, a few hundred people who reached it searching the owner's name. It has a phone number people have called.

Replace it without a plan and every connection snaps at once: Google sees an address it has indexed come back as a 404, a prospect searching for last year's article gets an error page, the Business Profile sends people to a dead link. None of it shows up as an alert. It shows up three weeks later as a quieter phone.

The rebuild is worth doing in an order that does not spend existing credibility to buy new credibility. A [professional web presence](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-17-landing-page-to-real-website) should add to what a business has, not reset it.

## Four Ways a Cutover Loses Traffic

Almost every post-launch traffic drop traces back to one of four failures. None of them are mysterious after the fact. All of them are preventable beforehand.

| Failure mode | What it looks like in week one | The fix that prevents it |
|---|---|---|
| No redirect map | Old URLs return 404; indexed pages vanish; inbound links land on errors | One-to-one 301 or 308 from every old URL to its new equivalent, server-side |
| Leftover `noindex` | The new site is invisible in search and in AI answers; zero impressions | Strip development `noindex` and robots rules at cutover, page by page |
| Slower new site | Same content, worse Core Web Vitals, fewer form completions | Measure LCP, INP, and CLS before and after; block launch on regressions |
| Broken lead paths | Forms post to a dead endpoint, tracked numbers stop counting, Business Profile points at an old URL | Inventory every path a lead can take, then test each one on the live site |

The last two are the ones nobody assigns to anyone.

## What Google Actually Says About a Move

Most redesign anxiety comes from folklore. The documentation is unusually specific.

Permanent redirects — 301 and 308 — [do not cause a loss in PageRank](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes). The link equity follows the redirect. What is lost is time, not authority.

Google also says to expect fluctuation: for a medium-sized site, it can take [a few weeks or more](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) before new URLs replace old ones in results, and larger sites take longer. A dip that resolves over weeks is documented behavior, not a failed build. The real failures are the ones that do not resolve.

Three rules matter more than any checklist item:

**Move all URLs at once.** For small and medium sites, Google recommends a simultaneous move rather than section-by-section.

**Change one thing at a time.** If the domain, the content management system, and the layout are all changing, do them in sequence; four variables at once gives you no way to tell which one broke the site.

**Keep redirects up for at least a year.** That is Google's number for transferring signals and getting other sites to update their links.

One nuance saves a wasted step: the Change of Address tool in Search Console is for domain and subdomain changes only. A same-domain rebuild does not need it. Path changes are handled by redirects alone.

## The URL Map Is the Deliverable

The redirect map is a spreadsheet with two columns: the old address and the address that replaces it. Building it is the work of a cutover, and it cannot be done from memory.

Inventory old URLs from four sources: the XML sitemap if one exists, top landing pages in analytics, pages listed under links in Search Console, and a month of server logs. Then add what is easy to forget — images, PDFs, video embeds, any file ever linked or downloaded. Google's guidance is explicit that these move like pages, because they receive traffic like pages.

Then decide, per URL, which of three things is true. It maps to a new page, so it gets a permanent server-side redirect. It has no equivalent and no value, so it returns a 404 or 410 honestly. Or it should not exist at all, and the redirect points to its closest parent.

Avoid chains: a redirect should go straight to its final destination, because stacked hops add latency and are not reliably followed by every agent that visits. A 301 in `.htaccess` or a CMS redirect rule beats a JavaScript redirect, which sits lower on the reliability ladder.

For a Troy contractor or a Royal Oak dental practice, the map is often fewer than forty rows — a short map built carefully beats a long one built by guesswork.

## The New Site Has to Be Faster, Not Just Newer

A rebuild is the one moment a business controls its performance baseline, and it is regularly spent on a heavier homepage instead.

Record these before launch, on the live old site, at the 75th percentile — the level [web.dev defines as the passing threshold](https://web.dev/articles/vitals) for real users:

| Metric | What it measures | Pass threshold |
|---|---|---|
| Largest Contentful Paint (LCP) | Loading | 2.5 seconds or less |
| Interaction to Next Paint (INP) | Responsiveness | 200 milliseconds or less |
| Cumulative Layout Shift (CLS) | Visual stability | 0.1 or less |

Then hold the new site to those numbers before it replaces anything. Google's mobile-first indexing uses the mobile version of a page for ranking, so the phone measurement counts.

The payoff is not theoretical. In Deloitte's *Milliseconds Make Millions* study for Google — 37 brands, more than 30 million sessions, mobile load times tracked hourly for 30 days — a 0.1-second improvement across four speed metrics produced an [8.4% lift in retail conversions](https://web.dev/case-studies/milliseconds-make-millions) and 9.2% higher spend. On lead-generation sites, 21.6% more users reached the form submission page. One tenth of a second. A redesign that ships slower than the page it replaced hands that gain back.

## Lead Paths Break Quietly

Search traffic is the visible risk. The quiet one is everything that turns a visitor into a call.

Before cutover, inventory and then test on the live site: every form and its destination inbox, each tracked phone number, the website field on the Google Business Profile, directory and citation listings that carry the old URL, review-platform links, ad and campaign landing pages, and the analytics events that define a conversion. Add the UTM conventions, or next quarter's reporting will not reconcile with this quarter's.

Test with a real submission. A form that returns a success message while posting to a decommissioned endpoint is the most expensive kind of green checkmark.

## The 30-Day Watch

The first month tells you whether the plan worked. Watch five numbers, each with a decision rule so the response is not anxiety.

| What to watch | Where | Act when |
|---|---|---|
| 404 volume on new URLs | Search Console Pages report | Any old URL with traffic or links returns 404 — add the missing redirect |
| Indexed page count | Search Console Pages report | Flat or falling after two weeks, with no `noindex` explanation |
| Organic sessions by landing page | Analytics | A top-five page drops by more than half and stays down for two weeks |
| Form submissions and calls | Analytics and call tracking | Volume falls while sessions hold — a lead path is broken, not a ranking |
| Core Web Vitals on mobile | Search Console CWV report | Any metric falls out of the pass column on the new site |

Two weeks of softness in rankings is expected. Two weeks of a top page at zero traffic is a redirect you missed. That distinction is why the rules get written down before launch.

## What This Has to Do With the Rest of the Stack

A cutover plan looks technical. It is a risk document: a business should be able to prove what changed and when. That is the same principle behind [verifiable workflows](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture) built on the Chainlink Runtime Environment — an untracked change is how a good system fails with nobody noticing.

It also changes the decision: owners keep a landing page less because it works than because replacing it feels unsafe. Remove the unsafe part and [the architecture gets planned](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-08-one-page-cant-do-five-jobs), [the build gets scoped honestly](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-24-website-build-quote-checklist), and the switch lands on a day every old address knows where it is going.

## Frequently Asked Questions

### Will replacing my landing page hurt my search rankings?

Not by itself. Rankings drop when old URLs 404 without redirects, when development `noindex` tags stay live, or when the new site is slower than the old one. Google documents normal fluctuation: a few weeks or more for a medium-sized site.

### Do 301 redirects lose link value?

No. Google states that 301 and other permanent redirects do not cause a loss in PageRank. What you lose without them is the connection itself — a link that lands on a 404 transfers nothing.

### Do I need the Change of Address tool in Search Console?

Only if the domain or subdomain changes. A same-domain rebuild, a path change, or a move from HTTP to HTTPS does not require it. Redirects handle those.

### How long should redirects stay in place?

At least a year, per Google's guidance for transferring signals and letting other sites update links. Beyond that, keep them while people still use the old addresses, and point high-value external links straight at the new URLs.

### What should be measured before and after launch?

LCP at 2.5 seconds or better, INP at 200 milliseconds or better, and CLS at 0.1 or better, measured on mobile at the 75th percentile — plus organic sessions by landing page, form submissions, call volume, and indexed page count as a baseline taken the week before cutover.

### Can we just keep the old landing page live as a backup?

Only if it has a job the new site does not do. Two live pages targeting the same service compete with each other, and the usual result is that neither ranks as well as one would. If the old page has traffic or links, redirect it to the new equivalent; if it has neither, retire it honestly with a 404 or 410.

## The Cutover Is the Part You Can Control

The anxiety about replacing a landing page is anxiety about losing something you cannot see. Redirects, baselines, and a written watch list turn it into a known quantity.

That is what makes a rebuild safe to approve — and what makes a professional web presence something you keep improving rather than something you are afraid to touch. Future-proof your business by making the switch boring.

Agentic builds websites for established Metro Detroit businesses that have outgrown their landing pages, and runs the cutover as a scheduled phase: a full URL map, redirects tested before the switch, mobile Core Web Vitals recorded on both sides, and a 30-day watch with named thresholds. Serving Oakland, Wayne, and Genesee Counties. [Start a conversation](https://agenticportfoliox.github.io/AgenticRVR/contact) or call **(248) 313-8955**.

*Agentic (Renowned Value Restoration LLC) — professional websites, private AI, and verified automation for Metro Detroit businesses.*
