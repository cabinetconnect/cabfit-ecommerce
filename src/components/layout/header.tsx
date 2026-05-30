"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { getCartCount, useCartStore } from "@/store/cart-store";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartCount = mounted ? getCartCount(items) : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-border bg-brand-neutral/95 backdrop-blur">
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link
            aria-label="CabFit home"
            className="flex items-center"
            href="/"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              alt={siteConfig.name}
              className="h-auto w-36 sm:w-40"
              height={136}
              priority
              src={siteConfig.logo}
              width={512}
            />
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "text-sm font-bold text-brand-charcoal transition-colors hover:text-brand-gold",
                  pathname === item.href && "text-brand-gold"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              aria-label={`Open cart with ${cartCount} items`}
              className="relative"
              onClick={toggleCart}
              size="icon"
              variant="secondary"
            >
              <ShoppingCart aria-hidden="true" size={20} />
              {cartCount > 0 ? (
                <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-gold px-1 text-xs font-black text-brand-dark">
                  {cartCount}
                </span>
              ) : null}
            </Button>
            <Button
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              size="icon"
              variant="secondary"
            >
              {mobileOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            </Button>
          </div>
        </Container>

        {mobileOpen ? (
          <nav className="border-t border-brand-border bg-white lg:hidden" aria-label="Mobile navigation">
            <Container className="grid gap-1 py-3">
              {navItems.map((item) => (
                <Link
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-bold text-brand-charcoal",
                    pathname === item.href && "bg-brand-neutral text-brand-gold"
                  )}
                  href={item.href}
                  key={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </Container>
          </nav>
        ) : null}
      </header>
      <CartDrawer />
    </>
  );
}
