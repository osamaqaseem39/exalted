import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import SectionHeading from "@/components/layout/SectionHeading";
import SplitHero from "@/components/layout/SplitHero";
import StatsStrip from "@/components/layout/StatsStrip";
import TechnologyCards from "@/components/TechnologyCards";

export const metadata: Metadata = {
  title: "Technologies | Exalted Coding & Packing Solutions",
  description:
    "Industrial printing, laser marking, inkjet, labeling, verification, and automation technologies for production lines.",
};

const highlights = [
  { value: "10", label: "Technology areas" },
  { value: "12+", label: "Product lines" },
  { value: "8+", label: "Solution categories" },
  { value: "Global", label: "Principal partners" },
];

export default function TechnologiesPage() {
  return (
    <PageShell>
      <SplitHero
        eyebrow="Printing & Marking"
        title="Technologies"
        description="From thermal inkjet and laser marking to code verification and line automation — find the right technology for your substrate, speed, and compliance needs."
        image="/images/technologies-reference.png"
        imageAlt="Exalted industrial printing and marking technologies"
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/products", label: "View Products" }}
        overlay={{
          title: "Right technology, right line",
          description: "Coding, inspection & marking systems matched to your production environment.",
        }}
      />

      <StatsStrip items={highlights} />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          title="Technologies we offer"
          description="Select a technology to explore applications, features, and matched equipment."
        />
        <div className="mt-10">
          <TechnologyCards />
        </div>
      </section>

      <section className="border-t border-[#fee2e2] bg-[#fef2f2]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-16">
          <h2 className="text-2xl font-normal text-black md:text-3xl">Not sure which technology fits?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-black/70">
            Our sales engineers assess your substrate, line speed, and compliance requirements to recommend the
            right system.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
            >
              Request Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
