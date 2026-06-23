"use client";

import Link from "next/link";
import { useState } from "react";
import TechnologyIcon from "@/components/TechnologyIcons";
import { technologies } from "@/data/technologies";

export default function TechnologiesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="technologies-section"
      data-reveal
      className="translate-y-8 border-t border-[#fee2e2] bg-[#fafafa] py-16 opacity-0 transition-all duration-700 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-normal text-black md:text-4xl">Technologies</h2>
        <div className="mx-auto mt-4 h-px w-16 bg-[#fee2e2]" />
        <p className="mx-auto mt-5 max-w-2xl text-base text-black/80">
          Talk to us to find the right solution for your industry&apos;s printing and marking needs.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-y-12">
          {technologies.map((tech) => (
            <Link
              key={tech.slug}
              href={`/technologies/${tech.slug}`}
              className="group flex flex-col items-center gap-4 px-2"
              onMouseEnter={() => setActive(tech.slug)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(tech.slug)}
              onBlur={() => setActive(null)}
            >
              <div className="flex h-16 w-16 items-center justify-center text-black transition group-hover:scale-105">
                <TechnologyIcon slug={tech.slug} />
              </div>
              <span
                className={`text-sm font-normal leading-snug text-black transition ${
                  active === tech.slug ? "underline decoration-black underline-offset-4" : ""
                } group-hover:underline group-hover:decoration-black group-hover:underline-offset-4`}
              >
                {tech.title}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/technologies"
          className="mt-12 inline-block rounded-xl border border-[#fecaca] bg-white px-8 py-3 text-lg text-black transition hover:bg-[#fef2f2]"
        >
          All Technologies
        </Link>
      </div>
    </section>
  );
}
