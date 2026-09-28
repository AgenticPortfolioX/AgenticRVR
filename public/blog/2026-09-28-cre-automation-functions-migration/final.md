---
title: "The Deadline Already Passed: Migrating Chainlink Automation and Functions to CRE Before a Silent Failure Compounds"
date: "2026-09-28"
description: "Chainlink Automation v1.x, v2.1, and Functions have all passed their published sunset dates. Here is the five-minute check that tells you whether your workload stopped, the seven-step AutomationReceiver migration, and the two controls that decide whether it holds in production."
category: "Agentic Workflows"
author: "Agentic"
---
# The Deadline Already Passed: Migrating Chainlink Automation and Functions to CRE Before a Silent Failure Compounds
*Published: September 28, 2026 | By Agentic*
---
Open the Chainlink Automation dashboard today and the first thing you see is no longer a warning. It is a status report: **"Chainlink Automation is being deprecated. Chainlink Runtime Environment (CRE) is its replacement, with built-in automation and more."**

The dates behind that banner have all passed. Automation v1.x sunset **June 30, 2026**. Automation v2.1 sunset **July 31, 2026**. Chainlink Functions shut down on mainnet **June 30, 2026** — 90 days, 59 days, and 90 days ago. This stopped being a migration you plan. It is one you either finished or are about to discover you did not.

## Every Published Deadline, and How Far Behind It Is

| Service | Published sunset | Elapsed as of September 28, 2026 |
|---|---|---|
| Chainlink Automation v1.x | June 30, 2026 | **90 days** |
| Chainlink Automation v2.1 | July 31, 2026 | **59 days** |
| Chainlink Automation v2.1 (testnet) | June 24, 2026 | 96 days |
| Chainlink Functions (CLF), mainnet | June 30, 2026 | **90 days** |
| Chainlink Functions (CLF), testnet | June 15, 2026 | 105 days |

The dashboard also published temporary service-interruption windows ahead of the cutoff — the first a four-hour block on July 15, 9:00 AM to 1:00 PM EST.

## The Five-Minute Check — and Why a Live Contract Can Still Be Dead

You do not need to read code to know whether you are affected. The deprecation notice sits on the Automation dashboard, and anything on a registry earlier than v2.1 carries it.

Then there is the silence, which is the part that matters. Automation was a push service: the network simulated your `checkUpkeep()` off-chain and, when it returned true, sent the transaction that ran `performUpkeep()`. When a push service stops pushing, **nothing calls your contract and nothing emails you**. The contract still verifies and still reports a healthy balance; the work it was written to trigger simply never happens again.

That gap between *deployed* and *performed* is the whole story. Your contract was half the machine; the Automation network was the other half, and it has been retired.

## What Replaces Upkeeps: Workflows

Where Automation had an upkeep, CRE has a **workflow**: a TypeScript or Go project compiled to WebAssembly and started by a trigger — a cron schedule, an HTTP request, or an on-chain log event. Off-chain logic runs in a handler; results return on-chain as a signed report delivered by the CRE `KeystoneForwarder` to any contract implementing `IReceiver`. Chainlink describes CRE as a functional superset: everything Automation does, CRE does, on every chain Automation supported.

| Chainlink Automation | Chainlink CRE |
|---|---|
| Upkeep registration | CRE workflow deployment |
| `checkUpkeep()` | Workflow logic inside the handler |
| `performUpkeep(bytes)` | `onReport(metadata, report)` on an `IReceiver` |
| Time-based Upkeep | Cron trigger |
| Log Trigger Upkeep | EVM Log trigger |
| Custom Logic Upkeep | Cron trigger + `evmClient.callContract()` |
| Automation Registry | CRE workflow registry |
| Automation Forwarder | `KeystoneForwarder` + receiver authorization |

The row worth reading twice is the second. Your check logic is not thrown away — it moves into the workflow handler, and because it now runs off-chain, it is no longer squeezed by on-chain gas limits.

## The Bridge Pattern: Seven Steps

The official route is an `AutomationReceiver.sol` bridge from the `automation-migration` starter template. It receives CRE reports and forwards approved calls to your existing contract, so your business logic usually stays untouched.

1. **Scaffold.** `cre init --template=automation-migration-ts` (a Go variant exists).
2. **Deploy the bridge.** Deploy `AutomationReceiver.sol` to your target chain, passing that chain's `KeystoneForwarder` address to the constructor. Look it up in the CRE Forwarder Directory — do not guess.
3. **Configure.** Set the receiver address, the target contract, the migration type (`CRON`, `CUSTOM`, or `LOG`), and the schedule or log filters.
4. **Authorize the call.** Run `setCallAllowed(target, selector, true)`. For `performUpkeep`, the selector is `0x4585e33b` — confirm it with `cast sig 'performUpkeep(bytes)'`.
5. **Set workflow identity checks.** At least one of `setExpectedAuthor`, `setExpectedWorkflowId`, or `setExpectedWorkflowName`.
6. **Simulate.** `cre workflow simulate my-workflow --target=test-settings`. For a log-trigger migration, pass `--evm-tx-hash` and `--evm-event-index` so the simulator does not wait for a live event.
7. **Deploy, then decommission.** `cre workflow deploy my-workflow --target=production-settings`, verify it, then cancel the original upkeep and withdraw its remaining LINK so both paths are not live at once.

## The Two Controls That Decide Whether It Holds

Step 3 hides the work that sets the timeline. If your contract checks `msg.sender`, uses an Automation Forwarder allowlist, or gates `performUpkeep` behind roles, it will reject calls from the new receiver until you authorize that address explicitly. That is not a configuration change. It is a permission-boundary change, and it deserves the review you would give anything else that moves value. Chainlink's own example — a single `setCallAllowed` forwarding `performUpkeep` to one target — documents **35,400 gas**.

The second control is the trap the template's convenience creates. Once a selector is authorized, a generic receiver accepting arbitrary `(target, data)` pairs will forward calls from **any** workflow that names your target and the approved selector. For a test that is fine. In production it means someone else's workflow can trigger your function. Chainlink's guide states it plainly: a generic receiver "should not be left broadly reusable without explicit authorization controls." One identity setter closes it.

## When It Fails: `CallNotAllowed`

The most common migration failure is a revert with `CallNotAllowed`. Four causes, three of them configuration rather than code.

| Cause | What to verify |
|---|---|
| **Function selector mismatch** | The selector in `setCallAllowed` must match the function the workflow calls. Recompute with `cast sig` and compare byte for byte. |
| **Permission not actually set** | Confirm `setCallAllowed` ran with `allowed: true` for that exact target-and-selector pair. A reverted transaction leaves it unset. |
| **Workflow identity mismatch** | The deployed workflow must match any expected author, workflow ID, or workflow name you configured. A single typo silently blocks every execution. |
| **Wrong forwarder address** | The `KeystoneForwarder` address is passed to the receiver constructor and **cannot be changed afterward**. If it is wrong, the receiver must be redeployed. |

They rarely fail because the logic was wrong. They fail because a boundary was set incorrectly somewhere nobody looked twice.

## What CRE Unlocks Beyond Parity

The bridge is a migration convenience, not the destination. On CRE the old one-trigger, one-call shape dissolves: a single workflow can combine multiple triggers, fetch off-chain data over HTTP, read and write across chains, and branch on its own logic. Because checks now run off-chain, the gas ceiling that shaped what was possible in `checkUpkeep()` no longer applies.

Then there are confidential workflows, where execution stays private and still produces an on-chain attestation. That is the same requirement that drives businesses to **Private AI that stays on-premises**. A law firm that cannot put client files in a cloud model, or a medical practice that cannot move **HIPAA-ready AI** workloads off its own hardware, has exactly the same objection to handing a workflow's inputs to an untrusted operator. A **Local LLM** device keeps the model inside the walls; a confidential workflow keeps the execution there, with a receipt anyone can verify.

## The Migration Is Not a Quirk — It Is the Direction

Three events in September 2026 make the direction unmistakable.

**Aave DAO** integrated CRE into Aave Robot through a governance proposal dated March 31, 2026 — critical governance automation across **18 chains**, with workflow ownership held by a multisig Safe on the Chainlink WorkflowRegistry rather than by any single operator.

**Infosys** — a $40 billion-plus IT services firm whose banking infrastructure connects more than **1.7 billion customer accounts** — announced a strategic partnership with Chainlink on **September 22, 2026**, standardizing across CCIP, CRE, ACE, Proof of Reserve, Data Streams, and Data Feeds.

**Bottomline** launched Global Pay Connect on **September 17, 2026**, connecting more than **600 banks** and 1,200 financial institutions — over **$16 trillion** in annual payments — to on-chain settlement, with CCIP handling cross-chain interoperability and **CRE coordinating payment workflows** between existing banking systems and the new rails.

That pattern is not crypto firms adopting crypto infrastructure. It is banks, a global systems integrator, and a top-three Swift service provider choosing the same environment to coordinate automation that has to be provable. **Verifiable workflows** stopped being an interesting property and became a procurement requirement.

## What This Means for an Oakland, Wayne, or Genesee County Business

Most Metro Detroit businesses will never migrate an upkeep. The reason this deadline deserves your attention anyway is narrower and more useful.

When Chainlink retired a service that ran on "the network will call your contract, don't worry about it" and replaced it with workflows that produce signed, verifiable reports, it asked the only question that survives contact with an audit: **can you prove this ran, when, and on what input?**

That is not a blockchain question. If a payment release, a vendor approval, or a record update happens without an operator pressing a button, you should be able to show the trigger, the input, the outcome, and the fact that nobody edited any of it. A **professional web presence** earns you the first look, and **private AI that stays on-premises** keeps your data inside the building — but it is **verifiable workflows** that let you answer a client, an insurer, or an auditor without asking anyone to take your word for it. That combination is what **sovereign technology** means in practice.

## Frequently Asked Questions

**Has Chainlink Automation actually been shut down?**
Yes. Chainlink publishes Automation v1.x sunsetting June 30, 2026 and v2.1 July 31, 2026, and the live dashboard now carries a deprecation notice directing users to CRE. Chainlink has not disclosed how many upkeeps remain un-migrated, so verify yours against the dashboard.

**What happens to a smart contract whose upkeep stopped executing?**
Nothing, which is the problem. The contract stays deployed and readable, but the service that simulated `checkUpkeep()` and submitted `performUpkeep()` is retired, so the action it performed stops occurring. No error is raised, and no alert fires.

**Is CRE a replacement for Chainlink Functions as well as Automation?**
Yes. Functions documentation publishes a mainnet shutdown of June 30, 2026 and directs subscriptions to CRE, which chains off-chain computation to on-chain results.

**How long does an Automation-to-CRE migration take?**
The mechanical work is small — scaffold, deploy the bridge, configure, authorize, simulate, deploy, decommission — and mostly configuration. Timeline is set by the permission review: any contract checking `msg.sender` or gating on roles needs its boundary updated first.

**What is the `AutomationReceiver` bridge pattern?**
The migration route Chainlink ships in its `automation-migration` starter template. You deploy a generic `AutomationReceiver.sol` that accepts CRE reports and forwards approved calls to your existing contract, so you usually need not reimplement `checkUpkeep`, `checkLog`, or `performUpkeep`. Authorize each target-and-selector pair, then narrow the receiver with identity checks.

**Why does a migrated workflow fail with `CallNotAllowed`?**
Four causes: the selector in `setCallAllowed` does not match the function called; the permission was never set with `allowed: true` for that exact pair; a configured identity check does not match the deployed workflow; or the `KeystoneForwarder` address in the constructor is wrong for that chain.

**Do I need to migrate if I have never used Chainlink?**
Not for this deadline. It marks the moment verifiable automation became the procurement standard rather than a differentiator. The question it forces on Chainlink's own users — can you prove what ran, when, and on what input? — is the one your clients and auditors are already asking.

---

Every deadline in this migration passed months ago without a single alert reaching the people it affected. Systems built to reassure you rarely tell you when they stop.

If you want a local team that builds the site, the **Local LLM** devices that keep regulated data inside your walls, and the **verifiable workflows** that replace trust-me automation, start at [agenticportfoliox.github.io/AgenticRVR](https://agenticportfoliox.github.io/AgenticRVR). **Future-proof your business** by making your automation provable before someone else asks you to.

Related reading: [what the Chainlink Runtime Environment is and why tamper-proof automation matters](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-20-chainlink-runtime-environment-cre-workflows), [how blockchain-verified business processes end disputes and cut risk](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-07-blockchain-verified-business-processes), [why owning your own stack is the next competitive advantage](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-24-sovereign-technology-data-ownership), and [how websites, private AI, and verified workflows compound as one stack](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-08-27-the-modern-business-stack).
