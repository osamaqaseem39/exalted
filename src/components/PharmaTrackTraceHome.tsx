"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { pharmaFlow, pharmaLevels } from "@/data/site";

const levelsAscending = [...pharmaLevels].reverse();
const STEP_MS = 720;

export default function PharmaTrackTraceHome() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const [flowIndex, setFlowIndex] = useState(-1);
  const [levelIndex, setLevelIndex] = useState(-1);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setFlowIndex(pharmaFlow.length - 1);
      setLevelIndex(levelsAscending.length - 1);
      setComplete(true);
      return;
    }

    if (flowIndex >= pharmaFlow.length - 1 && levelIndex >= levelsAscending.length - 1) {
      const done = window.setTimeout(() => setComplete(true), STEP_MS);
      return () => window.clearTimeout(done);
    }

    const timer = window.setTimeout(() => {
      setFlowIndex((i) => Math.min(i + 1, pharmaFlow.length - 1));
      setLevelIndex((i) => Math.min(i + 1, levelsAscending.length - 1));
    }, flowIndex < 0 ? 400 : STEP_MS);

    return () => window.clearTimeout(timer);
  }, [started, flowIndex, levelIndex]);

  const visibleFlow = flowIndex < 0 ? [] : pharmaFlow.slice(0, flowIndex + 1);
  const visibleLevels = levelIndex < 0 ? [] : levelsAscending.slice(0, levelIndex + 1);

  const flowProgress =
    visibleFlow.length === 0 ? 0 : Math.min(100, (visibleFlow.length / pharmaFlow.length) * 100);
  const levelProgress =
    visibleLevels.length === 0 ? 0 : Math.min(100, (visibleLevels.length / levelsAscending.length) * 100);

  return (
    <section
      ref={sectionRef}
      id="pharma-track-trace-home"
      className="pharma-track-home mx-auto mt-12 max-w-6xl px-6 md:mt-16"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p
            className={`text-xs font-normal tracking-[0.25em] text-black/50 transition-all duration-700 ${
              started ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Pharma serialization
          </p>
          <h3
            className={`mt-3 text-3xl font-normal text-black transition-all delay-100 duration-700 md:text-4xl ${
              started ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Pharma Track &amp; Trace
          </h3>
          <div
            className={`mt-4 h-px w-16 origin-left bg-[#fee2e2] transition-all delay-200 duration-700 ${
              started ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
          <p
            className={`mt-6 text-base leading-relaxed text-black/80 transition-all delay-300 duration-700 md:text-lg ${
              started ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            From supplier to patient with enterprise-to-device serialization visibility.
          </p>

          <div className="relative mt-8 min-h-[4rem] pl-2">
            {visibleFlow.length > 0 && (
              <>
                <div className="absolute bottom-6 left-[1.35rem] top-6 w-px overflow-hidden bg-[#fee2e2]" aria-hidden>
                  <div
                    className="w-full bg-[#8b1010] transition-[height] duration-700 ease-out"
                    style={{ height: `${flowProgress}%` }}
                  />
                </div>
                <div
                  className="pharma-flow-pulse pointer-events-none absolute left-[1.35rem] z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-[#8b1010]"
                  style={{ top: `calc(1.375rem + ${(visibleFlow.length - 1) * 3.75}rem)` }}
                  aria-hidden
                />
              </>
            )}

            <ol className="space-y-3">
              {visibleFlow.map((step, index) => {
                const current = index === visibleFlow.length - 1;

                return (
                  <li
                    key={step}
                    className="pharma-step-enter relative flex items-center gap-4"
                  >
                    <span
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#8b1010] text-sm font-normal text-white shadow-md transition-all duration-500 ${
                        current ? "scale-110 ring-4 ring-[#8b1010]/25" : ""
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div
                      className={`flex-1 rounded-xl border px-4 py-3.5 transition-all duration-500 ${
                        current
                          ? "border-[#8b1010]/30 bg-white shadow-[0_8px_24px_rgba(139,16,16,0.08)]"
                          : "border-[#fee2e2] bg-[#fef2f2]"
                      }`}
                    >
                      <p className="text-sm font-normal text-black md:text-base">{step}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div
          className={`rounded-3xl border border-[#fee2e2] bg-[#fef2f2] p-6 shadow-sm transition-all duration-700 md:p-8 ${
            started ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-center text-xs font-normal tracking-[0.25em] text-black/50">ISA-95 architecture</p>
          <p className="mt-2 text-center text-sm font-normal text-black/70">Device → Enterprise data flow</p>

          <div className="relative mt-6 min-h-[4rem]">
            {visibleLevels.length > 0 && (
              <div className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 overflow-hidden bg-[#fee2e2]" aria-hidden>
                <div
                  className="w-full bg-[#8b1010]/60 transition-[height] duration-700 ease-out"
                  style={{ height: `${levelProgress}%` }}
                />
              </div>
            )}

            <div className="space-y-3">
              {visibleLevels.map((item, index) => {
                const current = index === visibleLevels.length - 1;

                return (
                  <article
                    key={item.level}
                    className={`pharma-level-enter group relative rounded-2xl border bg-white p-4 ${
                      current
                        ? "border-[#8b1010]/30 shadow-[0_8px_24px_rgba(139,16,16,0.08)]"
                        : "border-[#fee2e2]"
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 h-full rounded-l-2xl bg-[#8b1010] transition-all duration-500 ${
                        current ? "w-1.5" : "w-1"
                      }`}
                    />
                    <div className="flex items-start justify-between gap-3 pl-2">
                      <div>
                        <p className="text-lg font-normal text-black">
                          {item.level} — {item.name}
                        </p>
                        <p className="mt-1 text-sm text-black/70">{item.desc}</p>
                      </div>
                      {index < levelsAscending.length - 1 && (
                        <span
                          className={`mt-1 text-[#8b1010] ${current ? "pharma-level-arrow" : "opacity-30"}`}
                          aria-hidden
                        >
                          ↓
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mt-10 text-center transition-all duration-700 ${
          complete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <Link
          href="/company#pharma-track-trace"
          className="group inline-flex items-center gap-2 rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
        >
          Explore full pharma capabilities
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
