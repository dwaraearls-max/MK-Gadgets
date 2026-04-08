"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";

/**
 * After scrolling past the hero (which includes its own in-card nav),
 * show the standard dark sticky header for the rest of the page.
 */
export function StickySiteNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = 380;
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 shadow-lg">
      <Header />
    </div>
  );
}
