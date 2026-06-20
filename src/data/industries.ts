export type Industry = {
  slug: string;
  name: string;
  headline: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  gallery: { src: string; caption: string }[];
  solutionSlugs: string[];
  productSlugs: string[];
  highlights: string[];
};

export const industries: Industry[] = [
  {
    slug: "beverage",
    name: "Beverage",
    headline: "Coding & inspection for beverage production lines",
    shortDescription:
      "Date coding, label application, check weighing, and contamination detection for bottles, cans, and cartons at high line speeds.",
    overview:
      "Exalted supports breweries, soft drink plants, and water bottling facilities with industrial coders, check weighers, metal detectors, and labeling systems. From primary packaging to case coding, we configure equipment for wet environments, fast changeovers, and export compliance.",
    heroImage: "/images/hero-production-floor.png",
    gallery: [
      { src: "/images/products/automatic-check-weigher.jpeg", caption: "Inline check weighing" },
      { src: "/images/products/automatic-labeling-machine.jpeg", caption: "Bottle & carton labeling" },
      { src: "/images/products/famjet-pleyon-tij.jpeg", caption: "High-speed TIJ coding" },
      { src: "/images/products/conveyor-metal-detector.jpeg", caption: "Conveyor metal detection" },
    ],
    solutionSlugs: ["check-weighing", "labeling", "printing-equipment", "metal-detection"],
    productSlugs: [
      "automatic-check-weigher",
      "automatic-labeling-machine",
      "famjet-pleyon-tij",
      "conveyor-metal-detector",
    ],
    highlights: ["High-speed line integration", "Wet & wash-down environments", "Case & unit-level coding"],
  },
  {
    slug: "food",
    name: "Food",
    headline: "Quality assurance for food processing & packaging",
    shortDescription:
      "X-ray inspection, metal detection, weight verification, and marking solutions for safe, compliant food production.",
    overview:
      "Protect consumers and your brand with inline inspection and coding systems for packaged food, dairy, bakery, and protein lines. Exalted supplies X-ray, metal detection, check weighing, and labeling equipment tuned for hygiene, speed, and giveaway control.",
    heroImage: "/images/products/x-ray-inspection-system.jpeg",
    gallery: [
      { src: "/images/products/x-ray-inspection-system.jpeg", caption: "X-ray foreign object detection" },
      { src: "/images/products/conveyor-metal-detector.jpeg", caption: "Packaged food metal detection" },
      { src: "/images/products/pipeline-metal-detector.jpeg", caption: "Pipeline inspection for liquids" },
      { src: "/images/products/automatic-check-weigher.jpeg", caption: "Dynamic check weighing" },
    ],
    solutionSlugs: ["x-ray-inspection", "metal-detection", "check-weighing", "labeling"],
    productSlugs: [
      "x-ray-inspection-system",
      "conveyor-metal-detector",
      "pipeline-metal-detector",
      "automatic-check-weigher",
      "automatic-labeling-machine",
    ],
    highlights: ["Foreign object detection", "Weight compliance & SPC", "Hygienic stainless-steel design"],
  },
  {
    slug: "life-sciences",
    name: "Life Sciences",
    headline: "Pharma serialization, vision & GMP-ready inspection",
    shortDescription:
      "Track & trace, blister inspection, metal detection, and compliant coding for pharmaceutical and life science manufacturing.",
    overview:
      "Regulated markets demand serialization, aggregation, and documented quality control. Exalted delivers Level 1–4 pharma track & trace capability alongside machine vision, metal detection, and serialization printing for blisters, bottles, and cartons.",
    heroImage: "/images/hero-pharma-serialization.png",
    gallery: [
      { src: "/images/products/barcode-printer-station.jpeg", caption: "Serialization printing station" },
      { src: "/images/products/pharma-metal-detector.jpeg", caption: "Pharma metal detection" },
      { src: "/images/products/machine-vision-blister.jpeg", caption: "Blister pack inspection" },
      { src: "/images/products/machine-vision-bottle.jpeg", caption: "Bottle line vision" },
    ],
    solutionSlugs: [
      "track-trace",
      "machine-vision-inspection",
      "metal-detection",
      "x-ray-inspection",
    ],
    productSlugs: [
      "barcode-printer-station",
      "pharma-metal-detector",
      "machine-vision-blister",
      "machine-vision-bottle",
      "x-ray-inspection-system",
    ],
    highlights: ["GMP-compliant equipment", "Serialization & aggregation", "Audit-ready inspection"],
  },
  {
    slug: "tobacco",
    name: "Tobacco",
    headline: "High-speed coding for tobacco & specialty products",
    shortDescription:
      "Laser marking, TIJ printing, and traceability systems for cartons, packs, and specialty production lines.",
    overview:
      "Tobacco and specialty goods require durable codes, tax stamp integration, and high uptime on fast lines. Exalted provides laser, TIJ, and serialization solutions with software support for variable data and regulatory reporting.",
    heroImage: "/images/products/laser-printing-systems.jpeg",
    gallery: [
      { src: "/images/products/laser-printing-systems.jpeg", caption: "Laser marking systems" },
      { src: "/images/products/famjet-m5-tij.jpeg", caption: "Compact TIJ coders" },
      { src: "/images/products/barcode-printer-station.jpeg", caption: "Serialization & traceability" },
    ],
    solutionSlugs: ["printing-equipment", "track-trace", "software-solutions"],
    productSlugs: ["laser-printing-systems", "famjet-m5-tij", "barcode-printer-station"],
    highlights: ["Permanent laser codes", "Variable data printing", "Traceability integration"],
  },
  {
    slug: "industrial",
    name: "Industrial",
    headline: "Durable marking & detection for heavy industry",
    shortDescription:
      "Laser marking, pipeline detection, and traceability for cables, parts, and industrial packaging lines.",
    overview:
      "Industrial manufacturing needs robust coding on metal, plastic, and cable substrates plus reliable contamination detection for bulk and packaged goods. Exalted configures laser, metal detection, and software systems for harsh production environments.",
    heroImage: "/images/hero-production-floor.png",
    gallery: [
      { src: "/images/products/laser-printing-systems.jpeg", caption: "Industrial laser marking" },
      { src: "/images/products/pipeline-metal-detector.jpeg", caption: "Pipeline metal detection" },
      { src: "/images/products/conveyor-metal-detector.jpeg", caption: "Heavy-duty conveyor detection" },
      { src: "/images/products/famjet-pleyon-tij.jpeg", caption: "Carton & part coding" },
    ],
    solutionSlugs: ["printing-equipment", "metal-detection", "software-solutions"],
    productSlugs: [
      "laser-printing-systems",
      "pipeline-metal-detector",
      "conveyor-metal-detector",
      "famjet-pleyon-tij",
    ],
    highlights: ["Multi-substrate laser marking", "Pipeline & bulk inspection", "ERP & traceability software"],
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    headline: "Premium coding & labeling for cosmetics & personal care",
    shortDescription:
      "Label application, TIJ printing, and vision inspection for bottles, tubes, and flexible personal care packaging.",
    overview:
      "Cosmetics and personal care brands need crisp codes, flawless labels, and consistent fill quality on high-value packaging. Exalted supplies labeling machines, TIJ printers, and vision systems for bottles, jars, tubes, and cartons.",
    heroImage: "/images/products/automatic-labeling-machine.jpeg",
    gallery: [
      { src: "/images/products/automatic-labeling-machine.jpeg", caption: "Automatic labeling" },
      { src: "/images/products/famjet-pleyon-tij.jpeg", caption: "TIJ coding on cartons" },
      { src: "/images/products/machine-vision-bottle.jpeg", caption: "Bottle inspection" },
      { src: "/images/products/famjet-m5-tij.jpeg", caption: "Compact secondary packaging coders" },
    ],
    solutionSlugs: ["labeling", "printing-equipment", "machine-vision-inspection"],
    productSlugs: [
      "automatic-labeling-machine",
      "famjet-pleyon-tij",
      "machine-vision-bottle",
      "famjet-m5-tij",
    ],
    highlights: ["Round & flat container labeling", "High-resolution printing", "Fill & cap inspection"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getOtherIndustries(slug: string, limit = 3) {
  return industries.filter((industry) => industry.slug !== slug).slice(0, limit);
}
