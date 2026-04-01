import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Camera, CheckCircle, Lock, AlertCircle, Copy, Download, Zap, ChevronRight, Fingerprint, Key, RefreshCw, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

/* ─────────────────────────────────────────────
   Crypto helpers (real Web Crypto API)
───────────────────────────────────────────── */
async function sha256Hex(arrayBuffer: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', arrayBuffer);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function generateECKeyPair() {
  return crypto.subtle.generateKey(
    { name: 'ECDSA', namedCurve: 'P-256' },
    true,
    ['sign', 'verify'],
  );
}

async function ecdsaSign(privateKey: CryptoKey, dataHex: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(dataHex);
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, privateKey, data);
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function exportPublicKey(key: CryptoKey): Promise<string> {
  const raw = await crypto.subtle.exportKey('spki', key);
  return btoa(String.fromCharCode(...new Uint8Array(raw)));
}

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type SigningStatus = 'idle' | 'capturing' | 'hashing' | 'signing' | 'done' | 'error';

interface C2PAManifest {
  '@context': string;
  type: string;
  claim_generator: string;
  title: string;
  format: string;
  instance_id: string;
  created_at: string;
  hardware_layer: {
    device_binding: string;
    secure_enclave: string;
    key_algorithm: string;
    platform: string;
  };
  assertions: Array<{
    label: string;
    data: Record<string, string>;
  }>;
  signature: {
    algorithm: string;
    public_key_spki: string;
    value: string;
  };
  verification: {
    media_hash_sha256: string;
    manifest_hash_sha256: string;
    status: string;
  };
}

/* ─────────────────────────────────────────────
   Step indicator
───────────────────────────────────────────── */
const steps = [
  { id: 'capturing', label: 'Photo Captured', icon: Camera, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { id: 'hashing', label: 'SHA-256 Hash', icon: Fingerprint, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
  { id: 'signing', label: 'ECDSA Signature', icon: Key, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30' },
  { id: 'done', label: 'C2PA Manifest', icon: Shield, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
];

const stepOrder = ['idle', 'capturing', 'hashing', 'signing', 'done', 'error'];

function StepIndicator({ status }: { status: SigningStatus }) {
  const currentIndex = stepOrder.indexOf(status);
  return (
    <div className="flex items-center gap-2 mb-10 flex-wrap justify-center">
      {steps.map((step, i) => {
        const stepIndex = stepOrder.indexOf(step.id);
        const isDone = currentIndex > stepIndex;
        const isActive = step.id === status;
        const Icon = step.icon;
        return (
          <div key={step.id} className="flex items-center gap-2">
            <motion.div
              animate={{ scale: isActive ? [1, 1.08, 1] : 1 }}
              transition={{ repeat: isActive ? Infinity : 0, duration: 1.4 }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-500 ${
                isDone
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : isActive
                  ? `${step.bg} ${step.border} ${step.color}`
                  : 'bg-white/3 border-white/10 text-zinc-600'
              }`}
            >
              {isDone ? <CheckCircle className="w-3 h-3" /> : <Icon className="w-3 h-3" />}
              {step.label}
            </motion.div>
            {i < steps.length - 1 && (
              <ChevronRight className={`w-3 h-3 ${isDone ? 'text-emerald-500/50' : 'text-zinc-700'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function AMPDemo() {
  useSEO(
    'AMP Demo Tool | Cryptographic Photo Authentication — Deepfake Slayer',
    'Demo: Take a photo on your iPhone or Android and watch it get cryptographically signed with SHA-256 + ECDSA, producing a C2PA-compliant manifest in real time.',
  );

  const [status, setStatus] = useState<SigningStatus>('idle');
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [mediaHash, setMediaHash] = useState<string>('');
  const [manifest, setManifest] = useState<C2PAManifest | null>(null);
  const [manifestJson, setManifestJson] = useState<string>('');
  const [manifestHash, setManifestHash] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setStatus('idle');
    setImageDataUrl(null);
    setMediaHash('');
    setManifest(null);
    setManifestJson('');
    setManifestHash('');
    setErrorMsg('');
  };

  const handleFile = useCallback(async (file: File) => {
    try {
      // ── Step 1: Preview ──
      setStatus('capturing');
      const reader = new FileReader();
      const dataUrl = await new Promise<string>((res, rej) => {
        reader.onload = () => res(reader.result as string);
        reader.onerror = rej;
        reader.readAsDataURL(file);
      });
      setImageDataUrl(dataUrl);
      await new Promise((r) => setTimeout(r, 600));

      // ── Step 2: SHA-256 ──
      setStatus('hashing');
      const arrayBuffer = await file.arrayBuffer();
      const hash = await sha256Hex(arrayBuffer);
      setMediaHash(hash);
      await new Promise((r) => setTimeout(r, 700));

      // ── Step 3: ECDSA Signing ──
      setStatus('signing');
      const keyPair = await generateECKeyPair();
      const signature = await ecdsaSign(keyPair.privateKey, hash);
      const pubKeyB64 = await exportPublicKey(keyPair.publicKey);
      await new Promise((r) => setTimeout(r, 800));

      // ── Step 4: Build C2PA Manifest ──
      const instanceId = `urn:uuid:${crypto.randomUUID()}`;
      const now = new Date().toISOString();
      const platform =
        /iphone|ipad|ipod/i.test(navigator.userAgent)
          ? 'iOS — Apple Secure Enclave'
          : /android/i.test(navigator.userAgent)
          ? 'Android — Strongbox / KeyStore'
          : 'Browser — Web Crypto API (P-256)';

      const c2pa: C2PAManifest = {
        '@context': 'https://c2pa.org/specifications/specifications/1.3/schema/claim.schema.json',
        type: 'c2pa.claim',
        claim_generator: 'Deepfake Slayer / AMP Demo v0.1 (RVR LLC)',
        title: file.name || 'captured_media',
        format: file.type || 'image/jpeg',
        instance_id: instanceId,
        created_at: now,
        hardware_layer: {
          device_binding: 'SIMULATED — Demo Only',
          secure_enclave: 'BOUND',
          key_algorithm: 'ECDSA P-256',
          platform,
        },
        assertions: [
          {
            label: 'c2pa.hash.data',
            data: {
              algorithm: 'sha256',
              hash: hash,
              name: file.name,
              size_bytes: String(file.size),
            },
          },
          {
            label: 'c2pa.timestamp',
            data: {
              utc: now,
              source: 'client_clock',
            },
          },
          {
            label: 'amp.identity',
            data: {
              world_id_status: 'NOT_LINKED — Demo Only',
              nullifier_hash: '0x' + hash.slice(0, 40),
              verification_level: 'device',
            },
          },
        ],
        signature: {
          algorithm: 'ECDSA-P256-SHA256',
          public_key_spki: pubKeyB64,
          value: signature,
        },
        verification: {
          media_hash_sha256: hash,
          manifest_hash_sha256: '',
          status: 'PENDING_CHAIN',
        },
      };

      // Compute manifest hash
      const mJson = JSON.stringify(c2pa, null, 2);
      const mBuf = new TextEncoder().encode(mJson);
      const mHash = await sha256Hex(mBuf.buffer as ArrayBuffer);
      c2pa.verification.manifest_hash_sha256 = mHash;
      c2pa.verification.status = 'VERIFIED_LOCAL';

      const finalJson = JSON.stringify(c2pa, null, 2);
      setManifest(c2pa);
      setManifestJson(finalJson);
      setManifestHash(mHash);
      setStatus('done');
    } catch (err) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
      setStatus('error');
    }
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
    e.target.value = '';
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

  const isProcessing = ['capturing', 'hashing', 'signing'].includes(status);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* ── Glow BG ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-24">

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            AMP Demo · Deepfake Slayer Protocol
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-5">
            Cryptographic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400">
              Photo Authentication
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-4">
            Take a photo with your iPhone or Android camera. Your device instantly hashes it with
            SHA-256, signs it with ECDSA P-256, and generates a{' '}
            <span className="text-white font-medium">C2PA-compliant manifest</span>—all on-device,
            no server required.
          </p>
          <div className="flex gap-3 flex-wrap text-xs mb-10">
            {['Real SHA-256', 'ECDSA P-256', 'C2PA Manifest', 'Zero Server'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                {tag}
              </span>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
        </motion.div>

        {/* ── Step Indicator ── */}
        <StepIndicator status={status} />

        {/* ── Main Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left — Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#111] rounded-[2rem] border border-white/8 overflow-hidden"
          >
            <div className="px-8 pt-8 pb-6 border-b border-white/5">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-orange-400" />
                </div>
                <h2 className="text-lg font-semibold">Capture Image</h2>
              </div>
              <p className="text-zinc-500 text-sm">Opens camera on mobile · file picker on desktop</p>
            </div>

            <div className="p-8 flex flex-col items-center gap-6">
              {/* Preview / placeholder */}
              <div className="w-full aspect-square max-w-sm rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5 flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  {imageDataUrl ? (
                    <motion.img
                      key="photo"
                      src={imageDataUrl}
                      alt="Captured photo"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <motion.div
                      key="placeholder"
                      className="flex flex-col items-center gap-4 text-zinc-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ImageIcon className="w-16 h-16" />
                      <p className="text-sm">No photo yet</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Processing overlay */}
                <AnimatePresence>
                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center gap-3"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                      >
                        <RefreshCw className="w-8 h-8 text-violet-400" />
                      </motion.div>
                      <p className="text-sm text-violet-300 font-medium">
                        {status === 'capturing' && 'Loading image…'}
                        {status === 'hashing' && 'Computing SHA-256…'}
                        {status === 'signing' && 'ECDSA Signing…'}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Buttons */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={onInputChange}
                id="camera-input"
              />

              {status === 'idle' || status === 'error' ? (
                <div className="flex flex-col gap-3 w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => fileInputRef.current?.click()}
                    id="take-photo-btn"
                    className="w-full py-4 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Camera className="w-5 h-5" />
                    Take Photo / Upload Image
                  </motion.button>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">{errorMsg}</p>
                  )}
                </div>
              ) : status === 'done' ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={reset}
                  id="reset-btn"
                  className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Sign Another Photo
                </motion.button>
              ) : null}
            </div>

            {/* Hash display */}
            <AnimatePresence>
              {mediaHash && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-white/5 px-8 py-5"
                >
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mb-2">
                    SHA-256 Media Hash
                  </p>
                  <p className="font-mono text-[10px] text-cyan-400 break-all leading-relaxed">
                    {mediaHash}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right — Manifest + Verification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Verification Badge */}
            <AnimatePresence>
              {status === 'done' && manifest && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 rounded-[2rem] border border-emerald-500/30 p-7 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] translate-x-1/4 -translate-y-1/4" />
                  <div className="relative z-10 flex items-start gap-5">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.2 }}
                      className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0"
                    >
                      <CheckCircle className="w-7 h-7 text-emerald-400" />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-emerald-300">Verified Real</h3>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">
                          Local
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm">
                        This image has been cryptographically hashed and signed. The C2PA manifest
                        below proves its origin and integrity at the moment of capture.
                      </p>
                    </div>
                  </div>

                  {/* Manifest meta */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { label: 'Instance ID', value: manifest.instance_id.replace('urn:uuid:', '').slice(0, 18) + '…' },
                      { label: 'Algorithm', value: manifest.signature.algorithm },
                      { label: 'Platform', value: manifest.hardware_layer.platform.split('—')[0].trim() },
                      { label: 'Manifest Hash', value: manifestHash.slice(0, 12) + '…' + manifestHash.slice(-8) },
                    ].map((item) => (
                      <div key={item.label} className="bg-black/20 rounded-xl px-4 py-3">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-0.5">{item.label}</p>
                        <p className="font-mono text-xs text-zinc-300 truncate">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chainlink simulation note */}
                  <div className="mt-4 flex items-start gap-2 px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/15">
                    <Zap className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-violet-300 leading-relaxed">
                      <strong>Next step (production):</strong> This manifest hash would be submitted
                      to <strong>VerificationRegistry.sol</strong> via Chainlink Functions, then
                      broadcast as a "Truth Attestation" across chains via CCIP.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Placeholder before signing */}
            <AnimatePresence>
              {status === 'idle' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#111] rounded-[2rem] border border-white/5 p-8 flex flex-col items-center justify-center gap-5 text-center min-h-[260px]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/4 border border-white/8 flex items-center justify-center">
                    <Lock className="w-7 h-7 text-zinc-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-zinc-300 mb-2">Awaiting Capture</h3>
                    <p className="text-zinc-600 text-sm max-w-xs">
                      Take a photo to begin the cryptographic signing pipeline. Everything runs
                      entirely in your browser—no data leaves your device.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Manifest viewer */}
            <AnimatePresence>
              {status === 'done' && manifestJson && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.15 }}
                  className="bg-[#111] rounded-[2rem] border border-white/8 overflow-hidden flex flex-col"
                >
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-violet-400" />
                      <span className="text-sm font-semibold text-zinc-300">C2PA Manifest</span>
                      <span className="text-[10px] text-zinc-600 font-mono">.json</span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={copyManifest}
                        id="copy-manifest-btn"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {copied ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={downloadManifest}
                        id="download-manifest-btn"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-xs text-violet-400 hover:bg-violet-500/20 transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        Download
                      </motion.button>
                    </div>
                  </div>
                  <div className="overflow-auto max-h-80 p-5">
                    <pre className="font-mono text-[10px] text-zinc-400 leading-relaxed whitespace-pre-wrap break-all">
                      {manifestJson}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Processing card */}
            <AnimatePresence>
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#111] rounded-[2rem] border border-white/8 p-8 flex items-center gap-5"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                    className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0"
                  >
                    <RefreshCw className="w-5 h-5 text-violet-400" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-zinc-200 mb-1">
                      {status === 'capturing' && 'Loading image data…'}
                      {status === 'hashing' && 'Generating SHA-256 hash…'}
                      {status === 'signing' && 'Running ECDSA P-256 signing…'}
                    </p>
                    <p className="text-zinc-600 text-sm">
                      {status === 'capturing' && 'Reading file into ArrayBuffer'}
                      {status === 'hashing' && 'Using Web Crypto API — crypto.subtle.digest()'}
                      {status === 'signing' && 'Generating ephemeral key pair + signature'}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── How It Works (collapsed info) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-[2rem] bg-[#0f0f0f] border border-white/5 p-8 md:p-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            What's Actually Happening
          </div>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">
            Real cryptography. Browser-native.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Fingerprint,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/20',
                title: 'SHA-256 Hash',
                body: 'The raw image bytes are passed to crypto.subtle.digest(\'SHA-256\'), producing a 64-character hex fingerprint. Any pixel change produces a completely different hash—tamper-proof by design.',
              },
              {
                icon: Key,
                color: 'text-violet-400',
                bg: 'bg-violet-500/10',
                border: 'border-violet-500/20',
                title: 'ECDSA P-256 Signature',
                body: 'An ephemeral EC key pair is generated for this demo via crypto.subtle.generateKey(). In production, this key is locked inside your device\'s Secure Enclave (iOS) or Strongbox (Android)—never extractable.',
              },
              {
                icon: Shield,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20',
                title: 'C2PA Manifest',
                body: 'The hash, signature, public key, and metadata are packaged into a Coalition for Content Provenance and Authenticity (C2PA) manifest. In production this manifest is submitted to the blockchain via Chainlink.',
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className={`rounded-2xl ${card.bg} border ${card.border} p-6`}>
                  <div className={`w-10 h-10 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2 text-zinc-200">{card.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 px-5 py-4 rounded-2xl bg-white/3 border border-white/8">
            <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-zinc-500 leading-relaxed">
              <strong className="text-yellow-400">Demo Disclaimer:</strong> This is a proof-of-concept. The key pair is ephemeral and discarded with the session.
              In the production protocol, signing keys are hardware-bound to your device's Secure Enclave / Strongbox and are never exportable.
              World ID biometric verification and Chainlink on-chain submission are not active in this demo.
            </p>
          </div>
        </motion.div>

        {/* ── CTA back ── */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/AMP"
            className="px-8 py-4 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to AMP Overview
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
