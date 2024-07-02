"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';



function Carousel() {
  const [images, setImages] = useState([]);
  const baseUrl = "https://izns3lor5g.execute-api.us-east-1.amazonaws.com";

  useEffect(() => {
    fetch(baseUrl + "/api/hero-section?populate=deep,99")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImages(data.data.attributes.hero.hero_photo)
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{delay:4000}}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image: any, index) => (
          <SwiperSlide key={index}>
            <img  className="w-full h-auto" src={baseUrl + image.img.data.attributes.formats.large.url} alt={image.img.data.attributes.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Carousel;