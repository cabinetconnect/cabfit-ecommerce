export const siteConfig = {
  name: "CabFit",
  tagline: "Fit It Right",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cabfit.com.au",
  description:
    "Practical Install & Assembly Accessories For Cabinetmakers. Made For Real Installs. Shipping Australia-Wide.",
  location: "South Australia",
  logo: "/cabfit-logo.png",
  email: "support@cabfit.com.au",
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/"
  }
};

export const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Shipping", href: "/shipping-returns" },
  { label: "Contact", href: "/contact" }
];
