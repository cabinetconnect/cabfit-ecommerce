import type { Metadata } from "next";
import { ShopProductBrowser } from "@/components/product/shop-product-browser";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Shop Cabinet Installation Accessories",
  description:
    "Shop CabFit cabinetmaker jigs, cabinet install accessories, and cabinet assembly accessories shipping Australia-wide.",
  path: "/shop"
});

export default function ShopPage() {
  return (
    <section className="bg-brand-neutral py-10 sm:py-14">
      <Container>
        <SectionHeading title="Shop CabFit Products" eyebrow="Trade Ecommerce">
          <p>
            Cabinet installation accessories made for Australian cabinetmakers, installers, and small cabinetmaking businesses.
          </p>
        </SectionHeading>

        <ShopProductBrowser products={products} />
      </Container>
    </section>
  );
}
