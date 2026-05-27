"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      loaded?: boolean;
      ns?: Record<string, (...args: unknown[]) => void>;
      q?: unknown[][];
    };
  }
}

function setupCal(calLink: string, namespace: string) {
  if (window.Cal?.loaded) return;

  // Recreate Cal.com's queue bootstrap snippet in pure JS (no innerHTML)
  (function (win: Window & typeof globalThis, embedSrc: string, initCmd: string) {
    const enqueue = (target: { q: unknown[][] }, args: unknown[]) => target.q.push(args);
    win.Cal = win.Cal || function (...args: unknown[]) {
      const cal = win.Cal!;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const s = document.createElement("script");
        s.src = embedSrc;
        s.async = true;
        document.head.appendChild(s);
        cal.loaded = true;
      }
      if (args[0] === initCmd) {
        const api = (...a: unknown[]) => enqueue(api as unknown as { q: unknown[][] }, a);
        (api as unknown as { q: unknown[][] }).q = [];
        const ns = args[1] as string | undefined;
        if (typeof ns === "string") {
          cal.ns![ns] = api;
          enqueue(api as unknown as { q: unknown[][] }, args);
        } else {
          enqueue(cal as unknown as { q: unknown[][] }, args);
        }
        return;
      }
      enqueue(cal as unknown as { q: unknown[][] }, args);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  window.Cal!("init", namespace, { origin: "https://app.cal.com" });
  window.Cal!.ns![namespace]("ui", { hideEventTypeDetails: false, layout: "month_view" });

  // Silence unused-var linting on calLink — it's used via data attribute
  void calLink;
}

interface CalBookingButtonProps {
  calLink: string;
  namespace?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalBookingButton({
  calLink,
  namespace = "booking",
  className,
  children = "Book a call ↗",
}: CalBookingButtonProps) {
  useEffect(() => {
    setupCal(calLink, namespace);
  }, [calLink, namespace]);

  return (
    <button
      data-cal-namespace={namespace}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
