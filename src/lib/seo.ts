import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/format";
import { siteConfig } from "@/lib/site";

export const seoKeywords = [
  "cabinet installation accessories",
  "cabinetmaker jigs",
  "cabinet install accessories",
  "cabinet installation jigs",
  "cabinet assembly accessories",
  "cabinet installation products",
  "cabinet installation aids",
  "cabinetmaking accessories",
  "Australian cabinetmakers",
  "cabinet installers Australia"
];

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.logo,
  keywords = []
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 512,
          height: 512,
          alt: `${siteConfig.name} logo`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
