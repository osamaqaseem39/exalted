import { productSpecSectionsBySlug } from "./productSpecs";

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
  "Packaging",
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
    description: "TIJ, CIJ, laser, and industrial coders",
    href: "/products?category=Printing",
  },
  {
    id: "Labelling",
    label: "Labelling",
    description: "Automatic labeling for all container types",
    href: "/products?category=Labelling",
  },
  {
    id: "Packaging",
    label: "Packaging",
    description: "Form-fill-seal, tube filling, and tablet counting",
    href: "/products?category=Packaging",
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
    slug: "vertical-form-fill-seal",
    tag: "Packaging",
    brand: "Alphapack · China",
    title: "Vertical Form Fill Seal Packaging Machine",
    image: "/images/products/automatic-labeling-machine.jpeg",
    description:
      "Fully automatic VFFS machine for conveying, measuring, feeding, bag forming, date coding, sealing and cutting. Servo-driven twin belt film pulling with fiber optic colour mark tracking.",
    points: [
      "Automatic bag forming, filling & sealing",
      "Servo-motor twin belt film pulling",
      "Fiber optic colour mark tracking",
    ],
  },
  {
    slug: "tube-filling-machine",
    tag: "Packaging",
    brand: "Alphapack · China",
    title: "Tube Filling Machine",
    image: "/images/products/automatic-labeling-machine.jpeg",
    description:
      "Automatic tube loading, filling, heating, sealing, cutting and unloading with GMP-compliant Stainless Steel #316 contact parts. Leister hot air sealing and servo-controlled bottom-fill technology.",
    points: [
      "Automatic tube load, fill & seal",
      "Leister hot air sealing system",
      "Stainless Steel #316 — GMP compliant",
    ],
  },
  {
    slug: "tablet-counter",
    tag: "Packaging",
    brand: "Exalted",
    title: "Tablet Counter",
    image: "/images/products/pharma-metal-detector.jpeg",
    description:
      "Compact tablet counter with digital display (0–9999), vibrating automatic feeding, vacuum suction outlet, and optional conveyor and PLC for fully automatic counting lines.",
    points: ["Digital counting 0–9999", "Vibrating automatic feeding", "PLC & conveyor ready"],
  },
  {
    slug: "automatic-top-labeler",
    tag: "Labelling",
    brand: "Alphapack · China",
    title: "Automatic Top Labeler",
    image: "/images/products/automatic-labeling-machine.jpeg",
    description:
      "Stainless Steel #304 top labeling system with PLC touch screen control, ±1 mm accuracy, and servo-driven head synchronized to conveyor speed.",
    points: ["Stainless Steel #304", "±1 mm labeling accuracy", "Servo-synchronized labeling head"],
  },
  {
    slug: "round-bottle-labeler",
    tag: "Labelling",
    brand: "Alphapack · China",
    title: "Round Bottle Labeler",
    image: "/images/products/automatic-labeling-machine.jpeg",
    description:
      "Precision round bottle labeler with PLC HMI, ±1 mm tolerance, servo-driven head, and bottle separating wheel for consistent spacing on high-speed lines.",
    points: ["±1 mm labeling tolerance", "Servo-driven labeling head", "Bottle separating wheel"],
  },
  {
    slug: "front-back-labeler",
    tag: "Labelling",
    brand: "Alphapack · China",
    title: "Front & Back Labeler",
    image: "/images/products/automatic-labeling-machine.jpeg",
    description:
      "Dual-side labeling system with push-and-press sponge attachment for wrinkle-free application. Servo head synchronized to conveyor and top press belt with ±1 mm accuracy.",
    points: ["Front & back labeling", "Wrinkle-free sponge press", "±1 mm accuracy"],
  },
  {
    slug: "conveyor-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Conveyor Type Metal Detector",
    image: "/images/products/conveyor-type-seeker.png",
    description:
      "The conveyor type metal detector is the most widely demanded model — suitable for packed and bulk products carried on a conveyor system. SEEKER series with closed coil detection and IP66 enclosure.",
    points: ["Most widely demanded model", "Packed & bulk products", "SEEKER series"],
  },
  {
    slug: "pharma-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Pharmaceutical Type Metal Detector",
    image: "/images/products/pharmaceutical-type-medic.png",
    description:
      "Pharmaceutical type metal detector with compact design, adjustable height, casters for easy moving, and GMP-compliant construction. Ideal for tablet, capsule, and pharma production lines.",
    points: ["Compact GMP design", "Adjustable height structure", "Easy maintenance & cleaning"],
  },
  {
    slug: "fall-type-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Fall Type Metal Detector",
    image: "/images/products/fall-type-quicker.png",
    description:
      "Fall type metal detector for inspecting powder and fine-grained bulk materials in food, chemical, and industrial lines. Suitable for free-falling product between a weigher and bag maker.",
    points: ["Powder & fine-grained bulk", "Free-fall inspection", "QUICKER series"],
  },
  {
    slug: "pipe-type-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Pipe Type Metal Detector",
    image: "/images/products/pipe-type-steamer.png",
    description:
      "Pipe type metal detector for inspecting liquid and pastry products. Ball valve metal separation for minimum product loss, wash-down design, and high temperature capability up to 80°C.",
    points: ["Liquid & pastry products", "Ball valve separation", "Wash-down — up to 80°C"],
  },
  {
    slug: "aluminum-packaged-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Metal Detector for Aluminum Packaged Products",
    image: "/images/products/aluminum-packaged-alcon.png",
    description:
      "ALCON metal detector finds contamination in aluminum-packaged products without hazardous X-rays. Wear-free detecting system with no product effect or hot temperature concerns.",
    points: ["Aluminum foil & pouch packs", "No X-ray required", "ALCON series"],
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
    slug: "fscan-3280d",
    tag: "Inspection",
    brand: "Xavis · Korea",
    title: "FSCAN-3280D X-Ray Inspection System",
    image: "/images/products/fscan-3280d.png",
    description:
      "FSCAN-3280D X-ray automatic inspection system for packaged products on conveyor lines. Detects foreign objects in sealed food and pharma packs with user-friendly FSCAN-Series control and rejection integration.",
    points: ["Packaged product inspection", "FSCAN-Series platform", "Conveyor-line integration"],
  },
  {
    slug: "fscan-4280db",
    tag: "Inspection",
    brand: "Xavis · Korea",
    title: "FSCAN-4280DB X-Ray Inspection System",
    image: "/images/products/fscan-4280db.png",
    description:
      "FSCAN-4280DB inspects foreign objects in bulk product rather than packaged condition. Excellent detection performance for medium-density foreign materials within non-uniform products.",
    points: ["Bulk product inspection", "Non-uniform product detection", "Customizable configuration"],
  },
  {
    slug: "fscan-4500dp",
    tag: "Inspection",
    brand: "Xavis · Korea",
    title: "FSCAN-4500DP X-Ray Inspection System",
    image: "/images/products/fscan-4500dp.png",
    description:
      "FSCAN-4500DP is a pipeline-type X-ray inspection system that detects foreign objects on food processing production lines with excellent medium-density contaminant detection.",
    points: ["Pipeline-type inspection", "Food processing lines", "Medium-density detection"],
  },
  {
    slug: "automatic-weighing",
    tag: "Weighing",
    brand: "NOW Systems · Korea",
    title: "Automatic Weighing",
    image: "/images/products/weighing/automatic-weighing.jpg",
    description:
      "NWC-3000 ABACUS automatic check weigher with optimal weighing setup, smartphone monitoring, external device I/O, and optional metal detector integration.",
    points: ["NWC-3000 ABACUS series", "Smartphone monitoring", "Metal detector integration"],
  },
  {
    slug: "heavy-weighing",
    tag: "Weighing",
    brand: "NOW Systems · Korea",
    title: "Heavy Weighing Check Weigher",
    image: "/images/products/weighing/heavy-weighing.jpg",
    description:
      "Heavy-duty check weigher built for large, dense, or high-mass products requiring robust construction and accurate dynamic weighing on industrial production lines.",
    points: ["Heavy-duty construction", "Large pack weighing", "Industrial line integration"],
  },
  {
    slug: "high-speed-automatic-weighing",
    tag: "Weighing",
    brand: "NOW Systems · Korea",
    title: "High Speed Automatic Weighing",
    image: "/images/products/weighing/high-speed-automatic-weighing.jpg",
    description:
      "High-speed automatic check weigher for fast-moving food, beverage, and FMCG lines — delivering accurate weight verification without slowing production throughput.",
    points: ["High-speed in-motion weighing", "Fast line throughput", "Automatic rejection"],
  },
  {
    slug: "metal-detector-check-weigher",
    tag: "Weighing",
    brand: "NOW Systems · Korea",
    title: "Metal Detector & Check Weigher",
    image: "/images/products/weighing/metal-detector-check-weigher.jpg",
    description:
      "Combined metal detector and check weigher system for single-pass contamination detection and weight verification — reducing footprint and simplifying line integration.",
    points: ["Metal detection & weighing", "Single-pass inspection", "Compact line integration"],
  },
  {
    slug: "multi-lane-high-accuracy-weighing",
    tag: "Weighing",
    brand: "NOW Systems · Korea",
    title: "Multi Lane High Accuracy Weighing",
    image: "/images/products/weighing/multi-lane-high-accuracy-weighing.jpg",
    description:
      "Multi-lane check weigher delivering high accuracy weight verification across parallel production lanes — ideal for multi-pack and high-precision giveaway control.",
    points: ["Multi-lane configuration", "High accuracy weighing", "Parallel lane inspection"],
  },
  {
    slug: "multi-lane-high-speed-weighing",
    tag: "Weighing",
    brand: "NOW Systems · Korea",
    title: "Multi Lane High Speed Weighing",
    image: "/images/products/weighing/multi-lane-high-speed-weighing.jpg",
    description:
      "Multi-lane high-speed check weigher for demanding production environments where multiple lanes require simultaneous weight verification at line speed.",
    points: ["Multi-lane high speed", "Simultaneous lane weighing", "High-throughput lines"],
  },
  {
    slug: "markem-imaje-5800",
    tag: "Printing",
    brand: "Markem-Imaje",
    title: "Markem Imaje 5800 Series",
    image: "/images/products/famjet-pleyon-tij.jpeg",
    description:
      "Large character thermal transfer printer with up to 65 mm print height, true type fonts, 1D/2D barcodes, and colour LCD touch screen — up to two print heads.",
    points: ["65 mm print height", "1D & 2D barcodes", "Up to 2 print heads"],
  },
  {
    slug: "markem-imaje-2200",
    tag: "Printing",
    brand: "Markem-Imaje",
    title: "Markem Imaje 2200 Series",
    image: "/images/products/famjet-pleyon-tij.jpeg",
    description:
      "Thermal transfer or direct thermal label printer at 300 mm/s with 16 scalable fonts, Ethernet/USB connectivity, and support for die-cut self-adhesive labels up to 178 mm wide.",
    points: ["300 mm/s print speed", "16 scalable fonts", "Ethernet & USB"],
  },
  {
    slug: "maplejet-pd53",
    tag: "Printing",
    brand: "Maplejet",
    title: "Maplejet PD53 Printer",
    image: "/images/products/famjet-pleyon-tij.jpeg",
    description:
      "Stainless steel large character printer with 180/360 DPI, 60 m/min speed, 1–53 mm character height, expandable to 6 heads, and 8.4˝ industrial touchscreen.",
    points: ["180/360 DPI resolution", "60 m/min print speed", "Expandable to 6 heads"],
  },
  {
    slug: "anser-u2-smart",
    tag: "Printing",
    brand: "Anser",
    title: "Anser U2 Smart Printer",
    image: "/images/products/famjet-m5-tij.jpeg",
    description:
      "Ultra-compact 4-in-1 TIJ printer with 2.8˝ colour LCD, plug-n-print cartridges, zero maintenance, and stand-alone operation — weighs only 0.49 kg.",
    points: ["4-in-1 compact design", "Plug-n-print cartridges", "0.49 kg lightweight"],
  },
  {
    slug: "markem-imaje-9028",
    tag: "Printing",
    brand: "Markem-Imaje",
    title: "Markem Imaje 9028 CIJ Printer",
    image: "/images/products/famjet-m5-tij.jpeg",
    description:
      "Continuous inkjet printer with G-head 71 dpi resolution, up to 4 lines at 4.4 m/s, 31-language interface, Jet Speed Control, and sealed intelligent ink cartridges.",
    points: ["Up to 4.4 m/s print speed", "31-language interface", "Jet Speed Control"],
  },
  {
    slug: "markem-imaje-9410",
    tag: "Printing",
    brand: "Markem-Imaje",
    title: "Markem Imaje 9410 CIJ Printer",
    image: "/images/products/famjet-m5-tij.jpeg",
    description:
      "180 DPI CIJ printer at 40 m/min with 8-line capability, ink reduction up to 75%, 2-channel messaging, and 8.4˝ industrial touchscreen controller.",
    points: ["40 m/min — 8 lines", "75% ink reduction", "2 printing channels"],
  },
  {
    slug: "maplejet-pro-digit-bicolor",
    tag: "Printing",
    brand: "Maplejet",
    title: "MapleJet Pro Digit Bi-Color Printer",
    image: "/images/products/famjet-pleyon-tij.jpeg",
    description:
      "Bi-color CIJ platform at 180 DPI and 40 m/min with full barcode support, ink consumption control, and expandable multi-head configuration up to 6 printheads.",
    points: ["Bi-color printing", "40 m/min — 8 lines", "Up to 999 messages"],
  },
  {
    slug: "maplejet-pro-digit-light",
    tag: "Printing",
    brand: "Maplejet",
    title: "MapleJet Pro Digit Light Printer",
    image: "/images/products/famjet-pleyon-tij.jpeg",
    description:
      "Compact CIJ printer at 180/90 DPI and 35 m/min with automatic production & expiry dating, expandable up to 6 heads, and single-color industrial LCD controller.",
    points: ["35 m/min — 4 lines", "Auto date & time coding", "Expandable to 6 heads"],
  },
  {
    slug: "anser-u2-pro-tij",
    tag: "Printing",
    brand: "Anser",
    title: "Anser U2 Pro TIJ Printer",
    image: "/images/products/famjet-m5-tij.jpeg",
    description:
      "Industrial TIJ printer 1/30 the size of CIJ with plug-n-print design, 100% solvent compatibility, up to 30% ink savings, and Lexmark 36 ml cartridges.",
    points: ["Plug-n-print — zero maintenance", "100% solvent compatible", "30% ink savings"],
  },
  {
    slug: "famjet-m5",
    tag: "Printing",
    brand: "Famjet · Italy",
    title: "Famjet M5 TIJ Printer",
    image: "/images/products/famjet-m5.png",
    description:
      "Industrial TIJ performance accessible even for entry-level budgets, with ½″ HP 2.5 disposable cartridges for all types of surfaces.",
    points: ["Entry-level TIJ", "½″ HP 2.5 cartridges", "All surface types"],
  },
  {
    slug: "famjet-m7",
    tag: "Printing",
    brand: "Famjet · Italy",
    title: "Famjet M7 TIJ Printer",
    image: "/images/products/famjet-m7.png",
    description:
      "The simple and flexible TIJ solution for in-line carton coding using 1″ disposable cartridges.",
    points: ["In-line carton coding", "1″ disposable cartridges", "Simple & flexible"],
  },
  {
    slug: "famjet-m9",
    tag: "Printing",
    brand: "Famjet · Italy",
    title: "Famjet M9 TIJ Printer",
    image: "/images/products/famjet-m9.png",
    description:
      "The Famjet TIJ in its most complete configuration: up to 4 HP 2.5 ½″ disposable cartridges, I/O interface, and integrated NiceLabel driver to meet any variable data printing requirement.",
    points: ["Up to 4 HP cartridges", "I/O interface", "NiceLabel driver integrated"],
  },
  {
    slug: "famjet-pleyon",
    tag: "Printing",
    brand: "Famjet · Italy",
    title: "Famjet Pleyon TIJ Printer",
    image: "/images/products/famjet-pleyon.png",
    description:
      "The HP 2.5 TIJ solution for high-volume printing on all types of surfaces, featuring ½″ cartridges with a 400 ml bulk solvent-based ink system — reduces printing costs by over 60%.",
    points: ["High-volume TIJ printing", "400 ml bulk ink system", "Over 60% cost reduction"],
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

const productSlugAliases: Record<string, string> = {
  "pipeline-metal-detector": "pipe-type-metal-detector",
  "bulk-metal-detector": "fall-type-metal-detector",
  "nad4000-alcon": "aluminum-packaged-metal-detector",
  "x-ray-inspection-system": "fscan-3280d",
  "famjet-pleyon-tij": "famjet-pleyon",
  "famjet-m5-tij": "famjet-m5",
  "automatic-check-weigher": "automatic-weighing",
};

export function getProductsByCategory(category: string) {
  if (category === "All") return products;
  return products.filter((p) => p.tag === category);
}

export function getCategoryCount(categoryId: string) {
  return products.filter((p) => p.tag === categoryId).length;
}

export function getProductBySlug(slug: string) {
  const resolvedSlug = productSlugAliases[slug] ?? slug;
  return products.find((p) => p.slug === resolvedSlug);
}

export function getFeaturedProduct(category: string = "All") {
  if (category !== "All") {
    const categoryProducts = getProductsByCategory(category);
    return categoryProducts[0] ?? null;
  }
  return getProductBySlug(featuredProductSlug) ?? products[0];
}

export function getProductSpecSections(product: Product): ProductSpecSection[] {
  const detailed = productSpecSectionsBySlug[product.slug];
  if (detailed?.length) {
    return [
      {
        title: "PRODUCT INFORMATION",
        specs: [
          { label: "Category", value: product.tag },
          { label: "Brand / Principal", value: product.brand },
          { label: "Overview", value: product.description },
        ],
      },
      ...detailed,
      {
        title: "SUPPORT",
        specs: [
          { label: "Line integration", value: "Suitable for production and packaging lines" },
          { label: "Support", value: "Installation, training and after-sales by Exalted" },
          { label: "Availability", value: "Supplied across Pakistan with global principal backing" },
        ],
      },
    ];
  }

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
      specs: product.points.map((point) => ({
        label: "",
        value: point,
      })),
    },
    {
      title: "SUPPORT",
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
