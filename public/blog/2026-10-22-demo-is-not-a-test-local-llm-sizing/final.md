---
title: "The Demo Is Not a Test: Sizing a Local LLM to Your Workload, Not Its Benchmark Score"
date: "2026-10-22"
description: "A vendor demo proves a local model can talk. It does not prove the model can read your files, hold a citation, or survive five people using it at once. Here is the sizing arithmetic and the pre-purchase test that turns a demo into a decision."
category: "Agentic Workflows"
author: "Agentic"
---
# The Demo Is Not a Test: Sizing a Local LLM to Your Workload, Not Its Benchmark Score
*Published: October 22, 2026 | By Agentic*
---
The demo always works. A salesperson opens a chat window on a box sitting on the conference table, asks it to summarize a contract, and the summary is good. Everyone in the room relaxes. Two months later the device is in a closet because it could not handle the actual work: a 180-page medical record set, four staff members asking questions at once, and a demand letter that needed a case citation the model invented.

A demo answers one question — can this model produce fluent text? — under the easiest conditions the vendor can arrange. Sizing a Local LLM for a practice is a different problem: arithmetic first, evaluation second, procurement last. Get the first two right and the third is short.

## Fit Is Three Numbers, Not One

Most buyers size on parameter count alone. Three numbers decide whether a device carries your workload.

**One: weight memory.** At FP16, each parameter costs two bytes, so a 14B model needs about 28 GB just for weights, and a 70B needs about 140 GB. Quantization changes that dramatically — a 14B model at Q4_K_M is roughly 9 GB in memory, a 32B roughly 20 GB. Add 15–25% for activations and runtime overhead before you decide the device is big enough.

**Two: KV-cache memory.** Every token of context the model holds costs memory, and that cost grows with every token added. Budget another 2–4 GB at a 32,000-token context on current 8B–14B architectures, more for larger models. A device sized to the weights alone runs out of memory exactly when someone pastes in a long document.

**Three: concurrency.** Published throughput figures are single-stream. A 7–8B model at Q4_K_M generates roughly 45–65 tokens per second on a 16 GB card and 25–40 on Apple silicon; a 70B on 128 GB of unified memory manages 6–10. Divide by the number of people who will use it at once and by the latency they will tolerate. That division, not the benchmark table, is what a five-person firm feels on a Tuesday afternoon.

| Tier | Weights at Q4_K_M | Single-stream speed | Realistic concurrent users | What it handles |
|---|---|---|---|---|
| 7–8B | ~5 GB | Fast (45–65 tok/s) | 3–5 | Summaries, classification, intake triage, drafting first passes |
| 14B | ~9 GB | Good | 2–3 | Contract review, structured extraction, longer instructions |
| 32B | ~20 GB | Moderate | 1–2 | Multi-step analysis, nuanced drafting, self-review |
| 70B | ~42 GB | Slow (6–10 tok/s) | 1 | Highest-stakes local drafting; rarely worth the hardware jump |

The 7B-to-14B jump is the one buyers feel most — roughly 8–12% on general knowledge benchmarks and considerably more on reasoning. The 32B-to-70B jump is worth 2–5%, rarely enough to justify doubling hardware cost. For most practices the answer is a 14B or 32B device with retrieval on top.

## Quantization Is a Risk Dial, Not a Compression Setting

Quantization stores model weights at lower precision. Q8_0 is close to lossless; Q5_K_M is excellent; Q4_K_M is the sensible default for professional work; Q3 and below is where quality loss becomes visible.

The failure order matters more than the average. When a model is compressed too hard, general conversation still reads fine — that is why the demo keeps working — but the tasks that depend on exact recall degrade first: pulling a date out of an exhibit, reproducing a clause verbatim, citing the page a fact came from. Those are the tasks a law firm or a medical practice actually buys the device for.

So the rule is boring: run Q4_K_M, and if the device has memory to spare, spend it on Q5 or Q8 rather than on a larger model squeezed down to Q3. A smaller model at higher precision generally beats a larger model at aggressive compression.

## Context Window Is Not Document Capacity

A 128,000-token context window does not mean the model can read a 200-page record set. It means the model will accept the tokens. Whether it uses them is a separate property.

The research is unambiguous. Liu and colleagues, in "Lost in the Middle" (arXiv 2307.03172, published in TACL in 2024), found that performance depends heavily on *where* relevant information sits in a long input: accuracy is highest when the answer is near the beginning or the end and degrades significantly in the middle, producing a U-shaped curve. Fill a context with 180 pages and the sentence that decides the matter is likely to be in the trough.

The fix is architectural, not parametric. Retrieval-augmented generation pulls the twelve most relevant passages out of your document store and puts *those* in front of the model, with page references intact. The model reads two pages instead of two hundred, and you get something a demo never produces: a citation you can check. For document-heavy work, retrieval quality decides outcomes more than the difference between 14B and 32B.

## The Test You Run Before You Buy

This is the part almost nobody does, and the only part that converts a demo into evidence. Build the test from your own files, on tasks you already do, before money changes hands.

1. **Collect 40 real tasks.** Not invented prompts. Actual redacted documents: an intake summary, an operative report, a lease, a demand letter, an insurance denial.
2. **Write the expected answer for each.** A human does this once. If you cannot state the correct answer, the task is not testable yet.
3. **Define pass criteria before you run anything.** For extraction, every field correct or the task fails. For summaries, a named omission list. For drafting, a partner or clinician marks it usable, usable-with-edits, or unusable.
4. **Run on the actual device, at Q4_K_M, with three concurrent users.** Sequential single-user testing hides the failure mode that matters most.
5. **Score it, and record failures by class.** Hallucinated citation, wrong date, dropped field, ignored instruction, refusal. A 90% pass rate with a 10% fabricated-citation rate is a fail.
6. **Keep the set.** It is your regression suite for every future model and every update, and it is documentation of due diligence.

Forty tasks take a few hours to assemble — cheaper than a device that ends up in a closet, and it doubles as the artifact that answers a regulator's question about how you validated software touching protected information, the same discipline behind a usable [AI paper trail](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-14-ai-compliance-paper-trail).

## What the Device Should Never Be Asked to Do

A local model removes the third-party disclosure problem, not the judgment problem. A 14B model is not a lawyer, a physician, or an accountant, and no configuration makes it one.

Keep four categories off the device's output path: anything requiring case law or a statute amended after the model was trained, since the model cannot know what it was never taught; final drafts that leave the building without human review; high-stakes numeric conclusions computed from tables; and any task where the model must be right the first time with no verification. The honest pattern is regression order — the model drafts, a person signs.

None of this argues for sending client data to a cloud provider. It argues for sizing the device to bounded tasks with human review, which is where the productivity lives. Private AI that stays on-premises is a different architecture for the same work, not a substitute for professional responsibility — and possession is not compliance: encryption, access control, backups, and incident response remain yours.

## Frequently Asked Questions

### How much memory does a local LLM need for a small practice?

A 14B model at Q4_K_M needs about 9 GB for weights, plus 15–25% overhead and 2–4 GB of KV cache at long context; a 32B needs about 20 GB. Size to the largest context you will actually use, not to the model file alone.

### Is Q4_K_M good enough, or do we need full precision?

Q4_K_M is the right default for professional work. Below Q4, exact-recall tasks degrade first — dates, identifiers, verbatim clauses, citations — which are usually the tasks that justified the purchase. If memory allows, spend it on Q5 or Q8 before spending it on more parameters.

### Can a local LLM read a 200-page document?

It can accept the tokens, but long-context performance is uneven: models use information near the start and end of an input far better than information in the middle. For long document sets, retrieval with page references outperforms pasting the whole file.

### How many people can use one local LLM device at once?

Plan on three to five concurrent users for a 7–8B model, two to three for 14B, and one to two for 32B, assuming interactive latency. Continuous batching helps throughput but not the arithmetic. Measure it with concurrent users during the evaluation, not after deployment.

### What benchmarks should we trust when comparing local models?

None of them directly. MMLU measures general knowledge, HumanEval measures code, and GSM8K measures grade-school math. None measures extraction fidelity or citation accuracy on your documents. Use benchmarks to build a shortlist, then run your own task set.

### Do we need a local LLM, or is a cloud AI with a contract enough?

If the workflow can run on de-identified data, cloud AI is often acceptable. If it requires identifiable patient records, privileged communications, or proprietary process data, the question becomes who holds the data — a contract allocates responsibility, it does not change custody. [Our breakdown of what a business associate agreement actually does](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-19-baa-is-not-a-vault-ai-privacy) covers that distinction.

## The Deliverable Is the Evidence

A device is hardware. What you are buying is a demonstrated fit between a model and a workload, on your files, at your concurrency, with failures you have already seen and named. Any vendor who cannot produce that test — including us — is selling a demo.

Agentic builds that way: a scope conversation about the tasks, a device sized to them, the forty-task evaluation run before delivery, and a written record of what passed. It sits alongside the other two things we build for Metro Detroit businesses — a [professional web presence](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-17-landing-page-to-real-website) that matches the operation behind it, and [verifiable workflows](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture) built on the Chainlink Runtime Environment so automation can be proven rather than asserted. If you are evaluating a device and want a second read on the sizing, [start a conversation](https://agenticportfoliox.github.io/AgenticRVR/contact) or call **(248) 313-8955**.

*Agentic (Renowned Value Restoration LLC) — professional websites, private AI, and verified automation for Metro Detroit businesses. Serving Oakland, Wayne, and Genesee Counties.*
