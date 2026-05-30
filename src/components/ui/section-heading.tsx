import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-black leading-none text-brand-charcoal sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
