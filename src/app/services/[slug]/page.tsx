import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import SolutionDetailClient from "@/components/SolutionDetailClient";
import { getProductsForSolution, getSolutionBySlug, solutions } from "@/data/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solution Not Found" };
  return {
    title: `${solution.title} | Exalted Services`,
    description: solution.shortDescription,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const relatedProducts = getProductsForSolution(slug);

  return (
    <PageShell>
      <SolutionDetailClient solution={solution} relatedProducts={relatedProducts} />
    </PageShell>
  );
}
