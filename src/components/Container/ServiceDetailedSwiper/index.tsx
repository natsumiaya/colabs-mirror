"use client";
import { FC, useState, useRef } from "react";
import styles from "./index.module.css";
import ServiceDetailedCard from "../ServiceDetailedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import Link from "next/link";
import { formatTitleToLowerCase } from "@/app/utils/formatter";

const colorPrimaryScheme = ["#bed2f5", "#dcb688", "#d9db4d", "#bfb9e3"];
const colorSecondaryScheme = ["#0046c7", "#b1653b", "#66662a", "#5757a5"];

const ServiceDetailedSwiper: FC<{ data: any[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType>();

  const onActiveIndexChange = (data: any) => {
    console.log(data);
    setActiveIndex(data.activeIndex);
  };

  return (
    <div className={`container ${styles.service_cards_container}`}>
      <ul className={styles.service_selection_container}>
        {data.map((datum, index) => (
          <li
            key={`service-selection-${index}`}
            className={`${styles.service_selection}`}
            style={{
              borderColor: colorPrimaryScheme[index],
              backgroundColor:
                activeIndex === index
                  ? colorPrimaryScheme[index]
                  : "transparent",
            }}
            onClick={() => swiperRef.current?.slideTo(index)}
          >
            <span>{datum.title}</span>
          </li>
        ))}
      </ul>
      <div className={styles.service_cards_outer}>
        <Swiper
          modules={[Autoplay, EffectCards]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          onActiveIndexChange={onActiveIndexChange}
          effect={"cards"}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((datum, index) => (
            <SwiperSlide
              key={`service-detail-${index}`}
              className={`${styles.service_card}`}
            >
              <Link
                href={`https://colabs.com.au${datum.url}`}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <span>
                  <ServiceDetailedCard
                    tagline={datum.description_tagline}
                    description={datum.description}
                    image={`serviceShowcase/${index + 1}.jpg`}
                    alt={datum.alt || `${formatTitleToLowerCase(datum.title)}-image`}
                    style={{
                      backgroundColor: colorPrimaryScheme[index],
                    }}
                    highlightColor={colorSecondaryScheme[index]}
                  />
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceDetailedSwiper;
