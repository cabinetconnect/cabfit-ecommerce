import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About CabFit",
  description:
    "CabFit was created to make cabinet installation and assembly simpler, faster, and more consistent for Australian cabinetmakers.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="bg-brand-neutral py-10 sm:py-14">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <SectionHeading title="Built For Real Installs" eyebrow="About CabFit">
          <p>
            CabFit was created to make cabinet installation and assembly simpler, faster and more consistent.
          </p>
        </SectionHeading>
        <div className="grid gap-5 border border-brand-border bg-white p-6 text-base leading-7 text-brand-muted sm:p-8">
          <p>
            Our products are designed around real-world installation challenges and built for practical use in workshops and on site.
          </p>
          <p>
            Whether you&apos;re a sole trader, installer or cabinetmaking business, CabFit products are designed to help you work smarter and achieve consistent results.
          </p>
          <p className="text-xl font-black text-brand-charcoal">Fit It Right.</p>
        </div>
      </Container>
    </section>
  );
}
