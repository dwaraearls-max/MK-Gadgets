import {
  BadgeCheck,
  Banknote,
  Headphones,
  Lock,
  MapPin,
  Truck,
} from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Genuine & verified gadgets",
    body: "We prioritise authenticity and transparent sourcing for every device.",
  },
  {
    icon: Banknote,
    title: "Competitive pricing",
    body: "Fair pricing on flagships, accessories, and bundles — ask for today’s best deal.",
  },
  {
    icon: Truck,
    title: "Fast delivery across Ghana",
    body: "Accra, Kumasi, Tema, Takoradi & nationwide — shipped with care.",
  },
  {
    icon: Headphones,
    title: "Friendly expert support",
    body: "Checkout on the site, or call — we help you pick the right tech for your budget.",
  },
  {
    icon: Lock,
    title: "Secure payments",
    body: "Clear payment options and receipts — no surprises.",
  },
  {
    icon: MapPin,
    title: "Warranty & after-sales",
    body: "Guidance on warranty claims and device care after you buy.",
  },
];

export function WhyChoose() {
  return (
    <section
      id="why"
      className="scroll-mt-28 border-t border-charcoal/10 bg-matte py-16 text-white md:py-24"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2
          id="why-heading"
          className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
        >
          Why Choose MK GADGETS
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Modern, premium, and trustworthy — built for tech enthusiasts and
          everyday buyers who want the real thing.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {items.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <Icon className="size-8 text-white" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
