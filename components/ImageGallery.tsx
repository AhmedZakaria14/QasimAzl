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
          <div 
            key={i} 
            className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-md"
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white bg-blue-600/80 px-4 py-2 rounded-lg font-medium backdrop-blur-sm">
                تكبير الصورة
              </span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map(img => ({ src: img.src, alt: img.alt }))}
        carousel={{ finite: false }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
      />
    </>
  );
}
