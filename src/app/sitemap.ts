import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/shop",
  "/about",
  "/contact",
  "/faq",
  "/shipping-returns",
  "/cart",
  "/checkout",
  "/checkout/success",
  "/checkout/cancel"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency:
        route === "" || route === "/shop" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    }))
  ];
}
