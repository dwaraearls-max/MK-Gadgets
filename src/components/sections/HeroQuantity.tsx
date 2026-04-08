"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function HeroQuantity() {
  const [qty, setQty] = useState(2);

  return (
    <div
      className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-100 px-3 py-2.5 text-neutral-800 shadow-sm sm:gap-3 sm:px-4"
      role="group"
      aria-label="Quantity"
    >
      <span className="text-xs font-medium text-neutral-600 sm:text-sm">
        Choose qty
      </span>
      <span className="min-w-[1.25rem] text-center text-lg font-semibold tabular-nums text-matte">
        {qty}
      </span>
      <div className="flex flex-col gap-0.5">
        <button
          type="button"
          className="rounded p-0.5 text-neutral-500 transition hover:bg-white hover:text-matte"
          aria-label="Increase quantity"
          onClick={() => setQty((q) => Math.min(99, q + 1))}
        >
          <ChevronUp className="size-4" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          className="rounded p-0.5 text-neutral-500 transition hover:bg-white hover:text-matte"
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
        >
          <ChevronDown className="size-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
