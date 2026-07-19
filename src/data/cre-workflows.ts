/**
 * CRE Workflows Metadata
 * ─────────────────────────────────────────────────────────────────────────────
 * Static data layer for the 5 production Chainlink CRE Workflows portfolio.
 * Drives all UI components on the CRE Backend Consulting page.
 *
 * IMPORTANT: This file intentionally describes only high-level business value,
 * architecture zones, and functional outcomes. It contains NO proprietary
 * smart-contract logic, WASM source code, or internal execution details.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface ArchLayer {
  zone: string;
  label: string;
  description: string;
}

export interface CREWorkflow {
  id: string;
  index: string;
  solutionName: string;
  tagline: string;
  category: string;
  accentVariant: 'blue' | 'red' | 'green' | 'amber' | 'purple';
  problem: string;
  solution: string;
  valueProposition: string[];
  architecture: {
    inputs: string[];
    processing: string;
    outputs: string[];
    layers: ArchLayer[];
  };
  complianceFrameworks: string[];
  idealFor: string;
}

export const CRE_WORKFLOWS: CREWorkflow[] = [
  {
    id: 'ccid-synchronizer',
    index: '01',
    solutionName: 'Cross-Chain Identity Synchronizer',
    tagline: 'Real-time KYC/AML credential sync across every chain — verified by the DON.',
    category: 'Identity & Compliance',
    accentVariant: 'blue',
    problem:
      'Regulatory compliance (KYC/AML) requires verified identity credentials to be consistently enforced across every blockchain a protocol touches. Centralized relays introduce single points of failure, censorship risk, and audit gaps that regulators flag.',
    solution:
      'The CCID Synchronizer monitors identity credential state on a source chain and automatically propagates updates to all configured target chains using Chainlink CCIP. All routing and decision logic runs inside the decentralized DON WASM sandbox — every credential state change is consensus-verified before any cross-chain message is dispatched.',
    valueProposition: [
      'Eliminates centralized relay risk — no single server that can be taken offline, hacked, or misconfigured',
      'Cryptographically verifiable credential state: every sync event is signed by DON consensus',
      'Replaces fragmented off-chain identity stores with a single verifiable on-chain source of truth',
      'Zero private-key exposure — DON native signing handles all cross-chain write operations',
    ],
    architecture: {
      inputs: [
        'On-chain credential issuance / revocation events (source chain log trigger)',
        'Target chain RPC endpoints via Node-mode adapters',
        'CCIP router contract addresses per configured chain',
      ],
      processing:
        'DON WASM sandbox parses the credential event, evaluates routing logic, and constructs a CCIP message payload. Network adapters handle transport only — zero business logic runs outside the deterministic sandbox.',
      outputs: [
        'CCIP cross-chain message dispatched to each configured target chain',
        'Immutable on-chain record of credential sync event',
        'DON-signed state attestation consumable by downstream compliance contracts',
      ],
      layers: [
        {
          zone: 'Zone 1 · DON WASM',
          label: 'Core Logic',
          description: 'Credential parsing, routing decisions, CCIP message construction — fully deterministic and consensus-verified.',
        },
        {
          zone: 'Zone 2 · Node-Mode',
          label: 'Network Transport',
          description: 'RPC adapters and CCIP client wrappers handle network I/O. Pure transport — zero business logic.',
        },
      ],
    },
    complianceFrameworks: ['KYC / AML', 'FATF', 'MiCA (EU)', 'FinCEN'],
    idealFor:
      'Multi-chain DeFi protocols, regulated token issuers, and institutional asset managers requiring provable KYC/AML enforcement across EVM networks.',
  },

  {
    id: 'ofac-circuit-breaker',
    index: '02',
    solutionName: 'OFAC Sanctions Circuit Breaker',
    tagline: 'Real-time on-chain kill switch for sanctioned-entity interactions — no private keys required.',
    category: 'Regulatory Risk Management',
    accentVariant: 'red',
    problem:
      'Smart contracts and DeFi protocols face severe regulatory penalties — including criminal liability — if they process transactions from OFAC-sanctioned addresses. Any centralized sanctions feed implementation is a single point of failure that can be exploited, delayed, or silently stale.',
    solution:
      'This workflow monitors every protocol interaction against live OFAC sanction lists via the Chainlink DON. When a sanctioned address is detected, it triggers an on-chain circuit breaker in the protocol\'s ACE Policy Manager — halting the transaction before execution. Sanction list integrity is verified using deterministic hashing inside the WASM sandbox.',
    valueProposition: [
      'Zero private-key risk: DON consensus-based signing writes the circuit breaker on-chain without any hot wallet',
      'Sub-block response time — sanctions check runs before transaction execution, not after',
      'Deterministic OFAC list integrity verification — cryptographic hashing inside WASM prevents feed manipulation',
      'Immutable, DON-signed audit record of every blocked interaction for regulatory reporting',
    ],
    architecture: {
      inputs: [
        'On-chain transaction initiation event (EVMLog trigger)',
        'Live OFAC sanctions list from certified API provider (Node-mode fetch)',
        'Target ACE Policy Manager contract address',
      ],
      processing:
        'Node-mode adapter fetches the current OFAC list and passes structured data to the WASM sandbox. The sandbox deterministically hashes the list for integrity, extracts the initiating address, evaluates sanction status, and constructs the circuit-breaker payload for DON consensus signing.',
      outputs: [
        'On-chain circuit breaker activation via DON consensus (EVMClient.writeReport)',
        'Immutable DON-signed event record of blocked interaction',
        'Silent pass-through if address is clear — zero friction for compliant users',
      ],
      layers: [
        {
          zone: 'Zone 1 · DON WASM',
          label: 'Sanction Evaluation Engine',
          description: 'Address extraction, deterministic OFAC list hashing, threshold evaluation, and circuit-breaker payload construction.',
        },
        {
          zone: 'Zone 2 · Node-Mode',
          label: 'Sanctions Feed Adapter',
          description: 'Fetches the live OFAC list from the external API provider and delivers structured data to the WASM sandbox.',
        },
      ],
    },
    complianceFrameworks: ['OFAC / SDN', 'FinCEN AML', 'EU Sanctions', 'UK OFSI'],
    idealFor:
      'DeFi protocols, tokenized asset platforms, and on-chain settlement systems requiring verifiable, real-time sanctions screening with a tamper-proof audit trail.',
  },

  {
    id: 'compliance-reporting-gateway',
    index: '03',
    solutionName: 'Compliance Reporting Gateway',
    tagline: 'Guaranteed, durable delivery of on-chain compliance violations to enterprise SIEM systems.',
    category: 'Audit & Reporting Infrastructure',
    accentVariant: 'green',
    problem:
      'Financial institutions operating on-chain must maintain a continuously exportable audit trail of all compliance violations and deliver that data in real time to legacy Web2 SIEM platforms (Splunk, Datadog, IBM QRadar). Bridging the on-chain event stream to off-chain enterprise infrastructure reliably — with zero data gaps — has significant regulatory consequences if it fails.',
    solution:
      'The Compliance Reporting Gateway listens for on-chain compliance violation events via a CRE DON trigger. The WASM sandbox determines what needs to be reported and constructs a structured payload. A dedicated Node-mode daemon handles guaranteed delivery to the enterprise SIEM webhook, with persistent DON-native retry checkpoints that survive node restarts.',
    valueProposition: [
      'Durable delivery guarantee: DON checkpoint-based retry logic persists across node restarts — no silent data gaps',
      'Clean separation of concerns: the DON dictates what to report; the daemon handles how to deliver it',
      'Integrates with any SIEM supporting webhook ingestion: Splunk, Datadog, IBM QRadar, Sumo Logic',
      'Every violation report is cryptographically linked to its on-chain event — verifiable by any third-party auditor',
    ],
    architecture: {
      inputs: [
        'On-chain compliance violation events (EVMLog trigger — failed KYC, blocked transactions, AML flags)',
        'SIEM webhook endpoint and bearer authentication token via CRE secrets manager',
        'Target contract address for event subscription',
      ],
      processing:
        'WASM sandbox catches the compliance event and constructs a structured, normalized reporting payload. The Node-mode ComplianceAuditGateway daemon executes HTTP delivery with exponential-backoff retries. DON checkpoints persist retry state — the workflow resumes exactly where it left off after any infrastructure interruption.',
      outputs: [
        'Structured compliance violation record delivered to enterprise SIEM webhook',
        'DON checkpoint record for delivery acknowledgment and audit lineage',
        'On-chain immutable event log as the cryptographic source of truth',
      ],
      layers: [
        {
          zone: 'Zone 1 · DON WASM',
          label: 'Event Capture & Payload Build',
          description: 'Listens for compliance events, normalizes violation data, and constructs the structured SIEM payload using only CRE SDK capabilities.',
        },
        {
          zone: 'Zone 2 · Node-Mode',
          label: 'SIEM Delivery Daemon',
          description: 'Handles HTTP transport, exponential-backoff retries, and delivery acknowledgment using standard Node.js APIs.',
        },
      ],
    },
    complianceFrameworks: ['SOC 2 Type II', 'ISO 27001', 'MiCA Audit Requirements', 'DORA (EU)'],
    idealFor:
      'Banks, fintechs, and regulated DeFi platforms that must deliver real-time, gap-free compliance event streams to existing enterprise SIEM and SOAR infrastructure.',
  },

  {
    id: 'progressive-aml-monitor',
    index: '04',
    solutionName: 'Progressive AML Velocity Monitor',
    tagline: 'Stateful, real-time AML velocity checks and FATF structuring detection — no centralized database.',
    category: 'Anti-Money Laundering (AML)',
    accentVariant: 'amber',
    problem:
      'Traditional AML monitoring relies on centralized databases to track rolling 24-hour transaction volumes per wallet — flagging those that exceed limits or exhibit structuring behavior (many small transfers designed to evade detection, a FATF-defined "smurfing" pattern). Running this logic on-chain is prohibitively expensive; off-chain reintroduces manipulation risk and breaks the audit chain.',
    solution:
      'The Progressive AML Velocity Monitor runs entirely inside the Chainlink DON WASM sandbox. It maintains a persistent, per-wallet rolling 24-hour transfer window using the DON\'s native key-value store — zero centralized infrastructure. On every ERC-20 transfer event, it evaluates two FATF-aligned AML rules using BigInt arithmetic for deterministic, floating-point-free precision. Results are cryptographically verifiable by any DON node.',
    valueProposition: [
      'No centralized database: per-wallet rolling state maintained in the DON KV store — survives node restarts automatically',
      'BigInt arithmetic throughout — deterministic, floating-point-free compliance decisions every node can independently verify',
      'Detects two FATF violation classes: daily volume breaches AND structuring (smurfing) patterns in a single workflow',
      'Block-timestamp sourcing — AML time windows are keyed to on-chain block headers, not manipulable server clocks',
    ],
    architecture: {
      inputs: [
        'ERC-20 Transfer events (EVMLogCapability trigger — address, amount, block timestamp)',
        'CCID identity registry for wallet-to-identity mapping (on-chain lookup)',
        'Configurable thresholds: daily volume limit (USDC-equivalent) and structuring transfer count',
      ],
      processing:
        'On each transfer event, the WASM sandbox loads per-wallet rolling state from the DON KV store, prunes entries older than 24 hours using block timestamps, appends the current transfer, evaluates both AML rules using BigInt arithmetic, persists updated state back to KV, and returns a deterministic compliance verdict.',
      outputs: [
        'Deterministic compliance result: OK (clear) or BREACH:<violation_code>:<ccid>',
        'Violation codes: 101/104 (daily volume limit), 105 (FATF structuring / smurfing pattern)',
        'DON-signed result consumable by on-chain enforcement and reporting contracts',
      ],
      layers: [
        {
          zone: 'Zone 1 · DON WASM',
          label: 'Stateful AML Engine',
          description: 'Rolling 24h window management, BigInt volume accumulation, dual-rule evaluation, and DON KV state persistence — fully within the deterministic WASM sandbox.',
        },
      ],
    },
    complianceFrameworks: ['FATF Recs. 16 & 20', 'FinCEN BSA / SAR Filing', 'EU AMLD6', 'AUSTRAC'],
    idealFor:
      'Token issuers, DEX protocols, and payment rails requiring real-time, on-chain AML velocity monitoring that satisfies FATF reporting standards without a centralized data store.',
  },

  {
    id: 'fatf-travel-rule-router',
    index: '05',
    solutionName: 'FATF Travel Rule Router',
    tagline: 'Multi-jurisdictional Travel Rule compliance between VASPs — PII secured inside a hardware TEE enclave.',
    category: 'VASP-to-VASP Compliance',
    accentVariant: 'purple',
    problem:
      'The FATF Travel Rule mandates that originating VASPs securely transmit PII — identity data for both parties — to receiving VASPs for transactions above regulatory thresholds. Transmitting PII on-chain violates privacy (GDPR/CCPA). Transmitting it off-chain via a centralized server creates a compliance gap. Neither satisfies regulators or users.',
    solution:
      'The FATF Travel Rule Router orchestrates the complete compliance lifecycle across three security zones. A DON WASM orchestrator manages the 72-hour state machine and blockchain interaction. A hardware Trusted Execution Environment (Intel SGX / AWS Nitro) handles all PII fetching and VASP-to-VASP transmission — plaintext PII never touches the standard node environment. Only the cryptographic acknowledgment hash flows back to the DON for on-chain clearance.',
    valueProposition: [
      'PII never leaves the TEE enclave in plaintext — hardware-enforced privacy satisfying GDPR, CCPA, and FATF simultaneously',
      'Durable 72-hour state machine: DON checkpoint pattern ensures the compliance lifecycle survives infrastructure restarts',
      'Zero private-key exposure: DON consensus-based signing handles all on-chain clearance writes',
      'Byte-packed ABI serialization ensures deterministic, robust integration with on-chain enforcement contracts across jurisdictions',
    ],
    architecture: {
      inputs: [
        'On-chain transaction "Hold" event (ACE contract trigger — amount, originator, beneficiary addresses)',
        'Originating VASP PII API endpoint and credentials (TEE-gated secrets)',
        'Beneficiary VASP HTTPS endpoint for secure PII transmission',
      ],
      processing:
        'The DON WASM orchestrator detects the on-chain Hold and manages state checkpoints over a 72-hour window. The TEE enclave fetches originator PII and transmits it to the beneficiary VASP — entirely within hardware-attested memory. The TEE returns only the cryptographic acknowledgment hash and compliance status to the DON, which constructs and consensus-signs the on-chain clearance payload.',
      outputs: [
        'On-chain compliance clearance written by DON consensus (ackHash + complianceStatus)',
        'Transaction released from Hold state upon successful VASP acknowledgment',
        'DON-signed immutable record of Travel Rule completion for audit lineage',
      ],
      layers: [
        {
          zone: 'Zone 1 · DON WASM',
          label: 'State Machine Orchestrator',
          description: '72-hour lifecycle management, retry logic, and on-chain clearance write — fully deterministic inside the WASM sandbox.',
        },
        {
          zone: 'Zone 2 · Node-Mode',
          label: 'Test & Simulation Layer',
          description: 'Development shims and local simulation environment for VASP endpoint mocking during testing.',
        },
        {
          zone: 'Zone 3 · TEE Enclave (SGX/Nitro)',
          label: 'PII Secure Transport',
          description: 'Hardware-attested enclave where PII is fetched and transmitted between VASPs. Plaintext PII never exits this boundary.',
        },
      ],
    },
    complianceFrameworks: ['FATF Travel Rule (Rec. 16)', 'FinCEN CVC Transfer Rule', 'MiCA TFR (EU 2023/1113)', 'GDPR / CCPA'],
    idealFor:
      'Crypto exchanges, digital asset custodians, and payment processors that must satisfy multi-jurisdictional FATF Travel Rule obligations while maintaining full privacy compliance.',
  },
];
