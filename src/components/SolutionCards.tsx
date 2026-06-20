import Link from "next/link";
import { getProductsForSolution, solutions } from "@/data/solutions";

export default function SolutionCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      {solutions.map((solution) => {
        const relatedProducts = getProductsForSolution(solution.slug);

        return (
          <article
            key={solution.slug}
            className="flex h-full flex-col rounded-3xl border border-[#fee2e2] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#fecaca] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] md:p-7"
          >
            <Link href={`/services/${solution.slug}`} className="group block">
              <div className="h-1 w-12 rounded-full bg-[#8b1010] transition group-hover:w-16" />
              <h3 className="mt-5 text-lg font-normal leading-snug text-black md:text-xl">
                {solution.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70 md:text-[15px]">
                {solution.shortDescription}
              </p>
            </Link>

            {relatedProducts.length > 0 && (
              <div className="mt-6 flex-1">
                <p className="text-xs font-normal text-black/45">Related products</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="rounded-full border border-[#fee2e2] bg-[#fef2f2] px-3.5 py-1.5 text-xs font-normal text-black transition hover:border-[#fecaca] hover:bg-[#fee2e2] hover:text-[#8b1010]"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              href={`/services/${solution.slug}`}
              className="mt-6 inline-flex items-center gap-1 text-sm font-normal text-black transition hover:translate-x-0.5 hover:text-[#8b1010]"
            >
              View details
              <span aria-hidden>→</span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
