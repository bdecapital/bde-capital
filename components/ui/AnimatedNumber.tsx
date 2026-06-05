"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  format?: (n: number) => string;
  duration?: number;
  className?: string;
};

/**
 * Tweens to `value` every time it changes (unlike a one-shot counter).
 * Powers the live valuation engine.
 */
export function AnimatedNumber({
  value,
  format = (n) => Math.round(n).toLocaleString("en-US"),
  duration = 0.6,
  className,
}: AnimatedNumberProps) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      prev.current = value;
      return;
    }
    const controls = animate(prev.current, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    prev.current = value;
    return () => controls.stop();
  }, [value, duration, reduce]);

  return <span className={className}>{format(display)}</span>;
}

/** Compact USD: $1.5M, $2.8M, $850K, $12.4M */
export function usd(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    const s = (m >= 10 ? m.toFixed(1) : m.toFixed(2)).replace(/\.?0+$/, "");
    return `$${s}M`;
  }
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}
