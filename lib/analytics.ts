export type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: AnalyticsPayload }) => void;
    gtag?: (command: "event", eventName: string, params?: AnalyticsPayload) => void;
  }
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.plausible?.(eventName, { props: payload });
  window.gtag?.("event", eventName, payload);

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", eventName, payload);
  }
}

export function trackCtaClick(ctaId: string, destination: string) {
  trackEvent("cta_click", { cta_id: ctaId, destination });
}
