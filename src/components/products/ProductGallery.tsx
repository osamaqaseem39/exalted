"use client";

import Image from "next/image";
import { useState } from "react";
import ProductImageFrame from "@/components/products/ProductImageFrame";
import { productTheme } from "@/components/products/productTheme";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const galleryImages = images.length > 0 ? images : ["/images/products/laser-printing-systems.jpeg"];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex] ?? galleryImages[0];

  return (
    <div>
      <ProductImageFrame
        src={activeImage}
        alt={alt}
        priority
        className="border border-[#fee2e2]"
        sizes="(max-width: 1024px) 100vw, 42vw"
      />
      {galleryImages.length > 1 && (
        <div className="mt-3 flex gap-2">
          {galleryImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative aspect-square h-16 w-16 overflow-hidden border bg-white"
              style={{
                borderColor: activeIndex === index ? productTheme.text : productTheme.border,
              }}
            >
              <Image src={src} alt="" fill className="object-cover object-center" sizes="64px" />
            </button>
          ))}
        </div>
      )}
      {galleryImages.length === 1 && (
        <div className="mt-3 flex gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="relative aspect-square h-16 w-16 overflow-hidden border bg-white"
              style={{
                borderColor: index === 0 ? productTheme.text : productTheme.border,
                opacity: index === 0 ? 1 : 0.6,
              }}
            >
              <Image src={galleryImages[0]} alt="" fill className="object-cover object-center" sizes="64px" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
