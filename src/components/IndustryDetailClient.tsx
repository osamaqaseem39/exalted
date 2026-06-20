"use client";

import Image from "next/image";
import Link from "next/link";
import type { Industry } from "@/data/industries";
import { getProductBySlug } from "@/data/products";
import { getSolutionBySlug } from "@/data/solutions";

type IndustryDetailClientProps = {
  industry: Industry;
  others: Industry[];
};

export default function IndustryDetailClient({ industry, others }: IndustryDetailClientProps) {
  const products = industry.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is NonNullable<ReturnType<typeof getProductBySlug>> => Boolean(product));

  const solutions = industry.solutionSlugs
    .map((slug) => getSolutionBySlug(slug))
    .filter((solution): solution is NonNullable<ReturnType<typeof getSolutionBySlug>> => Boolean(solution));

  return (
    <div className="bg-white text-black">
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-black" />
        <div className="w-28 bg-[#8b1010]" />
      </div>

      <div className="border-b border-[#fee2e2] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs text-black">
          <Link href="/#industries-section" className="transition hover:opacity-70">
            ← Back to Industries
          </Link>
          <span className="text-black/60">Industry sector</span>
        </div>
      </div>

      <section className="border-b border-[#fee2e2] bg-gradient-to-br from-white via-[#fef2f2] to-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <p className="text-xs font-normal tracking-[0.2em] text-black/50">Industry</p>
            <h1 className="mt-3 text-4xl font-normal leading-tight text-black md:text-5xl">
              {industry.name}
            </h1>
            <p className="mt-4 text-lg text-black/80">{industry.headline}</p>
            <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base">
              {industry.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/contact?industry=${encodeURIComponent(industry.name)}`}
                className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
              >
                Request Consultation
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
              >
                Browse Products
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#fee2e2] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <Image
              src={industry.heroImage}
              alt={industry.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-2xl font-normal text-black md:text-3xl">Overview</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75">{industry.overview}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {industry.highlights.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-[#fee2e2] bg-[#fef2f2] px-4 py-3 text-sm text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-[#fee2e2] bg-[#fafafa] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-normal text-black md:text-3xl">Solutions for {industry.name}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/services/${solution.slug}`}
                className="rounded-2xl border border-[#fee2e2] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#fecaca] hover:shadow-md"
              >
                <h3 className="text-base font-normal text-black">{solution.title}</h3>
                <p className="mt-2 text-sm text-black/65">{solution.shortDescription}</p>
                <span className="mt-3 inline-block text-xs text-black">View solution →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-2xl font-normal text-black md:text-3xl">Equipment & applications</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.gallery.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border border-[#fee2e2] bg-white shadow-sm"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <figcaption className="border-t border-[#fee2e2] p-3 text-xs text-black/70">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-[#fee2e2] bg-[#f4f6f8] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-normal text-black md:text-3xl">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-[#fee2e2] bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-square bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-normal text-black">{product.title}</h3>
                  <span className="mt-2 inline-block text-xs text-black/60">View product →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-xl font-normal text-black md:text-2xl">Other industries</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/industries/${other.slug}`}
              className="rounded-full border border-[#fee2e2] bg-[#fef2f2] px-4 py-2 text-sm text-black transition hover:border-[#fecaca] hover:bg-[#fee2e2]"
            >
              {other.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
