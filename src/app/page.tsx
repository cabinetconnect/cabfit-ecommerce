import type { Metadata } from "next";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { Hero } from "@/components/sections/hero";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { TrustSection } from "@/components/sections/trust-section";
import { ProductGrid } from "@/components/product/product-grid";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProducts } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "CabFit | Cabinet Installation Accessories Australia",
  description:
    "CabFit designs practical cabinet installation accessories and cabinetmaker jigs for Australian cabinetmakers and installers.",
  path: "/"
});

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />
      <TrustSection />

      <section className="bg-white py-14 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <SectionHeading title="CabFit Designs Practical Install Accessories" eyebrow="Built For Cabinetmakers">
            <p>
              CabFit designs practical jigs and install accessories for Australian cabinet installation and assembly.
            </p>
          </SectionHeading>
          <div className="border-l-4 border-brand-gold bg-brand-neutral p-5 sm:p-7">
            <p className="text-xl font-black leading-8 text-brand-charcoal">
              Built for cabinetmakers and installers who want consistent results on site.
            </p>
            <p className="mt-4 leading-7 text-brand-muted">
              Products are designed around real-world installation challenges and made for practical use in workshops and on site.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-neutral py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading title="Featured Products" eyebrow="Shop">
              <p>
                Practical cabinet installation products for faster, more consistent site work.
              </p>
            </SectionHeading>
            <LinkButton className="w-full sm:w-fit" href="/shop" variant="dark">
              Shop All Products
            </LinkButton>
          </div>
          <div className="mt-8">
            <ProductGrid products={featuredProducts} />
          </div>
        </Container>
      </section>

      <BenefitsSection />
      <NewsletterForm />
    </>
  );
}
