"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BreadcrumbBar from "@/components/layout/BreadcrumbBar";
import PageAccentBar from "@/components/layout/PageAccentBar";
import PageShell from "@/components/layout/PageShell";
import ProductImageFrame from "@/components/products/ProductImageFrame";
import ProductSpecList from "@/components/products/ProductSpecList";
import { productTheme } from "@/components/products/productTheme";
import {
  getFeaturedProduct,
  getProductSpecSections,
  getProductsByCategory,
  productFilters,
  products,
} from "@/data/products";

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-[#fee2e2] pb-2 text-xs font-normal tracking-[0.14em] text-black">{children}</h2>
  );
}

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const fromSolution = searchParams.get("from") === "solution";

  const { featured, catalogProducts } = useMemo(() => {
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

    if (fromSolution) {
      return { featured: null, catalogProducts: list };
    }

    const featuredProduct = getFeaturedProduct(activeFilter);
    const visibleFeatured =
      featuredProduct && list.some((p) => p.slug === featuredProduct.slug) ? featuredProduct : null;

    const remaining = visibleFeatured ? list.filter((p) => p.slug !== visibleFeatured.slug) : list;

    return { featured: visibleFeatured, catalogProducts: remaining };
  }, [activeFilter, search, fromSolution]);

  const featuredSpecs = featured ? getProductSpecSections(featured).slice(0, 2) : [];

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") ?? "All";
    if (productFilters.includes(categoryFromUrl as (typeof productFilters)[number])) {
      setActiveFilter(categoryFromUrl);
    }
  }, [searchParams]);

  const handleCategoryChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "All") {
      router.replace("/products", { scroll: false });
    } else {
      router.replace(`/products?category=${filter}`, { scroll: false });
    }
  };

  return (
    <PageShell>
      <PageAccentBar />

      {fromSolution && (
        <BreadcrumbBar backHref="/services" backLabel="← Back to Services" trailing={activeFilter !== "All" ? activeFilter : undefined} />
      )}

      <section className="border-b border-[#fee2e2] bg-gradient-to-br from-white via-[#fef2f2] to-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <p className="text-xs font-normal tracking-[0.25em] text-black">
            {fromSolution ? "Related Products" : "Product Catalog"}
          </p>
          <h1 className="mt-3 text-4xl font-normal leading-tight text-black md:text-5xl">
            {fromSolution && activeFilter !== "All" ? `${activeFilter} Equipment` : "Industrial Equipment"}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-black">
            {fromSolution
              ? "Equipment matched to this solution. Select a product for full specifications."
              : "Coding, inspection, detection, and packaging systems from global technology partners."}
          </p>
        </div>
      </section>

      {featured && !fromSolution && (
        <section className="border-b border-[#fee2e2] bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:py-20 lg:grid-cols-12 lg:gap-10">
            <div className="hidden lg:col-span-2 lg:block">
              <SidebarHeading>Featured</SidebarHeading>
              <p className="mt-4 text-sm text-black">
                {activeFilter === "All"
                  ? "Highlighted equipment from our catalog."
                  : `Highlighted ${activeFilter.toLowerCase()} equipment.`}
              </p>
            </div>

            <div className="lg:col-span-5">
              <Link href={`/products/${featured.slug}`} className="group block">
                <ProductImageFrame
                  src={featured.image}
                  alt={featured.title}
                  priority
                  className="border border-[#fee2e2] transition group-hover:opacity-95"
                  imageClassName="transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <p className="text-base font-normal text-black">{featured.title}</p>
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
      )}

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 md:py-20">
        <div className={fromSolution ? "" : "grid gap-8 lg:grid-cols-12"}>
          {!fromSolution && (
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
                      className={`rounded-full border px-3 py-1.5 text-xs font-normal ${
                        activeFilter === filter ? "text-white" : "border-[#fee2e2] text-black"
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
          )}

          <div className={fromSolution ? "" : "lg:col-span-10"}>
            {!fromSolution && (
              <div className="mb-6 flex flex-col gap-3 border-b border-[#fee2e2] pb-4 sm:flex-row sm:items-center sm:justify-between">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-[#fee2e2] bg-white px-4 py-2 text-sm text-black placeholder:text-black/40 outline-none focus:border-[#8b1010] sm:max-w-sm"
                />
                <p className="text-xs text-black">
                  {catalogProducts.length} result{catalogProducts.length !== 1 ? "s" : ""}
                </p>
              </div>
            )}

            {fromSolution && (
              <p className="mb-6 text-xs text-black/60">
                {catalogProducts.length} product{catalogProducts.length !== 1 ? "s" : ""} for this solution
              </p>
            )}

            <div className={fromSolution ? "grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6" : "space-y-10"}>
              {catalogProducts.map((product) => {
                if (fromSolution) {
                  return (
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
                        <h2 className="text-base !font-semibold text-black">{product.title}</h2>
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
                  );
                }

                const previewSections = getProductSpecSections(product).slice(0, 2);
                return (
                  <article
                    key={product.slug}
                    className="grid gap-6 border-b border-[#fee2e2] pb-10 lg:grid-cols-12 lg:gap-8"
                  >
                    <div className="lg:col-span-4">
                      <Link href={`/products/${product.slug}`} className="group block">
                        <ProductImageFrame
                          src={product.image}
                          alt={product.title}
                          className="border border-[#fee2e2]"
                          imageClassName="transition duration-300 group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="lg:col-span-8">
                      <p className="text-base font-normal text-black">{product.title}</p>
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

            {catalogProducts.length === 0 && !featured && (
              <div className="border border-[#fee2e2] py-16 text-center">
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
    </PageShell>
  );
}
