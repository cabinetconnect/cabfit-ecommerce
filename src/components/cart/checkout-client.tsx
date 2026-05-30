"use client";

import { ArrowRight, Loader2, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { LinkButton, Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { getCartSubtotal, useCartStore } from "@/store/cart-store";

export function CheckoutClient() {
  const items = useCartStore((state) => state.items);
  const subtotal = getCartSubtotal(items);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.productId,
            variantId: item.variantId,
            quantity: item.quantity
          }))
        })
      });

      const payload = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !payload.url) {
        throw new Error(payload.error || "Checkout could not be started.");
      }

      window.location.href = payload.url;
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Checkout could not be started."
      );
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="border border-brand-border bg-white p-8 text-center">
        <h2 className="text-2xl font-black text-brand-charcoal">Your cart is empty.</h2>
        <p className="mt-3 text-brand-muted">
          Your cart is saved locally. Add products before starting checkout.
        </p>
        <LinkButton className="mt-6" href="/shop">
          Shop Products
        </LinkButton>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="border border-brand-border bg-white p-6">
        <h2 className="text-xl font-black text-brand-charcoal">Review Your Order</h2>
        <div className="mt-6 grid gap-4">
          {items.map((item) => (
            <div
              className="flex items-start justify-between gap-4 border-b border-brand-border pb-4 last:border-0 last:pb-0"
              key={item.key}
            >
              <div>
                <p className="font-black text-brand-charcoal">{item.name}</p>
                <p className="mt-1 text-sm text-brand-muted">
                  {item.variantName} x {item.quantity}
                </p>
              </div>
              <p className="font-black text-brand-charcoal">
                {formatCurrency(item.priceCents * item.quantity)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <aside className="h-fit border border-brand-border bg-white p-6">
        <div className="flex items-start gap-3">
          <LockKeyhole aria-hidden="true" className="mt-1 text-brand-gold" size={22} />
          <div>
            <h2 className="text-xl font-black text-brand-charcoal">Secure Checkout</h2>
            <p className="mt-2 text-sm leading-6 text-brand-muted">
              Payments are processed securely through Stripe Checkout.
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-between border-t border-brand-border pt-5">
          <span className="font-black text-brand-charcoal">Subtotal</span>
          <span className="font-black text-brand-charcoal">{formatCurrency(subtotal)}</span>
        </div>
        <Button className="mt-6 w-full" disabled={loading} onClick={startCheckout} variant="dark">
          {loading ? (
            <>
              <Loader2 aria-hidden="true" className="animate-spin" size={18} />
              Starting Checkout
            </>
          ) : (
            <>
              Continue To Stripe <ArrowRight aria-hidden="true" size={18} />
            </>
          )}
        </Button>
        {error ? (
          <p className="mt-4 border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
            {error}
          </p>
        ) : null}
      </aside>
    </div>
  );
}
