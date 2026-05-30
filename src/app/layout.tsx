import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SEO } from "@/components/seo";
import { siteConfig } from "@/lib/site";
import { seoKeywords } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "CabFit | Fit It Right",
    template: "%s | CabFit"
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  icons: {
    icon: "/favicon.svg"
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "CabFit | Fit It Right",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/cabfit-logo.png",
        width: 512,
        height: 512,
        alt: "CabFit logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CabFit | Fit It Right",
    description: siteConfig.description,
    images: ["/cabfit-logo.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#1F2326",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    slogan: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Australia",
      addressCountry: "AU"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-AU"
  };

  return (
    <html lang="en-AU">
      <body>
        <SEO data={[organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
