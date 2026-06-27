import { products, type Product } from "./products";
import { solutions, type Solution } from "./solutions";

export type Technology = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  features: string[];
  applications: string[];
  industries: string[];
  image: string;
  iconImage: string;
  relatedProductSlugs?: string[];
  relatedSolutionSlugs?: string[];
};

export const technologies: Technology[] = [
  {
    slug: "automation",
    title: "Automation",
    shortDescription:
      "Line integration, PLC connectivity, and automated workflows for coding, inspection, and packaging equipment.",
    overview:
      "Exalted connects printers, vision systems, weighers, and reject stations into cohesive production lines. Automation reduces manual intervention, improves data capture, and keeps high-speed lines running with fewer stoppages.",
    features: [
      "PLC and line controller integration",
      "Automated reject and divert logic",
      "Production data capture and reporting",
      "Synchronized device triggering",
      "Remote monitoring and alarm handling",
    ],
    applications: [
      "End-of-line packaging automation",
      "Serialized production workflows",
      "Multi-device line orchestration",
      "Quality data aggregation",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Industrial Manufacturing"],
    image: "/images/technologies/automation.png",
    iconImage: "/images/technologies/automation.png",
    relatedProductSlugs: ["barcode-printer-station", "laser-printing-systems"],
    relatedSolutionSlugs: ["software-solutions", "track-trace"],
  },
  {
    slug: "case-pallet-labelling",
    title: "Case & Pallet Labelling",
    shortDescription:
      "Print-and-apply and label application systems for cases, cartons, and logistics units.",
    overview:
      "Accurate case and pallet labeling is essential for warehouse routing, retail compliance, and export documentation. Exalted supplies labeling systems configured for your conveyor speed, label size, and integration requirements.",
    features: [
      "Print-and-apply or pre-printed label application",
      "GS1 logistics label support",
      "Synchronization with conveyor and ERP data",
      "Missing-label detection options",
      "Robust applicators for demanding lines",
    ],
    applications: [
      "Secondary carton labeling",
      "Pallet SSCC labeling",
      "Retail-ready case marking",
      "Export and logistics compliance",
    ],
    industries: ["Food & Beverage", "Pharma & Life Sciences", "Packaging & FMCG"],
    image: "/images/technologies/case-pallet-labelling.png",
    iconImage: "/images/technologies/case-pallet-labelling.png",
    relatedProductSlugs: ["automatic-labeling-machine"],
    relatedSolutionSlugs: ["labeling", "track-trace"],
  },
  {
    slug: "code-verification",
    title: "Code Verification",
    shortDescription:
      "OCR, OCV, and barcode verification to confirm print quality, readability, and compliance on every pack.",
    overview:
      "Machine vision systems validate that codes, batch data, and labels are present, legible, and correct before products leave the line. Exalted integrates verification cameras with printers and rejection systems for closed-loop quality control.",
    features: [
      "1D and 2D barcode grading",
      "OCR/OCV for batch and expiry data",
      "Real-time reject on failed reads",
      "Image archiving for audit trails",
      "Integration with serialization workflows",
    ],
    applications: [
      "Pharma serialization verification",
      "Label print quality checks",
      "Fill-level and cap inspection",
      "Retail barcode compliance",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Personal Care & Cosmetics"],
    image: "/images/technologies/code-verification.png",
    iconImage: "/images/technologies/code-verification.png",
    relatedProductSlugs: ["machine-vision-bottle", "machine-vision-blister"],
    relatedSolutionSlugs: ["machine-vision-inspection", "track-trace"],
  },
  {
    slug: "co2-lasers",
    title: "CO2 Lasers",
    shortDescription:
      "CO2 laser marking for paper, cardboard, glass, plastics, and coated substrates at production speed.",
    overview:
      "CO2 laser systems deliver permanent, consumable-free marking for cartons, PET, glass, and flexible packaging. IntelliCode laser platforms from Exalted offer modular heads, WYSIWYG editing, and stable operation for industrial coding.",
    features: [
      "Permanent marking without inks or solvents",
      "High-contrast codes on porous substrates",
      "Modular laser head configurations",
      "10-inch WYSIWYG job editor",
      "Low operating cost per mark",
    ],
    applications: [
      "Carton batch and expiry coding",
      "Beverage glass marking",
      "Food packaging date codes",
      "Industrial part identification",
    ],
    industries: ["Food & Beverage", "Pharma & Life Sciences", "Industrial Manufacturing"],
    image: "/images/technologies/co2-lasers.png",
    iconImage: "/images/technologies/co2-lasers.png",
    relatedProductSlugs: ["laser-printing-systems"],
    relatedSolutionSlugs: ["printing-equipment"],
  },
  {
    slug: "continuous-inkjet",
    title: "Continuous Inkjet",
    shortDescription:
      "CIJ printing for high-speed lines, variable data, and non-contact coding on diverse packaging materials.",
    overview:
      "Continuous inkjet remains the workhorse of industrial coding for bottles, cans, cables, and flexible film. Exalted supplies CIJ systems matched to your substrate, line speed, and code content requirements.",
    features: [
      "Non-contact printing at line speed",
      "Multiple ink types for substrate compatibility",
      "1D and 2D code capability",
      "Quick message changeover",
      "IP-rated enclosures for wash-down areas",
    ],
    applications: [
      "Bottle and can date coding",
      "Cable and wire marking",
      "Flexible film printing",
      "High-speed beverage lines",
    ],
    industries: ["Food & Beverage", "Industrial Manufacturing", "Tobacco & Specialty"],
    image: "/images/technologies/continuous-inkjet.png",
    iconImage: "/images/technologies/continuous-inkjet.png",
    relatedProductSlugs: ["famjet-pleyon", "famjet-m5"],
    relatedSolutionSlugs: ["printing-equipment"],
  },
  {
    slug: "digital-printing",
    title: "Digital Printing",
    shortDescription:
      "Variable-data digital printing for cartons, labels, and secondary packaging with fast changeovers.",
    overview:
      "Digital printing enables short runs, promotional codes, and regional variants without lengthy setup. Exalted configures TIJ and laser-based digital marking solutions for cartons, labels, and flexible packaging.",
    features: [
      "Variable data without plate changes",
      "High-resolution graphics and barcodes",
      "Fast SKU changeover",
      "Integration with ERP and MES data",
      "Suitable for serialization and marketing codes",
    ],
    applications: [
      "Promotional and regional packaging",
      "Serialization Data Matrix printing",
      "Short-run carton coding",
      "Multi-language label data",
    ],
    industries: ["Pharma & Life Sciences", "Packaging & FMCG", "Personal Care & Cosmetics"],
    image: "/images/technologies/digital-printing.png",
    iconImage: "/images/technologies/digital-printing.png",
    relatedProductSlugs: ["famjet-pleyon", "famjet-m5", "laser-printing-systems"],
    relatedSolutionSlugs: ["printing-equipment", "track-trace"],
  },
  {
    slug: "fibre-lasers",
    title: "Fibre Lasers",
    shortDescription:
      "Fiber laser marking for metals, hard plastics, and high-contrast permanent codes on industrial parts.",
    overview:
      "Fiber lasers excel at marking metals, ABS, and coated components with fine detail and high speed. Exalted supplies IntelliCode fiber laser systems for cables, caps, industrial parts, and durable packaging applications.",
    features: [
      "Fine detail and small character marking",
      "Excellent contrast on metals and plastics",
      "Long laser source life",
      "Minimal maintenance requirements",
      "Modular integration with production lines",
    ],
    applications: [
      "Metal and cable marking",
      "Industrial component identification",
      "Cap and closure coding",
      "Permanent traceability marks",
    ],
    industries: ["Industrial Manufacturing", "Pharma & Life Sciences", "Tobacco & Specialty"],
    image: "/images/technologies/fibre-lasers.png",
    iconImage: "/images/technologies/fibre-lasers.png",
    relatedProductSlugs: ["laser-printing-systems"],
    relatedSolutionSlugs: ["printing-equipment"],
  },
  {
    slug: "large-character-printing",
    title: "Large Character Printing",
    shortDescription:
      "High-visibility large character coders for cartons, cases, and outer packaging in warehouse environments.",
    overview:
      "Large character printing delivers bold batch codes, logos, and handling marks on corrugated cases and outer packs. Exalted configures systems for legibility at distance and durability in logistics and storage conditions.",
    features: [
      "Bold characters for case-level coding",
      "Multiple ink and printhead options",
      "Suitable for porous corrugated board",
      "Remote message management",
      "Integration with case packers and conveyors",
    ],
    applications: [
      "Corrugated case coding",
      "Pallet and logistics marking",
      "Warehouse-readable batch data",
      "Export carton identification",
    ],
    industries: ["Food & Beverage", "Industrial Manufacturing", "Packaging & FMCG"],
    image: "/images/technologies/large-character-printing.png",
    iconImage: "/images/technologies/large-character-printing.png",
    relatedProductSlugs: ["laser-printing-systems", "famjet-pleyon"],
    relatedSolutionSlugs: ["printing-equipment", "labeling"],
  },
  {
    slug: "thermal-inkjet",
    title: "Thermal Inkjet",
    shortDescription:
      "TIJ printing up to 2400 dpi for crisp barcodes, text, and graphics on cartons and labels.",
    overview:
      "Thermal inkjet delivers high-resolution, maintenance-friendly coding for secondary packaging and labels. Famjet TIJ systems from Exalted offer touchscreen control, HP printhead reliability, and fast installation on existing lines.",
    features: [
      "Up to 2400 dpi print resolution",
      "HP TIJ cartridge technology",
      "9-inch touchscreen interfaces",
      "1D and 2D barcode printing",
      "Maintenance-free operation",
    ],
    applications: [
      "Carton and label coding",
      "Serialization Data Matrix printing",
      "Secondary packaging variable data",
      "High-quality retail-ready marks",
    ],
    industries: ["Pharma & Life Sciences", "Food & Beverage", "Personal Care & Cosmetics"],
    image: "/images/technologies/thermal-inkjet.png",
    iconImage: "/images/technologies/thermal-inkjet.png",
    relatedProductSlugs: ["famjet-pleyon", "famjet-m5"],
    relatedSolutionSlugs: ["printing-equipment", "track-trace"],
  },
  {
    slug: "thermal-transfer",
    title: "Thermal Transfer",
    shortDescription:
      "Thermal transfer overprinting for flexible film, labels, and packaging with durable, high-quality codes.",
    overview:
      "Thermal transfer overprinters (TTO) apply crisp codes and graphics onto flexible packaging films and labels during the packaging process. Exalted supports TTO selection, integration, and ribbon optimization for your film type and line speed.",
    features: [
      "High-quality codes on flexible film",
      "Ribbon-based durable printing",
      "Synchronization with form-fill-seal machines",
      "Real-time message updates",
      "Suitable for food and pharma film",
    ],
    applications: [
      "Flexible packaging date coding",
      "Label overprinting",
      "Snack and confectionery film",
      "Pharma sachet and pouch marking",
    ],
    industries: ["Food & Beverage", "Pharma & Life Sciences", "Packaging & FMCG"],
    image: "/images/technologies/thermal-transfer.png",
    iconImage: "/images/technologies/thermal-transfer.png",
    relatedProductSlugs: ["automatic-labeling-machine", "famjet-pleyon"],
    relatedSolutionSlugs: ["printing-equipment", "labeling"],
  },
];

export function getTechnologyBySlug(slug: string) {
  return technologies.find((technology) => technology.slug === slug);
}

export function getProductsForTechnology(slug: string): Product[] {
  const technology = getTechnologyBySlug(slug);
  if (!technology?.relatedProductSlugs?.length) return [];

  return technology.relatedProductSlugs
    .map((productSlug) => products.find((product) => product.slug === productSlug))
    .filter((product): product is Product => Boolean(product));
}

export function getSolutionsForTechnology(slug: string): Solution[] {
  const technology = getTechnologyBySlug(slug);
  if (!technology?.relatedSolutionSlugs?.length) return [];

  return technology.relatedSolutionSlugs
    .map((solutionSlug) => solutions.find((solution) => solution.slug === solutionSlug))
    .filter((solution): solution is Solution => Boolean(solution));
}

export function getRelatedTechnologies(slug: string, limit = 3) {
  const current = getTechnologyBySlug(slug);
  if (!current) return [];
  return technologies
    .filter(
      (technology) =>
        technology.slug !== slug &&
        technology.industries.some((industry) => current.industries.includes(industry))
    )
    .slice(0, limit);
}
