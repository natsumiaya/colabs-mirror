"use client";
import { Children, FC, PropsWithChildren } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";

import "swiper/css";
import { Autoplay } from "swiper/modules";

const SwiperComponent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      className={styles.swiper_container}
      modules={[Autoplay]}
      spaceBetween={10}
      maxBackfaceHiddenSlides={0}
      slidesPerView={Children.count(children) - 1}
      loop
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true
      }}
      breakpoints={{
        320: {
          slidesPerView: 1
        },
        500: {
          slidesPerView: Children.count(children) - 1
        }
      }}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index} className={styles.swiper_cards}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
