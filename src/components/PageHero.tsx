import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
  centered?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  backHref = "/",
  backLabel = "← Back to Home",
  centered = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#fee2e2] bg-gradient-to-br from-white via-[#fef2f2] to-white">
      <div className={`relative mx-auto max-w-6xl px-6 py-14 md:py-20 ${centered ? "text-center" : ""}`}>
        <Link
          href={backHref}
          className={`inline-flex items-center gap-1 text-xs font-normal text-black transition hover:opacity-70 ${centered ? "justify-center" : ""}`}
        >
          {backLabel}
        </Link>
        <p className="mt-6 text-xs font-normal tracking-[0.25em] text-black">{eyebrow}</p>
        <h1 className={`mt-3 text-4xl font-normal leading-tight text-black md:text-5xl ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>
          {title}
        </h1>
        <p className={`mt-5 text-base text-black/80 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{description}</p>
      </div>
    </section>
  );
}
