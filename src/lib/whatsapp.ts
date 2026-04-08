import { getWhatsAppDigits } from "./site";

export function buildWhatsAppUrl(message: string): string {
  const phone = getWhatsAppDigits();
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

export const defaultOrderMessage =
  "Hi MK GADGETS — I want to order / ask about a gadget. Please assist.";
