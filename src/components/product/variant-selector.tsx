"use client";

import type { ProductVariant } from "@/types/product";
import { cn } from "@/lib/utils";

type VariantSelectorProps = {
  variants: ProductVariant[];
  selectedVariantId: string;
  onChange: (variantId: string) => void;
};

export function VariantSelector({
  variants,
  selectedVariantId,
  onChange
}: VariantSelectorProps) {
  return (
    <fieldset>
      <legend className="text-sm font-black text-brand-charcoal">Variant</legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {variants.map((variant) => {
          const selected = variant.id === selectedVariantId;

          return (
            <button
              aria-pressed={selected}
              className={cn(
                "min-h-12 rounded-md border px-4 text-left text-sm font-bold transition-colors",
                selected
                  ? "border-brand-charcoal bg-brand-charcoal text-white"
                  : "border-brand-border bg-white text-brand-charcoal hover:border-brand-charcoal"
              )}
              key={variant.id}
              onClick={() => onChange(variant.id)}
              type="button"
            >
              {variant.name}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
