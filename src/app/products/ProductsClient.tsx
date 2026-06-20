"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import ProductSpecList from "@/components/products/ProductSpecList";
import { productTheme } from "@/components/products/productTheme";
import {
  getFeaturedProduct,
  getProductSpecSections,
  getProductsByCategory,
  productFilters,
  products,
} from "@/data/products";

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

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const featured = getFeaturedProduct();
  const featuredSpecs = getProductSpecSections(featured).slice(0, 2);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") ?? "All";
    if (productFilters.includes(categoryFromUrl as (typeof productFilters)[number])) {
      setActiveFilter(categoryFromUrl);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = getProductsByCategory(activeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeFilter, search]);

  const handleCategoryChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "All") {
      router.replace("/products", { scroll: false });
    } else {
      router.replace(`/products?category=${filter}`, { scroll: false });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <PageAccentBar />

      <section className="border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
          <p className="text-xs font-normal tracking-[0.14em] text-black">
            Product Catalog
          </p>
          <h1 className="mt-2 text-2xl font-normal text-black md:text-3xl">
            Industrial Equipment
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-black">
            Coding, inspection, detection, and packaging systems from global technology partners.
          </p>
        </div>
      </section>

      <section className="border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 py-8 lg:grid-cols-12 lg:gap-10">
          <div className="hidden lg:col-span-2 lg:block">
            <SidebarHeading>Featured</SidebarHeading>
            <p className="mt-4 text-sm text-black">Highlighted equipment from our catalog.</p>
          </div>

          <div className="lg:col-span-5">
            <Link href={`/products/${featured.slug}`} className="group block">
              <div className="flex min-h-[280px] items-center justify-center border border-[#e5e5e5] bg-white p-6">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={480}
                  height={380}
                  className="max-h-[260px] w-auto object-contain transition group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm font-normal text-black">
              Product Name:{" "}
              <span className="text-base">{featured.title}</span>
            </p>
            <p className="mt-1 text-sm text-black">{featured.brand}</p>
            <div className="mt-5">
              <ProductSpecList sections={featuredSpecs} compact />
            </div>
            <Link
              href={`/products/${featured.slug}`}
              className="mt-6 inline-block px-5 py-2 text-xs font-normal tracking-wide text-white transition hover:opacity-90"
              style={{ backgroundColor: productTheme.button }}
            >
              View Product
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <SidebarHeading>Categories</SidebarHeading>
              <ul className="mt-4 hidden space-y-1 lg:block">
                {productFilters.map((filter) => {
                  const count =
                    filter === "All" ? products.length : products.filter((p) => p.tag === filter).length;
                  const active = activeFilter === filter;
                  return (
                    <li key={filter}>
                      <button
                        onClick={() => handleCategoryChange(filter)}
                        className={`flex w-full items-center justify-between py-2 text-left text-sm transition ${
                          active ? "font-normal text-black" : "font-normal text-black hover:opacity-70"
                        }`}
                      >
                        <span>{filter}</span>
                        <span className="text-xs">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap gap-2 lg:hidden">
                {productFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleCategoryChange(filter)}
                    className={`rounded border px-3 py-1.5 text-xs font-normal ${
                      activeFilter === filter ? "text-white" : "border-[#e5e5e5] text-black"
                    }`}
                    style={
                      activeFilter === filter
                        ? { borderColor: productTheme.button, backgroundColor: productTheme.button }
                        : undefined
                    }
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-10">
            <div className="mb-6 flex flex-col gap-3 border-b border-[#e5e5e5] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-[#e5e5e5] bg-white px-4 py-2 text-sm text-black placeholder:text-black/40 outline-none focus:border-[#8b1010] sm:max-w-sm"
              />
              <p className="text-xs text-black">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
            </div>

            <div className="space-y-10">
              {filtered.map((product) => {
                const previewSections = getProductSpecSections(product).slice(0, 2);
                return (
                  <article
                    key={product.slug}
                    className="grid gap-6 border-b border-[#eeeeee] pb-10 lg:grid-cols-12 lg:gap-8"
                  >
                    <div className="lg:col-span-4">
                      <Link href={`/products/${product.slug}`} className="group block">
                        <div className="flex min-h-[220px] items-center justify-center border border-[#e5e5e5] bg-white p-5">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={280}
                            height={220}
                            className="max-h-[200px] w-auto object-contain transition group-hover:scale-105"
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="lg:col-span-8">
                      <p className="text-sm font-normal text-black">
                        Product Name:{" "}
                        <span className="text-base">{product.title}</span>
                      </p>
                      <p className="mt-1 text-sm text-black">
                        {product.brand} · {product.tag}
                      </p>
                      <div className="mt-4">
                        <ProductSpecList sections={previewSections} compact />
                      </div>
                      <Link
                        href={`/products/${product.slug}`}
                        className="mt-5 inline-block px-5 py-2 text-xs font-normal tracking-wide text-white transition hover:opacity-90"
                        style={{ backgroundColor: productTheme.button }}
                      >
                        View Product
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="border border-[#e5e5e5] py-16 text-center">
                <p className="text-black">No products match your search.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    handleCategoryChange("All");
                  }}
                  className="mt-4 text-sm font-normal text-black underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
