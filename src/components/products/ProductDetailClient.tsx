"use client";

import Image from "next/image";
import Link from "next/link";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSpecList from "@/components/products/ProductSpecList";
import { productTheme } from "@/components/products/productTheme";
import type { Product } from "@/data/products";
import { getProductSpecSections } from "@/data/products";

type ProductDetailClientProps = {
  product: Product;
  related: Product[];
};

function PageAccentBar() {
  return (
    <div className="flex h-1 w-full">
      <div className="flex-1" style={{ backgroundColor: productTheme.barDark }} />
      <div className="w-28" style={{ backgroundColor: productTheme.button }} />
    </div>
  );
}

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-[#e5e5e5] pb-2 text-xs font-normal tracking-[0.14em] text-black">
      {children}
    </h2>
  );
}

export default function ProductDetailClient({ product, related }: ProductDetailClientProps) {
  const sections = getProductSpecSections(product);
  const quoteHref = `/contact?product=${encodeURIComponent(product.title)}`;

  return (
    <div className="bg-white text-black">
      <PageAccentBar />

      <div className="border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-xs text-black">
          <Link href="/products" className="transition hover:opacity-70">
            ← Back to Products
          </Link>
          <span>{product.tag}</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
        <aside className="order-3 lg:order-1 lg:col-span-2">
          <SidebarHeading>Related Products</SidebarHeading>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-2 lg:block lg:space-y-5 lg:overflow-visible lg:pb-0">
            {related.length > 0 ? (
              related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group block w-36 shrink-0 lg:w-auto"
                >
                  <div className="flex aspect-square items-center justify-center border border-[#e5e5e5] bg-white p-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="max-h-full w-auto object-contain transition group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 text-sm font-normal text-black group-hover:opacity-80">{item.title}</p>
                  <span
                    className="mt-2 inline-block px-3 py-1.5 text-[10px] font-normal tracking-wide text-white transition group-hover:opacity-90"
                    style={{ backgroundColor: productTheme.button }}
                  >
                    View Product
                  </span>
                </Link>
              ))
            ) : (
              <p className="text-sm text-black">More products in this category coming soon.</p>
            )}
          </div>
        </aside>

        <div className="order-1 lg:order-2 lg:col-span-5">
          <ProductGallery images={[product.image]} alt={product.title} />
        </div>

        <div className="order-2 lg:order-3 lg:col-span-5">
          <p className="text-sm font-normal text-black">
            Product Name: <span className="text-base font-normal">{product.title}</span>
          </p>
          <p className="mt-1 text-sm text-black">{product.brand}</p>

          <div className="mt-6">
            <ProductSpecList sections={sections} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={quoteHref}
              className="inline-block px-6 py-2.5 text-xs font-normal tracking-wide text-white transition hover:opacity-90"
              style={{ backgroundColor: productTheme.button }}
            >
              Request Quote
            </Link>
            <Link
              href="/products"
              className="inline-block border border-[#cccccc] px-6 py-2.5 text-xs font-normal tracking-wide text-black transition hover:border-black"
            >
              All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
