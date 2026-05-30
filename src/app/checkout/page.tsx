import type { Metadata } from "next";
import { CheckoutClient } from "@/components/cart/checkout-client";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Checkout",
  description:
    "Start secure Stripe checkout for CabFit cabinet installation accessories.",
  path: "/checkout"
});

export default function CheckoutPage() {
  return (
    <section className="bg-brand-neutral py-10 sm:py-14">
      <Container>
        <SectionHeading title="Checkout" eyebrow="Secure Stripe Payments">
          <p>
            Confirm your CabFit order before continuing to Stripe Checkout.
          </p>
        </SectionHeading>
        <div className="mt-8">
          <CheckoutClient />
        </div>
      </Container>
    </section>
  );
}
