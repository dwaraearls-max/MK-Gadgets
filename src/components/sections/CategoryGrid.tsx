import Image from "next/image";
import Link from "next/link";
import { getCatalog } from "@/lib/catalog";

export function CategoryGrid() {
  const { categories } = getCatalog();

  return (
    <section
      id="categories"
      className="scroll-mt-28 bg-background py-16 md:py-24"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 max-w-2xl">
          <h2
            id="categories-heading"
            className="text-3xl font-bold tracking-tight text-matte md:text-4xl"
          >
            Shop by category
          </h2>
          <p className="mt-3 text-muted">
            Electronics shop near me — explore smartphones, audio, power, laptops,
            gaming, and smart home in one place.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-surface shadow-md transition hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] bg-charcoal/5">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-matte">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{c.benefit}</p>
                <Link
                  href="/#products"
                  className="mt-4 inline-flex min-h-10 items-center justify-center rounded-xl border border-charcoal/15 px-4 py-2 text-sm font-semibold text-matte transition hover:border-charcoal/40"
                >
                  Browse products
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
