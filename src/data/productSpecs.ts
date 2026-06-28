import type { ProductSpec, ProductSpecSection } from "./products";

function features(...items: string[]): ProductSpec[] {
  return items.map((value) => ({ label: "", value }));
}

function section(title: string, specs: ProductSpec[]): ProductSpecSection {
  return { title, specs };
}

function featureSection(title: string, ...items: string[]): ProductSpecSection {
  return section(title, features(...items));
}

export const productSpecSectionsBySlug: Record<string, ProductSpecSection[]> = {
  "vertical-form-fill-seal": [
    featureSection(
      "KEY FEATURES",
      "The machine can automatically complete product conveying, measuring, feeding, filling and bag forming, date code printing, bag sealing and cutting.",
      "Servo-motor driven, twin belt film pulling system.",
      "High sensitive fiber optic photo sensor can automatically trace colour mark accurately."
    ),
  ],
  "tube-filling-machine": [
    featureSection(
      "KEY FEATURES",
      "Automatic tube loading, filling, heating, sealing, cutting and tube unloading.",
      "The precision of mechanical linking visual detection is within 2 mm.",
      "Mechanical tube feeding — only one unit need to be changed when tube size changing.",
      "Inner heat system using Leister hot air system to assure high quality sealing.",
      "Servo motor controls filling; filling volume can be easily adjusted on the touch screen.",
      "Plug-in filling type fills the product from the bottom of tubes, which ensures less air mixing with the filling material and decreases the possibility of oxidation.",
      "All contact parts are made of Stainless Steel #316, complying with GMP requirements."
    ),
  ],
  "tablet-counter": [
    featureSection(
      "KEY FEATURES",
      "Compact size, easy to operate and easy to clean.",
      "Digital display counting, ranging from 0 to 9999.",
      "Vibrating device with automatic feeding; speed adjustable.",
      "Vacuum suction outlet.",
      "Can be equipped with conveyor belt and PLC control system to realize fully automatic line."
    ),
  ],
  "automatic-top-labeler": [
    featureSection(
      "KEY FEATURES",
      "Machine main construction by Stainless Steel #304.",
      "PLC combined with touch screen control system.",
      "High accuracy labeling, ±1 mm tolerance.",
      "Servo motor driven labeling head; labeling speed is automatically synchronized with conveyor speed to ensure high speed and quality labeling."
    ),
  ],
  "round-bottle-labeler": [
    featureSection(
      "KEY FEATURES",
      "Machine main construction by Stainless Steel #304.",
      "PLC combined with touch screen control system.",
      "High accuracy labeling, ±1 mm tolerance.",
      "Servo motor driven labeling head; labeling speed is automatically synchronized with conveyor speed to ensure high speed and quality labeling.",
      "Equipped with bottle separating wheel to keep distance between two bottles."
    ),
  ],
  "front-back-labeler": [
    featureSection(
      "KEY FEATURES",
      "Machine main construction by Stainless Steel #304.",
      "PLC combined with touch screen control system.",
      "High accuracy labeling, ±1 mm tolerance.",
      "Servo motor driven labeling head; labeling speed is automatically synchronized with conveyor speed and top press belt to ensure high speed and quality labeling.",
      "Push and press sponge attachment is used to ensure smooth labeling without wrinkles or bubbles.",
      "Equipped with bottle separating wheel to keep distance between two bottles."
    ),
  ],
  "heavy-weighing": [
    featureSection(
      "KEY FEATURES",
      "Heavy-duty check weigher for large and dense products.",
      "Robust construction for industrial production environments.",
      "Accurate dynamic weighing for high-mass packs.",
      "Integrated rejection for overweight and underweight products."
    ),
  ],
  "high-speed-automatic-weighing": [
    featureSection(
      "KEY FEATURES",
      "High-speed in-motion weighing without reducing line throughput.",
      "Automatic weight verification at production speed.",
      "Programmable tolerance bands and rejection control.",
      "Ideal for fast-moving food and beverage lines."
    ),
  ],
  "metal-detector-check-weigher": [
    featureSection(
      "KEY FEATURES",
      "Combined metal detection and check weighing in one system.",
      "Single-pass inspection for contamination and weight.",
      "Reduced footprint compared to separate devices.",
      "Synchronized rejection for metal and weight faults."
    ),
  ],
  "multi-lane-high-accuracy-weighing": [
    featureSection(
      "KEY FEATURES",
      "Multi-lane check weigher for parallel production lanes.",
      "High accuracy weight verification for giveaway control.",
      "Independent lane monitoring and rejection.",
      "Suitable for multi-pack and precision weighing applications."
    ),
  ],
  "multi-lane-high-speed-weighing": [
    featureSection(
      "KEY FEATURES",
      "Multi-lane configuration for high-speed production lines.",
      "Simultaneous weight check across multiple lanes.",
      "Maintains throughput on demanding packaging lines.",
      "Production statistics and lane-level reporting."
    ),
  ],
  "automatic-weighing": [
    featureSection(
      "KEY FEATURES",
      "By inputting throughput, optimal weighing conditions can be automatically set.",
      "Product length is put in automatically.",
      "Available to control weighing time and interval according to product conditions.",
      "Discretionary weighing range setting function by absolute and deviation weighing method.",
      "Auto data back-up when power down or electrical supply interruption.",
      "Auto zero tracking function which always sets zero value on operation.",
      "Variable speed with inverter.",
      "Temperature stabilization and noise compensation circuits.",
      "Available to control external equipment by input & output interface (barcode scanner, inkjet printer, metal detector, etc.).",
      "Real time monitoring with a smart phone.",
      "Statistic and print (option).",
      "External machine compatible (option).",
      "Integrate with a metal detector (option)."
    ),
    section("MODEL", [{ label: "Series", value: "NWC-3000 ABACUS" }]),
  ],
  "conveyor-metal-detector": [
    featureSection(
      "OVERVIEW",
      "The conveyor type metal detector is the most widely demanded model. It is a suitable model for packed and bulk products which are carried on conveyor system."
    ),
    section("MODEL", [{ label: "Series", value: "SEEKER" }]),
  ],
  "pharma-metal-detector": [
    featureSection(
      "KEY FEATURES",
      "Excellent performance.",
      "Easy installation due to compact design.",
      "Applicable to various types of production line due to its adjustable height structure.",
      "Easy moving by casters.",
      "Easy maintenance and cleaning due to design for disassembly without tools.",
      "Manageable metal detecting history.",
      "Standard satisfaction of GMP."
    ),
    section("MODEL", [{ label: "Series", value: "PHARMA / MEDIC" }]),
  ],
  "fall-type-metal-detector": [
    featureSection(
      "OVERVIEW",
      "For inspecting powder and fine-grained bulk materials at food line, chemistry and various fields."
    ),
    featureSection(
      "KEY FEATURES",
      "Easy operating.",
      "Unrivalled detection sensitivity.",
      "Suitable for free falling a weigher and a bag maker.",
      "The detection part and controller are basic options.",
      "The frame is an optional part.",
      "Output detection signal.",
      "The diverter is an optional part."
    ),
    section("MODEL", [{ label: "Series", value: "FALL / QUICKER" }]),
  ],
  "pipe-type-metal-detector": [
    featureSection(
      "OVERVIEW",
      "For inspecting liquid and pastry product."
    ),
    featureSection(
      "KEY FEATURES",
      "Metal separation using a ball valve system for minimum loss and continuous production.",
      "Washing down.",
      "Applicable for high temperature product (Max. 80°C).",
      "Applicable for stand pipe size (1.5S, 2S and others).",
      "Output detection signal.",
      "The valve is optional part."
    ),
    section("MODEL", [{ label: "Series", value: "PIPE / STEAMER" }]),
  ],
  "aluminum-packaged-metal-detector": [
    featureSection(
      "OVERVIEW",
      "Detect metal contamination packed in aluminium."
    ),
    featureSection(
      "KEY FEATURES",
      "Without hazardous X-Rays.",
      "Wear-free detecting system.",
      "No need to care about product effect & hot temperature.",
      "Usable with every type of aluminum-packaged products.",
      "Easy & user friendly design.",
      "Password setup function.",
      "Low investment and maintenance cost.",
      "No need to be certified or inspected by government law.",
      "Product orientation does not influence the signal strength.",
      "Easy to learn & no need to train an operator.",
      "Connectivity to various external devices.",
      "Manageable metal detecting history.",
      "Easy software update."
    ),
    section("MODEL", [{ label: "Series", value: "ALCON" }]),
  ],
  "markem-imaje-5800": [
    featureSection(
      "PRINT FEATURES",
      "Print densities available: 1 to 8.",
      "Encoder scaling allows for conveyor line speed matching and for higher print speeds with a reduction in print resolution.",
      "Print area: maximum printhead print height 65 mm; print length 1,000 mm.",
      "Print specification: full true type font supported.",
      "Printing of real-time clock (hr/min), dates and auto updating best before dates and serial numbers.",
      "Barcodes (linear and 2D): ITF, Code 39, Code 128, EAN 128, EAN 8, EAN 13, UPC A, UPC E, Data matrix, RSS linear, RSS composite, QR, RSS 14, RSS expanded, PDF 417. Maximum speed is application dependent."
    ),
    featureSection(
      "OPERATIONS",
      "5800: up to two print heads.",
      "User interface: color LCD touch screen used for image selection, variable data entry, diagnostics and system setup.",
      "Selectable multi-language menus.",
      "Image preview.",
      "Access level password protection.",
      "Full system diagnostic menu.",
      "Printhead orientations: vertical or up to 20° of process direction."
    ),
  ],
  "markem-imaje-2200": [
    featureSection(
      "PRINT FEATURES",
      "Print methods: thermal transfer or direct thermal.",
      "Maximum print speed: 300 mm/s.",
      "Fonts: 16 smooth scalable fonts available.",
      "Graphic features: BMP, WMF, PCX, PNG, ICO, GIF, TIFF, JPEG."
    ),
    section("MEDIA SPECIFICATIONS", [
      { label: "Media types", value: "Die-cut self-adhesive labels" },
      { label: "Maximum label width", value: "178 mm" },
      { label: "Maximum label roll", value: "350 mm" },
      { label: "Inner core", value: "76 mm" },
      { label: "Ink ribbon length", value: "660 m" },
      { label: "Ribbon core", value: "25 mm" },
    ]),
    featureSection(
      "OPERATIONS",
      "Keypad: start, pause, print.",
      "Communication interface: 2 x In via Opto, 5 x Out via relay, 24 VDC.",
      "High speed RS-232, 300 – 115,200 bps.",
      "Ethernet 10/100 (LPD, Telnet, FTP, web server).",
      "USB for backup/restore and label upload (simple user interface)."
    ),
  ],
  "maplejet-pd53": [
    featureSection(
      "FEATURES",
      "Resolution: 180 DPI (print height 53 mm) or 360 DPI (print height 26 mm).",
      "Max print speed: 60 m/min.",
      "Height range of printable characters: 1–53 mm.",
      "Printable languages: all available on request.",
      "Six pre-loaded fonts (user defined).",
      "Logo printing option: yes.",
      "Message component combination: text + date + time + logo + counter + shift + barcode + external data + basic shapes.",
      "All major barcode symbologies supported (1D & 2D).",
      "Various counter options (ascending, descending, external data, counter, time).",
      "Print module angle adjustment: 0–180°."
    ),
    section("SPECIFICATIONS", [
      { label: "Body material", value: "Stainless steel" },
      { label: "Weight with stand", value: "24 kg" },
      { label: "Controller dimension", value: "300 × 192 × 60 mm" },
      { label: "Display screen", value: "8.4˝ color TFT LCD with industrial touchscreen" },
      { label: "Printing channels", value: "2 channels with separate messages" },
      { label: "Print module connection", value: "Expandable up to 6 heads" },
      { label: "Connectivity", value: "Computer, PLC, weighing device, barcode reader" },
      { label: "Connection ports", value: "USB, RS232" },
      { label: "External database print capacity", value: "More than 1 million records" },
    ]),
  ],
  "anser-u2-smart": [
    featureSection(
      "FEATURES",
      "4-in-1 compact design, integrated with screen, controller, printhead & ink cartridge.",
      "2.8˝ large colour LCD with LED backlit screen for easy operation.",
      "Completely stand-alone, no PC required for operation.",
      "Remote control keypad for contact-less user-friendly operation.",
      "Plug-n-print ink cartridge design, no maintenance required.",
      "SD card slot design for easy software upgrades and data backup.",
      "Hot swap ink cartridge changeover system with built-in circuit safeguard.",
      "Auto ink identification to optimise printing quality.",
      "Quick start-up within a few seconds.",
      "System self-diagnostic reporting for easy troubleshooting.",
      "Real-time pop-up alert messages on screen.",
      "Dual-switchable nozzle design to double working lifetime of printhead.",
      "Built-in anti-shock mechanism to protect the printhead.",
      "Weighs only 0.49 kg (1.08 lb) without bracketry or ink cartridge.",
      "All-in-one price — no extra or hidden charges."
    ),
    section("SPECIFICATIONS", [
      { label: "Model", value: "Anser U2 Smart" },
      { label: "Display", value: "2.8˝ full colour LCD with LED backlit screen" },
      { label: "Printable images", value: "Alphanumeric; logo; date/time; expiry date; shift code; counter; and barcode" },
    ]),
  ],
  "markem-imaje-9028": [
    featureSection(
      "PRINT SPECIFICATIONS",
      "Mono-jet printhead G head (printing resolution: 71 dpi).",
      "Up to 4 lines of print.",
      "Print speed: up to 4.4 m/s.",
      "Font height from 5 to 24 dots.",
      "Character height: from 1.8 to 8.7 mm.",
      "Wide choice of characters (Latin, Arabic, Cyrillic, Greek, Japanese, Chinese, Hebrew, Korean…)."
    ),
    featureSection(
      "OPERATIONS",
      "Message library (up to 100 messages).",
      "International operator/machine interface (choice of 31 languages).",
      "Large WYSIWYG backlit blue screen.",
      "Integrated help for navigation and diagnostics.",
      "Creation of logos directly on the operator/machine interface.",
      "USB port.",
      "M6' ink circuit.",
      "Jet Speed Control guarantees marking quality.",
      "Automatic selection of fonts, depending on print speed and printhead/object distance.",
      "Possibility to choose ink types: quick-drying MEK-free and MEK, alcohol-based, colour changing for sterilization process.",
      "2 sealed intelligent cartridges, 0.8 litre each.",
      "Quick connect/disconnect of accessories (photocell, encoder, alarm).",
      "RS-232 connectivity."
    ),
  ],
  "markem-imaje-9410": [
    featureSection(
      "FEATURES",
      "Resolution: 180 DPI.",
      "Max print speed: 40 m/min.",
      "Max number of lines: 8.",
      "Height range: 1–18 mm.",
      "Printable languages: all available on request.",
      "Six pre-loaded fonts (user defined).",
      "Logo printing option: yes.",
      "Message component combination: text + date + time + logo + counter + shift + barcode + external data + basic shapes.",
      "All major barcode symbologies supported (1D & 2D).",
      "Various counter options (ascending, descending, external data, counter, time).",
      "Ink consumption control system (ink reduction of up to 75%)."
    ),
    section("CONTROLLER", [
      { label: "Display screen", value: "8.4˝ color TFT LCD with industrial touchscreen" },
      { label: "Printing channels", value: "2 channels with separate messages" },
      { label: "Connectivity", value: "Computer, PLC, weighing device, barcode reader" },
      { label: "Connection ports", value: "USB, RS232" },
      { label: "External database print capacity", value: "More than 1 million records" },
      { label: "Menu language", value: "All languages available on request" },
      { label: "Message saving capacity", value: "Up to 999 messages" },
    ]),
  ],
  "maplejet-pro-digit-bicolor": [
    featureSection(
      "FEATURES",
      "Resolution: 180 DPI.",
      "Max print speed: 40 m/min.",
      "Max number of lines: 8.",
      "Height range: 1–18 mm.",
      "Printable languages: all available on request.",
      "Six pre-loaded fonts (user defined).",
      "Logo printing option: yes.",
      "Message component combination: text + date + time + logo + counter + shift + barcode + external data + basic shapes.",
      "All major barcode symbologies supported (1D & 2D).",
      "Various counter options (ascending, descending, external data, counter, time).",
      "Ink consumption control system (ink reduction of up to 75%)."
    ),
    section("CONTROLLER", [
      { label: "Display screen", value: "8.4˝ color TFT LCD with industrial touchscreen" },
      { label: "Printing channels", value: "2 channels with separate messages" },
      { label: "Connectivity", value: "Computer, PLC, weighing device, barcode reader" },
      { label: "Connection ports", value: "USB, RS232" },
      { label: "External database print capacity", value: "More than 1 million records" },
      { label: "Menu language", value: "All languages available on request" },
      { label: "Message saving capacity", value: "Up to 999 messages" },
    ]),
  ],
  "maplejet-pro-digit-light": [
    featureSection(
      "FEATURES",
      "Resolution: 180 DPI or 90 DPI.",
      "Max print speed: 35 m/min.",
      "Max number of lines: 4.",
      "Height range: 2–18 mm.",
      "Printable languages: English.",
      "7 fonts of user's choice.",
      "Message component combination: text + date + time.",
      "Production & expiry date, time: automatic.",
      "Print head connection: expandable up to 6 heads.",
      "Print module angle adjustment: 0–180°."
    ),
    section("CONTROLLER", [
      { label: "Display screen", value: "Single color industrial LCD" },
      { label: "Printing channels", value: "2 channels (same message)" },
      { label: "Print head connection", value: "Expandable up to 6 heads" },
      { label: "Input voltage", value: "90 VAC – 240 VAC" },
    ]),
  ],
  "anser-u2-pro-tij": [
    featureSection(
      "FEATURES",
      "1/3 price and 1/30 size compared with CIJ printers.",
      "Plug-n-print design with zero maintenance.",
      "Designed for industrial printing applications.",
      "Anser U2 Pro is 100% solvent compatible.",
      "High-speed printing.",
      "Easy ink cartridge replacement design with no maintenance.",
      "Save up to 30% of ink with smaller ink drop size.",
      "Environmental and pollution-free (no more MEK solvent)."
    ),
    section("SPECIFICATIONS", [
      { label: "Model", value: "Anser U2 Pro" },
      { label: "Display", value: "3.5˝ full colour LCD with LED backlit screen" },
      { label: "Dimensions", value: "119 mm (L) × 78.8 mm (W) × 76 mm (H)" },
      { label: "Weight", value: "0.55 kg excluding brackets and ink cartridge" },
      { label: "LED indicators", value: "5 indicators: alarm; low ink; print; run; remote on/off" },
      { label: "Operational menu", value: "Digital Menu Selection (DMS) for easy operation" },
      { label: "Input device", value: "Pocket-size IR remote keypad; compact 7˝ uPad with multi touch function (optional)" },
      { label: "Cartridges", value: "Lexmark 36 ml solvent compatible for non-porous substrates" },
      { label: "Printable images", value: "Alphanumeric; logo; date/time; expiry date; shift code; counter; and barcode" },
    ]),
  ],
  "laser-printing-systems": [
    featureSection(
      "KEY FEATURES",
      "10-inch WYSIWYG editor.",
      "Modular laser marking.",
      "Multi-substrate compatibility."
    ),
  ],
  "barcode-printer-station": [
    featureSection(
      "KEY FEATURES",
      "Industrial barcode printing.",
      "PC-controlled workflow.",
      "Conveyor-ready integration."
    ),
  ],
  "fscan-3280d": [
    featureSection(
      "KEY FEATURES",
      "X-ray automatic inspection system for packaged products on production lines.",
      "FSCAN-Series platform with integrated control and monitoring.",
      "Detects foreign objects in sealed food and pharma packaging.",
      "Designed with user convenience in mind.",
      "Customization available according to user requirements and applications, including software and other specifications."
    ),
    section("MODEL", [{ label: "Model", value: "FSCAN-3280D" }]),
  ],
  "fscan-4280db": [
    featureSection(
      "OVERVIEW",
      "This equipment is designed to inspect foreign objects in products in a bulk state rather than in a packaged condition."
    ),
    featureSection(
      "KEY FEATURES",
      "Provides excellent detection performance for medium-density foreign materials within non-uniform products.",
      "Designed with user convenience in mind.",
      "Customization is available according to user requirements and applications, including software, table size, and other specifications."
    ),
    section("MODEL", [{ label: "Model", value: "FSCAN-4280DB" }]),
  ],
  "fscan-4500dp": [
    featureSection(
      "OVERVIEW",
      "This is a pipeline-type inspection system. Detects foreign objects in products on food processing production lines."
    ),
    featureSection(
      "KEY FEATURES",
      "Provides excellent detection performance for medium-density foreign materials within non-uniform products.",
      "Designed with user convenience in mind.",
      "Customization is available according to user requirements and applications, including software, table size, and other specifications."
    ),
    section("MODEL", [{ label: "Model", value: "FSCAN-4500DP" }]),
  ],
  "famjet-m5": [
    featureSection(
      "OVERVIEW",
      "Industrial TIJ performance accessible even for entry-level budgets, with ½″ HP 2.5 disposable cartridges for all types of surfaces."
    ),
    section("MODEL", [{ label: "Model", value: "Famjet M5" }]),
  ],
  "famjet-m7": [
    featureSection(
      "OVERVIEW",
      "The simple and flexible TIJ solution for in-line carton coding using 1″ disposable cartridges."
    ),
    section("MODEL", [{ label: "Model", value: "Famjet M7" }]),
  ],
  "famjet-m9": [
    featureSection(
      "OVERVIEW",
      "The Famjet TIJ in its most complete configuration: up to 4 HP 2.5 ½″ disposable cartridges, I/O interface, and integrated NiceLabel driver to meet any variable data printing requirement."
    ),
    section("MODEL", [{ label: "Model", value: "Famjet M9" }]),
  ],
  "famjet-pleyon": [
    featureSection(
      "OVERVIEW",
      "The HP 2.5 TIJ solution for high-volume printing on all types of surfaces, featuring ½″ cartridges with a 400 ml bulk solvent-based ink system, reduces printing costs by over 60%."
    ),
    section("MODEL", [{ label: "Model", value: "Famjet Pleyon" }]),
  ],
  "automatic-labeling-machine": [
    featureSection(
      "KEY FEATURES",
      "Stainless steel conveyor.",
      "Round & flat label application.",
      "HMI control panel."
    ),
  ],
  "machine-vision-bottle": [
    featureSection(
      "KEY FEATURES",
      "Cap presence & tightness.",
      "Fill level inspection.",
      "OCR & datamatrix reading."
    ),
  ],
  "machine-vision-blister": [
    featureSection(
      "KEY FEATURES",
      "Broken tablet detection.",
      "Empty pocket checks.",
      "Unit box formation validation."
    ),
  ],
};
