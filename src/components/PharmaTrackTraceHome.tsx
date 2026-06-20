"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { pharmaFlow, pharmaLevels } from "@/data/site";

const levelsAscending = [...pharmaLevels].reverse();

export default function PharmaTrackTraceHome() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setActive(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="pharma-track-trace-home"
      className={`pharma-track-home mx-auto mt-12 max-w-6xl px-6 md:mt-16 ${active ? "is-active" : ""}`}
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Supply chain flow */}
        <div>
          <p className="text-xs font-normal text-black/50">Pharma serialization</p>
          <h3 className="mt-3 text-4xl font-normal text-black md:text-5xl">Pharma Track &amp; Trace</h3>
          <div className="mt-4 h-px w-20 bg-[#fee2e2]" />
          <p className="mt-6 text-lg leading-relaxed text-black md:text-xl">
            From supplier to patient with enterprise-to-device serialization visibility.
          </p>

          <div className="pharma-flow-track relative mt-8 pl-2">
            <div className="pharma-flow-line absolute bottom-6 left-[1.35rem] top-6 w-px bg-[#fecaca]" aria-hidden />
            <div className="pharma-flow-pulse absolute left-[1.05rem] top-6 h-2.5 w-2.5 rounded-full bg-[#8b1010] shadow-[0_0_12px_rgba(139,16,16,0.5)]" aria-hidden />

            <ol className="space-y-3">
              {pharmaFlow.map((step, index) => (
                <li
                  key={step}
                  className="pharma-step relative flex items-center gap-4"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#8b1010] text-sm font-normal text-white shadow-md">
                    {index + 1}
                  </span>
                  <div className="pharma-step-card flex-1 rounded-xl border border-[#fee2e2] bg-[#fef2f2] px-4 py-3.5 text-black transition hover:border-[#fecaca] hover:shadow-sm">
                    <p className="text-sm font-normal md:text-base">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ISA-95 levels */}
        <div className="pharma-levels-panel rounded-3xl border border-[#fee2e2] bg-[#fef2f2] p-6 shadow-sm md:p-8">
          <p className="text-center text-xs font-normal text-black/50">
            ISA-95 architecture
          </p>
          <p className="mt-2 text-center text-sm font-normal text-black/70">
            Device → Enterprise data flow
          </p>

          <div className="relative mt-6 space-y-3">
            <div className="pharma-level-connector absolute bottom-8 left-1/2 top-8 w-px bg-[#fecaca]" aria-hidden />

            {levelsAscending.map((item, index) => (
              <article
                key={item.level}
                className="pharma-level-card group relative rounded-2xl border border-[#fee2e2] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#fecaca] hover:shadow-md"
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#8b1010] transition-all group-hover:w-1.5" />
                <div className="flex items-start justify-between gap-3 pl-2">
                  <div>
                    <p className="text-lg font-normal text-black">
                      {item.level} — {item.name}
                    </p>
                    <p className="mt-1 text-sm text-black/70">{item.desc}</p>
                  </div>
                  {index < levelsAscending.length - 1 && (
                    <span className="pharma-level-arrow mt-1 text-[#8b1010]/40" aria-hidden>
                      ↓
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="pharma-cta mt-10 text-center">
        <Link
          href="/company#pharma-track-trace"
          className="inline-flex items-center gap-2 rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
        >
          Explore full pharma capabilities
          <span className="pharma-cta-arrow inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
