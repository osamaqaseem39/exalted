import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

export function NowSystemsLogo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`text-center leading-none ${className}`}>
      <p className="text-xl font-normal italic tracking-tight text-[#1D4ED8]">NOW</p>
      <p className="mt-0.5 text-[10px] font-normal italic tracking-[0.25em] text-[#1D4ED8]">SYSTEMS</p>
    </div>
  );
}

export function FamjetLogo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`text-center leading-none ${className}`}>
      <p className="text-xl font-normal tracking-[0.2em] text-[#8b1010]">FAMJET</p>
      <p className="mt-0.5 text-[8px] tracking-[0.3em] text-black/45">ITALY</p>
    </div>
  );
}

export function XavisLogo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`text-center leading-none ${className}`}>
      <p className="text-xl font-normal tracking-wide text-[#1E40AF]">XAVIS</p>
      <p className="mt-0.5 text-[8px] tracking-[0.2em] text-black/45">KOREA</p>
    </div>
  );
}

export function AlphapackLogo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="text-2xl font-normal text-[#38BDF8]">α</span>
      <span className="text-lg font-normal tracking-widest text-[#0EA5E9]">PACK</span>
    </div>
  );
}

export function MarkemImajeLogo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5B2D8B]">
        <div className="flex gap-[3px]">
          <span className="h-5 w-[3px] rounded-full bg-white" />
          <span className="h-5 w-[3px] rounded-full bg-white" />
          <span className="h-5 w-[3px] rounded-full bg-white" />
        </div>
      </div>
      <div className="leading-tight">
        <p className="text-[13px] font-normal text-[#6B7280]">markem-imaje</p>
        <p className="text-[8px] tracking-wide text-[#9CA3AF]">a Dover company</p>
      </div>
    </div>
  );
}

export function MapleJetLogo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="mx-auto mb-1 flex w-14 justify-center gap-1">
        <span className="h-1 w-6 rounded-full bg-[#2563EB]" />
        <span className="h-1 w-6 rounded-full bg-[#DC2626]" />
        <span className="h-1 w-6 rounded-full bg-[#2563EB]" />
      </div>
      <p className="text-base font-normal text-[#1D4ED8]">MapleJet</p>
    </div>
  );
}

export function AnserU2Logo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-lg font-normal text-black">ANSER</span>
      <span className="h-6 w-px bg-[#D1D5DB]" aria-hidden />
      <span className="text-xl font-extrabold text-[#EA580C]">U2</span>
    </div>
  );
}

export function IntelliCodeLogo({ className = "" }: BrandLogoProps) {
  return (
    <p className={`text-base font-normal text-black ${className}`}>
      Intelli<span className="text-[#8b1010]">Code</span>
    </p>
  );
}

export function ExaltedLogo({ className = "" }: BrandLogoProps) {
  return (
    <Image
      src="/images/exalted-logo.png"
      alt="Exalted Coding & Packing Solutions"
      width={120}
      height={36}
      className={`h-9 w-auto max-w-[7.5rem] object-contain ${className}`}
    />
  );
}
