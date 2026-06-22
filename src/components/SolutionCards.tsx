import Link from "next/link";
import { getProductsForSolution, solutions } from "@/data/solutions";

function formatProductList(names: string[]) {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

function buildDescription(shortDescription: string, productNames: string[]) {
  if (productNames.length === 0) return shortDescription;
  return `${shortDescription} Includes ${formatProductList(productNames)}.`;
}

function getMainTitle(title: string) {
  return title.replace(/\s*\([^)]*\)/g, "").trim();
}

export default function SolutionCards() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
      {solutions.map((solution) => {
        const relatedProducts = getProductsForSolution(solution.slug);
        const description = buildDescription(
          solution.shortDescription,
          relatedProducts.map((product) => product.title)
        );

        return (
          <Link
            key={solution.slug}
            href={`/services/${solution.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-[#fee2e2] bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#fecaca] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
          >
            <div className="h-1 w-12 rounded-full bg-[#8b1010] transition group-hover:w-16" />
            <h3 className="mt-4 text-base !font-semibold leading-snug text-black md:text-lg">
              {getMainTitle(solution.title)}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-black/70 md:text-[15px]">{description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-normal text-[#8b1010] transition group-hover:gap-2">
              Learn more
              <span aria-hidden>→</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
