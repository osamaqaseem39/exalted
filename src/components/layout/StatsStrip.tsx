type Stat = {
  value: string;
  label: string;
};

type StatsStripProps = {
  items: Stat[];
};

export default function StatsStrip({ items }: StatsStripProps) {
  return (
    <section className="border-b border-[#fee2e2] bg-[#fef2f2]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:py-10">
        {items.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="text-2xl font-normal text-black md:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs font-normal tracking-wide text-black/60">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
