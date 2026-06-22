"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { productFilters, products } from "@/data/products";

const INITIAL_VISIBLE = 6;
const LOAD_MORE_COUNT = 6;

export default function HomeProductsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [gridTick, setGridTick] = useState(0);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") return products;
    return products.filter((product) => product.tag === activeFilter);
  }, [activeFilter]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleFilterClick = (filter: string) => {
    if (filter === activeFilter) return;
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE);
    setGridTick((tick) => tick + 1);
  };

  const handleViewMore = () => {
    setVisibleCount((count) => Math.min(count + LOAD_MORE_COUNT, filteredProducts.length));
  };

  return (
    <section id="products-section" className="border-t border-[#fee2e2] bg-[#fafafa] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-black md:text-4xl">Products</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#fee2e2]" />

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-4">
            {productFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleFilterClick(filter)}
                  className={`product-filter-btn relative overflow-hidden rounded-full px-6 py-3 text-sm font-normal transition-all duration-300 md:px-8 md:py-3.5 md:text-base ${
                    isActive
                      ? "scale-105 bg-[#8b1010] text-white shadow-[0_8px_24px_rgba(139,16,16,0.28)]"
                      : "border border-[#fee2e2] bg-white text-black hover:border-[#fecaca] hover:bg-[#fef2f2] active:scale-95"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="relative z-10">{filter}</span>
                  {isActive && (
                    <span className="product-filter-ripple absolute inset-0 bg-white/20" aria-hidden />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={`${activeFilter}-${gridTick}`}
          className="product-grid-animate mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {visibleProducts.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="product-card-item group overflow-hidden rounded-3xl border border-[#fee2e2] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[#fecaca] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-[#fef2f2] p-5 md:p-6">
                <h3 className="text-lg font-normal leading-snug text-black md:text-xl">{product.title}</h3>
                <span className="mt-4 inline-block text-sm font-normal text-black transition group-hover:translate-x-1">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center md:mt-12">
            <button
              type="button"
              onClick={handleViewMore}
              className="inline-flex items-center gap-2 rounded-full bg-[#8b1010] px-8 py-3 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
            >
              View more
              <span aria-hidden>↓</span>
            </button>
            <p className="mt-3 text-xs text-black/50">
              Showing {visibleProducts.length} of {filteredProducts.length} products
            </p>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <p className="py-16 text-center text-base text-black/70">No products in this category yet.</p>
        )}
      </div>
    </section>
  );
}
