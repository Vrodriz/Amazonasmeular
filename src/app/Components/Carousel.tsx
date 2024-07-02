"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface CarouselProps {
  slides: {
    type: string;
    content: any;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "image" && (
              <img
                className="w-full h-auto"
                src={slide.content.src}
                alt={slide.content.alt}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
