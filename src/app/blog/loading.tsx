import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { Skeleton } from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <>
      <SiteHeader />
      <main className="border-t border-charcoal/10 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="mt-4 h-5 w-full max-w-xl" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-96 w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
