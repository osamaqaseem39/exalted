"use client";

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
};

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const sections = getProductSpecSections(product);
  const quoteHref = `/contact?product=${encodeURIComponent(product.slug)}`;

  return (
    <div className="bg-white text-black">
      <PageAccentBar />

      <BreadcrumbBar backHref="/products" backLabel="← Back to Products" trailing={product.tag} />

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:py-20 lg:grid-cols-2 lg:gap-10">
        <div>
          <ProductGallery images={[product.image]} alt={product.title} />
        </div>

        <div>
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
