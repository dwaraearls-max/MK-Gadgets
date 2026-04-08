import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your MK GADGETS cart and checkout.",
  alternates: { canonical: `${getSiteUrl()}/cart` },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
