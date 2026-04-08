import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";

export default function CheckoutSuccessPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[50vh] border-t border-charcoal/10 bg-background px-3 py-12 pb-[max(3rem,env(safe-area-inset-bottom))] sm:px-4 sm:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-balance text-xl font-bold text-matte sm:text-2xl">
            Order received
          </h1>
          <p className="mt-4 text-pretty text-muted leading-relaxed">
            Thank you. We&apos;ve received your order details. Our team will
            contact you shortly to confirm payment and delivery.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-matte px-6 py-3 font-semibold text-white transition hover:bg-charcoal"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
