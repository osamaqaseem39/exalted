import { principalPartners, principals } from "@/data/site";

type Partner = (typeof principalPartners)[number];
type FeaturedPartner = Extract<Partner, { featured: true }>;

function isFeatured(partner: Partner): partner is FeaturedPartner {
  return "featured" in partner && partner.featured;
}

function partnerInitials(name: string) {
  const words = name.split(/\s+/);
  if (words.length === 1 && name.length >= 2) {
    return name.slice(0, 2).toUpperCase();
  }
  return words
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type PrincipalsSectionProps = {
  id?: string;
  reveal?: boolean;
  variant?: "default" | "embedded";
};

export default function PrincipalsSection({
  id = "principals",
  reveal = false,
  variant = "default",
}: PrincipalsSectionProps) {
  const featured = principalPartners.find(isFeatured);
  const partners = principalPartners.filter((p) => !isFeatured(p));
  const productCount = principals.length;
  const countryCount = new Set(
    principalPartners.filter((p) => p.region !== "Own Brand" && p.region !== "Exalted").map((p) => p.region)
  ).size;

  const sectionClass =
    variant === "embedded"
      ? ""
      : reveal
        ? "mt-20 translate-y-8 border-y border-[#fee2e2] bg-[#fafafa] py-16 opacity-0 transition-all duration-700 md:py-20"
        : "border-y border-[#fee2e2] bg-[#fafafa] py-16 md:py-20";

  return (
    <section id={id} data-reveal={reveal ? true : undefined} className={`scroll-mt-24 ${sectionClass}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-normal text-black/60">
            Global technology partners
          </p>
          <h2 className="mt-3 text-3xl font-normal text-black md:text-4xl lg:text-5xl">Our principals</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-[#fee2e2]" />
          <p className="mx-auto mt-5 max-w-2xl text-base text-black/70">
            World-renowned manufacturers and in-house brands we represent across Pakistan.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 md:mt-12">
          {[
            { value: String(principalPartners.length), label: "Partners" },
            { value: String(productCount), label: "Product lines" },
            { value: String(countryCount), label: "Countries" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#fee2e2] bg-white px-3 py-4 text-center shadow-sm sm:px-4"
            >
              <p className="text-2xl font-normal text-black md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[10px] font-normal tracking-wider text-black/50 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {featured && (
          <article className="relative mt-8 overflow-hidden rounded-3xl border border-[#fecaca] bg-white shadow-[0_8px_32px_rgba(139,16,16,0.08)] md:mt-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fef2f2] via-white to-white" aria-hidden />
            <div className="absolute left-0 top-0 h-full w-1.5 bg-[#8b1010]" aria-hidden />
            <div className="relative grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#8b1010] px-3 py-1 text-[10px] font-normal tracking-wide text-white">
                    Own brand
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-normal text-black md:text-3xl">{featured.name}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-black/60">
                  Exalted&apos;s proprietary coding and marking technology — engineered for demanding production
                  environments.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full border border-[#fee2e2] bg-white px-3 py-1.5 text-xs font-normal text-black"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl border border-[#fecaca] bg-[#8b1010] text-4xl font-normal tracking-tight text-white shadow-lg md:mx-0"
                aria-hidden
              >
                IC
              </div>
            </div>
          </article>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="group flex flex-col rounded-2xl border border-[#fee2e2] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:border-[#fecaca] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#fee2e2] bg-[#fef2f2] text-sm font-normal text-black transition group-hover:border-[#fecaca] group-hover:bg-[#fee2e2]">
                  {partnerInitials(partner.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-normal leading-tight text-black">{partner.name}</h3>
                    <span className="shrink-0 rounded-full bg-[#fef2f2] px-2.5 py-1 text-[10px] font-normal tracking-wide text-black/70">
                      {partner.region}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1 border-t border-[#fef2f2] pt-4">
                <p className="text-[10px] font-normal tracking-wider text-black/40">Represented products</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {partner.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-lg bg-[#fafafa] px-2.5 py-1.5 text-xs text-black/80 transition group-hover:bg-[#fef2f2]"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
