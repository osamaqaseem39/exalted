import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries | Exalted Coding & Packing Solutions",
  description: "Industry-specific coding, inspection, and packaging solutions for beverage, food, pharma, and more.",
};

export default function IndustriesIndexPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <section className="border-b border-[#fee2e2] bg-[#f4f6f8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Link href="/" className="text-xs text-black transition hover:opacity-70">
            ← Back to Home
          </Link>
          <h1 className="mt-6 text-4xl font-normal text-black md:text-5xl">Industries we serve</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-black/75">
            Explore sector-specific equipment, solutions, and applications tailored to your production environment.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group overflow-hidden rounded-3xl border border-[#fee2e2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] bg-white">
              <Image
                src={industry.heroImage}
                alt={industry.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-normal text-black">{industry.name}</h2>
              <p className="mt-2 text-sm text-black/70">{industry.shortDescription}</p>
              <span className="mt-4 inline-block text-sm text-black">Explore sector →</span>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
}
