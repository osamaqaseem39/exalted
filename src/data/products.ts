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
    slug: "pharma-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Pharma Metal Detector",
    image: "/images/products/pharma-metal-detector.jpeg",
    description:
      "NMD530 Medic series pharmaceutical metal detector with closed coil detection, IP66 rating, and grade 316 diverter — processing up to 15,000 tablets per minute with failsafe rejection.",
    points: [
      "NMD530 Medic series",
      "Up to 15,000 tablets/min",
      "IP66 with grade 316 diverter",
    ],
  },
  {
    slug: "conveyor-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Conveyor Type Metal Detector",
    image: "/images/products/conveyor-metal-detector.jpeg",
    description:
      "NMD530 Seeker series conveyor metal detector with closed coil system, high-quality filtering, and IP66 enclosure for reliable contamination detection on packaging lines.",
    points: ["NMD530 Seeker series", "Closed coil detection", "IP66 rated enclosure"],
  },
  {
    slug: "pipeline-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Pipeline Metal Detector",
    image: "/images/products/pipeline-metal-detector.jpeg",
    description:
      "NMD530 Steamer series pipeline detector for liquid and pasty products up to 80°C. Ball valve rejection, wash-down design, and 7-inch colour touch screen HMI.",
    points: ["NMD530 Steamer series", "Liquid & pasty products", "Ball valve rejection"],
  },
  {
    slug: "bulk-metal-detector",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "Bulk Metal Detector",
    image: "/images/products/conveyor-metal-detector.jpeg",
    description:
      "NMD530 Quicker series detector for powders and fine-grained bulk materials. Flap-type diverter ideal for vertical packaging lines between weigher and bagger with minimal footprint.",
    points: ["NMD530 Quicker series", "Powder & bulk inspection", "Flap reject diverter"],
  },
  {
    slug: "nad4000-alcon",
    tag: "Detection",
    brand: "NOW Systems · Korea",
    title: "NAD4000 Series Alcon",
    image: "/images/products/conveyor-metal-detector.jpeg",
    description:
      "NAD4000 metal detection system with 240 mm passing width, adjustable passing height 50–150 mm, magnetic sensor, and 240 mm belt width for conveyor integration.",
    points: ["240 mm passing width", "Adjustable height 50–150 mm", "Magnetic sensor"],
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
    brand: "NOW Systems · Korea",
    title: "NWC-3000 Series Abacus Check Weigher",
    image: "/images/products/automatic-check-weigher.jpeg",
    description:
      "NWC-3000 ABACUS dynamic check weigher with automatic optimal weighing setup, smartphone monitoring, external device I/O, and optional metal detector integration.",
    points: ["Auto optimal weighing setup", "Smartphone monitoring", "Metal detector integration"],
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
    slug: "famjet-pleyon-tij",
    tag: "Printing",
    brand: "Famjet · Italy",
    title: "Famjet Pleyon TIJ Printer",
    image: "/images/products/famjet-pleyon-tij.jpeg",
    description:
      "High-resolution thermal inkjet printer delivering up to 2400 dpi for crisp codes on cartons, labels, and flexible packaging. 9-inch touchscreen interface with 1D and 2D barcode support.",
    points: ["Up to 2400 dpi resolution", "9˝ touchscreen interface", "1D & 2D barcode printing"],
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
