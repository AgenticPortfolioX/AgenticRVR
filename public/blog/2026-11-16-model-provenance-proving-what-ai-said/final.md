---
title: "Proving What the AI Said Six Months Later"
date: "2026-11-16"
description: "Your compliance framework already requires a record of what your AI system said, on which model version, with whose review — and vendors retire models on published schedules. Here are the four layers of proof, the seven fields a log has to hold, and a thirty-minute drill that shows whether you could answer a subpoena about an AI decision you made last spring."
category: "Agentic Workflows"
author: "Agentic"
---
# Proving What the AI Said Six Months Later

Somebody will ask. It arrives as a subpoena in a matter you had forgotten, an audit letter, a malpractice carrier's annual questionnaire, or a client who wants to know why the draft said what it said.

The question is never "was the AI accurate?" Accuracy is a judgment, and judgments get argued. The question is a demand for a record: what did the system say, on which version, under which policy, with whose review, and where is the file.

For most businesses that put an assistant into production in the last two years, that file does not exist. Not because nobody thought to make one. Because the thing that produced the answer has already been retired.

## The Ask Is Structural, Not Technical

Federal discovery has no AI category. Prompts and outputs are electronically stored information under Rule 34, and Rule 34 reaches what a party can access — including data on someone else's servers. A court applied that reasoning to text messages held by a carrier in *Flagg v. City of Detroit*, 252 F.R.D. 346 (E.D. Mich. 2008), a case litigated twenty minutes from our office.

In the Southern District of New York, the logic landed on a model vendor directly. On May 13, 2025, a magistrate ordered OpenAI to preserve output logs it would otherwise delete, including logs deleted at users' own request. On December 2, 2025, the court denied reconsideration and ordered production of 20 million de-identified logs. The operational lesson is not subtle: an AI conversation is a document, and its retention window belongs to whoever set the default.

## Four Layers of Proof

A provenance record is not one artifact. It is four, and each answers a different question.

| Layer | What it establishes | What it does not establish |
|---|---|---|
| Input | the prompt, retrieved context, timestamp, user | that the context was complete |
| Model identity | model name, version, weights hash, sampling settings | that the model was any good |
| Output | verbatim response, tool calls, reviewer, decision taken | that a human agreed with it |
| Policy in force | system prompt and guardrail version at that moment | that the guardrail worked |

## Three Frameworks Already Require This — and None of Them Say "AI"

The HIPAA Security Rule's audit control standard, 45 CFR §164.312(b), requires "hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain **or use** electronic protected health information." The two words that matter are *or use*. An assistant that reads a chart to draft a note is a system that uses ePHI, so the mechanism has to exist for it — the same standard that made your practice-management system log every record view.

Retention is set separately. 45 CFR §164.316(b)(2)(i) holds documentation for six years from creation, or from the date it was last in effect, whichever is later. Six years is longer than most AI products have existed.

Professional responsibility moved faster than the regulators. ABA Formal Opinion 512 (July 29, 2024) applied the existing Model Rules — competence, confidentiality, communication, supervision, candor, fees — to generative AI rather than inventing an AI rule. The Florida Bar's Ethics Opinion 24-1 (January 19, 2024) did the same with confidentiality, oversight, accuracy, and billing. Neither opinion uses the word "provenance." Both become impossible to satisfy without it. The contract layer beneath all of this — what a business associate agreement does and does not protect — is covered in [The BAA Is Not a Vault](/blog/2026-10-19-baa-is-not-a-vault-ai-privacy).

## "Run It Again" Is Not Evidence

Every model has a shutdown date and the vendors publish them. OpenAI's stated policy gives at least six months' notice for generally available models, three months for specialized variants, and as little as two weeks for anything labeled preview.

On October 23, 2026, that policy took the production defaults of 2025 off the board: the GPT-4o 2024-05-13 snapshot, GPT-4.1-nano, GPT-4-turbo, o1, o1-pro, o3-mini, o4-mini. More follow on December 11, 2026 (the original GPT-5 and o3 snapshots) and January 14, 2027 (GPT-4o, GPT-4o mini, GPT-4.1, GPT-4.1 mini).

A six-year retention obligation therefore spans a dozen model generations. If your evidence strategy is "we can regenerate the answer," the answer stopped being regenerable on a date you did not choose, disclosed on a page you were not reading.

## Temperature Zero Is Not Determinism

Even inside the window, replay is unreliable. Thinking Machines Lab published the mechanism in September 2025: temperature zero still returns different text, on hosted APIs and on self-hosted inference servers alike. The usual explanation — floating-point non-associativity across GPU cores — is only part of the story. Their tests showed repeated identical matrix multiplications returning bitwise-identical results.

The actual cause is that standard kernels are not batch-invariant. The reduction order for a given request changes with the batch size it lands in, and batch size is set by how busy the server happens to be. Your answer depends on someone else's traffic.

It is fixable. Thinking Machines rebuilt the RMSNorm, matrix multiplication, and attention kernels to be batch-invariant and recovered determinism — at roughly a 20% throughput cost in their implementation. Determinism is a trade you can buy. It is not a property you can assume.

## Seven Fields That Answer the Question

- A request identifier, with timestamp and timezone, and the authenticated user
- The model name *and* the version string the API returned, not the marketing name
- A hash of the weights file on-premises, or the exact snapshot ID if hosted
- Sampling configuration: temperature, top-p, token ceiling, seed where supported
- Which documents were retrieved into context, at which version
- The output verbatim, hashed at capture, plus the reviewer's identity and the decision taken
- The governing policy version: system prompt, guardrails, and approval rule

Seven fields. None requires storing a patient's chart, and all seven fit in one structured-log row. A business that can produce that row for any AI-assisted decision in the last six years answers the subpoena in an afternoon. A business that cannot answers it in a deposition.

## The Log Is a Second Copy of the Secret

The log inherits the sensitivity of the content. A record of a conversation about a patient is itself ePHI. A record of a conversation about a client's exposure is itself privileged material. It needs the same encryption, the same access control, and the same audit trail as the system it describes.

That produces a real tension. Minimize what you keep, then be ready to suspend minimization. Routine deletion loses to a litigation hold, and the OpenAI order is explicit that deletion requests under privacy law do not excuse preservation once a dispute is anticipated. Keep metadata permanently, keep content under a stated retention rule, and know which switch turns deletion off.

## Why Local Changes the Answer

Deployment choice stops being a preference here and becomes an evidence decision.

On a hosted endpoint, the record you keep describes a model you do not control, on a schedule you did not set, identified by a version string whose meaning the vendor can change. On a [local LLM device](/blog/2026-09-17-local-llm-device-anatomy), the weights are a file. You hash it at install, you record the hash on every request, and nobody retires it out from under a six-year obligation — and the [year-three math](/blog/2026-11-02-owning-stack-after-hardware-refresh) on that ownership is far smaller than a discovery sanction. The device either still runs that model or the model never changed.

That is what private AI that stays on-premises buys beyond confidentiality: a fixed referent. Where a dispute crosses party lines and each side needs assurance the record was not altered afterward, the hash can be anchored through a Chainlink Runtime Environment workflow so every party verifies the same value. The architecture behind that is set out in [Hash, Don't Host](/blog/2026-10-12-hash-dont-host-verifiable-records-architecture) — verifiable workflows doing the narrow job they are actually good at, not replacing your systems, timestamping the moment they disagreed.

## The Thirty-Minute Drill

Pick one AI-assisted decision from roughly six months ago — a drafted letter, a summarized intake, a coded note — and reconstruct it without asking anyone who was in the room.

Score one point for each you can answer: the exact prompt; the model and its version; the retrieved context; the output as delivered; who reviewed it; what decision resulted.

Most businesses score one or two, and the gap is almost never technical. The chat history exists. It sits in a personal account, on a vendor's retention clock, under a name nobody recorded, describing a version string nobody captured.

## Frequently Asked Questions

### How long do we have to keep records of AI interactions?

For HIPAA-covered work, six years. 45 CFR §164.316(b)(2)(i) requires retaining security documentation for six years from creation or from when it was last in effect, whichever is later. Litigation holds can extend that further, and a hold suspends routine deletion immediately.

### Are AI chat logs discoverable in litigation?

Yes. They are electronically stored information under Rule 34, and courts have treated data on third-party servers as within a party's control — *Flagg v. City of Detroit*, 252 F.R.D. 346 (E.D. Mich. 2008). In *In re OpenAI* (S.D.N.Y.), a May 2025 order compelled preservation of output logs over privacy objections.

### Does setting temperature to zero make an AI's answers reproducible?

No. Thinking Machines Lab showed in September 2025 that standard inference kernels are not batch-invariant, so server load alone changes the output. Batch-invariant kernels restore determinism at roughly a 20% throughput cost. Log the answer; do not plan to regenerate it.

### What is model provenance?

The record of four things: what went in, which model version produced the output, what came out, and which policy governed the exchange. It is what lets a business answer "what did the system tell you" with a file instead of an estimate.

### Can screenshots of the AI's answers satisfy this?

Only as a last resort. A screenshot has no verifiable hash, no version string, and no reviewer identity, so it proves an image existed rather than what the system produced. A HIPAA-ready AI deployment captures the structured row at the moment of the request instead.

## What This Buys You

You do not have to predict what the model will say. You have to be able to show what it said. One structured row, one weights hash, one policy version — that is the difference between an answer and a liability, and the cheapest moment to build it is before anybody asks.
