"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { CartLineItem } from "@/components/cart/cart-line-item";
import { Button, LinkButton } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { getCartSubtotal, useCartStore } from "@/store/cart-store";

export function CartDrawer() {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const items = useCartStore((state) => state.items);
  const subtotal = getCartSubtotal(items);

  return (
    <div
      aria-hidden={!isCartOpen}
      className={cn(
        "fixed inset-0 z-50 transition",
        isCartOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <button
        aria-label="Close cart"
        className={cn(
          "absolute inset-0 bg-brand-dark/55 transition-opacity",
          isCartOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
        type="button"
      />
      <aside
        aria-label="Cart drawer"
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-soft transition-transform duration-300",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-brand-border p-5">
          <h2 className="text-xl font-black text-brand-charcoal">Cart</h2>
          <Button aria-label="Close cart" onClick={closeCart} size="icon" variant="ghost">
            <X aria-hidden="true" size={22} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length > 0 ? (
            items.map((item) => <CartLineItem item={item} key={item.key} />)
          ) : (
            <div className="grid min-h-64 place-items-center text-center">
              <div>
                <p className="text-lg font-black text-brand-charcoal">Your cart is empty.</p>
                <p className="mt-2 text-sm text-brand-muted">
                  Add CabFit install accessories from the shop.
                </p>
                <LinkButton
                  className="mt-5"
                  href="/shop"
                  onClick={closeCart}
                  variant="dark"
                >
                  Shop Products
                </LinkButton>
              </div>
            </div>
          )}
        </div>

        {items.length > 0 ? (
          <div className="border-t border-brand-border p-5">
            <div className="flex items-center justify-between text-base font-black">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-brand-muted">
              Shipping and final checkout details are confirmed securely with Stripe.
            </p>
            <div className="mt-5 grid gap-3">
              <LinkButton href="/checkout" onClick={closeCart} variant="dark">
                Checkout
              </LinkButton>
              <Link
                className="text-center text-sm font-bold text-brand-charcoal hover:text-brand-gold"
                href="/cart"
                onClick={closeCart}
              >
                View Cart
              </Link>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
