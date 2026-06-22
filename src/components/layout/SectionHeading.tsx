type SectionHeadingProps = {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : "max-w-2xl"} ${className}`.trim()}>
      <h2 className="text-3xl font-normal text-black md:text-4xl">{title}</h2>
      <div className={`mt-4 h-px w-16 bg-[#fee2e2] ${centered ? "mx-auto" : ""}`} />
      {description ? (
        <p className={`mt-5 text-base text-black/80 ${centered ? "mx-auto max-w-2xl" : ""}`}>{description}</p>
      ) : null}
    </div>
  );
}
