export type ProductVariant = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceCents: number;
  images: string[];
  variants: ProductVariant[];
  benefits: string[];
  featured?: boolean;
  keywords: string[];
};
