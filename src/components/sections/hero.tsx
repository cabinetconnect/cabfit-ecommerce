import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const [adjustableLegTool, pantrySpacerBlocks, fillerSetbackJigs] = products;

  return (
    <section className="relative overflow-hidden border-b border-brand-border bg-brand-charcoal text-white">
      <div className="absolute inset-x-0 top-0 h-2 bg-brand-gold" />
      <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
        <div>
          <div className="max-w-4xl">
            <Image
              alt={siteConfig.name}
              className="mb-7 h-auto w-44 bg-white p-2 sm:w-52"
              height={168}
              priority
              src={siteConfig.logo}
              width={376}
            />
            <p className="mb-4 inline-flex border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase text-brand-gold">
              Australian cabinet install accessories
            </p>
            <h1 className="font-display max-w-4xl text-6xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
              Fit It Right
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Practical Install & Assembly Accessories For Cabinetmakers. Made For Real Installs. Shipping Australia-Wide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/shop" size="lg">
                Shop Products <ArrowRight aria-hidden="true" size={19} />
              </LinkButton>
              <LinkButton className="border-white text-white hover:bg-white hover:text-brand-charcoal" href="/about" size="lg" variant="outline">
                Learn More
              </LinkButton>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["3", "Practical products"],
              ["AU", "Shipping Australia-wide"],
              ["Trade", "Built for installers"]
            ].map(([value, label]) => (
              <div className="border border-white/12 bg-white/5 p-4" key={label}>
                <p className="font-display text-3xl font-black text-brand-gold">{value}</p>
                <p className="mt-1 text-sm font-bold text-white/72">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="border border-white/12 bg-white p-3 shadow-soft sm:p-5">
            <div className="grid gap-5 md:grid-cols-[1fr_0.62fr] md:items-center">
              <div className="bg-brand-neutral">
                <Image
                  alt={adjustableLegTool.name}
                  className="aspect-[4/3] w-full object-contain p-3"
                  height={680}
                  priority
                  src={adjustableLegTool.images[0]}
                  width={900}
                />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-brand-gold">
                  Featured tool
                </p>
                <h2 className="mt-2 font-display text-4xl font-black leading-none text-brand-charcoal">
                  {adjustableLegTool.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-brand-muted">
                  Faster, more consistent cabinet leg adjustments on site.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[fillerSetbackJigs, pantrySpacerBlocks].map((product) => (
              <div className="border border-white/12 bg-white p-3" key={product.id}>
                <Image
                  alt={product.name}
                  className="aspect-[5/3] w-full bg-brand-neutral object-contain p-3"
                  height={520}
                  src={product.images[0]}
                  width={800}
                />
                <p className="mt-3 text-sm font-black text-brand-charcoal">
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
