import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "adjustable-leg-adjustment-device",
    slug: "adjustable-leg-adjustment-device",
    name: "Adjustable Leg Adjustment Device",
    description:
      "A practical installation accessory designed to help cabinetmakers and installers adjust cabinet legs faster and more consistently during installation.",
    priceCents: 7900,
    images: ["/products/adjustable-leg-adjustment-device.jpg"],
    variants: [{ id: "standard", name: "Standard" }],
    benefits: ["Faster adjustments", "Consistent results", "Designed for site use"],
    featured: true,
    keywords: [
      "cabinet installation accessories",
      "cabinet installation aids",
      "cabinet installers Australia"
    ]
  },
  {
    id: "pantry-drawer-box-spacer-blocks",
    slug: "pantry-drawer-box-spacer-blocks",
    name: "Pantry Drawer Box Spacer Blocks",
    description:
      "Spacer blocks designed to assist with pantry drawer box installation and spacing.",
    priceCents: 3900,
    images: [
      "/products/pantry-drawer-box-spacer-blocks.jpg",
      "/products/pantry-drawer-box-spacer-blocks-application.jpg"
    ],
    variants: [
      { id: "pattern-a", name: "Pattern A" },
      { id: "pattern-b", name: "Pattern B" },
      { id: "pattern-c", name: "Pattern C" }
    ],
    benefits: ["Consistent spacing", "Faster installation", "Repeatable results"],
    featured: true,
    keywords: [
      "cabinetmaker jigs",
      "cabinet assembly accessories",
      "Australian cabinetmakers"
    ]
  },
  {
    id: "filler-setback-jigs",
    slug: "filler-setback-jigs",
    name: "Filler Setback Jigs",
    description:
      "Designed to help cabinetmakers achieve consistent filler setbacks during cabinet installation.",
    priceCents: 4900,
    images: ["/products/filler-setback-jigs.jpg"],
    variants: [
      { id: "standard", name: "Standard" },
      { id: "extended", name: "Extended" }
    ],
    benefits: ["Consistent setbacks", "Reduced measuring", "Faster installs"],
    featured: true,
    keywords: [
      "cabinet installation jigs",
      "cabinet install accessories",
      "cabinet installation products"
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(productId: string) {
  return products.filter((product) => product.id !== productId).slice(0, 3);
}
