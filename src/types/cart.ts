export type CartLine = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  priceCents: number;
  image: string;
  variantId: string;
  variantName: string;
  quantity: number;
};

export type CheckoutLineInput = {
  productId: string;
  variantId: string;
  quantity: number;
};
