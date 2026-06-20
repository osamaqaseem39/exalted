import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#fee2e2] bg-gradient-to-br from-white via-[#fef2f2] to-white">
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs font-normal text-black transition hover:text-black"
        >
          ← Back to Home
        </Link>
        <p className="mt-4 text-sm font-normal text-black/60">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-normal leading-tight text-black md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-black md:text-base">{description}</p>
      </div>
    </section>
  );
}
