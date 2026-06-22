import Image from "next/image";

type ProductImageFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export default function ProductImageFrame({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 33vw",
  className = "",
  imageClassName = "",
}: ProductImageFrameProps) {
  return (
    <div className={`relative aspect-square w-full overflow-hidden bg-white ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover object-center ${imageClassName}`}
      />
    </div>
  );
}
