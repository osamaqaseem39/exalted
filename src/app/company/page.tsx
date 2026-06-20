import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PharmaTrackTraceSection from "@/components/PharmaTrackTraceSection";
import PrincipalsSection from "@/components/PrincipalsSection";
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
    <div className="flex min-h-screen flex-col bg-white text-black">
      {/* Hero */}
      <section className="border-b border-[#fee2e2] bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-normal text-black transition hover:opacity-70"
            >
              ← Back to Home
            </Link>
            <p className="mt-6 text-xs font-normal tracking-[0.25em] text-black">Company</p>
            <h1 className="mt-3 text-4xl font-normal leading-tight text-black md:text-5xl">About Exalted</h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-black/80">
              A prominent player in industrial coding, inspection, and packing machines — backed by global
              technology partners and a commitment to customer support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
              >
                Get in Touch
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
              >
                Our Products
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src="/images/hero-pharma-serialization.png"
              alt="Pharma serialization and track and trace production line"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent lg:from-white/40" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/30 bg-white/90 p-4 backdrop-blur-sm md:left-auto md:right-8 md:max-w-xs">
              <p className="text-xs font-normal tracking-wide text-black">Since establishment</p>
              <p className="mt-1 text-sm text-black/70">
                Trusted partner for coding, inspection &amp; pharma serialization across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* About */}
      <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-normal text-black md:text-4xl">Who We Are</h2>
            <div className="mt-4 h-px w-16 bg-[#fee2e2]" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-black/80">
              {companyProfileParagraphs.map((para, i) => (
                <p key={i}>
                  {i === 0 ? (
                    <>
                      <span className="font-normal text-black">
                        Exalted Coding &amp; Packing Solutions (ECPS){" "}
                      </span>
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
                    <dt className="text-xs font-normal tracking-wide text-black/50">
                      {item.label}
                    </dt>
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

      <PrincipalsSection />

      <PharmaTrackTraceSection />

      {/* CTA */}
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

      <Footer />
    </div>
  );
}
