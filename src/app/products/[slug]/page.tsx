import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import { getProductBySlug, products } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const aliasSlugs = Object.keys({
    "pipeline-metal-detector": true,
    "bulk-metal-detector": true,
    "nad4000-alcon": true,
    "x-ray-inspection-system": true,
    "famjet-pleyon-tij": true,
    "famjet-m5-tij": true,
    "automatic-check-weigher": true,
  });
  return [...products.map((product) => ({ slug: product.slug })), ...aliasSlugs.map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} | Exalted Products`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <PageShell>
      <ProductDetailClient product={product} />
    </PageShell>
  );
}
