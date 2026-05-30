import { Gauge, Hammer, Map, Ruler } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    title: "Made For Real Installs",
    body: "Designed around cabinet installation challenges that show up in workshops and on site.",
    icon: Hammer
  },
  {
    title: "Reduce Setup Time",
    body: "Practical accessories that help reduce repeat measuring and setup during installs.",
    icon: Gauge
  },
  {
    title: "Built For Cabinetmakers",
    body: "Focused on cabinetmakers, installers, sole traders, and small cabinetmaking teams.",
    icon: Ruler
  },
  {
    title: "Shipping Australia-Wide",
    body: "Order from anywhere in Australia with secure checkout and clear fulfilment.",
    icon: Map
  }
];

export function BenefitsSection() {
  return (
    <section className="bg-brand-neutral py-14 sm:py-16">
      <Container>
        <SectionHeading title="Practical Advantages On Site" eyebrow="Benefits">
          <p>
            CabFit products are built to support speed, consistency, reliability, and quality workmanship for cabinet installers.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article className="border border-brand-border bg-white p-5" key={benefit.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-charcoal text-brand-gold">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <h3 className="mt-5 text-lg font-black text-brand-charcoal">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{benefit.body}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
