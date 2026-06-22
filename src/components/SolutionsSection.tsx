import Link from "next/link";
import SolutionCards from "@/components/SolutionCards";

export default function SolutionsSection() {
  return (
    <section id="solutions-section" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-normal text-black md:text-4xl">Solutions we offer</h2>
        <div className="mx-auto mt-4 h-px w-16 bg-[#fee2e2]" />
        <p className="mx-auto mt-5 max-w-2xl text-base text-black/80">
          Industrial coding, inspection, and software systems under one roof.
        </p>
      </div>

      <div className="mt-12">
        <SolutionCards />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/services"
          className="text-sm font-normal text-black underline-offset-4 hover:underline"
        >
          View all services &amp; sectors →
        </Link>
      </div>
    </section>
  );
}
