import type { ComponentType } from "react";

type IconProps = {
  className?: string;
};

function GearIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="24" cy="24" r="6" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.5 9.5l4.2 4.2M34.3 34.3l4.2 4.2M9.5 38.5l4.2-4.2M34.3 13.7l4.2-4.2" />
      <path d="M14 24a10 10 0 0 0 20 0" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M8 16l16-8 16 8v20l-16 8-16-8V16z" />
      <path d="M24 8v40M8 16l16 8 16-8" />
    </svg>
  );
}

function ScannerIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="10" y="14" width="28" height="24" rx="2" />
      <circle cx="24" cy="26" r="7" />
      <path d="M6 20h4M38 20h4M6 32h4M38 32h4" />
    </svg>
  );
}

function LaserModuleIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="6" y="18" width="36" height="16" rx="2" />
      <path d="M14 26h8M26 26h8" />
      <path d="M42 26h4M2 26h4" />
      <circle cx="24" cy="26" r="2" fill="currentColor" />
    </svg>
  );
}

function InkjetIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="8" y="10" width="20" height="28" rx="2" />
      <rect x="12" y="14" width="12" height="8" rx="1" />
      <path d="M28 22h8v8l6 4v4H28v-16z" />
      <path d="M14 30h8M14 34h6" />
    </svg>
  );
}

function PackagesIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="6" y="20" width="14" height="14" />
      <rect x="22" y="14" width="12" height="12" />
      <path d="M34 18v16a4 4 0 0 1-4 4H18" />
      <path d="M10 20V12a4 4 0 0 1 4-4h10" />
    </svg>
  );
}

function LargePrinterIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="6" y="8" width="36" height="24" rx="2" />
      <rect x="10" y="12" width="16" height="10" rx="1" />
      <path d="M6 32h36v8H6z" />
      <path d="M14 36h20" />
    </svg>
  );
}

function TijIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="8" y="12" width="32" height="20" rx="2" />
      <rect x="12" y="16" width="14" height="8" rx="1" />
      <rect x="10" y="36" width="28" height="4" rx="1" />
      <path d="M30 20h6M30 24h4" />
    </svg>
  );
}

function ThermalTransferIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="10" y="10" width="28" height="28" rx="2" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 16v16M16 24h16" />
      <path d="M20 20l8 8M28 20l-8 8" strokeLinecap="round" />
    </svg>
  );
}

const iconBySlug: Record<string, ComponentType<IconProps>> = {
  automation: GearIcon,
  "case-pallet-labelling": BoxIcon,
  "code-verification": ScannerIcon,
  "co2-lasers": LaserModuleIcon,
  "continuous-inkjet": InkjetIcon,
  "digital-printing": PackagesIcon,
  "fibre-lasers": LaserModuleIcon,
  "large-character-printing": LargePrinterIcon,
  "thermal-inkjet": TijIcon,
  "thermal-transfer": ThermalTransferIcon,
};

type TechnologyIconProps = IconProps & {
  slug: string;
};

export default function TechnologyIcon({ slug, className = "h-12 w-12" }: TechnologyIconProps) {
  const Icon = iconBySlug[slug] ?? GearIcon;
  return <Icon className={className} />;
}
