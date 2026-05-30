"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CartLine } from "@/types/cart";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";

type CartLineItemProps = {
  item: CartLine;
};

export function CartLineItem({ item }: CartLineItemProps) {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div className="grid grid-cols-[84px_1fr] gap-4 border-b border-brand-border py-4 last:border-0">
      <Link className="bg-brand-neutral" href={`/products/${item.slug}`}>
        <Image
          alt={item.name}
          className="aspect-square w-full object-contain p-2"
          height={160}
          src={item.image}
          width={160}
        />
      </Link>
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              className="font-black text-brand-charcoal hover:text-brand-gold"
              href={`/products/${item.slug}`}
            >
              {item.name}
            </Link>
            <p className="mt-1 text-sm text-brand-muted">{item.variantName}</p>
          </div>
          <Button
            aria-label={`Remove ${item.name}`}
            onClick={() => removeItem(item.key)}
            size="icon"
            variant="ghost"
          >
            <Trash2 aria-hidden="true" size={18} />
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center border border-brand-border">
            <Button
              aria-label={`Decrease ${item.name} quantity`}
              className="h-9 w-9 rounded-none border-0"
              onClick={() => updateQuantity(item.key, item.quantity - 1)}
              size="icon"
              variant="ghost"
            >
              <Minus aria-hidden="true" size={16} />
            </Button>
            <span className="grid h-9 min-w-10 place-items-center border-x border-brand-border px-3 text-sm font-black">
              {item.quantity}
            </span>
            <Button
              aria-label={`Increase ${item.name} quantity`}
              className="h-9 w-9 rounded-none border-0"
              onClick={() => updateQuantity(item.key, item.quantity + 1)}
              size="icon"
              variant="ghost"
            >
              <Plus aria-hidden="true" size={16} />
            </Button>
          </div>
          <p className="font-black text-brand-charcoal">
            {formatCurrency(item.priceCents * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}
