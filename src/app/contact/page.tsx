import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import OfficesScrollMap from "@/components/OfficesScrollMap";
import PageHero from "@/components/PageHero";
import { offices } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Exalted Coding & Packing Solutions",
  description: "Contact Exalted — Karachi and Lahore offices, email, WhatsApp, and inquiry form.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact us"
        description="Reach our sales and support teams in Karachi or Lahore. We respond to equipment inquiries, technical support, and partnership requests."
      />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <article className="rounded-2xl border border-[#fee2e2] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-normal text-black">{offices.karachi.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-black">{offices.karachi.address}</p>
              <a
                href={`tel:${offices.karachi.phone.replace(/-/g, "")}`}
                className="mt-3 block text-sm font-normal text-black transition hover:text-black"
              >
                {offices.karachi.phone}
              </a>
              <a
                href={offices.karachi.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-full bg-[#e31e24] px-4 py-1.5 text-xs font-normal text-white transition hover:bg-[#c41a20]"
              >
                WhatsApp
              </a>
            </article>

            <article className="rounded-2xl border border-[#fecaca] bg-[#fef2f2] p-6 shadow-sm">
              <p className="text-xs font-normal text-black">Head office</p>
              <h2 className="mt-1 text-lg font-normal text-black">{offices.lahore.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-black">{offices.lahore.address}</p>
              <a
                href={`mailto:${offices.lahore.email}`}
                className="mt-3 block text-sm font-normal text-black transition hover:text-black"
              >
                {offices.lahore.email}
              </a>
              <a
                href={offices.lahore.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-black transition hover:text-black"
              >
                www.exalted.com.pk
              </a>
            </article>

            <div className="rounded-2xl border border-[#fee2e2] bg-white p-6">
              <h3 className="text-sm font-normal text-black">Business hours</h3>
              <p className="mt-2 text-sm text-black">Monday – Saturday: 9:00 AM – 6:00 PM (PKT)</p>
              <p className="mt-1 text-sm text-black">Technical support available for installed equipment.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#fee2e2] bg-white p-6 shadow-sm lg:col-span-3">
            <h2 className="text-xl font-normal text-black">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-black">
              Fill out the form and we will get back to you. Required fields are marked with *.
            </p>
            <div className="mt-5">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#fee2e2] bg-[#fef2f2]">
        <div className="px-4 py-10 text-center sm:px-6 sm:py-12">
          <h2 className="text-3xl font-normal text-black md:text-4xl">Find Us</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-[#fee2e2]" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-black md:text-base">
            Swipe or use the side arrows to browse our Lahore head office and Karachi office.
          </p>
        </div>
        <OfficesScrollMap />
      </section>

      <Footer />
    </div>
  );
}
