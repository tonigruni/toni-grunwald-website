"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      loaded?: boolean;
      ns?: Record<string, unknown>;
      q?: unknown[];
    };
  }
}

interface CalBookingButtonProps {
  calLink: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalBookingButton({
  calLink,
  className,
  children = "Book a call ↗",
}: CalBookingButtonProps) {
  useEffect(() => {
    if (document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')) return;

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      window.Cal?.("init", { origin: "https://app.cal.com" });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <button
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
