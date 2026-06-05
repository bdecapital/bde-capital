"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-px flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo />
          </Link>

          <div className="hidden shrink-0 items-center gap-0.5 lg:flex xl:gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold tracking-tight text-white/70 transition-colors duration-200 hover:text-white xl:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-white/70 transition-colors hover:text-white xl:flex"
            >
              <Icon name="phone" className="h-4 w-4 text-lime-400" />
              {site.phone}
            </a>
            <a
              href="#apply"
              className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-lime-400 px-6 py-2.5 text-sm font-extrabold uppercase tracking-tight text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-lime-300"
            >
              {site.primaryCta}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition-colors hover:bg-white/5 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="container-px border-b border-white/10 bg-ink-900/95 pb-6 pt-2 backdrop-blur-xl">
              <div className="flex flex-col">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/5 py-3 text-base font-medium text-white/90"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#apply"
                onClick={() => setOpen(false)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-4 text-base font-extrabold uppercase tracking-tight text-ink-950"
              >
                {site.primaryCta}
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-white/70"
              >
                <Icon name="phone" className="h-4 w-4 text-lime-400" />
                {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
