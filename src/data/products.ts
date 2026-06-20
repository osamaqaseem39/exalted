export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductSpecSection = {
  title: string;
  specs: ProductSpec[];
};

export type Product = {
  slug: string;
  tag: string;
  brand: string;
  title: string;
  image: string;
  description: string;
  points: string[];
};

export const productFilters = [
  "All",
  "Serialization",
  "Inspection",
  "Detection",
  "Printing",
  "Labelling",
  "Weighing",
] as const;

export type ProductFilter = (typeof productFilters)[number];

export const productCategories = [
  {
    id: "Serialization",
    label: "Serialization",
    description: "Track & trace, barcode printing, aggregation",
    href: "/products?category=Serialization",
  },
  {
    id: "Inspection",
    label: "Inspection",
    description: "Machine vision, X-ray, quality control",
    href: "/products?category=Inspection",
  },
  {
    id: "Detection",
    label: "Detection",
    description: "Metal detectors for pharma & food lines",
    href: "/products?category=Detection",
  },
  {
    id: "Printing",
    label: "Printing",
    description: "TIJ, laser, and industrial coders",
    href: "/products?category=Printing",
  },
  {
    id: "Labelling",
    label: "Labelling",
    description: "Automatic labeling for all container types",
    href: "/products?category=Labelling",
  },
  {
    id: "Weighing",
    label: "Weighing",
    description: "Dynamic check weighers for production",
    href: "/products?category=Weighing",
  },
];

export const products: Product[] = [
  {
    slug: "pharma-metal-detector",
    tag: "Detection",
    brand: "NOW Systems",
    title: "Pharma Metal Detector",
    image: "/images/products/pharma-metal-detector.jpeg",
    description:
      "Pharmaceutical-grade metal detection system designed for vial, capsule, and blister packaging lines. Built with stainless steel construction and an intuitive touchscreen HMI for GMP-compliant production environments.",
    points: ["Pharmaceutical-grade stainless steel", "Touchscreen control panel", "Ideal for vial and capsule lines"],
  },
  {
    slug: "conveyor-metal-detector",
    tag: "Detection",
    brand: "NOW Systems",
    title: "Conveyor Type Metal Detector",
    image: "/images/products/conveyor-metal-detector.jpeg",
    description:
      "Conveyor-integrated metal detector with IP66-rated enclosure for demanding food and packaging lines. SEEKER series technology delivers reliable contamination detection at production speeds.",
    points: ["IP66 rated enclosure", "Conveyor-integrated detection", "SEEKER series technology"],
  },
  {
    slug: "pipeline-metal-detector",
    tag: "Detection",
    brand: "NOW Systems",
    title: "Pipeline Metal Detector",
    image: "/images/products/pipeline-metal-detector.jpeg",
    description:
      "In-line pipeline metal detector for liquid, paste, and pumped product streams. Features a digital touchscreen interface and mobile industrial frame for flexible line integration.",
    points: ["In-line pipeline inspection", "Digital touchscreen HMI", "Mobile industrial frame"],
  },
  {
    slug: "barcode-printer-station",
    tag: "Serialization",
    brand: "Exalted",
    title: "Barcode Printer & Serialization Station",
    image: "/images/products/barcode-printer-station.jpeg",
    description:
      "Complete serialization workstation with industrial barcode printing, PC-controlled workflow, and conveyor-ready integration for pharma track and trace compliance.",
    points: ["Industrial barcode printing", "PC-controlled workflow", "Conveyor-ready integration"],
  },
  {
    slug: "x-ray-inspection-system",
    tag: "Inspection",
    brand: "Xavis · Korea",
    title: "X-Ray Inspection System",
    image: "/images/products/x-ray-inspection-system.jpeg",
    description:
      "F-SCAN series X-ray inspection for foreign object detection in food, pharma, and packaging applications. Available in pipeline and conveyor configurations for inline quality assurance.",
    points: ["F-SCAN series", "Foreign object detection", "Pipeline and conveyor models"],
  },
  {
    slug: "automatic-check-weigher",
    tag: "Weighing",
    brand: "NOW Systems",
    title: "Automatic Check Weigher",
    image: "/images/products/automatic-check-weigher.jpeg",
    description:
      "Dynamic check weigher for inline weight verification with automatic over/under rejection. Production-line ready with data logging and integration options for packaging workflows.",
    points: ["Dynamic weight checking", "Over/under weight rejection", "Production line ready"],
  },
  {
    slug: "famjet-pleyon-tij",
    tag: "Printing",
    brand: "Famjet · Italy",
    title: "Famjet Pleyon TIJ Printer",
    image: "/images/products/famjet-pleyon-tij.jpeg",
    description:
      "High-resolution thermal inkjet printer delivering up to 2400 dpi for crisp codes on cartons, labels, and flexible packaging. 9-inch touchscreen interface with 1D and 2D barcode support.",
    points: ["Up to 2400 dpi resolution", "9\" touchscreen interface", "1D & 2D barcode printing"],
  },
  {
    slug: "famjet-m5-tij",
    tag: "Printing",
    brand: "Famjet · Italy",
    title: "Famjet M5 TIJ Printer",
    image: "/images/products/famjet-m5-tij.jpeg",
    description:
      "Compact HP TIJ printhead system with maintenance-free operation for reliable industrial coding. Ideal for secondary packaging and variable data printing on production lines.",
    points: ["HP TIJ technology", "Maintenance-free operation", "Compact printhead design"],
  },
  {
    slug: "laser-printing-systems",
    tag: "Printing",
    brand: "IntelliCode",
    title: "Laser Printing Systems",
    image: "/images/products/laser-printing-systems.jpeg",
    description:
      "Modular laser marking platform with 10-inch WYSIWYG editor for permanent coding on metal, plastic, glass, and coated substrates. Simple, intelligent, stable, and efficient operation.",
    points: ["10-inch WYSIWYG editor", "Modular laser marking", "Multi-substrate compatibility"],
  },
  {
    slug: "automatic-labeling-machine",
    tag: "Labelling",
    brand: "Alphapack · China",
    title: "Automatic Labeling Machine",
    image: "/images/products/automatic-labeling-machine.jpeg",
    description:
      "Stainless steel labeling system for round and flat container application. HMI control panel with adjustable conveyor for flexible integration into packaging lines.",
    points: ["Stainless steel conveyor", "Round & flat label application", "HMI control panel"],
  },
  {
    slug: "machine-vision-bottle",
    tag: "Inspection",
    brand: "SuperVision · Exalted",
    title: "Machine Vision — Bottle Inspection",
    image: "/images/products/machine-vision-bottle.jpeg",
    description:
      "Automated bottle inspection system for cap presence, tightness, fill level verification, and OCR/datamatrix reading. Ensures consistent quality on high-speed bottling lines.",
    points: ["Cap presence & tightness", "Fill level inspection", "OCR & datamatrix reading"],
  },
  {
    slug: "machine-vision-blister",
    tag: "Inspection",
    brand: "SuperVision · Exalted",
    title: "Machine Vision — Blister & Pack",
    image: "/images/products/machine-vision-blister.jpeg",
    description:
      "Pharma-grade vision inspection for blister packs and unit cartons. Detects broken tablets, empty pockets, and validates unit box formation for serialization workflows.",
    points: ["Broken tablet detection", "Empty pocket checks", "Unit box formation validation"],
  },
];

export const featuredProductSlug = "laser-printing-systems";

export function getProductsByCategory(category: string) {
  if (category === "All") return products;
  return products.filter((p) => p.tag === category);
}

export function getCategoryCount(categoryId: string) {
  return products.filter((p) => p.tag === categoryId).length;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProduct() {
  return getProductBySlug(featuredProductSlug) ?? products[8];
}

export function getProductSpecSections(product: Product): ProductSpecSection[] {
  return [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Category", value: product.tag },
        { label: "Brand / Principal", value: product.brand },
        { label: "Overview", value: product.description },
      ],
    },
    {
      title: "KEY FEATURES",
      specs: product.points.map((point, index) => ({
        label: `Feature ${index + 1}`,
        value: point,
      })),
    },
    {
      title: "OPERATIONS",
      specs: [
        { label: "Line integration", value: "Suitable for production and packaging lines" },
        { label: "Support", value: "Installation, training and after-sales by Exalted" },
        { label: "Availability", value: "Supplied across Pakistan with global principal backing" },
      ],
    },
  ];
}

export function getRelatedProducts(slug: string, limit = 3) {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products.filter((p) => p.tag === product.tag && p.slug !== slug).slice(0, limit);
}
