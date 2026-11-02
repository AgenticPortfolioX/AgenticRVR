---
title: "The Refresh Cycle Nobody Budgets For: What Owning Your AI Stack Actually Costs After Year Three"
date: "2026-11-02"
description: "Most owners compare a capital purchase to a monthly seat and conclude that owning AI hardware is expensive. Priced honestly — hardware, support, Michigan power, and a planned refresh — a local LLM device lands near parity with a cloud seat and stops scaling per head. Here is the math, including the parts that argue against buying."
category: "Agentic Workflows"
author: "Agentic"
---
# The Refresh Cycle Nobody Budgets For: What Owning Your AI Stack Actually Costs After Year Three

*Published: November 2, 2026 | By Agentic*

---

A nine-person law firm in Royal Oak does not buy a $420,000 GPU server. It buys a box the size of a hardcover book, sets it on a shelf beside the network switch, and stops sending client documents to a vendor's cloud.

That decision is easy to make and harder to keep. The privacy argument holds on day one and gets stronger every year. The financial argument is where these projects quietly die — not because owning is expensive, but because nobody priced the refresh.

## Two Clocks Are Running

Every piece of AI hardware is measured by two clocks that move at different speeds. The first is useful life: how long the machine does work worth paying for. The second is resale value: what someone else will hand you for it.

The useful-life clock is slow. Alphabet depreciates servers over roughly six years, Meta extended most of its fleet to five and a half, and Amazon shortened a subset to five. An A100 shipped in 2020 is still under contract into 2029 ([NVIDIA](https://blogs.nvidia.com/blog/productive-durable-fungible-ai-factories/), citing Sprout's September 2026 analysis).

The resale clock is not slow. Equipment financier CHG-MERIDIAN puts a B300 server at about **33 percent of its purchase price after two years**, where a six-year straight-line schedule still carries it at roughly 67 percent ([CHG-MERIDIAN, October 21, 2026](https://www.chg-meridian.com/us-en/insights/blog/gpu-depreciation)).

Their worked example is the one to remember: a $420,000 server, six-year life, refreshed at year three. Book value $210,000. Market value about $114,000. A **$96,000 loss**, booked in the same year the company pays for new hardware.

| Clock | What it measures | Horizon |
|---|---|---|
| Useful life | Years the hardware still earns its keep | 5–6 years at the hyperscalers |
| Resale value | What the secondary market pays | Most of the drop happens in the first 24 months |

Neither clock decides anything on its own. The refresh *date* does — and that is a decision you make at purchase or you make under pressure.

## Three Tiers, Three Different Problems

The number that scares owners — $420,000 — belongs to a rack-scale deployment. A professional practice buys something else entirely, and applying datacenter math to a desktop device is how good projects get canceled.

| Tier | What it is | Typical cost | Realistic refresh horizon |
|---|---|---|---|
| Desktop device | Single local LLM box, 128GB unified memory, 140–480W | ~$4,700–$5,500 (DGX Spark $4,699; Mac Studio 128GB $4,799–$5,400) | 3–4 years, or when the model you need no longer fits |
| Workgroup box | Two to four devices or one larger workstation serving a floor | $15,000–$40,000 | 3 years |
| Rack server | Datacenter GPU server, liquid or high-density air | $150,000–$500,000 | 3–5 years, with a real resale loss |

At the desktop tier, the entire refresh risk is a few thousand dollars — the price of a used car, spread over four years. That is not the same decision as a $420,000 write-down, and it should not be argued as one.

## The Seat Math

Here is the calculation most vendors avoid, because it is where the cloud looks cheaper in year one and stops looking cheaper afterward.

Take a $5,000 device, a four-year life, $600 a year for support and patching, and Michigan commercial power at **16.46 cents per kilowatt-hour** (EIA, July 2026). A device drawing about 90 watts across a working day costs **$29.63 a year** to run — a rounding error next to the hardware.

Total: **$1,879.63 a year**, for every seat the device serves.

| Users on the device | Cost per seat, per month |
|---|---|
| 5 | $31.33 |
| 8 | $19.58 |
| 12 | $13.05 |
| 20 | $7.83 |

Against that, Microsoft 365 Copilot Business lists at **$21 per user per month** — $23.50 bundled with Business Standard, and $69 all-in at the E3 tier ([Microsoft](https://www.microsoft.com/en-us/copilot/pricing/business)). Eight seats of Copilot Business is $2,016 a year.

So at eight users, private AI that stays on-premises costs about the same as a rented seat, and the curve then bends the other way. Adding a ninth person to a device costs nothing. Adding a ninth seat costs $21 a month, forever, and the twenty-fifth seat at the enterprise tier runs $20,700 a year.

Scale that up and the structure gets stark. ChatGPT Enterprise is quoted around **$60 per seat per month with a reported 150-seat minimum** ([CloudZero](https://www.cloudzero.com/blog/chatgpt-enterprise-pricing/)) — roughly $108,000 a year before a single document is processed. That is not an option for a 12-person firm. It is also why the comparison that matters is not "cloud versus local." It is "per-head forever" versus "a device you already own."

## What Survives the Refresh

This is the part that decides whether owning was smart.

The box is a consumable. In three or four years it will be slower than a $1,200 replacement, and the honest move is to retire it. What does not get retired is everything you built on it: the indexed client files, the tuned prompts, the retrieval corpus, the document templates, the workflows, the evaluation set that proves the model got the right answer. Set the migration up correctly and a refresh is an afternoon of copying data and re-running an evaluation script.

Set it up incorrectly and the refresh becomes a project nobody scoped, so the device stays in service two years past useful, quietly slower, while staff route around it to a consumer chatbot on a personal phone — which is exactly the outcome the purchase was meant to prevent.

The test at purchase is one question: *if this hardware were destroyed tomorrow, how long until we are working again?* If the answer is "we don't know," you own a device, not a stack. [Sizing the workload properly](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-22-demo-is-not-a-test-local-llm-sizing) is the other half of that discipline, and it is cheaper to do before the purchase than after.

## Refresh on Triggers, Not on a Calendar

The instinct is to buy on a schedule. The research says schedules are the wrong instrument. A 2025 TCO framework for AI datacenters found that many alternative refresh policies beat a fixed baseline by **15 to 20 percent**, because GPU generations do not improve at a steady rate — some deliver dramatic efficiency gains and others are marginal ([arXiv 2509.26534](https://arxiv.org/html/2509.26534)).

The practical version for a small practice: pick triggers, not dates.

- **Memory ceiling.** The model you need no longer fits in the memory you have. This is the most common and least negotiable trigger.
- **Capability gap.** A new model generation changes what is possible for your actual work, not for a benchmark.
- **Maintenance expiry.** The support contract costs more than the device is worth.
- **Utilization.** The device is saturated at peak and staff are waiting.

If none of those fire, skip the generation. That is not falling behind; it is avoiding a write-down on hardware that still does the job.

## The Honest Limits

Owning costs money up front, and pretending otherwise loses the room. A $5,000 capital purchase is not a $175 monthly subscription, even when the four-year totals land in the same place. Cash flow matters, and so does the fact that you are now responsible for patching, backups, and the physical device.

There is also a real feature gap. A local device does not ground answers in your Microsoft 365 tenant the way Copilot does, and it will not match a frontier model on every task. What it does is keep privileged material, patient records, and proprietary data inside a building you control — a requirement no subscription can satisfy, which is the whole reason the category exists ([what HIPAA and privilege actually demand](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-19-baa-is-not-a-vault-ai-privacy)).

And the arithmetic changes with scale. Above roughly 40 users with heavy daily use, a workgroup box or a small rack deployment usually wins on cost per seat. Below eight, a rented seat is often the rational purchase. The honest answer depends on headcount, caseload, and what the data is worth if it leaks.

## Frequently Asked Questions

### How long does on-premises AI hardware last before it needs replacing?

Plan on three to four years for a desktop local LLM device. The machine will still run, but newer models will outgrow its memory before its silicon wears out — so the memory ceiling, not the calendar, sets the date.

### Is owning AI hardware cheaper than a per-seat subscription?

At eight users, a $5,000 device with support and power costs about $19.58 per seat per month against $21 for Microsoft 365 Copilot Business. Above ten seats the owned option pulls ahead quickly because adding a user costs nothing.

### What happens to my data when the hardware is replaced?

It moves with you, if you planned for it. The indexed files, prompts, retrieval corpus, and evaluation set live in a directory structure you control; a refresh means copying them to the new device and re-running the evaluation.

### Do I need to replace the whole device or just part of it?

For a desktop device, replace the unit — component upgrades rarely pay back at that scale. For a workgroup box or rack server, memory and storage upgrades can extend life a year or two, but a GPU generation change means a new machine.

### What does a local LLM device cost for a small practice?

Expect roughly $4,700 to $5,500 for a capable desktop device, plus about $600 a year in support and $30 a year in electricity at Michigan commercial rates. A workgroup deployment serving a floor runs $15,000 to $40,000.

## Year Three Is a Decision You Make in Year One

The sovereign technology case is usually argued as principle. The version that survives a budget meeting is arithmetic: a planned refresh is a line item, an unplanned one is a loss.

Own the stack, price the refresh, and write down what carries forward when the box goes. That is the difference between buying hardware and building infrastructure — and it is what makes the privacy decision hold up for the next decade instead of the next eighteen months. Future-proof your business: [start with a sizing conversation](https://agenticportfoliox.github.io/AgenticRVR/contact) or call **(248) 313-8955**.

*Agentic (Renowned Value Restoration LLC) — professional websites, private AI, and verified automation for Metro Detroit businesses.*
