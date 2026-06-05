import { LeadForm } from "./LeadForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  "Increase production and recruiting",
  "Build systems, leadership & clean data",
  "Position the agency for a premium exit — up to 9X",
];

export function ApplySection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* dark abstract background — no stock photography */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-ink-950" />
        <div className="grid-bg absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_30%,black,transparent_70%)]" />
        <div className="absolute inset-0 bg-lime-glow" />
        <span className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[30vw] font-extrabold leading-none text-white/[0.03] lg:text-[22rem]">
          9X
        </span>
      </div>

      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <Reveal>
            <span className="lime-pill mb-6">Final step</span>
            <h2 className="display text-5xl text-white text-balance sm:text-6xl lg:text-7xl">
              Ready to build something{" "}
              <span className="text-lime-400">worth buying?</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Tell us your numbers. If you&rsquo;re a fit, we&rsquo;ll show you
              the exact plan to scale production, build enterprise value, and
              position for a premium exit. Operator to operator.
            </p>

            <ul className="mt-8 space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-ink-950">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />
                  </span>
                  <span className="text-[15px] font-medium text-white/85">{r}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-md text-xs leading-relaxed text-white/40">
              We help position agencies for a premium exit. No specific multiple
              or sale is guaranteed — outcomes depend on agency size, execution,
              persistency, and market conditions.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <LeadForm id="apply" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
