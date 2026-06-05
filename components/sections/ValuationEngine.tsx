"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedNumber, usd } from "@/components/ui/AnimatedNumber";
import { Icon } from "@/components/ui/Icon";

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const AIP_MIN = 250_000;
const AIP_MAX = 10_000_000;
const TIERS = [7, 8, 9];

// Multiple is driven by AIP tier only — NOT team size.
function multipleFor(aip: number): number {
  if (aip > 5_000_000) return 9;
  if (aip >= 3_000_000) return 8;
  return 7;
}

export function ValuationEngine() {
  const [aip, setAip] = useState(2_000_000);
  const [margin, setMargin] = useState(20);
  const [team, setTeam] = useState(12); // informational only

  const m = useMemo(() => {
    const ebitda = aip * (margin / 100);
    const multiple = multipleFor(aip);
    return { ebitda, multiple, exit: ebitda * multiple };
  }, [aip, margin]);

  const sliderCls =
    "w-full cursor-pointer appearance-none bg-transparent accent-lime-400 [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/15 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:-mt-[7px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-lime-400 [&::-webkit-slider-thumb]:shadow-lime [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ink-950";

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-lime-400/15 blur-3xl" aria-hidden="true" />

      <div className="relative rounded-[1.75rem] border border-white/12 bg-ink-900/85 p-6 shadow-card backdrop-blur-xl sm:p-7">
        {/* header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
              Agency Valuation Engine
            </p>
            <p className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
              What&rsquo;s yours worth?
            </p>
          </div>
          <span className="lime-pill">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-400" />
            </span>
            Live
          </span>
        </div>

        {/* inputs */}
        <div className="mt-5 space-y-4">
          <Slider
            label="Annual Issued Premium"
            value={usd(aip)}
            min={AIP_MIN}
            max={AIP_MAX}
            step={50_000}
            raw={aip}
            onChange={setAip}
            cls={sliderCls}
          />
          <Slider
            label="EBITDA Margin"
            value={`${margin}%`}
            min={10}
            max={45}
            step={1}
            raw={margin}
            onChange={setMargin}
            cls={sliderCls}
          />
          <Slider
            label="Team Size"
            hint="info only"
            value={`${team}`}
            min={1}
            max={100}
            step={1}
            raw={team}
            onChange={setTeam}
            cls={sliderCls}
          />
        </div>

        {/* outputs: EBITDA + Applied Multiple */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Metric label="EBITDA" value={<AnimatedNumber value={m.ebitda} format={usd} />} />
          <Metric
            label="Applied Multiple"
            value={
              <AnimatedNumber value={m.multiple} format={(n) => `${Math.round(n)}x`} />
            }
          />
        </div>

        {/* estimated exit value — hero number */}
        <div className="relative mt-3 overflow-hidden rounded-2xl border border-lime-400/30 bg-lime-400/[0.07] p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-lime-300">
            Estimated Exit Value
          </p>
          <p className="display mt-1 text-4xl text-white sm:text-5xl">
            <AnimatedNumber value={m.exit} format={usd} />
          </p>
          <p className="mt-2 text-xs text-white/60">
            EBITDA <span className="text-white/80">{usd(m.ebitda)}</span> ×{" "}
            <span className="text-white/80">{m.multiple}x</span> multiple
          </p>
        </div>

        {/* tier chart — which multiple applies */}
        <div className="mt-5">
          <div className="flex h-20 items-end gap-2.5">
            {TIERS.map((mult) => {
              const h = (mult / 9) * 100;
              const active = mult === m.multiple;
              return (
                <div key={mult} className="flex flex-1 flex-col items-center gap-1.5">
                  <motion.div
                    className={`w-full rounded-t-md ${
                      active ? "bg-lime-400 shadow-lime" : "bg-white/12"
                    }`}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <span
                    className={`text-[11px] font-bold ${
                      active ? "text-lime-400" : "text-white/35"
                    }`}
                  >
                    {mult}x
                  </span>
                  <span
                    className={`text-[9px] font-medium uppercase tracking-wide ${
                      active ? "text-white/60" : "text-white/30"
                    }`}
                  >
                    {mult === 7 ? "$1–3M" : mult === 8 ? "$3–5M" : "$5M+"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <a
          href="#apply"
          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-extrabold uppercase tracking-tight text-ink-950 shadow-lime transition-all hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-lime-lg"
        >
          See If You Qualify
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <p className="mt-3 text-center text-[10px] leading-relaxed text-white/35">
          Illustrative estimate only. Actual valuation depends on persistency,
          growth, and market conditions.
        </p>
      </div>
    </div>
  );
}

function Slider({
  label,
  hint,
  value,
  min,
  max,
  step,
  raw,
  onChange,
  cls,
}: {
  label: string;
  hint?: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (n: number) => void;
  cls: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-xs font-semibold uppercase tracking-wider text-white/55">
          {label}
          {hint && (
            <span className="ml-1.5 normal-case tracking-normal text-white/30">
              ({hint})
            </span>
          )}
        </label>
        <span className="font-display text-sm font-bold text-lime-400">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className={cls}
      />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
        {label}
      </p>
      <p className="display mt-1 text-2xl text-white">{value}</p>
    </div>
  );
}
