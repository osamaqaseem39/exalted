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
      "Foreign object detection and internal product verification for food and pharma packaging.",
    overview:
      "Xavis X-Ray inspection systems detect metal, glass, stone, and dense foreign bodies inside sealed packages. Ideal for food, pharma, and FMCG lines where product integrity and consumer safety are critical.",
    features: [
      "Multi-energy imaging for product and contaminant differentiation",
      "Detection of metal, glass, stone, and high-density plastics",
      "Count verification and missing-component detection",
      "Hygienic design for wash-down environments",
      "Full integration with rejection systems",
    ],
    applications: [
      "Foreign object detection in sealed food packs",
      "Pharma blister and sachet inspection",
      "Fill-level and completeness checks",
      "Mass and component verification",
    ],
    industries: ["Food & Beverage", "Pharma & Life Sciences", "Packaging & FMCG"],
    image: "/images/products/x-ray-inspection-system.jpeg",
    productCategory: "Inspection",
    productCategoryLabel: "X-Ray Products",
    relatedProductSlugs: ["x-ray-inspection-system"],
  },
  {
    slug: "metal-detection",
    title: "Metal Detection",
    shortDescription:
      "Pharma, conveyor, and pipeline metal detectors for contamination-free production.",
    overview:
      "NOW Systems metal detectors protect your brand and consumers by finding ferrous, non-ferrous, and stainless-steel contamination in products and packaging. Solutions range from pharma-grade units to heavy-duty conveyor and pipeline systems.",
    features: [
      "High sensitivity for ferrous, non-ferrous, and stainless steel",
      "Pharma, conveyor, and pipeline configurations",
      "Auto-learn product effect compensation",
      "Audit trail and event logging for GMP environments",
      "Quick-release belts for easy cleaning",
    ],
    applications: [
      "Tablet and capsule metal detection",
      "Bulk and packaged food inspection",
      "Liquid and slurry pipeline detection",
      "Final pack verification before dispatch",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Industrial Manufacturing"],
    image: "/images/products/pharma-metal-detector.jpeg",
    productCategory: "Detection",
    productCategoryLabel: "Metal Detection Products",
    relatedProductSlugs: [
      "pharma-metal-detector",
      "conveyor-metal-detector",
      "pipeline-metal-detector",
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
      "Industrial coders and markers for every substrate and production speed.",
    overview:
      "From IntelliCode laser systems to Famjet TIJ printers, Exalted supplies coding and marking equipment for cartons, bottles, cables, and flexible packaging. Choose CIJ, TIJ, laser, DOD, or thermal transfer based on your substrate, speed, and code requirements.",
    features: [
      "CO2, fiber, and UV laser marking (IntelliCode)",
      "TIJ and piezo inkjet carton coders (Famjet)",
      "CIJ and large-character printing options",
      "Barcode, expiry, batch, and logo printing",
      "Integration with serialization and vision systems",
    ],
    applications: [
      "Expiry and batch coding on packaging",
      "Serialization Data Matrix printing",
      "Cable and industrial part marking",
      "High-speed beverage and food coding",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Industrial Manufacturing", "Tobacco & Specialty"],
    image: "/images/products/laser-printing-systems.jpeg",
    productCategory: "Printing",
    productCategoryLabel: "Printing Products",
    relatedProductSlugs: ["famjet-pleyon-tij", "famjet-m5-tij", "laser-printing-systems"],
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
