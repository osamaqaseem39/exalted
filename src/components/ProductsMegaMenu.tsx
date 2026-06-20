"use client";

import Image from "next/image";
import Link from "next/link";
import {
  getFeaturedProduct,
  productCategories,
  products,
} from "@/data/products";

type ProductsMegaMenuProps = {
  onClose: () => void;
};

export default function ProductsMegaMenu({ onClose }: ProductsMegaMenuProps) {
  const featured = getFeaturedProduct();

  return (
    <div className="absolute left-0 right-0 top-full z-50 -mt-1 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#fee2e2] bg-white/98 pt-2 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6 flex flex-col gap-4 border-b border-[#fee2e2] pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-normal text-black">Product catalog</p>
            <p className="mt-1 text-sm text-black/70">
              Browse by category or explore our full industrial equipment range.
            </p>
          </div>
          <Link
            href="/products"
            onClick={onClose}
            className="hidden shrink-0 rounded-full bg-[#8b1010] px-5 py-2 text-xs font-normal tracking-wide text-white transition hover:bg-[#6e0d0d] sm:inline-block"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {productCategories.map((cat) => {
              const categoryProducts = products.filter((p) => p.tag === cat.id);
              return (
                <div key={cat.id}>
                  <Link
                    href={cat.href}
                    onClick={onClose}
                    className="group block"
                  >
                    <h3 className="text-sm font-normal tracking-wide text-black group-hover:opacity-70">
                      {cat.label}
                    </h3>
                  </Link>
                  <p className="mt-1 text-[10px] font-normal leading-relaxed tracking-wide text-black/60">
                    {cat.description}
                  </p>
                  <ul className="mt-3 space-y-2 border-t border-[#fef2f2] pt-3">
                    {categoryProducts.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={onClose}
                          className="block text-sm text-black transition hover:opacity-70"
                        >
                          {product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-[#fee2e2] lg:pl-8">
            <p className="text-[11px] font-normal text-black">Featured product</p>
            <Link
              href={`/products/${featured.slug}`}
              onClick={onClose}
              className="group mt-4 block overflow-hidden rounded-2xl border border-[#fee2e2] bg-[#fef2f2]"
            >
              <div className="flex h-44 items-center justify-center bg-white p-4">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={280}
                  height={180}
                  className="max-h-full w-auto object-contain transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-normal text-black/60">{featured.brand}</p>
                <p className="mt-1 font-normal text-black">{featured.title}</p>
                <p className="mt-2 line-clamp-2 text-sm text-black/70">{featured.description}</p>
                <span className="mt-4 inline-block rounded-full bg-[#8b1010] px-4 py-2 text-[11px] font-normal tracking-wide text-white transition group-hover:bg-[#6e0d0d]">
                  View Product →
                </span>
              </div>
            </Link>
          </aside>
        </div>

        <div className="mt-6 border-t border-[#fee2e2] pt-4 sm:hidden">
          <Link
            href="/products"
            onClick={onClose}
            className="block rounded-full bg-[#8b1010] py-3 text-center text-xs font-normal tracking-wide text-white transition hover:bg-[#6e0d0d]"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </div>
  );
}
