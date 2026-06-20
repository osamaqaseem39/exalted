import Link from "next/link";
import SolutionCards from "@/components/SolutionCards";

export default function SolutionsSection() {
  return (
    <section
      id="solutions-section"
      className="mx-auto mt-12 max-w-6xl px-6 md:mt-16"
    >
      <div className="text-center">
        <h2 className="text-4xl font-normal text-black md:text-5xl">Solutions we offer</h2>
        <div className="mx-auto mt-4 h-px w-20 bg-[#fee2e2]" />
        <p className="mx-auto mt-8 max-w-3xl text-lg text-black md:text-xl">
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
