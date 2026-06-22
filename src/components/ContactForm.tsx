"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductBySlug, products } from "@/data/products";
import { getSolutionBySlug, solutions } from "@/data/solutions";
import { getIndustryBySlug, industries } from "@/data/industries";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
};

const productInterestOptions = [
  { value: "", label: "Select category" },
  { value: "Serialization", label: "Serialization & Track & Trace" },
  { value: "Printing", label: "Printing Equipment" },
  { value: "Inspection", label: "Machine Vision / X-Ray" },
  { value: "Detection", label: "Metal Detection" },
  { value: "Weighing", label: "Check Weighing" },
  { value: "Labelling", label: "Labeling Machines" },
  { value: "Software", label: "Software Solutions" },
] as const;

function mapTagToInterest(tag: string) {
  const allowed = productInterestOptions.map((o) => o.value);
  return allowed.includes(tag as (typeof allowed)[number]) ? tag : "";
}

function getPrefillFromParams(searchParams: URLSearchParams): Pick<ContactFormData, "product" | "message"> {
  const productParam = searchParams.get("product");
  const solutionParam = searchParams.get("solution");
  const industryParam = searchParams.get("industry");

  if (productParam) {
    const product =
      getProductBySlug(productParam) ?? products.find((p) => p.title === decodeURIComponent(productParam));
    if (product) {
      return {
        product: mapTagToInterest(product.tag),
        message: `I'm interested in a quote for ${product.title} (${product.brand}).\n\n${product.description}`,
      };
    }
  }

  if (solutionParam) {
    const decoded = decodeURIComponent(solutionParam);
    const solution = getSolutionBySlug(decoded) ?? solutions.find((s) => s.title === decoded);
    if (solution) {
      let interest = solution.productCategory ? mapTagToInterest(solution.productCategory) : "";
      if (!interest && solution.slug === "track-trace") interest = "Serialization";
      if (!interest && solution.slug === "software-solutions") interest = "Software";

      return {
        product: interest,
        message: `I'm interested in a quote for ${solution.title}.\n\n${solution.shortDescription}`,
      };
    }
    return { product: "", message: `I'm interested in a quote for ${decoded}.` };
  }

  if (industryParam) {
    const decoded = decodeURIComponent(industryParam);
    const industry = getIndustryBySlug(decoded) ?? industries.find((i) => i.name === decoded);
    const name = industry?.name ?? decoded;
    return {
      product: "",
      message: `I'm interested in equipment and solutions for the ${name} industry.`,
    };
  }

  return { product: "", message: "" };
}

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const prefill = getPrefillFromParams(searchParams);
    if (!prefill.product && !prefill.message) return;

    setFormData((prev) => ({
      ...prev,
      product: prefill.product || prev.product,
      message: prefill.message || prev.message,
    }));
  }, [searchParams]);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formStatus !== "idle") setFormStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  const inputClass =
    "w-full rounded-lg border border-[#fee2e2] bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#8b1010]";

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "rounded-xl border border-[#fee2e2] bg-[#fef2f2] p-4 md:p-5"}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-normal text-black">Full Name *</span>
          <input type="text" required value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-normal text-black">Email *</span>
          <input type="email" required value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@company.com" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-normal text-black">Phone</span>
          <input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+92 300 0000000" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-normal text-black">Company</span>
          <input type="text" value={formData.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Company name" className={inputClass} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-xs font-normal text-black">Product Interest</span>
          <select value={formData.product} onChange={(e) => handleChange("product", e.target.value)} className={inputClass}>
            {productInterestOptions.map((option) => (
              <option key={option.value || "default"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-xs font-normal text-black">Message *</span>
          <textarea required rows={6} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Describe your requirements..." className={`${inputClass} min-h-[9rem] resize-y`} />
        </label>
      </div>
      {formStatus === "error" && <p className="mt-2 text-xs text-black">Please fill required fields.</p>}
      {formStatus === "success" && <p className="mt-2 text-xs text-black">Thanks — your email client should open shortly.</p>}
      <button type="submit" className="mt-4 rounded-lg bg-[#8b1010] px-5 py-2 text-sm font-normal text-white transition hover:bg-[#6e0d0d]">
        Send Message
      </button>
    </form>
  );
}
