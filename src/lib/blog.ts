export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  keywords: string[];
};

export const blogPosts: (BlogPostMeta & { contentHtml: string })[] = [
  {
    slug: "how-to-choose-the-right-smartphone",
    title: "How to Choose the Right Smartphone in Ghana",
    excerpt:
      "Battery, camera, software updates, and warranty — what actually matters before you buy.",
    date: "2026-03-15",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80",
    keywords: [
      "buy smartphones Ghana",
      "gadgets in Ghana",
      "original gadgets",
    ],
    contentHtml: `
      <p>Choosing a smartphone is not only about the brand on the box — it is about how you use your phone every day. Start with battery life and charging speed if you are always on the move. If you create content, prioritise camera sensors and stabilisation. For longevity, look for devices with a strong update policy and buy from a seller who provides clear warranty terms.</p>
      <h2>Check authenticity</h2>
      <p>Always verify IMEI, accessories, and warranty documentation. At MK GADGETS we focus on genuine products and transparent after-sales support so you can buy with confidence.</p>
    `,
  },
  {
    slug: "best-accessories-for-your-phone",
    title: "Best Accessories for Your Phone",
    excerpt:
      "From fast chargers to protection — the add-ons that protect your investment.",
    date: "2026-03-22",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80",
    keywords: ["phone accessories", "electronics shop near me", "gadgets in Ghana"],
    contentHtml: `
      <p>A great phone deserves great accessories. A quality fast charger and certified cable reduce heat and extend battery health. A tempered glass screen protector and case prevent costly repairs. Consider wireless earbuds for calls and music, and a compact power bank for long days away from outlets.</p>
      <h2>Buy quality once</h2>
      <p>Cheap accessories can damage your device. We stock trusted brands and can recommend bundles that match your phone model.</p>
    `,
  },
  {
    slug: "how-to-spot-fake-gadgets",
    title: "How to Spot Fake Gadgets",
    excerpt:
      "Red flags, packaging checks, and why buying from a trusted dealer matters.",
    date: "2026-04-01",
    image:
      "https://images.unsplash.com/photo-1550009158-9debf290580d?w=1200&q=80",
    keywords: ["original gadgets", "gadgets in Ghana", "electronics shop near me"],
    contentHtml: `
      <p>Counterfeit electronics often miss fine print, serial consistency, and official warranty paths. Compare packaging typography, accessory quality, and weight. Suspiciously low prices for current flagship models are a major red flag.</p>
      <h2>Shop with proof</h2>
      <p>Buy from retailers who stand behind their stock with warranty support and clear return policies. At MK GADGETS we prioritise authenticity and fast nationwide delivery across Ghana.</p>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs() {
  return blogPosts.map((p) => p.slug);
}
