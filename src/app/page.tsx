"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import HomeProductsSection from "@/components/HomeProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import PharmaTrackTraceHome from "@/components/PharmaTrackTraceHome";
import PrincipalsSection from "@/components/PrincipalsSection";
import SolutionsSection from "@/components/SolutionsSection";
import TechnologiesSection from "@/components/TechnologiesSection";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
};

export default function Home() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFormChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formStatus !== "idle") setFormStatus("idle");
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Inquiry from ${formData.name} - Exalted Website`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nCompany: ${formData.company || "N/A"}\nProduct Interest: ${formData.product || "General"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@exalted.com.pk?subject=${subject}&body=${body}`;
    setFormStatus("success");
    setFormData({ name: "", email: "", phone: "", company: "", product: "", message: "" });
  };

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    const reveal = (el: Element) => {
      el.classList.add("opacity-100", "translate-y-0");
      el.classList.remove("opacity-0", "translate-y-8");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        reveal(el);
        return;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="overflow-hidden">
        <HeroSlider />

        <PharmaTrackTraceHome />

        <SolutionsSection />

        <HomeProductsSection />

        <TechnologiesSection />

        <PrincipalsSection id="principals-section" reveal />

        <IndustriesSection />

        <section
          id="contact-section"
          data-reveal
          className="mx-auto mt-12 max-w-5xl translate-y-8 px-6 opacity-0 transition-all duration-700"
        >
          <div className="overflow-hidden rounded-2xl border border-[#fee2e2] bg-white p-5 shadow-sm md:p-6">
            <div className="mb-5 border-b border-[#fee2e2] pb-4">
              <p className="text-xs font-normal text-black">Get in touch</p>
              <h3 className="mt-1 text-2xl font-normal text-black md:text-3xl">Contact us</h3>
              <p className="mt-2 max-w-xl text-sm text-black">
                Share your requirements and we&apos;ll recommend the right solution.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <form onSubmit={handleContactSubmit} className="rounded-xl border border-[#fee2e2] bg-[#fef2f2] p-4 md:p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs font-normal text-black">Full Name *</span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleFormChange("name", e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-[#fee2e2] bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#e31e24]"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-normal text-black">Email *</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFormChange("email", e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-[#fee2e2] bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#e31e24]"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-normal text-black">Phone</span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFormChange("phone", e.target.value)}
                      placeholder="+92 300 0000000"
                      className="w-full rounded-lg border border-[#fee2e2] bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#e31e24]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-normal text-black">Company</span>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleFormChange("company", e.target.value)}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-[#fee2e2] bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#e31e24]"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1 block text-xs font-normal text-black">Product Interest</span>
                    <select
                      value={formData.product}
                      onChange={(e) => handleFormChange("product", e.target.value)}
                      className="w-full rounded-lg border border-[#fee2e2] bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#e31e24]"
                    >
                      <option value="">Select category</option>
                      <option value="Serialization">Serialization & Track & Trace</option>
                      <option value="Printing">Printing Equipment</option>
                      <option value="Inspection">Machine Vision / X-Ray</option>
                      <option value="Detection">Metal Detection</option>
                      <option value="Weighing">Check Weighing</option>
                      <option value="Labelling">Labeling Machines</option>
                      <option value="Software">Software Solutions</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1 block text-xs font-normal text-black">Message *</span>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleFormChange("message", e.target.value)}
                      placeholder="Describe your requirements..."
                      rows={3}
                      className="w-full resize-none rounded-lg border border-[#fee2e2] bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#e31e24]"
                      required
                    />
                  </label>
                </div>

                {formStatus === "error" && (
                  <p className="mt-2 text-xs text-black">Please fill required fields.</p>
                )}
                {formStatus === "success" && (
                  <p className="mt-2 text-xs text-black">Thanks — your email client should open shortly.</p>
                )}

                <button
                  type="submit"
                  className="mt-4 rounded-lg bg-[#e31e24] px-5 py-2 text-sm font-normal text-white transition hover:bg-[#c41a20]"
                >
                  Send Message
                </button>
              </form>

              <div className="flex flex-col justify-between gap-3">
                <div className="rounded-xl border border-[#fee2e2] bg-[#fef2f2] p-4 text-sm">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-normal text-black">Karachi</h4>
                      <p className="mt-1 text-xs leading-relaxed text-black">
                        House#100, Block-AI Sector-31/D, Korangi, Karachi
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-normal text-black">Lahore (Head Office)</h4>
                      <p className="mt-1 text-xs leading-relaxed text-black">
                        949-B Block, Faisal Town, Lahore - 54770
                      </p>
                    </div>
                    <div className="space-y-1 text-xs">
                      <a href="mailto:info@exalted.com.pk" className="block text-black hover:text-black">
                        info@exalted.com.pk
                      </a>
                      <a href="https://wa.me/923028426797" className="block text-black hover:text-black">
                        +92-302-8426797
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="mailto:info@exalted.com.pk"
                    className="flex-1 rounded-lg border border-[#fecaca] py-2 text-center text-xs font-normal text-black transition hover:bg-[#fef2f2]"
                  >
                    Quote
                  </a>
                  <a
                    href="https://wa.me/923028426797"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-[#e31e24] py-2 text-center text-xs font-normal text-white transition hover:bg-[#c41a20]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
