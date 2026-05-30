import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart/cart-page-client";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cart",
  description:
    "Review your CabFit cabinet installation accessories cart before secure Stripe checkout.",
  path: "/cart"
});

export default function CartPage() {
  return (
    <section className="bg-brand-neutral py-10 sm:py-14">
      <Container>
        <SectionHeading title="Cart" eyebrow="CabFit Checkout">
          <p>
            Review products, update quantities, and continue to secure checkout.
          </p>
        </SectionHeading>
        <div className="mt-8">
          <CartPageClient />
        </div>
      </Container>
    </section>
  );
}
