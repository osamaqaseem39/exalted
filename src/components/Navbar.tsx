"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";
import ProductsMegaMenu from "@/components/ProductsMegaMenu";

const SCROLL_THRESHOLD = 200;

function NavLink({
  href,
  active,
  floating,
  children,
}: {
  href: string;
  active: boolean;
  floating: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 whitespace-nowrap transition hover:opacity-70 ${
        active ? "text-black underline decoration-[#8b1010] underline-offset-4" : "text-black/70"
      } ${floating ? "px-2 py-1.5 text-xs lg:text-sm" : ""}`}
    >
      {floating && active && (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b1010]" aria-hidden />
      )}
      {children}
    </Link>
  );
}

type NavbarBarProps = {
  floating: boolean;
  pathname: string;
  productsActive: boolean;
  productsOpen: boolean;
  setProductsOpen: (open: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavbarBar({
  floating,
  pathname,
  productsActive,
  productsOpen,
  setProductsOpen,
  mobileOpen,
  setMobileOpen,
}: NavbarBarProps) {
  return (
    <div
      className={`relative flex items-center ${
        floating
          ? "mx-auto w-full max-w-none justify-between px-4 py-3 lg:w-fit lg:max-w-[calc(100%-1.5rem)] lg:justify-center lg:gap-1 lg:rounded-full lg:border lg:border-white/80 lg:bg-white/55 lg:px-5 lg:py-2.5 lg:shadow-[0_12px_40px_rgba(0,0,0,0.14)] lg:backdrop-blur-2xl"
          : "mx-auto w-full max-w-6xl justify-between px-4 py-3 sm:px-6 sm:py-4"
      }`}
    >
      <Logo size="md" className={`shrink-0 ${floating ? "lg:hidden" : ""}`} />

      <nav
        className={`hidden items-center font-normal lg:flex ${
          floating ? "gap-4 xl:gap-6" : "gap-7"
        }`}
      >
        <div className="relative" onMouseEnter={() => setProductsOpen(true)}>
          <Link
            href="/products"
            className={`flex items-center gap-1.5 transition hover:opacity-70 ${
              productsOpen || productsActive
                ? "font-normal text-black underline decoration-[#8b1010] underline-offset-4"
                : "text-black/70"
            } ${floating ? "px-2 py-1.5 text-xs lg:text-sm" : ""}`}
            onClick={() => setProductsOpen(false)}
          >
            {floating && productsActive && (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b1010]" aria-hidden />
            )}
            Products
            <svg
              className={`h-3.5 w-3.5 shrink-0 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        <NavLink
          href="/services"
          active={pathname.startsWith("/services") || pathname === "/sectors"}
          floating={floating}
        >
          Services
        </NavLink>

        <NavLink href="/company" active={pathname === "/company"} floating={floating}>
          Company
        </NavLink>

        <Link
          href="/contact"
          className={`rounded-full font-normal transition ${
            floating ? "px-3 py-1.5 text-xs lg:px-4 lg:py-2 lg:text-sm" : "px-4 py-2 text-sm"
          } ${
            pathname === "/contact"
              ? "bg-[#6e0d0d] text-white"
              : "bg-[#8b1010] text-white hover:bg-[#6e0d0d]"
          }`}
        >
          Contact
        </Link>
      </nav>

      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#fee2e2] text-black transition hover:bg-[#fef2f2] lg:hidden"
      >
        {mobileOpen ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsActive = pathname.startsWith("/products");
  const showFloating = scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      setProductsOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const barProps = {
    pathname,
    productsActive,
    productsOpen,
    setProductsOpen,
    mobileOpen,
    setMobileOpen,
  };

  return (
    <>
      <header
        className="relative z-40 border-b border-[#fee2e2] bg-white/95 backdrop-blur-md"
        onMouseLeave={() => setProductsOpen(false)}
      >
        <NavbarBar floating={false} {...barProps} />
        {productsOpen && !scrolled && (
          <div className="hidden lg:block">
            <ProductsMegaMenu onClose={() => setProductsOpen(false)} />
          </div>
        )}
      </header>

      <header
        className={`fixed left-0 right-0 top-0 z-50 bg-transparent py-2 transition-all duration-300 ease-out lg:py-3 ${
          showFloating
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        onMouseLeave={() => setProductsOpen(false)}
        aria-hidden={!showFloating}
      >
        <NavbarBar floating {...barProps} />
        {productsOpen && scrolled && (
          <div className="hidden lg:block">
            <ProductsMegaMenu onClose={() => setProductsOpen(false)} />
          </div>
        )}
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
