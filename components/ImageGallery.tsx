"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 mb-16">
        {images.map((image, i) => (
          <button
            type="button"
            key={i}
            className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-md text-right focus:outline-none focus-visible:ring-4 focus-visible:ring-[#291686]/25"
            onClick={() => setIndex(i)}
            aria-label={`تكبير الصورة: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 group-focus-visible:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            <div className="gallery-overlay absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-center justify-center">
              <span className="gallery-label px-4 py-2 rounded-lg font-bold backdrop-blur-sm">تكبير الصورة</span>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map(img => ({ src: img.src, alt: img.alt }))}
        carousel={{ finite: false }}
        styles={{ container: { backgroundColor: "rgba(13, 7, 43, .96)" } }}
      />
    </>
  );
}
