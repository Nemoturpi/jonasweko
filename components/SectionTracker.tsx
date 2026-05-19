"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type SectionState = {
  enteredAt: number;
  totalMs: number;
  visible: boolean;
  viewed: boolean;
};

export default function SectionTracker() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section-id]"));
    const states = new Map<string, SectionState>();

    sections.forEach((section) => {
      section.classList.add("fade-section");
      states.set(section.dataset.sectionId ?? section.id, {
        enteredAt: 0,
        totalMs: 0,
        visible: false,
        viewed: false,
      });
    });

    const onCtaClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cta-id]");
      if (!target) return;
      trackEvent("cta_click", {
        cta_id: target.dataset.ctaId,
        destination: target.getAttribute("href") ?? target.dataset.destination ?? null,
      });
    };

    document.addEventListener("click", onCtaClick);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          const sectionId = section.dataset.sectionId ?? section.id;
          const state = states.get(sectionId);

          if (!state) return;

          if (entry.isIntersecting) {
            section.classList.add("is-visible");
            if (!state.viewed) {
              trackEvent("section_view", { section_id: sectionId });
              state.viewed = true;
            }
            if (!state.visible) {
              state.enteredAt = performance.now();
              state.visible = true;
            }
          } else if (state.visible) {
            const durationMs = Math.round(performance.now() - state.enteredAt);
            state.totalMs += durationMs;
            state.visible = false;
            trackEvent("section_time", {
              section_id: sectionId,
              duration_ms: durationMs,
              total_ms: Math.round(state.totalMs),
            });
          }
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    const flushVisibleSections = () => {
      states.forEach((state, sectionId) => {
        if (!state.visible) return;
        const durationMs = Math.round(performance.now() - state.enteredAt);
        state.totalMs += durationMs;
        state.enteredAt = performance.now();
        trackEvent("section_time", {
          section_id: sectionId,
          duration_ms: durationMs,
          total_ms: Math.round(state.totalMs),
          flush: true,
        });
      });
    };

    const flushOnVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        flushVisibleSections();
      }
    };

    window.addEventListener("pagehide", flushVisibleSections);
    document.addEventListener("visibilitychange", flushOnVisibilityChange);

    return () => {
      flushVisibleSections();
      observer.disconnect();
      window.removeEventListener("pagehide", flushVisibleSections);
      document.removeEventListener("visibilitychange", flushOnVisibilityChange);
      document.removeEventListener("click", onCtaClick);
    };
  }, []);

  return null;
}
