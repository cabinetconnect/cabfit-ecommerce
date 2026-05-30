import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact CabFit",
  description:
    "Contact CabFit for trade enquiries, product support, and cabinet installation accessory questions from South Australia.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="bg-brand-neutral py-10 sm:py-14">
      <Container className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <SectionHeading title="Contact CabFit" eyebrow="Trade Enquiries">
            <p>
              Get in touch for product support, trade questions, or cabinet installation accessory enquiries.
            </p>
          </SectionHeading>

          <div className="mt-8 grid gap-4 border border-brand-border bg-white p-6">
            <div>
              <h2 className="font-black text-brand-charcoal">Trade Enquiries</h2>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                For cabinetmakers, installers, sole traders, and small cabinetmaking businesses.
              </p>
            </div>
            <div>
              <h2 className="font-black text-brand-charcoal">Product Support</h2>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Ask about product variants, install use, or order support.
              </p>
            </div>
            <div>
              <h2 className="font-black text-brand-charcoal">Location</h2>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                South Australia. Shipping Australia-Wide.
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
