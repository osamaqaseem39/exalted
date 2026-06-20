"use client";

import Link from "next/link";
import type { Solution } from "@/data/solutions";

type SolutionDetailClientProps = {
  solution: Solution;
  related: Solution[];
};

export default function SolutionDetailClient({ solution, related }: SolutionDetailClientProps) {
  const quoteHref = `/contact?solution=${encodeURIComponent(solution.title)}`;
  const productsHref = solution.productCategory
    ? `/products?category=${encodeURIComponent(solution.productCategory)}`
    : solution.slug === "track-trace"
      ? "/company#pharma-track-trace"
      : "/products";

  return (
    <div className="bg-white text-black">
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-black" />
        <div className="w-28 bg-[#8b1010]" />
      </div>

      <div className="border-b border-[#fee2e2] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs text-black">
          <Link href="/services" className="transition hover:opacity-70">
            ← Back to Services
          </Link>
          <span className="text-black/60">{solution.productCategoryLabel ?? "Solution"}</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <p className="text-xs font-normal tracking-[0.2em] text-black/50">Solution</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-normal leading-tight text-black md:text-4xl lg:text-5xl">
          {solution.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/75 md:text-lg">
          {solution.shortDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={quoteHref}
            className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
          >
            Request Consultation
          </Link>
          <Link
            href={productsHref}
            className="rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
          >
            View Related Products
          </Link>
        </div>
      </div>

      <div className="border-y border-[#fee2e2] bg-[#fafafa]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="text-xl font-normal text-black">Overview</h2>
            <div className="mt-4 h-px w-12 bg-[#fee2e2]" />
            <p className="mt-5 text-sm leading-relaxed text-black/80 md:text-base">{solution.overview}</p>
          </div>
          <div>
            <h2 className="text-xl font-normal text-black">Key features</h2>
            <div className="mt-4 h-px w-12 bg-[#fee2e2]" />
            <ul className="mt-5 space-y-3">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-black/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b1010]" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-normal text-black">Applications</h2>
            <div className="mt-4 h-px w-12 bg-[#fee2e2]" />
            <ul className="mt-5 space-y-3">
              {solution.applications.map((app) => (
                <li key={app} className="flex items-start gap-2 text-sm text-black/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" aria-hidden />
                  {app}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-normal text-black">Industries served</h2>
            <div className="mt-4 h-px w-12 bg-[#fee2e2]" />
            <div className="mt-5 flex flex-wrap gap-2">
              {solution.industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-[#fee2e2] bg-[#fef2f2] px-3 py-1.5 text-xs font-normal text-black"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="border-t border-[#fee2e2] bg-[#fef2f2]">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
            <h2 className="text-2xl font-normal text-black">Related Solutions</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-2xl border border-[#fee2e2] bg-white p-5 transition hover:border-[#fecaca] hover:shadow-md"
                >
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#8b1010]" />
                  <h3 className="mt-3 text-sm font-normal leading-snug text-black group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-black/65">{item.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-[#fee2e2] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center md:py-14">
          <h2 className="text-2xl font-normal text-black">Ready to discuss this solution?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-black/70">
            Our sales engineers will assess your line and recommend the right configuration.
          </p>
          <Link
            href={quoteHref}
            className="mt-6 inline-block rounded-full bg-[#8b1010] px-8 py-3 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
          >
            Contact Exalted
          </Link>
        </div>
      </div>
    </div>
  );
}
