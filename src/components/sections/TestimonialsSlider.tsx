"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const reviews = [
  {
    name: "Kojo A.",
    location: "Accra",
    text: "Original AirPods, fast delivery. Highly recommended.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
  {
    name: "Ama S.",
    location: "Kumasi",
    text: "Galaxy phone came sealed — they walked me through warranty. Solid service.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
  },
  {
    name: "Emmanuel T.",
    location: "Tema",
    text: "Great pricing vs mall stores. Will buy my next laptop here too.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
  },
  {
    name: "Yaa M.",
    location: "Takoradi",
    text: "Smooth checkout on the site — they confirmed stock and delivery fast.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
  },
];

export function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="reviews"
      className="scroll-mt-28 bg-background py-16 md:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2
          id="reviews-heading"
          className="text-3xl font-bold tracking-tight text-matte md:text-4xl"
        >
          Loved by customers
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Real feedback from buyers across Ghana — Google-style layout, honest
          stars.
        </p>
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
              >
                <article className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-surface p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-charcoal/10">
                      <Image
                        src={r.photo}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-matte">{r.name}</p>
                      <p className="text-sm text-muted">{r.location}</p>
                      <div
                        className="mt-1 flex gap-0.5"
                        aria-label={`${r.rating} out of 5 stars`}
                      >
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-matte text-matte"
                            aria-hidden
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-matte/90">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-6 flex justify-center gap-2"
          role="tablist"
          aria-label="Review slides"
        >
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected === i}
              className={cn(
                "h-2 w-8 rounded-full transition",
                selected === i ? "bg-matte" : "bg-charcoal/20",
              )}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
