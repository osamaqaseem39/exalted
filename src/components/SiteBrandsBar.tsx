"use client";

import { usePathname } from "next/navigation";
import BrandsSection from "@/components/BrandsSection";

const embeddedBrandPaths = ["/", "/company", "/services"];

export default function SiteBrandsBar() {
  const pathname = usePathname();

  if (embeddedBrandPaths.includes(pathname)) {
    return null;
  }

  return <BrandsSection />;
}
