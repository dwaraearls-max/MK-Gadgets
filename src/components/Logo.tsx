"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

function MkEmblem({
  className,
  fg,
  bg,
  ring,
}: {
  className?: string;
  fg: string;
  bg: string;
  ring: string;
}) {
  const uid = useId().replace(/:/g, "");
  const clipId = `mk-emblem-${uid}`;

  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="42" />
        </clipPath>
      </defs>
      {/* Black disc + thin inner white ring */}
      <circle cx="50" cy="50" r="46" fill={bg} stroke={ring} strokeWidth="2" />
      <g clipPath={`url(#${clipId})`}>
        <text
          x="50"
          y="64"
          textAnchor="middle"
          fill={fg}
          style={{
            fontSize: "38px",
            fontWeight: 800,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
            letterSpacing: "-0.06em",
          }}
        >
          MK
        </text>
      </g>
    </svg>
  );
}

export function Logo({
  className,
  variant = "dark",
  layout = "inline",
}: {
  className?: string;
  variant?: "dark" | "light";
  /** `stack` = emblem above wordmark; `inline` = emblem left (header) */
  layout?: "stack" | "inline";
}) {
  const isOnDark = variant === "light";

  const emblemBg = "#0a0a0a";
  const emblemRing = "#ffffff";
  const emblemFg = "#ffffff";
  const wordClass = isOnDark ? "text-white" : "text-matte";

  const wordmark = (
    <span
      className={cn(
        "font-bold uppercase leading-none tracking-[0.14em]",
        layout === "stack"
          ? "text-center text-[0.65rem] sm:text-xs"
          : "text-left text-[0.58rem] sm:text-[0.65rem]",
        wordClass,
      )}
    >
      MK{" "}
      <span className="inline-flex items-baseline gap-px">
        G
        <span
          className="inline-block translate-y-[0.06em] text-[1.05em] font-black leading-none"
          aria-label="A"
        >
          Λ
        </span>
        DGETS
      </span>
    </span>
  );

  return (
    <span
      className={cn(
        "inline-flex gap-2",
        layout === "stack" ? "flex-col items-center" : "flex-row items-center",
        className,
      )}
    >
      <MkEmblem
        className={cn(
          layout === "stack" ? "h-12 w-12 sm:h-14 sm:w-14" : "h-9 w-9 sm:h-10 sm:w-10",
        )}
        bg={emblemBg}
        fg={emblemFg}
        ring={emblemRing}
      />
      {wordmark}
    </span>
  );
}
