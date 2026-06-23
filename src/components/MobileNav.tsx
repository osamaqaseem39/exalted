"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { productCategories, products } from "@/data/products";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

export default function MobileNav({ open, onClose, pathname }: MobileNavProps) {
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setProductsExpanded(false);
      setExpandedCategory(null);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <nav className="fixed left-0 right-0 top-[4.5rem] z-40 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-[#fee2e2] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] lg:hidden">
      <div className="px-4 py-4">
        <button
          type="button"
          onClick={() => setProductsExpanded((prev) => !prev)}
          className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-normal transition ${
            pathname.startsWith("/products") ? "bg-[#fef2f2] text-black" : "text-black"
          }`}
        >
          Products
          <svg
            className={`h-4 w-4 transition-transform ${productsExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {productsExpanded && (
          <div className="mt-2 space-y-2 rounded-xl border border-[#fee2e2] bg-[#fef2f2] p-3">
            <Link
              href="/products"
              onClick={onClose}
              className="block rounded-lg bg-white px-3 py-2.5 text-sm font-normal text-black"
            >
              View All Products
            </Link>
            {productCategories.map((cat) => {
              const categoryProducts = products.filter((p) => p.tag === cat.id);
              const isOpen = expandedCategory === cat.id;
              return (
                <div key={cat.id} className="rounded-lg bg-white">
                  <button
                    type="button"
                    onClick={() => setExpandedCategory(isOpen ? null : cat.id)}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-left text-xs font-normal tracking-wide text-black"
                  >
                    {cat.label}
                    <svg
                      className={`h-3.5 w-3.5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <ul className="space-y-1 border-t border-[#fee2e2] px-3 py-2">
                      <li>
                        <Link
                          href={cat.href}
                          onClick={onClose}
                          className="block py-1.5 text-xs font-normal text-black"
                        >
                          All {cat.label}
                        </Link>
                      </li>
                      {categoryProducts.map((product) => (
                        <li key={product.slug}>
                          <Link
                            href={`/products/${product.slug}`}
                            onClick={onClose}
                            className="block py-1.5 text-sm text-black/80"
                          >
                            {product.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-2 space-y-1">
          {[
            { href: "/services", label: "Services", active: pathname.startsWith("/services") || pathname === "/sectors" },
            { href: "/company", label: "Company", active: pathname === "/company" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`block rounded-xl px-4 py-3 text-sm font-normal transition ${
                item.active ? "bg-[#fef2f2] text-black" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-4 block rounded-full bg-[#8b1010] py-3 text-center text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
