import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import TechnologyDetailClient from "@/components/TechnologyDetailClient";
import {
  getProductsForTechnology,
  getSolutionsForTechnology,
  getTechnologyBySlug,
  technologies,
} from "@/data/technologies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return technologies.map((technology) => ({ slug: technology.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const technology = getTechnologyBySlug(slug);
  if (!technology) return { title: "Technology Not Found" };
  return {
    title: `${technology.title} | Exalted Technologies`,
    description: technology.shortDescription,
  };
}

export default async function TechnologyDetailPage({ params }: Props) {
  const { slug } = await params;
  const technology = getTechnologyBySlug(slug);
  if (!technology) notFound();

  const relatedProducts = getProductsForTechnology(slug);
  const relatedSolutions = getSolutionsForTechnology(slug);

  return (
    <PageShell>
      <TechnologyDetailClient
        technology={technology}
        relatedProducts={relatedProducts}
        relatedSolutions={relatedSolutions}
      />
    </PageShell>
  );
}
