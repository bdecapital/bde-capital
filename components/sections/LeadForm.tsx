"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const teamSizes = ["Just me", "2–5 agents", "6–15 agents", "16–50 agents", "50+ agents"];
const aipRanges = ["Under $500K", "$500K – $1M", "$1M – $3M", "$3M – $10M", "$10M+"];

type Values = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  agency: string;
  teamSize: string;
  aip: string;
};

const initial: Values = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  agency: "",
  teamSize: teamSizes[2],
  aip: aipRanges[2],
};

export function LeadForm({ id }: { id: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const set = (k: keyof Values, v: string) =>
    setValues((s) => ({ ...s, [k]: v }));

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (values.firstName.trim().length < 2) e.firstName = "Required";
    if (values.lastName.trim().length < 2) e.lastName = "Required";
    if (values.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a valid phone";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep1()) setStep(2);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (values.agency.trim().length < 2) errs.agency = "Required";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("loading");
    // Placeholder submit — wire to your CRM / API route here.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  const field =
    "w-full rounded-xl border border-white/12 bg-ink-950/70 px-4 py-3 text-[15px] text-white placeholder:text-white/35 transition-colors focus:border-lime-400/70 focus:outline-none focus:ring-2 focus:ring-lime-400/25";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/55";
  const errText = "mt-1 text-xs font-medium text-red-400";

  return (
    <div
      id={id}
      className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-6 shadow-card backdrop-blur-xl sm:p-8"
    >
      <div className="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-inset ring-lime-400/10" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400 text-ink-950">
              <Icon name="check" className="h-8 w-8" strokeWidth={2.6} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-black uppercase tracking-tight text-white">
              Application received
            </h3>
            <p className="mt-3 max-w-sm text-white/60">
              We&rsquo;ll review your numbers and reach out if your agency is a
              fit for the 9X plan. Watch your phone and inbox.
            </p>
          </motion.div>
        ) : (
          <div>
            {/* header + progress */}
            <div className="mb-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-white">
                  See if your agency qualifies
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-white/45">
                  Step {step}/2
                </span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-lime-400"
                  animate={{ width: step === 1 ? "50%" : "100%" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <Input id={`${id}-fn`} label="First name" value={values.firstName} onChange={(v) => set("firstName", v)} err={errors.firstName} autoComplete="given-name" placeholder="Jordan" cls={field} lc={label} ec={errText} />
                    <Input id={`${id}-ln`} label="Last name" value={values.lastName} onChange={(v) => set("lastName", v)} err={errors.lastName} autoComplete="family-name" placeholder="Reyes" cls={field} lc={label} ec={errText} />
                    <Input id={`${id}-ph`} label="Phone" type="tel" value={values.phone} onChange={(v) => set("phone", v)} err={errors.phone} autoComplete="tel" placeholder="(555) 123-4567" cls={field} lc={label} ec={errText} />
                    <Input id={`${id}-em`} label="Email" type="email" value={values.email} onChange={(v) => set("email", v)} err={errors.email} autoComplete="email" placeholder="you@agency.com" cls={field} lc={label} ec={errText} />
                  </div>
                  <button
                    type="button"
                    onClick={next}
                    className="group mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-base font-black uppercase tracking-tight text-ink-950 shadow-lime transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-lime-lg"
                  >
                    See If I Qualify
                    <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="step2"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Input id={`${id}-ag`} label="Agency name" value={values.agency} onChange={(v) => set("agency", v)} err={errors.agency} autoComplete="organization" placeholder="Reyes Insurance Group" cls={field} lc={label} ec={errText} />
                    </div>
                    <Select id={`${id}-ts`} label="Team size" value={values.teamSize} onChange={(v) => set("teamSize", v)} options={teamSizes} cls={field} lc={label} />
                    <Select id={`${id}-aip`} label="Annual Issued Premium" value={values.aip} onChange={(v) => set("aip", v)} options={aipRanges} cls={field} lc={label} />
                  </div>
                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                    >
                      <Icon name="chevron" className="h-4 w-4 rotate-90" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-base font-black uppercase tracking-tight text-ink-950 shadow-lime transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-lime-lg disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          {site.formCta}
                          <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="mt-4 text-center text-xs text-white/45">
              No spam. No recruiters. No motivational quotes. Just the numbers.
            </p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Input({
  id,
  label,
  value,
  onChange,
  err,
  type = "text",
  autoComplete,
  placeholder,
  cls,
  lc,
  ec,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  err?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  cls: string;
  lc: string;
  ec: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={lc}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!err}
        className={cls}
      />
      {err && <p className={ec}>{err}</p>}
    </div>
  );
}

function Select({
  id,
  label,
  value,
  onChange,
  options,
  cls,
  lc,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  cls: string;
  lc: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={lc}>
        {label}
      </label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={cls}>
        {options.map((o) => (
          <option key={o} className="bg-ink-900">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
