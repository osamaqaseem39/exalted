export const companyProfileParagraphs = [
  "is a prominent player in the Arena of Industrial Coding, Inspection and Packing Machines. Labeling Machines, Small Character Inkjet Printers, Hi-Resolution Inkjet Printers and Carton Coders based on TIJ and Piezo Inkjet, On-Line Check Weighers, Industrial Metal Detectors and X-Ray Vision Inspection Systems are our main areas of specialty. Our association with world renowned brands like Alpha-Pack China, Famjet - Italy, NOW SYSTEMS - Korea and Xavis - Korea shows our capabilities and confidence.",
  "A good knowledge of barcode systems, related hardware and our in-house software development capability enables us to offer solutions related to Pharma Serialization & Track and Trace, Assets, Production, Fleet & Warehouse management Systems. ECPS has built a reputation of being a company which supports its customers.",
  "We have made technical support of our installed base the primary method of earning customer satisfaction. This support commitment is manifest in our sales engineering, installation assistance, training capabilities, repair services, inventory stocking levels and managerial decisions.",
];

export const sectors = [
  {
    name: "Pharma & Life Sciences",
    description: "Serialization, blister inspection, metal detection, and compliance-ready coding for regulated markets.",
    solutions: ["Track & Trace", "Machine Vision", "Metal Detection", "TIJ Printing"],
  },
  {
    name: "Food & Beverage",
    description: "Check weighing, X-ray inspection, date coding, and label application for high-speed lines.",
    solutions: ["Check Weighing", "X-Ray", "Labeling", "Laser Marking"],
  },
  {
    name: "Packaging & FMCG",
    description: "Carton coding, sleeve labeling, and variable data printing for retail-ready packaging.",
    solutions: ["TIJ Printing", "Labeling", "Serialization", "Vision Inspection"],
  },
  {
    name: "Industrial Manufacturing",
    description: "Durable laser marking, large character printing, and traceability for heavy industry.",
    solutions: ["Laser Systems", "Metal Detection", "Barcode Printing", "Software"],
  },
  {
    name: "Personal Care & Cosmetics",
    description: "High-quality coding and labeling on bottles, tubes, and flexible packaging.",
    solutions: ["TIJ Printing", "Labeling", "Vision Inspection", "Check Weighing"],
  },
  {
    name: "Tobacco & Specialty",
    description: "Serialization, tax stamp integration, and high-speed coding for specialty products.",
    solutions: ["Serialization", "Laser Marking", "Vision Systems", "Metal Detection"],
  },
];

export const services = [
  {
    title: "Sales & Consultation",
    description: "Line assessment, equipment selection, and ROI planning for your production goals.",
  },
  {
    title: "Installation & Commissioning",
    description: "On-site setup, calibration, and validation support for production readiness.",
  },
  {
    title: "Training & Documentation",
    description: "Operator training, SOP documentation, and maintenance guidance for your team.",
  },
  {
    title: "Technical Support",
    description: "24/7 support commitment with spare parts, repair services, and remote assistance.",
  },
  {
    title: "Software Development",
    description: "Custom ERP integrations, traceability dashboards, and warehouse management systems.",
  },
  {
    title: "After-Sales Service",
    description: "Preventive maintenance, upgrades, and long-term partnership for installed equipment.",
  },
];

export const principalPartners = [
  {
    id: "intellicode",
    name: "IntelliCode",
    region: "Own Brand",
    featured: true,
    products: ["Laser Printers (CO2, Fiber, UV)"],
  },
  {
    id: "famjet",
    name: "Famjet",
    region: "Italy",
    products: ["TIJ Printer", "Carton Coders"],
  },
  {
    id: "now-systems",
    name: "NOW Systems",
    region: "South Korea",
    products: ["Automatic Check Weigher", "Metal Detectors"],
  },
  {
    id: "xavis",
    name: "Xavis",
    region: "South Korea",
    products: ["X-Ray Inspection Machines"],
  },
  {
    id: "alphapack",
    name: "Alphapack",
    region: "China",
    products: ["Labeling Machine"],
  },
  {
    id: "supervision",
    name: "SuperVision",
    region: "Exalted",
    products: ["Machine Vision Inspection"],
  },
  {
    id: "exalted",
    name: "Exalted",
    region: "Pakistan",
    products: ["Software Solutions"],
  },
] as const;

/** Flat principals list — product category paired with vendor */
export const principals = [
  { product: "Laser Printers (CO2, Fiber, UV)", vendor: "IntelliCode (Own Brand)" },
  { product: "TIJ Printer", vendor: "Famjet - Italy" },
  { product: "Carton Coders", vendor: "Famjet - Italy" },
  { product: "Automatic Check Weigher", vendor: "NOW Systems - South Korea" },
  { product: "Metal Detectors", vendor: "NOW Systems - South Korea" },
  { product: "X-Ray Inspection Machines", vendor: "Xavis - South Korea" },
  { product: "Labeling Machine", vendor: "Alphapack - China" },
  { product: "Machine Vision Inspection", vendor: "SuperVision - Exalted" },
  { product: "Software Solutions", vendor: "Exalted - Pakistan" },
] as const;

export const pharmaFlow = [
  "Supplier(s)",
  "Manufacturer",
  "Wholesaler distributor (primary)",
  "Pharmacy or hospital",
  "Patient",
];

export const pharmaLevels = [
  { level: "Level 4", name: "Enterprise", desc: "ERP Systems · EPCIS Event Manager · Reporting" },
  { level: "Level 3", name: "Production Plant", desc: "Serialized Data · Work Orders · Configuration" },
  { level: "Level 2", name: "Production Line", desc: "Transactional Serialization & Aggregation Data" },
  { level: "Level 1", name: "Device", desc: "Print · Inspect · Commission" },
];

export const offices = {
  karachi: {
    title: "Karachi Office",
    address: "House#100, Block-AI Sector-31/D, Korangi, Karachi",
    phone: "+92-302-8426797",
    whatsapp: "https://wa.me/923028426797",
  },
  lahore: {
    title: "Head Office — Lahore",
    address: "1ST Floor, 949-B Block, Faisal Town, Maulana Shaukat Ali Road, Lahore - 54770",
    email: "info@exalted.com.pk",
    website: "https://www.exalted.com.pk",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16014.30835161057!2d74.27719257879012!3d31.47679655333077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903dfca1f6d59%3A0x3a0d87af034998bc!2sExalted%20Coding%20%26%20Packing%20Solutions!5e0!3m2!1sen!2s!4v1781771271170!5m2!1sen!2s",
    mapsUrl: "https://www.google.com/maps/place/Exalted+Coding+%26+Packing+Solutions/@31.4767966,74.2771926,17z",
  },
};
