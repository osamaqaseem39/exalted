import {
  AlphapackLogo,
  AnserU2Logo,
  ExaltedLogo,
  FamjetLogo,
  IntelliCodeLogo,
  MapleJetLogo,
  MarkemImajeLogo,
  NowSystemsLogo,
  XavisLogo,
} from "@/components/brand-logos";

/** Partner brands whose products appear in the Exalted catalog */
const brands = [
  { name: "NOW Systems", Logo: NowSystemsLogo },
  { name: "Famjet", Logo: FamjetLogo },
  { name: "Xavis", Logo: XavisLogo },
  { name: "Alphapack", Logo: AlphapackLogo },
  { name: "Markem-Imaje", Logo: MarkemImajeLogo },
  { name: "MapleJet", Logo: MapleJetLogo },
  { name: "Anser U2", Logo: AnserU2Logo },
  { name: "IntelliCode", Logo: IntelliCodeLogo },
  { name: "Exalted", Logo: ExaltedLogo },
];

type BrandsSectionProps = {
  variant?: "default" | "embedded" | "section";
  id?: string;
  reveal?: boolean;
};

export default function BrandsSection({
  variant = "default",
  id = "brands",
  reveal = false,
}: BrandsSectionProps) {
  const sectionClass =
    variant === "embedded"
      ? "border-y border-[#fee2e2] bg-white py-12 md:py-14"
      : variant === "section"
        ? reveal
          ? "translate-y-8 border-t border-[#fee2e2] bg-[#fafafa] py-16 opacity-0 transition-all duration-700 md:py-20"
          : "border-t border-[#fee2e2] bg-[#fafafa] py-16 md:py-20"
        : "border-t border-[#fee2e2] bg-[#fafafa] py-12 md:py-14";

  return (
    <section
      id={id}
      data-reveal={reveal ? true : undefined}
      className={`scroll-mt-24 ${sectionClass}`}
      aria-label="Our brands"
    >
      <div className="mx-auto max-w-6xl px-6">
        {variant === "section" ? (
          <div className="text-center">
            <p className="text-xs font-normal tracking-[0.25em] text-black/60">Global technology partners</p>
            <h2 className="mt-3 text-3xl font-normal text-black md:text-4xl">Our brands</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[#fee2e2]" />
            <p className="mx-auto mt-5 max-w-2xl text-base text-black/70">
              Manufacturers we represent — matched to the products in our catalog.
            </p>
          </div>
        ) : (
          <p className="text-center text-sm font-normal text-black/50">
            Manufacturers we represent across Pakistan
          </p>
        )}

        <ul
          className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 ${variant === "section" ? "mt-10 md:mt-12" : "mt-6"}`}
        >
          {brands.map(({ name, Logo }) => (
            <li key={name}>
              <div className="flex h-[4.5rem] items-center justify-center rounded-xl border border-[#fee2e2] bg-white px-3 transition hover:border-[#fecaca] hover:shadow-sm">
                <Logo className="scale-90 sm:scale-100" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
