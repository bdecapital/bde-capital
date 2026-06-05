import { forYou, notForYou } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function WhoFor() {
  return (
    <section id="who-for" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeader
          eyebrow="Who This Is For"
          title={
            <>
              Built for closers. <span className="text-lime-400">Not tire-kickers.</span>
            </>
          }
          subtitle="We only work with agencies we can genuinely move the needle for. Be honest about which column you're in."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* For you */}
          <Reveal>
            <div className="h-full rounded-3xl border border-lime-400/40 bg-lime-400/[0.06] p-8 shadow-lime">
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white">
                This is for you
              </h3>
              <ul className="mt-6 space-y-4">
                {forYou.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-ink-950">
                      <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                    <span className="text-[15px] font-medium text-white">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Not for you */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-ink-850/60 p-8">
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white/70">
                This is NOT for you
              </h3>
              <ul className="mt-6 space-y-4">
                {notForYou.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/40">
                      <Icon name="x" className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    <span className="text-[15px] text-white/50">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#apply" size="lg">
            That&rsquo;s me — {site.primaryCta}
            <Icon name="arrow" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
