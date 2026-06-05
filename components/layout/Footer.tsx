import { nav, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = 2025;
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              {site.legalName} helps established insurance agency owners and team
              leaders scale revenue, build enterprise value, and exit at premium
              multiples. Stop building a job. Start building an asset.
            </p>
            <a
              href="#apply"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-extrabold uppercase tracking-tight text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-lime-300"
            >
              {site.primaryCta}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="text-sm text-white/70 transition-colors hover:text-lime-400"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-lime-400"
                >
                  <Icon name="phone" className="h-4 w-4 text-lime-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-lime-400"
                >
                  <Icon name="chat" className="h-4 w-4 text-lime-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3 pt-1">
                {[
                  { k: "LinkedIn", href: site.social.linkedin },
                  { k: "YouTube", href: site.social.youtube },
                  { k: "Instagram", href: site.social.instagram },
                ].map((s) => (
                  <a
                    key={s.k}
                    href={s.href}
                    aria-label={s.k}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-xs font-bold text-white/70 transition-colors hover:border-lime-400/50 hover:text-lime-400"
                  >
                    {s.k.charAt(0)}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p>Scale It. Sell It. 9X It.</p>
          </div>
          <p className="mt-6 max-w-4xl text-[11px] leading-relaxed text-white/35">
            BDE Capital provides business growth, advisory, and acquisition
            services. We are not a registered broker-dealer or investment
            adviser. Nothing on this site is a guarantee of results, valuation,
            or sale. Multiples and outcomes vary based on agency performance,
            market conditions, and execution.
          </p>
        </div>
      </div>
    </footer>
  );
}
