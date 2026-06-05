export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Premium monogram mark */}
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 shadow-lime">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink-950" fill="none" aria-hidden="true">
          <rect x="3" y="14" width="4.5" height="7" rx="1" fill="currentColor" />
          <rect x="9.75" y="9" width="4.5" height="12" rx="1" fill="currentColor" />
          <rect x="16.5" y="3" width="4.5" height="18" rx="1" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-black uppercase tracking-[-0.02em] text-white">
          BDE Capital
        </span>
        <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.34em] text-lime-400">
          Growth · Exit · M&amp;A
        </span>
      </span>
    </span>
  );
}
