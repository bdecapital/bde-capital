import { caseStudies, caseStudyDisclaimer } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

function Row({
  label,
  from,
  to,
}: {
  label: string;
  from: string;
  to: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-t border-white/8 py-3 first:border-t-0">
      <span className="text-xs font-medium uppercase tracking-wider text-white/45">
        {label}
      </span>
      <span className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white/40 line-through decoration-white/20">
          {from}
        </span>
        <Icon name="arrow" className="h-3.5 w-3.5 text-lime-400" />
        <span className="font-display text-sm font-extrabold text-lime-400">
          {to}
        </span>
      </span>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section className="border-y border-white/10 bg-ink-900 py-24 sm:py-28 lg:py-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="The Outcomes"
          title={
            <>
              Owner-dependent to{" "}
              <span className="text-lime-400">acquisition-ready</span>
            </>
          }
        />

        <Stagger stagger={0.12} className="mt-16 grid gap-5 md:grid-cols-3">
          {caseStudies.map((c) => (
            <StaggerItem key={c.tag} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-950/70 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-lime-400/40">
                {/* dashboard header */}
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-4">
                  <span className="font-display text-sm font-extrabold uppercase tracking-tight text-white">
                    {c.tag}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-lime-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-300">
                    <Icon name="trending" className="h-3 w-3" />
                    Repositioned
                  </span>
                </div>

                <div className="px-6 py-4">
                  <Row label="Revenue" from={c.revenue.from} to={c.revenue.to} />
                  <Row label="Team Size" from={c.team.from} to={c.team.to} />
                  <Row label="Enterprise Value" from={c.ev.from} to={c.ev.to} />
                </div>

                {/* exit readiness meter */}
                <div className="mt-auto border-t border-white/10 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-white/45">
                      Exit Readiness
                    </span>
                    <span className="font-display text-sm font-extrabold text-lime-400">
                      {c.readiness.from}% → {c.readiness.to}%
                    </span>
                  </div>
                  <div className="relative mt-2.5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-white/15"
                      style={{ width: `${c.readiness.from}%` }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-lime-400 shadow-lime transition-all duration-700 group-hover:brightness-110"
                      style={{ width: `${c.readiness.to}%` }}
                    />
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <p className="rounded-2xl border border-white/10 bg-ink-950/40 p-5 text-center text-xs leading-relaxed text-white/40">
            {caseStudyDisclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
