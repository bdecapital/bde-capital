"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.85;
      // hide once the visitor reaches the application form
      const form = document.getElementById("apply");
      const nearForm = form
        ? form.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setShow(past && !nearForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4"
        >
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl border border-lime-400/25 bg-ink-850/90 p-3 pl-5 shadow-card backdrop-blur-xl">
            <p className="hidden text-sm font-semibold text-white sm:block">
              Ready to build something worth buying?
            </p>
            <p className="text-sm font-semibold text-white sm:hidden">
              Build a sellable agency
            </p>
            <a
              href="#apply"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-extrabold uppercase tracking-tight text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-lime-300"
            >
              See If You Qualify
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
