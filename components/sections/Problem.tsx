import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Problem() {
  return (
    <section
      id="problem"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-ink-900 py-24 sm:py-28 lg:py-32"
    >
      <span
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-display text-[40vw] font-black leading-none text-white/[0.03] lg:text-[26rem]"
        aria-hidden="true"
      >
        $?
      </span>

      <div className="container-px relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="eyebrow mb-6 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            The Real Question
          </span>
          <h2 className="display text-5xl text-white text-balance sm:text-6xl lg:text-7xl">
            What&rsquo;s your agency{" "}
            <span className="text-lime-400">actually worth?</span>
          </h2>
        </Reveal>

        <Stagger stagger={0.12} className="mx-auto mt-12 max-w-2xl space-y-4 text-center">
          <StaggerItem>
            <p className="text-xl text-white/55 sm:text-2xl">
              Not what it produces this month.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-white/55 sm:text-2xl">
              Not what it pays you.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              What would a buyer{" "}
              <span className="text-lime-400">wire for it tomorrow?</span>
            </p>
          </StaggerItem>
        </Stagger>

        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <p className="display text-3xl text-white sm:text-4xl lg:text-5xl">
            Most agency owners don&rsquo;t know.
          </p>
        </Reveal>

        <Stagger
          stagger={0.12}
          className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          <StaggerItem className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-lg text-white/70">
                They&rsquo;ve built <span className="font-semibold text-white">production</span>,
              </p>
              <p className="mt-1 font-display text-xl font-extrabold uppercase tracking-tight text-lime-400">
                but not enterprise value.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-lg text-white/70">
                They&rsquo;ve created <span className="font-semibold text-white">income</span>,
              </p>
              <p className="mt-1 font-display text-xl font-extrabold uppercase tracking-tight text-lime-400">
                but not a transferable asset.
              </p>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-white/65 text-pretty">
            BDE Capital helps established agency owners increase production, build
            infrastructure, develop leadership, and create a company that can
            command a premium valuation when the time comes to exit.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-lg text-white/50">
            The goal isn&rsquo;t just to make more money.
          </p>
          <p className="mt-3 display text-3xl text-white text-balance sm:text-4xl lg:text-5xl">
            The goal is to build{" "}
            <span className="text-lime-400">something worth buying.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
