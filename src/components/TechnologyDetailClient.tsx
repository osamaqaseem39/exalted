"use client";

import Link from "next/link";
import TechnologyIcon from "@/components/TechnologyIcons";
import BreadcrumbBar from "@/components/layout/BreadcrumbBar";
import PageAccentBar from "@/components/layout/PageAccentBar";
import { productTheme } from "@/components/products/productTheme";
import ProductImageFrame from "@/components/products/ProductImageFrame";
import type { Product } from "@/data/products";
import type { Solution } from "@/data/solutions";
import type { Technology } from "@/data/technologies";

type TechnologyDetailClientProps = {
  technology: Technology;
  relatedProducts: Product[];
  relatedSolutions: Solution[];
};

export default function TechnologyDetailClient({
  technology,
  relatedProducts,
  relatedSolutions,
}: TechnologyDetailClientProps) {
  const quoteHref = `/contact?technology=${encodeURIComponent(technology.slug)}`;

  return (
    <div className="bg-white text-black">
      <PageAccentBar />

      <BreadcrumbBar
        backHref="/technologies"
        backLabel="← Back to Technologies"
        trailing="Technology"
      />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_minmax(260px,340px)] lg:gap-10">
          <div>
            <p className="text-xs font-normal tracking-[0.25em] text-black">Technology</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-normal leading-tight text-black md:text-4xl lg:text-5xl">
              {technology.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/75 md:text-lg">
              {technology.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={quoteHref}
                className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
              >
                Request Consultation
              </Link>
              {relatedProducts.length > 0 && (
                <a
                  href="#related-products"
                  className="rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
                >
                  View Related Products
                </a>
              )}
            </div>
          </div>

          {relatedProducts[0]?.image ? (
            <ProductImageFrame
              src={relatedProducts[0].image}
              alt={technology.title}
              priority
              className="rounded-2xl border border-[#fee2e2] shadow-sm lg:justify-self-end"
              sizes="(max-width: 1024px) 100vw, 340px"
            />
          ) : (
            <div className="flex aspect-square w-full max-w-[340px] items-center justify-center rounded-2xl border border-[#fee2e2] bg-[#fafafa] p-8 text-black shadow-sm lg:justify-self-end">
              <TechnologyIcon slug={technology.slug} className="h-24 w-24" />
            </div>
          )}
        </div>
      </div>

      <div className="border-y border-[#fee2e2] bg-[#fafafa]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="text-xl font-normal text-black">Overview</h2>
            <div className="mt-4 h-px w-12 bg-[#fee2e2]" />
            <p className="mt-5 text-sm leading-relaxed text-black/80 md:text-base">{technology.overview}</p>
          </div>
          <div>
            <h2 className="text-xl font-normal text-black">Key features</h2>
            <div className="mt-4 h-px w-12 bg-[#fee2e2]" />
            <ul className="mt-5 space-y-3">
              {technology.features.map((feature) => (
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
              {technology.applications.map((application) => (
                <li key={application} className="flex items-start gap-2 text-sm text-black/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" aria-hidden />
                  {application}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-normal text-black">Industries served</h2>
            <div className="mt-4 h-px w-12 bg-[#fee2e2]" />
            <div className="mt-5 flex flex-wrap gap-2">
              {technology.industries.map((industry) => (
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

      {relatedSolutions.length > 0 && (
        <div className="border-t border-[#fee2e2] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
            <h2 className="text-2xl font-normal text-black">Related solutions</h2>
            <p className="mt-2 text-sm text-black/65">
              Broader service areas that include this technology.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedSolutions.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/services/${solution.slug}`}
                  className="rounded-2xl border border-[#fee2e2] bg-[#fafafa] p-5 transition hover:-translate-y-0.5 hover:border-[#fecaca] hover:shadow-md"
                >
                  <h3 className="text-base font-normal text-black">{solution.title}</h3>
                  <p className="mt-2 text-sm text-black/65">{solution.shortDescription}</p>
                  <span className="mt-3 inline-block text-xs text-black">View solution →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div id="related-products" className="scroll-mt-24 border-t border-[#fee2e2] bg-[#fef2f2]">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
            <h2 className="text-2xl font-normal text-black">Related products</h2>
            <p className="mt-2 text-sm text-black/65">
              Equipment matched to this technology. Select a product for full specifications.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {relatedProducts.map((product) => (
                <article
                  key={product.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#fee2e2] bg-white shadow-sm transition hover:border-[#fecaca] hover:shadow-md"
                >
                  <Link href={`/products/${product.slug}`} className="group block">
                    <ProductImageFrame
                      src={product.image}
                      alt={product.title}
                      className="border-b border-[#fee2e2] bg-[#fafafa]"
                      imageClassName="transition duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base !font-semibold text-black">{product.title}</h3>
                    <p className="mt-1 text-xs text-black/60">
                      {product.brand} · {product.tag}
                    </p>
                    <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-black/70">
                      {product.description}
                    </p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-4 inline-block w-fit rounded-full px-5 py-2 text-xs font-normal text-white transition hover:opacity-90"
                      style={{ backgroundColor: productTheme.button }}
                    >
                      View Product
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-[#fee2e2] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center md:py-14">
          <h2 className="text-2xl font-normal text-black">Ready to discuss this technology?</h2>
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
