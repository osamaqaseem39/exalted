import { products, type Product } from "./products";

export type Solution = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  features: string[];
  applications: string[];
  industries: string[];
  image: string;
  productCategory?: string;
  productCategoryLabel?: string;
  relatedProductSlugs?: string[];
};

export const solutions: Solution[] = [
  {
    slug: "track-trace",
    title: "Track & Trace (Pharma Serialization & Aggregation)",
    shortDescription:
      "End-to-end serialization from production line to patient with aggregation and compliance reporting.",
    overview:
      "Exalted delivers complete pharma serialization and aggregation solutions — from Level 1 printing and inspection devices on the production line to Level 4 enterprise reporting. Our in-house software integrates with global compliance requirements for regulated markets.",
    features: [
      "Unique serial number generation and Data Matrix / QR printing",
      "Parent-child aggregation at carton, case, and pallet level",
      "EPCIS event management and regulatory reporting",
      "Integration with ERP, WMS, and government traceability portals",
      "Line-level validation, rejection, and audit trails",
    ],
    applications: [
      "Pharmaceutical blister and bottle serialization",
      "Aggregation for wholesale distribution",
      "Export compliance for regulated markets",
      "Batch recall and traceability queries",
    ],
    industries: ["Pharma & Life Sciences", "Packaging & FMCG"],
    image: "/images/products/barcode-printer-station.jpeg",
    productCategoryLabel: "Pharma Track & Trace",
    relatedProductSlugs: ["barcode-printer-station"],
  },
  {
    slug: "machine-vision-inspection",
    title: "Machine Vision Inspection",
    shortDescription:
      "Automated visual inspection for bottles, blisters, labels, caps, and fill levels.",
    overview:
      "SuperVision machine vision systems from Exalted provide high-speed automated inspection for packaging lines. Detect label defects, missing prints, fill levels, cap presence, and blister integrity without slowing production.",
    features: [
      "Real-time image capture and defect classification",
      "OCR/OCV for batch codes, expiry dates, and barcodes",
      "Configurable rejection zones and alarm outputs",
      "Integration with PLCs and line controllers",
      "Audit logs and image archiving for quality records",
    ],
    applications: [
      "Label presence and print quality verification",
      "Blister pack inspection",
      "Bottle fill-level and cap inspection",
      "Barcode readability checks",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Personal Care & Cosmetics"],
    image: "/images/products/machine-vision-bottle.jpeg",
    productCategory: "Inspection",
    productCategoryLabel: "Inspection Products",
    relatedProductSlugs: ["machine-vision-bottle", "machine-vision-blister"],
  },
  {
    slug: "x-ray-inspection",
    title: "X-Ray Inspection",
    shortDescription:
      "X-ray foreign object detection for packaged, bulk, and pipeline food and pharma production lines.",
    overview:
      "Xavis F-SCAN X-ray inspection systems detect foreign objects in food and pharma production. From packaged product lines to bulk and pipeline applications, Exalted supplies FSCAN models configured for your product type, line speed, and contamination detection requirements.",
    features: [
      "FSCAN-3280D for packaged product conveyor inspection",
      "FSCAN-4280DB for bulk and non-uniform product inspection",
      "FSCAN-4500DP pipeline-type system for food processing lines",
      "Excellent detection of medium-density foreign materials",
      "Customizable software, table size, and specifications",
    ],
    applications: [
      "Packaged food and pharma product inspection",
      "Bulk product foreign object detection",
      "Pipeline inspection on food processing lines",
      "Medium-density contaminant detection in non-uniform products",
    ],
    industries: ["Food & Beverage", "Pharma & Life Sciences", "Packaging & FMCG"],
    image: "/images/products/fscan-3280d.png",
    productCategory: "Inspection",
    productCategoryLabel: "X-Ray Products",
    relatedProductSlugs: ["fscan-3280d", "fscan-4280db", "fscan-4500dp"],
  },
  {
    slug: "metal-detection",
    title: "Metal Detection",
    shortDescription:
      "NOW Systems metal detectors for contamination-free production across pharma, food, and industrial lines.",
    overview:
      "NOW Systems metal detectors protect your brand and consumers by finding ferrous, non-ferrous, and stainless-steel contamination in products and packaging. Exalted supplies the full SEEKER range — from the widely demanded conveyor type to pharmaceutical, fall, pipe, and aluminum-packaged product inspection.",
    features: [
      "Conveyor type for packed and bulk products on belt lines",
      "Pharmaceutical type with GMP-compliant design",
      "Fall type for powder and fine-grained bulk materials",
      "Pipe type for liquid and pastry products",
      "Alcon system for aluminum-packaged products without X-ray",
    ],
    applications: [
      "Packed and bulk product conveyor inspection",
      "Tablet and capsule pharmaceutical lines",
      "Free-fall powder inspection between weigher and bagger",
      "Liquid, paste, and pumped product pipelines",
      "Aluminum foil and pouch packaged food inspection",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Industrial Manufacturing"],
    image: "/images/products/conveyor-type-seeker.png",
    productCategory: "Detection",
    productCategoryLabel: "Metal Detection Products",
    relatedProductSlugs: [
      "conveyor-metal-detector",
      "pharma-metal-detector",
      "fall-type-metal-detector",
      "pipe-type-metal-detector",
      "aluminum-packaged-metal-detector",
    ],
  },
  {
    slug: "check-weighing",
    title: "Check Weighing (Dynamic)",
    shortDescription:
      "Inline weight verification with over/under rejection and production logging.",
    overview:
      "NOW Systems dynamic check weighers verify every pack on the line, rejecting over- and under-weight products while logging weights for quality and giveaway control. Built for high-speed food, pharma, and FMCG production.",
    features: [
      "High-speed in-motion weighing",
      "Programmable over/under tolerance bands",
      "Pneumatic or belt rejection systems",
      "Production statistics and trend reporting",
      "Hygienic stainless-steel construction",
    ],
    applications: [
      "Pack weight verification on food lines",
      "Pharma carton weight checks",
      "Giveaway reduction and SPC reporting",
      "Regulatory weight compliance",
    ],
    industries: ["Food & Beverage", "Pharma & Life Sciences", "Packaging & FMCG"],
    image: "/images/products/automatic-check-weigher.jpeg",
    productCategory: "Weighing",
    productCategoryLabel: "Check Weigher Products",
    relatedProductSlugs: ["automatic-check-weigher"],
  },
  {
    slug: "printing-equipment",
    title: "Printing Equipment (CIJ, TIJ, Laser, DOD, Thermal)",
    shortDescription:
      "Famjet TIJ printers for cartons, labels, and industrial coding at every production scale.",
    overview:
      "Exalted supplies Famjet thermal inkjet printing systems from entry-level M5 to the full-featured M9 and high-volume Pleyon. HP cartridge technology delivers crisp variable data, barcodes, and logos on cartons, labels, and flexible packaging.",
    features: [
      "M5 — entry-level TIJ with ½″ HP 2.5 cartridges",
      "M7 — flexible in-line carton coding with 1″ cartridges",
      "M9 — up to 4 cartridges with NiceLabel driver integration",
      "Pleyon — bulk ink system reducing printing costs by over 60%",
      "Barcode, expiry, batch, and logo printing",
    ],
    applications: [
      "Expiry and batch coding on packaging",
      "In-line carton coding on production lines",
      "Variable data and serialization printing",
      "High-volume coding with reduced ink cost",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Industrial Manufacturing", "Tobacco & Specialty"],
    image: "/images/products/famjet-pleyon.png",
    productCategory: "Printing",
    productCategoryLabel: "Printing Products",
    relatedProductSlugs: ["famjet-m5", "famjet-m7", "famjet-m9", "famjet-pleyon"],
  },
  {
    slug: "labeling",
    title: "Labeling (Round, Flat, Shrink Sleeve etc.)",
    shortDescription:
      "Automatic labeling systems for diverse container shapes and line speeds.",
    overview:
      "Alphapack labeling machines apply pressure-sensitive labels on round, flat, and irregular containers — as well as shrink sleeve application. Exalted configures and supports labeling systems for pharma, food, and cosmetics lines.",
    features: [
      "Round, flat, and wrap-around labeling",
      "Shrink sleeve application",
      "Synchronized with conveyor and filler speeds",
      "Missing-label detection options",
      "Quick changeover for multiple SKUs",
    ],
    applications: [
      "Bottle and jar labeling",
      "Carton and box labeling",
      "Shrink sleeve for beverages",
      "Pharma bottle and vial labeling",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Personal Care & Cosmetics"],
    image: "/images/products/automatic-labeling-machine.jpeg",
    productCategory: "Labelling",
    productCategoryLabel: "Labeling Products",
    relatedProductSlugs: ["automatic-labeling-machine"],
  },
  {
    slug: "software-solutions",
    title: "Software Solutions (ERP & Customized)",
    shortDescription:
      "Custom traceability, warehouse, and production management software built in-house.",
    overview:
      "Exalted's in-house development team builds customized software for traceability, warehouse management, production tracking, fleet management, and ERP integration. Solutions connect shop-floor devices to enterprise systems for full visibility.",
    features: [
      "Pharma serialization and EPCIS event management",
      "Warehouse and inventory management modules",
      "Production order and batch tracking",
      "Custom dashboards and regulatory reporting",
      "ERP and third-party system integration",
    ],
    applications: [
      "Pharma track & trace Level 3–4 systems",
      "Asset and fleet management",
      "Production floor data collection",
      "Custom compliance reporting",
    ],
    industries: ["Pharma & Life Sciences", "Industrial Manufacturing", "Packaging & FMCG"],
    image: "/images/products/barcode-printer-station.jpeg",
    productCategoryLabel: "Software & Integration",
  },
];

export function getProductsForSolution(slug: string): Product[] {
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return [];

  if (solution.relatedProductSlugs?.length) {
    return solution.relatedProductSlugs
      .map((productSlug) => products.find((product) => product.slug === productSlug))
      .filter((product): product is Product => Boolean(product));
  }

  if (solution.productCategory) {
    return products.filter((product) => product.tag === solution.productCategory);
  }

  return [];
}

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function getRelatedSolutions(slug: string, limit = 3) {
  const current = getSolutionBySlug(slug);
  if (!current) return [];
  return solutions.filter((s) => s.slug !== slug && s.industries.some((i) => current.industries.includes(i))).slice(0, limit);
}

export function getProductsHrefForSolution(solution: Solution) {
  if (solution.relatedProductSlugs?.length) {
    const first = products.find((p) => p.slug === solution.relatedProductSlugs![0]);
    if (first) {
      return `/products?category=${encodeURIComponent(first.tag)}&from=solution`;
    }
  }
  if (solution.productCategory) {
    return `/products?category=${encodeURIComponent(solution.productCategory)}&from=solution`;
  }
  if (solution.slug === "track-trace") {
    return "/company#pharma-track-trace";
  }
  return "/products";
}

/** Flat list for cards — same data as homepage & services page */
export const offeredSolutions = solutions.map((s) => ({
  slug: s.slug,
  title: s.title,
  description: s.shortDescription,
}));
