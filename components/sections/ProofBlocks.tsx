import { proofBlocks } from "@/lib/content";
import { StatCounter } from "@/components/ui/StatCounter";
import { SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function ProofBlocks() {
  return (
    <section id="track-record" className="scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="The Track Record"
          title={
            <>
              Why agency owners <br className="hidden sm:block" /> work with{" "}
              <span className="text-lime-400">BDE</span>
            </>
          }
        />

        <Stagger
          stagger={0.08}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3"
        >
          {proofBlocks.map((b) => (
            <StaggerItem key={b.label}>
              <div className="group h-full bg-ink-950 p-7 transition-colors duration-300 hover:bg-ink-900 sm:p-10">
                <p className="display text-5xl text-lime-400 sm:text-6xl lg:text-7xl">
                  {b.numeric !== undefined ? (
                    <StatCounter value={b.numeric} prefix={b.prefix} suffix={b.suffix} />
                  ) : (
                    b.value
                  )}
                </p>
                <p className="mt-4 font-display text-lg font-extrabold uppercase tracking-tight text-white sm:text-xl">
                  {b.label}
                </p>
                <p className="mt-1.5 text-sm text-white/50">{b.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
