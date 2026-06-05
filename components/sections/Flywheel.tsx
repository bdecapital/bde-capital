"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { flywheelSteps } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Flywheel() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const step = flywheelSteps[active];
  const n = flywheelSteps.length;

  return (
    <section id="flywheel" className="scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="The Mechanism"
          title={
            <>
              The BDE <span className="text-lime-400">Exit Flywheel</span>
            </>
          }
          subtitle="Six compounding moves that turn an owner-dependent book into an acquisition-ready agency. Hover to explore each."
        />

        {/* ---- Circular (lg+) ---- */}
        <div className="mt-16 hidden lg:block">
          <div className="relative mx-auto aspect-square w-[560px]">
            {/* rotating dashed ring */}
            <motion.div
              className="absolute inset-[14%] rounded-full border border-dashed border-lime-400/25"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[14%] rounded-full bg-lime-400/[0.04] blur-xl" />

            {/* center hub */}
            <div className="absolute left-1/2 top-1/2 flex h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/12 bg-ink-900/90 p-8 text-center shadow-card backdrop-blur-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400 text-ink-950">
                <Icon name={step.icon} className="h-6 w-6" strokeWidth={1.9} />
              </span>
              <p className="mt-4 font-display text-2xl font-black uppercase tracking-tight text-white">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-snug text-white/60">{step.body}</p>
            </div>

            {/* nodes around the circle */}
            {flywheelSteps.map((s, i) => {
              const angle = (-90 + i * (360 / n)) * (Math.PI / 180);
              const R = 43; // % radius
              const x = 50 + R * Math.cos(angle);
              const y = 50 + R * Math.sin(angle);
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={s.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span
                    className={`flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-2xl border text-center transition-all duration-300 ${
                      isActive
                        ? "scale-110 border-lime-400 bg-lime-400 text-ink-950 shadow-lime-lg"
                        : "border-white/12 bg-ink-850/90 text-white hover:border-lime-400/40 hover:-translate-y-1"
                    }`}
                  >
                    <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.8} />
                    <span className="font-display text-xs font-extrabold uppercase tracking-tight">
                      {s.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ---- Vertical list (mobile) ---- */}
        <div className="mt-14 space-y-3 lg:hidden">
          {flywheelSteps.map((s, i) => (
            <div
              key={s.title}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-400 text-ink-950">
                <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="font-display text-base font-extrabold uppercase tracking-tight text-white">
                  <span className="text-lime-400">0{i + 1}</span> · {s.title}
                </p>
                <p className="mt-1 text-sm text-white/55">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="#apply" size="lg">
            {site.qualifyCta}
            <Icon name="arrow" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
