"use client";

import { ArrowRight } from "lucide-react";
import { CartLineItem } from "@/components/cart/cart-line-item";
import { LinkButton } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { getCartSubtotal, useCartStore } from "@/store/cart-store";

export function CartPageClient() {
  const items = useCartStore((state) => state.items);
  const subtotal = getCartSubtotal(items);

  if (items.length === 0) {
    return (
      <div className="border border-brand-border bg-white p-8 text-center">
        <h2 className="text-2xl font-black text-brand-charcoal">Your cart is empty.</h2>
        <p className="mt-3 text-brand-muted">
          Shop CabFit cabinet installation accessories and add products to your cart.
        </p>
        <LinkButton className="mt-6" href="/shop">
          Shop Products
        </LinkButton>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="border border-brand-border bg-white p-4 sm:p-6">
        {items.map((item) => (
          <CartLineItem item={item} key={item.key} />
        ))}
      </div>

      <aside className="h-fit border border-brand-border bg-white p-6">
        <h2 className="text-xl font-black text-brand-charcoal">Order Summary</h2>
        <div className="mt-6 grid gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-brand-muted">Subtotal</span>
            <span className="font-black text-brand-charcoal">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted">Shipping</span>
            <span className="font-black text-brand-charcoal">Calculated at checkout</span>
          </div>
        </div>
        <LinkButton className="mt-6 w-full" href="/checkout" variant="dark">
          Checkout <ArrowRight aria-hidden="true" size={18} />
        </LinkButton>
      </aside>
    </div>
  );
}
