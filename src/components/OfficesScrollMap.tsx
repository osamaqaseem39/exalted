"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { offices } from "@/data/site";

const locations = [
  {
    id: "lahore",
    step: 1,
    title: offices.lahore.title,
    address: offices.lahore.address,
    label: "Lahore",
    embedUrl: offices.lahore.embedUrl,
    mapsUrl: offices.lahore.mapsUrl,
  },
  {
    id: "karachi",
    step: 2,
    title: offices.karachi.title,
    address: offices.karachi.address,
    label: "Karachi",
  },
] satisfies ReadonlyArray<{
  id: string;
  step: number;
  title: string;
  address: string;
  label: string;
  embedUrl?: string;
  mapsUrl?: string;
}>;

function mapEmbedUrl(address: string, embedUrl?: string) {
  return embedUrl ?? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&hl=en&z=15&output=embed`;
}

function mapsLink(address: string, mapsUrl?: string) {
  return mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function OfficesScrollMap() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const clamped = Math.max(0, Math.min(index, locations.length - 1));
    scroller.scrollTo({
      left: clamped * scroller.clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(clamped);
  }, []);

  const handleScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || scroller.clientWidth === 0) return;
    const index = Math.round(scroller.scrollLeft / scroller.clientWidth);
    setActiveIndex(Math.max(0, Math.min(index, locations.length - 1)));
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onResize = () => handleScroll();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [handleScroll]);

  const active = locations[activeIndex];
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < locations.length - 1;

  return (
    <section className="relative w-full pb-10">
      <p className="mb-4 text-center text-xs font-normal tracking-wide text-black/60 sm:hidden">
        Swipe sideways to view both offices →
      </p>

      <div className="relative h-[65vh] min-h-[360px] w-full sm:h-[70vh] md:min-h-[480px]">
        <button
          type="button"
          aria-label="Previous office"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={!canGoPrev}
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/95 text-black shadow-lg backdrop-blur-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-30 sm:left-5"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next office"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={!canGoNext}
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/95 text-black shadow-lg backdrop-blur-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-30 sm:right-5"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="offices-map-scroller flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {locations.map((location) => (
            <div
              key={location.id}
              className="relative h-full w-full shrink-0 snap-center snap-always bg-[#e8e8e8]"
            >
              <iframe
                title={`Google Map — ${location.title}`}
                src={mapEmbedUrl(location.address, location.embedUrl)}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              <div className="absolute bottom-4 left-4 right-16 sm:bottom-6 sm:left-6 sm:right-24">
                <div className="rounded-2xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:max-w-md sm:p-5">
                  <p className="text-[11px] font-normal tracking-[0.2em] text-black/60">
                    Office {location.step} of {locations.length}
                  </p>
                  <h3 className="mt-2 text-lg font-normal text-black sm:text-xl">{location.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/80">{location.address}</p>
                  <a
                    href={mapsLink(location.address, location.mapsUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto mt-3 inline-block rounded-full bg-[#8b1010] px-4 py-2 text-xs font-normal tracking-wide text-white transition hover:bg-[#6e0d0d]"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:right-5">
          {locations.map((location, index) => (
            <button
              key={location.id}
              type="button"
              aria-label={`Go to ${location.label} office`}
              aria-current={activeIndex === index}
              onClick={() => scrollToIndex(index)}
              className={`rounded-full transition-all ${
                activeIndex === index ? "h-8 w-2.5 bg-[#8b1010]" : "h-2.5 w-2.5 bg-white/90 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {locations.map((location, index) => (
          <button
            key={location.id}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`rounded-full px-4 py-2 text-xs font-normal transition ${
              activeIndex === index
                ? "bg-[#8b1010] text-white"
                : "border border-[#fee2e2] bg-white text-black hover:bg-[#fef2f2]"
            }`}
          >
            {location.label}
          </button>
        ))}
      </div>
    </section>
  );
}
