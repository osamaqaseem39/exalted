"use client";

import Image from "next/image";
import Link from "next/link";
import BreadcrumbBar from "@/components/layout/BreadcrumbBar";
import PageAccentBar from "@/components/layout/PageAccentBar";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSpecList from "@/components/products/ProductSpecList";
import { productTheme } from "@/components/products/productTheme";
import type { Product } from "@/data/products";
import { getProductSpecSections } from "@/data/products";

type ProductDetailClientProps = {
  product: Product;
  related: Product[];
};

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-[#fee2e2] pb-2 text-xs font-normal tracking-[0.14em] text-black">{children}</h2>
  );
}

export default function ProductDetailClient({ product, related }: ProductDetailClientProps) {
  const sections = getProductSpecSections(product);
  const quoteHref = `/contact?product=${encodeURIComponent(product.slug)}`;

  return (
    <div className="bg-white text-black">
      <PageAccentBar />

      <BreadcrumbBar backHref="/products" backLabel="← Back to Products" trailing={product.tag} />

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:py-20 lg:grid-cols-12 lg:gap-10">
        <aside className="order-3 lg:order-1 lg:col-span-2">
          <SidebarHeading>Related Products</SidebarHeading>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-2 lg:block lg:space-y-5 lg:overflow-visible lg:pb-0">
            {related.length > 0 ? (
              related.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`} className="group block w-36 shrink-0 lg:w-auto">
                  <div className="flex aspect-square items-center justify-center border border-[#fee2e2] bg-white p-3">
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
                    className="mt-2 inline-block rounded-full px-3 py-1.5 text-[10px] font-normal tracking-wide text-white transition group-hover:opacity-90"
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
          <p className="text-xs font-normal tracking-[0.25em] text-black">{product.tag}</p>
          <h1 className="mt-3 text-3xl font-normal leading-tight text-black md:text-4xl">{product.title}</h1>
          <p className="mt-2 text-sm text-black/70">{product.brand}</p>

          <div className="mt-6">
            <ProductSpecList sections={sections} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={quoteHref}
              className="rounded-full px-6 py-2.5 text-sm font-normal text-white transition hover:opacity-90"
              style={{ backgroundColor: productTheme.button }}
            >
              Request Quote
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-[#fecaca] px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
            >
              All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
