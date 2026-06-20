import {
  AlphapackLogo,
  AnserU2Logo,
  MapleJetLogo,
  MarkemImajeLogo,
  MicroscanLogo,
  NowSystemsLogo,
} from "@/components/brand-logos";

const brands = [
  { name: "Markem-Imaje", Logo: MarkemImajeLogo },
  { name: "NOW Systems", Logo: NowSystemsLogo },
  { name: "Microscan", Logo: MicroscanLogo },
  { name: "MapleJet", Logo: MapleJetLogo },
  { name: "Anser U2", Logo: AnserU2Logo },
  { name: "Alpha Pack", Logo: AlphapackLogo },
];

export default function FooterBrands() {
  return (
    <div className="mt-10 border-t border-[#fee2e2] pt-10">
      <p className="text-sm font-normal text-black/40">Our brands</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map(({ name, Logo }) => (
          <li key={name}>
            <div className="flex h-[4.5rem] items-center justify-center rounded-xl border border-[#fee2e2] bg-white px-3 transition hover:border-[#fecaca] hover:shadow-sm">
              <Logo className="scale-90 sm:scale-100" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
