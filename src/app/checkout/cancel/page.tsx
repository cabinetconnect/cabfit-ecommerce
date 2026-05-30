import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Checkout Cancelled",
  description:
    "CabFit checkout was cancelled. Your cart has been saved locally.",
  path: "/checkout/cancel"
});

export default function CheckoutCancelPage() {
  return (
    <section className="bg-brand-neutral py-14">
      <Container>
        <div className="mx-auto max-w-2xl border border-brand-border bg-white p-8 text-center">
          <p className="text-sm font-black uppercase text-brand-gold">Checkout Cancelled</p>
          <h1 className="mt-3 text-3xl font-black text-brand-charcoal">
            Checkout Cancelled. Your Cart Has Been Saved.
          </h1>
          <p className="mt-4 leading-7 text-brand-muted">
            Return to your cart when you are ready to complete your CabFit order.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href="/cart" variant="dark">
              View Cart
            </LinkButton>
            <LinkButton href="/shop" variant="secondary">
              Shop Products
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
