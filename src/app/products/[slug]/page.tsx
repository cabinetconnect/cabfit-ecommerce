import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductPurchase } from "@/components/product/product-purchase";
import { SEO } from "@/components/seo";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { absoluteUrl, formatCurrency } from "@/lib/format";
import {
  getProductBySlug,
  getRelatedProducts,
  products
} from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return createPageMetadata({
      title: "Product Not Found",
      description: "CabFit product page not found.",
      path: `/products/${slug}`
    });
  }

  return createPageMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
    image: product.images[0],
    keywords: product.keywords
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id);
  const productUrl = absoluteUrl(`/products/${product.slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((image) => absoluteUrl(image)),
    brand: {
      "@type": "Brand",
      name: "CabFit"
    },
    category: "Cabinet installation accessories",
    url: productUrl,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "AUD",
      price: (product.priceCents / 100).toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };

  return (
    <>
      <SEO data={productSchema} />
      <section className="bg-brand-neutral py-10 sm:py-14">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1fr] lg:items-start">
            <ProductGallery product={product} />

            <div>
              <p className="mb-3 text-sm font-black uppercase text-brand-gold">
                CabFit Product
              </p>
              <h1 className="text-4xl font-black leading-tight text-brand-charcoal sm:text-5xl">
                {product.name}
              </h1>
              <ProductPurchase product={product} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading title="Product Benefits" eyebrow={formatCurrency(product.priceCents)}>
            <p>{product.description}</p>
          </SectionHeading>
          <div className="grid gap-3 sm:grid-cols-3">
            {product.benefits.map((benefit) => (
              <div className="border border-brand-border bg-brand-neutral p-5" key={benefit}>
                <p className="text-lg font-black text-brand-charcoal">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-neutral py-14 sm:py-16">
        <Container>
          <SectionHeading title="Related Products" eyebrow="CabFit Range">
            <p>
              Add more practical cabinet installation aids to your setup.
            </p>
          </SectionHeading>
          <div className="mt-8">
            <ProductGrid products={relatedProducts} />
          </div>
        </Container>
      </section>
    </>
  );
}
