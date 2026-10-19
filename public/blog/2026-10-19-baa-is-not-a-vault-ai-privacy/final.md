---
title: "The BAA Is Not a Vault: What HIPAA and Attorney-Client Privilege Actually Require From Your AI"
date: "2026-10-19"
description: "A signed business associate agreement allocates responsibility for protected health information. It does not keep that information inside your building — and for law firms, no such agreement exists at all. Here is what HIPAA and ABA Formal Opinion 512 actually require."
category: "Agentic Workflows"
author: "Agentic"
---
# The BAA Is Not a Vault: What HIPAA and Attorney-Client Privilege Actually Require From Your AI
*Published: October 19, 2026 | By Agentic*
---
Every AI procurement conversation in Metro Detroit now reaches the same checkpoint. Someone asks the vendor whether it will sign a business associate agreement. The answer comes back yes, the practice manager relaxes, the subscription starts, and the protected health information still leaves the building on the first prompt.

A business associate agreement allocates responsibility for data after it has been disclosed. It is not a custody arrangement, it is not a security control, and for a law firm it does not exist at all. The useful question is narrower than "will they sign": after the signature, who is holding the data, and what can you prove about it?

## What a BAA Actually Does

Under 45 CFR 164.504(e), the agreement must describe permitted uses and disclosures, prohibit any further use or disclosure, require appropriate safeguards, require reporting of impermissible uses and security incidents, flow the same obligations to every subcontractor, and require return or destruction at termination. Business associates are also directly liable for parts of the rule, not merely contractually liable to you.

All of that is about responsibility. None of it moves a single record.

| The agreement covers | The agreement does not cover |
|---|---|
| Who may use the data and for what | Where the data physically sits |
| That safeguards must exist | Whether they are adequate, or whether you will ever see evidence |
| That subcontractors inherit the same terms | Who those subcontractors are, unless you ask by name |
| That data is returned or destroyed at termination | What happened to copies made during the term |
| That incidents are reported to you | How fast, in what form, or whether you can verify it independently |

A business associate agreement allocates responsibility. It does not change custody.

## What HIPAA Will Not Let You Sign Away

There is no encryption-key exemption. A provider that creates, receives, maintains, or transmits electronic protected health information is a business associate even if it only handles encrypted data and never holds the decryption key. The conduit exception is narrower still: transmission-only services with transient access, not a system that stores a conversation for later retrieval.

HHS names this scenario directly, listing a third-party AI chatbot on a patient portal — symptom assessment, reminders, scheduling — as a business associate. Storing ePHI with a provider without an agreement is itself a violation of 45 CFR 164.308(b)(1) and 164.502(e); OCR has already entered a resolution agreement with a covered entity that kept more than 3,000 individuals' records on a cloud server with no agreement.

The signature is mandatory. It is also the floor, not the ceiling.

## The Clause HHS Does Not Require: Proof

Here is the sentence most buyers never read, from HHS's own cloud computing guidance: the HIPAA Rules do not expressly require a cloud provider to document its security practices or allow a customer to audit them. Customers may require it through the agreement or service level terms.

May. Not must. If you want evidence, you have to contract for it, and the default position of a fast-moving AI vendor is that you will not.

Two more clauses decide outcomes. Training: an agreement that forbids further disclosure does not stop a model from learning from your inputs if the service terms or order of precedence say otherwise — read the exhibits. Subcontractors: the obligation flows down by rule, but the list of who is downstream is only as complete as the vendor makes it.

The regulatory direction is toward proof rather than paper. The proposed Security Rule update, published January 6, 2025, ran 125 pages and drew almost 5,000 comments. It would eliminate the "addressable" classification and make encryption, multifactor authentication, network segmentation, and anti-malware mandatory; add annual penetration tests, vulnerability scans every six months, and annual audits; and require an annual risk analysis built on a technology asset inventory and a data-flow map. It also proposes shorter business associate timelines and verification of their technical safeguards. HHS costed it at $9 billion in year one and $6 billion a year after. OMB's agenda now shows the final rule due July 2027; timetables are never binding.

## The Law-Firm Version Has No Signature to Collect

A law firm cannot solve this with procurement, because there is nothing to procure.

ABA Formal Opinion 512, issued July 29, 2024, was the association's first formal guidance on generative AI. It maps the technology onto Model Rules 1.1, 1.6, 1.4, and 1.5 — competence, confidentiality, communication, and fees. Rule 1.6(c) requires reasonable efforts to prevent the inadvertent or unauthorized disclosure of, or unauthorized access to, information relating to a representation.

Then the part firms skip. For self-learning tools, informed client consent is required before inputting information relating to the representation, because output can lead directly or indirectly to disclosure. Boilerplate engagement-letter language purporting to authorize AI use is not sufficient consent.

There is no business associate agreement for attorney-client privilege. No vendor can sign away a Rule 1.6 problem, and no clause turns a model provider into firm staff. Only the data path answers the question, which is why firms using AI on client matters end up looking at hardware instead of terms of service.

## The Honest Gray Zone: Who Holds the Keys

The gray zone is remote access. If a device vendor keeps remote support access into a machine that holds client or patient data, you have recreated the third party. That access can create business associate status and can put privileged material in front of an outsider. The defensible pattern is boring: no inbound vendor access, signed update packages, logs that stay on site, physical control of the disk, documented destruction at end of life.

Possession is also not compliance. A Local LLM removes the third-party disclosure problem, not your obligations. Multifactor authentication, encryption at rest, backups, workforce training, incident response, and the annual risk analysis remain yours.

| Decision factor | Cloud AI with a signed BAA | Local LLM on premises |
|---|---|---|
| Who holds the data | The provider, under contract | You, on hardware you control |
| Agreement required | Yes, before the first disclosure | Only if a vendor retains access |
| Training on your inputs | Governed by terms you must read | Not applicable; the model stays put |
| Subprocessor chain | Real, and hard to see in full | None for processing |
| Audit evidence | Available only if negotiated | Directly inspectable on site |
| Breach notification | Flows to you after the provider's incident | Your own incident response |
| Cost model | Per seat, per token, recurring | Capital purchase, predictable |
| Failure mode | Contract dispute over data already gone | Misconfiguration inside your walls |

## Seven Questions Before You Sign

1. Does this workflow need identifiable data at all, or can it run on de-identified input?
2. Which duty is triggered here — HIPAA, a professional-responsibility rule, a client contract, or all three?
3. Will you sign a business associate agreement, and does it bind every subcontractor in the chain by name?
4. What do your terms say about training, retention, and deletion, and which document controls if they conflict?
5. Will you provide a third-party attestation or permit an audit? HIPAA does not require either. Ask anyway.
6. Who has remote access to the machine that stores the data, and can we turn it off permanently?
7. At termination, what is destroyed, on what timeline, and what proof do we receive?

## The Michigan Layer

Michigan still has no comprehensive consumer data privacy law. The Identity Theft Protection Act, MCL 445.61 through 445.79c, governs breach notification, with penalties of up to $250 per failure capped at $750,000 per breach. Senate Bill 359 remains in committee, and related breach-notification bills sit in the House.

For a practice in Oakland, Wayne, or Genesee County, the binding instruments today are HIPAA, the rules of professional conduct, and the contract you signed. Waiting for a state statute is waiting on the wrong document.

## What to Build Before July 2027

Start with the artifact the proposed rule makes the center of everything: a technology asset inventory and a data-flow map. You need it under the current rule too, and it is the only way to answer where the data actually goes.

Then classify. For each data class — patient records, privileged communications, proprietary process data, ordinary correspondence — decide whether it may leave the building. Write the decision down with the date and reasoning; the document you keep is what [your next audit will ask for](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-09-14-ai-compliance-paper-trail).

Where automation touches money, compliance, or client obligations, the record should be independently verifiable rather than a log file a vendor can edit — the case for [verifiable workflows](https://agenticportfoliox.github.io/AgenticRVR/blog/2026-10-12-hash-dont-host-verifiable-records-architecture) built on the Chainlink Runtime Environment.

## Frequently Asked Questions

### Does a signed BAA make cloud AI HIPAA-compliant?

No. The agreement is required before protected health information is disclosed, but compliance also depends on the safeguards actually implemented, the subprocessors involved, and what you can document. A signature proves intent, not compliance.

### Can we use AI on patient information if the vendor signs a BAA?

Only if the vendor will bind every subcontractor, accept your training and retention terms, and give you evidence you can put in an audit file. Without those in writing, the agreement is thinner than it looks.

### Do law firms need a BAA to use AI?

Not usually — firms are not covered entities, so HIPAA's business associate mechanics do not apply to client matters. The governing duty is Rule 1.6 confidentiality, and ABA Formal Opinion 512 requires informed client consent before inputting representation information into a self-learning tool.

### Is a local LLM automatically HIPAA-compliant?

No. It removes the third-party disclosure problem, often the hardest one. You still owe encryption, access control, backups, training, incident response, and an annual risk analysis, and a vendor with remote access puts a third party back in the room.

### What does the proposed HIPAA Security Rule change, and when?

It would make encryption, multifactor authentication, segmentation, and anti-malware mandatory, add annual penetration tests and six-month vulnerability scans, and require an annual risk analysis built on an asset inventory and data-flow map. The final rule is slated for July 2027; timetables are not binding.

### What is the cheapest defensible path for a small practice?

De-identify what does not need identity, keep identifiable data out of tools you cannot audit, and put the rest on hardware you control. That sequence costs less than a breach and survives whichever Security Rule lands.

## The Signature Is the Beginning

None of this is an argument that cloud AI is unlawful, or that a business associate agreement is worthless. It is an argument about sequence. The agreement tells you who is responsible after the data moves; it never tells you whether the data should have moved.

For a Metro Detroit practice, the decisions that hold up are the ones made before the first prompt: what data may travel, which duty governs it, and who can prove where it went. Agentic builds the pieces that make those decisions answerable: a professional web presence, private AI that stays on-premises, and verifiable workflows for automation you can prove. If you are holding a vendor agreement and want a second read, [start a conversation](https://agenticportfoliox.github.io/AgenticRVR/contact) or call **(248) 313-8955**.

*Agentic (Renowned Value Restoration LLC) — professional websites, private AI, and verified automation for Metro Detroit businesses. Serving Oakland, Wayne, and Genesee Counties.*
