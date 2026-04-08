import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-28 bg-charcoal py-20 text-white md:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2
          id="cta-heading"
          className="text-balance text-3xl font-bold tracking-tight md:text-4xl"
        >
          Ready to Upgrade Your Tech
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Original gadgets, fast nationwide delivery, and support that actually
          replies — add items to your cart and complete checkout here on the site.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/cart"
            className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-matte transition hover:bg-white/90"
          >
            View cart
          </Link>
          <Link
            href="/#products"
            className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
