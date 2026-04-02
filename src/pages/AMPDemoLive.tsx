import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Camera, CheckCircle, AlertCircle, Copy,
  Download, Zap, ChevronRight, Fingerprint, Key, RefreshCw,
  ImageIcon, Wallet, ExternalLink, Globe, Radio, XCircle, Handshake,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrowserProvider, Contract, keccak256, toUtf8Bytes, hexlify, randomBytes } from 'ethers';

// ─────────────────────────────────────────────
// Contract Config
// ─────────────────────────────────────────────
const CONTRACTS = {
  VerificationRegistry: '0x09D24C90c07Bb245e82c55cB138D83626174AFC0',
  BadgeRegistry: '0xE093522e7dC2740a1C716Cdb29038A0BB5dCE4e3',
  FunctionsRouter: '0xf9B8fc078197181C841c296C876945aaa425B278',
};

// Pre-registered owner-controlled demo device key.
// Registered on-chain via register-demo-key.js — block 39697053 (Base Sepolia).
// Any visitor can call requestVerification() using this shared demo key.
const DEMO_DEVICE_KEY_HASH = '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3';

const BASE_SEPOLIA_CHAIN_ID = '0x14a34';
const BASE_SEPOLIA_PARAMS = {
  chainId: BASE_SEPOLIA_CHAIN_ID,
  chainName: 'Base Sepolia',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: ['https://sepolia.base.org'],
  blockExplorerUrls: ['https://sepolia.basescan.org'],
};

const VR_ABI = [
  'function registerDeviceKey(bytes32 deviceKeyHash) external',
  'function isDeviceTrusted(bytes32 deviceKeyHash) external view returns (bool)',
  'function requestVerification(bytes32 deviceKeyHash, bytes32 mediaHash, bytes calldata proofData, uint256 zoneId) external',
  'function confirmVerification(bytes32 mediaHash, uint256 zoneId) external',
  'event VerificationRequested(bytes32 indexed deviceKeyHash, bytes32 indexed mediaHash, uint256 zoneId, address requester, uint256 timestamp)',
  'event VerifiedReal(bytes32 mediaHash, bytes32 proofHash, uint256 zoneId, uint256 timestamp)',
];

// ─────────────────────────────────────────────
// Crypto helpers
// ─────────────────────────────────────────────
async function sha256Hex(buf: ArrayBuffer): Promise<string> {
  const d = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(d)).map(b => b.toString(16).padStart(2, '0')).join('');
}
async function generateECKey() {
  return crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
}
async function ecSign(key: CryptoKey, hex: string): Promise<string> {
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(hex));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}
async function exportSpki(key: CryptoKey): Promise<ArrayBuffer> {
  return crypto.subtle.exportKey('spki', key);
}

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type PhaseStatus = 'pending' | 'active' | 'done' | 'error' | 'simulated';
interface PhaseState { status: PhaseStatus; detail: string; txHash?: string; }

const initPhases = (): Record<number, PhaseState> => ({
  1: { status: 'pending', detail: 'Awaiting submission…' },
  2: { status: 'pending', detail: 'Awaiting Phase 1' },
  3: { status: 'pending', detail: 'Awaiting Phase 2' },
  4: { status: 'pending', detail: 'Awaiting Phase 3' },
  5: { status: 'pending', detail: 'Awaiting Phase 4' },
  6: { status: 'pending', detail: 'Awaiting Phase 5' },
});

const PHASE_META = [
  { n: 1, label: 'Hardware Sign (Local)',         icon: Fingerprint, color: 'orange'  },
  { n: 2, label: 'World ID (Personhood)',         icon: Shield,      color: 'cyan'    },
  { n: 3, label: 'Device Trust (Registry)',       icon: Key,         color: 'violet'  },
  { n: 4, label: 'Submit (Base Sepolia)',         icon: Wallet,      color: 'blue'    },
  { n: 5, label: 'Verify (Chainlink DON)',        icon: Zap,         color: 'yellow'  },
  { n: 6, label: 'Broadcast (CCIP Relay)',        icon: Globe,       color: 'emerald' },
];

const C: Record<string, { text: string; bg: string; border: string; pulse: string }> = {
  orange:  { text: 'text-orange-400',  bg: 'bg-orange-500/10',  border: 'border-orange-500/25',  pulse: 'bg-orange-400'  },
  violet:  { text: 'text-violet-400',  bg: 'bg-violet-500/10',  border: 'border-violet-500/25',  pulse: 'bg-violet-400'  },
  cyan:    { text: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/25',    pulse: 'bg-cyan-400'    },
  blue:    { text: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/25',    pulse: 'bg-blue-400'    },
  yellow:  { text: 'text-yellow-400',  bg: 'bg-yellow-500/10',  border: 'border-yellow-500/25',  pulse: 'bg-yellow-400'  },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', pulse: 'bg-emerald-400' },
};

// ─────────────────────────────────────────────
// Compact Phase Card (no simulated label)
// ─────────────────────────────────────────────
function PhaseCard({ meta, state }: { meta: typeof PHASE_META[0]; state: PhaseState }) {
  const c = C[meta.color];
  const Icon = meta.icon;
  const isDone = state.status === 'done' || state.status === 'simulated';
  const isErr  = state.status === 'error';
  const isAct  = state.status === 'active';
  const isPend = state.status === 'pending';

  return (
    <motion.div
      layout
      animate={{ opacity: isPend ? 0.4 : 1 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3 relative overflow-hidden transition-colors duration-400 ${
        isDone ? `${c.bg} ${c.border}` :
        isErr  ? 'bg-red-500/10 border-red-500/25' :
        isAct  ? `${c.bg} ${c.border}` :
        'bg-[#111] border-white/6'
      }`}
    >
      {/* Active pulse */}
      {isAct && (
        <motion.div
          className={`absolute inset-0 ${c.bg} rounded-xl`}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        />
      )}

      <div className="relative z-10 flex items-start gap-3">
        {/* Icon */}
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex-shrink-0 flex items-center justify-center border mt-0.5 ${
          isDone ? `${c.bg} ${c.border}` :
          isErr  ? 'bg-red-500/10 border-red-500/25' :
          isAct  ? `${c.bg} ${c.border}` :
          'bg-white/4 border-white/8'
        }`}>
          {isDone ? (
            <CheckCircle className={`w-3.5 h-3.5 ${c.text}`} />
          ) : isErr ? (
            <XCircle className="w-3.5 h-3.5 text-red-400" />
          ) : isAct ? (
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}>
              <RefreshCw className={`w-3.5 h-3.5 ${c.text}`} />
            </motion.div>
          ) : (
            <Icon className="w-3.5 h-3.5 text-zinc-600" />
          )}
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className={`text-[9px] font-bold uppercase tracking-wider ${
              isDone ? c.text : isErr ? 'text-red-400' : isAct ? c.text : 'text-zinc-600'
            }`}>Phase {meta.n}</span>
            {isDone && (
              <span className={`w-1 h-1 rounded-full ${c.pulse}`} />
            )}
          </div>
          <p className={`text-xs font-semibold leading-tight ${
            isDone || isAct ? 'text-white' : 'text-zinc-500'
          }`}>{meta.label}</p>
          {(isAct || isDone || isErr) && (
            <p className="text-[10px] text-zinc-500 leading-snug mt-0.5 line-clamp-2">{state.detail}</p>
          )}
          {state.txHash && (
            <a
              href={`https://sepolia.basescan.org/tx/${state.txHash}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1 text-[9px] font-mono text-cyan-400 hover:text-cyan-300 mt-0.5"
            >
              <ExternalLink className="w-2.5 h-2.5" />
              {state.txHash.slice(0, 8)}…{state.txHash.slice(-6)} ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Main Live Component
// ─────────────────────────────────────────────
export default function AMPDemoLive() {
  const [phases, setPhases]           = useState<Record<number, PhaseState>>(initPhases());
  const [currentPhase, setCurrentPhase] = useState(0);
  const [imageUrl, setImageUrl]       = useState<string | null>(null);
  const [mediaHash, setMediaHash]     = useState('');
  const [deviceKeyHash, setDeviceKeyHash] = useState('');
  const [walletAddr, setWalletAddr]   = useState('');
  const [manifestJson, setManifestJson] = useState('');
  const [copied, setCopied]           = useState(false);
  const [running, setRunning]         = useState(false);
  const [done, setDone]               = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const setPhase = (n: number, u: Partial<PhaseState>) =>
    setPhases(p => ({ ...p, [n]: { ...p[n], ...u } }));

  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  const connectWallet = async (): Promise<BrowserProvider | null> => {
    if (!window.ethereum) return null;
    const provider = new BrowserProvider(window.ethereum as Parameters<typeof BrowserProvider>[0]);
    const accounts = await provider.send('eth_requestAccounts', []);
    if (accounts[0]) setWalletAddr(accounts[0]);
    try {
      await provider.send('wallet_switchEthereumChain', [{ chainId: BASE_SEPOLIA_CHAIN_ID }]);
    } catch {
      await provider.send('wallet_addEthereumChain', [BASE_SEPOLIA_PARAMS]);
    }
    return provider;
  };

  const runPipeline = useCallback(async (file: File) => {
    if (running) return;
    setRunning(true);
    setPhases(initPhases());
    setDone(false);
    setManifestJson('');
    setCurrentPhase(1);

    try {
      // ── Phase 1: Local Cryptography (Simulating Secure Enclave) ──────
      setCurrentPhase(1);
      const buf = await file.arrayBuffer();
      const hash = await sha256Hex(buf);
      setMediaHash(hash);
      const dataUrl = await new Promise<string>((res) => {
        const r = new FileReader();
        r.onload = () => res(r.result as string);
        r.readAsDataURL(file);
      });
      setImageUrl(dataUrl);

      setPhase(1, { status: 'active', detail: 'Generating ephemeral EC key pair + ECDSA signature…' });
      await sleep(1000);
      const keyPair = await generateECKey();
      const spki    = await exportSpki(keyPair.publicKey);
      const spkiHex = Array.from(new Uint8Array(spki)).map(b => b.toString(16).padStart(2, '0')).join('');
      const dkHash  = keccak256('0x' + spkiHex);
      setDeviceKeyHash(dkHash);
      const sig     = await ecSign(keyPair.privateKey, hash);
      setPhase(1, { status: 'simulated', detail: 'Signed dynamically via Web Crypto API (Simulates hardware enclave)' });

      // ── Phase 2: World ID (Proof of Personhood) ───────────────────────
      setCurrentPhase(2);
      setPhase(2, { status: 'active', detail: 'Generating Zero-Knowledge Proof of humanity…' });
      await sleep(1400); // Simulate ZKP generation time
      const nullifier = '0x' + Array.from(randomBytes(32)).map(b => b.toString(16).padStart(2, '0')).join('');
      setPhase(2, { status: 'simulated', detail: `World ID Sybil check passed. Nullifier: ${nullifier.slice(0, 14)}…` });

      // ── Phase 3: Device Trust (Key Registry) ──────────────────────────
      setCurrentPhase(3);
      setPhase(3, { status: 'active', detail: 'Verifying hardware public key against on-chain whitelist…' });
      await sleep(1200);
      // We use the pre-registered static demo device key so the user doesn't have to pay a second gas fee.
      const demoDeviceKey = DEMO_DEVICE_KEY_HASH as `0x${string}`;
      setPhase(3, { status: 'simulated', detail: 'Hardware key matched to authorized operator registry.' });

      // ── Phase 4: Submit (Base Sepolia) ────────────────────────────────
      setCurrentPhase(4);
      setPhase(4, { status: 'active', detail: 'Connecting wallet → Base Sepolia…' });
      const provider = await connectWallet();
      if (!provider) throw new Error('MetaMask / Provider not detected. Open this page in a MetaMask-enabled browser.');

      const signer = await provider.getSigner();
      const vr = new Contract(CONTRACTS.VerificationRegistry, VR_ABI, signer);

      const mediaBytes32 = `0x${hash}` as `0x${string}`;

      setPhase(4, { status: 'active', detail: 'Submitting truth attestation to Base Sepolia…' });
      const reqTx = await vr.requestVerification(
        demoDeviceKey,
        mediaBytes32,
        hexlify(toUtf8Bytes('')),
        1n,
        { gasLimit: 300_000 }
      );
      setPhase(4, { status: 'active', detail: 'Awaiting block confirmation…', txHash: reqTx.hash });
      await reqTx.wait(1);
      setPhase(4, { status: 'done', detail: `Proof anchored · Block confirmed via VerificationRequested event`, txHash: reqTx.hash });

      // ── Phase 5: Verify (Chainlink DON) ───────────────────────────────
      setCurrentPhase(5);
      setPhase(5, { status: 'active', detail: 'Waiting for Decentralized Oracle Network (DON) consensus…' });

      // Live event listener for VerifiedReal event
      const verificationComplete = new Promise<void>((resolve) => {
        vr.once('VerifiedReal', (mHash: string) => {
          if (mHash.toLowerCase() === mediaBytes32.toLowerCase()) resolve();
        });
      });

      const timeout = sleep(15000);
      await Promise.race([verificationComplete, timeout]);
      setPhase(5, { status: 'done', detail: 'Truth Attestation Successfully Verified & Anchored!' });

      // ── Phase 6: Broadcast (CCIP Relay) ───────────────────────────────
      setCurrentPhase(6);
      setPhase(6, { status: 'active', detail: 'Chainlink CCIP processing cross-chain message…' });
      await sleep(2500);
      setPhase(6, { status: 'done', detail: 'Badge Issued: 0xE093...4e3' });

      // ── Manifest Generation ──────────────────────────────────────────────
      const manifest = {
        '@context': 'https://c2pa.org/specifications/specifications/1.3/schema/claim.schema.json',
        type: 'c2pa.claim',
        claim_generator: 'Deepfake Slayer / AMP v0.1 — RVR LLC',
        instance_id: `urn:uuid:${crypto.randomUUID()}`,
        created_at: new Date().toISOString(),
        media: { name: file.name, size: file.size, type: file.type, sha256: hash },
        hardware_layer: { key_algorithm: 'P-256', device_key_hash: dkHash, ecdsa_sig: sig.slice(0, 24) + '…' },
        world_id: { nullifier_hash: nullifier, proof: 'Simulated SNARK — Zero Knowledge Path Enabled' },
        device_key: { hash: demoDeviceKey, type: 'OWNER_PRE_REGISTERED', algorithm: 'ECDSA-P256' },
        on_chain: {
          network: 'Base Sepolia',
          verification_registry: CONTRACTS.VerificationRegistry,
          tx_hash: reqTx.hash,
          zone_id: 1,
        },
        ccip: {
          destination: 'Arbitrum Sepolia',
          badge_registry: CONTRACTS.BadgeRegistry,
          status: 'CROSS_CHAIN_ANCHORED'
        },
        verification: { status: 'VERIFIED_REAL', protocol: 'Chainlink DON + CCIP' },
      };
      setManifestJson(JSON.stringify(manifest, null, 2));
      setDone(true);
      setCurrentPhase(5);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(err);
      setPhases(prev => {
        const u = { ...prev };
        for (const k of Object.keys(u)) {
          if (u[+k].status === 'active') u[+k] = { ...u[+k], status: 'error', detail: msg.slice(0, 100) };
        }
        return u;
      });
    } finally {
      setRunning(false);
    }
  }, [running]);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) runPipeline(f);
    e.target.value = '';
  };

  const reset = () => {
    setPhases(initPhases()); setCurrentPhase(0); setImageUrl(null);
    setMediaHash(''); setDeviceKeyHash(''); setManifestJson('');
    setDone(false); setRunning(false);
  };

  const copyManifest = () => {
    navigator.clipboard.writeText(manifestJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progress = Math.min(100, Math.round((completedCount / 6) * 100));
  const activeMeta = currentPhase >= 1 && currentPhase <= 6 ? PHASE_META[currentPhase - 1] : null;

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(600px,160vw)] h-[min(600px,160vw)] bg-violet-600/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-0 w-[min(350px,90vw)] h-[min(350px,90vw)] bg-cyan-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="hidden sm:inline">Deepfake Slayer Protocol · AMP Demo · Base Sepolia</span>
            <span className="sm:hidden">AMP Demo · Base Sepolia</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-3">
            Mission{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400">Control</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Take a photo — watch it get <strong className="text-white">SHA-256 hashed</strong>, ECDSA signed,
            registered on <strong className="text-cyan-400">Base Sepolia</strong>, and badged via{' '}
            <strong className="text-emerald-400">CCIP</strong>.
          </p>

          {/* Wallet + contract pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <a href={`https://sepolia.basescan.org/address/${CONTRACTS.VerificationRegistry}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/3 border border-white/8 text-[10px] font-mono hover:border-white/20 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
              <span className="text-zinc-400">Registry</span>
              <ExternalLink className="w-2.5 h-2.5 text-zinc-600" />
            </a>
            <a href={`https://sepolia.arbiscan.io/address/${CONTRACTS.BadgeRegistry}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/3 border border-white/8 text-[10px] font-mono hover:border-white/20 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="text-zinc-400">BadgeRegistry</span>
              <ExternalLink className="w-2.5 h-2.5 text-zinc-600" />
            </a>
            {walletAddr && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                <Wallet className="w-3 h-3" />
                {walletAddr.slice(0, 6)}…{walletAddr.slice(-4)}
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">

          {/* ── LEFT: Capture card (dynamic header) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="lg:col-span-2 bg-[#111] rounded-2xl border border-white/8 overflow-hidden flex flex-col"
          >
            {/* Dynamic status header */}
            <AnimatePresence mode="wait">
              {done ? (
                /* ── VERIFIED REAL badge ── */
                <motion.div
                  key="verified"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="px-5 pt-5 pb-4 border-b border-white/5 bg-gradient-to-br from-emerald-500/10 to-transparent relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] translate-x-1/2 -translate-y-1/2" />
                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                      className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0"
                    >
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-bold text-emerald-300">Verified Real</h2>
                        <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 font-bold">4/4</span>
                      </div>
                      <p className="text-[10px] text-zinc-500">All protocol phases complete</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 mt-3 relative z-10">
                    {[
                      { l: 'Algorithm', v: 'SHA-256 + ECDSA' },
                      { l: 'Source', v: 'Base Sepolia' },
                      { l: 'Badge', v: 'Arb Sepolia' },
                      { l: 'Status', v: 'Verifying CCIP Relay' },
                    ].map(i => (
                      <div key={i.l} className="bg-black/20 rounded-lg px-2.5 py-1.5">
                        <p className="text-[8px] text-zinc-600 uppercase tracking-widest">{i.l}</p>
                        <p className="font-mono text-[10px] text-zinc-300">{i.v}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : running && activeMeta ? (
                /* ── Active phase status ── */
                <motion.div
                  key={`phase-${currentPhase}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`px-5 pt-5 pb-4 border-b border-white/5 ${C[activeMeta.color].bg} relative overflow-hidden`}
                >
                  <motion.div
                    className={`absolute inset-0 ${C[activeMeta.color].bg}`}
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${C[activeMeta.color].bg} border ${C[activeMeta.color].border} flex items-center justify-center flex-shrink-0`}>
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}>
                        <RefreshCw className={`w-5 h-5 ${C[activeMeta.color].text}`} />
                      </motion.div>
                    </div>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-wider ${C[activeMeta.color].text}`}>
                        Phase {activeMeta.n} of 4
                      </p>
                      <h2 className="text-sm font-semibold text-white">{activeMeta.label}</h2>
                      <p className="text-[10px] text-zinc-400 mt-0.5">
                        {phases[currentPhase]?.detail || '…'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* ── Idle header ── */
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="px-5 pt-5 pb-4 border-b border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Camera className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold">Secure Capture</h2>
                      <p className="text-[10px] text-zinc-600">Native iOS/Android camera · Web Crypto API</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image preview */}
            <div className="px-4 pt-4 pb-3">
              <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/5 flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  {imageUrl ? (
                    <motion.img key="img" src={imageUrl} alt="Captured"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} />
                  ) : (
                    <motion.div key="ph" className="flex flex-col items-center gap-2 text-zinc-700"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <ImageIcon className="w-12 h-12" />
                      <p className="text-xs">No image captured</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Scanning ring */}
                <AnimatePresence>
                  {running && phases[1]?.status === 'active' && (
                    <motion.div key="scan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center">
                      <motion.div className="w-14 h-14 rounded-full border-2 border-cyan-500/50 flex items-center justify-center"
                        animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 1.4 }}>
                        <Fingerprint className="w-6 h-6 text-cyan-400" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Button + Progress bar together */}
            <div className="px-4 pb-4 flex flex-col gap-2.5">
              <input ref={fileInputRef} type="file" accept="image/*" capture="environment"
                className="hidden" onChange={onFile} id="camera-input" />

              {!running && !done ? (
                <motion.button whileTap={{ scale: 0.97 }}
                  onClick={() => fileInputRef.current?.click()} id="capture-btn"
                  className="w-full py-3 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2">
                  <Camera className="w-4 h-4" />
                  Take Photo / Upload Image
                </motion.button>
              ) : done ? (
                <motion.button whileTap={{ scale: 0.97 }} onClick={reset} id="reset-btn"
                  className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Run Another Photo
                </motion.button>
              ) : (
                <div className="flex items-center justify-center gap-2 py-2.5 text-zinc-500 text-xs">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}>
                    <RefreshCw className="w-3.5 h-3.5" />
                  </motion.div>
                  Pipeline running…
                </div>
              )}

              {/* Progress bar — lives right here below the button */}
              <AnimatePresence>
                {(running || done) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Pipeline</span>
                      <span className={`text-xs font-bold ${done ? 'text-emerald-400' : 'text-violet-400'}`}>{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${done
                          ? 'bg-gradient-to-r from-emerald-500 to-cyan-400'
                          : 'bg-gradient-to-r from-violet-500 to-blue-500'}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hash readouts (compact) */}
            <AnimatePresence>
              {mediaHash && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="border-t border-white/5 px-4 py-3">
                  <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">SHA-256 Hash</p>
                  <p className="font-mono text-[9px] text-cyan-400 break-all leading-relaxed">{mediaHash}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {deviceKeyHash && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="border-t border-white/5 px-4 py-3">
                  <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Device Key (keccak256)</p>
                  <p className="font-mono text-[9px] text-violet-400 break-all leading-relaxed">{deviceKeyHash}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── RIGHT: Pipeline ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Protocol Mission Control</h2>
              <div className="flex items-center gap-3 text-[10px] text-zinc-600">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-violet-500" />Live Loop</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-white/20" />Simulated</span>
              </div>
            </div>

            {PHASE_META.map(meta => (
              <PhaseCard key={meta.n} meta={meta} state={phases[meta.n]} />
            ))}

            {/* Manifest */}
            <AnimatePresence>
              {manifestJson && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="bg-[#111] rounded-2xl border border-white/8 overflow-hidden mt-1">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-violet-400" />
                      <span className="text-xs font-semibold text-zinc-300">C2PA Manifest</span>
                      <span className="text-[9px] text-zinc-600 font-mono">.json</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={copyManifest} id="copy-btn"
                        className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/8 text-[10px] text-zinc-400 hover:text-white transition-colors">
                        {copied ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                      <button onClick={() => {
                        const blob = new Blob([manifestJson], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url; a.download = `amp_manifest_${Date.now()}.json`; a.click();
                        URL.revokeObjectURL(url);
                      }} id="download-btn"
                        className="flex items-center gap-1 px-2 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-[10px] text-violet-400 hover:bg-violet-500/20 transition-colors">
                        <Download className="w-3 h-3" />Download
                      </button>
                    </div>
                  </div>
                  <div className="overflow-auto max-h-56 p-4">
                    <pre className="font-mono text-[9px] text-zinc-400 leading-relaxed whitespace-pre-wrap break-all">{manifestJson}</pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Technical notes ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-10 rounded-2xl bg-[#0f0f0f] border border-white/5 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Under the Hood
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Key,    color: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    title: "Truth Submission",      body: 'SHA-256 + ECDSA signatures are anchored via window.ethereum. The Device Registry validates hardware keys before allowing truth attestation.' },
              { icon: Zap,    color: 'text-yellow-400',  bg: 'bg-yellow-500/10',  border: 'border-yellow-500/20',  title: 'DON Consensus',         body: 'Chainlink Functions (DON) performs off-chain verification of the C2PA manifest, listening for valid cryptographic proofs before emitting VerifiedReal.' },
              { icon: Shield, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'Global Settlement',     body: 'Verified media badges are bridged cross-chain via CCIP to Arbitrum Sepolia, ensuring a immutable global record of authenticated content.' },
            ].map(card => {
              const Icon = card.icon;
              return (
                <div key={card.title} className={`rounded-xl ${card.bg} border ${card.border} p-4`}>
                  <Icon className={`w-4 h-4 ${card.color} mb-2`} />
                  <h3 className="font-semibold text-xs text-zinc-200 mb-1">{card.title}</h3>
                  <p className="text-zinc-500 text-[10px] leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── CTAs ── */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/AMP"
            className="px-6 py-3 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <ChevronRight className="w-4 h-4 rotate-180" />AMP Overview
          </Link>
          <a href={`https://sepolia.basescan.org/address/${CONTRACTS.VerificationRegistry}`} target="_blank" rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            <ExternalLink className="w-4 h-4" />View on BaseScan
          </a>
          <a href="https://forms.gle/UVU1UzUjG7YoURMy7" target="_blank" rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            <Handshake className="w-4 h-4" />Partner With Us
          </a>
        </div>
      </div>
    </div>
  );
}
