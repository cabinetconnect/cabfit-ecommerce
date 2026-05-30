import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

const policySections = [
  {
    title: "Shipping Australia-Wide",
    body: "CabFit ships practical cabinet installation accessories to Australian customers. Shipping options, charges, and tracking details are confirmed during checkout and order processing."
  },
  {
    title: "Order Processing",
    body: "Orders are reviewed, packed, and prepared for dispatch as quickly as possible. Processing timeframes may vary depending on product availability, order volume, and public holidays."
  },
  {
    title: "Returns Process",
    body: "If you need to request a return, contact CabFit with your order details and reason for return. Returned items should be unused, in suitable condition, and sent back according to the return instructions provided."
  },
  {
    title: "Damaged Goods Process",
    body: "If your order arrives damaged, contact CabFit promptly with photos of the packaging and affected product. CabFit will review the issue and advise the next steps for replacement, refund, or resolution."
  }
];

export const metadata: Metadata = createPageMetadata({
  title: "Shipping & Returns",
  description:
    "CabFit shipping and returns information for cabinet installation accessories shipped Australia-wide.",
  path: "/shipping-returns"
});

export default function ShippingReturnsPage() {
  return (
    <section className="bg-brand-neutral py-10 sm:py-14">
      <Container>
        <SectionHeading title="Shipping & Returns" eyebrow="Customer Support">
          <p>
            Professional placeholder policy sections for CabFit orders, shipping, returns, and damaged goods.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {policySections.map((section) => (
            <article className="border border-brand-border bg-white p-6" key={section.title}>
              <h2 className="text-xl font-black text-brand-charcoal">{section.title}</h2>
              <p className="mt-4 leading-7 text-brand-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
