import { pharmaFlow, pharmaLevels } from "@/data/site";

const levelsAscending = [...pharmaLevels].reverse();

export default function PharmaTrackTraceSection() {
  return (
    <section id="pharma-track-trace" className="scroll-mt-24 border-t border-[#fee2e2] bg-[#fafafa] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-normal tracking-[0.2em] text-black/60">Pharma Serialization</p>
          <h2 className="mt-3 text-3xl font-normal text-black md:text-4xl">
            Track &amp; Trace — Supply Chain Flow
          </h2>
          <div className="mt-4 h-px w-16 bg-[#fee2e2]" />
          <p className="mt-5 text-base leading-relaxed text-black/80">
            ECPS offers complete pharma serialization and aggregation solutions — from printing and inspecting at
            Level 1 through enterprise ERP integration at Level 4.
          </p>
        </div>

        {/* Supply chain flow */}
        <div className="mt-12 rounded-3xl border border-[#fee2e2] bg-white p-6 shadow-sm md:p-10">
          <p className="text-center text-xs font-normal tracking-[0.18em] text-black/50">
            Product journey — supplier to patient
          </p>

          {/* Desktop: single-row timeline */}
          <div className="relative mt-10 hidden lg:block">
            <div
              className="absolute left-[10%] right-[10%] top-6 h-px bg-[#fecaca]"
              aria-hidden
            />
            <ol className="grid grid-cols-5 gap-4">
              {pharmaFlow.map((step, i) => (
                <li key={step} className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#8b1010] text-sm font-normal text-white shadow-md">
                    {i + 1}
                  </span>
                  <div className="mt-5 w-full rounded-2xl border border-[#fee2e2] bg-[#fef2f2] px-3 py-4">
                    <p className="text-sm font-normal leading-snug text-black">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile: vertical timeline */}
          <ol className="relative mt-8 space-y-0 lg:hidden">
            <div
              className="absolute bottom-4 left-6 top-4 w-px bg-[#fecaca]"
              aria-hidden
            />
            {pharmaFlow.map((step, i) => (
              <li key={step} className="relative flex gap-5 pb-8 last:pb-0">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8b1010] text-sm font-normal text-white shadow-md">
                  {i + 1}
                </span>
                <div className="flex flex-1 items-center rounded-2xl border border-[#fee2e2] bg-[#fef2f2] px-4 py-4">
                  <p className="text-sm font-normal text-black">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ISA-95 levels */}
        <div className="mt-14">
          <div className="text-center">
            <p className="text-xs font-normal tracking-[0.18em] text-black/50">
              ISA-95 architecture
            </p>
            <h3 className="mt-2 text-xl font-normal text-black md:text-2xl">
              Serialization levels — device to enterprise
            </h3>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {levelsAscending.map((lvl, index) => (
              <article
                key={lvl.level}
                className="group relative overflow-hidden rounded-2xl border border-[#fee2e2] bg-white p-6 shadow-sm transition hover:border-[#fecaca] hover:shadow-md"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[#8b1010] transition group-hover:w-1.5" />
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#fef2f2] px-3 py-1 text-[10px] font-normal tracking-wide text-black">
                    {lvl.level}
                  </span>
                  {index < levelsAscending.length - 1 && (
                    <span className="hidden text-black/20 lg:inline" aria-hidden>
                      ↑
                    </span>
                  )}
                </div>
                <h4 className="mt-4 text-lg font-normal text-black">{lvl.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-black/70">{lvl.desc}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-black/50">
            Data flows from Level 1 shop-floor devices up through line, plant, and enterprise systems.
          </p>
        </div>
      </div>
    </section>
  );
}
