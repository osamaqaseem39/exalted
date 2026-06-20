"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 3000;

const heroSlides = [
  {
    src: "/images/hero-production-floor.png",
    alt: "Exalted coding and packing production line in a modern factory",
    eyebrow: "Exalted Coding & Packing Solutions",
    title: "Industrial Coding Experts",
    description:
      "Specialized in coding, inspection, labeling, and packaging systems with strong global technology partners.",
    cta: { label: "Read Company Profile", href: "/company" },
    highlights: ["Laser & inkjet coders", "Labeling systems", "Metal detection"],
  },
  {
    src: "/images/hero-pharma-serialization.png",
    alt: "Pharma serialization and track and trace packaging line",
    eyebrow: "Pharma Track & Trace",
    title: "Serialization Solutions",
    description:
      "End-to-end serialization, aggregation, and vision inspection for GMP-compliant pharmaceutical production lines.",
    cta: { label: "Explore Pharma Solutions", href: "/company#pharma-track-trace" },
    highlights: ["Track & trace", "Data matrix printing", "Line integration"],
  },
] as const;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[420px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px]">
        {heroSlides.map((item, index) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex h-full min-h-[420px] max-w-6xl flex-col justify-end px-4 pb-8 pt-24 sm:min-h-[520px] sm:px-6 sm:pb-10 sm:pt-28 md:min-h-[580px] md:pb-14 lg:min-h-[640px] lg:items-end">
          <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/95 p-5 shadow-lg backdrop-blur-sm sm:p-6 md:p-8">
            <div className="grid">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${
                    index === activeIndex
                      ? "relative z-10 opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={index !== activeIndex}
                >
                  <span className="inline-block rounded-full bg-[#fee2e2] px-3 py-1 text-[10px] font-normal text-black sm:text-xs">
                    {slide.eyebrow}
                  </span>
                  <h2 className="mt-3 text-2xl font-normal text-black sm:mt-4 sm:text-3xl md:text-4xl">
                    {slide.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-black sm:mt-4 sm:text-base">
                    {slide.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {slide.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[#fee2e2] bg-[#fef2f2] px-3 py-1 text-[11px] font-normal text-black"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={slide.cta.href}
                    className="mt-6 inline-block w-full rounded-xl bg-[#8b1010] px-6 py-3 text-center text-sm font-normal text-white transition hover:bg-[#6e0d0d] sm:mt-8 sm:w-auto sm:text-base"
                    tabIndex={index === activeIndex ? 0 : -1}
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
