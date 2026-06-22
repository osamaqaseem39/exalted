"use client";

import Link from "next/link";
import { useState } from "react";

type Technology = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

function GearIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <circle cx="24" cy="24" r="6" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.5 9.5l4.2 4.2M34.3 34.3l4.2 4.2M9.5 38.5l4.2-4.2M34.3 13.7l4.2-4.2" />
      <path d="M14 24a10 10 0 0 0 20 0" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <path d="M8 16l16-8 16 8v20l-16 8-16-8V16z" />
      <path d="M24 8v40M8 16l16 8 16-8" />
    </svg>
  );
}

function ScannerIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <rect x="10" y="14" width="28" height="24" rx="2" />
      <circle cx="24" cy="26" r="7" />
      <path d="M6 20h4M38 20h4M6 32h4M38 32h4" />
    </svg>
  );
}

function LaserModuleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <rect x="6" y="18" width="36" height="16" rx="2" />
      <path d="M14 26h8M26 26h8" />
      <path d="M42 26h4M2 26h4" />
      <circle cx="24" cy="26" r="2" fill="currentColor" />
    </svg>
  );
}

function InkjetIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <rect x="8" y="10" width="20" height="28" rx="2" />
      <rect x="12" y="14" width="12" height="8" rx="1" />
      <path d="M28 22h8v8l6 4v4H28v-16z" />
      <path d="M14 30h8M14 34h6" />
    </svg>
  );
}

function PackagesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <rect x="6" y="20" width="14" height="14" />
      <rect x="22" y="14" width="12" height="12" />
      <path d="M34 18v16a4 4 0 0 1-4 4H18" />
      <path d="M10 20V12a4 4 0 0 1 4-4h10" />
    </svg>
  );
}

function LargePrinterIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <rect x="6" y="8" width="36" height="24" rx="2" />
      <rect x="10" y="12" width="16" height="10" rx="1" />
      <path d="M6 32h36v8H6z" />
      <path d="M14 36h20" />
    </svg>
  );
}

function TijIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <rect x="8" y="12" width="32" height="20" rx="2" />
      <rect x="12" y="16" width="14" height="8" rx="1" />
      <rect x="10" y="36" width="28" height="4" rx="1" />
      <path d="M30 20h6M30 24h4" />
    </svg>
  );
}

function ThermalTransferIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <rect x="10" y="10" width="28" height="28" rx="2" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 16v16M16 24h16" />
      <path d="M20 20l8 8M28 20l-8 8" strokeLinecap="round" />
    </svg>
  );
}

const technologies: Technology[] = [
  { name: "Automation", href: "/services", icon: <GearIcon /> },
  { name: "Case & Pallet Labelling", href: "/products?category=Labelling", icon: <BoxIcon /> },
  { name: "Code Verification", href: "/products?category=Inspection", icon: <ScannerIcon /> },
  { name: "CO2 Lasers", href: "/products?category=Printing", icon: <LaserModuleIcon /> },
  { name: "Continuous Inkjet", href: "/products?category=Printing", icon: <InkjetIcon /> },
  { name: "Digital Printing", href: "/products?category=Printing", icon: <PackagesIcon /> },
  { name: "Fibre Lasers", href: "/products?category=Printing", icon: <LaserModuleIcon /> },
  { name: "Large Character Printing", href: "/products?category=Printing", icon: <LargePrinterIcon /> },
  { name: "Thermal Inkjet", href: "/products?category=Printing", icon: <TijIcon /> },
  { name: "Thermal Transfer", href: "/products?category=Printing", icon: <ThermalTransferIcon /> },
];

export default function TechnologiesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="technologies-section"
      data-reveal
      className="translate-y-8 border-t border-[#fee2e2] bg-[#fafafa] py-16 opacity-0 transition-all duration-700 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-normal text-black md:text-4xl">Technologies</h2>
        <div className="mx-auto mt-4 h-px w-16 bg-[#fee2e2]" />
        <p className="mx-auto mt-5 max-w-2xl text-base text-black/80">
          Talk to us to find the right solution for your industry&apos;s printing and marking needs.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-y-12">
          {technologies.map((tech) => (
            <Link
              key={tech.name}
              href={tech.href}
              className="group flex flex-col items-center gap-4 px-2"
              onMouseEnter={() => setActive(tech.name)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(tech.name)}
              onBlur={() => setActive(null)}
            >
              <div className="flex h-16 w-16 items-center justify-center text-black transition group-hover:scale-105">
                {tech.icon}
              </div>
              <span
                className={`text-sm font-normal leading-snug text-black transition ${
                  active === tech.name ? "underline decoration-black underline-offset-4" : ""
                } group-hover:underline group-hover:decoration-black group-hover:underline-offset-4`}
              >
                {tech.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
