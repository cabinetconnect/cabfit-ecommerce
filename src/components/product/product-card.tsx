"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { Button, LinkButton } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const defaultVariant = product.variants[0];

  function handleAddToCart() {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      priceCents: product.priceCents,
      image: product.images[0],
      variantId: defaultVariant.id,
      variantName: defaultVariant.name,
      quantity: 1
    });
    openCart();
  }

  return (
    <article className="group flex h-full flex-col border border-brand-border bg-white transition-shadow hover:shadow-soft">
      <Link className="block bg-brand-neutral" href={`/products/${product.slug}`}>
        <Image
          alt={product.name}
          className="aspect-[4/3] w-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
          height={680}
          src={product.images[0]}
          width={900}
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <p className="mb-3 text-xs font-black uppercase text-brand-gold">
            Site-ready accessory
          </p>
          <h2 className="font-display text-2xl font-black leading-none text-brand-charcoal">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-brand-muted">
            {product.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.benefits.slice(0, 2).map((benefit) => (
              <span
                className="border border-brand-border bg-brand-neutral px-2.5 py-1 text-xs font-bold text-brand-charcoal"
                key={benefit}
              >
                {benefit}
              </span>
            ))}
          </div>
          <p className="mt-4 text-lg font-black text-brand-charcoal">
            {formatCurrency(product.priceCents)}
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <LinkButton href={`/products/${product.slug}`} variant="secondary">
            View <ArrowRight aria-hidden="true" size={17} />
          </LinkButton>
          <Button onClick={handleAddToCart}>
            Add <ShoppingCart aria-hidden="true" size={17} />
          </Button>
        </div>
      </div>
    </article>
  );
}
