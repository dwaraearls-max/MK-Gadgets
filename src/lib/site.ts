export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export function getPhoneDisplay(): string {
  return process.env.NEXT_PUBLIC_PHONE || "+233 XX XXX XXXX";
}

export function getPhoneTel(): string {
  const raw = process.env.NEXT_PUBLIC_PHONE || "+233000000000";
  return raw.replace(/\s/g, "");
}

/** WhatsApp number: digits only, country code, no + */
export function getWhatsAppDigits(): string {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP ||
    process.env.NEXT_PUBLIC_PHONE?.replace(/\D/g, "") ||
    "233000000000"
  );
}

export function getBusinessAddress(): string | undefined {
  const a = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim();
  return a || undefined;
}

export function getMapEmbedUrl(): string | undefined {
  const u = process.env.NEXT_PUBLIC_MAP_EMBED_URL?.trim();
  return u || undefined;
}
