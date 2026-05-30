import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gold text-brand-dark hover:bg-[#c99d27] border-brand-gold",
  secondary:
    "bg-white text-brand-charcoal hover:bg-brand-neutral border-brand-border",
  outline:
    "bg-transparent text-brand-charcoal hover:bg-white border-brand-charcoal",
  ghost:
    "bg-transparent text-brand-charcoal hover:bg-brand-neutral border-transparent",
  dark:
    "bg-brand-charcoal text-white hover:bg-brand-dark border-brand-charcoal"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
  icon: "h-11 w-11 p-0"
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      type={type}
      {...props}
    />
  );
}

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
};

export function LinkButton({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  onClick
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border font-bold transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
