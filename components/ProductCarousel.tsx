import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductCarouselProps {
  images: string[];
  category: string;
}

export function ProductCarousel({ images, category }: ProductCarouselProps) {
  return (
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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full h-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`${category} - Imagem ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
