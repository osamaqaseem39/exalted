import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import SolutionCards from "@/components/SolutionCards";
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
    <div className="flex min-h-screen flex-col bg-white text-black">
      {/* Hero with image */}
      <section className="border-b border-[#fee2e2] bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-normal text-black transition hover:opacity-70"
            >
              ← Back to Home
            </Link>
            <p className="mt-6 text-xs font-normal tracking-[0.25em] text-black">
              What We Deliver
            </p>
            <h1 className="mt-3 text-4xl font-normal leading-tight text-black md:text-5xl">
              Services &amp; sectors
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-black/80">
              End-to-end coding, inspection, and packaging solutions for every industry — from line assessment
              and installation to lifetime technical support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
              >
                Request Consultation
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
              >
                View Products
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src="/images/hero-production-floor.png"
              alt="Exalted industrial coding and packaging production line"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent lg:from-white/40" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/30 bg-white/90 p-4 backdrop-blur-sm md:left-auto md:right-8 md:max-w-xs">
              <p className="text-xs font-normal tracking-wide text-black">
                Industrial Excellence
              </p>
              <p className="mt-1 text-sm text-black/70">
                Coding, inspection &amp; packing systems for regulated production environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-[#fee2e2] bg-[#fef2f2]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:py-10">
          {highlights.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="text-2xl font-normal text-black md:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs font-normal tracking-wide text-black/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-normal text-black md:text-4xl">Solutions we offer</h2>
          <div className="mt-4 h-px w-16 bg-[#fee2e2]" />
          <p className="mt-5 text-base text-black/80">
            Equipment and software from world-renowned partners, integrated for your production environment.
          </p>
        </div>
        <div className="mt-10">
          <SolutionCards />
        </div>
      </section>

      {/* Lifecycle services */}
      <section className="border-y border-[#fee2e2] bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-normal text-black md:text-4xl">Lifecycle services</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[#fee2e2]" />
            <p className="mx-auto mt-5 max-w-2xl text-base text-black/80">
              Technical support of our installed base is our primary method of earning customer satisfaction.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, index) => (
              <article
                key={svc.title}
                className="relative rounded-2xl border border-[#fee2e2] bg-white p-6 pt-8"
              >
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

      {/* Sectors */}
      <section id="sectors" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-normal text-black md:text-4xl">Industries &amp; sectors</h2>
          <div className="mt-4 h-px w-16 bg-[#fee2e2]" />
          <p className="mt-5 text-base text-black/80">
            Solutions tailored to each industry&apos;s compliance requirements and production speeds.
          </p>
        </div>
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

      {/* Pharma + CTA */}
      <section className="border-t border-[#fee2e2] bg-[#fef2f2]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2 md:py-16">
          <div className="rounded-2xl border border-[#fee2e2] bg-white p-8">
            <p className="text-xs font-normal tracking-[0.2em] text-black/60">
              Pharma Track &amp; Trace
            </p>
            <h2 className="mt-3 text-2xl font-normal text-black">Serialization from Line to Patient</h2>
            <p className="mt-4 text-sm leading-relaxed text-black/70">
              Our in-house software development capability enables end-to-end pharma serialization and
              aggregation — from Level 1 devices on the production line to Level 4 enterprise reporting.
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
              Our sales engineers assess your line speed, compliance requirements, and budget to recommend
              the right equipment.
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

      <Footer />
    </div>
  );
}
