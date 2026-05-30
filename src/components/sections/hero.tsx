import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-brand-border bg-brand-neutral">
      <Container className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8">
          <div className="max-w-4xl">
            <Image
              alt={siteConfig.name}
              className="mb-7 h-auto w-48 bg-white p-2 sm:w-56"
              height={136}
              priority
              src={siteConfig.logo}
              width={512}
            />
            <h1 className="max-w-4xl text-5xl font-black leading-none text-brand-charcoal sm:text-6xl lg:text-7xl">
              Fit It Right
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted sm:text-xl">
              Practical Install & Assembly Accessories For Cabinetmakers. Made For Real Installs. Shipping Australia-Wide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/shop" size="lg">
                Shop Products <ArrowRight aria-hidden="true" size={19} />
              </LinkButton>
              <LinkButton href="/about" size="lg" variant="outline">
                Learn More
              </LinkButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {products.map((product) => (
              <div
                className="grid min-h-32 grid-cols-[104px_1fr] items-center gap-4 border border-brand-border bg-white p-3 sm:min-h-48 sm:grid-cols-1"
                key={product.id}
              >
                <Image
                  alt={product.name}
                  className="aspect-square w-full object-contain"
                  height={680}
                  src={product.images[0]}
                  width={900}
                />
                <p className="text-sm font-black text-brand-charcoal">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
