import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RiggingDiagramId =
  | "sling-bridle-90"
  | "sling-bridle-60"
  | "sling-bridle-45"
  | "sling-bridle-30"
  | "sling-bridle-intro"
  | "force-triangle"
  | "leg-included-angle"
  | "tension-multiplier-chart"
  | "horizontal-compression"
  | "cog-centered"
  | "cog-offset"
  | "cog-complex"
  | "three-leg-bridle"
  | "load-moment"
  | "volume-block"
  | "choker-hitch"
  | "basket-hitch";

const LABEL = "fill-foreground text-[11px] font-medium";
const DIM = "stroke-foreground/50 stroke-[1.25]";
const MAIN = "stroke-foreground stroke-[2.25]";
const ACCENT = "stroke-foreground/70 stroke-[1.75]";

function DiagramFrame({
  children,
  className,
  viewBox = "0 0 400 300",
}: {
  readonly children: ReactNode;
  readonly className?: string;
  readonly viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-hidden
      className={cn("mx-auto w-full max-w-md text-foreground", className)}
    >
      {children}
    </svg>
  );
}

function SlingBridle({
  angleDeg,
  multiplier,
  loadWeight,
}: {
  readonly angleDeg: number;
  readonly multiplier?: string;
  readonly loadWeight?: string;
}) {
  const cx = 200;
  const hookY = 42;
  const loadY = 248;
  const rise = loadY - hookY;
  const rad = (angleDeg * Math.PI) / 180;
  const halfSpan = angleDeg >= 89 ? 28 : rise / Math.tan(rad);
  const leftX = cx - halfSpan;
  const rightX = cx + halfSpan;
  const arcR = 36;

  return (
    <DiagramFrame>
      <line x1={leftX} y1={loadY} x2={cx} y2={hookY} className={MAIN} />
      <line x1={rightX} y1={loadY} x2={cx} y2={hookY} className={MAIN} />
      <circle cx={cx} cy={hookY} r={7} className={MAIN} fill="none" />
      <text x={cx} y={hookY - 14} textAnchor="middle" className={LABEL}>
        Hook
      </text>
      <rect x={leftX - 18} y={loadY} width={rightX - leftX + 36} height={18} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <text x={cx} y={loadY + 38} textAnchor="middle" className={LABEL}>
        {loadWeight ? `Load W = ${loadWeight}` : "Load W"}
      </text>
      <path
        d={`M ${leftX + arcR} ${loadY} A ${arcR} ${arcR} 0 0 0 ${leftX + arcR * Math.cos(rad)} ${loadY - arcR * Math.sin(rad)}`}
        className={ACCENT}
        fill="none"
      />
      <text x={leftX + 52} y={loadY - 14} className={LABEL}>
        θ = {angleDeg}°
      </text>
      <text x={leftX - 8} y={loadY - 30} className={LABEL}>
        T
      </text>
      <text x={rightX + 4} y={loadY - 30} className={LABEL}>
        T
      </text>
      {multiplier ? (
        <text x={cx} y={loadY + 58} textAnchor="middle" className={LABEL}>
          Multiplier × {multiplier}
        </text>
      ) : null}
      <line x1={leftX - 40} y1={loadY} x2={rightX + 40} y2={loadY} className={DIM} />
      <text x={rightX + 44} y={loadY + 4} className={LABEL}>
        horizontal
      </text>
    </DiagramFrame>
  );
}

function ForceTriangle() {
  return (
    <DiagramFrame>
      <line x1={120} y1={240} x2={120} y2={60} className={MAIN} />
      <text x={98} y={150} className={LABEL}>
        W
      </text>
      <line x1={120} y1={240} x2={300} y2={80} className={MAIN} />
      <text x={220} y={140} className={LABEL}>
        T (sling)
      </text>
      <line x1={120} y1={240} x2={300} y2={240} className={ACCENT} />
      <text x={200} y={258} textAnchor="middle" className={LABEL}>
        horizontal component
      </text>
      <path d="M 120 220 L 140 220 L 140 240 Z" className={DIM} fill="hsl(var(--foreground) / 0.15)" />
      <text x={200} y={36} textAnchor="middle" className={LABEL}>
        T = W ÷ (2 sin θ) per leg — force triangle at one leg
      </text>
    </DiagramFrame>
  );
}

function LegIncludedAngle() {
  return (
    <DiagramFrame viewBox="0 0 400 320">
      <text x={200} y={28} textAnchor="middle" className={LABEL}>
        Leg angle θ from horizontal ≠ included angle between legs
      </text>
      <line x1={100} y1={200} x2={200} y2={70} className={MAIN} />
      <line x1={300} y1={200} x2={200} y2={70} className={MAIN} />
      <circle cx={200} cy={70} r={6} className={MAIN} fill="none" />
      <rect x={80} y={200} width={240} height={16} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <path d="M 130 200 A 40 40 0 0 0 155 168" className={ACCENT} fill="none" />
      <text x={118} y={188} className={LABEL}>
        θ = 30°
      </text>
      <path d="M 170 78 A 30 30 0 0 1 230 78" className={ACCENT} fill="none" />
      <text x={200} y={58} textAnchor="middle" className={LABEL}>
        included = 60°
      </text>
      <text x={200} y={248} textAnchor="middle" className={LABEL}>
        Symmetric bridle: included angle ≈ 2θ (same convention)
      </text>
    </DiagramFrame>
  );
}

function TensionMultiplierChart() {
  const bars = [
    { label: "90°", mult: 1.0, h: 40 },
    { label: "60°", mult: 1.155, h: 46 },
    { label: "45°", mult: 1.414, h: 57 },
    { label: "30°", mult: 2.0, h: 80 },
  ];
  const baseY = 220;
  const startX = 70;
  const gap = 72;

  return (
    <DiagramFrame viewBox="0 0 400 280">
      <text x={200} y={28} textAnchor="middle" className={LABEL}>
        Tension multiplier vs leg angle (symmetric two-leg)
      </text>
      <line x1={48} y1={baseY} x2={352} y2={baseY} className={DIM} />
      <line x1={48} y1={50} x2={48} y2={baseY} className={DIM} />
      <text x={24} y={140} className={LABEL} transform="rotate(-90 24 140)">
        multiplier
      </text>
      {bars.map((bar, i) => {
        const x = startX + i * gap;
        return (
          <g key={bar.label}>
            <rect
              x={x}
              y={baseY - bar.h}
              width={44}
              height={bar.h}
              className={MAIN}
              fill="hsl(var(--foreground) / 0.12)"
            />
            <text x={x + 22} y={baseY - bar.h - 8} textAnchor="middle" className={LABEL}>
              ×{bar.mult}
            </text>
            <text x={x + 22} y={baseY + 20} textAnchor="middle" className={LABEL}>
              {bar.label}
            </text>
          </g>
        );
      })}
    </DiagramFrame>
  );
}

function HorizontalCompression() {
  return (
    <DiagramFrame>
      <line x1={130} y1={60} x2={200} y2={60} className={MAIN} />
      <line x1={270} y1={60} x2={200} y2={60} className={MAIN} />
      <line x1={130} y1={220} x2={200} y2={60} className={MAIN} />
      <line x1={270} y1={220} x2={200} y2={60} className={MAIN} />
      <rect x={100} y={220} width={200} height={24} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <line x1={70} y1={232} x2={100} y2={232} className={ACCENT} markerStart="url(#arrow)" />
      <line x1={330} y1={232} x2={300} y2={232} className={ACCENT} />
      <text x={52} y={236} className={LABEL}>
        ←
      </text>
      <text x={336} y={236} className={LABEL}>
        →
      </text>
      <text x={200} y={268} textAnchor="middle" className={LABEL}>
        Low angle → inward compression on load
      </text>
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </DiagramFrame>
  );
}

function CogCentered() {
  return (
    <DiagramFrame>
      <line x1={200} y1={50} x2={200} y2={120} className={MAIN} />
      <circle cx={200} cy={42} r={8} className={MAIN} fill="none" />
      <rect x={120} y={200} width={160} height={48} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <circle cx={200} cy={224} r={6} className={ACCENT} fill="hsl(var(--foreground) / 0.25)" />
      <line x1={200} y1={120} x2={200} y2={200} className={DIM} strokeDasharray="4 4" />
      <text x={212} y={180} className={LABEL}>
        hook above COG
      </text>
      <text x={200} y={268} textAnchor="middle" className={LABEL}>
        Center of gravity — load hangs level
      </text>
    </DiagramFrame>
  );
}

function CogOffset() {
  return (
    <DiagramFrame>
      <line x1={240} y1={50} x2={240} y2={110} className={MAIN} />
      <circle cx={240} cy={42} r={8} className={MAIN} fill="none" />
      <line x1={130} y1={200} x2={240} y2={110} className={MAIN} />
      <line x1={290} y1={200} x2={240} y2={110} className={ACCENT} />
      <rect x={100} y={200} width={220} height={48} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <circle cx={175} cy={224} r={6} className={ACCENT} fill="hsl(var(--foreground) / 0.25)" />
      <text x={160} y={268} className={LABEL}>
        COG
      </text>
      <text x={200} y={36} textAnchor="middle" className={LABEL}>
        Shorten heavy side — hook may need to be over COG
      </text>
    </DiagramFrame>
  );
}

function CogComplex() {
  return (
    <DiagramFrame viewBox="0 0 400 300">
      <rect x={90} y={180} width={220} height={20} className={MAIN} fill="hsl(var(--foreground) / 0.06)" />
      <rect x={110} y={120} width={80} height={60} className={MAIN} fill="hsl(var(--foreground) / 0.1)" />
      <rect x={220} y={140} width={70} height={40} className={MAIN} fill="hsl(var(--foreground) / 0.14)" />
      <circle cx={185} cy={200} r={7} className={ACCENT} fill="hsl(var(--foreground) / 0.3)" />
      <line x1={185} y1={50} x2={185} y2={90} className={MAIN} />
      <text x={185} y={268} textAnchor="middle" className={LABEL}>
        COG from drawing or trial hoist — not always geometric center
      </text>
    </DiagramFrame>
  );
}

function ThreeLegBridle() {
  return (
    <DiagramFrame>
      <circle cx={200} cy={48} r={7} className={MAIN} fill="none" />
      <line x1={120} y1={220} x2={200} y2={48} className={MAIN} />
      <line x1={280} y1={220} x2={200} y2={48} className={MAIN} />
      <line x1={200} y1={220} x2={200} y2={48} className={ACCENT} />
      <rect x={90} y={220} width={220} height={20} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <text x={200} y={262} textAnchor="middle" className={LABEL}>
        One leg may slack — do not assume equal share
      </text>
    </DiagramFrame>
  );
}

function LoadMoment() {
  return (
    <DiagramFrame viewBox="0 0 400 280">
      <line x1={60} y1={220} x2={60} y2={80} className={MAIN} />
      <line x1={60} y1={220} x2={280} y2={120} className={MAIN} />
      <rect x={270} y={200} width={50} height={30} className={MAIN} fill="hsl(var(--foreground) / 0.1)" />
      <line x1={60} y1={220} x2={295} y2={220} className={ACCENT} />
      <text x={175} y={238} textAnchor="middle" className={LABEL}>
        d (radius)
      </text>
      <text x={295} y={192} className={LABEL}>
        F
      </text>
      <text x={200} y={36} textAnchor="middle" className={LABEL}>
        M = F × d — farther radius reduces crane capacity
      </text>
    </DiagramFrame>
  );
}

function VolumeBlock() {
  return (
    <DiagramFrame viewBox="0 0 400 260">
      <rect x={120} y={80} width={160} height={100} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <line x1={120} y1={80} x2={150} y2={50} className={DIM} />
      <line x1={280} y1={80} x2={310} y2={50} className={DIM} />
      <line x1={150} y1={50} x2={310} y2={50} className={DIM} />
      <line x1={280} y1={180} x2={310} y2={150} className={DIM} />
      <line x1={310} y1={50} x2={310} y2={150} className={DIM} />
      <text x={200} y={135} textAnchor="middle" className={LABEL}>
        Volume × ρ = W
      </text>
      <text x={200} y={220} textAnchor="middle" className={LABEL}>
        L × W × t (plate) or ft³ × lb/ft³
      </text>
    </DiagramFrame>
  );
}

function ChokerHitch() {
  return (
    <DiagramFrame>
      <circle cx={200} cy={40} r={7} className={MAIN} fill="none" />
      <path d="M 200 47 Q 120 120 140 220 L 260 220 Q 280 120 200 47" className={MAIN} fill="none" />
      <rect x={120} y={220} width={160} height={20} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <text x={200} y={262} textAnchor="middle" className={LABEL}>
        Choker — reduced WLL at choke point
      </text>
    </DiagramFrame>
  );
}

function BasketHitch() {
  return (
    <DiagramFrame>
      <circle cx={200} cy={40} r={7} className={MAIN} fill="none" />
      <path d="M 120 220 L 120 50 L 200 40 L 280 50 L 280 220" className={MAIN} fill="none" />
      <rect x={120} y={220} width={160} height={20} className={MAIN} fill="hsl(var(--foreground) / 0.08)" />
      <text x={200} y={262} textAnchor="middle" className={LABEL}>
        Basket — both legs share vertical load
      </text>
    </DiagramFrame>
  );
}

const DIAGRAMS: Record<RiggingDiagramId, ReactNode> = {
  "sling-bridle-90": <SlingBridle angleDeg={90} multiplier="1.0" />,
  "sling-bridle-60": <SlingBridle angleDeg={60} multiplier="1.155" />,
  "sling-bridle-45": <SlingBridle angleDeg={45} multiplier="1.414" />,
  "sling-bridle-30": <SlingBridle angleDeg={30} multiplier="2.0" />,
  "sling-bridle-intro": <SlingBridle angleDeg={45} />,
  "force-triangle": <ForceTriangle />,
  "leg-included-angle": <LegIncludedAngle />,
  "tension-multiplier-chart": <TensionMultiplierChart />,
  "horizontal-compression": <HorizontalCompression />,
  "cog-centered": <CogCentered />,
  "cog-offset": <CogOffset />,
  "cog-complex": <CogComplex />,
  "three-leg-bridle": <ThreeLegBridle />,
  "load-moment": <LoadMoment />,
  "volume-block": <VolumeBlock />,
  "choker-hitch": <ChokerHitch />,
  "basket-hitch": <BasketHitch />,
};

export function isRiggingDiagramId(value: string): value is RiggingDiagramId {
  return value in DIAGRAMS;
}

type Props = {
  readonly id: RiggingDiagramId;
  readonly className?: string;
  readonly caption?: string;
};

export function RiggingDiagram({ id, className, caption }: Props) {
  return (
    <figure className={cn("not-prose my-4", className)}>
      <div className="rounded-sm bg-foreground/[0.03] px-3 py-4 sm:px-5 sm:py-5">{DIAGRAMS[id]}</div>
      {caption ? <figcaption className="mt-2 text-center text-sm text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  );
}

/** Bridle with optional worked-load label for example slides */
export function SlingBridleDiagram({
  angleDeg,
  multiplier,
  loadWeight,
  className,
}: {
  readonly angleDeg: number;
  readonly multiplier?: string;
  readonly loadWeight?: string;
  readonly className?: string;
}) {
  return (
    <figure className={cn("not-prose", className)}>
      <div className="rounded-sm bg-foreground/[0.03] px-3 py-4 sm:px-5 sm:py-5">
        <SlingBridle angleDeg={angleDeg} multiplier={multiplier} loadWeight={loadWeight} />
      </div>
    </figure>
  );
}
