import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import IndustryDetailClient from "@/components/IndustryDetailClient";
import { getIndustryBySlug, getOtherIndustries, industries } from "@/data/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.name} | Exalted Industries`,
    description: industry.shortDescription,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const others = getOtherIndustries(slug, 5);

  return (
    <PageShell>
      <IndustryDetailClient industry={industry} others={others} />
    </PageShell>
  );
}
