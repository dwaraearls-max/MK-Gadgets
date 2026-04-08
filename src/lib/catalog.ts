import raw from "@/data/products.json";
import type { Catalog } from "@/types/catalog";

function hasImageUrl(image: string | undefined): boolean {
  const s = image?.trim();
  return Boolean(s && /^https?:\/\//i.test(s));
}

/** Drops categories/products with missing or invalid image URLs so cards never render empty. */
export function getCatalog(): Catalog {
  const data = raw as Catalog;
  return {
    categories: data.categories.filter((c) => hasImageUrl(c.image)),
    products: data.products.filter((p) => hasImageUrl(p.image)),
  };
}

export function getFeaturedProducts() {
  return getCatalog().products.filter((p) => p.featured);
}

export function getDealProducts() {
  return getCatalog().products.filter((p) => p.deal);
}

export function getProductById(id: string) {
  return getCatalog().products.find((p) => p.id === id);
}
