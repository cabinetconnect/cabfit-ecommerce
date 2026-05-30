import type { Metadata } from "next";
import { ClearCartOnMount } from "@/components/cart/clear-cart-on-mount";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Checkout Success",
  description:
    "Thanks for your CabFit order. Your cabinet installation accessories will be packed and sent.",
  path: "/checkout/success"
});

export default function CheckoutSuccessPage() {
  return (
    <section className="bg-brand-neutral py-14">
      <ClearCartOnMount />
      <Container>
        <div className="mx-auto max-w-2xl border border-brand-border bg-white p-8 text-center">
          <p className="text-sm font-black uppercase text-brand-gold">Order Confirmed</p>
          <h1 className="mt-3 text-3xl font-black text-brand-charcoal">
            Thanks For Your Order. We&apos;ll Get It Packed And On Its Way.
          </h1>
          <p className="mt-4 leading-7 text-brand-muted">
            A Stripe receipt and order confirmation will be sent to the email used at checkout.
          </p>
          <LinkButton className="mt-7" href="/shop" variant="dark">
            Continue Shopping
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
