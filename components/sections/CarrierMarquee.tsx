import { carrierBrands } from "@/lib/content";

function Chip({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-xl border border-white/10 bg-white px-5 py-3 shadow-card">
      <span
        className="flex h-6 w-6 items-center justify-center rounded-md text-xs font-black text-white"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {name.charAt(0)}
      </span>
      <span
        className="whitespace-nowrap text-base font-extrabold tracking-tight"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-4 px-2">
      {carrierBrands.map((c) => (
        <Chip key={c.name} {...c} />
      ))}
    </div>
  );
}

export function CarrierMarquee() {
  return (
    <section className="border-y border-white/10 bg-ink-900/50 py-12">
      <p className="container-px mb-7 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-white/40">
        Carriers We Work With
      </p>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
          <Track />
          <Track />
        </div>
      </div>

      <p className="container-px mt-7 text-center text-[11px] text-white/30">
        Logos shown for illustration. BDE Capital is independent and not
        affiliated with or endorsed by these carriers.
      </p>
    </section>
  );
}
