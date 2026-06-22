import Image from "next/image";
import Link from "next/link";

type Cta = {
  href: string;
  label: string;
};

type SplitHeroProps = {
  backHref?: string;
  backLabel?: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  overlay?: {
    title: string;
    description: string;
  };
};

export default function SplitHero({
  backHref = "/",
  backLabel = "← Back to Home",
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  overlay,
}: SplitHeroProps) {
  return (
    <section className="border-b border-[#fee2e2] bg-white">
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:py-20">
          <Link href={backHref} className="inline-flex items-center gap-1 text-xs font-normal text-black transition hover:opacity-70">
            {backLabel}
          </Link>
          <p className="mt-6 text-xs font-normal tracking-[0.25em] text-black">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-normal leading-tight text-black md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-black/80">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryCta.href}
              className="rounded-full bg-[#8b1010] px-6 py-2.5 text-sm font-normal text-white transition hover:bg-[#6e0d0d]"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-full border border-[#fecaca] bg-white px-6 py-2.5 text-sm font-normal text-black transition hover:bg-[#fef2f2]"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[280px] lg:min-h-full">
          <Image src={image} alt={imageAlt} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent lg:from-white/40" />
          {overlay ? (
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/30 bg-white/90 p-4 backdrop-blur-sm md:left-auto md:right-8 md:max-w-xs">
              <p className="text-xs font-normal tracking-wide text-black">{overlay.title}</p>
              <p className="mt-1 text-sm text-black/70">{overlay.description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
