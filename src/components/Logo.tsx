import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-9 w-auto md:h-10",
  md: "h-10 w-auto md:h-12",
  lg: "h-12 w-auto md:h-14",
};

export default function Logo({ size = "md", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src="/images/exalted-logo.png"
        alt="Exalted Coding & Packing Solutions"
        width={280}
        height={96}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
    </Link>
  );
}
