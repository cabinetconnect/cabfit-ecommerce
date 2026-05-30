import { BadgeCheck, LockKeyhole, MapPinned, PackageCheck } from "lucide-react";
import { Container } from "@/components/ui/container";

const trustItems = [
  { title: "Australian Business", icon: MapPinned },
  { title: "Secure Stripe Payments", icon: LockKeyhole },
  { title: "Shipping Australia-Wide", icon: PackageCheck },
  { title: "Practical Products For Cabinetmakers", icon: BadgeCheck }
];

export function TrustSection() {
  return (
    <section className="border-y border-brand-border bg-white">
      <Container className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div className="flex items-center gap-3" key={item.title}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-neutral text-brand-gold">
                <Icon aria-hidden="true" size={22} />
              </span>
              <p className="text-sm font-black text-brand-charcoal">{item.title}</p>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
