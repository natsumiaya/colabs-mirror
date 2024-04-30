"use client";
import { FC, useEffect } from "react";
import Flickity from "flickity";

type statsProps = {
  data: any[];
};

const BlogContentSlider: FC<statsProps> = ({ data }) => {
  useEffect(() => {
    const comp = document.querySelector(
      ".blog_slider_content_slider"
    ) as HTMLElement;
    new Flickity(comp, {
      autoPlay: 3000,
      prevNextButtons: false,
      draggable: false,
      wrapAround: true,
      cellAlign: "center",
      pauseAutoPlayOnHover: false
    });
    require("./blog_content_slider.css");
  }, []);

  return (
    <div className="blog_slider_content_slider">
      {data.map((datum, index) => (
        <div key={index} className="blog_slider_detail flickity-cell">
          <div className="blog_slider_category pill">{datum.tag}</div>
          <h4>{datum.title}</h4>
          <div className="blog_slider_description">{datum.description}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogContentSlider;
