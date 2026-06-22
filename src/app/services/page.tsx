import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import SectionHeading from "@/components/layout/SectionHeading";
import SplitHero from "@/components/layout/SplitHero";
import StatsStrip from "@/components/layout/StatsStrip";
import SolutionCards from "@/components/SolutionCards";
import BrandsSection from "@/components/BrandsSection";
import { sectors, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & Sectors | Exalted Coding & Packing Solutions",
  description:
    "Industrial solutions, lifecycle services, and sector expertise — pharma, food, FMCG, and manufacturing.",
};

const highlights = [
  { value: "8+", label: "Solution categories" },
  { value: "6", label: "Industry sectors" },
  { value: "24/7", label: "Support commitment" },
  { value: "Global", label: "Technology partners" },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <SplitHero
        eyebrow="What We Deliver"
        title="Services & sectors"
        description="End-to-end coding, inspection, and packaging solutions for every industry — from line assessment and installation to lifetime technical support."
        image="/images/hero-production-floor.png"
        imageAlt="Exalted industrial coding and packaging production line"
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/products", label: "View Products" }}
        overlay={{
          title: "Industrial Excellence",
          description: "Coding, inspection & packing systems for regulated production environments.",
        }}
      />

      <StatsStrip items={highlights} />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          title="Solutions we offer"
          description="Equipment and software from world-renowned partners, integrated for your production environment."
        />
        <div className="mt-10">
          <SolutionCards />
        </div>
      </section>

      <section className="border-y border-[#fee2e2] bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Lifecycle services"
            description="Technical support of our installed base is our primary method of earning customer satisfaction."
            centered
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, index) => (
              <article key={svc.title} className="relative rounded-2xl border border-[#fee2e2] bg-white p-6 pt-8">
                <span className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-[#8b1010] px-3 py-1 text-[10px] font-normal tracking-wide text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-normal text-black">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/70">{svc.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sectors" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:py-20">
        <SectionHeading
          title="Industries & sectors"
          description="Solutions tailored to each industry's compliance requirements and production speeds."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.name}
              className="group flex flex-col rounded-2xl border border-[#fee2e2] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-black transition group-hover:w-14" />
              <h3 className="text-lg font-normal text-black">{sector.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-black/70">{sector.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2 border-t border-[#fef2f2] pt-4">
                {sector.solutions.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[#fee2e2] bg-[#fef2f2] px-3 py-1 text-[11px] font-normal text-black"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <BrandsSection variant="embedded" />

      <section className="border-t border-[#fee2e2] bg-[#fef2f2]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2 md:py-16">
          <div className="rounded-2xl border border-[#fee2e2] bg-white p-8">
            <p className="text-xs font-normal tracking-[0.2em] text-black/60">Pharma Track &amp; Trace</p>
            <h2 className="mt-3 text-2xl font-normal text-black">Serialization from Line to Patient</h2>
            <p className="mt-4 text-sm leading-relaxed text-black/70">
              Our in-house software development capability enables end-to-end pharma serialization and aggregation — from
              Level 1 devices on the production line to Level 4 enterprise reporting.
            </p>
            <Link
              href="/company#pharma-track-trace"
              className="mt-6 inline-block text-sm font-normal text-black underline-offset-4 hover:underline"
            >
              Learn about pharma capabilities →
            </Link>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-[#fecaca] bg-white p-8 text-center md:text-left">
            <h3 className="text-xl font-normal text-black">Not sure which solution fits?</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Our sales engineers assess your line speed, compliance requirements, and budget to recommend the right
              equipment.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
              >
                Request Consultation
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-[#fecaca] px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
