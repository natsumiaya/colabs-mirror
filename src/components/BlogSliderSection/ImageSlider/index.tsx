"use client";
import { FC, useEffect } from "react";
import Flickity from "flickity";
import Image from "next/image";

type statsProps = {
  data: any[];
};

const BlogImageSlider: FC<statsProps> = ({ data }) => {
  useEffect(() => {
    const comp = document.querySelector(
      ".blog_slider_image_slider"
    ) as HTMLElement;
    new Flickity(comp, {
      autoPlay: 3000,
      prevNextButtons: false,
      draggable: false,
      wrapAround: true,
      cellAlign: "center",
      pageDots: false,
      pauseAutoPlayOnHover: false,
    });
    require("./blog_image_slider.css");
  }, []);

  return (
    <div className="blog_slider_image_slider">
      {data.map((datum, index) => (
        <div className="slider_image" key={index}>
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: "1",
              border: "0px",
              margin: "0px",
              padding: "0px",
              position: "absolute",
              inset: "0px",
            }}
          >
            <Image
              src={datum.image}
              width={842}
              height={526}
              alt={datum.alt}
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default BlogImageSlider;
