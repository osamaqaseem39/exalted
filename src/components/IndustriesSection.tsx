"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BeverageIcon,
  FoodIcon,
  IndustrialIcon,
  LifeSciencesIcon,
  PersonalCareIcon,
  TobaccoIcon,
} from "@/components/IndustryIcons";
import { industries } from "@/data/industries";

const iconMap = {
  beverage: BeverageIcon,
  food: FoodIcon,
  "life-sciences": LifeSciencesIcon,
  tobacco: TobaccoIcon,
  industrial: IndustrialIcon,
  "personal-care": PersonalCareIcon,
} as const;

export default function IndustriesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="industries-section" className="scroll-mt-24 bg-[#f4f6f8] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-4xl font-normal text-black md:text-5xl">Industries</h3>
        <div className="mx-auto mt-4 h-px w-20 bg-[#fee2e2]" />
        <p className="mx-auto mt-8 max-w-3xl text-lg text-black md:text-xl">
          Find industry-specific coding and marking setups built for speed, compliance, and reliability.
        </p>

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-start justify-center gap-x-10 gap-y-12 md:gap-x-14 lg:gap-x-16">
          {industries.map((industry) => {
            const Icon = iconMap[industry.slug as keyof typeof iconMap];
            const isActive = active === industry.slug;

            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                onMouseEnter={() => setActive(industry.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(industry.slug)}
                onBlur={() => setActive(null)}
                className="group flex min-w-[88px] flex-col items-center"
              >
                <div className="flex h-16 items-end justify-center md:h-[72px]">
                  <Icon />
                </div>
                <span
                  className={`mt-4 block text-sm font-normal text-[#1e293b] transition md:text-[15px] ${
                    isActive ? "opacity-100" : "opacity-90"
                  }`}
                >
                  {industry.name}
                </span>
                <span
                  className={`mt-2 block h-[3px] rounded-full bg-[#1e293b] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>

        <Link
          href="/industries"
          className="mt-12 inline-block rounded-xl border border-[#fecaca] bg-white px-8 py-3 text-lg text-black transition hover:bg-[#fef2f2]"
        >
          All Industry Solutions
        </Link>
      </div>
    </section>
  );
}
