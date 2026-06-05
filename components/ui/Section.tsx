import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";
  return (
    <Reveal
      className={`flex max-w-3xl flex-col ${alignment} ${
        align === "center" ? "mx-auto" : ""
      } ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="display text-4xl text-white text-balance sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 text-pretty sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-px">{children}</div>
    </section>
  );
}
