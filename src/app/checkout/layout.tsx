import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your MK GADGETS order online.",
  alternates: { canonical: `${getSiteUrl()}/checkout` },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
