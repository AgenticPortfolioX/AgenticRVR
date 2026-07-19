import { motion } from 'motion/react';
import { Cpu, Radio, Database, Server, ArrowDown, CheckCircle2, Layers } from 'lucide-react';
import type { ArchLayer } from '../data/cre-workflows';

/* ── Accent color palette ── */
const COLORS = {
  blue:   { hex: '#3B82F6', bg: 'bg-blue-500/10',    border: 'border-blue-500/30',    text: 'text-blue-400',    fill: '#3B82F6' },
  red:    { hex: '#EF4444', bg: 'bg-red-500/10',     border: 'border-red-500/30',     text: 'text-red-400',     fill: '#EF4444' },
  green:  { hex: '#10B981', bg: 'bg-emerald-500/10',  border: 'border-emerald-500/30',  text: 'text-emerald-400',  fill: '#10B981' },
  amber:  { hex: '#F59E0B', bg: 'bg-amber-500/10',   border: 'border-amber-500/30',   text: 'text-amber-400',   fill: '#F59E0B' },
  purple: { hex: '#A855F7', bg: 'bg-purple-500/10',  border: 'border-purple-500/30',  text: 'text-purple-400',  fill: '#A855F7' },
} as const;

/* ── Zone icon resolver ── */
function zoneIcon(zone: string) {
  if (zone.includes('Zone 1')) return Cpu;
  if (zone.includes('Zone 2')) return Radio;
  if (zone.includes('Zone 3')) return Database;
  return Server;
}

/* ── Vertical pipeline connector (thin gradient line + arrowhead) ── */
function ArrowConnector({ color }: { color: string }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div
        className="w-px h-9"
        style={{ background: `linear-gradient(to bottom, ${color}, ${color}44)` }}
      />
      <svg width="14" height="9" viewBox="0 0 14 9" className="-mt-px" aria-hidden>
        <path d="M7 9L0 0h14L7 9Z" fill={color} />
      </svg>
    </div>
  );
}

/* ── Props ── */
interface ArchitectureFlowProps {
  inputs: string[];
  processing: string;
  outputs: string[];
  layers: ArchLayer[];
  accentVariant: 'blue' | 'red' | 'green' | 'amber' | 'purple';
}

/* ── Component ── */
export default function ArchitectureFlow({
  inputs,
  processing,
  outputs,
  layers,
  accentVariant,
}: ArchitectureFlowProps) {
  const c = COLORS[accentVariant];

  const zone1 = layers.find((l) => l.zone.includes('Zone 1'));
  const otherZones = layers.filter((l) => !l.zone.includes('Zone 1'));

  return (
    <div className="space-y-0">
      {/* ──────── INPUTS ──────── */}
      <StageBox accent={c} icon={ArrowDown} label="Inputs" items={inputs} delay={0.05} />

      <ArrowConnector color={c.hex} />

      {/* ──────── PROCESSING + Zone 1 inline ──────── */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="rounded-xl border bg-black/20 p-5"
        style={{ borderColor: `${c.hex}33`, borderLeftWidth: 3, borderLeftColor: c.hex }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${c.bg}`}>
            <Cpu className={`w-3.5 h-3.5 ${c.text}`} />
          </div>
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Processing</span>
          {zone1 && (
            <span className={`ml-auto text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${c.bg} ${c.text}`}>
              {zone1.zone}
            </span>
          )}
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">{processing}</p>

        {zone1 && (
          <div className="mt-3 pt-3 border-t border-white/5 flex items-start gap-2">
            <Cpu className={`w-3 h-3 mt-0.5 shrink-0 ${c.text}`} />
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${c.text}`}>{zone1.label}</p>
              <p className="text-[10px] text-zinc-500 mt-0.5 leading-relaxed">{zone1.description}</p>
            </div>
          </div>
        )}
      </motion.div>

      <ArrowConnector color={c.hex} />

      {/* ──────── OUTPUTS ──────── */}
      <StageBox accent={c} icon={CheckCircle2} label="Outputs" items={outputs} delay={0.2} />

      {/* ──────── ADDITIONAL SECURITY ZONES (Zone 2+) ──────── */}
      {otherZones.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          className="mt-6 pt-6 border-t border-white/5"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-3 flex items-center gap-1.5">
            <Layers className="w-3 h-3" />
            Additional Security Zones
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {otherZones.map((layer) => {
              const ZoneIcon = zoneIcon(layer.zone);
              return (
                <div
                  key={layer.zone}
                  className="rounded-xl p-4 bg-black/20 border"
                  style={{ borderColor: `${c.hex}33` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ZoneIcon className={`w-4 h-4 ${c.text}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${c.text}`}>
                      {layer.zone}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white mb-1">{layer.label}</p>
                  <p className="text-xs text-zinc-500 leading-snug">{layer.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ── Reusable stage box (Inputs / Outputs) ── */
function StageBox({
  accent,
  icon: Icon,
  label,
  items,
  delay,
}: {
  accent: (typeof COLORS)[keyof typeof COLORS];
  icon: React.ElementType;
  label: string;
  items: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="rounded-xl border bg-black/20 p-5"
      style={{ borderColor: `${accent.hex}33`, borderLeftWidth: 3, borderLeftColor: accent.hex }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${accent.bg}`}>
          <Icon className={`w-3.5 h-3.5 ${accent.text}`} />
        </div>
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{label}</span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-zinc-400 leading-snug flex gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full mt-1 shrink-0"
              style={{ backgroundColor: accent.hex }}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
