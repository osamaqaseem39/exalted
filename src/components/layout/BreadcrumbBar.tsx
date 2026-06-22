import Link from "next/link";

type BreadcrumbBarProps = {
  backHref: string;
  backLabel: string;
  trailing?: string;
};

export default function BreadcrumbBar({ backHref, backLabel, trailing }: BreadcrumbBarProps) {
  return (
    <div className="border-b border-[#fee2e2] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs text-black">
        <Link href={backHref} className="transition hover:opacity-70">
          {backLabel}
        </Link>
        {trailing ? <span className="text-black/60">{trailing}</span> : null}
      </div>
    </div>
  );
}
