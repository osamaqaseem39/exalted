"use client";

import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
};

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

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
          <textarea required rows={3} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Describe your requirements..." className={`${inputClass} resize-none`} />
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
