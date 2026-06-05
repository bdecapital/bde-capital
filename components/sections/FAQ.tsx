"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/Section";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-white/10 bg-ink-900 py-20 sm:py-24 lg:py-28"
    >
      <div className="container-px">
        <SectionHeader
          eyebrow="FAQ"
          title="Straight answers"
          subtitle="The questions every serious agency owner asks before they apply."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <dl className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border bg-white/[0.03] transition-colors ${
                    isOpen ? "border-lime-400/40" : "border-white/10"
                  }`}
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="font-display text-base font-bold uppercase tracking-tight text-white sm:text-lg">
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-lime-400 bg-lime-400 text-ink-950"
                            : "border-white/15 text-lime-400"
                        }`}
                      >
                        <Icon name="chevron" className="h-4 w-4" strokeWidth={2.4} />
                      </span>
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-[15px] leading-relaxed text-white/60 sm:px-6">
                          {faq.a}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
