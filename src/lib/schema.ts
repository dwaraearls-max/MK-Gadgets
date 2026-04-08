import type { Product } from "@/types/catalog";
import { getSiteUrl, getPhoneTel, getBusinessAddress } from "./site";

export function localBusinessJsonLd(): Record<string, unknown> {
  const address = getBusinessAddress();
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MK GADGETS",
    description:
      "Premium gadgets and consumer electronics in Ghana — authentic smartphones, accessories, smart devices, and tech essentials.",
    url: getSiteUrl(),
    telephone: getPhoneTel(),
    areaServed: {
      "@type": "Country",
      name: "Ghana",
    },
    priceRange: "$$",
  };
  if (address) {
    base.address = {
      "@type": "PostalAddress",
      streetAddress: address,
      addressCountry: "GH",
    };
  }
  return base;
}

export function productJsonLd(products: Product[]): Record<string, unknown> {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": products.map((p) => ({
      "@type": "Product",
      name: p.name,
      description: p.benefit,
      image: p.image.startsWith("http") ? p.image : `${site}${p.image}`,
      brand: { "@type": "Brand", name: "MK GADGETS" },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "GHS",
        url: `${site}/#products`,
        seller: { "@type": "Organization", name: "MK GADGETS" },
      },
    })),
  };
}
