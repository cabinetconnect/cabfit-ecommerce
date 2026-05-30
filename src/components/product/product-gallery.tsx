import Image from "next/image";
import type { Product } from "@/types/product";

type ProductGalleryProps = {
  product: Product;
};

export function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="grid gap-3">
      <div className="border border-brand-border bg-white">
        <Image
          alt={product.name}
          className="aspect-square w-full object-cover"
          height={900}
          priority
          src={product.images[0]}
          unoptimized
          width={900}
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {product.images.map((image) => (
          <div className="border border-brand-border bg-white p-2" key={image}>
            <Image
              alt={`${product.name} thumbnail`}
              className="aspect-square w-full object-cover"
              height={240}
              src={image}
              unoptimized
              width={240}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
