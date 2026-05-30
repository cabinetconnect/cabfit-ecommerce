"use client";

import { PackageCheck, ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";
import { QuantitySelector } from "@/components/product/quantity-selector";
import { VariantSelector } from "@/components/product/variant-selector";

type ProductPurchaseProps = {
  product: Product;
};

export function ProductPurchase({ product }: ProductPurchaseProps) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const selectedVariant =
    product.variants.find((variant) => variant.id === variantId) ??
    product.variants[0];

  function addToCart() {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      priceCents: product.priceCents,
      image: product.images[0],
      variantId: selectedVariant.id,
      variantName: selectedVariant.name,
      quantity
    });
    openCart();
  }

  return (
    <div className="grid gap-6">
      <p className="text-3xl font-black text-brand-charcoal">
        {formatCurrency(product.priceCents)}
      </p>
      <p className="text-base leading-7 text-brand-muted">{product.description}</p>

      <VariantSelector
        onChange={setVariantId}
        selectedVariantId={variantId}
        variants={product.variants}
      />
      <QuantitySelector onChange={setQuantity} value={quantity} />

      <Button className="w-full sm:w-fit" onClick={addToCart} size="lg">
        Add To Cart <ShoppingCart aria-hidden="true" size={19} />
      </Button>

      <div className="flex items-start gap-3 border border-brand-border bg-white p-4">
        <PackageCheck aria-hidden="true" className="mt-1 text-brand-gold" size={22} />
        <div>
          <p className="font-black text-brand-charcoal">Shipping Australia-Wide</p>
          <p className="mt-1 text-sm leading-6 text-brand-muted">
            Orders are packed for Australian trade customers and sent with tracking where available.
          </p>
        </div>
      </div>
    </div>
  );
}
