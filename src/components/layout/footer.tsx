import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/site";

const footerLinks = [
  ...navItems,
  { label: "Cart", href: "/cart" },
  { label: "Checkout", href: "/checkout" }
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-charcoal text-white">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            alt={siteConfig.name}
            className="h-auto w-40 bg-brand-neutral p-2"
            height={168}
            src={siteConfig.logo}
            width={376}
          />
          <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
            Practical Install & Assembly Accessories For Cabinetmakers. Made For Real Installs. Shipping Australia-Wide.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-brand-gold">CabFit</h2>
          <nav className="mt-4 grid gap-3" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <Link
                className="text-sm font-semibold text-white/75 transition-colors hover:text-brand-gold"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-brand-gold">Trade Supply</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/75">
            <li>Australian Business</li>
            <li>Secure Stripe Payments</li>
            <li>Shipping Australia-Wide</li>
            <li>South Australia</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} CabFit. All rights reserved.</p>
          <p>Fit It Right.</p>
        </Container>
      </div>
    </footer>
  );
}
