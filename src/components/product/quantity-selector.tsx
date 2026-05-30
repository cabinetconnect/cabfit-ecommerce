"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
};

export function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div>
      <p className="text-sm font-black text-brand-charcoal">Quantity</p>
      <div className="mt-3 flex w-fit items-center border border-brand-border bg-white">
        <Button
          aria-label="Decrease quantity"
          className="rounded-none border-0"
          onClick={() => onChange(Math.max(1, value - 1))}
          size="icon"
          variant="ghost"
        >
          <Minus aria-hidden="true" size={18} />
        </Button>
        <span className="grid h-11 min-w-12 place-items-center border-x border-brand-border px-4 text-sm font-black">
          {value}
        </span>
        <Button
          aria-label="Increase quantity"
          className="rounded-none border-0"
          onClick={() => onChange(value + 1)}
          size="icon"
          variant="ghost"
        >
          <Plus aria-hidden="true" size={18} />
        </Button>
      </div>
    </div>
  );
}
