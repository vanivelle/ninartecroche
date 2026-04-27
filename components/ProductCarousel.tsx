'use client';

import { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductCarouselProps {
  images: string[];
  category: string;
}

export function ProductCarousel({ images, category }: ProductCarouselProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, prev, next]);

  return (
    <>
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">{category}</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="w-full h-auto"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div
                className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg cursor-zoom-in"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={src}
                  alt={`${category} - Imagem ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold opacity-0 hover:opacity-100 bg-black bg-opacity-50 px-3 py-1 rounded-full">
                    Ver foto
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Fechar */}
          <button
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition-all z-10"
            onClick={closeLightbox}
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Anterior */}
          <button
            className="absolute left-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 transition-all z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Imagem */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${category} - Imagem ${lightboxIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
              priority
            />
          </div>

          {/* Próximo */}
          <button
            className="absolute right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 transition-all z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Contador */}
          <div className="absolute bottom-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
