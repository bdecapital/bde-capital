"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { ValuationEngine } from "./ValuationEngine";

const kpis = [
  { value: 135, prefix: "Up to ", suffix: "%", label: "Commission" },
  { value: 100, prefix: "$", suffix: "M", label: "Platform in build" },
  { value: 50, prefix: "All ", suffix: "", label: "States" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // parallax layers
  const glowX = useTransform(sx, (v) => v * 40);
  const glowY = useTransform(sy, (v) => v * 40);
  const ghostX = useTransform(sx, (v) => v * 22);
  const ghostY = useTransform(sy, (v) => v * 22);
  const rotY = useTransform(sx, (v) => v * 5);
  const rotX = useTransform(sy, (v) => v * -5);
  const cardBX = useTransform(sx, (v) => v * 36);
  const cardBY = useTransform(sy, (v) => v * 36);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-32"
    >
      {/* ---- animated background ---- */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-ink-950" />
        <motion.div
          className="grid-bg absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_40%,black,transparent_72%)]"
          animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "56px 56px"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-lime-glow" />
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute left-1/2 top-1/4 h-[460px] w-[860px] -translate-x-1/2 rounded-full bg-lime-400/[0.08] blur-[150px]"
        />
        <motion.span
          style={{ x: ghostX, y: ghostY }}
          className="pointer-events-none absolute -right-10 bottom-0 select-none font-display text-[34vw] font-black leading-none text-white/[0.025] lg:text-[26rem]"
        >
          9X
        </motion.span>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />
      </div>

      <div className="container-px w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
          {/* Left — headline */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.h1
              variants={item}
              className="display text-[19vw] leading-[0.84] text-white sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
            >
              Scale it.
              <br />
              Sell it.
              <br />
              <span className="text-lime-400">Up to 9X.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-md text-lg leading-relaxed text-white/70 text-pretty"
            >
              You didn&rsquo;t build a business. You built a high-paying job you
              can&rsquo;t sell. <span className="text-white">Let&rsquo;s change that.</span>
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#track-record"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-9 py-4 text-base font-extrabold uppercase tracking-tight text-ink-950 shadow-lime transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-lime-lg"
              >
                {site.learnMoreCta}
                <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-9 py-4 text-base font-bold tracking-tight text-white transition-all duration-200 hover:border-lime-400/50 hover:bg-white/10"
              >
                {site.qualifyCta}
              </a>
            </motion.div>

            {/* live KPI counters */}
            <motion.dl variants={item} className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {kpis.map((k) => (
                <div key={k.label}>
                  <dd className="display text-2xl text-lime-400 sm:text-3xl">
                    {k.prefix}
                    <AnimatedNumber value={k.value} duration={1.6} />
                    {k.suffix}
                  </dd>
                  <dt className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/45">
                    {k.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right — valuation engine with parallax + floating cards */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative [perspective:1400px]"
          >
            <motion.div style={{ rotateX: rotX, rotateY: rotY }} className="[transform-style:preserve-3d]">
              <ValuationEngine />
            </motion.div>

            {/* floating valuation card */}
            <motion.div
              style={{ x: cardBX, y: cardBY }}
              className="absolute -right-3 bottom-24 z-10 hidden sm:block"
            >
              <FloatCard label="Exit readiness" value="92%" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="rounded-xl border border-lime-400/30 bg-ink-850/90 px-3.5 py-2.5 shadow-card backdrop-blur-md"
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{label}</p>
      <p className="text-sm font-bold text-white">{value}</p>
    </motion.div>
  );
}
