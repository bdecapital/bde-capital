import { shiftIncome, shiftEquity } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Shift() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-lime-glow opacity-60" aria-hidden="true" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-5 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            The Shift
          </span>
          <h2 className="display text-4xl text-white text-balance sm:text-5xl lg:text-6xl">
            Income pays the bills.
            <br />
            <span className="text-lime-400">Equity changes your life.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Most agency owners spend a career maximizing cash flow and never
            build a dime of enterprise value. The wealthy ones do the opposite —
            they build an asset that pays them twice.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* Income */}
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-ink-850/60 p-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                What you have now
              </span>
              <h3 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-white/80">
                Just income
              </h3>
              <ul className="mt-6 space-y-4">
                {shiftIncome.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/55">
                    <Icon
                      name="x"
                      className="mt-0.5 h-5 w-5 shrink-0 text-white/30"
                    />
                    <span className="text-[15px]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Equity */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-lime-400/40 bg-lime-400/[0.06] p-8 shadow-lime">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-lime-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink-950">
                The goal
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
                What we build with you
              </span>
              <h3 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-white">
                Real equity
              </h3>
              <ul className="mt-6 space-y-4">
                {shiftEquity.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white">
                    <Icon
                      name="check"
                      className="mt-0.5 h-5 w-5 shrink-0 text-lime-400"
                      strokeWidth={2.4}
                    />
                    <span className="text-[15px] font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-base text-white/60">
            Agencies with systems, leadership, and recurring revenue command{" "}
            <span className="font-semibold text-lime-400">
              dramatically higher multiples
            </span>{" "}
            than owner-dependent books. That gap is your payday.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
