"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/product/product-grid";
import type { Product } from "@/types/product";

type SortKey = "featured" | "price-low" | "price-high";

type ShopProductBrowserProps = {
  products: Product[];
};

export function ShopProductBrowser({ products }: ShopProductBrowserProps) {
  const [sort, setSort] = useState<SortKey>("featured");

  const sortedProducts = useMemo(() => {
    const nextProducts = [...products];

    if (sort === "price-low") {
      return nextProducts.sort((a, b) => a.priceCents - b.priceCents);
    }

    if (sort === "price-high") {
      return nextProducts.sort((a, b) => b.priceCents - a.priceCents);
    }

    return nextProducts.sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [products, sort]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 border border-brand-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black text-brand-charcoal">Product Type</p>
          <p className="mt-1 text-sm text-brand-muted">All cabinet installation accessories</p>
        </div>
        <select
          aria-label="Sort products"
          className="min-h-11 rounded-md border border-brand-border bg-brand-neutral px-3 text-sm font-bold text-brand-charcoal"
          onChange={(event) => setSort(event.target.value as SortKey)}
          value={sort}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price low to high</option>
          <option value="price-high">Price high to low</option>
        </select>
      </div>

      <div className="mt-6">
        <ProductGrid products={sortedProducts} />
      </div>
    </>
  );
}
