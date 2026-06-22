import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import SectionHeading from "@/components/layout/SectionHeading";
import SplitHero from "@/components/layout/SplitHero";
import StatsStrip from "@/components/layout/StatsStrip";
import PharmaTrackTraceSection from "@/components/PharmaTrackTraceSection";
import BrandsSection from "@/components/BrandsSection";
import { companyProfileParagraphs } from "@/data/site";

export const metadata: Metadata = {
  title: "About & Company | Exalted Coding & Packing Solutions",
  description: "About Exalted — company profile, principals, and pharma track & trace expertise.",
};

const highlights = [
  { value: "2", label: "Offices in Pakistan" },
  { value: "12+", label: "Product lines" },
  { value: "7", label: "Global principals" },
  { value: "GMP", label: "Compliant solutions" },
];

export default function CompanyPage() {
  return (
    <PageShell>
      <SplitHero
        eyebrow="Company"
        title="About Exalted"
        description="A prominent player in industrial coding, inspection, and packing machines — backed by global technology partners and a commitment to customer support."
        image="/images/hero-pharma-serialization.png"
        imageAlt="Pharma serialization and track and trace production line"
        primaryCta={{ href: "/contact", label: "Get in Touch" }}
        secondaryCta={{ href: "/products", label: "Our Products" }}
        overlay={{
          title: "Since establishment",
          description: "Trusted partner for coding, inspection & pharma serialization across Pakistan.",
        }}
      />

      <StatsStrip items={highlights} />

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading title="Who We Are" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-black/80">
              {companyProfileParagraphs.map((para, i) => (
                <p key={i}>
                  {i === 0 ? (
                    <>
                      <span className="font-normal text-black">Exalted Coding &amp; Packing Solutions (ECPS) </span>
                      {para}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-28 rounded-2xl border border-[#fee2e2] bg-[#fef2f2] p-8">
              <h3 className="text-sm font-normal text-black">At a glance</h3>
              <dl className="mt-6 space-y-5">
                {[
                  { label: "Head Office", value: "Lahore, Pakistan" },
                  { label: "Regional Office", value: "Karachi, Pakistan" },
                  {
                    label: "Specialties",
                    value: "Coding, Inspection, Detection, Labeling, Serialization",
                  },
                  { label: "Partners", value: "IntelliCode, Famjet, NOW Systems, Xavis, Alphapack, SuperVision & Exalted" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-[#fee2e2] pb-4 last:border-0 last:pb-0">
                    <dt className="text-xs font-normal tracking-wide text-black/50">{item.label}</dt>
                    <dd className="mt-1 text-sm font-normal text-black">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/services"
                className="mt-8 inline-block text-sm font-normal text-black underline-offset-4 hover:underline"
              >
                Explore our services →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <BrandsSection variant="section" />

      <PharmaTrackTraceSection />

      <section className="border-t border-[#fee2e2] bg-[#fef2f2]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-16">
          <h2 className="text-2xl font-normal text-black md:text-3xl">Ready to work with Exalted?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-black/70">
            Speak with our team about coding, inspection, or pharma serialization for your production line.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-white"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
