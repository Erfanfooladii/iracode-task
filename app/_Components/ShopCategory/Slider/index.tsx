"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./style.module.css";

import { Navigation } from "swiper/modules";
const SliderCategory = ({
  data,
}: {
  data: { title: string; img: string }[];
}) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.slider}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt="image product" />
            <h4>{item.title}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SliderCategory;
