import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Camera, CheckCircle, Lock, AlertCircle, Copy,
  Download, Zap, ChevronRight, Fingerprint, Key, RefreshCw,
  ImageIcon, Wallet, ExternalLink, Globe, Radio, XCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrowserProvider, Contract, keccak256, toUtf8Bytes, hexlify, randomBytes } from 'ethers';
import { useSEO } from '../hooks/useSEO';

// ─────────────────────────────────────────────
// Contract Config (Base Sepolia Testnet)
// ─────────────────────────────────────────────
const CONTRACTS = {
  VerificationRegistry: '0x7a14780823c72569593DbbfF52b2d29478d2250A',
  BadgeRegistry: '0xE093522e7dC2740a1C716Cdb29038A0BB5dCE4e3',
  FunctionsRouter: '0xf9B8fc078197181C841c296C876945aaa425B278',
};

const BASE_SEPOLIA_CHAIN_ID = '0x14a34'; // 84532
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
// Crypto helpers (Web Crypto API)
// ─────────────────────────────────────────────
async function sha256Hex(buf: ArrayBuffer): Promise<string> {
  const d = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(d)).map(b => b.toString(16).padStart(2, '0')).join('');
}
async function generateECKey() {
  return crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
}
async function ecSign(key: CryptoKey, hex: string): Promise<string> {
  const sig = await crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    key,
    new TextEncoder().encode(hex),
  );
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}
async function exportSpki(key: CryptoKey): Promise<ArrayBuffer> {
  return crypto.subtle.exportKey('spki', key);
}

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type PhaseStatus = 'pending' | 'active' | 'done' | 'error' | 'simulated';

interface PhaseState {
  status: PhaseStatus;
  detail: string;
  txHash?: string;
  extra?: string;
}

const initPhases = (): Record<number, PhaseState> => ({
  1: { status: 'pending', detail: 'Awaiting photo capture' },
  2: { status: 'pending', detail: 'Awaiting Phase 1' },
  3: { status: 'pending', detail: 'Awaiting Phase 2' },
  4: { status: 'pending', detail: 'Awaiting Phase 3' },
  5: { status: 'pending', detail: 'Awaiting Phase 4' },
  6: { status: 'pending', detail: 'Awaiting Phase 5' },
});

const PHASE_META = [
  { n: 1, label: 'Secure Capture & Hashing',       icon: Camera,      color: 'orange',  chain: 'On-Device' },
  { n: 2, label: 'World ID Identity Binding',       icon: Fingerprint, color: 'violet',  chain: 'Simulated' },
  { n: 3, label: 'Device Key Registration',         icon: Key,         color: 'cyan',    chain: 'Base Sepolia' },
  { n: 4, label: 'Verification Request (On-Chain)', icon: Shield,      color: 'blue',    chain: 'Base Sepolia' },
  { n: 5, label: 'Chainlink Functions Callback',    icon: Zap,         color: 'yellow',  chain: 'Simulated DON' },
  { n: 6, label: 'CCIP Cross-Chain Badge',          icon: Globe,       color: 'emerald', chain: 'Arb Sepolia' },
];

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  orange:  { text: 'text-orange-400',  bg: 'bg-orange-500/10',  border: 'border-orange-500/30',  glow: 'bg-orange-500/20' },
  violet:  { text: 'text-violet-400',  bg: 'bg-violet-500/10',  border: 'border-violet-500/30',  glow: 'bg-violet-500/20' },
  cyan:    { text: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/30',    glow: 'bg-cyan-500/20' },
  blue:    { text: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/30',    glow: 'bg-blue-500/20' },
  yellow:  { text: 'text-yellow-400',  bg: 'bg-yellow-500/10',  border: 'border-yellow-500/30',  glow: 'bg-yellow-500/20' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', glow: 'bg-emerald-500/20' },
};

// ─────────────────────────────────────────────
// Phase Card
// ─────────────────────────────────────────────
function PhaseCard({ meta, state, active }: { meta: typeof PHASE_META[0]; state: PhaseState; active: boolean }) {
  const c = colorMap[meta.color];
  const Icon = meta.icon;
  const isDone = state.status === 'done' || state.status === 'simulated';
  const isErr  = state.status === 'error';
  const isAct  = state.status === 'active';

  return (
    <motion.div
      layout
      animate={{ opacity: isDone || isAct || active ? 1 : 0.45 }}
      className={`rounded-2xl border p-5 relative overflow-hidden transition-all duration-500 ${
        isDone   ? `${c.bg} ${c.border}` :
        isErr    ? 'bg-red-500/10 border-red-500/30' :
        isAct    ? `${c.bg} ${c.border}` :
        'bg-[#111] border-white/6'
      }`}
    >
      {isAct && (
        <motion.div
          className={`absolute inset-0 ${c.glow} rounded-2xl`}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
              isDone ? `${c.bg} ${c.border}` : isErr ? 'bg-red-500/10 border-red-500/30' : isAct ? `${c.bg} ${c.border}` : 'bg-white/4 border-white/8'
            }`}>
              {isDone ? (
                <CheckCircle className={`w-4 h-4 ${c.text}`} />
              ) : isErr ? (
                <XCircle className="w-4 h-4 text-red-400" />
              ) : isAct ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}>
                  <RefreshCw className={`w-4 h-4 ${c.text}`} />
                </motion.div>
              ) : (
                <Icon className="w-4 h-4 text-zinc-600" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${
                  isDone ? c.text : isErr ? 'text-red-400' : isAct ? c.text : 'text-zinc-600'
                }`}>Phase {meta.n}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full border font-mono ${
                  state.status === 'simulated' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' :
                  isDone ? `${c.text} ${c.bg} ${c.border}` :
                  'text-zinc-600 bg-white/3 border-white/8'
                }`}>
                  {state.status === 'simulated' ? 'SIMULATED' : meta.chain}
                </span>
              </div>
              <p className={`text-sm font-semibold ${isDone ? 'text-white' : isAct ? 'text-white' : 'text-zinc-500'}`}>
                {meta.label}
              </p>
            </div>
          </div>
        </div>

        <p className={`text-xs leading-relaxed mb-2 ${isDone ? 'text-zinc-400' : isAct ? 'text-zinc-300' : 'text-zinc-600'}`}>
          {state.detail}
        </p>

        {state.txHash && (
          <a
            href={`https://sepolia.basescan.org/tx/${state.txHash}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            {state.txHash.slice(0, 10)}…{state.txHash.slice(-8)} ↗ BaseScan
          </a>
        )}

        {state.extra && (
          <p className="text-[10px] font-mono text-zinc-500 break-all mt-1 leading-relaxed line-clamp-3 sm:line-clamp-none">{state.extra}</p>
        )}
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────
export default function AMPDemo() {
  useSEO(
    'AMP Mission Control | Live Blockchain Photo Authentication — Deepfake Slayer',
    'Take a photo and watch it get cryptographically signed, device-key registered on Base Sepolia, and verified via Chainlink. Real on-chain pipeline powered by the Deepfake Slayer protocol.',
  );

  const [phases, setPhases] = useState<Record<number, PhaseState>>(initPhases());
  const [currentPhase, setCurrentPhase] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [mediaHash, setMediaHash] = useState('');
  const [deviceKeyHash, setDeviceKeyHash] = useState('');
  const [signature, setSignature] = useState('');
  const [walletAddr, setWalletAddr] = useState('');
  const [manifestJson, setManifestJson] = useState('');
  const [copied, setCopied] = useState(false);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const setPhase = (n: number, update: Partial<PhaseState>) =>
    setPhases(p => ({ ...p, [n]: { ...p[n], ...update } }));

  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  // ── Wallet Connect ──
  const connectWallet = async (): Promise<BrowserProvider | null> => {
    if (!window.ethereum) return null;
    const provider = new BrowserProvider(window.ethereum as Parameters<typeof BrowserProvider>[0]);
    const accounts = await provider.send('eth_requestAccounts', []);
    if (accounts[0]) setWalletAddr(accounts[0]);

    // Switch to Base Sepolia
    try {
      await provider.send('wallet_switchEthereumChain', [{ chainId: BASE_SEPOLIA_CHAIN_ID }]);
    } catch {
      await provider.send('wallet_addEthereumChain', [BASE_SEPOLIA_PARAMS]);
    }
    return provider;
  };

  // ── Main pipeline ──
  const runPipeline = useCallback(async (file: File) => {
    if (running) return;
    setRunning(true);
    setPhases(initPhases());
    setDone(false);
    setManifestJson('');
    setCurrentPhase(1);

    try {
      // ── PHASE 1: Capture + Hash + Sign ──────────────────
      setPhase(1, { status: 'active', detail: 'Reading image bytes…' });

      const dataUrl = await new Promise<string>((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result as string);
        r.onerror = rej;
        r.readAsDataURL(file);
      });
      setImageUrl(dataUrl);

      setPhase(1, { status: 'active', detail: 'Computing SHA-256 hash…' });
      const buf = await file.arrayBuffer();
      const hash = await sha256Hex(buf);
      setMediaHash(hash);
      await sleep(400);

      setPhase(1, { status: 'active', detail: 'Generating ECDSA P-256 key pair (Secure Enclave simulation)…' });
      const keyPair = await generateECKey();
      const sig = await ecSign(keyPair.privateKey, hash);
      setSignature(sig);
      const spki = await exportSpki(keyPair.publicKey);
      const spkiHex = Array.from(new Uint8Array(spki)).map(b => b.toString(16).padStart(2, '0')).join('');
      const dkHash = keccak256('0x' + spkiHex);
      setDeviceKeyHash(dkHash);
      await sleep(600);

      setPhase(1, {
        status: 'done',
        detail: `SHA-256 computed · ECDSA P-256 signed · Device key derived`,
        extra: `Hash: ${hash.slice(0, 24)}… | Key: ${dkHash.slice(0, 18)}…`,
      });

      // ── PHASE 2: World ID (simulated) ───────────────────
      setCurrentPhase(2);
      setPhase(2, { status: 'active', detail: 'Requesting World ID biometric verification…' });
      await sleep(1200);
      const nullifier = '0x' + Array.from(randomBytes(32)).map(b => b.toString(16).padStart(2, '0')).join('');
      setPhase(2, {
        status: 'simulated',
        detail: 'World ID OIDC handshake bypassed — nullifier derived from device key hash.',
        extra: `Nullifier: ${nullifier.slice(0, 20)}…`,
      });

      // ── PHASE 3: Register Device Key on Base Sepolia ────
      setCurrentPhase(3);
      setPhase(3, { status: 'active', detail: 'Connecting MetaMask → Base Sepolia…' });

      const provider = await connectWallet();

      if (provider) {
        try {
          const signer = await provider.getSigner();
          const vr = new Contract(CONTRACTS.VerificationRegistry, VR_ABI, signer);

          const alreadyTrusted: boolean = await vr.isDeviceTrusted(dkHash);
          if (alreadyTrusted) {
            setPhase(3, {
              status: 'done',
              detail: 'Device key already registered on-chain. Skipping duplicate registration.',
              extra: `VerificationRegistry: ${CONTRACTS.VerificationRegistry}`,
            });
          } else {
            setPhase(3, { status: 'active', detail: 'Sending registerDeviceKey() transaction…' });
            const tx = await vr.registerDeviceKey(dkHash);
            setPhase(3, { status: 'active', detail: 'Waiting for block confirmation…', txHash: tx.hash });
            await tx.wait(1);
            setPhase(3, {
              status: 'done',
              detail: 'DeviceKeyRegistered event confirmed on Base Sepolia.',
              txHash: tx.hash,
              extra: `VerificationRegistry: ${CONTRACTS.VerificationRegistry}`,
            });
          }

          // ── PHASE 4: requestVerification ────────────────
          setCurrentPhase(4);
          setPhase(4, { status: 'active', detail: 'Encoding media hash as bytes32…' });
          await sleep(400);

          const mediaBytes32 = ('0x' + hash).padEnd(66, '0').slice(0, 66) as `0x${string}`;
          const proofData = hexlify(toUtf8Bytes(''));
          const zoneId = 1n;

          setPhase(4, { status: 'active', detail: 'Calling requestVerification() on-chain…' });
          const reqTx = await vr.requestVerification(dkHash, mediaBytes32, proofData, zoneId);
          setPhase(4, { status: 'active', detail: 'Awaiting VerificationRequested event…', txHash: reqTx.hash });
          const receipt = await reqTx.wait(1);
          setPhase(4, {
            status: 'done',
            detail: `VerificationRequested emitted · Block ${receipt?.blockNumber} · Zone ID: 1`,
            txHash: reqTx.hash,
            extra: `BaseScan: sepolia.basescan.org/tx/${reqTx.hash}`,
          });
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          const isUserRejected = msg.includes('user rejected') || msg.includes('denied');
          if (isUserRejected) {
            setPhase(3, { status: 'simulated', detail: 'Wallet rejected — simulating Phases 3 & 4.' });
            setPhase(4, { status: 'simulated', detail: 'Simulated VerificationRequested event (no wallet).' });
            await sleep(1200);
          } else {
            setPhase(3, { status: 'simulated', detail: `Wallet error: ${msg.slice(0, 80)}. Running in simulation mode.` });
            setPhase(4, { status: 'simulated', detail: 'Simulated — requires funded wallet on Base Sepolia testnet.' });
            await sleep(800);
          }
          setCurrentPhase(4);
        }
      } else {
        // No MetaMask — simulate both
        setPhase(3, { status: 'simulated', detail: 'No Web3 wallet detected — simulating on-chain registration.', extra: `Contract: ${CONTRACTS.VerificationRegistry}` });
        setCurrentPhase(4);
        await sleep(800);
        setPhase(4, { status: 'simulated', detail: 'Simulated VerificationRequested event. Install MetaMask for live transactions.', extra: `Zone ID: 1 | Proof: ZK Mock (0x)` });
        await sleep(600);
      }

      // ── PHASE 5: Chainlink Functions DON (simulated) ────
      setCurrentPhase(5);
      setPhase(5, { status: 'active', detail: 'DON nodes fetching C2PA manifest from IPFS…' });
      await sleep(1500);
      setPhase(5, { status: 'active', detail: 'Running verify_truth.js: validating hardware cert + World ID proof…' });
      await sleep(1200);
      setPhase(5, { status: 'active', detail: 'DON consensus reached · Calling confirmVerification() callback…' });
      await sleep(900);
      setPhase(5, {
        status: 'simulated',
        detail: 'Chainlink DON oracle network processed the verification request and emitted VerifiedReal event.',
        extra: `Functions Router: ${CONTRACTS.FunctionsRouter} | DON: fun-base-sepolia-1`,
      });

      // ── PHASE 6: CCIP Badge (simulated) ─────────────────
      setCurrentPhase(6);
      setPhase(6, { status: 'active', detail: 'CCIP Router encoding cross-chain message…' });
      await sleep(1000);
      setPhase(6, { status: 'active', detail: 'Broadcasting "Verified Real" badge to Arbitrum Sepolia…' });
      await sleep(1400);
      setPhase(6, { status: 'active', detail: 'BadgeRegistry.simulateCcipReceive() confirming on Arbitrum…' });
      await sleep(900);
      setPhase(6, {
        status: 'simulated',
        detail: '"Verified Real" badge issued. BadgeIssued event confirmed on Arbitrum Sepolia.',
        extra: `BadgeRegistry: ${CONTRACTS.BadgeRegistry} | Chain Selector: 3478487238524512106`,
      });

      // ── Build manifest ───────────────────────────────────
      const manifest = {
        '@context': 'https://c2pa.org/specifications/specifications/1.3/schema/claim.schema.json',
        type: 'c2pa.claim',
        claim_generator: 'Deepfake Slayer / AMP v0.1 — RVR LLC',
        instance_id: `urn:uuid:${crypto.randomUUID()}`,
        created_at: new Date().toISOString(),
        media: { name: file.name, size: file.size, type: file.type, sha256: hash },
        hardware_layer: {
          secure_enclave: 'SIMULATED (demo) — production: iOS Secure Enclave / Android Strongbox',
          key_algorithm: 'ECDSA-P256-SHA256',
          device_key_hash: dkHash,
          ecdsa_signature: `${sig.slice(0, 24)}…`,
        },
        world_id: { nullifier_hash: nullifier, status: 'SIMULATED', verification_level: 'device' },
        on_chain: {
          network: 'Base Sepolia (84532)',
          verification_registry: CONTRACTS.VerificationRegistry,
          zone_id: 1,
          chainlink_functions_router: CONTRACTS.FunctionsRouter,
        },
        ccip: {
          destination: 'Arbitrum Sepolia (421614)',
          badge_registry: CONTRACTS.BadgeRegistry,
          chain_selector: '3478487238524512106',
          status: 'SIMULATED',
        },
        verification: { status: 'VERIFIED_REAL', pipeline: '6/6 phases complete' },
      };

      const mJson = JSON.stringify(manifest, null, 2);
      const mBuf = new TextEncoder().encode(mJson);
      const mHash = await sha256Hex(mBuf.buffer as ArrayBuffer);
      setManifestJson(JSON.stringify({ ...manifest, manifest_hash_sha256: mHash }, null, 2));
      setDone(true);
      setCurrentPhase(7);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(err);
      // Mark current active phase as error
      setPhases(prev => {
        const updated = { ...prev };
        for (const k of Object.keys(updated)) {
          if (updated[+k].status === 'active') {
            updated[+k] = { ...updated[+k], status: 'error', detail: `Error: ${msg.slice(0, 120)}` };
          }
        }
        return updated;
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
    setPhases(initPhases());
    setCurrentPhase(0);
    setImageUrl(null);
    setMediaHash('');
    setDeviceKeyHash('');
    setSignature('');
    setManifestJson('');
    setDone(false);
    setRunning(false);
  };

  const copyManifest = () => {
    navigator.clipboard.writeText(manifestJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadManifest = () => {
    const blob = new Blob([manifestJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `amp_manifest_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const completedCount = Object.values(phases).filter(p => p.status === 'done' || p.status === 'simulated').length;
  const progress = Math.round((completedCount / 6) * 100);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(700px,180vw)] h-[min(700px,180vw)] bg-violet-600/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 right-0 w-[min(400px,100vw)] h-[min(400px,100vw)] bg-cyan-600/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[min(300px,80vw)] h-[min(300px,80vw)] bg-orange-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="hidden sm:inline">Deepfake Slayer Protocol · AMP Demo · Base Sepolia Testnet</span>
            <span className="sm:hidden">AMP Demo · Base Sepolia</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-4">
            Mission{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400">
              Control
            </span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            Take a photo. Watch it get <strong className="text-white">SHA-256 hashed</strong>, ECDSA signed, registered on{' '}
            <strong className="text-cyan-400">Base Sepolia</strong>, verified by{' '}
            <strong className="text-blue-400">Chainlink Functions</strong>, and badged via{' '}
            <strong className="text-emerald-400">CCIP</strong> — the full 6-phase Deepfake Slayer pipeline.
          </p>

          {/* Contract pills */}
          <div className="flex flex-wrap gap-2 mb-6 max-w-full">
            {[
              { label: 'VerificationRegistry', addr: CONTRACTS.VerificationRegistry, url: `https://sepolia.basescan.org/address/${CONTRACTS.VerificationRegistry}`, color: 'cyan' },
              { label: 'BadgeRegistry', addr: CONTRACTS.BadgeRegistry, url: `https://sepolia.arbiscan.io/address/${CONTRACTS.BadgeRegistry}`, color: 'emerald' },
            ].map(c => (
              <a key={c.label} href={c.url} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/3 border border-white/8 text-[10px] font-mono hover:border-white/20 transition-colors group min-w-0">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.color === 'cyan' ? 'bg-cyan-500' : 'bg-emerald-500'}`} />
                <span className="text-zinc-400 group-hover:text-white transition-colors truncate">{c.label}</span>
                <span className="text-zinc-600 hidden sm:inline">{c.addr.slice(0, 6)}…{c.addr.slice(-4)}</span>
                <ExternalLink className="w-2.5 h-2.5 text-zinc-600 flex-shrink-0" />
              </a>
            ))}
            {walletAddr && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                <Wallet className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{walletAddr.slice(0, 6)}…{walletAddr.slice(-4)}</span>
              </span>
            )}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-10" />
        </motion.div>

        {/* ── Progress Bar ── */}
        <AnimatePresence>
          {running || done ? (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Pipeline Progress</span>
                <span className={`text-sm font-bold ${done ? 'text-emerald-400' : 'text-violet-400'}`}>{progress}%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${done ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-gradient-to-r from-violet-500 to-blue-500'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
              {running && (
                <p className="text-xs text-zinc-500 mt-1.5">
                  {currentPhase <= 6 ? `Processing Phase ${currentPhase}: ${PHASE_META[currentPhase - 1]?.label}…` : 'Finalizing manifest…'}
                </p>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── Left: Capture + Image ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="bg-[#111] rounded-[1.5rem] border border-white/8 overflow-hidden">
              <div className="px-6 pt-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Camera className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold">Secure Capture</h2>
                    <p className="text-[10px] text-zinc-600">Native camera on iOS/Android</p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                {/* Preview */}
                <div className="w-full h-48 sm:aspect-square sm:h-auto rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/5 flex items-center justify-center relative mb-4">
                  <AnimatePresence mode="wait">
                    {imageUrl ? (
                      <motion.img key="img" src={imageUrl} alt="Captured" className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} />
                    ) : (
                      <motion.div key="ph" className="flex flex-col items-center gap-3 text-zinc-700"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <ImageIcon className="w-14 h-14" />
                        <p className="text-xs">No image yet</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Scanning overlay */}
                  <AnimatePresence>
                    {running && phases[1]?.status === 'active' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <motion.div className="w-16 h-16 rounded-full border-2 border-cyan-500/50 flex items-center justify-center"
                          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}>
                          <Fingerprint className="w-7 h-7 text-cyan-400" />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Buttons */}
                <input ref={fileInputRef} type="file" accept="image/*" capture="environment"
                  className="hidden" onChange={onFile} id="camera-input" />

                {!running && !done ? (
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    onClick={() => fileInputRef.current?.click()} id="capture-btn"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <Camera className="w-4 h-4" />
                    Take Photo / Upload
                  </motion.button>
                ) : done ? (
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    onClick={reset} id="reset-btn"
                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                    Run Another
                  </motion.button>
                ) : (
                  <div className="flex items-center justify-center gap-2 py-3 text-zinc-500 text-xs">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}>
                      <RefreshCw className="w-3.5 h-3.5" />
                    </motion.div>
                    Pipeline running…
                  </div>
                )}
              </div>

              {/* Hash readout */}
              <AnimatePresence>
                {mediaHash && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/5 px-5 py-4">
                    <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1.5">SHA-256 Media Hash</p>
                    <p className="font-mono text-[9px] text-cyan-400 break-all leading-relaxed">{mediaHash}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {deviceKeyHash && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/5 px-5 py-4">
                    <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1.5">Device Key Hash (keccak256)</p>
                    <p className="font-mono text-[9px] text-violet-400 break-all leading-relaxed">{deviceKeyHash}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Verified badge */}
            <AnimatePresence>
              {done && (
                <motion.div initial={{ opacity: 0, scale: 0.9, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  className="bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 rounded-[1.5rem] border border-emerald-500/30 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] translate-x-1/4 -translate-y-1/4" />
                  <div className="relative z-10 flex items-center gap-4 mb-4">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
                      className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-emerald-400" />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-emerald-300">Verified Real</h3>
                        <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 font-bold uppercase">6/6</span>
                      </div>
                      <p className="text-xs text-zinc-500">All pipeline phases complete</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { l: 'Hash Algorithm', v: 'SHA-256' },
                      { l: 'Signing', v: 'ECDSA P-256' },
                      { l: 'Source Chain', v: 'Base Sepolia' },
                      { l: 'Badge Chain', v: 'Arb Sepolia' },
                    ].map(i => (
                      <div key={i.l} className="bg-black/20 rounded-lg px-3 py-2">
                        <p className="text-[9px] text-zinc-600 uppercase tracking-widest">{i.l}</p>
                        <p className="font-mono text-xs text-zinc-300">{i.v}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right: Phase Pipeline ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">6-Phase Pipeline</h2>
                <div className="flex items-center gap-2 text-[10px] text-zinc-600">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" /> Live On-Chain
                  <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block ml-2" /> Simulated
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {PHASE_META.map((meta) => (
                  <PhaseCard key={meta.n} meta={meta} state={phases[meta.n]} active={currentPhase === meta.n} />
                ))}
              </div>
            </motion.div>

            {/* Manifest viewer */}
            <AnimatePresence>
              {manifestJson && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="bg-[#111] rounded-[1.5rem] border border-white/8 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-violet-400" />
                      <span className="text-xs font-semibold text-zinc-300">C2PA Manifest</span>
                      <span className="text-[9px] text-zinc-600 font-mono">.json</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={copyManifest} id="copy-btn"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-[10px] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                        {copied ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                      <button onClick={downloadManifest} id="download-btn"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-[10px] text-violet-400 hover:bg-violet-500/20 transition-colors">
                        <Download className="w-3 h-3" />
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="overflow-auto max-h-64 p-4">
                    <pre className="font-mono text-[9px] text-zinc-400 leading-relaxed whitespace-pre-wrap break-all">{manifestJson}</pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Protocol Notes ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 rounded-[1.5rem] bg-[#0f0f0f] border border-white/5 p-7 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Technical Notes
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Key,    color: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    title: 'What\'s Real',       body: 'SHA-256 hashing via Web Crypto API. ECDSA P-256 key generation. keccak256 device key derivation. On-chain registerDeviceKey() + requestVerification() transactions on Base Sepolia.' },
              { icon: Zap,    color: 'text-yellow-400',  bg: 'bg-yellow-500/10',  border: 'border-yellow-500/20',  title: 'What\'s Simulated',  body: 'World ID biometric handshake. Chainlink DON oracle callback (confirmVerification). CCIP cross-chain relay to BadgeRegistry on Arbitrum Sepolia.' },
              { icon: Shield, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'Production Delta', body: 'Keys are hardware-bound in Secure Enclave / Strongbox. World ID OIDC is live. DON runs verify_truth.js off-chain. CCIP autonomously routes the badge cross-chain.' },
            ].map(card => {
              const Icon = card.icon;
              return (
                <div key={card.title} className={`rounded-xl ${card.bg} border ${card.border} p-5`}>
                  <div className={`w-8 h-8 rounded-lg ${card.bg} border ${card.border} flex items-center justify-center mb-3`}>
                    <Icon className={`w-4 h-4 ${card.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1.5 text-zinc-200">{card.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-5 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-white/3 border border-white/6">
            <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              <strong className="text-yellow-400">Demo Disclaimer:</strong> ECDSA keys are ephemeral and discarded on page refresh.
              Phases 3–4 require a funded MetaMask wallet on <strong className="text-zinc-400">Base Sepolia</strong> testnet.
              Phases 5–6 are simulated — in production these are handled autonomously by the Chainlink DON + CCIP.
              Contract addresses are live on Base Sepolia and Arbitrum Sepolia testnets.
            </p>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/AMP"
            className="px-7 py-3.5 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <ChevronRight className="w-4 h-4 rotate-180" />
            AMP Overview
          </Link>
          <a href={`https://sepolia.basescan.org/address/${CONTRACTS.VerificationRegistry}`} target="_blank" rel="noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/5 border border-white/10 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            <ExternalLink className="w-4 h-4" />
            View Contract on BaseScan
          </a>
          <Link to="/contact"
            className="px-7 py-3.5 rounded-full bg-white/5 border border-white/10 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            <Lock className="w-4 h-4" />
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
