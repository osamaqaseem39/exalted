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
      { src: "/images/products/weighing/automatic-weighing.jpg", caption: "Inline check weighing" },
      { src: "/images/products/automatic-labeling-machine.jpeg", caption: "Bottle & carton labeling" },
      { src: "/images/products/famjet-pleyon.png", caption: "High-speed TIJ coding" },
      { src: "/images/products/conveyor-type-seeker.png", caption: "Conveyor metal detection" },
    ],
    solutionSlugs: ["check-weighing", "labeling", "printing-equipment", "metal-detection"],
    productSlugs: [
      "automatic-weighing",
      "heavy-weighing",
      "high-speed-automatic-weighing",
      "metal-detector-check-weigher",
      "multi-lane-high-accuracy-weighing",
      "multi-lane-high-speed-weighing",
      "automatic-labeling-machine",
      "famjet-pleyon",
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
    heroImage: "/images/products/fscan-3280d.png",
    gallery: [
      { src: "/images/products/fscan-3280d.png", caption: "X-ray foreign object detection" },
      { src: "/images/products/fscan-4280db.png", caption: "Bulk product X-ray inspection" },
      { src: "/images/products/fscan-4500dp.png", caption: "Pipeline X-ray inspection" },
      { src: "/images/products/conveyor-type-seeker.png", caption: "Packaged food metal detection" },
      { src: "/images/products/pipe-type-steamer.png", caption: "Pipe inspection for liquids" },
      { src: "/images/products/weighing/high-speed-automatic-weighing.jpg", caption: "Dynamic check weighing" },
    ],
    solutionSlugs: ["x-ray-inspection", "metal-detection", "check-weighing", "labeling"],
    productSlugs: [
      "fscan-3280d",
      "fscan-4280db",
      "fscan-4500dp",
      "conveyor-metal-detector",
      "pipe-type-metal-detector",
      "automatic-weighing",
      "heavy-weighing",
      "high-speed-automatic-weighing",
      "metal-detector-check-weigher",
      "multi-lane-high-accuracy-weighing",
      "multi-lane-high-speed-weighing",
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
      { src: "/images/products/pharmaceutical-type-medic.png", caption: "Pharmaceutical metal detection" },
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
      "fscan-3280d",
      "fscan-4280db",
      "fscan-4500dp",
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
      { src: "/images/products/famjet-m5.png", caption: "Compact TIJ coders" },
      { src: "/images/products/barcode-printer-station.jpeg", caption: "Serialization & traceability" },
    ],
    solutionSlugs: ["printing-equipment", "track-trace", "software-solutions"],
    productSlugs: ["laser-printing-systems", "famjet-m5", "barcode-printer-station"],
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
      { src: "/images/products/pipe-type-steamer.png", caption: "Pipe metal detection" },
      { src: "/images/products/conveyor-type-seeker.png", caption: "Heavy-duty conveyor detection" },
      { src: "/images/products/famjet-pleyon.png", caption: "Carton & part coding" },
    ],
    solutionSlugs: ["printing-equipment", "metal-detection", "software-solutions"],
    productSlugs: [
      "laser-printing-systems",
      "pipe-type-metal-detector",
      "conveyor-metal-detector",
      "famjet-pleyon",
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
      { src: "/images/products/famjet-pleyon.png", caption: "TIJ coding on cartons" },
      { src: "/images/products/machine-vision-bottle.jpeg", caption: "Bottle inspection" },
      { src: "/images/products/famjet-m5.png", caption: "Compact secondary packaging coders" },
    ],
    solutionSlugs: ["labeling", "printing-equipment", "machine-vision-inspection"],
    productSlugs: [
      "automatic-labeling-machine",
      "famjet-pleyon",
      "machine-vision-bottle",
      "famjet-m5",
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
