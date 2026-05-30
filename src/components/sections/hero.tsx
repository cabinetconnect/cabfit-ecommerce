import { ArrowRight, PackageCheck, Ruler, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { products } from "@/lib/products";

export function Hero() {
  const [adjustableLegTool, pantrySpacerBlocks, fillerSetbackJigs] = products;
  const proofItems = [
    {
      title: "Made For Site Work",
      detail: "Practical accessories built around real install problems.",
      icon: Ruler
    },
    {
      title: "Repeatable Results",
      detail: "Designed to reduce measuring, setup, and guesswork.",
      icon: PackageCheck
    },
    {
      title: "Australia-Wide Supply",
      detail: "Order CabFit tools for workshop or site delivery.",
      icon: Truck
    }
  ];

  return (
    <section className="relative overflow-hidden border-b border-brand-border bg-brand-charcoal text-white">
      <div className="absolute inset-x-0 top-0 h-2 bg-brand-gold" />
      <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
        <div>
          <div className="max-w-4xl">
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

          <div className="mt-10 max-w-3xl border border-white/12 bg-white/[0.04]">
            <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {proofItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="p-4 sm:p-5" key={item.title}>
                    <span className="mb-4 flex h-10 w-10 items-center justify-center bg-brand-gold text-brand-dark">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <p className="font-display text-xl font-black leading-none text-white">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/68">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          <Link
            className="group block border border-white/12 bg-white p-3 shadow-soft transition-transform hover:-translate-y-1 hover:border-brand-gold focus-visible:-translate-y-1 sm:p-5"
            href={`/products/${adjustableLegTool.slug}`}
          >
            <div className="grid gap-5 md:grid-cols-[1fr_0.62fr] md:items-center">
              <div className="overflow-hidden bg-brand-neutral">
                <Image
                  alt={adjustableLegTool.name}
                  className="aspect-[4/3] w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
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
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand-charcoal group-hover:text-brand-gold">
                  View Product <ArrowRight aria-hidden="true" size={16} />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-3 sm:grid-cols-2">
            {[fillerSetbackJigs, pantrySpacerBlocks].map((product) => (
              <Link
                className="group block border border-white/12 bg-white p-3 transition-transform hover:-translate-y-1 hover:border-brand-gold focus-visible:-translate-y-1"
                href={`/products/${product.slug}`}
                key={product.id}
              >
                <Image
                  alt={product.name}
                  className="aspect-[5/3] w-full bg-brand-neutral object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                  height={520}
                  src={product.images[0]}
                  width={800}
                />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-brand-charcoal">
                    {product.name}
                  </p>
                  <ArrowRight
                    aria-hidden="true"
                    className="shrink-0 text-brand-gold transition-transform group-hover:translate-x-1"
                    size={16}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
