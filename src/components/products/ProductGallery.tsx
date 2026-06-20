"use client";

import Image from "next/image";
import { useState } from "react";
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
      <div className="flex min-h-[320px] items-center justify-center border border-[#e5e5e5] bg-white p-6 md:min-h-[380px]">
        <Image
          src={activeImage}
          alt={alt}
          width={520}
          height={420}
          className="max-h-[300px] w-auto object-contain md:max-h-[340px]"
          priority
        />
      </div>
      {galleryImages.length > 1 && (
        <div className="mt-3 flex gap-2">
          {galleryImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="flex h-16 w-16 items-center justify-center border bg-white p-1 transition"
              style={{
                borderColor: activeIndex === index ? productTheme.text : productTheme.border,
              }}
            >
              <Image src={src} alt="" width={56} height={56} className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      )}
      {galleryImages.length === 1 && (
        <div className="mt-3 flex gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="flex h-16 w-16 items-center justify-center border bg-white p-1"
              style={{
                borderColor: index === 0 ? productTheme.text : productTheme.border,
                opacity: index === 0 ? 1 : 0.6,
              }}
            >
              <Image src={galleryImages[0]} alt="" width={56} height={56} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
