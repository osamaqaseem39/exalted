import type { ProductSpecSection } from "@/data/products";

function HollowBullet() {
  return (
    <span
      className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full border border-black/40"
      aria-hidden
    />
  );
}

type ProductSpecListProps = {
  sections: ProductSpecSection[];
  compact?: boolean;
};

export default function ProductSpecList({ sections, compact = false }: ProductSpecListProps) {
  return (
    <div className={compact ? "space-y-5" : "space-y-7"}>
      {sections.map((section) => (
        <section key={section.title}>
          <h3 className="mb-3 border-b border-[#fee2e2] pb-2 text-xs font-normal tracking-[0.12em] text-black">
            {section.title}
          </h3>
          <dl className="space-y-2.5">
            {section.specs.map((spec, index) => {
              const bulletOnly = spec.label.trim() === "";

              if (bulletOnly) {
                return (
                  <div
                    key={`${section.title}-${index}`}
                    className="flex gap-2 text-sm font-normal text-black"
                  >
                    <HollowBullet />
                    <span>{spec.value}</span>
                  </div>
                );
              }

              return (
                <div
                  key={`${section.title}-${spec.label}`}
                  className={`grid gap-x-4 ${compact ? "grid-cols-1 gap-y-1 sm:grid-cols-[130px_1fr]" : "grid-cols-1 gap-y-1 sm:grid-cols-[150px_1fr]"}`}
                >
                  <dt className="text-sm font-normal text-black">{spec.label}</dt>
                  <dd className="flex gap-2 text-sm font-normal text-black">
                    <HollowBullet />
                    <span>{spec.value}</span>
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>
      ))}
    </div>
  );
}
