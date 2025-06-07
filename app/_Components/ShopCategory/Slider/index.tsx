"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.style.css";
import styles from "./style.module.css";

import { Navigation, Pagination } from "swiper/modules";
import { useResponsive } from "@/hooks/useResponsive";
const SliderCategory = ({
  data,
}: {
  data: { name: string; image: string }[];
}) => {
  const { isMobile } = useResponsive();
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        navigation={isMobile ? false : true}
        modules={[Navigation, Pagination]}
        className={styles.slider}
        slidesPerView={isMobile ? 1 : 5}
      >
        {data.map((item, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <div className={styles.slide_frame}>
              <img loading="lazy" src={item.image} alt="image product" />
            </div>
            <h4>{item.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SliderCategory;
