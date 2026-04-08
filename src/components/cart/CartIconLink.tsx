"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/cn";

export function CartIconLink({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl p-2 transition",
        light
          ? "text-white hover:bg-white/10"
          : "text-matte hover:bg-neutral-100",
        className,
      )}
      aria-label={`Shopping cart${itemCount ? `, ${itemCount} items` : ""}`}
    >
      <ShoppingCart className="size-5" aria-hidden />
      {itemCount > 0 ? (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-matte">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      ) : null}
    </Link>
  );
}
